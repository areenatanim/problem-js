let phones = [{name : 'samsung', price : 45000, camera :'12px'},
{name : 'nokia', price : 25000, camera :'8px'},
{name : 'walton', price : 15000, camera :'5px'},
{name : 'oppo', price : 35000, camera :'10px'}];

function minValu(phone) {
        let min = phone[0];
        for (const ph of phone) {
                if (ph.price < min.price){
                        min = ph;
                }
        }
        return min;
}
let minPrice = minValu(phones);
console.log('min price phone =', minPrice);