// Function to create bookmarks
function createBookmarks() {
    const bookmarkContainer = document.querySelector('.buttonLink');
    let bookmarkHTML = '';

    config.bookmarks.forEach((bookmark, index) => {
        bookmarkHTML += `
            <a href="${bookmark.url}" target="_blank" class="buttonLink__link card buttonLink__link-${index + 1}">
                <i class="buttonLink__icon" data-feather="${bookmark.icon}"></i>
            </a>
        `;
    });

    bookmarkContainer.innerHTML = bookmarkHTML;
}

// Function to create lists
function createLists() {
    const listContainer = document.querySelector('.container');
    let listHTML = '';

    config.lists.forEach((list, index) => {
        listHTML += `<div class="card list list__${index + 1}">`;
        listHTML += `<i class="list__head"></i>`;
        list.links.forEach(link => {
            listHTML += `<a target="_blank" href="${link.url}" class="list__link">${link.name}</a>`;
        });
        listHTML += `</div>`;
    });

    // This is a bit of a hack, but it's the easiest way to append the lists
    // without having to add a new container element.
    const buttonLink = document.querySelector('.buttonLink');
    buttonLink.insertAdjacentHTML('afterend', listHTML);
}

// Create bookmarks and lists on page load
createBookmarks();
createLists();
