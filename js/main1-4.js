//DOM節點
const updateBtn = document.querySelector(".updateBtn");
const isbnInput = document.querySelector("#isbn");
const inventoryInput = document.querySelector("#inventory");

let sourceData = [];

updateBtn.addEventListener("click",function(){

    let body=
        {
            "isbn": isbnInput.value,
            "inventory":+inventoryInput.value
        }
    

    fetch("http://localhost:8080/update_inventory",{
        method:"POST",
        headers:{"Content-type":"application/json"},
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