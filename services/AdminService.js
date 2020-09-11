var Database = require("../models/index");
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json')

class AdminService{
    constructor(){//trazendo banco de dados para o arquivo
        this.mission = Database["enviomission"];
        this.dinossauro = Database["dinossauro"];            
    }
//função que salva missao no DB
    async validateM(){
        var miss = []
        miss = this.mission.findAll({where:{validar:null}})
        return miss;
    }
    async validar(mission){
        console.log('miss: '+mission.validate)
        if(mission.validate == 'Correto'){
            mission.validate = 1;
        }
        if(mission.validate == 'Errado'){
            mission.validate = 2;
        }
        console.log("validate: "+mission.validate)
        await this.mission.update({validar:mission.validate},{
            where: {
                id:mission.id
            }
        })

    }
    async adddino(dino){
        console.log("cheguei no service")
        console.log(dino)

        try{
            await this.dinossauro.create(dino);
            return null
        }catch(errors){
            console.log("erros: "+errors)
            return errors
        }
    }
}
module.exports = new AdminService();