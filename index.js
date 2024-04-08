// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(array){
    const win = array.find(function(record){
      return record.result === "W";
    })
    if(win){
      return win.year;
    }
    return undefined;
  }
// // const superbowlwin = [{year: 2015, result: "W"}]
// const found = record.find(element => element.year == 2015);
// console.log(found);
// //   return undefined;
