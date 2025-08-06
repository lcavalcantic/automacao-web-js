var validacao = require('assert')
var { faker } = require('@faker-js/faker');

const { I } = inject();

Feature('Login');

BeforeSuite(() => {
    console.log('Antes de tudo')
});

Before(() => {
    I.amOnPage('/login')
});

After(() => {
    console.log('After');
});

AfterSuite(() => {
    console.log('Depois de tudo');
});

Scenario('Login com sucesso', async ({ login }) => {

    await login('user')

});

Scenario('Login inválido - campos vazios', ({ I }) => {
    I.amOnPage('/')
    I.click('Login')
    I.click('#btnLogin')
    I.see('E-mail inválido.')
})