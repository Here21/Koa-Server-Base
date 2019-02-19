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

## 特性

采用`Koa.js`数据库使用`MySQL 5.7`，对框架数据处理层——`dao`层进行封装，使用继承来模块化`Module`等等，很大程度上提升系统易用性与安全性。

特性：
- 模块化业务层。（每个`Module`独立`Router`路由层、`Dao`数据层、`Controller`控制层）
- 抽象`Middleware`层，每个模块可以更方便的组合自己需要的中间件。
- 统一错误捕获与处理。
- 统一解码`jwt`。
- 封装消息处理，统一管理`API`消息。
- 记录访问。

安全策略：
- 采用`JWT（Json Web Token）`来做接口安全检查，并封装权限效验中间件。
- 封装数据库类，统一处理数据库层面可能发生的安全问题。
- 记录每一次的`API`进/出，可以更具需要处理与分析风险。
- 使用`log4js`记录、管理系统日志。


## 基础功能概要

- 基础用户功能（登录、注册、查询）
- 通用SQL功能（安全处理、增删改、灵活的条件查询、分页）
- 常用`ERROR_CODE`
- API访问记录（默认没开启）
