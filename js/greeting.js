function setGreeting() {
    const today = new Date();
    const hour = today.getHours();
    const user = config.user;

    const greetings = {
        0: 'Go to sleep, ',
        5: 'Good morning, ',
        12: 'Good afternoon, ',
        18: 'Good evening, ',
        23: 'Go to sleep, '
    };

    let greeting = '';
    for (const time in greetings) {
        if (hour >= time) {
            greeting = greetings[time];
        }
    }

    document.getElementById('greetings').innerText = greeting + user;
}

setGreeting();
