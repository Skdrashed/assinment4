const products = [
    {id: 1, name: 'walton phone', price: 19000 },
    {id: 2, name: 'Redmi', price: 30000 },
    {id: 3, name: 'iphone ', price: 199000 },
    {id: 4, name: 'mac book air ', price: 209000 },
    {id: 5, name: 'lenovo laptop', price: 19000 },
    {id: 6, name: 'dell laptop', price: 42000 },
    {id: 7, name: 'samsung note 10+', price: 145000 },
    {id: 8, name: 'nokia exp music Phone ', price: 19000 }
];

// for (const product of products) {
//     console.log(product);
// }


function matchProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        } 
    }
    return matched;
}

const result = matchProducts(products,'phone');
console.log(result);