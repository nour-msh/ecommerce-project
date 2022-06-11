
  let cat=document.getElementById("category").onclick=function(){openForm()};
  let closeButton=document.getElementById("closeBtn").addEventListener("onclick",closeForm());
  let prod=document.getElementById("product").addEventListener("onclick", addProduct);
//   let user=document.getElementById("users").addEventListener("onclick", getUsers);


  function openForm(){
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm(){
    document.getElementById("myForm").style.display = "none";
  }