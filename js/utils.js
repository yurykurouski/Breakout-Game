function hideBanner(banner) {
    banner.classList.remove('banner-show');
}

export function showBanner(banner) {
    banner.classList.add('banner-show');
        setTimeout(hideBanner, 3000, banner);
}