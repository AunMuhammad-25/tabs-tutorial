const tabButtons=document.querySelectorAll(".tab-link");
for ( i=0; i<tabButtons.length; i++ ){
    tabButtons[i].addEventListener("click",function () {
        var tabName=this.dataset.tab;
        var tabContent=document.getElementById(tabName);
        var allTabContent=document.querySelectorAll(".tabcontent");
        var allTabButton=document.querySelectorAll(".tab-link");

        for(var j=0; j<allTabContent.length; j++){
            allTabContent[j].style.display="none";
        }

        for (var k = 0; k < allTabButton.length; k++) {
            allTabButton[k].classList.remove("active");
          }
  

        tabContent.style.display="block";
        
        this.classList.add("active");
    })
}
document.querySelector(".tab-link").click();