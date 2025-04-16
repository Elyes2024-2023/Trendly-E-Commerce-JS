import { Configuration, OpenAIApi } from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Please add your OpenAI API key to .env.local');
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateProductRecommendations = async (
  userPreferences: string[],
  limit: number = 5
) => {
  try {
    const prompt = `Based on the following user preferences: ${userPreferences.join(
      ', '
    )}, recommend ${limit} products that would be a good match. Format the response as a JSON array of product IDs.`;

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 100,
      temperature: 0.7,
    });

    const recommendations = JSON.parse(
      response.data.choices[0].text?.trim() || '[]'
    );
    return recommendations;
  } catch (error) {
    console.error('Error generating recommendations:', error);
    return [];
  }
};

export const analyzeTrends = async (socialData: string[]) => {
  try {
    const prompt = `Analyze the following social media trends and identify the most popular products or categories: ${socialData.join(
      ', '
    )}. Format the response as a JSON object with 'trends' as an array of trend objects, each with 'name', 'category', and 'popularity' (1-10) properties.`;

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 200,
      temperature: 0.7,
    });

    const trends = JSON.parse(
      response.data.choices[0].text?.trim() || '{"trends": []}'
    );
    return trends;
  } catch (error) {
    console.error('Error analyzing trends:', error);
    return { trends: [] };
  }
};

export const generateProductDescription = async (
  productName: string,
  features: string[]
) => {
  try {
    const prompt = `Write a compelling product description for a ${productName} with the following features: ${features.join(
      ', '
    )}. The description should be engaging, highlight the benefits, and be optimized for SEO.`;

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
      temperature: 0.7,
    });

    return response.data.choices[0].text?.trim() || '';
  } catch (error) {
    console.error('Error generating product description:', error);
    return '';
  }
}; 