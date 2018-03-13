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
        country: ["JP","CN","EN"][ parseInt(Math.random() * 3)],
        category : ["A","B"][ parseInt(Math.random() * 2) ],
        os_flow : parseInt(Math.random() * 6000),
        ow_flow : parseInt(Math.random() * 3000),
        pv : parseInt(Math.random() * 2000),
        ss : parseInt(Math.random() * 2000),
        uu : parseInt(Math.random() * 2000),
        value : Math.floor(Math.random() * 10),
        node_id : "00000" + parseInt(Date.now()/100).toString().substr(-4),
        created: Date.now(),
        latitude: RandomData.getRandomInt(90, -90),
        longitude: RandomData.getRandomInt(180, -180),
      }
    }
  }
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

module.exports = RandomData;