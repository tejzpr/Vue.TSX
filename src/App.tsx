import { Component, Prop, Vue } from 'vue-property-decorator';
import {EventBus} from '@/utils/eventbus';
import {INotification} from '@/utils/notification';
import {ILoader} from '@/utils/loader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/css/app.less';

interface INotificationCustom extends INotification {
  showAlert: boolean|number;
}

@Component
export default class App extends Vue {
  private alertsQueue: INotificationCustom[] = [];
  private alertItems: JSX.Element[] = [];
  private loaderQueue: ILoader[] = [];
  private async created(): Promise<void> {
    EventBus.$on('notification', (data: INotificationCustom) => {
      if (data.autoCloseInSeconds) {
        data.showAlert = data.autoCloseInSeconds;
      } else {
        data.showAlert = true; // Does not auto close
      }
      if (!data.id) {
        data.id = (this as any).$uuid.v1();
      }
      if (!data.dismissed) {
        data.dismissed = (): void => {
          //
        };
      }
      this.alertsQueue.push(data);
    });

    EventBus.$on('start-loading', (data: ILoader) => {
      this.loaderQueue.push(data);
    });

    EventBus.$on('stop-loading', (data: ILoader) => {
      const loaderIdx = this.loaderQueue.findIndex((value: ILoader) => value.id === data.id);
      this.loaderQueue.splice(loaderIdx, 1);
    });

  }
  private render(h: any) {
    if (this.alertsQueue.length > 0)  {
      this.alertItems.push(...this.alertsQueue.map(
        (item: INotificationCustom) => <b-alert id={item.id} variant={item.variant} show={item.showAlert}
          fade dismissible { ...{ on: {dismissed: () => {
            item.dismissed ? item.dismissed() : (() => {
              //
            })();
            item.showAlert = false; } } } }>{item.text}</b-alert>));
      this.alertsQueue = [];
    }

    let loaderItem: JSX.Element = <div class='data-loader-holder' loading='' title='Data Loading..'></div>;
    if (this.loaderQueue.length > 0) {
      loaderItem =  <div class='data-loader-holder' title='Data Loading..'>
                      <div class='data-loader'>
                        <div></div><div></div><div></div>
                        <div></div><div></div><div></div>
                        <div></div><div></div><div></div>
                      </div>
                    </div>;
    }

    return (
      <div id='app'>
       {loaderItem}
        <div class='alert-holder'>{this.alertItems}</div>
        <router-view/>
      </div>
    );
  }
}
