const fs=require('fs');



var data=fs.readFileSync('ome/brideit/Documents/SivaSakthi/oops/Jsonfiles/inventry.json');
var data1=JSON.parse(data);

console.log((data1));
