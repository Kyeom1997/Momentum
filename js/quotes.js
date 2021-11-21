const quotes = [
  {
    quote:
      "Anybody who has survived his childhood has enough information about life to last him the rest of his days.",
    author: "Flannery O'Connor, Mystery and Manners: Occasional Prose",
  },
  {
    quote:
      "A writer is someone for whom writing is more difficult than it is for other people.",
    author: "Thomas Mann, Essays of Three Decades",
  },
  {
    quote:
      "A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.",
    author: "G.K. Chesterton, Heretics",
  },
  {
    quote:
      "I've got the key to my castle in the air, but whether I can unlock the door remains to be seen.",
    author: "",
  },
  {
    quote:
      "A story is a letter that the author writes to himself, to tell himself things that he would be unable to discover otherwise.",
    author: "Carlos Ruiz Zafón, The Shadow of the Wind",
  },
  {
    quote: "Quiet people have the loudest minds.",
    author: "Stephen King",
  },
  {
    quote:
      "What I like in a good author is not what he says, but what he whispers.",
    author: "Logan Pearsall Smith",
  },
  {
    quote: "Books are for nothing but to inspire",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Love what is simple and beautiful. These are the essentials",
    author: "Ralph Waldo Emerson, The Tao of Emerson the Tao of Emerson",
  },
  {
    quote: "Sand lines my soul which is filled with the breath of the ocean.",
    author: "A.D. Posey",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
