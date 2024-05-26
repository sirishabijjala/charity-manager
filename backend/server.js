// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const oracledb = require('oracledb');

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Oracle DB Connection Pool setup
const initializeOracleDB = async () => {
  try {
    await oracledb.createPool({
      user: 'system',
      password: 'manager',
      connectString: 'localhost:/orcl',
      poolAlias: 'mypool',
      poolMin: 2,
      poolMax: 10,
      queueTimeout: 1200000,
    });
    console.log('Oracle DB Pool Created');
  } catch (error) {
    console.error('Error creating Oracle DB Pool: ', error);
  }
};

// Initialize Oracle DB connection pool
initializeOracleDB();

// CRUD operations for the 'donors' table

// Get all donors
app.get('/api/donors', async (req, res) => {
  try {
    const connection = await oracledb.getConnection('mypool');
    const result = await connection.execute('SELECT * FROM donors');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching donors:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific donor by ID
app.get('/api/donors/:id', async (req, res) => {
  const donorId = req.params.id;
  try {
    const connection = await oracledb.getConnection('mypool');
    const result = await connection.execute('SELECT * FROM donors WHERE id = :id', [donorId]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Donor not found' });
    }
  } catch (error) {
    console.error('Error fetching donor by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new donor
app.post('/api/donors', async (req, res) => {
  const { id, name, amount } = req.body;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('INSERT INTO donors (id, name, amount) VALUES (:id, :name, :amount)', [id, name, amount]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Donor added successfully' });
  } catch (error) {
    console.error('Error adding donor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a specific donor by ID
app.put('/api/donors/:id', async (req, res) => {
  const donorId = req.params.id;
  const { name, amount } = req.body;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('UPDATE donors SET name = :name, amount = :amount WHERE id = :id', [name, amount, donorId]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Donor updated successfully' });
  } catch (error) {
    console.error('Error updating donor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a specific donor by ID
app.delete('/api/donors/:id', async (req, res) => {
  const donorId = req.params.id;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('DELETE FROM donors WHERE id = :id', [donorId]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Donor deleted successfully' });
  } catch (error) {
    console.error('Error deleting donor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
