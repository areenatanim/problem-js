function getMax(nambers) {
        let max = nambers [0];
        for (const num of nambers) {
                if (num > max) {
                        max = num;
                }
                
        }
return max;
}
const height = [45, 67, 89, 34, 56, 78];
let maxValu = getMax(height);
console.log( 'max height =', maxValu);
 