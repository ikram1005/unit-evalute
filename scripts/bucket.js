// On clicking remove button the item should be removed from DOM as well as localstorage.
var coffeeData=JSON.parse(localStorage.getItem("coffee"))||[];
console.log(coffeeData)

var total=coffeeData.reduce(function(sum,elem,ind,arr){
    return sum+(+elem.price)
},0);
console.log(total)
document.querySelector("h3").innerText="$"+total

coffeeData.map(function(ele,ind){
    let div=document.createElement("div");
    
    let img=document.createElement("img");
    img.src=ele.image;
    let title=document.createElement("h1");
    title.innerText=ele.title;
    let price=document.createElement("p");
    price.innerText=ele.price;

    let btn=document.createElement("button");
    btn.innerText="remove";
    btn.setAttribute("id","but");
    btn.addEventListener("click",function(){
        removetocart(ele)
    });

    div.append(img,title,price,btn);
    document.getElementById("bucket").append(div);
})
function removetocart(ele,index){
   coffeeData.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(coffeeData));
    window.location.reload();
}