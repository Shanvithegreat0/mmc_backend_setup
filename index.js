const express = require("express");
const app = express();

const pool = require("./db");
const PORT = process.env.PORT
//middlewares
app.use(express.json());


//Routes
app.post("/api/test", async (req, res) => {
    try {
        const { firstname, lastname } = req.body;
        const client = await pool.connect();
        const query = `
          INSERT INTO users (firstname, lastname)
          VALUES ($1, $2)
          RETURNING user_id;
        `;
        const values = [firstname, lastname];
        const result = await client.query(query, values);
        const user_id = result.rows[0].user_id;
        client.release();

        res.status(201).json({ message: 'User data submitted successfully', user_id });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

app.listen(PORT || 5000, () => {
    console.log("Server started");
});
