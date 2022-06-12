document.getElementById("signupBtn").onclick=openFirstForm;
document.getElementById("closeBtn").onclick=closeFirstForm();
document.getElementById("loginBtn").onclick=openSecondForm;
document.getElementById("secCloseBtn").onclick=closeSecondForm();
document.getElementById("categoriesBtn").onclick=dropDown;


function openFirstForm(){
    document.getElementById("signupForm").style.display = "block";
  }

  function closeFirstForm(){
    document.getElementById("signupForm").style.display = "none";
  }

  function openSecondForm(){
    document.getElementById("loginForm").style.display = "block";
  }
  function closeSecondForm(){
    document.getElementById("loginForm").style.display = "none";
  }
  function dropDown(){
    document.getElementById("myDropDown").classList.toggle("show");
  }