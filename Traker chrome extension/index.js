/************************************************ 
*                  Variables
************************************************/ 
const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const savedEl = document.getElementById("saved-el")
const deleteBtn = document.getElementById("delete-btn")
const tabSaveBtn = document.getElementById("tab-save-btn")

// array to save all the links 
let mySaves = []

// variable to save each link 
let selectedItem = ""

// get the value of local storage at upon refreshing
const getMySavesFromLocalStorage = JSON.parse(localStorage.getItem("mySaves"))

/************************************************ 
*                  Functions
************************************************/ 

// ==============================================
//             tab save button                     
// ==============================================

tabSaveBtn.addEventListener("click" , function tabSaveButtonClicked()
    {
        // chrome object contains tab object that has query method to get current url
        // an object is passed to query to indicate that the url of active and current page is needed 
        // function parameter value is obtained from chrome when query method is executed
        chrome.tabs.query({active : true , currentWindow : true} ,  function (tabs) {
            mySaves.push(tabs[0].url)
            localStorage.setItem("mySaves" , JSON.stringify(mySaves))
            printItems(mySaves)
        } )

    }
)

// ==============================================
//                 save button                     
// ==============================================
 
saveBtn.addEventListener("click" , function saveButtonClicked()
    {
        mySaves.push(inputEl.value) 
        inputEl.value = "" 
        // save key value pairs to the local storage in browser using setItem method 
        localStorage.setItem("mySaves", JSON.stringify(mySaves))
        printItems(mySaves)
        console.log("Save button is clicked")
    }
)

// ==============================================
//                 delete button                     
// ==============================================

deleteBtn.addEventListener("dblclick" , function deleteButtonClicked()
    {
        console.log("Delete button is clicked")
        localStorage.clear()
        mySaves = []  
        printItems(mySaves)   
    }
)
// ==============================================
//              print saved items                    
// ==============================================

function printItems(currentArray)
    {
        selectedItem = ""
        for (let index = 0; index < currentArray.length; index++)
                {
                    selectedItem += `
                    <li>
                    <a href='${currentArray[index]}' target = '_blank'>
                    ${currentArray[index]}
                    </a>
                    </li>
                    ` ;
                }
        savedEl.innerHTML = selectedItem
    }


// ==============================================
//       print saved items upon refresh                    
// ==============================================

if (getMySavesFromLocalStorage) {
    mySaves = getMySavesFromLocalStorage
    printItems(mySaves)
    
} 

// ==============================================
//             hover over buttons                    
// ==============================================


$("#save-btn").hover(
  
    // mouse-enter event
    function mouseOver() {

        // changing the color
        $("#delete-btn").css('transform', 'scale(0.85,0.85)')
    },
    function endHover() {

        // changing the color
        $("#delete-btn").css('transform', 'scale(1,1)')
    })

$("#save-btn").hover(

    // mouse-enter event
    function mouseOver() {

        // changing the color
        $("#tab-save-btn").css('transform', 'scale(0.85,0.85)')
    },
    function endHover() {

        // changing the color
        $("#tab-save-btn").css('transform', 'scale(1,1)')
})

$("#delete-btn").hover(
  
    // mouserover 
    function mouseOver() {

        $("#save-btn").css('transform', 'scale(0.85,0.85)')
    },
    function endHover() {

        $("#save-btn").css('transform', 'scale(1,1)')
    })

$("#delete-btn").hover(

    // mouse-enter event
    function mouseOver() {

        // changing the color
        $("#tab-save-btn").css('transform', 'scale(0.85,0.85)')
    },
    function endHover() {

        // changing the color
        $("#tab-save-btn").css('transform', 'scale(1,1)')
})

$("#tab-save-btn").hover(
  
    // mouse-enter event
    function mouseOver() {

        // changing the color
        $("#save-btn").css('transform', 'scale(0.85,0.85)')
    },
    function endHover() {

        // changing the color
        $("#save-btn").css('transform', 'scale(1,1)')
    })

$("#tab-save-btn").hover(

    // mouse-enter event
    function mouseOver() {

        // changing the color
        $("#delete-btn").css('transform', 'scale(0.85,0.85)')
    },
    function endHover() {

        // changing the color
        $("#delete-btn").css('transform', 'scale(1,1)')
})