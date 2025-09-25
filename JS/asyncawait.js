function login(){
    setTimeout(()=>
    {
        console.log("login here");
    },2000)
}
function getData(){
    setTimeout(()=>{
        console.log("Aditya Kumar");
    },1000)
}
function displayData(){
    setTimeout(()=>{
        console.log("display end");
    },3000)
}
function attemptTest(){
    setTimeout(()=>{
        console.log("attempt test end");
    },2500)
}
login();
getData();
displayData();
attemptTest();
console.log("call other application");