//analog clock
setInterval(()=>
{
    let currentTime = new Date();

    let currentSeconds = currentTime.getSeconds();
    let sRotate = currentSeconds * 6;
    document.querySelector('#asec').style.transform = "rotate("+ sRotate+ "deg)";
    
    let currentMinutes = currentTime.getMinutes();
    let mRotate = currentMinutes * 6;
    document.querySelector("#amin").style.transform = "rotate("+ mRotate+ "deg)";

    let currentHours = currentTime.getHours();
    let hRotate = currentHours * 30 + currentMinutes/2;
    document.querySelector("#ahrs").style.transform = "rotate("+ hRotate+ "deg)";


}, 1000);

//digital clock
setInterval(() => 
{
    let time = new Date()
    
    let hr = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let dhr= document.querySelector('#dhrs');
    dhr.innerHTML= hr%12 + ":";
    let dmn = document.querySelector('#dmin');
    dmn.innerHTML= m + ":";
    let dsc = document.querySelector('#dsec');
    dsc.innerHTML= s
    
if(hr<=12)
{
document.querySelector('#ampm').innerHTML="Am";
}
else
{
document.queryselector('#ampm').innerHTML="Pm";
}

}, 1000);