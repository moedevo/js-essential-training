const tipCalculator = (sum , percentage , currency , prefix) => {
  let tip = sum * (percentage/100)
  let total = tip + sum 
  if (prefix){console.log(`
    Sum Before Tip: ${currency}${sum}
    Tip Percentage: ${percentage}%
    Tip : ${currency}${tip}
    Total: ${currency}${total}
  `)} else {console.log(`
    Sum Before Tip: ${sum}${currency}
    Tip Percentage: ${percentage}%
    Tip : ${tip}${currency}
    Total: ${total}${currency}
  `)}
}
tipCalculator(60000,20," IQD",false)