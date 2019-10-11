function long(){
    const str1=document.getElementById("first").value
    const str2=document.getElementById("second").value
    const longest=maxi(str1,str2)
    if(str1.length>str2.length)
    document.getElementById("result").innerHTML="The longest string length is: "+longest+" that is str1 with value "+str1;
    if(str2.length>str1.length)
    document.getElementById("result").innerHTML="The longest string length is: "+longest+" that is str2 with value "+str2;

}
function maxi(str1,str2)
{
   return Math.max(str1.length, str2.length)
}

 function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("click").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("click").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }