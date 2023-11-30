const promise = new Promise((resolve, reject)=>{
    if(true){
        resolve("결과데이터");
    }else{
        reject(new Error("에러메세지"));
    }
})

