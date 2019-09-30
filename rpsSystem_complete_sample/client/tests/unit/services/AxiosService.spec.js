import {post} from '../../../src/services/AxiosService';
import * as axios from 'axios';
import flushPromises from 'flush-promises';

describe('AxiosService.js', () => {
    it('axiosのpostメソッドからの返却値からdataを取り出し返す', async () => {
        const axiosPostSpyStub = jest.spyOn(axios, 'post').mockImplementation(() => {
            return Promise.resolve({
                data: {
                    testData: 'test'
                }
            })
        })

        await flushPromises()
        const returnVal = await post('rps', {p1: 'rock', p2: 'scissors'})

        expect(axiosPostSpyStub)
            .toHaveBeenCalledWith(
                'http://localhost:8080/api/rps',
                {p1: 'rock', p2: 'scissors'}
            )
        expect(returnVal).toEqual({
            testData: 'test'
        })
    });
});