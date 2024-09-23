const express = require('express')
const router = express.Router()
const authControler=require('../controllers/auth')

router.get('/login', authControler.getLogin)
router.post('/login', authControler.postLogin)
module.exports=router