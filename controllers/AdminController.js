const AdminService = require("../services/AdminService");
var generateSafeId = require('generate-safe-id');
const { User } = require("../services/AuthService");
const UserService = require("../services/UserService");

class AdminController{

    async index(req, res){
        var missions = await AdminService.validateM(); 
        res.render('admin/validate',{missions:missions});
    }
    async validar(req, res){
        var{id,  validate} = req.body;
        var mission = {
            id,
            validate,
        }
        var mission = await AdminService.validar(mission)
        res.redirect('/admin/missions')
    }
    async person(req, res){
        var dino = await UserService.findDino()
        res.render('admin/persons.ejs', {dino:dino})
    }
    async addperson(req, res){
        res.render('admin/addperson.ejs')
    }
    //adicionando dino
    async adddino(req, res){
        var code = generateSafeId();//gerando id unico
        var img_name=code+'.png';
        var file_img = req.files.img;
        var dino = {
            nome:req.body.nome,
            comprimento: req.body.comprimento,
            altura: req.body.altura,
            img:img_name,
            peso:req.body.peso,
            velocidade:req.body.velocidade,
            caracteristicas:req.body.caracteristicas,
        }
        console.log(dino)
        file_img.mv('public/img/'+img_name, function(err) {//salvando imagem, com o nome "code".mp4
        //envia para o banco de dados, apenas salvamos imagem com id gerado e usamos apenas o endereço para acessamor do BD.
            if (err)
              return res.status(500).send(err);
                 });
        try{
            await AdminService.adddino(dino);
            res.redirect('/admin/persons')
        }catch{

        }
    }
    //ok
}

module.exports = new AdminController();