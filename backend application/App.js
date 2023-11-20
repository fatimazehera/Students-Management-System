const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AuthService = require('./Services/Auth')


const app = express();
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/InscriptionDb")

 
app.use('/etudiant', AuthService.authenticateEtudiant);
app.use('/gestionnaire', AuthService.authenticateGestionnaire);








app.listen(4000, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});









