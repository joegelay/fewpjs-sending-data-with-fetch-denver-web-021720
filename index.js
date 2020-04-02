// Add your code here

function submitData(userName, userEmail) {

const destinationURL = "http://localhost:3000/users"
const formData = {
    name: userName,
    email: userEmail
}

const configurationObject = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
};

return fetch(destinationURL, configurationObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object){
        document.body.innerHTML = object["id"]
    })
    .catch(error => {
        document.body.innerHTML = error.message
    });
}