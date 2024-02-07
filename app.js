const express = require('express');
const app = express();
const authRoutes = require('./routes/routes');
app.use(express.json());
app.use('/routes',authRoutes ); //this is to use the routes in the routes folder
const PORT =  3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});