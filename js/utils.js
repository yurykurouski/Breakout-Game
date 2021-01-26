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

