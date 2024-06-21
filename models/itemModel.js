// itemModel.js
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
  createItemData: async function(item, price, item_picture, restaurant_id) {
    try {;
      const query = {
        text: "INSERT INTO item (item, price, item_picture, restaurant_id) VALUES ($1, $2, $3, $4)",
        values: [item, price, item_picture, restaurant_id],
      };
      const res = await client.query(query);
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  deleteItemData: async function(item_id) {
    try {
      const query = {
        text: "DELETE FROM item WHERE item_id = $1",
        values: [item_id],
      };
      const res = await client.query(query);
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  getItemData: async function() {
    try {
      const res = await client.query("SELECT * FROM item");
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  updateItemData: async function(item_id, item, price, item_picture, restaurant_id) {
    try {
      const query = {
        text: "UPDATE item SET item = $2, price = $3, item_picture= $4, restaurant_id = $5 WHERE item_id = $1",
        values: [item_id, item, price, item_picture, restaurant_id],
      };
      const res = await client.query(query);
      return res.rowCount; // This will return the number of rows updated.
    } catch (err) {
      console.error(err.stack);
    }
  }
};

client.connect();