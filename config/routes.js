/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  // mapeamento de rotas 'METODO URL': {view: 'NOME_DA_VIEW'}, ou 'METODO URL': 'CONTROLLER.FUNCTION'
  '/': { view: 'pages/homepage' },
  'GET /article/list': 'ArticleController.list',
  'GET /article/add': 'ArticleController.add',
  'POST /article/create': 'ArticleController.create',
  'GET /article/delete/:id': 'ArticleController.delete',
  'GET /article/edit/:id': 'ArticleController.edit',
  'POST /article/update/:id': 'ArticleController.update'



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
