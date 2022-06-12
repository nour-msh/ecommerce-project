const btn = document.getElementById("loginButton");
const email= document.getElementById("email");
const password= document.getElementById("password");
btn.addEventListener("click", function(){
    let data = new FormData();
        data.append('email', email.value);
        data.append('password', password.value);
        axios({
            method: 'post',
            url: 'Http://127.0.0.1:8000/api/customer/login',
            data: data,
        })
        .then(function (response) {
            console.log(response);
           console.log("hi")
            });
        });