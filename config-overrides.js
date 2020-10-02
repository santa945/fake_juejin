const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
   fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
   }, {
         libraryName: 'antd',
         style: true,
         libraryDirectory: "lib",
      }),
);