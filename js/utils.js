export function showBanner(banner) {
    banner.classList.add('banner-show');
        setTimeout(()=>{banner.classList.remove('banner-show')}, 3000, banner);
}