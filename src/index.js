const express = require ('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();
const PORT = 8080;
const TRADES_FILE = './trades.json';


app.use(express.json());
app.use(morgan(':method :url :status :response-time ms - :date[clf]'));

const readTradesFromFile = () => {
    const tradesData = fs.readFileSync(TRADES_FILE,'utf-8');
    return JSON.parse(tradesData);
};

const writeTradesToFile = (trades) => {
    fs.writeFileSync(TRADES_FILE, JSON.stringify(trades));
};




app.post('/trades', (req, res) => {
    const trades = readTradesFromFile();
    const newTrade = req.body;
    trades.push(newTrade);
    writeTradesToFile(trades);
    res.status(201).send(newTrade);
});

app.get('/trades', (req, res) => {
    const trades = readTradesFromFile();
    res.status(200).send({ trades });
});

app.get('/trades/:id', (req, res) => {
    const trades = readTradesFromFile();
    const trade = trades.find(t => t.id === parseInt(req.params.id));
    if (trade) {
        res.status(200).send(trade);
    } else {
        res.status(404).send('ID not found');
    }
});

app.delete('/trades/:id', (req, res) => {
    let trades = readTradesFromFile();
    const tradeIndex = trades.findIndex(t => t.id === parseInt(req.params.id));
    if (tradeIndex !== -1) {
        trades.splice(tradeIndex, 1);
        writeTradesToFile(trades);
        res.status(200).send("trade deleted");
    } else {
        res.status(404).send('ID not found');
    }
});

app.patch('/trades/:id', (req, res) => {
    const trades = readTradesFromFile();
    const trade = trades.find(t => t.id === parseInt(req.params.id));
    if (trade) {
        if (req.body.price !== undefined) {
            trade.price = req.body.price;
            writeTradesToFile(trades);
            res.status(200).send(trade);
        } else {
            res.status(400).send('Invalid request');
        }
    } else {
        res.status(404).send('ID not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
