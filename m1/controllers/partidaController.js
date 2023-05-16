const sql = require("../utils/db");

const countPartidas = (req, res) => {
  sql.query("SELECT COUNT(id) FROM partida", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const retrievePartidas = (req, res) => {
  sql.query("SELECT * FROM partida", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createPartida = (req, res) => {
  sql.query(
    "INSERT INTO partida (name) VALUES (?)",
    [req.body.name],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrievePartida = (req, res) => {
  sql.query(
    "SELECT * FROM partida WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deletePartida = (req, res) => {
  sql.query(
    "DELETE FROM partida WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Partida " + req.params.id + " successfully deleted");
    }
  );
};

const updatePartida = (req, res) => {
  sql.query(
    "UPDATE partida SET name = ? WHERE id = ?",
    [req.body.name, req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {
  countPartidas,
  retrievePartidas,
  createPartida,
  retrievePartida,
  updatePartida,
  deletePartida,
};