// Create a new div
const containerDIv = document.createElement('div');
containerDIv.id = "fb-feed-container"
// Add it to the document
document.body.appendChild(containerDIv);

setTimeout(()=>{
    // Select the target div
    let targetDiv = document.querySelector('div[id^="mount"]');
    if(!targetDiv){
        targetDiv = document.querySelector('div[id^="screen-root"]');
    }


    if (targetDiv) {
        containerDIv.appendChild(targetDiv);

        const loaderOverlay = document.createElement('div');
        loaderOverlay.id = 'fb-feed-loader';
        loaderOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 1);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    `;

        // Create logo
        const logo = document.createElement('div');
        logo.innerHTML = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 5L90 25V55C90 65.6087 85.7857 75.7828 78.2843 83.2843C70.7828 90.7857 60.6087 95 50 95C39.3913 95 29.2172 90.7857 21.7157 83.2843C14.2143 75.7828 10 65.6087 10 55V25L50 5Z" fill="#4F46E5"/>
<path opacity="0.1" d="M50 15L82 32V54C82 62.4869 78.6286 70.6263 72.6274 76.6274C66.6263 82.6286 58.4869 86 50 86C41.5131 86 33.3737 82.6286 27.3726 76.6274C21.3714 70.6263 18 62.4869 18 54V32L50 15Z" fill="white"/>
<path opacity="0.3" d="M50 70C62.1503 70 72 60.1503 72 48C72 35.8497 62.1503 26 50 26C37.8497 26 28 35.8497 28 48C28 60.1503 37.8497 70 50 70Z" stroke="white" stroke-width="2"/>
<path opacity="0.6" d="M50 63C58.2843 63 65 56.2843 65 48C65 39.7157 58.2843 33 50 33C41.7157 33 35 39.7157 35 48C35 56.2843 41.7157 63 50 63Z" stroke="white" stroke-width="2.5"/>
<path opacity="0.9" d="M50 56C54.4183 56 58 52.4183 58 48C58 43.5817 54.4183 40 50 40C45.5817 40 42 43.5817 42 48C42 52.4183 45.5817 56 50 56Z" stroke="white" stroke-width="3"/>
<path d="M50 51C51.6569 51 53 49.6569 53 48C53 46.3431 51.6569 45 50 45C48.3431 45 47 46.3431 47 48C47 49.6569 48.3431 51 50 51Z" fill="white"/>
<path opacity="0.8" d="M50 20V30" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path opacity="0.8" d="M50 66V76" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path opacity="0.8" d="M22 48H32" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path opacity="0.8" d="M68 48H78" stroke="white" stroke-width="3" stroke-linecap="round"/>
</svg>
`;
        logo.style.cssText = `
        margin-bottom: 16px;
    `;

        // Create title
        const title = document.createElement('h1');
        title.textContent = 'Productive Social';
        title.style.cssText = `
        font-size: 24px;
        font-weight: 600;
        color: #4F46E5;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    `;

        // Create loader
        const loader = document.createElement('div');
        loader.style.cssText = `
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #4F46E5;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-top: 16px;
    `;

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

        // Add elements to document
        containerDIv.appendChild(style);
        loaderOverlay.appendChild(logo);
        loaderOverlay.appendChild(title);
        loaderOverlay.appendChild(loader);
        containerDIv.prepend(loaderOverlay);

    } else {
        document.body.style.setProperty('visibility', 'visible', 'important');
        console.log('No div with id starting with "mount" found.');
    }

}, 200)

