function urlChecker(inputText) {
    console.log("::: Running urlChecker :::", inputText);

    if(inputText.match(/https/i)) {
        console.log("URL is valid")
    } else{
        alert("The URL you've entered is not valid. Please try again")
    }
}

export { urlChecker }
