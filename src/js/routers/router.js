const express=require('express'),
     router=express.Router()
     personas=require('../controllers/personasController');

router.use("/personas",personas);

module.exports = router;