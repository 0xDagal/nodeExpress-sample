var express = require('express')
var router  = express.Router()
var Livre   = require("../models/livre")

router.get('/', function(req, res){
   var response = {}
   Livre.find({},function(err,data){ 
   // Mongo command to fetch all data from collection.
      if(err) {
          response = {"error" : true,"message" : err}
      } else {
          response = data
      }
      res.json(response)
   })
})

router.post('/', function(req, res){
   var livreInfo = req.body //Get the parsed information
   var newLivre = new Livre({
      titre : livreInfo.titre,
      auteur : livreInfo.auteur,
      maisonEdition : livreInfo.maisonEdition,
      edition : livreInfo.edition
   })
   newLivre.save(function(err, Livre){
      if(err)
         res.send({message: err, type: "error"})
      else{
         res.send({
            message: "New livre added", type: "success", livre: livreInfo
         })
      }
   })
})

//export this router to use in our index.js
module.exports = router
