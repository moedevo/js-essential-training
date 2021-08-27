const formatter = (locale = "en-US", currency = "USD", value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
    return formattedValue;
  };

const tipCalculator = (sum, percentage, locale, currency, printHTML) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  const finalTip = {
    sum: formatter(locale, currency, sum),
    percentage: percentage + "%",
    tip: formatter(locale, currency, tip),
    total: formatter(locale, currency, total),
  };

  printHTML(finalTip);
};

tipCalculator(29.95, 18, "de-DE", "EUR", printHTML);
