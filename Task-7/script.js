function validateName() {
        let name = document.getElementById("name").value;
        if (name.length < 3) {
            document.getElementById("nameError").innerHTML = "Name must be at least 3 characters";
            return false;
        } else {
            document.getElementById("nameError").innerHTML = "";
            return true;
        }
    }

    function validateEmail() {
        let email = document.getElementById("email").value;
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(pattern)) {
            document.getElementById("emailError").innerHTML = "Enter valid email";
            return false;
        } else {
            document.getElementById("emailError").innerHTML = "";
            return true;
        }
    }

    function validateFeedback() {
        let feedback = document.getElementById("feedback").value;
        if (feedback.length < 5) {
            document.getElementById("feedbackError").innerHTML = "Feedback too short";
            return false;
        } else {
            document.getElementById("feedbackError").innerHTML = "";
            return true;
        }
    }

    function submitForm() {
        if (validateName() && validateEmail() && validateFeedback()) {
            alert("Feedback Submitted Successfully!");
        } else {
            alert("Please correct errors before submitting.");
        }
    }