var Database = require("../models/index");
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json')

class UserService{
    constructor(){//trazendo banco de dados para o arquivo
        this.mission = Database["enviomission"];                
    }
//função que salva missao no DB
    async store(envio){
        console.log("cheguei no service")

            try{
                await this.mission.create(envio);
                return null
            }catch(errors){
                console.log("erros: "+errors)
                return errors
            }
        }
    
    async listagem(equipe){
        try{
            var miss = [] 
            miss= await this.mission.findAll({where:{equipe:equipe}})
            console.log(miss)
            return miss
           }catch(err){
               console.log("falha na verificação "+err)
           }

    }
    
}
module.exports = new UserService();