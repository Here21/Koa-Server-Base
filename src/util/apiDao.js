const BaseDao = require('./BaseDao');

const tableName = 'tapi_access_log';
const columns = ['id', 'u_id', 'method', 'act', 'url', 'ip', 'req_header', 'req_body', 'req_query', 'req_params', 'comment', 'del'];

class Dao extends BaseDao {
}

module.exports = new Dao(tableName, columns);
