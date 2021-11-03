const express = require('express')
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

router.use('/search', siteController.search) // chú ý thư stuwj route
router.use('/', siteController.index)

module.exports = router