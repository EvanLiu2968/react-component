/*
 * git subtree push --prefix=dist/site origin gh-pages
 * node ./node_modules/gh-pages/bin/gh-pages-clean
 * node ./ghpages
 */

const ghpages = require('gh-pages');

ghpages.publish('dist/site', {
  branch: 'gh-pages',
  user: {
    name: 'evanliu2968',
    email: '296823596@qq.com'
  }
}, function(err) {
  if(err){
    console.log(err);
  }else{
    console.log('docs同步完成!');
  }
});