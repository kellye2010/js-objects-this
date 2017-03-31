'use strict'

const mealObj = {
  // your code goes here
  name: '',
  bornOn: '',
  calGoal: '2500',

  meals: [
    {
      title: 'Breakfast',
      description: '',
      date: '',
      mealCalories: ''
    },
    {
      title: 'Lunch',
      description: '',
      date: '',
      mealCalories: ''
    },
    {
      title: 'Dinner',
      description: '',
      date: '',
      mealCalories: ''
    }
  ]
}

caloriesEatenOn: function (date) {
 let dateCalories = 0
 for (let i = 0; i < this.meals.length; i++) {
   if(this.meals[i].date === date) {
     dateCalories += this.meals[i].mealCalories
   }
 }
 return dateCalories
}

avgDailyCals: function () {
  const meals = this.meals
  let dailyCals = 0
  for (let i = 0; i < meals.length; i++) {
    meals[i]
  }
  return this.caloriesEatenOn() / totalTime
}

goalMet: function () {
  const myCalGoal = 0
   if (myCalGoal <= goalMet) {
     console.log('Goal met!')
     return true
   } else {
     console.log('Goal not met.')
     return false
   }
}

module.exports = mealObj
