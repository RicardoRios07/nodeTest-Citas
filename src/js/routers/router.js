const express=require('express');
const router=express.Router();
const personas=require('../controllers/personasController');
const preferencias = require('../controllers/preferenciasController');
const encuentros = require('../controllers/encuentrosConstroller');

router.use("/personas",personas);
router.use('/preferencias', preferencias);
router.use('/encuentros', encuentros);

module.exports = router;