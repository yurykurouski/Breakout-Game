import { INDEX_URL, MAIN_URL, SETTINGS_URL } from './constants.js';

import renderMainPage from './render/render-main.js';
import renderInitialPage from './render/render-initial.js';
import renderSettingsPage from './render/render-settings.js';


export function renderPage() {
    const { pathname: currentUrl } = window.location;

    if (INDEX_URL.includes(currentUrl)) {
        renderInitialPage();
        return
    }


    if ( MAIN_URL.includes(currentUrl)) {
        renderMainPage();
        return
    }

    if (SETTINGS_URL.includes(currentUrl)) {
        renderSettingsPage();
        return
    }
}

export function navigateToUrl(url) {
    window.history.pushState(
        {},
        url,
        window.location.origin + url
    );
    renderPage();
}
