const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
	
hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('show');
})

let saveFile = () => {
    alert("Thank You! None of this data will be used for anything!");
    var chkEmail = "?";
    var inputElements = document.getElementById("contact-chk");
    if(inputElements.checked){
        chkEmail = "Y";
    } else {
        chkEmail = "N"
    }
    
    var chkTxtMsg = "?";
    inputElements = document.getElementById("text-chk");
    if(inputElements.checked){
        chkTxtMsg = "Y";
    } else {
        chkTxtMsg = "N"
    }
    //Get the data from each element on the form
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const eMail = document.getElementById("mail");
    const phone = document.getElementById("telNum");
    const optLocation = document.getElementById("state-chk");
    const questions = document.getElementById("question-box");
        
    //Store all the data
    let data = `${firstName.value}\n${lastName.value}\n${eMail.value}\n${phone.value}\n${chkEmail} 
    \n ${chkTxtMsg}\n${optLocation.value}\n${questions.value}`
   

   // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = "formData.txt";	   // The file to save the data.

    let newLink = document.createElement("a");

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}	
