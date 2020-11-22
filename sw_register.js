// register service worker
var registerUrl = '/calculator-js/sw_cached_pages.js';
var swScope = '/calculator-js/';

//make sure sw are supported
if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker
			.register(registerUrl, {scope: swScope})
            .then(console.log('ServiceWorker registered'))
            .catch(err => console.log(`ServiceWorker error: ${err}`));
    });
}//if SW

else {
    console.log('serviceWorker not in navigator');
}