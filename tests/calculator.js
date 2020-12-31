let homepage = require('../pages/homepage');
describe('demo calculator tests', function(){

   it('addition tests', function(){

       // browser.get('http://juliemr.github.io/protractor-demo/');
       
        homepage.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('3');

       // element(by.model('second')).sendKeys('3');
       homepage.enterSecondNumber('4');
       
       //element(by.css('[ng-click="doAddition()"]')).click();
       homepage.clickGo();
       
        //let result = element(by.cssContainingText('.ng-binding', '5'));
        homepage.verifyResult('7');

        //expect(result.getText()).toEqual('5');

        browser.sleep(2000)
    });

    //TESTCASE 2

    it('addition tests', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('3');
        homepage.enterSecondNumber('4');
        homepage.clickGo1();
        homepage.verifyResult('7');
        browser.sleep(2000)
    });
});