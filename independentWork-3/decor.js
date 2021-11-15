//Декораторы и переадресация вызова, call/apply

// function spy(func) {

//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }



// function debounce(f, ms) {

//   let isCooldown = false;

//   return function() {
//     if (isCooldown) return;

//     f.apply(this, arguments);

//     isCooldown = true;

//     setTimeout(() => isCooldown = false, ms);
//   };

// }




