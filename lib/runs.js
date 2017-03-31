'use strict'

const mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800
    }
  ],
  totalDistance: function () {
    //first, let totalDistance know about runs, let it know runs is in the building!
    const runs = this.runs
    let result = 0
    for (let i = 0; i < runs.length; i++) {
      result += runs[i].distance
    }
    return result
  },
  longestRun: function () {
    const runs = this.runs
    for (let i = 0; i < runs.length; i++) {
      runs[i]
    }
  },
  averageSpeed: function () {
    const runs = this.runs
    let totalTime = 0
    for (let i = 0; i < runs.length; i++) {
      totalTime += runs[i].timeTaken
    }
    return this.totalDistance() / totalTime
  }
}

module.exports = mcFaceRuns
