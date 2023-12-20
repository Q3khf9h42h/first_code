// const product=(a,b)=> a*b;
// console.log(product(2,3));

// const person={
//     name:'Max',
//     age:29,
//     greet()
//     {
//         console.log('Hi I am '+ this.name);
//     }
// };
// const printName=({name})=>{
//    console.log(name); 
// }
// printName(person);
// const {}=person;

// const {name,age}=person;
// console.log(name,age);
// // person.greet();

//  const hobbies=['sports','cooking'];
//  const [hobby1,hobby2]=hobbies;
//  console.log(hobby1,hobby2);
// for(let hobby of hobbies){
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby=>'Hobby:' + hobby));
// console.log(hobbies);
// const fetchData=callback=> {
//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//         resolve('Done!')
//     },1500);
// });
// return promise;
// };


// setTimeout(()=>{
//     console.log('Timer is done');
//     fetchData()
//     .then(text=>{
//     console.log(text);
//     return fetchData();
//     })
//     .then(text2=>{
//         console.log(text2);
      
//         });
// },2000);
// console.log('Hello');
// console.log('Hi');
function delay(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }
  
  async function printSequence() {
    console.log('a');
    console.log('b');
    
    await delay(3000);
    console.log('c');
  
    console.log('d');
    console.log('e');
  }
  
  printSequence();
  