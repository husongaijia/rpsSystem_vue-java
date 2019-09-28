describe('rpsSystem', () => {
    it('p1,p2に入力してplay!を押下すると結果が返ってくる', () => {
        browser.url('http://localhost:8082')
        $('#p1').setValue('rock')
        $('#p2').setValue('paper')
        $('button').click()

        $('.result').waitForDisplayed()
        expect($('.result').getText()).toEqual('P2WINS!!')
    });
});