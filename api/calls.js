export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const VAPI_KEY = process.env.VAPI_KEY;
  const ASSISTANT_ID = '714f2f98-cb33-4e66-90ce-c2d570ba6c6e';

  try {
    const response = await fetch(
      `https://api.vapi.ai/call?assistantId=${ASSISTANT_ID}&limit=100`,
      { headers: { Authorization: `Bearer ${VAPI_KEY}` } }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
