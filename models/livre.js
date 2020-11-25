var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/exempleDB', 
                { userNewUrlParser: true })
// create schema
var livreSchema  = mongoose.Schema({
    titre : String,
    auteur : String,
    maisonEdition : String,
    edition : Number
})
// create model if not exists.
var Livre = mongoose.model("Livre", livreSchema)
module.exports = Livre
