
//File Stream Module

const { error } = require('console');
var fs=require('fs');
fs.writeFileSync('color.txt','red,green',()=>
    {
});
fs.appendFileSync('color.txt','\nblank');
fs.readFile('color.txt',(err,res)=>{
    if(err)
    {
        console.log("Error occured: "+err);

    }
    else{
        console.log(res.toString());
    }
})
fs.unlinkSync('color.txt');


