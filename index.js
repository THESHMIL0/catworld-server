const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const bibleQuotes = [
    "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. - 1 Corinthians 13:4",
    "Let all that you do be done in love. - 1 Corinthians 16:14",
    "I thank my God every time I remember you. - Philippians 1:3",
    "And now these three remain: faith, hope and love. But the greatest of these is love. - 1 Corinthians 13:13",
    "We love because he first loved us. - 1 John 4:19",
    "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you. - Ephesians 4:32",
    "Above all, keep loving one another earnestly. - 1 Peter 4:8",
    "Let the morning bring me word of your unfailing love, for I have put my trust in you. - Psalm 143:8",
    "A friend loves at all times. - Proverbs 17:17",
    "Many waters cannot quench love; rivers cannot sweep it away. - Song of Solomon 8:7",
    "Dear children, let us not love with words or speech but with actions and in truth. - 1 John 3:18",
    "Gracious words are a honeycomb, sweet to the soul and healing to the bones. - Proverbs 16:24",
    "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate. - Matthew 19:6",
    "The Lord bless you and keep you. - Numbers 6:24",
    "Commit your way to the Lord; trust in him and he will do this. - Psalm 37:5",
    "The Lord is my shepherd, I lack nothing. - Psalm 23:1",
    "Wait for the Lord; be strong and take heart and wait for the Lord. - Psalm 27:14",
    "I can do all this through him who gives me strength. - Philippians 4:13",
    "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you. - Jeremiah 29:11",
    "Do everything in love. - 1 Corinthians 16:14"
];

app.get('/', (req, res) => {
    res.send('CatWorld Server is Running! ❤️');
});

app.get('/quote', (req, res) => {
    const randomQuote = bibleQuotes[Math.floor(Math.random() * bibleQuotes.length)];
    res.json({ quote: randomQuote });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
