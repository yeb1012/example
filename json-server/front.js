//전체조회
fetch('http://localhost:3000/posts')
.then(res=>res.json())
.then(data => console.log('list', data))
.catch(err => console.log(err));
//단건조회
fetch('http://localhost:3000/posts/1')
.then(res=>res.json())
.then(data => console.log('info', data))
.catch(err => console.log(err));
//등록
//fetch('http://localhost:3000/posts',{
 //   method: 'post',
 //   headers : {
 //       'content-type' : 'application/json'
  //  },
  //  body:JSON.stringify({
   //     userId :2,
   //     id : 8,
    //    title : 'HEllO',
    //    body : 'iwl;fesrj;iljshntgldldlk\n'
   //            +'aoijhrgino;dfsj\n'
   // })
//})
//.then(res => res.json())
//.then( result => console.log('insert',result));

//수정
fetch('http://localhost:3000/posts/4',{
    method: 'put',
    headers :{
        'content-type' : 'application/json'
    },
    body : JSON.stringify({
        userId : 3,
        title:"Hello",
        body:'sdfgsfd'
    })
})
.then(res => res.json())
.then( result => console.log('update',result));
//삭제

fetch('http://localhost:3000/posts/4',{
    method:'delete'
})
.then(res => res.json())
.then( result => console.log('delete',result));