async function updateSubspaceTelemetry() {
  const subspaceEl = document.getElementById('subspace');
  if (!subspaceEl) return;

  const startTime = performance.now();

  try {
    // Ping lightweight public DNS relay to measure round-trip time
    await fetch('https://1.1.1.1/cdn-cgi/trace', {
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-store'
    });

    const latency = Math.round(performance.now() - startTime);
    subspaceEl.innerText = ` • SUBSPACE LATENCY ${latency}ms`;
  } catch (error) {
    subspaceEl.innerText = ' • SUBSPACE ATTENUATED';
  }
}

// Initial pulse and 10-second diagnostic interval
updateSubspaceTelemetry();
setInterval(updateSubspaceTelemetry, 10000);