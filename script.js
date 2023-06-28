let search = () =>{
  document.getElementsByClassName("header")[0].style.display = "none";
  document.getElementById("header-search").style.display="block";
}


let close = () =>{
  document.getElementById("header-search").style.display="none";
    document.getElementsByClassName("header")[0].style.display = "flex";
}

let menu = () =>{
  // let disp = document.getElementById("menu");
  let disp = document.getElementsByClassName("menu-container")[0];
  
  if(disp.style.display === "none" || disp.style.display === ''){
    disp.style.display = "flex";
    document.getElementById("menu-icon").style.display="none";
    document.getElementsByClassName("close-button")[0].style.display="inline-block"
  } else{
    disp.style.display = "none";
    document.getElementById("menu-icon").style.display="block";
        document.getElementsByClassName("close-button")[0].style.display="none";

  }
}