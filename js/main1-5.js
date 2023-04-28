// DOM節點
const updateSalesBtn =document.querySelector(".updateSalesBtn");
const isbnInput = document.querySelector("#isbn");
const priceInput = document.querySelector("#price");

let sourceData=[];

updateSalesBtn.addEventListener("click",function(){
    
    let body = {
        "isbn": isbnInput.value,
        "price": +price.value
    }


    fetch("http://localhost:8080/update_price",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body),
    })

    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(body)
        console.log(data);
        sourceData = data;
        console.log(sourceData);
    })

    .catch(function(error){

    })
})