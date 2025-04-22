// let arr1=[10,20,30,40,50]
// console.log(arr1);

// let arr2=['hlo','world','this','is','array']
// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr1.length);
// //creating array using new kayword 
// let arr3=new Array(10,20,30,40,50);
// console.log(arr3);

// let arr4=new Array(3);
// console.log(arr4);
// console.log(arr4.length);

// let arr5=new Array(1);
// arr5[0]=30;
// console.log(arr5);


// let arr6=Array.of('nav');
// console.log(arr6);

// //accessing array values/elements/items
// let arr7=[10,20,30,40,50];
// console.log(arr7[0])//with the help of index
// arr7[1]=10000;//updating the value of index 1
// console.log(arr7[1]);
// arr7[1]=20000;//updating the value of index 2
// console.log(arr7[1]);

// let arr8=['this','is','array','session'];
// console.log(arr8);
// arr8[4]=1000;
// arr8[9]=200;
// console.log(arr8.length);
// arr8.push('example');
// console.log(arr8);
// arr8.unshift('hello');
// console.log(arr8);
// console.log(arr8.length);
// //removing the element at the end of the array
// arr8.pop();
// console.log(arr8);
// //removing the element at the start of the array
// arr8.shift();
// console.log(arr8);
// //at method
// let arr9=[10,20,30,40,50];
// console.log(arr9.at(0));
// console.log(arr9.at(-1));
// console.log(arr9.at(8));

// let arr1=[10,20,30,40,50];
// let squareArr=arr1.map((num,index,arr1)=>num*num);
// console.log(arr1,squareArr);

// let arr2=['this','is','array','session'];
// let arr3=arr2.map((e)=>e.toUpperCase());
// console.log(arr3);

//let arr1=[10,21,36,45,50];
// let arr2=arr1.filter(
//     (e,index,arr1)=>{
//         return e%2==0;//even number
//     }
// )
// let arr2=arr1.filter(num=>num%2==0)
// console.log(arr1);
// console.log(arr2);

// let inputArr=[6,7,8,9,10];
// let cubeArr=inputArr.map(e=>e*e*e);
// let outputArr=inputArr.filter(e=>e%2!=0);
// let oddArr=inputArr.filter(e=>e*e*e).filter(e=>e%2!=0);
// console.log(inputArr);
// console.log(outputArr);   

// let arr1=[1,2,3,4,5];
// let arr2=arr1.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },1);
// console.log(arr1);
// console.log(arr2);

// let arr1=[1,2,3,4,5];
// console.log(arr1.includes(2));//true
// console.log(arr1.includes(2,0));//true
// console.log(arr1.includes(2,1));//true
// console.log(arr1.includes(2,2));//false

// let arr1=[1,2,3,4,5];
// let outPut=arr1.find((e,indexedDB,arr1)=>{
//     return e%2==0;//even number
// })
// console.log(outPut);
// let arr1=[1,2,3,4,5,'hello','world'];
// let outPut=arr1.find((e,indexedDB,arr1)=>{
//     return typeof e==='string';
// })
// console.log(outPut);
let arr1=[1,2,3,4,5,6,'hello'];
let outPut=arr1.every((e,index,arr1)=>{
    return typeof e==='number';
})
console.log(outPut);
