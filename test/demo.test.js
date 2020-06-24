/**
 * @description test demo
 */

function sum(a, b) {
  return a + b
}
test('should 30', () => {
  const res = sum(10, 20)
  expect(res).toBe(30)
})
