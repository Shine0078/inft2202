class Contact {
  constructor(
    contactName = "",
    emailAddress = "",
    contactNumber = "",
    contactMessage = ""
  ) {
    this.contactName = contactName;
    this.emailAddress = emailAddress;
    this.contactNumber = contactNumber;
    this.contactMessage = contactMessage;
  }
}

("use strict");
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function (app) {
  // Declare Function Variables here...
  console.log("%cDeclaring Variables", "color: red;");
  let contactObject = new Contact();

  /**
   * Variable initialization in this function
   *
   */
  function Start() {
    PageSwitcher();
    Main();
  }

  function PageSwitcher() {
    let name = window.location.pathname;

    let pageName = name.substring(1, name.length - 5);

    switch (pageName) {
      case "index":
        DisplayHomePageContent();
        break;
      case "products":
        DisplayProductsContent();
        break;
      case "services":
        DisplayServicesContent();
        break;
      case "about":
        DisplayAboutContent();
        break;
      case "contact":
        DisplayContactContent();
        break;
      case "projects":
        DisplayProjectsContent();
        break;
      default:
        console.error("Landed in a page that is not defined");
        break;
    }

    // add a class of active to the active link
    $("#" + pageName).addClass("active");
  }

  function DisplayHomePageContent() {
    document.getElementById("home").className = "nav-item active";
    $("button").click(() => {
      location.href = "projects.html";
    });
  }

  function DisplayProductsContent() {}

  function DisplayServicesContent() {}

  function DisplayAboutContent() {}

  /**
   * display content and functions for contact page
   */
  function DisplayContactContent() {
    console.log("contact loaded")


    function clearForm() {
      //document.getElementById("contactForm").reset();
      $("#contactForm")[0].reset();
      $('#errorMessage').hide();
    }

    function validateInput(selector, condition, errorMessage) {
      if (condition) {
        // if failed 
        $("#errorMessage").show();
        $("#errorMessage").text(errorMessage);
        $(selector).select();
        $(selector).css("border", "2px solid red");
      } else {
        $('#errorMessage').hide();
        $(selector).css("border", "1px solid green"); 
      }
    }


    // Contact Name
    $("#contactName").change((e) => {
      if ($("#contactName").length < 8) {
        console.log("Contact Name Too Short");
      }
      console.log("changed");
    });

    $("#contactName").blur((e) => {
      validateInput("#contactName", ($("#contactName").val().length < 8), "Contact Name is Too Short" )
    });

    $("#contactName").focus((e) => {
      $("#contactName").select();
    });

    // Email Address
    $("#emailAddress").blur((e) => {
      validateInput("#emailAddress",($("#emailAddress").val().length < 8) || (!$("#emailAddress").val().includes("@")),"Invalid Email Address");
    });

    $("#emailAddress").focus((e) => {
      $("#emailAddress").select();
    });

    // phone number
    $("#contactNumber").blur((e) => {
      let phoneNumberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
      let phoneNumber = $("#contactNumber").val();

      validateInput("#contactNumber", (!phoneNumberPattern.test(phoneNumber)), "Invalid number, please use the pattern (999)-999-9999" )
    });

    $("#contactNumber").focus((e) => {
      $("#contactNumber").select();
    });

    // contact messge 
    $("#contactMessage").blur((e) => {
      validateInput("#contactMessage", ($("#contactMessage").val().length < 2), "Message is too short");
    });

    $("#contactMessage").focus((e) => {
      $("#contactMessage").select();
    });

    $("#contactForm").submit((e) => {
      if (document.getElementById("contactForm").checkValidity() == false) {
        // prevent default form submission
        e.preventDefault();
        e.stopPropagation();
        console.log('form is not valid');
      }

      let contactName = $("#contactName").val();
      let emailAddress = $("#emailAddress").val();
      let contactNumber = $("#contactNumber").val();
      let contactMessage = $("#contactMessage").val();

      console.log(`Contact Name: ${contactName}`);
      console.log(`Email Address: ${emailAddress}`);
      console.log(`Contact Number: ${contactNumber}`);
      console.log(`Contact Message: ${contactMessage}`);

      contactObject.contactName = contactName;
      contactObject.emailAddress = emailAddress;
      contactObject.contactNumber = contactNumber;
      contactObject.contactMessage = contactMessage;

      console.log(contactObject);

      clearForm();
    });

    $("#resetButton").click((e) => {
      // prevent default form submission
      e.preventDefault();
      if (confirm("Are You Sure?")) {
        clearForm();
      }
    });
  }

  function DisplayProjectsContent() {}

  /**
   * Main Program entry point is here
   *
   */
  function Main() {}

  window.addEventListener("load", Start);
})(app || (app = {}));