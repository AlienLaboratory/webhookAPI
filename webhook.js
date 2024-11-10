// api/webhook.js
export default async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;
        
        // Process the webhook data (e.g., send to Telegram)
        // Example: console.log(data);
        
        res.status(200).json({ message: 'Webhook received' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
