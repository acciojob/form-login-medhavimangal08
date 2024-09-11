function getFormvalue() {
    // Select the input fields for first and last names
    let textInput = document.querySelectorAll('input[type="text"]');
    
    // Prevent the default form submission behavior
    event.preventDefault();

    // Display an alert with the full name
    alert(textInput[0].value + " " + textInput[1].value);
}