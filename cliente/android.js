var http = require('http');
var buffer_corpo = [];

var opcoes = {
    hostname : 'localhost',
    port : 3000,
    path : '/test',
    method : 'get',
    headers : {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
    }
}

/*
var html = 'nome=josé';
var json = {nome : 'josé'};
var string_json = JSON.stringify(json);
*/
var req = http.request(opcoes,function(res){
    res.on('data',function(pedaco){        
        buffer_corpo.push(pedaco);
    });

    res.on('end',function(){
        var corpo = Buffer.concat(buffer_corpo).toString();

        console.log(corpo);
        console.log(res.statusCode);
    });
   
});

//req.write(string_json);
req.end();

