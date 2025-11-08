const fs = require('fs');

for (const filename of fs.readdirSync('dist/')) {
    if (filename.includes('.m.js')) {
        fs.renameSync(`dist/${filename}`, `dist/${filename.replace('.m.js', '.mjs')}`);
    }
}

// Some packages still can't deal with mjs file extensions
fs.copyFileSync('dist/localBadiDate-msm-locales.mjs', 'dist/localBadiDate-msm-locales.m.js');
