//Helper functions

export function uid () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

export function myFunction(param) {
    return 0 + param;
}

export function isInViewport(domEl, offset) {
    const rect = domEl.getBoundingClientRect();
    // const offset = rect.height * -1 * (offset || 0);
    // return rect.height > 0 && rect.top >= offset && rect.bottom <= window.innerHeight - offset
    return rect.top >= offset && rect.top <= window.innerHeight - offset
}

export function loadImage (src) {
    //TODO : use fetch
    function isImageOk(img) {
        if (!img.complete) {
            return false;
        }
        return !(typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0);
    }

    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.onload = function () {

            isImageOk(img) ? resolve(img) : reject();
        };
        img.onerror = function() {
            console.log('error')
        };
        img.src = src;
    });
};


