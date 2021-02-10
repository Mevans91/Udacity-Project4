function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.urlChecker(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/analyze', {
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
        document.getElementById('score_tag').innerHTML = `Score Tag: ${res.score_tag}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('confidence').innerHTML = `Confidence Score: ${res.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
    })
}

export { handleSubmit }
