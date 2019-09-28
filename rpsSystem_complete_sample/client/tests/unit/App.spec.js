import {shallowMount} from '@vue/test-utils';
import App from '../../src/App';

describe('App.vue', () => {
    it('RpsComponentが表示されていること', () => {
        const app = shallowMount(App)
        expect(app.find('Rps-stub').exists()).toBeTruthy()
    });
});