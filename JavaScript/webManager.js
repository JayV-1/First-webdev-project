const themeButton = document.getElementById("btn");
const header = document.getElementsByTagName("ul")[0];

let num = 0;

function lightTheme(){
    document.body.style.backgroundColor = "#675B6E";
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("h4")[0].style.color = "white";
};

function darkTheme(){
    document.body.style.backgroundColor = "black";
    document.getElementsByTagName("h1")[0].style.color = "#E6B950";
    document.getElementsByTagName("h4")[0].style.color = "#E6B950";
};

function theming(){
    if (num == 1) {
        lightTheme()

    } else if (num == 0) {
        darkTheme()

    };
};

function switchTheme(){
    if (num == 1) {
        num = 0

    } else if (num == 0) {
        num = 1

    }; 
};

header.addEventListener("click", function(){
    console.log(header)
    try{
        
        // wait(10000);
        theming();  
    } catch(err){
        console.log(err)
    }
    
});

themeButton.addEventListener("click", function(){
    console.log(num)
    
    
    switchTheme()
    theming()
    console.log("dumb button")
});

