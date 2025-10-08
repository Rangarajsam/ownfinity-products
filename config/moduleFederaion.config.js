const packageJsonCommon = require('../package.json');

const moduleFederationConfig = {
    name:'products',
    filename:'remoteEntry.js',
    exposes:{
        './ProductsApp':'./src/bootstrap.tsx'
    },
    shared:packageJsonCommon.dependencies
}

module.exports = moduleFederationConfig;