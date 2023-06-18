function sendEmail() {
	Email.send({
		SecureToken: "93df7bbb-ab10-49ef-b04b-2020fc12fb21",
	    To : 'kwaabp24@gmail.com',
	    From : document.getElementById("email").value,
	    Subject : "New Contact Form Enquiry",
	    Body : "Name: " + document.getElementById("name").value
	    	+ "<br> Email: " + document.getElementById("email").value
	    	+ "<br> Phone: " + document.getElementById("phone").value
	    	+ "<br> Message: " + document.getElementById("message").value
	}).then(
	  message => alert("Message sent successfully")
	);
}