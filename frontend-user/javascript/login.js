const btn = document.getElementById("loginButton");
const Email= document.getElementById("myEmail");
const Password= document.getElementById("myPassword");
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