const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
const port = 3000;
const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb",
};

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Fabio')`;
connection.query(sql);
connection.end();

function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection(config);

    connection.query(sqlQry, (error, data, fields) => {
        if (error) console.log(error);
        else res.render("user-list", { title: "User List", userData: data });
        connection.end();
    });
}
// const sql = `INSERT INTO people(id,name) values(2,'Fabio Souza')`;

app.get("/", (req, res) => {
    execSQLQuery("SELECT * FROM people", res);
});

app.listen(port, () => {
    console.log("Rodando na porta " + port);
});
