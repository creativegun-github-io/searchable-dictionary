const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const rawdata = fs.readFileSync('dictionary.json');
const data = JSON.parse(rawdata);

const searchsomething = ()=>{
readline.question(`TYPE THE WORD YOU WANT TO SEARCH...  `, searchterm => {
    console.log(`\n${data[searchterm]}\n`);
    searchsomething();
    // readline.close();
});
}
searchsomething();