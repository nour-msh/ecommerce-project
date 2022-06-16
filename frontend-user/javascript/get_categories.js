const allCat = document.getElementById("categoriesBtn");
allCat.addEventListener("click", function () {
  let data = new FormData();
  axios({
    method: "get",
    url: "http://127.0.0.1:8000/api/customer/get_categories",
    data: data,
  }).then((res) => {
    const cats = res.data.categories;
    console.log(cats);
    var divs = document.getElementById("myDropDown");
    console.log(divs)
    for (var i = 0; i <= cats.length-1; i++) {
      divs.innerHTML += `<a>${cats[i].name}</a>`;
   
}
  });
});
