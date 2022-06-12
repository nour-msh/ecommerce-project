const btn=document.getElementById("signupButton");
const myName=document.getElementById("name");
const myNumber= document.getElementById("number");
const myEmail=document.getElementById("email");
const myPassword=document.getElementById("password");

btn.addEventListener("onclick",SignUp)
function SignUp(){
    let data = new FormData();
    data.append('name', myName.value);
    data.append('number', myNumber.value);
    data.append('email', myEmail.value);
    data.append('password', myPassword.value);

    axios({
        method: 'post',
        url: 'Http:/api/customer/register',
        data: data,
    })
      .then(function (response) {
          console.log(response);
          console.log("hi");
        //   window.location.href="file:///C:/Users/user/Desktop/frontEnd_Delizzia/profile.html";
        }
        
    )
}