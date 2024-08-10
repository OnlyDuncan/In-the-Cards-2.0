import CardFetcher from '../../components/CardFetcher.js';

export default async function handler(req, res) {
    try {
        const cards = await CardFetcher();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching cards' });
    }
}