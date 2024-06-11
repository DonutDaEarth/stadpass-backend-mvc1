// itemTransactionModel.js
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
  createItemTransactionData: async function(transaction_id, restaurant_id, item_id, quantity) {
    try {
      const query = {
        text: "INSERT INTO item_transactions (transaction_id, restaurant_id, item_id, quantity) VALUES ($1, $2, $3, $4)",
        values: [transaction_id, restaurant_id, item_id, quantity],
      };
      const res = await client.query(query);
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    } 
  },

  deleteItemTransactionData: async function(transaction_id) {
    try {
      const query = {
        text: "DELETE FROM item_transactions WHERE transaction_id = $1",
        values: [transaction_id],
      };
      const res = await client.query(query);
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    } 
  },

  getItemTransactionsData: async function() {
    try {
      await client.connect();
      const res = await client.query("SELECT * FROM item_transactions");
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  updateItemTransactionData: async function(transaction_id, restaurant_id, item_id, quantity, old_id) {
    try {
      const query = {
        text: "UPDATE item_transactions SET transaction_id = $1, restaurant_id = $2, item_id = $3, quantity = $4 WHERE transaction_id = $5",
        values: [transaction_id, restaurant_id, item_id, quantity, old_id],
      };
      const res = await client.query(query);
      return res.rowCount; // This will return the number of rows updated.
    } catch (err) {
      console.error(err.stack);
    }
  }
};

client.connect();