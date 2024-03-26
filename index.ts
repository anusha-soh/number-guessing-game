#! /usr/bin/env node
import inquirer from 'inquirer';

console.log(`Let's play a number guessing game!`)
let randomNum : number = Math.floor(Math.random()*10);
let answer = await inquirer.prompt([
    { 
        name : "enteredNum",
        type : "number",
        message : "Take a guess(chose a number between 0 - 9)"
    }
])

if (answer.enteredNum === randomNum) {
    console.log(`${randomNum} is thw correct answer!! You are Winner!!`)
} else {
    console.log(`You guessed wrong number. '${randomNum}' is the corect answer.`)
};