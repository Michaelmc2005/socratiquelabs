const { spawn } = require('child_process');

const build = spawn('npm', ['run', 'build'], { stdio: 'inherit' });

build.on('exit', (code) => {
  process.exit(code);
});
