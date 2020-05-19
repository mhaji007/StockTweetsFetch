import { filter, size } from "lodash";
import numeral from "numeral";

export function getSymbolList(data) {
  return filter(data, (item) => item.symbol);
}
// Method for getting symbols from API call and displaying them in the right side bar
export function getSymbolMap(data) {
  // Reduce method to get each symbol
  return getSymbolList(data).reduce(
    (o, item) => ({ ...o, [item.symbol.id]: item }),
    {}
  );
}

// Count number of total tweets from each symbol and show it in the right side bar
export function getTotalTweetCount(data) {
  const total = getSymbolList(data).reduce(
    (acc, o) => o.messages.length + acc,
    0
  );
  return numeral(total).format("0,0");
}

export function getSymbolCount(data) {
  // Use size function of lodash to count number of symbol in the center container
  const count = size(data);
  const symbolStr = count === 1 ? "symbol" : "symbols";
  const numberOfSymbols = numeral(count).format("0,0");
  return `${numberOfSymbols} ${symbolStr}`;
}
