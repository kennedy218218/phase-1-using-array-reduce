const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = [4, 5, 3, 4, 4, 6, 5].reduce((sum, batch) => sum + batch, 0);

module.exports = { totalBatteries };
