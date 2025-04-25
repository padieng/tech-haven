const Database = require('better-sqlite3');
const db = new Database('tech_haven.db'); // This must match your DB filename
module.exports = db;
