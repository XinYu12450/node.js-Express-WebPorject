exports.sqldo=(hostObj,sql,callback,values=null)=>{
    let mysql=require("mysql");
    var connection=mysql.createConnection(hostObj);
    connection.connect();
    connection.query(sql,values,callback);
    connection.end();
}
