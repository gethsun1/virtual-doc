
import axios from 'axios';

export const getDiagnosis = async (symptomDescription) => {
  try {
     
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model:  'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a virtual doctor providing medical insights.' },
          { role: 'user', content: `Diagnose the following symptoms: ${symptomDescription}` }
        ],
        max_tokens: 200, // Adjust based on needs
        temperature: 0.7, // Adjust for randomness
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching diagnosis:', error);
    throw error;
  }
};
