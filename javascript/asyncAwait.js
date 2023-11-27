function webServerConnect(){
    return fetch('https://jsonplaceholder.typicode.com/posts/1',{
        headers:{
            'Cache-Control': 'no-cache'
        }
    })
    .then(response=>response.json())
    .then(data=>console.log(data));
}

async function getJSONData(){
    const result = await webServerConnect();
    console.log(result);
}
getJSONData();
