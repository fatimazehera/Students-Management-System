const mongoose = require('mongoose')


const EtudiantShema = new mongoose.Schema({

    FirstName : String,
    LastName : String,
    CNE : String,
    CIN : String,
    Email : String,
    DateNaissance : Date,
    LieuNaissance : String,
    Adresse : String,
    Filiere : String
})

const EtudiantModel = mongoose.model("Etudiant", EtudiantShema)
module.exports = EtudiantModel