 const Utility=require('../Utility/Utility');
 const readline=require('readline-sync');
 const list=require('./Mylinklist');

var  unordedlist=()=> {

   var f =Utility.readfile();
console.log("Your  file element is :"+f);
var arr=f.split(' ');
console.log((arr));

var list1=new list.mylinklist;
//list1.add("sivasakthi2");
//list1.add("sivasakthi")
for(var i=0;i<arr.length;i++){
    list1.add(arr[i]+" ");
}

list1.display();

var d=readline.question(" ENter your Word to search ");
if(list1.search(d, list1)){
  //  console.log(search);
list1.remove(d);
console.log(d);
list1.display();
}
else{
    
}
console.log("ENd")
}
unordedlist();