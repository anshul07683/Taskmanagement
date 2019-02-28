

export const add_client_project = async(projectdata )=>{
  console.log('add  client project is calling from API',projectdata)
  await fetch('http://localhost:3003/client/clientpost',{
    method:'POST',
    body:JSON.stringify(projectdata),
    headers: {'Content-Type':'application/json'}
  }).then(res=>res.json())
  // .then(res=>{console.log(res)})
  .catch(error=>alert(error))
}

export const show_client_project= async()=>{
  console.log('Show post is calling from api')
  const data = await fetch('http://localhost:3003/client/clientpost',{
    method:'GET',
    headers:{'Content-Type':'application/json'},
  }).then(res=>res.json())
  // .then(response => console.log("show post Done",response))
  console.log('data from api',data)
  return data;

}
export const show_developers= async()=>{
  console.log('Show post is calling from api')
  const data = await fetch('http://localhost:3003/client/developers',{
    method:'GET',
    headers:{'Content-Type':'application/json'},
  }).then(res=>res.json())
  // .then(response => console.log("show post Done",response))
  console.log('data from api',data)
  return data;

}
export const invite_developer = async(invitedata )=>{
  console.log('invite calling  calling from API',invitedata)
  await fetch('http://localhost:3003/client/invitedeveloper',{
    method:'POST',
    body:JSON.stringify(invitedata),
    headers: {'Content-Type':'application/json'}
  }).then(res=>res.json())
  // .then(res=>{console.log(res)})
  .catch(error=>alert(error))
}

export const add_comment = async(commentdata) =>{
  console.log('add comment calling  calling from API',commentdata)
  await fetch('http://localhost:3003/client/addcomment',{
    method:'POST',
    body:JSON.stringify(commentdata),
    headers: {'Content-Type':'application/json'}
  }).then(res=>res.json())
  // .then(res=>{console.log(res)})
  .catch(error=>alert("comment",error))
}
export const add_task = async(taskdata) =>{
  console.log('task data  calling from API',taskdata)
  await fetch('http://localhost:3003/client/addtask',{
    method:'POST',
    body:JSON.stringify(taskdata),
    headers: {'Content-Type':'application/json'}
  }).then(res=>res.json())
  // .then(res=>{console.log(res)})
  .catch(error=>alert("comment",error))
}