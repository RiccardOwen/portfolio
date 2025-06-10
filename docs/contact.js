document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('formStatus');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Sending...';
        statusDiv.style.color = '#90ee90';

        // Replace with your deployed backend URL when live
        const backendUrl = 'http://localhost:3000/api/contact';

        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        try {
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                statusDiv.textContent = 'Message sent!';
                statusDiv.style.color = '#90ee90';
                form.reset();
            } else {
                statusDiv.textContent = result.error || 'Failed to send message.';
                statusDiv.style.color = '#ff6b6b';
            }
        } catch (err) {
            statusDiv.textContent = 'Could not connect to server.';
            statusDiv.style.color = '#ff6b6b';
        }
    });
});