const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
        './dist/ngx-element-covid19/polyfills-es5.js',
        './dist/ngx-element-covid19/polyfills-es2015.js',
        './dist/ngx-element-covid19/polyfill-webcomp-es5.js',
        './dist/ngx-element-covid19/polyfill-webcomp.js',
        './dist/ngx-element-covid19/scripts.js',
        './dist/ngx-element-covid19/main-es2015.js',
        './dist/ngx-element-covid19/main-es5.js',

    ]

    await fs.ensureDir('elements/ngx-element-covid19')

    await concat(files, 'elements/ngx-element-covid19/ngx-element-covid19.js')
    console.info('Elements es5 created successfully!')

})()

