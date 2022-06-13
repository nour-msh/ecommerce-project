
    const bttn=document.getElementById("signupButton");
    const name=document.getElementById("name");
    const number= document.getElementById("number");
    const email=document.getElementById("email");
    const password=document.getElementById("password");

    bttn.addEventListener("click",SignUp())
    function SignUp(){
        let data = new FormData();
        data.append('name', name.value);
        data.append('number', number.value);
        data.append('email', email.value);
        data.append('password', password.value);

        axios.post('http://127.0.0.1:8000/api/customer/register',
        {data: data,},
        {headers:{'authorisation' : `token= $token`
    }})       
        .then(function (response) {
            console.log(response);
            console.log("hi");
            }
            
        )
    };
