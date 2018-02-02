let uuid = require('uuid');

class RandomData {
  static makeRandomData(startDate, endDate) {
    let start = startDate.getTime();
    let end = endDate.getTime();

    let scale = end - start;
    let delta = Math.random() * scale;
    let id = uuid();
    let date = new Date(start + delta);
    return {
      id: id,
      date : date,
      timestamp: start + delta,
      value: {
        country : ['JP', 'US', 'CH'][Math.round(Math.random() * 100) % 2],
        value : Math.floor(Math.random() * 10)
      }
    }
  }

}

module.exports = RandomData;