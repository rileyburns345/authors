const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/author", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connect wit the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err))