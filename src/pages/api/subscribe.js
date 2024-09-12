export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        // Example server-side logic (e.g., save to a database, send an email, etc.)
        console.log(`Received subscription request from: ${email}`);

        // Mock success response
        return res.status(200).json({ message: 'Subscription successful' });
    } else {
        // Handle any other HTTP method
        return res.status(405).end(); // Method Not Allowed
    }
}