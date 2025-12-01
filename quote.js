export default function handler(req, res) {
  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It always seems impossible until it's done."
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  res.status(200).json({ 
    quote: randomQuote,
    author: "Anonymous",
    timestamp: new Date().toISOString()
  });
}
