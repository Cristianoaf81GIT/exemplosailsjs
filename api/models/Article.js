/**
 * Article.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
/**
 *o model deve possuir chave: valor indicando o tipo do dado que sera persistido
 * */
module.exports = {

  attributes: {
    title: {
      type: 'string'
    },
    body: {
      type: 'string'
    }
  },
  datastore:'mongodb'

};

