//DOM節點
const addBookBtn = document.querySelector(".add_book_btn");
const Name = document.querySelector("#Name");
const isbn = document.querySelector("#isbn");
const author = document.querySelector("#author");
const price =document.querySelector("#price");
const type = document.querySelector("#type");
const inventory = document.querySelector("#inventory");
const sales = document.querySelector("#sales");



let sourceData = [];


addBookBtn.addEventListener("click",function(){    
    let body = {
    
        "book_list": [
            {
                "name": Name.value,
                "isbn": isbn.value,
                "author": author.value,
                "price": +price.value,
                "type": type.value,
                "inventory": +inventory.value,
                "sales": +sales.valueq
            }
        ]
        
    }

fetch("http://localhost:8080/add_book",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(body)
})
//轉成json格式
.then(function(response){
    return response.json();
})
//回傳資料
.then(function(data){
    console.log(body)
    console.log(data);
    sourceData = data;
    console.log(sourceData);
})
//錯誤處理
.catch(function(error){

})

})

