const express = require('express');
const cors = require('cors')
const dotenv = require("dotenv");
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const schema = {
    type: "object",
    properties: {
        foo: { type: "integer" },
        bar: { type: "string" }
    },
    required: ["foo"],
    additionalProperties: false
}


const TOKEN_SECRET = process.env.TOKEN_SECRET;

dotenv.config();
const app = express();
app.use(cors());
app.use((req, res, next) => {
    express.json()(req, res, err => {
        if (err) {
            return res.status(400).send({
                message: "Could not parse JSON"
            });
        }
        next();
    })
});

app.use(express.urlencoded({ extended: true }))

// Create an async pool object with promisified methods
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})
async function query(sql, params) {
    try {
        const [rows, fields] = await pool.execute(sql, params);
        return rows;
    } catch (error) {
        throw error;
    }
}
// Function to check the connection
async function checkConnection() {
    try {
        // Execute a simple query to check the connection
        await pool.query('SELECT 1');
        console.log('Connected to the MySQL server.');
    } catch (err) {
        console.error('Error connecting to MySQL server:', err);
    } finally {
        // Close the connection pool
    }
}
// Call the function to check the connection
checkConnection();

app.get('/todos', async function (req, res) {
    try {
        const sql = "SELECT * FROM todos where vorname like ?";
        var todos = await query(sql, ["%l%"]);
        console.log(todos);
        if (todos.length == 0) {
            res.status(404).json({
                status: 404,
                message: "keine Todos gefunden"
            });
            return;
        }
        //console.log(todos);
        var row = todos.length;
        res.status(200).json({
            status: 200,
            todos,
            row
        });
        return;
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err
        });
    }
    return;
});

// LOGIN
app.get('/user/login', async function (req, res) {
    data = req.body;
    let sql = "select username, password from user where username = ? and password = ?";
    const values = [req.body.username, req.body.password];
    try {
        const results = await query(sql, values);
        console.log("results", results);
        if (results.length === 0) {
            return res.status(409).json({ status: 409, message: "username oder password falsch" });
        }

        const token = generateAccessToken({ username: req.body.username });

        return res.status(201).json({
            token: token,
            status: 201,
            message: "erfolgreich eingeloggt und token erstellt"
        })
    } catch (err) {
        console.error("Database error:", err);
        return res.status(500).json({ status: 500, message: "Datenbankfehler: " + err.message });
    }
})

const validate = ajv.compile(schema)
// 
const data = {
    foo: 1,
    bar: "abc"
}
const valid = validate(data)
if (!valid) console.log(validate.errors)


// DELETE
app.delete('/todos/:id', async function (req, res) {
    data = req.body;
    let sql = "select username, password from user where username = ? and password = ?";
    const values = [req.body.username, req.body.password];
    try {
        const sql = "DELETE FROM todos.user WHERE username=?"
        const results = await query(sql, values);


    } catch (err) {
        console.error("Database error:", err);
        return res.status(500).json({ status: 500, message: "Datenbankfehler: " + err.message });
    }
})

// Token für User erstellen
function generateAccessToken(username) {

    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

//Token Überprüfung
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.status(401).json({ message: "kein token gefunden", status: 401 })
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "falscher token", status: 403 })
        req.user = user
        next()
    })
}

app.get('/', (req, res) => {
    res.send("hallo ihr schueler");
});
app.listen(3000, () => console.log("Example REST gestartet"));

///Zugriffe auf Pfade mit : 
// Apfrage mit Parameter  /hello?name=xxx
app.get('/hello', (req, res) => {
    res.send("hallo mein query ist:" + req.query.name);
});
// Abfrage mit Platzhalter in /hello/markus
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send("hallo mein Name ist auch " + req.params.name);
});
app.post('/hello/body', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});