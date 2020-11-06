// register service worker
var registerUrl = '/calculator/sw_cached_site.js';
var swScope = '/calculator/';

if (location.hostname !== 'brian-t-hart.github.io') {
	registerUrl = '/sw_cached_site.js';
	swScope = '/';
}

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