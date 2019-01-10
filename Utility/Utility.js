const readline=require('readline-sync');


module.exports ={
    
/**
     *@purpose : To generate the Array 
     *@description : this method is used to generate the number array of user choice elements
                    and return the resultant array
     * @param {empty array } arr 
 */
arrayinput(arr){
var n=readline.question("Enter the size of the array ");

for(var i=0;i<n;i++){

    arr[i]=Number(readline.question(""));

}
return arr;
},
/**
 * @purpose : To generate the StringArray 
 * @description : this method is used to generate the Stringarray of user choice elements
                    and return the resultant array
 * @param {empty Array} arr 
 */
ArrayInputString(arr){
var n=readline.question("Enter the Size of the array ");

for(var i=0;i<n;i++){

    arr[i]=readline.question('');
}

return arr;

},

replace(user){
if(user.length>=3){
console.log("Hello "+user+", How are you?");
}
else{
    console.log('plz enter the charactor above 3 charactor');
}
},
//----------------------------------------------------------------------------------------------
flip(f){
    var head=0,tail=0;
    for(var i=0;i<f;i++){
readline.question("plz enter any key to flip the coin ");
var rn=Math.floor(Math.random()*2);


if(rn==1){
    head++;
    console.log(rn);
}
else{
    tail++;
    console.log(rn);
}


    }
console.log("Time of head is "+head);
console.log("Time of tail is " +tail);

var tails=(tail *100)/f;
var heads=(head*100)/f;
console.log(" percentage of Tail "+tails+"%");
console.log(" percentage of Head "+heads+"%");
 
},
// find your year is leapyear or not---------------------------------------------------------
leapyear(year){

if(year%4==0 && year%100!=0 ||year%400==0){

    console.log(year +" is leap year");

}
else{
    console.log(year+" is not leapyear");
}

},
p(n){

for(var i=0;i<=n;i++){
var mul=Math.pow(2,i);
console.log(" power of 2 is  "+mul);
}
},
// harmoni number--------------------------------------------------------------------------------
hormonic(n){
var sum=0;
for(var i=1;i<=n;i++){

     sum=sum+1/i;
}
console.log("Your Harmonic value is "+sum);
},
//Prime factor-------------------------------------

PrimeFactor(n){

    for(var i=2;i<=n;i++){
       
        while(n%i==0){
            console.log(i);
            n=n/i;
        }

    }
    if(n<2){
        console.log(n);
    }
},
//gambler Program-----------------------------------------------------------

gambler(goal){


    var win=0;
	var loose=0;
	var toss=0;
	var amount=0;
	
	while(amount<goal) {	
		toss++;
		
        var b=readline.question("Enter your betting number 1 to 6");
		
        readline.question("press any key to toss");
		var r=Math.floor(Math.random()*6+1);// to generate the random number........ 
		console.log(r);
		if(b==r) {
			win++;
            amount=amount+r;
			console.log(amount);
			if(amount>goal) {
				amount=amount-r;
				console.log(amount);
			}
		}	
		else {
            loose++;
            console.log(amount);
		}
	}

    var pw=(win*100)/toss;
    var pl=(loose*100/toss);
        
        
        console.log("win percentage out of toss is "+pw);
        console.log("loose percentage out of toss "+pl);
        
        // show  user to all the values 
        console.log("win==========>"+win);
        console.log("loose========>"+loose);
        console.log("amount========>"+amount);
        console.log("toss===========>"+toss);
    
}, 
// coupons--------------------------------------------------------------------------------
copun(c){

var ar=[];

for (var i = 0; i < c; i++) {
    ar[i]=Math.floor(Math.random()*9+1);
    for (var j=0;j<i;j++)
    {
        if (ar[i] == ar[j])
        {
            i--;
        }
    }			
    
}
for (var index = 0; index < c; index++) {
    console.log(ar[index]);
    
}
},
// ----------------------------------------------------------------------------------

ReadTwoDarry(arr,row, col) {
   // var arr = [[], [],[]];
   //var arr=[];
    console.log("Enter elements ");
    //to generate the multi-dimensional array
    for (let index = 0; index < row; index++) {
        arr.push([]);
    // adding elements by elements in generated array
        for (let index2 = 0; index2 < col; index2++) {
            arr[index][index2] = readline.question('');
        }
    }
    return arr;
},
// 2d array----------------------------------------------------------------------------------
PrintTwoDarry(arr,row,col){
console.log("your d array Element");
for (let index = 0; index < row; index++) {
    for (let index1= 0; index1 < col; index1++) {
        console.log(arr[index][index1]); 
    }
    
}
},
//Triplets------------------------------------------------------------------------------
Triplets(arr){

for(let i=0;i<arr.length-2;i++){
    for(let j=i+1;j<arr.length-1;j++){
      for(let k=j+1;k<arr.length;k++){
if(arr[i]+arr[j]+arr[k]==0){

    console.log("your Triplets number is "+arr[i]+" "+arr[j]+" "+arr[k]);
    return true;
}
      }

    }
}
return false;
},
//Distance------------------------------------------------------------------------------
Distances(x,y){
    var d=((x*x)+(y*y));
console.log(" Distance is  :"+Math.sqrt(d));
},

// 


// Permutation---------------------------------------------------------------------------
Permutation(word,first,last){

   if(first==last){
            console.log( word );
     }
  else{
      for(let i=first;i<=last;i++){

       word=this.swap(word,first,i);
        this.Permutation(word,first+1,last);
         word=this.swap(word,first,i);
         }
    }
},
swap(word,i,j){
var words=[];
var st="";
words=word.split('');
var temp;
temp=words[i];
words[i]=words[j];
words[j]=temp;

        for(var i=0;i<words.length;i++)
        {
            st=st+words[i];

        }
return st;
},
// Stop watch-------------------------------------------------------------------------------

gettime(){
var date=new Date();
var n=date.getTime();

return n;
},
stopwatch(stop,start){

var time=stop-start;
 
var div=time/1000;
return div;
},
// tic toc toe----------------------------------------------------------------------------------------
tictoc(){
var board=[[],[],[]];


},
createboard(board){

    for(var i=0;i<board.length;i++){
     
        console.log("|"+board[i].join(" ")+"|");

    }

},
//Quadratic formulaa-----------------------------------------------------------------------------------
quadratic(a,b,c){
 var   delta = (b*b) - (4*a*c);
console.log(delta);

	// farmula for Quadratics....... 
	var x1=(-b+Math.sqrt(delta))/(2*a);
	var x2=(-b-Math.sqrt(delta))/(2*a);
	console.log("your Quadratic formula for positive sign is "+x1);
	
	console.log("your Quadratic formula for negative sign is"+x2);

},
// WindChill--------------------------------------------------------------------------------------------
windchill(t,v){
    var W=35.74+(0.6215*t)+((0.4275*t)-35.75)*(Math.pow(v, 0.16)); 
    
    console.log("your formula value is "+w);
},
/**
 * 
 * Alhorithm program Started........................
 * 
 * 
 */
Anagram(st1,st2){

if(st1.length!=st2.length){
return false;
}

var ch=this.sort(st1);
var ch1=this.sort(st2);

if(ch===ch1){
console.log("Your String is anagram ");
}
else{
    console.log("Your String is Not anagram ");
}
//console.log(ch);
},

sort(st){
    
var ch=st.split('');
for(var i=0;i<ch.length;i++){
   for(var j=i+1;j<ch.length;j++){
    if(ch[i]>ch[j]){
        var temp=ch[i];
        ch[i]=ch[j];
        ch[j]=temp;
    }
}
}
var sort="";
for(var i=0;i<ch.length;i++){
var sort=sort+ch[i];
}
//console.log(sort);
return sort;
},
// check Prime 1 to 1000------------------------------------------------------------------------------------

Prime(){

for(var i=1;i<1000;i++){

    if(this.isprime(i)){
        console.log(i);
    }
}
},

isprime(n){
for(var i=2;i<n;i++){
if(n%i==0){
return false;
}
}
return true;
},
//Prime anagram palindrome------------------------------------------------------------------------------
primepoliana(){

for(var i=1;i<1000;i++){

if(this.isprime(i)){

    this.palindrom(i);

}

}
},
palindrom(n){
var t=n;

var rev=0;
while(n!=0){
    var r=n%10;
    
 rev=rev*10+r;

n=Math.floor(n/10);
}
if(rev==t){
    console.log(t);
}

},
//Binary Search------------------------------------------------------------------------------------------
Binarysearch(arr,ele){

    var l=0;
    var h=arr.length-1;
    while(l<=h){
               
        m=Math.floor((l+h)/2);
       if(ele===arr[m]){
           return m;
       }
      else if(ele<arr[m]){
         h=m-1;

       }
       else if(ele>arr[m]){
           l=m+1;
       }
       else{
           return m;
       }
    }
return -1;
},
Binarysearchstr(arr,ele){

    var l=0;
    var h=arr.length-1;
    while(l<=h){
     m=Math.floor((l+h)/2);
     
     if(ele==arr[m]){
         return m;
     }
     else if(ele<arr[m]){

        h=m-1;
     }
     else if(ele>arr[m]){
         l=m+1;
     }
     else{
         return m;
     }
    }
},
// Insertion sort-----------------------------------------------
Insertionsort(arr){

for(var i=1;i<arr.length;i++){
var temp=arr[i];
var j=i;
    while( j>0 && arr[j-1]>temp){
        arr[j]=arr[j-1];
        j=j-1;
    }
    arr[j]=temp;
}
return arr;

},
BubbleSor(arr){

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            
        if(arr[i]>arr[j]){
            var temp;
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    }

return arr;
},
Findnumber(left,right){

var m=Math.floor((right+left)/2);
console.log(m);
if(left<right){

if(left==right-1){

    var c=readline.question("your number is "+left );
    if(c=="y"){
    return left;
      }
   if(c=="n"){
          return right;
      }

    }  
   
var y=readline.question("your number is in the range of "+m+" to "+right +" ");
if(y=="y"){
   m= this.Findnumber(m+1,right);
}
else if(y=="n"){
    m=this.Findnumber(left,m-1);
}
}

return m;


}

}