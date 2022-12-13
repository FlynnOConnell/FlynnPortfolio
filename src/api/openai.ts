//@ts-nocheck
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API,
});
const openai = new OpenAIApi(configuration);
const response = await openai.completions({
    model: 'text-davinci-003',
    prompt: 'A short poem about a teacher named kelly.',
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
});
