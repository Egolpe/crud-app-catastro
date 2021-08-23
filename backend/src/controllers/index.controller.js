const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123456",
  database: "catastro",
});

const getPredios = async (req, res) => {
  const response = await pool.query("SELECT * From predio");
  res.status(200).json(response.rows);
};

const getPredioById = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM predio WHERE predio_id = $1",
    [req.params.id]
  );
  res.json(response.rows);
};

const createPredios = async (req, res) => {
  const { avaluo, nombre, departamento, municipio } = req.body;

  const response = await pool.query(
    "INSERT INTO predio (avaluo, nombre, departamento, municipio) VALUES ($1, $2, $3 , $4)",
    [avaluo, nombre, departamento, municipio]
  );
  console.log(response);
  res.json({
    message: "Predio added Succesfully",
    body: {
      predio: { avaluo, nombre, departamento, municipio },
    },
  });
};

const updatePredio = async (req, res) => {
  const id = req.params.id;
  const { avaluo, nombre, departamento, municipio } = req.body;
  const response = await pool.query(
    "UPDATE predio SET avaluo = $1, nombre = $2, departamento = $3, municipio = $4 WHERE predio_id = $5",
    [avaluo, nombre, departamento, municipio, id]
  );
  console.log(response);
  res.json("Predio Updated Successfuly");
};

const deletePredio = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("DELETE FROM predio WHERE predio_id = $1", [
    id,
  ]);
  console.log(response);
  res.json(`Predio ${id} delete successfully`);
};

module.exports = {
  getPredios,
  getPredioById,
  createPredios,
  updatePredio,
  deletePredio,
};
