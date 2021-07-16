// let worker = {
//     slow(min, max) {
//       console.log(`slow(${min},${max})을/를 호출함`);
//       return min + max;
//     }
//   };
  
//   function cachingDecorator(func, hash) {
//     let cache = new Map();
//     return function() {
//       let key = hash(arguments); // (*)
//       if (cache.has(key)) {
//         return cache.get(key);
//       }
  
//       let result = func.call(this, ...arguments); // (**)
  
//       cache.set(key, result);
//       return result;
//     };
//   }
  
//   function hash(args) {
//     return args[0] + ',' + args[1];
//   }
  
//   worker.slow = cachingDecorator(worker.slow, hash);
  
//  console.log( worker.slow(3, 5) ); // 제대로 동작합니다.
//  console.log( "다시 호출: " + worker.slow(3, 5) ); // 동일한 결과 출력(캐시된 결과)
// function work(a, b) {
//     console.log( a + b ); // work is an arbitrary function or method
//   }
  
//   function spy(func){
//       function wrapper(...args){
//           wrapper.calls.push(args);
//           return func.apply(this, args);
//       }
//       wrapper.calls = [];

//       return wrapper;
//   }

//   work = spy(work);
  
  
//   work(1, 2); // 3
//   work(4, 5); // 9
  
//   for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
//   }

function f(x) {
    console.log(x);
  }

  function delay(func, ms){
      function wrapper(text){
        setTimeout(()=>func.call(this, text), ms);
      }

      return wrapper;
  }
  
  // create wrappers
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);
  
  f1000("test"); // shows "test" after 1000ms
  f1500("test"); // shows "test" after 1500ms