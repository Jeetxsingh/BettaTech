let saveFile = () => {
    // Get the data from each element on the form.
    const name = document.getElementById("txtName");
    const age = document.getElementById("txtAge");
    const email = document.getElementById("txtEmail");
    const country = document.getElementById("selCountry");
    const msg = document.getElementById("msg");

    // This variable stores all the data.
    let data = "\r Name: " + name.value + " \r\n " + "Age: " + age.value + " \r\n " + "Email: " + email.value + " \r\n " + "Country: " + country.value + " \r\n " + "Message: " + msg.value;
    console.log(data); //printing form data into the console
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    var filename = "test"

    const sFileName = filename; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = "test";

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};