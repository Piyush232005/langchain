import { config } from "dotenv";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

config();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",          // or "gemini-1.5-flash", "gemini-pro", etc.
  apiKey: process.env.GEMINI_API_KEY, // must match your .env file
});

const response = await model.invoke("Who are you?");
console.log(response.content);
