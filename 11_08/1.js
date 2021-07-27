const fetch = require('fetch');

async function loadJson(url){
    let res = await fetch(url);
    if(res.status == 200){
        return res.json();
    }else{
        throw new Error(res.status)
    }
}

loadJson('no-such-user.json')
  .catch(console.log); // Error: 404
