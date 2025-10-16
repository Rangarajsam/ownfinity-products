const packageJsonCommon = require('../package.json');

const moduleFederationConfig = {
    name:'products',
    filename:'remoteEntry.js',
    exposes:{
        './ProductsApp':'./src/bootstrap.tsx'
    },
    remotes:{
        container:'container@http://localhost:2000/remoteEntry.js'
    },
    shared:packageJsonCommon.dependencies
}

module.exports = moduleFederationConfig;