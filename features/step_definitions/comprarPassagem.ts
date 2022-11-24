import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { assert } from "chai";
import HomePage from "../../pageObjects/HomePage";
import { Builder } from "selenium-webdriver";
require("chromedriver");
 
Before(async function () {
    this.driver = await new Builder()
        .forBrowser("chrome")
        .build()
    this.driver.manage().setTimeouts({implicit: 30000})
    this.driver.manage().window().maximize()        
});

After(async function () {
    this.driver.quit()
})
    
Given('que acesso o site BlazeDemo', async function () {
    await this.driver.get("https://www.blazedemo.com")      
    this.homePage = new HomePage(this.driver)
});
       
When('seleciono origem como {string} e destino como {string}', async function (origem, destino) {   
    await this.homePage.selecionarOrigemDestinoVoo(origem, destino)
});

Then('carrega a pagina de reservas', async function () {
    assert.equal (await this.homePage.lerTituloGuia(), "BlazeDemo - reserve")      
});