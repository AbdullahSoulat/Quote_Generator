const quote = document.getElementById('insert-quote');

const getNewQuote = () => {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => (quote.innerHTML = data.quote));
  };


