const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash")
const path = require('path')
const fileUpload = require('express-fileupload')

//Routers - importando rotas
const UsersRouter = require('./routes/UserRouter')
const AuthRouter = require("./routes/AuthRouter")
const AdminRouter = require('./routes/AdminRouter')
// View engine
app.set('view engine','ejs');
app.set('views', __dirname + '/views'); //Local onde vai ser salvo o file
app.use(express.static(path.join(__dirname, 'public')));//local dos arquivos estaticos

app.use(session({
    secret: "qualquercoisa", cookie: { maxAge: 30000000}
}))

app.use(flash());

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(fileUpload());//setando uso da biblioteca fileupload

//Routes
app.use("/", AuthRouter);
app.use("/user", UsersRouter);
app.use("/admin", AdminRouter);
// Router

    app.get("/", (req, res) => {
        res.render("index.ejs");
    })

// End Router
app.listen( 3000, () => {
    console.log("O servidor está rodando!")
})