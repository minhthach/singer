const express = require('express');
const bodyParser = require('body-parser'); // Middleware - nơi bot sẽ đi qua và tập hợp dữ liệu vào body. Lấy dữ liệu từ form

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// Khai báo là middleware
app.use(bodyParser.urlencoded({
    extended: false // nhận data dạng string || array
}))

const port = process.env.PORT || 3000;

const routerSinger = require('./router/singer');
const routerUser = require('./router/user');


app.use('/', routerSinger);
app.use('/user', routerUser);

app.listen(port, () => { console.log('Server for app Singer is started') })
