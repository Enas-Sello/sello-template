let span = document.querySelector(".go-top");
window.onscroll = function(){
  //  console.log(this.scrollY);
 if (this.scrollY >= 1100){
     span.classList.add("show")
  }
else{
     span.classList.remove("show")
  }
  //this.scrollY >= 1100 ? span.classList.add("show") : span.classList.remove("show")
};

span.onclick = function() {
    window.scroll({
        top:0 ,behavior:"smooth",
    })
};