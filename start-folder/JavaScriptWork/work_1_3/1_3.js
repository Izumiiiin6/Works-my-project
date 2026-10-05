const getTotalPrice = (price, quantity) => price * quantity;
const addTax = total => Math.floor(total * 1.1);
const total = getTotalPrice(1000, 2); // → 2000
console.log(`税抜金額は${total}円です`);
const taxedTotal = addTax(total); // → 2200
console.log(`税込金額は${taxedTotal}円です`);
