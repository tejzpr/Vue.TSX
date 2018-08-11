import { Component, Vue } from 'vue-property-decorator';
import DefaultLayout from '@/components/Layouts/Default';

@Component
export default class Page401 extends Vue {
  private render(h: any) {
    return (
        <DefaultLayout>
            <b-row>
                <b-col cols='12'>
                    <h1 class='huge center'>
                    401
                    </h1>
                </b-col>
                <b-col cols='12' class='center bold error-page'>
                    You are not authorized to access this page!&nbsp;
                    <router-link to='/home'>Home</router-link>
                </b-col>
            </b-row>
        </DefaultLayout>
    );
  }
}
