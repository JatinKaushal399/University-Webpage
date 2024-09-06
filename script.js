
// var navLinks = document.getElementById("navLinks");

// function showMenue(){
//     navLinks.style.right = "0";
// }
// function hideMenue(){
//     navLinks.style.right = "-200px";
// }

const firebaseConfig = {
  apiKey: "AIzaSyBP7nb6US52GV9Cf8a6r8l-y8tI6Ts5REU",
    authDomain: "university-website-skill-base.firebaseapp.com",
    databaseURL: "https://university-website-skill-base-default-rtdb.firebaseio.com",
    projectId: "university-website-skill-base",
    storageBucket: "university-website-skill-base.appspot.com",
    messagingSenderId: "822527039858",
    appId: "1:822527039858:web:34094bde3fa7b5255ee5eb"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contact-col").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var subject = getElementVal("subject");
    var msgContent = getElementVal("message");

    console.log(name,email,subject,msgContent)
  
    saveMessages(name, email,subject, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
      // reset the form
    document.getElementById("contact-col").reset();
  }
  
  const saveMessages = (name, email,subject, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      subject:subject,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };