Newid =  JSON.parse(localStorage.getItem("Newid"));
// console.log(Newid[0]);
products =  JSON.parse(localStorage.getItem("products"));
// console.log(products[0].Productid);

const unique_id = [...new Set(Newid)]; //find all unique value 

// console.log(unique_id);


function compare(){
    


var prints ="";

for (var i = 0 ;i< unique_id.length ;i++){
   
    for(var j = 0 ; j< products.length ; j++){
        
        if(unique_id[i] == products[j].Productid){
            
           var uid = products[j].Productid;
            console.log(products[j]);

            prints = prints + "<div class='data'>" + "<img class='image' src=" + products[j].Image + ">"
                +"<span class='price'>" + "MRP : ₹  " + products[j].Price + "</span>" + "<br>"
                + "<span class='category'>" + products[j].Category + "</span>" + "<br>"
                + "<span class='pdescription'>" + products[j].Pdescription + "</span>" + "<div class='productbtn'>" 
                // + "<button onclick='Delete(" + id + ")'>Delete<button>"
                // + "<button onclick='update(" + id + ")'>Update<button>" + "</div>" 
                + "<button  class='cdelete' onclick='cdelete(" + uid + ")' > Delete "+
                 "<button class='buynow'  > Proceed" + "</div>"+ "</div>";
            
        }

        document.getElementById("cartshow").innerHTML = prints;
    }
}
}
var count = 0;
function counts(){
    count =count + 1;
    document.getElementById("cart").innerHTML = count;
    localStorage.setItem("count" , JSON.stringify(count));
}


function cdelete(uid){

    index = 0;
    while(index < unique_id.length){
    if(unique_id[index] == uid){

        unique_id.splice(index , 1);
    }

index++
}
    localStorage.setItem("Newid", JSON.stringify(unique_id));
    compare();
    var cc = JSON.parse(localStorage.getItem("count"));
    cc = cc - 1;
    localStorage.setItem("count" , JSON.stringify(cc));
   }
   
