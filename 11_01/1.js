function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(null);
        }, ms)
    })
}

delay(3000).then(() => console.log('3초후 실행'));