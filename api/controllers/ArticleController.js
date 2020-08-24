/**
 * ArticleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
/**
 * user comando npx sails generate api assim os controller e o model serao criados tambem,
 * nota: o model fica visivel de forma global o que pode ser modificado nas configuraçoes
 * */
module.exports = {
  list: function(req,res) {
    Article.find({}).exec(function(err,articles){
      if (err)
        res.send(500, {'erro':'Falha no banco de dados'})

        res.view('pages/list',{articles:articles})
    })
  },
  add: (req,res) => {
    res.view('pages/add')
  },
  create: (req, res) => {
    let title = req.body.title
    let body = req.body.body
    Article.create({title,body}).exec( (err) => {
      if (err)
        res.send(500, {'erro':'Falha no banco de dados'})

      res.redirect('/article/list')
    })
  },
  delete: (req,res) => {
    Article.destroy({id:req.params.id}).exec( (err) => {
      if(err)
        res.send(500, {'erro': 'Falha no banco de dados'})

      res.redirect('/article/list')  
    })
    return false
  },
  edit: (req,res) => {
    Article.findOne({id:req.params.id}).exec((err,article) => {
      if(err)
        res.send(500, {'erro': 'Falha no banco de dados'})
      
      res.view('pages/edit', {article})

    })
  },
  update: (req,res) => {
    let title = req.body.title
    let body = req.body.body
    
    Article.update({id: req.params.id}, {title,body}).exec( (err) => {
      if (err)
        res.send(500,{'erro':'Falha no banco de dados'})

      res.redirect('/article/list') 
    })
    
  }
};

