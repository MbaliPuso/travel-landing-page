       document
          .getElementById("contact-form")
          .addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
  
            // Get user input
            var firstNameInput = document.querySelector(
              'input[name="first_name"]'
            ).value;
            var lastNameInput = document.querySelector(
              'input[name="last_name"]'
            ).value;
            var email = document.querySelector('input[name="email"]').value;
            var message = document.querySelector(
              'textarea[name="message"]'
            ).value;
  
            // Check if any field is empty
            if (
              firstNameInput === "" ||
              lastNameInput === "" ||
              email === "" ||
              message === ""
            ) {
              // Display a message indicating that all information is required
              alert("All information is required. Please fill in all fields.");
              return; // Exit the function without proceeding further
            }
  
            var firstName =
              firstNameInput.charAt(0).toUpperCase() + firstNameInput.slice(1);
            var lastName =
              lastNameInput.charAt(0).toUpperCase() + lastNameInput.slice(1);
  
            // Update title
            var title = document.querySelector(".get-in-touch-section h2");
            title.textContent =
              "Thank you " +
              firstName +
              " " +
              lastName +
              " for getting in touch! Enjoy exploring Thailand!🌴😊";
  
            // Clear form fields
            document.querySelector('input[name="first_name"]').value = "";
            document.querySelector('input[name="last_name"]').value = "";
            document.querySelector('input[name="email"]').value = "";
            document.querySelector('textarea[name="message"]').value = "";
          });