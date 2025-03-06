let phones = [{name : 'samsung', price : 45000, camera :'12px'},
              {name : 'nokia', price : 25000, camera :'8px'},
              {name : 'walton', price : 15000, camera :'5px'},
              {name : 'oppo', price : 35000, camera :'10px'}];
 
 function maxValu (phone) {
        let max = phone[0];
        for (const ph of phone) {
                if (ph.price > max.price){
                        max = ph;           
           }
        }
return max;
 }
        let maxPrice = maxValu(phones);
        console.log('max price phone =', maxPrice);
        