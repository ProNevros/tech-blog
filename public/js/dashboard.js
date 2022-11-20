const dashboardFormHandler = async (event) => {
    event.preventDefault();

    const topic = document.querySelector('#topic-dashboard').value.trim();
    const message = document.querySelector('#message-dashboard').value.trim();

    if (topic && message) {
        await fetch('/api/dashboard', {
            method: 'POST',
            body: JSON.stringify({ topic, message }),
            headers: { 'Content-Type': 'application/json' }
        });

        document.location.reload();
    }
};

document
    .querySelector('#dashboard-form')
    .addEventListener('click', dashboardFormHandler);