#!/usr/bin/env node
require("dotenv").config();
const inquirer = require("inquirer");
const fs = require("fs");
const { Translate } = require("@google-cloud/translate").v2;
const translate = new Translate({ key: process.env.API_KEY });

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter the text to translate",
    validate(value){
        const pass = value.match(/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/)
        if(pass){
            return true
        }

        return "Please enter text input only"
    }
  },
];

inquirer.prompt(questions).then(async (answers) => {
  const target = "sw";
  try {
    fs.writeFileSync("source.txt", answers.text);
    const [translation] = await translate.translate(answers.text, target);
    fs.writeFileSync("target.txt", translation);
    console.log("Translated text:", translation);
  } catch (error) {
    console.error("Error while translating:", error);
  }
});
