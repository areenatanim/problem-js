let arina = 60;
let tanim = 90;
if (arina > tanim ){
        console.log('arina will gat "A"');
        
}
else{
        console.log('tanim will get "A"');
}
// by function
function max (a, b ){
        if (a>b){
                return a;

        }
        else{
                return b;
        }
}
let maxValu = max(90, 78);
let maxValu2 = max(76, 45);
console.log(maxValu, maxValu2);

// by using ternary operator
let maxValu3 = (90 > 78) ? 90 : 78;
console.log(maxValu3);
// by Math

let maxValu4 = Math.max(45,76);
console.log(maxValu4);



