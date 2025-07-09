import http from 'http'
import fs from 'fs'

const Myserver = http.createServer((req, res) => {
    console.log(req.headers);
    const log = `${Date.now()}:${req.url} New Req Received\n`
    fs.appendFile('log.txt', log, (err, data) => {
        res.setHeader("Content-type", "text/html")
        switch (req.url) {
            case '/':
                // res.setHeader("Content-type", "text/html")
                res.end("<h1>Home page</h1>")
                break;
            case '/about':
                // res.setHeader("Content-type", "text/html")
                res.end("<h1>About page</h1>")
                break;
            case '/contact':
                // res.setHeader("Content-type", "text/html")
                res.end("<h1>Contact us Page</h1>")
                break;

            default:
                // res.setHeader("Content-type", "text/html")
                res.end("<h1>Page Not Found</h1>")
                break;
        }

    })

    // console.log("New Req Rec.");
    // res.setHeader("Content-type", "text/html")
    // res.end("<h1>Hello,shubhangi I Love You</h1>")
})

const port = 4000

Myserver.listen(port, () => {
    console.log(`server listen on port: ${port}`);

})