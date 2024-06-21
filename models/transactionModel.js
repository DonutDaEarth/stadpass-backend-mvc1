// transactionModel.js
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
  createTransactionData: async function(transaction_id, total_price, tax, discount, total_price_after, customer_id, courier_id, order_status) {
    try {
      const query = {
        text: "INSERT INTO transaction (transaction_id, transaction_time, total_price, tax, discount, total_price_after,customer_id, courier_id, order_status) VALUES ($8, NOW(), $1, $2, $3, $4, $5, $6, $7)",
        values: [total_price, tax, discount, total_price_after, customer_id, courier_id, order_status, transaction_id],
      };
      const res = await client.query(query);
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  deleteTransactionData: async function(transaction_id) {
    try {
      const query = {
        text: "DELETE FROM transaction WHERE transaction_id = $1",
        values: [transaction_id],
      };
      const res = await client.query(query);
      return res.rowCount; // This will return the number of rows deleted.
    } catch (err) {
      console.error(err.stack);
    }
  },

  getTransactionData: async function() {
    try {
      const res = await client.query("SELECT * FROM transaction");
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  updateTransactionData: async function(transaction_id, total_price, tax, discount, total_price_after, customer_id, courier_id, order_status) {
    try {
      const query = {
        text: "UPDATE transaction SET total_price = $2, tax = $3, discount = $4, total_price_after = $5, customer_id = $6, courier_id = $7, order_status = $8 WHERE transaction_id = $1",
        values: [transaction_id, total_price, tax, discount, total_price_after, customer_id, courier_id, order_status],
      };
      const res = await client.query(query);
      return res.rowCount; // This will return the number of rows updated.
    } catch (err) {
      console.error(err.stack);
    }
  }
};

client.connect();