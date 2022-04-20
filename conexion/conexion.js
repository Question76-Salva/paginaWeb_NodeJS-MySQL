// =====================
// === conexión bbdd ===
// =====================

// === importa dependencia | mysql ===
const mysql = require('mysql');

// === crear conexión | datos de conexión ===
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_ventas'
});

// === validación de conexión a la bbdd ===
connection.connect(
    (err) => {
        if (!err) { console.log("Conexión establecida");}
        else { console.log("Conexión fallida");}
    }    
);

// === exportar conexión bbdd ===
module.exports = connection;

// === crear consulta sql ===
// connection.query("SELECT * FROM productos", function(err, resultados) {
//     console.log(resultados);
// });

// === cerrar conexión ===
// connection.end();