function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/analyze', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            textUrl: formText
        })
    })
    .then(res => res.json())
    .then(function (res) {
        console.log('response from /analyze:', res);
        document.getElementById('score_tag').innerHTML = res.score_tag;
        document.getElementById('agreement').innerHTML = res.agreement;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('confidence').innerHTML = res.confidence;
        document.getElementById('irony').innerHTML = res.irony;
    })
}

export { handleSubmit }
