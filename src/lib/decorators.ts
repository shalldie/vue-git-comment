import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { i18n } from './i18n';
import { store } from './store';
import * as icons from '~/lib/icons';

@Component
class BaseComponent extends Vue {
    i = i18n;

    icons = icons;

    get store() {
        return store;
    }

    get state() {
        return this.store.state;
    }
}

export { Vue, Component, Prop, Watch, BaseComponent };
