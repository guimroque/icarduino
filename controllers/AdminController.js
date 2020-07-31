const AdminService = require("../services/AdminService")

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
    //ok
}

module.exports = new AdminController();