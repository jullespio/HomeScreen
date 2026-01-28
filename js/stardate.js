/* --- Chronometry Subsystem --- */
const stardateElement = document.getElementById('greetings_stardate');

function calculateStardate() {
    const now = new Date(); 
    const then = new Date("July 15, 1987");
    
    let stardate = (now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24 * 0.036525);
    stardate = Math.floor(stardate + 410000) / 10;

    return `[ STARDATE ${stardate.toFixed(1)} ]`;
}

function updateClock() {
    if (stardateElement) {
        stardateElement.innerText = calculateStardate();
    }
}

// Initial pulse
updateClock();
// Refresh every second
setInterval(updateClock, 1000);