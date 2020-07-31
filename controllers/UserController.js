const UserService = require("../services/UserService")
const jwt = require('jsonwebtoken');
const secret = require('../config/auth.json')
class UserController{

    index(req, res){
        var data = new Date;
        res.render('user/index', {data:data});
    }

   
//receber missao
    //exibindo formulario missao
    async env(req, res){
        //listando envios e status
        var equipe;
        jwt.verify(req.session.token, secret.secret, (err, decoded)=>{
            equipe = decoded.nome;
            
        console.log(decoded)
        })
        var envios = await UserService.listagem(equipe)
        res.render('user/env', {envios:envios});
    }
    //pegando dados do formulário
    async store(req,res){
        var dado;
        jwt.verify(req.session.token, secret.secret, (err, decoded)=>{
                dado=decoded;         
        })
       
        var{nome , link, mission } = req.body;
        var envio = {
            equipe:dado.nome,
            link:link, 
            mission:mission,
            validate:null
        }
                console.log(envio.nome)
                //salvando dados do formulario
                try{
                     var result = await UserService.store(envio);
                     
                     res.redirect('/user/env')
                }catch(errors){
                    console.log("erros: "+errors)
                }
         
    }
}

module.exports = new UserController();