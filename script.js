var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(e, tabname) {
  console.log("tabName:", tabname)

  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
    }
    for (const tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    e.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
  var sidemeu=document.getElementById("sidemenu");
  function openmenu(){
    sidemeu.style.right="0px";
      console.log("open")
    }
  function closemenu(){
    sidemeu.style.right="-200px";
    console.log("close")
  }