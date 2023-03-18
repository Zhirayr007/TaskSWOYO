from http.server import HTTPServer, CGIHTTPRequestHandler
httpd = HTTPServer(('', 8000), CGIHTTPRequestHandler)
httpd.serve_forever()