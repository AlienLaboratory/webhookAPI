// api/webhook.js
export default async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;
        
        // Process the webhook data (e.g., send to Telegram)
        // Example: console.log(data);

         document.addEventListener('DOMContentLoaded', function() {
        document.addEventListener('tildaForm:afterresult', function(event) {
            const formData = event.detail;
            const cartItems = TildaCart.getItems(); // Fetch items from the cart

            // Prepare message for Telegram
            let message = "???? New Cart Submission:\n\n";
            cartItems.forEach(item => {
                message += `Product: ${item.name}\n`;
                message += `Quantity: ${item.quantity}\n`;
                message += `Price: ${item.price} ${item.currency}\n`;
                message += `------\n`;
            });
            message += `Total: ${TildaCart.getTotal().toFixed(2)} ${TildaCart.getCurrency()}\n\n`;
            message += `Customer Info:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
            
            alert(message);
                                                                                                                                    
            // Replace 'YOUR_BOT_TOKEN' and 'YOUR_CHANNEL_ID'
            const botToken = '7592959890:AAHXhZbR7BuntC5_ry_2QTTZyOkxwm0QXcs';
            const chatId = '@svitla_hata'; // Or use the numerical ID if known
            const url = `https://api.telegram.org/bot${7592959890:AAHXhZbR7BuntC5_ry_2QTTZyOkxwm0QXcs}/sendMessage`;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'Markdown'
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    console.log('Message sent to Telegram');
                } else {
                    console.error('Error sending message:', data.description);
                }
            })
            .catch(error => console.error('Fetch error:', error));
        });
    });


        
        
        res.status(200).json({ message: 'Webhook received' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
