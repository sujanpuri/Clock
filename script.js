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


}, 100);

//digital clock
setInterval(() => 
{
    let time = new Date()
    
    let hr = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let ampm = (hr < 12) ? "AM" : "PM";
    hr = (hr < 12) ? hr % 12 : hr;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    document.querySelector('#dhrs').innerHTML = hr + ":";
    document.querySelector('#dmin').innerHTML = m + ":";
    document.querySelector('#dsec').innerHTML = s;
    document.querySelector("#ampm").innerHTML = ampm;
    
}, 100);