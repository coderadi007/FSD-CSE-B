function login(cb){
    setTimeout(()=>
    {
        console.log("login here");
        cb();
    },2000)
}
function getData(cb){
    setTimeout(()=>{
        console.log("Aditya kumar");
        cb();
    },1000)
}
function displayData(cb){
    setTimeout(()=>{
        console.log("display end");
        cb();
    },3000)
}
function attemptTest(){
    setTimeout(()=>{
        console.log("attempt test end");
    },2500)
}
login(()=>{
    getData(()=>{
        displayData(()=>{
            attemptTest()
        })
    })
})
console.log("call other appliation");