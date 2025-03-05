
// const API_KEY="";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-2.0-flash"; // Fix: Use correct model name
const API_KEY = "AIzaSyAClrOoTo6Gb3RYUWAz1YxyqOBMAP_W84A"; // Replace with your valid API key

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
  };

  const safetySettings = [
      {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
  ];

  const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
  });

  try {
      const result = await chat.sendMessage(prompt);
      const response = result.response;
      
      if (response.candidates && response.candidates.length > 0) {
          console.log(response.candidates[0].content);
          return response.candidates[0].content;
      } else {
          console.error("No response candidates found.");
          return "Error: No response generated.";
      }
  } catch (error) {
      console.error("Error fetching response:", error);
      return "Error: Unable to generate response.";
  }
}

export default runChat;
