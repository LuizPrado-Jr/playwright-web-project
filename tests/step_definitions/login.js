const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given('Eu estou na pagina de login', async function () {
  await this.page.goto('https://front.serverest.dev/login');
});

When('Eu digito meu {string} e {string}', async function (email, senha) {
  await this.page.locator("[data-testid='email']").fill(email);
  await this.page.locator("[data-testid='senha']").fill(senha);
  await this.page.locator("[data-testid='entrar']").click();
});

Then('eu faco o login com sucesso', async function () {
  const tituloPagina = await this.page.locator('h1');
  await expect(tituloPagina).toContainText('Serverest Store');
});

Then('eu recebo uma mensagem de erro', async function () {
  const mensagemErro = await this.page.locator(".alert-dismissible");
  await expect(mensagemErro).toContainText('Email e/ou senha inválidos');
});