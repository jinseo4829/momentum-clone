const quotes = [
  {
    quote:
      "I refuse to accept other people's ideas of happiness for me. As if there's a 'one size fits all' standard for happiness.",
    author: "Kanye West",
  },
  {
    quote:
      "My greatest pain in life is that I will never be able to see myself perform live.",
    author: "-Kanye West-",
  },
  {
    quote: "Believe in your flyness, conquer your shyness.",
    author: "-Kanye West-",
  },
  {
    quote: "I feel like I'm too busy writing history to read it.",
    author: "-Kanye West-",
  },
  {
    quote: "You can't look at a glass half full or empty if it's overflowing.",
    author: "-Kanye West-",
  },
  {
    quote: "I still think I am the greatest.",
    author: "-Kanye West-",
  },
  {
    quote: "We all self-conscious. I'm just the first to admit it.",
    author: "-Kanye West-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
