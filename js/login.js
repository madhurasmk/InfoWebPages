 document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("btnSubmit").addEventListener("click", function () {
    let user = document.getElementById("username").value.trim().toLowerCase();
    let pass = document.getElementById("password").value.trim();
  // List of valid users with their passwords
    let users = [
        { username: "madhura", password: "madhu" },
        { username: "john", password: "doe123" },
        { username: "alice", password: "alicepass" }
    ];

    // Check if the user exists in the array
    let validUser = users.find(u => u.username === user && u.password === pass);

    if (validUser) {
        document.getElementById("output").innerHTML = `<span style="color:green;">Welcome, ${user}!</span>`;

//    if (user === "madhura" && pass === "madhu") {
//        document.getElementById("output").innerHTML = `<span style="color:green;">Welcome, ${user}!</span>`;

        // Define data correctly
        let data = [
            ["Username", "Password"], // Header row
            [user, pass] // User credentials
        ];

        // Create worksheet and workbook
        let ws = XLSX.utils.aoa_to_sheet(data);
        let wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

        // Generate and download the Excel file
        XLSX.writeFile(wb, "user_data.xlsx");

        // Redirect after a short delay to ensure file download
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000); // 1-second delay before redirecting
    } else {
        document.getElementById("output").innerHTML = `<span style="color:red;">Login Failed!</span>`;
    }

    // Reset form AFTER checking credentials
    document.getElementById("loginForm").reset();
});


        document.getElementById("btnClear").addEventListener("click", function () {
            document.getElementById("loginForm").reset();
            document.getElementById("output").innerHTML = ""; // Clear output message
        });
    });