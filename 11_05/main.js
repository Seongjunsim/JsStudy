// new Promise((resolve, reject) => {

//     throw new Error("에러 발생!");
  
//   }).then(() => console.log("다음 핸들러가 실행됩니다."))
//   .catch(function(error) {
  
//     console.log("에러가 잘 처리되었습니다. 정상적으로 실행이 이어집니다.");
  
//   });

new Promise(function(resolve, reject) {
    setTimeout(() => {
        try{
            throw new Error("에러 발생!");
        }catch(err){
            reject(err);
        }
    }, 1000);
  }).catch(error => console.log(error.message));