/* --- Chronometry Subsystem --- */
const stardateElement = document.getElementById('stardate');

function calculateStardate() {
    const now = new Date(); 
    // const then = new Date("July 15, 1987"); // Original TNG reference date
    const then = new Date("2000-01-01T00:00:00Z"); // Revised reference date
    
    let stardate = (now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24 * 0.03652425);
    // stardate = Math.floor(stardate + 410000) / 10; // Original formula (TNG era)
    stardate = Math.floor(stardate) / 10;

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