function greetUser(name, age) {
    //alert(`Hello, ${name} and ${age} `);
    // Open a new window
    const newWindow = window.open("", "_blank", "width=300,height=200");

    // Add content to the new window
    if (newWindow) {
        newWindow.document.write(` <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Greeting</title>
                        <style>
                            body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; color:blue }
                        </style>
                    </head>
                    <body>
                        <h1>Hello, Welcome!</h1>
                        <p>This is your greeting message in a new window.</p>
                        <button onclick="window.close()" > Close </button>
                    </body>
                    </html>
                `);
        newWindow.document.close(); // Ensure the document is fully written and ready
    } else {
        alert("Popup blocked! Please allow popups for this website.");
    }
}



function comboSel() {
    mySel = document.getElementById('mySel').value;
    if (mySel)
        window.location.hash = mySel;

}