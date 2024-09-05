const { exec } = require('child_process');

exec('git config --global user.name', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error out: ${stderr}`);
        return;
    }
    console.log(`User name in Git: ${stdout.trim()}`);
});