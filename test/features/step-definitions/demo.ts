import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/, async function(){
    console.log("BEFORE OPENING");
    await browser.url("https://www.google.com");
    await browser.pause(2000);
    console.log("AFTER OPENING");
})

When(/^Search with (.*)$/, async function(searchItem) {
    console.log(`>> searchItem: $(searchItem)`);
    let ele = await $(`[name=q]`);
    await ele.setValue(searchItem);
    await browser.keys("Enter");
})

Then(/^Click on the first search result$/, async function(){
    let ele = await $(`<h3>`);
    await ele.click();
})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`>> expectedURL: $(expectedURL)`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL);
})