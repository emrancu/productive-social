import jquery from "jquery";
import { mainStore } from "@/Store/main.js";

let mobileApp = mainStore.getState().mobileApp;
const increment = mainStore.getState().incrementTotalRemoved;
const incrementTotalImageMasked = mainStore.getState().incrementTotalImageMasked;
let settings = mainStore.getState().settings;

mainStore.subscribe((state, prevState) => {

    if (state.settings !== prevState.settings) {
        settings = state.settings

    }

    if (state.mobileApp !== prevState.mobileApp) {
        mobileApp = state.mobileApp
    }

})


const hideUnwantedMenus = ()=>{
    // Hide complementary div
    jquery("div[id^='mount'] div[role='complementary']>div")?.css({display: 'none'});

    // Select Stories section's parent divs
    jquery("div[id^='mount'] div[aria-label='Stories']").parent('div').parent('div')?.css({display: 'none'});

    // Loop through Shortcuts and remove specific items
    jquery("div[id^='mount'] div[aria-label='Shortcuts'] ul li").each(function () {
        if (jquery(this).find(
            'a[href^="https://www.facebook.com/friends"], ' +
            'a[href^="https://www.facebook.com/onthisday"], ' +
            'a[href^="https://www.facebook.com/saved"], ' +
            'a[href^="https://www.facebook.com/groups"], ' +
            'a[href^="https://www.facebook.com/watch"], ' +
            'a[href^="https://www.facebook.com/marketplace"]'
        ).length > 0) {
            jquery(this).css({display: 'none'});
        }
    });

    // Remove extra elements in Shortcuts
    jquery("div[id^='mount'] div[aria-label='Shortcuts'] ul + div")?.css({display: 'none'});

    jquery("div[id^='mount'] div[aria-label='Shortcuts'] ul:last-child").prev('div')?.css({display: 'none'});

    jquery("div[id^='mount'] div[aria-label='Shortcuts'] ul").closest('div').next('div')?.css({display: 'none'});

    jquery("div[id^='mount'] div[aria-label='Shortcuts'] ul:last-child")?.css({display: 'none'});
    jquery("div[id^='mount'] div[aria-label='Shortcuts'] ul:last-child + div")?.css({display: 'none'});

    jquery("div[id^='mount'] div[role='banner'] ul>li a[aria-label='Video']")?.css({display: 'none'});
    jquery("div[id^='mount'] div[role='banner'] ul>li a[aria-label='Marketplace']")?.css({display: 'none'});
    jquery("div[id^='mount'] div[role='banner'] ul>li a[aria-label='Groups']")?.css({display: 'none'});
    jquery("div[id^='mount'] div[role='banner'] ul>li a[aria-label='Gaming']")?.css({display: 'none'});

}

const hideSideMenus = ()=>{

    hideUnwantedMenus();

    setInterval(()=>{
        hideUnwantedMenus()
    }, 4000)

    // jquery("div[id^='mount'] div[role='banner'] ul>li a[aria-label='Home']").remove();

    setInterval(()=>{

        jquery("div[id^='mount'] div[role='main'] div.x1lliihq").each(function (){

            const item = jquery(this)

            let needRemove = false

           // const count =  parseInt(jquery(this).attr('data-processed-count') ?? 0)
           //  if(count < 6){
           //      jquery(this).attr('data-processed-count', count + 1 )
           //  }
           //
           //  if(count >= 6){
           //      jquery(this).addClass('processed')
           //  }

            jquery(this).find("span a span > span > span").each(function () {
                let sponsoredText = '';
                const childSpans = jquery(this).children(); // Select child spans
                const dd = [];

                childSpans.each(function () {
                    const span = this; // Native DOM element
                    const style = window.getComputedStyle(span);

                    if (style.position !== 'absolute') {
                        dd.push({
                            order: parseInt(style.order, 10) || 0, // Ensure order is a number
                            t: span.textContent
                        });
                    }
                });

                // Sort the array by order
                dd.sort((a, b) => a.order - b.order);

                // Concatenate text in order
                sponsoredText = dd.map(item => item.t).join('');

                if(sponsoredText === 'Sponsored'){

                    console.log("Sponsored...")

                    needRemove = true
                }

            });

            const youMayKnow = jquery(this).find("div>div>h3>span")
            if(youMayKnow){
                youMayKnow.each(function (){
                    if(jquery(this).text().includes("you may know")){

                        console.log("you may know")
                        needRemove = true
                    }
                })
            }

            const FriendRequests = jquery(this).find("div>div>div>span[dir='auto']")
            if(FriendRequests){
                FriendRequests.each(function (){

                    if(jquery(this).text().includes("Friend Requests")){
                        needRemove = true
                        console.log("Friend Requests")
                    }

                    if(jquery(this).text().includes("Reels")){
                        needRemove = true
                        console.log("reel...")
                    }
                })
            }

            const reels = jquery(this).find("div>div>div>i + div>span")
            if(reels){
                reels.each(function (){
                    if(jquery(this).text().includes("Reels")){
                        needRemove = true
                        console.log("reel...")
                    }
                })
            }

            const joinGroup = jquery(this).find("h4 span>div>span")
            if(joinGroup){
                joinGroup.each(function (){

                    if(jquery(this).text().includes("Join") || jquery(this).text().includes("Follow")){
                        console.log("Follow.. or join")
                        needRemove = true
                    }

                })
            }

            if( needRemove ){
                jquery(item).remove()
                increment()
            }

        })

    }, 1500)

}

