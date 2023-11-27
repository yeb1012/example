function printMsg(msg='메세지를 입력해 주세요', to=''){
    console.log(msg);    
}
printMsg('Have a Nice Day~~');
printMsg();
printMsg( );//이렇게 공백이 있으면 안됨


function sum(x,y,...args){
    let result = x+y;
    console.log(args.length);
    for(let num of args){
        result +=num;
    }
    return result;
}

console.log(sum(1,2));
console.log(sum(1,2,3,4,5,6,7,8,9));