// const url="https://dummyjson.com/users?limit=2";
// const pr=fetch(url);
//         pr.then((res)=>{
//             return res.json();
//         })
//         .then((data)=>{
//         console.log("Name=",data.users[0].firstName);
//         console.log("Email=",data.users[0].email);
//         console.log("IP=",data.users[0].ip);
//         console.log("Mac Address=",data.users[0].macAddress);
//         console.log("Name=",da.firstName);
//         console.log("Email=",da.email);
//         console.log("IP=",da.ip);
//         console.log("Mac Address=",da.macAddress);

//         })
//         .catch((err)=>{
//             console.error("Error:",err.message)
//         })

const f1 = async()=>{
    try{
        const res=await fetch("https://dummyjson.com/users?limit=2");
        const jsondata=await res.json();
        jsondata.users.forEach((da)=>{
            console.log("name=",da.firstName);
            console.log("email=",da.email);
            console.log("IP=",da.ip);
            console.log("Mac Address=",da.macAddress);
            console.log("");
        })
    }
    catch(err){
        console.log("Error",err.message);
    }
}
f1();
