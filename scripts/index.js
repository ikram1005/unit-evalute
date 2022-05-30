// Add the coffee to local storage with key "coffee"
const url=` https://masai-mock-api.herokuapp.com/coffee/menu`;
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    append(res.menu.data)
})
.catch(function(err){
    console.log(err);
})
function append(data){
    data.forEach(function (elem){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.image
        let title =document.createElement("h1");
        title.innerText=elem.title;
        let desc=document.createElement("p");
        desc.innerText=elem.description;
        let price=document.createElement("p");
        price.innerText=elem.price;

        let btn=document.createElement("button");
        btn.innerText="add to bucket";
        btn.setAttribute("id","add_to_bucket");
        btn.addEventListener("click",function(){
            addtocart(elem)
        });
        div.append(img,title,price,desc,btn);
        document.getElementById("menu").append(div);
    });

    var coffeeData=JSON.parse(localStorage.getItem("coffee"))||[];
    document.getElementById("coffee_count").innerText=coffeeData.length||0;

    function addtocart(elem){
        console.log(coffeeData)
        coffeeData.push(elem);
        localStorage.setItem("coffee",JSON.stringify(coffeeData));
        window.location.reload();
    }
}