module.exports = {
  add,
};

function add(...nums) {
  return nums.reduce((sum, num) => {
    return (sum += num);
  }, 0);
}
