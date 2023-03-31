var product = JSON.parse(sessionStorage.getItem("product"));
document.getElementById("productInfo").innerHTML = product.title;
document.getElementById("price").innerHTML = "€ " + product.price.toFixed(2); 
//document.getElementById("productImage").src = product.image;
//document.getElementById("orderedPage").append(product.image);
document.getElementById("phoneMailMsg").innerHTML = "If we need to reach out to you, we will either reach you on number " + sessionStorage.getItem("phone") + " or mail " + sessionStorage.getItem("mail");
document.getElementById("fullName").innerHTML = sessionStorage.getItem("name");
document.getElementById("theAddress").innerHTML = sessionStorage.getItem("street") + "<br> " + sessionStorage.getItem("postal") + "<br> " + sessionStorage.getItem("city");
var img = document.createElement("img");
img.src = product.image;
img.alt = product.title;
img.classList.add("productImg");
document.querySelector(".productImg").append(img);

function clearSession(){
    sessionStorage.removeItem("product");
}