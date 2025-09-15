import { config } from "dotenv";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

config();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",          // or "gemini-1.5-flash", "gemini-pro", etc.
  apiKey: process.env.GEMINI_API_KEY, // must match your .env file
});

const promptTemplate = PromptTemplate.fromTemplate(`
    explain {topic} in a simple way in ELI5 terms,
    make sure to include the core concept and avoid unnecessary jargon.
    make the answer as consise as possible.
    `)

promptTemplate.pipe(model).invoke({ topic: "express" }).then(response => {
    console.log(response)
});    


// promptTemplate.invoke({ topic: "express" }).then(response => {
//     console.log(response.value)
// });    

// const response = await model.invoke("Who are you?");
// console.log(response.content);
