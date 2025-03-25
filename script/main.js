let input = prompt("Enter a price (e.g. $49.99):");
let priceStr = input.replace("$", "");
let priceNum = parseFloat(priceStr);
let discountedPrice = priceNum * 0.9;
console.log(`Your new price: $${discountedPrice.toFixed(2)}`);
