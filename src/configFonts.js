const WebFont = require('webfontloader');

export function LoadFonts() {
    const config = {
        google: {
            families: ['Lato:100, 300, 400']
        }
    };
    WebFont.load(config, 0.1, true);
}