// restaurantModel.js
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = {
  createRestaurantData: async function(restaurant_name, restaurant_picture) {
    try {
      const query = {
        text: "INSERT INTO restaurants (restaurant_name, restaurant_picture) VALUES ($1, $2)",
        values: [restaurant_name, restaurant_picture],
      };
      const res = await client.query(query);
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  deleteRestaurantData: async function(restaurant_id) {
    try {
      const query = {
        text: "DELETE FROM restaurants WHERE restaurant_id = $1",
        values: [restaurant_id],
      };
      const res = await client.query(query);
      return res.rowCount; // This will return the number of rows deleted.
    } catch (err) {
      console.error(err.stack);
    }
  },

  getRestaurantData: async function() {
    try {
      const res = await client.query("SELECT * FROM restaurants");
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  updateRestaurantData: async function(restaurant_id, restaurant_name, restaurant_picture) {
    try {
      const query = {
        text: "UPDATE restaurants SET restaurant_name = $2, restaurant_picture = $3 WHERE restaurant_id = $1",
        values: [restaurant_id, restaurant_name, restaurant_picture],
      };
      const res = await client.query(query);
      return res.rowCount; // This will return the number of rows updated.
    } catch (err) {
      console.error(err.stack);
    }
  }
};

client.connect();