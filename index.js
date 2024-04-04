
function superbowlWin(record){
    const win = record.find(entry => entry.result === "W")
  if (win){
    return win.year
  }else {
    return undefined
  }
}





// console.log(record.find(superbowlWin).year);
// function superbowlWin(record){
//     if (record.result === "W"){ 
//     return record.result
//     }else {
//         return undefined
//     }
// }
// let wYear = superbowlWin()
// console.log(wYear)
// code your solution here
