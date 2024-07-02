#! usr/bin/ env node 
import inquirer from 'inquirer';
const ans = await inquirer.prompt([
    {
        name: 'sent',
        type: 'input',
        message: 'Enter the sentence',
    },
]);
const done = ans.sent.trim().split(" ");
console.log(done);
console.log('your sentence word count is ' + done.length);
