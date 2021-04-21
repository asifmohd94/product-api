const express = require('express');
const product = require('./product');
const router = express.Router();

const categories=[
    {
        id:1,
        name:"eatable",
        shortcode:"eat",
        description:"items consumable"
    },
    {
        id:2,
        name:"packaged",
        shortcode:"pack",
        description:"items packed"
    },
    {
        id:3,
        name:"essential",
        shortcode:"estl",
        description:"items necessary"
    },
    {
        id:4,
        name:"luxury",
        shortcode:"lxry",
        description:"luxury items"
    },
    
]

router.get('/',(req,res)=>{
res.send(categories);    
})

router.get('/:id',(req,res)=>{
const category = categories.find(c => c.id === parseInt(req.params.id));
let i=req.body.id;
if(!category){
    res.status(404).send("category doesn't exist");
    return;
}
res.send(product.products);
})


router.post('/',(req,res)=>{
    const category = {
        id: categories.length+1,
        name: req.body.name,
        shortcode: req.body.shortcode,
        description: req.body.description
    }
    categories.push(category);
    res.send(category);
})


router.put('/:id',(req,res)=>{
   const category = categories.find(c => c.id === parseInt(req.params.id));
   if(!category){
       res.status(404).send("Given category didn't exist");
   } 
if(req.body.shortcode < 5 || !req.body.name){
    res.status(400).send("name is required and short code length be less than equall to 4")
}

category.name = req.body.name;
category.sellingprice = req.body.sellingprice;
res.send(category);
})

router.delete('/:id',(req,res)=>{
    const category = categories.find(p => p.id === parseInt(req.params.id));
    if (!category) {
        res.status(404).send('entered category is not found');
        return;

    }

    const index = categories.indexOf(category);
    categories.splice(index, 1);
    res.send(category);
})




module.exports = router;

