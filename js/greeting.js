function setGreeting() {
    const today = new Date();
    const hour = today.getHours();
    const user = config.user || "Captain";

    // --- COMPONENT 1: CHRONOLOGICAL CONTEXT (Time-dependent) ---
    let timeContext = "";
    if (hour < 5)       timeContext = "Night watch active";
    else if (hour < 8)  timeContext = "Gamma shift concluding";
    else if (hour < 12) timeContext = "Alpha shift active";
    else if (hour < 17) timeContext = "Duty cycle ongoing";
    else if (hour < 22) timeContext = "Beta shift in command";
    else                timeContext = "Night protocols initiated";

    // --- COMPONENT 2: SYSTEM TELEMETRY (Randomized 24th-Century Metrics) ---
    const telemetry = [
        "sensors nominal",
        "warp core stable",
        "long-range scan complete",
        "communications online",
        "diagnostics green",
        "shield harmonics synchronized",
        "navigational array locked",
        "main power at 98%",
        "subspace channels open",
        "EPS grid balanced",
        "deflector array recalibrated",
        "deuterium reserves optimal",
        "bioneural gel-packs online",
        "isolinear optical matrix clear",
        "structural integrity field holding",
        "life support operating at 100%",
        "computer core response nominal",
        "ODN lines purged",
        "astrometrics array synchronized",
        "tactical sensors clear"
    ];

    const randomTelemetry = telemetry[Math.floor(Math.random() * telemetry.length)];

    // --- COMPONENT 3: COMMAND HANDOVER (Randomized Bridge Prompts) ---
    const handover = [
        "awaiting input",
        "standing by",
        "ready for orders",
        "terminal active",
        "telemetry review pending",
        "bridge is yours",
        "report pending",
        "awaiting your command",
        "LCARS interface primed",
        "ready for course input",
        "command channel clear",
        "log entry ready"
    ];

    const randomHandover = handover[Math.floor(Math.random() * handover.length)];

    // --- ASSEMBLY ---
    const finalGreeting = `${timeContext}. ${capitalize(randomTelemetry)}. ${capitalize(randomHandover)}, ${user}.`;

    const greetingElement = document.getElementById('greetings');
    if (greetingElement) {
        greetingElement.innerText = finalGreeting;
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

setGreeting();