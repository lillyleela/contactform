document.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.querySelectorAll('input[name="optradio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('click', function() {
            radioButtons.forEach(btn => {
                const parentDiv = btn.closest('.check1');
                if (btn.checked) {
                    btn.style.backgroundColor = 'hsl(169, 82%, 27%)';
                    btn.style.border = '1px solid hsl(169, 82%, 27%)';
                    btn.style.outline = '2px solid hsl(169, 82%, 27%)';

                    if (parentDiv) {
                        parentDiv.style.border = '1px solid hsl(169, 82%, 27%)';
                        parentDiv.style.backgroundColor = 'hsl(148, 38%, 91%)';
                    }
                } else {
                    btn.style.backgroundColor = '';
                    btn.style.border = '';
                    btn.style.outline = '';

                    if (parentDiv) {
                        parentDiv.style.border = '';
                        parentDiv.style.backgroundColor = '';
                    }
                }
            });
        });
    });
});



let form = document.getElementById('myForm');
$(document).ready(function() {
    // Handle form submission
    $(form).on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        if(validateForm()){
            // Store flag in local storage
        localStorage.setItem('formSubmitted', 'true');

        setTimeout(function() {
            location.reload(); // Refresh the page after 2 seconds
        }, 1000); // Delay in milliseconds (2000ms = 2 seconds)
        }
        // Store flag in local storage
        // localStorage.setItem('formSubmitted', 'true');

        // setTimeout(function() {
        //     location.reload(); // Refresh the page after 2 seconds
        // }, 1000); // Delay in milliseconds (2000ms = 2 seconds)
    });

    // Handle page load
    if (localStorage.getItem('formSubmitted') === 'true') {
        $('.success-message').css('display', 'block'); // Show the success message
        localStorage.removeItem('formSubmitted'); // Remove the flag from local storage

        // Hide the success message after 1 second
        setTimeout(function() {
            $('.success-message').css('display', 'none');
        }, 2000); // Delay in milliseconds (1000ms = 1 second)
    }
});
function validateForm() {
    // Get form values
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    let optradio = document.querySelectorAll('input[name="optradio"]');
    let isChecked = Array.from(optradio).some(radio => radio.checked);
    let textarea = document.getElementById('textarea').value;
    let checkbox = document.getElementById('consent').checked;

    // Reset errors and borders
    document.querySelectorAll('.error-message').forEach(el => el.innerHTML = "");
    document.querySelectorAll('.form-control').forEach(el => el.style.border = '');

    let isValid = true;

    // Validation checks
    if (firstname === '') {
        document.getElementById('error1').innerHTML = "This field is required";
        document.getElementById('firstname').style.border = '1px solid hsl(0, 66%, 54%)';
        isValid = false;
    }
    if (lastname === '') {
        document.getElementById('error2').innerHTML = "This field is required";
        document.getElementById('lastname').style.border = '1px solid hsl(0, 66%, 54%)';
        isValid = false;
    }
    if (email === '') {
        document.getElementById('error3').innerHTML = "This field is required";
        document.getElementById('email').style.border = '1px solid hsl(0, 66%, 54%)';
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById('error3').innerHTML = "Please enter a valid email address";
        document.getElementById('email').style.border = '1px solid hsl(0, 66%, 54%)';
        isValid = false;
    }
    if (!isChecked) {
        document.getElementById('error4').innerHTML = "Please select a query type";
        Array.from(document.getElementsByClassName('form-check-input')).forEach(element => {
            element.style.border = '1px solid hsl(0, 66%, 54%)';
        });
        isValid = false;
    }
    if (textarea === '') {
        document.getElementById('error5').innerHTML = "This field is required";
        document.getElementById('textarea').style.border = '1px solid hsl(0, 66%, 54%)';
        isValid = false;
    }
    if (!checkbox) {
        document.getElementById('error6').innerHTML = "To submit this form, Please consent to be contacted";
        document.getElementById('consent').style.border = '1px solid hsl(0, 66%, 54%)';
        isValid = false;
    }
    else{
        isvalid=true;
    }

    return isValid; // Allow form submission if valid
}








