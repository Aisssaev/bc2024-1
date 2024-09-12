const { exec } = require('child_process');//exec - функція з модуля child_process

//const child_process = require('child_process');
//const exec = child_process.exec;

//Виконуэмо команду, яка вертає ім'я користувача Git
exec('git config --get user.name', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error out: ${stderr}`);
        return;
    }
    console.log(`Hello, ${stdout.trim()}`);
});