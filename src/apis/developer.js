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