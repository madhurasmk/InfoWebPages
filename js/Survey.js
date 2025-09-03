document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnSubmit").addEventListener("click", function () {
    let can_name = document.getElementById("candidatename").value.trim().toLowerCase();
    let can_college = document.getElementById("college").value.trim();
    let can_email = document.getElementById("candidateemail").value.trim();

    // Validate email format (if needed)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(can_email)) {
      alert("Please enter a valid email address");
      document.getElementById("candidateemail").focus();
      return;
    }

    // Get selected radio button values
    let gradYear1 = getSelectedRadio('gradYear');
    let position1 = getSelectedRadio('position');
    let workauth1 = getSelectedRadio('workauth');

    let salary = document.getElementById("salary").value.trim();
    let availability = document.getElementById("offered").value.trim();
    let timeframe = document.getElementById("timeframe").value.trim();

    let timestamp = getTimestamp();

    // Lab labels (for headers)
    let labcanName = document.getElementById("labcanName").textContent;
    let labcanEmail = document.getElementById("labcanEmail").textContent;
    let labcanCollege = document.getElementById("labcanCollege").textContent;
    let labGrad = document.getElementById("labgrad").textContent;
    let labPosition = document.getElementById("labposition").textContent;
    let labWorkAuth = document.getElementById("labworkauth").textContent;
    let labSal = document.getElementById("labsalary").textContent;
    let labOffered = document.getElementById("laboffered").textContent;
    let labTimeframe = document.getElementById("labtimeframe").textContent;

    // List of valid users with their passwords (validation example)
    let users = [
      { username: "madhura", password: "madhu" },
      { username: "john", password: "doe123" },
      { username: "alice", password: "alicepass" }
    ];

    let validUser = users.find(u => u.username === can_name);

    // Simple validation for radio buttons and text inputs
    if (!gradYear1) {
      alert("Please fill the graduation year");
      // Optionally focus a label or a specific element if available
      return;
    } else if (!position1) {
      alert("Please select the position");
      return;
    } else if (!workauth1) {
      alert("Please select your work authorization");
      return;
    } else if (!can_name || !can_college || !can_email) {
      alert("Please fill in all required fields");
      return;
    }

    if (validUser) {
      document.getElementById("output").innerHTML = `<span style="color:green;">Welcome, ${can_name}!</span>`;

      // Define data for Excel
      let data = [
        ["Timestamp", labcanName, labcanEmail, labcanCollege, labGrad, labPosition, labWorkAuth, labSal, labOffered, labTimeframe],
        [timestamp, can_name, can_email, can_college, gradYear1, position1, workauth1, salary, availability, timeframe]
      ];

      // Create worksheet and workbook
      let ws = XLSX.utils.aoa_to_sheet(data);
      let wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

      // Generate and download the Excel file
      XLSX.writeFile(wb, "user_data.xlsx");

      // Create JSON data and trigger download
      let formData = {
        timestamp: timestamp,
        candidatename: can_name,
        college: can_college,
        candidateemail: can_email,
        gradYear: gradYear1,
        position: position1,
        workauth: workauth1,
        salary: salary,
        availability: availability,
        timeframe: timeframe
      };
      console.log("Calling downloadJSON")
       downloadJSON(formData, 'form_data.json');
       console.log("Done JSON")
//      let jsonString = JSON.stringify(formData, null, 4);
//      let blob = new Blob([jsonString], { type: "application/json" });
//      let url = URL.createObjectURL(blob);
//      let a = document.createElement("a");
//      a.href = url;
//      a.download = "form_data.json";
//      a.click();
//      URL.revokeObjectURL(url);

      // Optionally, display the JSON data in the output (converted to a string)
      document.getElementById("output").innerHTML = `<pre>${JSON.stringify(formData, null, 4)}</pre>`;

      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    } else {
      document.getElementById("output").innerHTML = `<span style="color:red;">Login Failed!</span>`;
    }

    // Reset form after submission
    document.getElementById("surveyForm").reset();
  });
function downloadJSON(data, filename = 'data.json') {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

  function getSelectedRadio(groupName) {
    const radios = document.getElementsByName(groupName);
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return radios[i].value;
      }
    }
    return null;
  }

  function getTimestamp() {
    let timestamp = new Date();
    return timestamp.toLocaleString();
  }

  document.getElementById("btnClear").addEventListener("click", function () {
    document.getElementById("surveyForm").reset();
    document.getElementById("output").innerHTML = "";
  });
});
