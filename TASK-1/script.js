document.getElementById("regform")
        .addEventListener("submit", submit_form);

function submit_form(event){
    event.preventDefault();

    const NAME = document.getElementById("Name").value.trim();
    const DOB = document.getElementById("Dob").value;
    const EMAIL = document.getElementById("Email").value.trim();
    const DEPT = document.getElementById("Dept").value;
    const PHNO = document.getElementById("Phno").value.trim();
    const USERNAME = document.getElementById("Username").value.trim();
    const PASSWORD = document.getElementById("Password").value.trim();

    const result = document.getElementById("result");

    if(!NAME || !DOB || !EMAIL || !DEPT || !PHNO || !USERNAME || !PASSWORD){
        result.style.color = "red";
        result.textContent = "All fields are required";
        return;
    }

    fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ NAME, DOB, EMAIL, DEPT, PHNO, USERNAME, PASSWORD})
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            result.style.color = "green";
            result.textContent = "Registration Successful";
            document.getElementById("regform").reset();
        } else {
            result.style.color = "red";
            result.textContent = data.message;
        }
    })
    .catch(err => {
        result.style.color = "red";
        result.textContent = "Server Error";
        console.error(err);
    });
}
