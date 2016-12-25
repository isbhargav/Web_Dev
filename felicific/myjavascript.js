var banner=document.getElementById('banner');
var para=document.getElementById('parachange');
var headerchange=document.getElementById('headchange');
function changeText1()
{
  banner.style.background="#BC5BE6";
  headerchange.innerHTML='Home';
  
}
function changeText2()
{
  banner.style.background="#1CA5FF";
  headerchange.innerHTML='Techinical';
}
function changeText3()
{
  banner.style.background="#FF8731";
  headerchange.innerHTML="Conference";
}
function changeText4()
{
  banner.style.background="#27B44B";
  headerchange.innerHTML="Central Tech";

}
function changeText5()
{
  banner.style.background="#E45444";
  headerchange.innerHTML="Cultural";
}

   

    
    function countdown()
    {

      var now= new Date();
      var eventdate= new Date(2017,2,6);

      var nowtime=now.getTime();
      var eventtime=eventdate.getTime();

      var rem=eventtime - nowtime;

      var s=Math.floor(rem/1000);
      var m=Math.floor(s/60);
      var h=Math.floor(m/60);
      var d=Math.floor(h/24);

      h%=24;
      m%=60;
      s%=60;

      h=(h<10)?"0"+h:h;
      m=(m<10)?"0"+m:m;
      s=(s<10)?"0"+s:s;
      h=h+":";
      m=m+":";
      d=d+":";

      document.getElementById("Days").textContent=d;
      document.getElementById("Hours").textContent=h;
      document.getElementById("Minutes").textContent=m;
      document.getElementById("Seconds").textContent=s;

      setTimeout(countdown,1000)
    }
    
    countdown();
