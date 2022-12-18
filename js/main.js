let a=parseInt(prompt("enter the number"))
let b;
let c=0;
let d=a.toString().length;
let e=a;
for(i=1;a!==0;i++){
    b=a%10;
    a=(a-b)/10;
    c=c+b**d;
}
if(c==e){
    document.write("The number is Armstrong")
}
else{
    document.write("The number is not Armstrong")
}
