
//Home Controller

module.exports = {
    
    //Funções de controlle
    
    index : function(req, res, next)
    {
        res.render('index', {title : 'Welcome to CRUD with Node.js'});
    }
}