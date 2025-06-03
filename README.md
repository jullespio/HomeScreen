
<div align="center">
  <h1>HomeScreen</h1>
  <b>🖥️ A Clean and Customizable Start Page</b><br>
  <sub>Forked and customized from <a href="https://github.com/MiguelRAvila/Bento">Bento by Miguel R. Avila</a></sub>
</div>

<!-- <p align="center">
  <img src="https://github.com/MiguelRAvila/Bento/blob/master/assets/Header.png" alt="Project preview">
</p> -->

## Overview

**HomeScreen** is a personal fork of the excellent [Bento](https://github.com/MiguelRAvila/Bento) startpage project. It serves as a minimal, fast, and beautiful home page or new tab replacement, with dark/light themes, greeting logic, customizable links, weather info, and more.

This project has been customized for personal taste and usability, while preserving the modular and extensible design of the original.

---

## Features

- 🌗 Dark/Light mode toggle with persistent setting
- ⏰ Real-time clock, date, and dynamic greetings
- 🌦️ Weather widget with configurable API key
- 🎨 Easy theme and background customization
- 🧭 Feather icons and clean layout
- 🛠️ Modular codebase: HTML, JS, Sass/CSS

---

## Setup

### Local Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/HomeScreen.git
   cd HomeScreen
   ```

2. Open `index.html` in your browser.

> No build process is needed unless you modify the Sass or JS files.

---

### Use as Browser Homepage or New Tab

**Set as Homepage:**
- Go to your browser’s preferences.
- Set the homepage to your local or GitHub Pages link.

**Set as New Tab Page:**
- Firefox: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page)
- Chromium-based: [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia)

---

## Customization

You can personalize your HomeScreen via:
- **Links**: Edit in `index.html`
- **Colors & Themes**: `css/style.css`
- **Background Image**: Set via CSS variables
- **Weather**: Update your OpenWeatherMap API key and coordinates in `js/weather.js`
- **Greetings**: Change name and time-based messages in `js/greetings.js`

For more information on customization, check the links below.

---

## Credits

- Original project: [Bento by Miguel R. Avila](https://github.com/MiguelRAvila/Bento)
- Icons: [Feather Icons](https://feathericons.com/)
- Wallpaper and visuals as credited in original repo. This fork uses wallpapers meant for personal use, you might keep them or use your own. Just add the images to the /img folder and edit the background variable at the top of `style.css`.

---

## License

Distributed under the MIT License, same as the original project. See `LICENSE` for details.

