var products = [];
if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
}

function addproduct() {
    var productid = document.getElementById("productid").value;
    var price = document.getElementById("price").value;
    var image = document.getElementById("imageurl").value;
    var category = document.getElementById("category").value;
    var pdescription = document.getElementById("pdescription").value;
    document.getElementById("productid").value = "";
    document.getElementById("price").value = "";
    document.getElementById("imageurl").value = "";
    document.getElementById("category").value = "";
    document.getElementById("pdescription").value = "";

    var details = {
        Productid: productid,
        Price: price,
        Image: image,
        Category: category,
        Pdescription: pdescription
    };

    products.push(details);
    console.log(products);
    localStorage.setItem("products", JSON.stringify(products));
    showproduct();
}

function showproduct() {
    if (products) {
        var index = 0;
        var productlists = "";
        while (index < products.length) {
            const id = index + 1;

            productlists = productlists + "<div class='data'>" + "<img class='image' src=" + products[index].Image + ">"
                +"<span class='price'>" + "MRP : ₹  " + products[index].Price + "</span>" + "<br>"
                + "<span class='category'>" + products[index].Category + "</span>" + "<br>"
                + "<span class='pdescription'>" + products[index].Pdescription + "</span>" + "<div class='productbtn'>" 
                // + "<button onclick='Delete(" + id + ")'>Delete<button>"
                // + "<button onclick='update(" + id + ")'>Update<button>" + "</div>" 
                + "<button class='atc' > Details"+
                 "<button class='atc' onclick='counts() , atc("+ products[index].Productid +")'> Add Cart" + "</div>"

                + "</div>";
            index++;
        }
        document.getElementById("show").innerHTML = productlists;
    }
}
// var count = 0;
// function counts(){
//         count =count + 1;
//     document.getElementById("cart").innerHTML = count;
//     localStorage.setItem("count" , JSON.stringify(count));
// }

var newidarr =[];
function atc(pid){
       var newid = pid;
      newidarr.push(newid);
    // console.log(pid);
    localStorage.setItem("Newid", JSON.stringify(newidarr));  

}






// function Delete(pid) {
//     var index = 0;
//     while (index < products.length) {
//         if (index + 1 == pid) {
//             products.splice(index, 1);
//         }
//         index++;
//     }
//     localStorage.setItem("products", JSON.stringify(products));
//     showproduct();
// }

// function update(pid) {
//     var index = 0;
//     while (index < products.length) {
//         if (index + 1 == pid) {
//             document.getElementById("productid").value = products[index].Productid;
//             document.getElementById("price").value = products[index].Price;
//             document.getElementById("imageurl").value = products[index].Image;
//             document.getElementById("category").value = products[index].Category;
//             document.getElementById("pdescription").value = products[index].Pdescription;
//         }
//         index++;
//     }
//     localStorage.setItem("products", JSON.stringify(products));
//     localStorage.setItem("products", products);
//     document.getElementById("addsave").innerText = "Save Product";
//     addsave.removeAttribute("onclick");
//     document.getElementById("addsave").setAttribute("onclick", "saveproduct(" + pid + ")");

// }

// function saveproduct(pid) {
//     var UProductid = document.getElementById("productid").value;
//     var UPrice = document.getElementById("price").value;
//     var UImage = document.getElementById("imageurl").value;
//     var UCategory = document.getElementById("category").value;
//     var UPdescription = document.getElementById("pdescription").value;

//     index = 0;
//     while (index < products.length) {
//         if (index + 1 == pid) {
//             products[index].Productid = UProductid;
//             products[index].Price = UPrice;
//             products[index].Imageurl = UImage;
//             products[index].Category = UCategory;
//             products[index].Pdescription = UPdescription;
//             break;
//         }
//         index++;
//     }
//     localStorage.setItem("products", JSON.stringify(products));
//     document.getElementById("addsave").innerText = "Add Product";
//     addsave.removeAttribute("onclick");
//     document.getElementById("addsave").setAttribute("click", "addproduct()");
//     document.getElementById("productid").value = "";
//     document.getElementById("price").value = "";
//     document.getElementById("imageurl").value = "";
//     document.getElementById("category").value = "";
//     document.getElementById("pdescription").value = "";
//    showproduct();

// }