function applyDiscount(price, percentage) {
  return price * (1 - percentage / 100);
}

if (require.main === module) {
  console.log(`Final price: $${applyDiscount(100, 10).toFixed(2)}`);
}

module.exports = { applyDiscount };
