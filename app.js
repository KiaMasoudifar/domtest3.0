//let linkChange = document.getElementById("link")

//linkChange.href = "https://www.aljazeera.com"


//anchorElement = document.querySelector("#link")

//anchorElement.href = "https://www.google.com"


//How to add element

//1 Create

let newAnchorElement = document.createElement('a');
newAnchorElement.href = "https://www.google.com"
newAnchorElement.textContent = "Google"

//2 Get the parent element

let firstParagraph = document.querySelector('p')


//3 Insert the element into the parent element

firstParagraph.append(newAnchorElement)

//Removing Elements

//1 Select element

let firstH1Element = document.querySelector("h1")


//2 Remove it

firstH1Element.remove()
//firstH1Element.parentElement.removeChild(firstH1Element) //for older borwser

//Move Elements

firstParagraph.parentElement.append(firstParagraph)