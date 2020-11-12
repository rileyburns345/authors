const express = require('express')
const app = express()
const cors = require('cors');
const port = 8001
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/author.routes')(app);
require('./server/config/mongoose.config');

app.listen(port, () => console.log(`Listening on port: ${port}`))