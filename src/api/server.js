const express = require("express");
const path = require("path");

const app = express();

//设置跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// 设置static中间件后，浏览器访问时，会自动去public目录寻找是否有匹配的静态资源
app.use(express.static(path.resolve(__dirname, "./public")));

// 引入解析请求体的中间件
app.use(express.urlencoded());

app.get("/api", (req, res) => {
  console.log("收到了请求~");
  console.log("请求是: ", req.query.name);
  let obj = { type: "person", name: req.query.name, value: 1 };
  res.send(JSON.stringify(obj));
});

// 启动服务器
app.listen(3000, () => {
  console.log("服务器已启动~");
});
