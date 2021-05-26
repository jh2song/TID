var http = require('http');
var url = require('url');
var fs = require('fs');

var template_index = require('./lib/template_index.js');
var template_login = require('./lib/template_login.js');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
        if (queryData.id === undefined) { // 홈일 때  
            var html = template_index.HTML();
            response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            response.end(html, 'utf-8'); 
        } 
    } else if (pathname === '/login') {
        var html = template_login.HTML();
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end(html, 'utf-8'); 
    } else if (pathname.substring(0,5) === '/css/'
        || pathname.substring(0,4) === '/js/'
        || pathname.substring(0,8) === '/images/'
        || pathname.substring(0,7) === '/fonts/'
        ) {
            fs.readFile(__dirname + pathname, function (err, data) {
                var dotoffset = request.url.lastIndexOf('.');    
                console.log(request.url.substr(dotoffset));
                var mimetype = dotoffset == -1
                            ? 'text/plain'
                            : {
                                '.html' : 'text/html',
                                '.ico' : 'image/x-icon',
                                '.jpg' : 'image/jpeg',
                                '.png' : 'image/png',
                                '.gif' : 'image/gif',
                                '.css' : 'text/css',
                                '.js' : 'text/javascript',
                                '.woff2' : 'font/woff2',
                                '.woff' : 'font/woff',
                                '.ttf' : 'font/truetype',
                                '.map' : 'text/plain'
                                }[ request.url.substr(dotoffset) ];
            response.setHeader('Content-type' , mimetype);
            response.end(data);
            });
    } else {
        response.writeHead(404);
        response.end('Not found'); 
    }
});
app.listen(3000);