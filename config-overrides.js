const path = require('path');

module.exports = function override(config, env) {
  config.module.rules = [
    // salesforce dependencies
    // this will compile salesforce lightning as src, not as package
    {
        test: /\.jsx?$/,
        include: [
          'node_modules/@salesforce/design-system-react',
        ].map(
          someDir => path.resolve(
            process.cwd(),
            someDir
          )
        ),
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            "react-app",
            "@babel/preset-env",
            "@babel/preset-react",
            {
              "plugins": [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-proposal-export-default-from",
                "@babel/plugin-proposal-export-namespace-from",
                [
                    "@babel/plugin-proposal-class-properties",
                    {
                        "loose": true
                    }
                ]
              ]
          }
          ],
        },
    },
  ].concat(config.module.rules);

  return config;
}