const hideSideMenusForMobile = ()=> {

    let MobileApp = document.querySelector('div[id^="screen-root"]');
    if (MobileApp) {


        // hide friend nav
        document.querySelector("div[id^='screen-root']>div>div>div[role='tablist']>div:nth-child(2)")?.classList.add('productive-social-hide-menu')
        document.querySelector("div[id^='screen-root']>div>div>div[role='tablist']>div:nth-child(3)")?.classList.add('productive-social-hide-menu')
        document.querySelector("div[id^='screen-root']>div>div>div[role='tablist']>div:nth-child(4)")?.classList.add('productive-social-hide-menu')
        document.querySelector("div[id^='screen-root']>div>div>div[role='tablist']>div:nth-child(6)")?.classList.add('productive-social-hide-menu')

        const story = document.querySelector("div[id^='screen-root'] div[role='tablist'] + div + div")
        if (story) {
            story.classList.add('productive-social-hide-visibility')
            story.innerHTML = ''
        }
    }


    setInterval(() => {
        let MobileApp = document.querySelector('div[id^="screen-root"]');
        if (MobileApp) {

            // hide friend nav
            document.querySelector("div[id^='screen-root']>div>div>div[role='tablist']>div:nth-child(2)")?.classList.add('productive-social-hide-menu')
            document.querySelector("div[id^='screen-root']>div>div>div[role='tablist']>div:nth-child(3)")?.classList.add('productive-social-hide-menu')
            document.querySelector("div[id^='screen-root']>div>div>div[role='tablist']>div:nth-child(4)")?.classList.add('productive-social-hide-menu')
            document.querySelector("div[id^='screen-root']>div>div>div[role='tablist']>div:nth-child(6)")?.classList.add('productive-social-hide-menu')

            const story = document.querySelector("div[id^='screen-root'] div[role='tablist'] + div + div")
            if (story) {
                story.classList.add('productive-social-hide-visibility', 'hidden-story')
                story.innerHTML = ''
            }

            const openApp =  document.querySelector('div.fl.ac>div.native-text>span.f20')
            if(openApp && openApp.innerText && openApp.innerText.includes('Open app')){
                openApp.closest('div.fixed-container').remove();
            }

            const items = document.querySelectorAll("div[id^='screen-root']>div>div>div.productive-social-hide-visibility.hidden-story ~ div:not(.productive-social-hide-visibility)");

            const filteredItems = Array.from(items).filter(item => {

                let shouldRemain = false;
                const condition1 = item.querySelector('div:nth-child(1)>div:not(:empty)')
                if (!condition1) {
                    shouldRemain = true
                }

                const condition2 = item.querySelector('div:nth-child(2)>div:not(:empty)')
                if (condition2) {
                    shouldRemain = true
                }

                if (item.querySelector("div[data-on-first-inserted-action-id]")) {
                    shouldRemain = false
                }

                return shouldRemain
            });

            filteredItems.forEach((item, index) => {

                const openAppTxt =  item.querySelector('div.fl.ac>div.native-text>span.f20')?.innerText

                if(openAppTxt && openAppTxt.includes('Open app')){
                    item.remove();
                }

                let found = false

                const follow = item.querySelector("div[role='button'] .native-text>span.f2")
                if (follow && follow.innerText.includes('Follow')) {
                    found = true
                }

                const reels = item.querySelector("h2>div>span.f2")
                if (reels && reels.innerText.includes('Reels')) {
                    found = true
                }

                const mayLike = item.querySelector("div>div.native-text")
                if (mayLike && mayLike.innerText === 'People You May Know') {
                    found = true
                }

                const sponsored = item.querySelector("div>div:nth-child(2)>div>span")
                if (sponsored && sponsored.innerText.includes('Sponsored')) {
                    found = true
                }

                const listings = item.querySelector("div>h2>div>span.f4")
                if (listings && listings.innerText.includes('check out listings')) {
                    found = true
                }

                const joinGroup = item.querySelectorAll("div>div>div>span.f2")

                if (joinGroup && joinGroup.length) {
                    joinGroup.forEach(group => {
                        if (group.innerText.includes('Join')) {
                            found = true
                        }
                    })
                }

                item.classList.add('ps_processed')

                if (found) {

                 item.classList.add('productive-social-hide-visibility');
                  increment()
                }

            })
        }

    }, 2000)

    setInterval(() => {

        document.querySelectorAll("div[id^='screen-root']>div>div>div.productive-social-hide-visibility").forEach(item => {

            let height = parseInt(item.getAttribute('data-actual-height'))

            item.style.marginTop = '-' + height + 'px';
            item.style.zIndex = '-1';
            item.style.visible = 'hidden';
            item.classList.add('productive-social-hide-visibility');

        })

    }, 5)

}

