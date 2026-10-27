window.onload = displayClock;

function displayClock() {
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Set to true for 12-hour format, false for Starfleet 24-hour format
  const format_12hour = false;

  const date = new Date();
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  let hour = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Calculate total elapsed seconds in the current 24-hour cycle
  const totalSeconds = (date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds();
  const dayPercentage = (totalSeconds / 86400) * 100;

  // Update the progress fill bar
  const progressFillEl = document.getElementById('day-progress-fill');
  if (progressFillEl) {
    progressFillEl.style.width = `${dayPercentage.toFixed(3)}%`;
  }

  // DOM Element References
  const hourEl = document.getElementById('hour');
  const separatorEl = document.getElementById('separator');
  const minutesEl = document.getElementById('minutes');
  const ampmEl = document.getElementById('ampm');
  const suffixEl = document.getElementById('suffix');
  const utcEl = document.getElementById('utc');

  if (format_12hour) {
    const period = hour >= 12 ? ' pm' : ' am';
    hour = hour % 12 || 12;

    hourEl.innerText = String(hour);
    if (separatorEl) separatorEl.style.display = 'inline';
    if (ampmEl) ampmEl.innerText = period;
    if (suffixEl) suffixEl.innerText = '';
  } else {
    // Starfleet 24h Mode
    hourEl.innerText = String(hour).padStart(2, '0');
    if (separatorEl) separatorEl.style.display = 'none';
    if (ampmEl) ampmEl.innerText = '';
    if (suffixEl) suffixEl.innerText = 'h';
  }

  minutesEl.innerText = minutes;

  if (utcEl) utcEl.innerText = 'UTC -3:00';

  document.getElementById('earth').innerText = 'On Earth: ';
  document.getElementById('month').innerText = month;
  document.getElementById('day').innerText = day;
  document.getElementById('year').innerText = ', ' + year;

  setTimeout(displayClock, 1000);
}