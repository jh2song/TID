var http = require('http');
var url = require('url');
var fs = require('fs');

var template_index = require('./lib/template_index.js');

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
    } else if (pathname === '/css/bootstrap.css'
        || pathname === '/css/main.css'
        || pathname === '/css/jquery-ui.css'
        || pathname === '/js/bootstrap.js'
        || pathname === '/css/post.css'
        || pathname === '/js/bootstrap.js'
        || pathname === '/images/2.jpg'
        || pathname === '/images/user.png'
        || pathname === '/js/bootstrap.js'
        || pathname === '/images/post.png'
        || pathname === '/css/bootstrap.css.map'
        ) {
            fs.readFile(__dirname + pathname, function (err, data) {
                var dotoffset = request.url.lastIndexOf('.');
                var mimetype = dotoffset == -1
                            ? 'text/plain'
                            : {
                                '.html' : 'text/html',
                                '.ico' : 'image/x-icon',
                                '.jpg' : 'image/jpeg',
                                '.png' : 'image/png',
                                '.gif' : 'image/gif',
                                '.css' : 'text/css',
                                '.js' : 'text/javascript'
                                }[ request.url.substr(dotoffset) ];
            response.setHeader('Content-type' , mimetype);
            response.end(data);
            console.log( request.url, mimetype );
            });
    } else {
        response.writeHead(404);
        response.end('Not found'); 
    }
});
app.listen(3000);