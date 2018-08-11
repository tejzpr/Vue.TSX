import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Actions extends Vue {
    @Prop(String)
    public action: string;

    private render(h: any) {
    const out = (
        <div>
            <b-row>
                <b-col cols='12'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet leo mi. Cras ac neque sed
                justo molestie fermentum in id eros. Maecenas lectus dolor, ultrices malesuada ullamcorper a,
                lobortis vel ligula. Curabitur non lobortis lacus. In quis varius orci. Nam ac tempus ipsum.
                Nulla facilisi. Mauris aliquam justo vitae lorem feugiat mattis. Donec ac efficitur ligula.
                Nulla vel magna vitae eros mollis elementum. Nunc et nibh nibh. Maecenas posuere est at interdum
                mattis. Integer id quam vestibulum, aliquet neque sit amet, vestibulum magna. Nulla placerat,
                ante non scelerisque tristique, turpis libero facilisis felis, in venenatis ligula nunc vel nibh.
                Integer sollicitudin nunc non erat egestas molestie. Vestibulum rhoncus congue dolor id dapibus.
                </b-col>
            </b-row>
            <br/>
        </div>
    );

    return (
       out
    );
    }
}
