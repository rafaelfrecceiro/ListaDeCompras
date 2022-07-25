document.querySelector("#contentNewProduct").addEventListener("keydown", (event) => {
    if(event.keyCode == 13){
        newProduct()
    }
})

function newProduct(){
    let content = document.querySelector("#contentNewProduct").value
    if(content == ""){
        alert("Favor preencher com um produto válido")
        return false
    }

    document.querySelector("#contentNewProduct").value = ""

    let prod = "<div class='post'><div class='content'>"+ content +"</div><input class='actions' content='"+  content +"' type='button' onclick='removeProduct(event)' value='Remover'/></div>"

    document.querySelector(".board").innerHTML += prod
}

function removeProduct(event){
    let prodRemove = event.target.getAttribute("content")
    let products = document.querySelectorAll(".post")
    for(let x = 0; x < products.length; x++){
        if(products[x].children[0].innerHTML == prodRemove){
            products[x].remove()
        }
    }
}