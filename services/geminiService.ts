import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateSlogans = async (businessType: string): Promise<string[]> => {
  if (!process.env.API_KEY) {
    console.error("API key is missing.");
    throw new Error("API key is not configured.");
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate 3 short, catchy, and professional slogans for a "${businessType}" business. The slogans should be inspiring and memorable.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            slogans: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
                description: "A catchy slogan"
              }
            }
          },
          required: ["slogans"]
        }
      }
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);
    
    if (result && Array.isArray(result.slogans)) {
        return result.slogans.slice(0, 3);
    }
    
    return [];

  } catch (error) {
    console.error("Error generating slogans with Gemini API:", error);
    throw new Error("Failed to generate slogans. Please check your API key and try again.");
  }
};
