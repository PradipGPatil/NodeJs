  const fs=require('fs')

const reqHandler=(req, res)=>{
  
    const url =req.url;
if(url==='/'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<body><form method="POST" action="/message"> <p>username</p> <input type="text" name="message"/><button type="submit">submit</button></form></body>');
    res.write('</html>');
    return res.end();
}
if(url==='/message'&& req.method==='POST'){
    // we can read the data from the request body
    const body=[];
    req.on('data',(chunk)=>{
        console.log('chunk',chunk);
        body.push(chunk);
    });

    req.on('end',()=>{
        const parseddbody=Buffer.concat(body).toString();
        const payloadvalue=parseddbody.split('=')[1];
        console.log('payloadvalue', payloadvalue);
        fs.writeFileSync('message.txt',payloadvalue);
        console.log('file written');

    })
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<body><h1>Thank you for submitting the form</h1></body>');
    res.write('</html>');
    return res.end();
     }


// sending reponse

res.setHeader('content-type','text/html');
res.write('<html>');
res.write('<body><h1>My first page</h1></body>')
res.write('</html>');
res.end()
}

module.exports.handler=reqHandler