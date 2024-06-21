const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST,                                                                                              port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = {
  createCourierData: async function(courier_name, phone_number, courier_picture) {
    try {
      const query = {
        text: "INSERT INTO courier (courier_name, phone_number, courier_picture) VALUES ($1, $2, $3)",
        values: [courier_name, phone_number, courier_picture],
      };
      const res = await client.query(query);
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  deleteCourierData: async function(courier_id) {
    try {
      const query = {
        text: "DELETE FROM courier WHERE courier_id = $1",
        values: [courier_id],
      };
      const res = await client.query(query);
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  getCourierData: async function() {
    try {
      const res = await client.query("SELECT * FROM courier");
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  updateCourierData: async function(courier_name, phone_number, courier_picture, courier_id) {
    try {
      const query = {
        text: "UPDATE courier SET courier_name = $1, phone_number = $2, courier_picture = $3 WHERE courier_id = $4",
        values: [courier_name, phone_number, courier_picture, courier_id],
      };
      const res = await client.query(query);
      return res.rowCount; // This will return the number of rows updated.
    } catch (err) {
      console.error(err.stack);
    }
  }
};

client.connect();