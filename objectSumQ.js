const products = [
{name : 'sampoo', price : 250, quantity : 3},
{name : 'watch',  price : 500, quantity : 1},
{name : 'bag',    price : 300, quantity : 9},    
{name : 'mobile', price : 150, quantity : 10},
]
function total(products) {
let total = 0;
for (const product of products) {
total = total + product.price * product.quantity;

}
return total;
}
const totalPrice = total(products);
console.log('total price =', totalPrice);

