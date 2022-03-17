const form = document.getElementById("feedback-form")

form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    const formData = new FormData(event.target)
    fetch('/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

    event.target.reset()
})