
const url="https://api.github.com/users/coderadi007"
const res=fetch(url);
res.then((resp)=>{
    return resp.json();
})
.then((data)=>{
    console.log("Data:",data);
})
.catch((err)=>{
    console.log("error",err);
})
.finally(()=>{
    console.log("fetched done successfully");
})