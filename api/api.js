const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const products = [
    {
    'id': 1,
    'name': 'vélo',
    'price': 249,
    'description': 'Un super vélo de ville'
},
{
    'id': 2,
    'name': 'trottinette',
    'price': 149,
    'description': 'Une super trottinette'
},
{
    'id': 3,
    'name': 'skate',
    'price': 99,
    'description': 'Un super skate'
},
{
    'id': 4,
    'name': 'rollers',
    'price': 149,
    'description': 'Des super rollers'
},
{
    'id': 5,
    'name': 'hoverboard',
    'price': 199,
    'description': 'Un super hoverboard'
},
{
    'id': 6,
    'name': 'gyroroue',
    'price': 299,
    'description': 'Une super gyroroue'
}
]

//list of products

app.get('/products', (req, res)=>{
    res.send(products);
    
});

// un produit en particulier 
app.get('/products/:id', (req, res)=>{
    const productId = parseInt(req.params.id);
    const product = products.find(product => product.id === productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(3000, ()=>{
    console.log("the app is listening on port 3000");
})