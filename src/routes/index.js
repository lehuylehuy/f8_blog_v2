const newsRouter = require('./news')
const siteRouter = require('./site')

//siteRouter nơi lưu các router lẻ tẻ / ko thuộc modal nào

function route(app) {
  app.use('/news', newsRouter)
  app.use('/', siteRouter) // *** ở index router hay trong từng router riêng thì cần cẩn thận thứ tựu router, vì chạy từ trên xuống, khớp là lấy luôn. vd nếu app.use('/',) đặt trc thì khi truy cập bất cứ trang nào đều cx sẽ vào đây hết
}

module.exports = route;