(function() {
    emailjs.init("oUgxoMSUaGgCIptWT");  
})();

function sendEmail(event) {
    event.preventDefault();


    const fromName = document.getElementById("gname").value;
    const email = document.getElementById("gmail").value;
    const mobile = document.getElementById("cname").value;
    const service = document.getElementById("cage").value;
    const message = document.getElementById("message").value;

    if (!fromName || !email || !mobile || !service || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    const templateParams = {
        name: fromName,
        email: email,
        mobile: mobile,
        serviceType: service,
        message: message,
    };

    emailjs.send("service_qystbp5", "template_fkq1r19", templateParams)
    .then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message: " + JSON.stringify(error));
    });
}