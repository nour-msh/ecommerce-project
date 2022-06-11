
  let cat=document.getElementById("category").onclick=function(){openForm()};
  let closeButton=document.getElementById("closeBtn").addEventListener("onclick",closeForm());
  let prod=document.getElementById("product").onclick=function(){openSecForm()};
  let secCloseButton=document.getElementById("secCloseBtn").addEventListener("onclick",closeSecForm());
//   let user=document.getElementById("users").addEventListener("onclick", getUsers);


  function openForm(){
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm(){
    document.getElementById("myForm").style.display = "none";
  }

  function openSecForm(){
    document.getElementById("mySecForm").style.display = "block";
  }
  function closeSecForm(){
    document.getElementById("mySecForm").style.display = "none";
  }