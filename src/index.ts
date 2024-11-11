import express from 'express'; // 导入 Express.js 框架
import http from 'http'; // 导入 Node.js 的 http 模块
import bodyParser from 'body-parser'; // 导入 body-parser 中间件，用于解析请求体
import cookieParser from 'cookie-parser'; // 导入 cookie-parser 中间件，用于解析请求中的 cookies
import compression from 'compression'; // 导入 compression 中间件，用于压缩响应数据
import cors from 'cors'; // 导入 cors 中间件，用于处理跨域请求
import router from './router';
// 创建一个 Express.js 应用实例
const app = express();

// 中间件配置
// 配置 CORS 中间件，允许携带凭证（如 cookies）
app.use(cors({
  credentials: true,
}));

// 配置 compression 中间件，压缩响应数据
app.use(compression());

// 配置 cookie-parser 中间件，解析请求中的 cookies
app.use(cookieParser());

// 配置 body-parser 中间件，解析 JSON 格式的请求体
app.use(bodyParser.json());

// 创建 HTTP 服务器并监听端口 8080
const server = http.createServer(app);
server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/'); // 服务器启动后输出日志信息
});

app.use('/', router());