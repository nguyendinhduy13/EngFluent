import { API_KEY, API_URL } from '@env';
import axios from 'axios';

export const getAnswerFromGpt = async prompts => {
  try {
    const client = axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await client.post(`${API_URL}?key=${API_KEY}`, {
      contents: prompts,
      generationConfig: {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
        stopSequences: [],
      },
      safetySettings: [
        {
          category: 'HARM_CATEGORY_HARASSMENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_HATE_SPEECH',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
      ],
    });

    const answer = response.data?.candidates[0]?.content?.parts?.[0]?.text;
    return Promise.resolve({ success: true, data: answer });
  } catch (error) {
    return Promise.resolve({ success: false, msg: error.message });
  }
};
