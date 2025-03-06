function getMin(nambers) {
        let min = nambers [0];
        for (const num of nambers) {
                if (num < min) {
                        min = num;
                }
                
        }
return min;
}
const height = [45, 67, 89, 34, 56, 78];
let minValu = getMin(height);
console.log( 'min height =', minValu);