const quote = document.getElementById('insert-quote');
const author = document.getElementById('author');

const getNewQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
      });
  };


