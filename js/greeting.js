function setGreeting() {
    const today = new Date();
    const hour = today.getHours();
    const user = config.user; // Assumes "Captain"

    // --- COMPONENT 1: CHRONOLOGICAL CONTEXT (Time-dependent) ---
    // These anchors ground the user in the ship's current schedule.
    let timeContext = "";
    if (hour < 5)  timeContext = "Night watch active";
    else if (hour < 8)  timeContext = "Gamma shift concluding";
    else if (hour < 12) timeContext = "Alpha shift has begun";
    else if (hour < 17) timeContext = "Duty cycle ongoing";
    else if (hour < 22) timeContext = "Beta shift assumes control";
    else timeContext = "Night protocols initiated";

    // --- COMPONENT 2: SYSTEM TELEMETRY (Randomized) ---
    // "Fluff" to make the ship feel alive. Adds variety.
    const telemetry = [
        "sensors nominal",
        "warp core stable",
        "long-range scan complete",
        "communications online",
        "diagnostics green",
        "shield harmonics synchronized",
        "navigational array locked",
        "main power at 98%",
        "subspace channels open"
    ];
    // Select one random telemetry fragment
    const randomTelemetry = telemetry[Math.floor(Math.random() * telemetry.length)];

    // --- COMPONENT 3: COMMAND HANDOVER (Randomized) ---
    // The connector that invites the user to interact.
    const handover = [
        "awaiting input",
        "standing by",
        "ready for orders",
        "terminal active",
        "telemetry review pending",
        "bridge is yours",
        "report pending"
    ];
    const randomHandover = handover[Math.floor(Math.random() * handover.length)];

    // --- ASSEMBLY ---
    // Concatenates: "Alpha shift commencing. Sensors nominal. Standing by, Captain."
    const finalGreeting = `${timeContext}. ${capitalize(randomTelemetry)}. ${capitalize(randomHandover)}, ${user}.`;

    document.getElementById('greetings').innerText = finalGreeting;
}

// Helper function to capitalize the first letter of random fragments
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

setGreeting();