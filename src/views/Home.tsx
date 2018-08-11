import { Component, Vue } from 'vue-property-decorator';
import {mapGetters} from 'vuex';
import DefaultLayout from '@/components/Layouts/Default';
import {notify, NotificationVariant} from '@/utils/notification';
import {startLoading, stopLoading, ILoader} from '@/utils/loader';

@Component({
  computed: {
    ...mapGetters( 'HomeStore', {
      homeTitle: 'getHomeTitle',
      homeDescription: 'getHomeDescription',
    }),
  },
})
export default class Home extends Vue {
  private homeTitle: string;
  private homeDescription: string;
  private mounted() {
    const loading: ILoader = startLoading('Loading indicator demo');
    notify({
      text: 'An Alert',
      variant: NotificationVariant.INFO,
      autoCloseInSeconds: 2,
    });
    setTimeout(() => {
      stopLoading(loading);
    }, 3000);
  }

  private render(h: any) {
    return (
      <DefaultLayout>
        <div slot='navigation'>
          <router-link to='/about'>About</router-link>
        </div>
        <div>
          <h1>{this.homeTitle}</h1>
          <p>{this.homeDescription}</p>
        </div>
      </DefaultLayout>
    );
  }
}
