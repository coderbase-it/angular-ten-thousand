const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
        './dist/ngx-element-covid19/polyfills.js',
        './dist/ngx-element-covid19/runtime.js',
        './dist/ngx-element-covid19/main.js',
        './dist/ngx-element-covid19/scripts.js',

    ]

    await fs.ensureDir('elements/ngx-element-covid19')

    await concat(files, 'elements/ngx-element-covid19/ngx-element-covid19.js')

    await fs.copy('./dist/ngx-element-covid19/assets', 'elements/ngx-element-covid19/assets')

    console.info('Elements es5 created successfully!')

})()

