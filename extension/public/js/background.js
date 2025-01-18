/**
 * This offscreen for  Automatically blur indecent photos. Avoid major sins.
 * We use this code from kahf.ai 's "Safer Internet" Extension
 * Check - https://chromewebstore.google.com/detail/safegaze-blur-haram-image/aaddkkmpkpcnchdggomfaehpagbekalb
 */
const createOffscreenDoc = () => {
    chrome?.offscreen.createDocument({
        url: chrome.runtime.getURL("public/offscreen/offscreen.html"),
        reasons: ["DOM_PARSER"],
        justification: "Process Images"
    }).then((document) => {
        console.log("offscreen document created");
    }).finally(() => {
    });
};

createOffscreenDoc();

