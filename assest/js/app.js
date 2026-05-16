window.onload = function() {
    
    // ৬.c লাইভ ডেট ও টাইম ফাংশন
    function updateDateTime() {
        const now = new Date();
        const dateTimeElement = document.querySelector("#datetime");
        if (dateTimeElement) {
            dateTimeElement.innerHTML = now.toLocaleString();
        }
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);


    // ৩. Portfolio Page - Order Form Interaction
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const service = document.getElementById('service').value;
            const alertBox = document.getElementById('alertBox');
            
            alertBox.textContent = `Thank you, ${name}! Request for "${service}" received.`;
            alertBox.classList.remove('d-none');
            this.reset();

            // ৫ সেকেন্ড পর অ্যালার্টটি নিজে নিজেই বন্ধ হয়ে যাবে
            setTimeout(function() {
                alertBox.classList.add('d-none');
            }, 5000);
        });
    }


    // ৫.e Contact Page - Form Validation with Javascript
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('formName').value.trim();
            const email = document.getElementById('formEmail').value.trim();
            const phone = document.getElementById('formPhone').value.trim();
            const address = document.getElementById('formAddress').value.trim();
            const message = document.getElementById('formMessage').value.trim();
            const feedback = document.getElementById('formFeedback');

            feedback.classList.remove('d-none', 'alert-danger', 'alert-success');

            // Validation Check
            if (!name || !email || !phone || !address || !message) {
                feedback.textContent = "Error: All fields are required. Please fill up completely!";
                feedback.classList.add('alert-danger');
                
                // ৫ সেকেন্ড পর এরর মেসেজটি হাইড হবে
                setTimeout(function() { feedback.classList.add('d-none'); }, 5000);
                return;
            }

            // Email Format Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                feedback.textContent = "Error: Please enter a valid email address!";
                feedback.classList.add('alert-danger');
                
                setTimeout(function() { feedback.classList.add('d-none'); }, 5000);
                return;
            }

            // Success Output
            feedback.textContent = "Success! Your message has been sent properly.";
            feedback.classList.add('alert-success');
            this.reset();

            // ৫ সেকেন্ড পর সাকসেস মেসেজটি হাইড হবে
            setTimeout(function() {
                feedback.classList.add('d-none');
            }, 5000);
        });
    }
};