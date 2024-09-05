const { exec } = require('child_process');

exec('git config --global user.name', (error, stdout, stderr) => {
    console.log(`User name in Git: ${stdout.trim()}`);
});