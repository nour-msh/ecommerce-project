
  let cat=document.getElementById("category").onclick=function(){openForm()};
  let closeButton=document.getElementById("closeBtn").addEventListener("onclick",closeForm());
  let prod=document.getElementById("product").onclick=function(){openSecForm()};
  let secCloseButton=document.getElementById("secCloseBtn").addEventListener("onclick",closeSecForm());
//   let user=document.getElementById("users").addEventListener("onclick", getUsers);


  function openForm(){
    document.getElementById("myForm").style.display = "block";
    document.getElementById("category").style.color="#50c5fc";
    document.getElementById("category").style.backgroundColor="#a2dffc62"
  }

  function closeForm(){
    document.getElementById("myForm").style.display = "none";
    document.getElementById("category").style.color="";
  }

  function openSecForm(){
    document.getElementById("mySecForm").style.display = "block";
    document.getElementById("product").style.color="#50c5fc";
    document.getElementById("product").style.backgroundColor="#a2dffc62"
  }
  function closeSecForm(){
    document.getElementById("mySecForm").style.display = "none";
    document.getElementById("product").style.color="";
  }