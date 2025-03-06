// chair = 3 cft
// table = 10 cft
// bed = 50 cft

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    const chairWoodQuantity = chairQuantity * chairWood;
    const tableWoodQuantity = tableQuantity * tableWood;
    const bedWoodQuantity = bedQuantity * bedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
        
}
let totalWood = woodQuantity(0, 2, 0);
console.log(totalWood);
