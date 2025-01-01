var app=require('http');
app.createServer((req,res)=>{
    if(req.url=='/about'){
        res.write('<h1>About Us</h1>');
        console.log("Hello");

    }
    else if(req.url=='/contact')
    {
        res.write('<h1>Contact Us</h1>');
    }
    else{
        res.write('<h1>Requested page is not  avaliable at this time</h1>');
    }
}).listen(5200);



