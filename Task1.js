
const { element, by, browser } = require("protractor");

describe('angularjs homepage', function() {
    it('should find an element', async function() {
      browser.get('https://angular.io/');
      browser.manage().window().maximize();

       var a=await browser.getTitle();
       expect(a).toEqual('Angular');
       console.log( a);

      
    })

    it('should find an element', async function() {
    var b =await element(by.css('div.text-block>div.text-headline')).getText();
    expect(b).toEqual('DEVELOP ACROSS ALL PLATFORMS');
    console.log(b);

    element.all(by.css('aio-top-menu > ul>li')).get(3).click();
    for(i=0;i<=3;i++){
  var online=await element.all(by.css(' table > tbody > tr > td:nth-child(2)')).get(i).getText();            
 expect(online).toEqual('Online');
}
    })
})