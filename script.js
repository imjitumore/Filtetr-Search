let products=
{
    data:
    [{
        productNmae:"Regular black T-shirt",
        size:"large",
        category:"topwear",
        price:"120$",
        image:"tshirt1.jpg"
    },
    {
        productNmae:"Half white T-shirt",
        size:"Medium",
        category:"topwear",
        price:"80$",
        image:"tshirt2.jpg"
    },
    {
        productNmae:"Mens T-shirt",
        size:"Xl",
        category:"topwear",
        price:"170$",
        image:"topWear1.jpg"
    },
    {
        productNmae:"Regular shirt ",
        size:"large",
        category:"topwear",
        price:"79$",
        image:"topWear3.jpg"
    },
    {
        productNmae:"Full T-shirt",
        size:"large",
        category:"topwear",
        price:"99$",
        image:"topWear2.jpg"
    },
    {
        productNmae:"Smart Watch",
        category:"watch",
        price:"309$",
        image:"watch1.jpg"
    },
    {
        productNmae:"Mens Watch",
        category:"watch",
        price:"160$",
        image:"watch2.jpg"
    },
    {
        productNmae:"Black jacket",
        category:"jacket",
        price:"179$",
        image:"jacket1.jpg"
    },
    {
        productNmae:"Mens jacket",
        category:"jacket",
        price:"130$",
        image:"jacket2.jpg"
    },
    {
        productNmae:"Jeans",
        category:"bottomwear",
        price:"200$",
        image:"bottomWear1.jpg"
    }
]
}
for(let i of products.data)
{
    //create a card
    let card = document.createElement("div")
    //card shoude have category qand stay hiddle initially
    card.classList.add("card",i.category ,"hide")
    //image div
    let imagecontainer = document.createElement("div")
    imagecontainer.classList.add("image-container")
    //img tag
    let image = document.createElement("img")
    image.setAttribute("src",i.image)
    //append image in imagecontainer
    imagecontainer.appendChild(image)
    card.appendChild(imagecontainer)

    //create div for details name
    let container = document.createElement("div")
    container.classList.add("container")
    let name = document.createElement("h5")
    name.classList.add("product-name")
    name.innerText = i.productNmae.toLocaleUpperCase()
    container.appendChild(name)

    //price
    let price = document.createElement("h5")
    price.classList.add("price")
    price.innerText = i.price.toUpperCase()
    container.appendChild(price)

    //parameter passed from button(parameter same as category)
    function filterProduct(value){
        let button = document.querySelectorAll(".btn-val")
        button.forEach((buttons)=>{
            if(value.toUpperCase()==buttons.innerText.toUpperCase())
            {
                buttons.classList.add("active")
            }
            else{
                buttons.classList.remove("active")
            }
        })


         //select all card
        let elements = document.querySelectorAll(".card")
        
            //display all card on button click
            elements.forEach((elements)=>{
            if(value == "all")
            {
                elements.classList.remove("hide")
            }
            else
            {
                if(elements.classList.contains(value))
                {
                    elements.classList.remove("hide")
                }
                else
                {
                    elements.classList.add("hide")
                }
            }
            })

    }

    //Initially display all aruguments
    window.onload = () =>{
        filterProduct("all")
    }

    //Search Product
    document.getElementById("search").addEventListener("click",()=>{
        let searchInput = document.getElementById("search-input").value
        let elements = document.querySelectorAll(".product-name")
        let cards = document.querySelectorAll(".card")
        console.log(searchInput)

        elements.forEach((elements,index)=>{
            if(elements.innerText.includes(searchInput.toUpperCase()))
            {
                cards[index].classList.remove("hide")
            }
            else
            {
                cards[index].classList.add("hide")
            }
        })
    })
   
    card.appendChild(container)
    //card append in product div
    document.getElementById("products").appendChild(card)
}
