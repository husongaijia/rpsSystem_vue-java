import {post} from '../../../src/services/AxiosService';
import * as axios from 'axios';
import flushPromises from 'flush-promises';

describe('AxiosService.js', () => {
    describe('postメソッド', () => {
        it('axiosのpostメソッドをよんでいること', () => {
            const axiosPostSpy = jest.spyOn(axios, 'post')

            post('rps', {p1: 'rock', p2: 'scissors'})

            expect(axiosPostSpy)
                .toHaveBeenCalledWith(
                    'http://localhost:8080/api/rps',
                    {p1: 'rock', p2: 'scissors'}
                )
        });

        it('axiosのpostメソッドからの返却値からdataを取り出し返す', async () => {
            jest.spyOn(axios, 'post').mockImplementation(() => {
                return Promise.resolve({
                    data: {
                        testData: 'test'
                    }
                })
            })

            await flushPromises()
            const returnVal =  await post('rps', {p1: 'rock', p2: 'scissors'})

            expect(returnVal).toEqual({
                testData: 'test'
            })

        });
    });
});