export const add_developer = async(signupdata )=>{
  console.log('SignUP is calling from APi',JSON.stringify(signupdata))
  await fetch('http://localhost:3003/user/developersignup',{
    method:'POST',
    body:JSON.stringify(signupdata),
    headers: {'Content-Type':'application/json'}
  }).then(res=>res.json())
  .then(res=>{console.log(res)
  }).catch(error=>alert(error))
}


export const add_client = async(signupdata )=>{
  console.log('SignUP is calling from API',signupdata)
  await fetch('http://localhost:3003/user/clientsignup',{
    method:'POST',
    body:JSON.stringify(signupdata),
    headers: {'Content-Type':'application/json'}
  }).then(res=>res.json())
  .then(res=>{console.log(res)
  }).catch(error=>alert(error))
}