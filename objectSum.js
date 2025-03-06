const products = [{name : 'sampoo', price : 250},
{name : 'watch', price : 500},
{name : 'bag', price : 300},    
{name : 'mobile', price : 15000}
]

function total(products) {
        let total = 0;
        for (const product of products) {
                total = total + product.price;
        }
        return total;
}
const totalPrice = total(products);
console.log('total price =', totalPrice);