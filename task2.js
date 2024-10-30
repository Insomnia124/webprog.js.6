function calcAverageCalories(days) {
    if (days.length === 0) return 0;
    let totalCalories = 0;
    let totalDays = 0;
  
    for (const day of days) {
      let calories = day.calories;
      if (day.intensity === 'high') {
        calories *= 1.1;
      } else if (day.intensity === 'low') {
        calories *= 0.9;
      }
      totalCalories += calories;
      totalDays++;
    }
  
    const averageCalories = totalCalories / totalDays;
    if (averageCalories > 3000) {
      console.log("The athlete consumes enough calories.");
    } else if (averageCalories < 2000) {
      console.log("The athlete does not consume enough calories.");
    }
  
    return averageCalories;
  }
  
  let weeklyCalories = [
    { day: "monday", calories: 2040, intensity: 'medium' },
    { day: "tuesday", calories: 2270, intensity: 'low' },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900, intensity: 'medium' },
    { day: "friday", calories: 2370, intensity: 'high' },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ];
  console.log(calcAverageCalories(weeklyCalories)); // 2270
  