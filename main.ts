#!/usr/bin/env node


import inquirer from "inquirer";

const input=await inquirer.prompt([{
    type:"input",
    name:"input",
    message:"Enter the paragraph to count words"
}])
let paragraph=input.input.trim()
let word=paragraph.split(" ")
console.log(word);

 word=word.length;
 console.log(`words:${word}`);
 let letterCount = paragraph.replace(/[^a-zA-Z]/g, "").length;
console.log(`Letter count: ${letterCount}`);