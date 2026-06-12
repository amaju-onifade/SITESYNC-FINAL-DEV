require('dotenv').config({ path: '.env.local' })
const OpenAI = require('openai')

const client = new OpenAI({
  baseURL: 'https://api.deepseek.com/v1',
  apiKey: process.env.DEEPSEEK_API_KEY,
})

client.chat.completions.create({
  model: 'deepseek-chat',
  messages: [{
    role: 'user',
    content: [
      { type: 'text', text: 'What is in this image? Reply in one word.' },
      { type: 'image_url', image_url: { url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' } },
    ],
  }],
  max_tokens: 100,
}).then(r => {
  console.log('SUCCESS:', JSON.stringify(r.choices[0]?.message))
}).catch(e => {
  console.error('ERROR:', e.message, 'Status:', e.status)
  if (e.response) {
    console.error('Response data:', JSON.stringify(e.response.data))
  }
})
