# Koa Server Base

## 项目启动

配置启动项：

```sh
cp ./config/config_template.js ./config/config.js # 创建配置文件
vi ./config/config.js # 配置信息
```

启动: `node src/index.js`

## 使用库

- Eslint ([eslint-config-koa](https://github.com/koajs/eslint-config-koa))
- MySQL (本地数据库版本`Mysql 5.7.10`)
- koa/cors
- bluebird
- glob
- jsonwebtoken
- koa-bodyparser
- koa-router
- koa-static
- lodash
- log4js

## 项目结构说明

```sh
├── config                     # 项目配置目录
│   └── config_template.js
├── package.json
├── src
│   ├── db                     # db文件存放目录
│   ├── index.js               # 项目起始文件
│   ├── middleware             # 中间件目录
│   │   ├── AccessLogger.js    # 访问记录
│   │   ├── DecodeToken.js     # 解码jwt token
│   │   ├── ErrorHandler.js    # 统一错误处理
│   │   └── ResponseTime.js    # 响应时间处理
│   ├── module                 # 模块
│   │   ├── index.js           # 统一处理模块路由
│   │   └── template           # 模块
│   │       ├── controller.js  # 业务层
│   │       ├── dao.js         # 数据层
│   │       └── router.js      # 路由
│   └── util                   # 工具目录
│       ├── BaseDao.js         # sql base，module中的模块继承
│       ├── BaseRouter.js      # 处理module中模块的路由
│       ├── const.js           # 常量
│       ├── db.js              # sql库
│       ├── jwt.js             # json web token
│       ├── logger.js          # log4js
│       └── messageBean.js     # 处理请求返回
```
