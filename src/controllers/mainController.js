const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// const visited = products.filter(function(product) {
//     return product.category == 'visited'
// })
// const inSale = products.filter(function(product) {
//     return product.category == 'in-sale'
// })

const controller = {
    index: (req, res) => {
        res.render('index');
    },
    form: (req, res) => {
        res.render('formulario');
    },
    login: (req, res) => {
        res.render('login');
    },
    profile: (req, res) => {
        res.render('userProfile');
    },
    recuperarpass: (req, res) => {
        res.render('recuperarpass');
    },
    cart: (req, res) => {
        res.render('cartNew');
    },
    detail: (req, res) => {
        res.render('productDetail');
    },
    products: (req, res) => {
        res.render('productsForm');
    },
    stats: (req, res) => {
        res.render('stats');
    },
    prodsCons: (req, res) => {
        res.render('productsCons');
    }
    //search: (req, res) => {
        //res.render('search');
        // let search = req.query.keywords;
        // let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));
        // res.render('results', {
        //     products: productsToSearch,
        //     search,
        //     toThousand,
        //});
    //}

};

module.exports = controller;