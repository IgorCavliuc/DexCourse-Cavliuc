const url = "https://jsonplaceholder.typicode.com/todos";
// const requestURl = "https://jsonplaceholder.typicode.com/users";
// const fetchData = () =>{
//   return
//   .then(()=> fetch(url))
//   .then((data) => data.json )
// }
// fetchData().then((data) => console.log(data))

// function delay(ms){
//   return new Promise((resolve) =>{
//     setTimeout(()=>{
//       resolve(ms)
//     }, ms)
//   })
// }

// async function fetchData (){
// let del = await delay(2000)
// let res = await fetch(url);
// let data = await res.json();
// return data

// }

// const response = fetchData().then((res) => console.log(res))

// console.log('preoparing...')

// setTimeout(()=>{
//   console.log('Request...')
//   const responseData = {
//     server: 'aws',
//     port:8001,
//     status: 'working',
//     modified: false
//   }
//   setTimeout(()=>{
//     responseData.modified= true;
//     console.log('Data received...', responseData)
//   },2000)
// },2000)

// const promise = new Promise ((resolve, reject) =>{

// })
// const requestURl = "https://jsonplaceholder.typicode.com/users";

// const getUser = (method, url) =>{
// return fetch(url)
// .then((r)=> r.json())
// }

// getUser('GET', requestURl)
// .then((data) => console.log(data))

const data = {
  name: "Oleg",
  age: 25,
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "post",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((res) => console.log(res));
