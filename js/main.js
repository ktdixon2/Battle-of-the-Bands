let bandNumber = 0

const takeNumber = function(band) {
    bandNumber += 1;
    console.log(`Band #${bandNumber} is ${band}`);
}
console.log("takeNumberFunc", takeNumber); 

const scum = "Galactic Scum"
console.log(scum)
const under = "Underdogs"
console.log(under)

takeNumber(scum)
takeNumber(under)