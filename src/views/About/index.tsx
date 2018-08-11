import { Component, Vue } from 'vue-property-decorator';
import DefaultLayout from '@/components/Layouts/Default';

@Component
export default class About extends Vue {
  private render(h: any) {
    return (
        <DefaultLayout>
            <div slot='navigation'>
            <b-row>
                <b-col cols='1'>
                    <router-link to='/home'>Home</router-link>
                </b-col>
                <b-col cols='1'>
                    <router-link to='/about/more'>More 404</router-link>
                </b-col>
            </b-row>
            </div>
            <b-row>
                <b-col cols='12'>
                    <router-view></router-view>
                </b-col>
            </b-row>
        </DefaultLayout>
    );
  }
}
