var validacao = require('assert')
var { faker } = require('@faker-js/faker');

const { I, update_page } = inject()

Feature('Update User')

Scenario('Detalhes da Conta', async () => {

    var name = faker.person.firstName();
    var lastName = faker.person.lastName();


    I.amOnPage('https://automationpratice.com.br/my-account/customer-account-details')

    //home
    I.waitForText('Account details', 10)

    //update 
    update_page.accessUpdatePage()
    update_page.informations(name, lastName)


    //change details
    update_page.saveUpdates()

    //save update
    I.see('Profile')

});
