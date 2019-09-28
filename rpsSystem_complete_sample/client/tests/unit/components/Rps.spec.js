import {shallowMount} from '@vue/test-utils';
import Rps from '../../../src/components/Rps';
import * as AxiosService from '../../../src/services/AxiosService'
import flushPromises from 'flush-promises'

describe('Rps.vue', () => {
    let rps
    beforeEach(() => {
        rps = shallowMount(Rps)
    });

    it('p1のラベルとinputを表示する', () => {
        expect(rps.find('label[for="p1"]').text()).toEqual('p1')
        expect(rps.find('input[type="text"]#p1').exists()).toBeTruthy()
    });

    it('p2のラベルとinputを表示する', () => {
        expect(rps.find('label[for="p2"]').text()).toEqual('p2')
        expect(rps.find('input[type="text"]#p2').exists()).toBeTruthy()
    });

    it('play!ボタンを表示する', () => {
        expect(rps.find('button').text()).toEqual('play!')
    });

    it('inputに入力してplay!ボタンを押下するとaxiosServiceのpostメソッドが呼ばれる', () => {
        const axiosPostSpy = jest.spyOn(AxiosService, 'post')
        expect(rps.find('input[type="text"]#p1').setValue('rock'))
        expect(rps.find('input[type="text"]#p2').setValue('scissors'))

        rps.find('button').trigger('click')

        expect(axiosPostSpy).toHaveBeenCalledWith('rps', {p1: 'rock', p2: 'scissors'})
    });

    it('axiosServiceのpostメソッドから返ってきた値を表示する', async () => {
        jest.spyOn(AxiosService, 'post').mockImplementation(() => {
            return Promise.resolve({result: 'P1WINS'})
        })
        expect(rps.find('input[type="text"]#p1').setValue('rock'))
        expect(rps.find('input[type="text"]#p2').setValue('scissors'))

       rps.find('button').trigger('click')
        await flushPromises()

        expect(rps.find('.result').text()).toEqual('P1WINS')
    });
});