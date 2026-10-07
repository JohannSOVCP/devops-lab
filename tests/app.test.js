const test = require('node:test');
const assert = require('node:assert/strict');
const { applyDiscount } = require('../src/app');

test('A 10% discount on $100 returns $90', () => {
  assert.equal(applyDiscount(100, 10), 80);
});