const processMessageCallback = (response, imageTag) => {

    if(!document.body.contains(imageTag)){
        return ;
    }

    if (response.status === 'success') {

        if( response.newSrcUrl){
            incrementTotalImageMasked()
            imageTag.dataset.originalurl = imageTag.src;
            imageTag.src = response.newSrcUrl;

            const parentOfImage =  imageTag.closest('div')
            const computedStyle = window.getComputedStyle(parentOfImage);
            if(computedStyle.getPropertyValue('position') !== 'absolute'){

                imageTag.closest('div').style.position = 'relative';

            }

            const originalImageToggle = document.createElement('div')
            originalImageToggle.style.backgroundColor = 'blue';
            originalImageToggle.style.position = 'absolute';
            originalImageToggle.style.top = '5px';
            originalImageToggle.style.right = '5px';
            originalImageToggle.style.zIndex = '99999999';
            originalImageToggle.style.padding = '5px';
            originalImageToggle.style.borderRadius = '5px';
            originalImageToggle.style.color = 'white';
            originalImageToggle.style.fontWeight = 'bold';
            originalImageToggle.style.cursor = 'pointer';
            originalImageToggle.innerText = 'Original';
            originalImageToggle.onclick =(event)=>{
                event.stopPropagation();
                event.preventDefault()
                originalImageToggle.innerText = originalImageToggle.innerText === 'Original' ? 'Musked' : 'Original'

                const csrc =  imageTag.src
                imageTag.src  = imageTag.dataset.originalurl
                imageTag.dataset.originalurl = csrc
            }

            parentOfImage.appendChild(originalImageToggle)
        }
        imageTag.dataset.processed = 'true';
        imageTag.classList.remove('productive-social-blur') ;

    }

    if (response.status === 'failed') {

        imageTag.dataset.processed = 'true';
        imageTag.classList.remove('productive-social-blur') ;
    }

    delete imageTag.dataset.processing;
}

export const initImageProcessor = (selector) => {
    const processImage = (imageTag) => {

        if(imageTag.closest('div.productive-social-hide-visibility')){
            return;
        }

        if (imageTag.dataset.processing || imageTag.dataset.processed) return;

        imageTag.dataset.processing = 'true';
        imageTag.classList.add('productive-social-blur') ;

        const messageData =   {
            type: 'productive_image_process',
            src: imageTag.src,
            width: imageTag.width || imageTag.naturalWidth,
            height: imageTag.width || imageTag.naturalHeight
        }


        if(window?.PS_MOBILE_APP_ACTIVE){

            window.sendToCordova(messageData, (response) =>{
                processMessageCallback(response, imageTag)
            })

        } else {

            chrome.runtime.sendMessage(messageData, (response) =>{
                processMessageCallback(response, imageTag)
            })

        }

    };

    const handleMutations = (mutations) => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.tagName === 'IMG' && !node.classList.contains('processing')){
                        node.classList.add("processing")

                        const imageWidth = parseInt(node.width || '0')

                        if(
                            !node.closest('div[aria-label="Messenger"]') &&
                            !node.closest('div[aria-label="Chat settings"]') &&  ( imageWidth > 100)
                        ){
                            processImage(node)
                        }
                    }

                    if (node.querySelectorAll) {
                        node.querySelectorAll('img').forEach(image => {

                            if(!image.classList.contains('processing')){

                                node.classList.add("processing")

                                const imageWidth = parseInt(image.width || '0')

                                if(
                                    !image.closest('div[aria-label="Messenger"]') &&
                                    !image.closest('div[aria-label="Chat settings"]') &&  ( imageWidth > 100)
                                ){
                                    processImage(image)
                                }
                            }

                        });
                    }
                });
            }
        });
    };

    const targetElement = document.querySelector(selector);
    if (!targetElement) return null;

    targetElement.querySelectorAll('img').forEach(image => {
        const imageWidth = parseInt(image.width  || '0')
        if(
            !image.closest('div[aria-label="Messenger"]') &&
            !image.closest('div[aria-label="Chat settings"]') &&  ( imageWidth > 100)
        ){
            processImage(image)
        }
    });

    const mObserver = new MutationObserver(handleMutations);
    mObserver.observe(targetElement, { childList: true, subtree: true });

    return mObserver
};


export const handlePartialMode = () => {

    if(document.querySelector('div[id^="screen-root"]')){
        hideSideMenusForMobile()
    }

    if(document.querySelector("div[id^='mount']")){
        hideSideMenus()
    }
}