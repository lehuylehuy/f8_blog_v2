const path = require("path") // thu vien co san trong express
const express = require("express")
const app = express()
const port = 3000
const morgan = require("morgan")
const handlebars  = require('express-handlebars');
const { extname } = require("path")
const route = require('./routes')

//http log middleware
app.use(morgan('combined'))

//để truy cập vào những file tinhx trong source code thông qua path trên url
app.use(express.static(path.join(__dirname, 'public')))

//sd middware để xử lý từ form data vào req.body. sd express.urlencoded() nếu data gửi kèm dạng string/array, sd express.json() nếu 
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json())

// "watch": "node-sass src/recources/scss --output src/public/css" trong package.json chạy để compile các file scss trong folder scss sang các file css trong folder public/css; theem dduoi --watch se tu dong compile ko can restart lai 
//template engine
app.engine('hbs', handlebars(
  {extname: '.hbs'} //các file handlebars phải đặt tên đuôi .handlebars => dài, Ở đây tự config lại đuôi cho ngắn gọn 
)); // them engine dat ten la "hbs", đổ  thư viện handlebars vừa require vào engine đó
app.set('view engine', 'hbs');// set cái view engine cua expressjs sử dụng engine hbs
app.set('views', path.join(__dirname, 'recources/views'))  //them 1 path chi tiet vao đuôi của path _dirname (_dirname là đg dẫn từ đầu đến thư mục chứa file index, ở đây là src; thêm path chi tiết trong '' để  trỏ đến thư mục chứa các view)


// app.get('/', (req, res) => res.render('home')) // render home thi se lay trong views/home.handlebars đổ vào body trong main.handlebars (file bắt bc tạo ra để làm layout chung cho tất cả view)


///  ROUTE init
route(app); // gọi hàm route chung--> từ đây chia ra từng loại route --> mỗi loại có 1 file route chi tiết --> mỗi route trong file chi tiết gọi đến 1 handler_function từ controller tương ứng 

app.listen(port, () => console.log("hello, i'm listening at: ", port));