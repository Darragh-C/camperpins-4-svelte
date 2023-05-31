// @ts-nocheck

export const weatherUtils = {

  objectStrip(array) {
    let cleanArray = [];

    for (let obj of array) {
      let cleanObj = {};
      let keys = [];
      for (let key in obj) {
        keys.push(key);
      }

      for (let i = 1; i < keys.length - 2; i++) {
        cleanObj[keys[i]] = obj[keys[i]];
      }

      cleanArray.push(cleanObj);
    }

    return cleanArray;
  },

  objectsReduce(objects) {
    let reducedObj = {};
    for (let i = 0; i < objects.length; i++) {
        for (let key in objects[i]) {
            if (!reducedObj[key]) {
              reducedObj[key] = [];
            }
            reducedObj[key].push(objects[i][key]);
        }
    }
    return reducedObj;
  },

  trendDirection(dataArray) {

    const first = dataArray[0];
    const second = dataArray[1];
    const third = dataArray[2];

    if (first < second && second < third) {
        return ['fas fa-arrow-up fa-2x', 'color:turquoise']
    } else if (first > second && second > third) {
        return ['fas fa-arrow-down fa-2x', 'color:navy'] ;
    } else {
        return null;
    }
  },

  trendObject(object) {
    let trendObject = {};

    for (let key in object) {
        let trend = this.trendDirection(object[key]);
        if (trend) {
          trendObject[key] = trend;
        }
    }
    return trendObject;
  },

  removeUnderscore(string) {
    const removedUnderscore = string.replace(/_/g, ' ');
    return removedUnderscore;
  },

  titleCase(string) {
    const titleCase = string.charAt(0).toUpperCase() + string.slice(1);
    return titleCase;
  }


};