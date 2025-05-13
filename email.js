
(function() {
    emailjs.init("oUgxoMSUaGgCIptWT"); 
})();

function sendEmail(event) {
    event.preventDefault();
    
    let name = document.getElementById("gname").value;
    let email = document.getElementById("gmail").value;
    let mobile = document.getElementById("cname").value;
    let serviceType = document.getElementById("cage").value;
    let message = document.getElementById("message").value;

    emailjs.send("service_qystbp5", "template_fkq1r19", {
        name: name,
        email: email,
        mobile: mobile,
        serviceType: serviceType,
        message: message
    })
    .then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message: " + error); 
    });
}
