const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {

    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;

    // PRODUCT OVERVIEW
    if (pathName === '/products' || pathName === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf8', (err, data) => {
            let overviewOutput = data;

            fs.readFile(`${__dirname}/templates/template-card.html`, 'utf8', (err, data) => {
                const cardsOutput = laptopData.map(laptop =>
                    replaceTemplate(data, laptop)
                ).join('');
                // console.log(cardsOutput);
                overviewOutput = overviewOutput.replace('{%CARDS%}', cardsOutput);
                res.end(overviewOutput);
            });
        });


        // LAPTOP DETAILS
    } else if (pathName === '/laptop' && id < laptopData.length) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf8', (err, data) => {
            res.end(replaceTemplate(data, laptopData[id]));
        });
        // IMAGES ROUTE
    } else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
        fs.readFile(`${__dirname}/data/img/${pathName}`, (err, data) => {
            res.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            res.end(data);
        });
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.end('URL not found');
    }
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests now.');
});

function replaceTemplate(originalHtml, laptop) {
    let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
    output = output.replace(/{%IMAGE%}/g, laptop.image);
    output = output.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%ID%}/g, laptop.id);
    return output;
}