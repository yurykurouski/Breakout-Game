export function showBanner(banner) {
    banner.classList.add('banner-show');
        setTimeout(()=>{banner.classList.remove('banner-show')}, 3000, banner);
}

export function toggleDisabled() {
    const arr = Array.from(arguments);
    arr.forEach((element) => {
        element.toggleAttribute('disabled');
    })
}

export function changeColorMode() {
    const body = document.querySelector('body');
    body.classList.toggle('night-mode');
}

