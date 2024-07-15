export default function decorate(block){
    console.log(block,'hello ');
    function updateValue(event){
        const emailInput = document.getElementById('emailInput');
        emailInput.setAttribute('value',event.target.value)
    }
    function validateEmail(){
        
        const emailInput = document.getElementById('emailInput');
        const valueData= emailInput.getAttribute('value');
        
                const errorEmail = document.querySelector('.hello-message');
                const email = emailInput.value.trim();

    
                // Validate length including dot and @
                if (email.length > 50) {
                    errorEmail.textContent = 'Email exceeds maximum length (50 characters including dot and @)';
                    return;
                }
    
                // Validate characters
                const validChars = /^[a-zA-Z0-9.@]*$/;
                if (!validChars.test(email)) {
                    errorEmail.textContent = 'Only letters, numbers, dot (.) and @ are allowed';
                    return;
                }
    
                // Regular expression for basic email validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
                if (!email) {
                    errorEmail.textContent = 'Email is required';
                } else if (!emailPattern.test(email)) {
                    errorEmail.textContent = 'Please enter a valid email address';
                } else {
                    // Clear error message if validation passes
                    errorEmail.textContent = 'correct email';
                    // You can submit the form or perform further actions here
                }
            }
    [...block.children].forEach((row) => {
    
        // Add a class to each row div
        row.classList.add('new_class');
    
        // Add a class to the parent of the row div
        row.parentNode.classList.add('parent_class');
    
        // Check if a paragraph already exists in the parent
        if (!row.parentNode.querySelector('p.hello-message')) {
            // Create a new paragraph element
            const newParagraph = document.createElement('p');
            newParagraph.textContent = 'Hello';
            newParagraph.classList.add('hello-message');
            const emailInput = document.createElement('input');

            // Set the type attribute to 'email'
            emailInput.setAttribute('type', 'email');

            // Set the placeholder for the input field
            emailInput.setAttribute('placeholder', 'Enter your email');

            // Optionally, add an ID or class to the input element for styling or referencing
            emailInput.setAttribute('id', 'emailInput');
            emailInput.setAttribute('value', 'ram@gmail.com');
            emailInput.addEventListener('input', function() {
                updateValue((e)=>{});
            });
            
            emailInput.classList.add('email-input-class');
            var newButton = document.createElement('button');
    
    // Set attributes and text content for the button
    newButton.textContent = 'Click me';
    newButton.style.cursor = 'pointer';
    newButton.style.padding = '10px';
    newButton.style.backgroundColor = 'lightgreen';
    newButton.style.border = '1px solid #000';
    newButton.style.marginTop = '10px';
    newButton.addEventListener('click', function(){
        validateEmail();
    });
            // Append the new paragraph to the parent of the current row
            row.parentNode.appendChild(newParagraph);
            row.parentNode.appendChild(emailInput);
            row.parentNode.appendChild(newButton);
        }
    });
}