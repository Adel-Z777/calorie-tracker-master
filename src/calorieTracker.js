const calculateWeightLostInAMonth = (
  cycling,
  running,
  swimming,
  extraCalorieInTake
) => {
  if (cycling > 0 && running > 0 && swimming > 0) {
    // 2 for (30min x 2) since sam exercises for 60 min
    // 4 since a month have 4 weeks
    let caloriesBurnedByCyclingInMonth = (cycling * 2 * 4) / 1000;
    let caloriesBurnedByRunningInMonth = (running * 2 * 4) / 1000;
    let caloriesBurnedBySwimmingInMonth = (swimming * 2 * 4) / 1000;
    let extraCalorieInTakeInMonth = (extraCalorieInTake * 30) / 1000;
    let weightLostInMonth =
      caloriesBurnedByCyclingInMonth +
      caloriesBurnedByRunningInMonth +
      caloriesBurnedBySwimmingInMonth -
      extraCalorieInTakeInMonth;
    weightLostInMonth = parseFloat(weightLostInMonth.toFixed(1));
    return weightLostInMonth;
  } else {
    return -true;
  }
};

module.exports = calculateWeightLostInAMonth;
