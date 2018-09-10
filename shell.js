/*
 * git subtree push --prefix=dist/site origin gh-pages
 * node ./node_modules/gh-pages/bin/gh-pages-clean
 * node ./ghpages
 * cause of windows can't run shell with npm script
 */

if(process.argv.length > 2){
  const params = process.argv.slice(2)
  switch (params[0]){
    case 'ghpages':
      ghPublish()
      break;
    case 'prepare':
      runShell(params[0])
      break;
    case 'release':
      runShell(params[0])
      break;
    default :
      console.log(`Can't found the task of ${params[0]}.`)
  }
}else{
  console.log(`Please print the correct task.`)
}


function runCmd(cmd, args, callback) {
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var res = "";

  child.stdout.on('data', function(buffer) { res += buffer.toString(); });
  child.stdout.on('end', function() { callback (res) });
}

function ghPublish(){
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
      console.log('Branch:gh-pages 同步完成!');
    }
  });
}

function runShell(file){
  let cwd = process.cwd()
  runCmd('sh', [path.join(cwd,`./build/scripts/${file}.sh`)], function(res){
    console.log(res)
    console.log(`build/scripts/${file}.sh 执行完成!`)
  });
}


