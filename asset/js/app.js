function btnRegister(){

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let province = document.getElementById("opt-province").value;


    let requestBody = {
        "firstName":firstName,
        "lastName":lastName,
        "province":province
    }

    console.log(requestBody);

    fetch("http://localhost:8080/create-student",{
        method: "POST",
        body: JSON.stringify(requestBody),
        headers : {
            "Content-type":"application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showSuccess();
    })

}


function showSuccess(){
    const toastLive = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
    toastBootstrap.show()
}

document.getElementById("btn-register")
        .addEventListener("click", btnRegister);