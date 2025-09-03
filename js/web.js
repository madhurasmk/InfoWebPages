document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnSubmit").addEventListener("click", function() {
        // Get values from input fields
        let msg=""
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        if (name == "" || email == "" || phone ==""){
            msg = "All fields are required"
        }
        storedItem = localStorage.getItem("storedItem");

        if (msg==""){
        // Display the values on the web page
        document.getElementById("output").innerHTML =
            `
            <font color= "Blue"><h5>  You entered the following data: </h5>
            <strong>Name:</strong> Dr. ${name} <br>
             <strong>Email:</strong> ${email} <br>
             <strong>Phone:</strong> ${phone}</font>
             `;
        }
        else{
            document.getElementById("output").innerHTML = msg;

        }

    });

    document.getElementById("btnClear").addEventListener("click", function() {
        document.getElementById("myForm").reset();
        document.getElementById("output").innerHTML = ""; // Clear displayed data
        document.getElementById("openedText").innerHTML="";
    });
});
