const { I } = inject();
var { faker } = require('@faker-js/faker');

module.exports = {

  fields: {
    firstName: '#f_name',
    lastName: '[placeholder="Dhoe"]',
    email: '#email_address',
    password: '#current_password',
    newPassword: '#new_password',
    rePassword: '#re_password'


  },

  button: {
    update: 'Update Account',
    saveUpdates: 'Update Information'
  },

  messages: {

  },

  accessUpdatePage() {
    I.click(this.button.update)
  },

  informations(name, lastName) {
    I.checkOption('[name="id_gender"][value="1"]')
    I.fillField(this.fields.firstName, name)
    I.fillField(this.fields.lastName, lastName)
    I.fillField(this.fields.email, faker.internet.email())
    I.fillField(this.fields.password, secret('123456'))
    I.fillField(this.fields.newPassword, secret('1234567'))
    I.fillField(this.fields.rePassword, secret('1234567'))
  },

  saveUpdates() {
    I.click(this.button.saveUpdates)
  }

}
