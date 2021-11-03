const express = require('express')
const router = express.Router();

const newsController = require('../app/controllers/NewsController');   //*** o file NewsController.js đang export 1 thực thể  từ class NewsController, nên require nhận đc thực thể đó => ko cần viết hoa biến ddawtj cho 1 thực thể của class

router.use('/:slug', newsController.show)// vi duyet route tu tren xuong duwoi neu khop thi lay, nen neu để router.use('/' , ) lên trước thì dù có slug nó cx nhận luôn router này ==> pahir đặt lên trên
router.use('/', newsController.index)

module.exports = router 