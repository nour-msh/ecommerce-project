const btn = document.getElementById("loginButton");
const Email= document.getElementById("email");
const Password= document.getElementById("password");
btn.addEventListener("click", function(){
    let data = new FormData();
        data.append('email', Email.value);
        data.append('password', Password.value);
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