import { Component, Vue } from 'vue-property-decorator';
import DefaultLayout from '@/components/Layouts/Default';

@Component
export default class Page404 extends Vue {
  private render(h: any) {
    return (
        <DefaultLayout>
            <b-row>
                <b-col cols='12'>
                    <h1 class='huge center'>
                    404
                    </h1>
                </b-col>
                <b-col cols='12' class='center bold error-page'>
                    The Requested path could not be found!&nbsp;
                    <router-link to='/home'>Home</router-link>
                </b-col>
            </b-row>
        </DefaultLayout>
    );
  }
}
