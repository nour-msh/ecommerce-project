const allCat = document.getElementById("categoriesBtn");
allCat.addEventListener("click", function(){
  let data = new FormData();
      axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/api/customer/get_categories',
          data: data,
      })
      .then(function (response) {
          console.log(response);
          }
      )
});