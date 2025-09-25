
function waitfortwoseconds()
{
    const ms=new Date().getTime()+10000;
    while(new Date().getTime()>ms);
}
function register()
{
    waitfortwoseconds();
    console.log("register end");
}
function sendemail()
{
    waitfortwoseconds();
    console.log("email end");
}
function login()
{
    waitfortwoseconds();
    console.log(" login end");
}
function getData()
{
    waitfortwoseconds();
    console.log("Aditya Kumar");
}
function displayData()
{
    waitfortwoseconds();
    console.log("displaying fetch data");
}
function AttemptTest(){
    waitfortwoseconds();
    console.log("test is attempted");
}

getData();
displayData();
AttemptTest();
console.log("call other Application")
