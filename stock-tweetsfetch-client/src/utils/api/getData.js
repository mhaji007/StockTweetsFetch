export function getData(userInput) {
  // Declare an empty array to house all symbols 
  const stocktweets = [];

  // Parse stock symbols from user input
  const symbols = userInput.split(",").map((item) => item.trim());
  // Post call passing user inputs to fetch all the user required symbols
  symbols.forEach(async (item) => {
    stocktweets.push(
      fetch(`https://stocktweets-server.herokuapp.com/tweets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symbol: item }),
      })
        .then((res) => res.json())
        .catch((err) => console.log("error....", err))
    );
  });
  return stocktweets;
}
