"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const chai_1 = require("chai");
const HomePage_1 = __importDefault(require("../../pageObjects/HomePage"));
const selenium_webdriver_1 = require("selenium-webdriver");
require("chromedriver");
(0, cucumber_1.Before)(async function () {
    this.driver = await new selenium_webdriver_1.Builder()
        .forBrowser("chrome")
        .build();
    this.driver.manage().setTimeouts({ implicit: 30000 });
    this.driver.manage().window().maximize();
});
(0, cucumber_1.After)(async function () {
    this.driver.quit();
});
(0, cucumber_1.Given)('que acesso o site BlazeDemo', async function () {
    await this.driver.get("https://www.blazedemo.com");
    this.homePage = new HomePage_1.default(this.driver);
});
(0, cucumber_1.When)('seleciono origem como {string} e destino como {string}', async function (origem, destino) {
    await this.homePage.selecionarOrigemDestinoVoo(origem, destino);
});
(0, cucumber_1.Then)('carrega a pagina de reservas', async function () {
    chai_1.assert.equal(await this.homePage.lerTituloGuia(), "BlazeDemo - reserve");
});
