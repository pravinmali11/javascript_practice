const sql=require('mysql2');
const conn=sql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'root',
        database:'nodejs'
    }
);
conn.connect((err) =>{
    if (err) {
        console.log('Error : '+err);
        
        
    }else{
        console.log('Connected Sucessfully');
        
    }

})
module.exports=conn;
    