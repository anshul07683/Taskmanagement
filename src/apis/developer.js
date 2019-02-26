export const fetch_invite= async()=>{
  console.log('fetch invite is calling from api')
  const data = await fetch('http://localhost:3003/developer/fetchinvite',{
    method:'GET',
    headers:{'Content-Type':'application/json'},
  }).then(res=>res.json())
  // .then(response => console.log("show post Done",response))
  console.log('data from api',data)
  return data;

}
export const accept_invite=async(data)=>{
  console.log('accept invite calling from api',data);
  await fetch('http://localhost:3003/developer/inviteaccept',{
    method:'POST',
    body:JSON.stringify(data),
    headers: {'Content-Type':'application/json'}
  }).then(res=>res.json())
  .catch(error=>alert(error))
}

export const reject_invite =async(data)=>{
  console.log('accept invite calling from api',data);
  await fetch('http://localhost:3003/developer/invitereject',{
    method:'POST',
    body:JSON.stringify(data),
    headers: {'Content-Type':'application/json'}
  }).then(res=>res.json())
  // .then(res=>{console.log(res)})
  .catch(error=>alert(error))

}