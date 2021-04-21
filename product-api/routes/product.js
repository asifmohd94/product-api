const express = require('express');
const router = express.Router();


const products = [
    {
        id: 1,
        name: "Bread",
        manufacturer: "britania",
        shortcode: "brd",
        catagories: ["essential", "eatable"],
        description: "fresh bread",
        sellingprice: 5
    },
    {
        id: 2,
        name: "Flour",
        manufacturer: "ashirvad",
        shortcode: "wht",
        catagories: ["essential", "packaged", "eatable"],
        description: "fresh wheat flour",
        sellingprice: 15
    },
    {
        id: 3,
        name: "Rice",
        manufacturer: "india gate",
        shortcode: "rce",
        catagories: ["essentail", "eatable"],
        description: "tasty rice",
        sellingprice: 25
    },
    {
        id: 4,
        name: "Soap",
        manufacturer: "lux",
        shortcode: "sop",
        catagories: ["luxury"],
        description: "anti bacterial soap",
        sellingprice: 3
    },
    {
        id: 5,
        name: "Oil",
        manufacturer: "fortune",
        shortcode: "oil",
        catagories: ["eatable"],
        description: "low fat",
        sellingprice: 7
    },
]




router.get('/', (req, res) => {
    res.send(products)
})

router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

    if (!product) {
        res.status(404).send('Given product is not found');
    }

    res.send(product);

})


router.post('/', (req, res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        shortcode: req.body.shortcode,
        category: [req.body.category],
        description: req.body.description,
        sellingprice: req.body.sellingprice
    }
    products.push(product);
    res.send(product);
})


router.put('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        res.status(404).send('Given product is not found');
        return;
    }

    if (req.body.shortcode.length < 5 || !req.body.name) {
        res.status(400).send('Name is required and length should be less than or equall to 4');
        return;
    }
    product.name = req.body.name;
    res.send(product);
});



router.delete('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        res.status(404).send('Given product is not found');
        return;

    }

    const index = products.indexOf(product);
    products.splice(index, 1);
    res.send(product);

})

module.exports = router;