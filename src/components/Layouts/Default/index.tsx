import { Component, Vue, Prop } from 'vue-property-decorator';
import logo from '@/assets/img/logo.png';

@Component
export default class DefaultLayout extends Vue {
  constructor(props: any) {
    super(props);
  }
  private hasSlot(slotName: string) {
    if (typeof slotName === 'undefined') {
      slotName = 'default';
    }
    return !!this.$slots[slotName];
  }

  private async created(): Promise<void> {
    // DO something on create
  }

  private render(h: any): any {
    let navigation = null;
    if (this.hasSlot('navigation')) {
      navigation = (
        <b-row class='navigation'>
          <b-col cols='12'>
            {this.$slots.navigation}
          </b-col>
        </b-row>
      );
    }

    return (
      <b-container class='main-container' fluid>
        <b-row>
          <b-col cols='12'>
            <b-row class='header'>
              <b-col cols='1' sm='1' md='1' lg='1' class='logo'>
                <router-link to='/home'><img class='image img-fluid d-block mx-auto'
                src={logo}/></router-link>
              </b-col>
              <b-col cols='11' sm='11' md='11' lg='11' class='title'>Vue</b-col>
            </b-row>
            {navigation}
            <b-row class={ this.hasSlot('navigation') ? 'content min-height hasNav' : 'content min-height' }>
              <b-col cols='12'>
                {this.$slots.default}
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    );
  }
}
