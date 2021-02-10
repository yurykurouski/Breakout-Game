import updateCanvas from "./render/update-canvas.js";
import { navigateToUrl } from "./routing.js";

function goToSettings(intId) {
    clearInterval(intId);
    navigateToUrl('/settings');
    return

}



export default goToSettings;