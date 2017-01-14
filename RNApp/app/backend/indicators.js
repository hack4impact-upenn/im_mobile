/* 
Returns a keymap of indicators to arrays of data points
Note: A sample return object looks like { indic1: [datapt1, datapt2, datapt3], indic2: [datapt1] }
Note: A sample data point looks like { date:'2010-10-01', value: 0.423 }
*/
export function getCountryIndicators(data) {
  let indicatorData = data['data']['relationships']['data_points']['data'];
  let indicators = {};

  indicatorData.forEach(function(dataPoint){
    let key = dataPoint['attributes']['indicator'];
    let val = {
      date: dataPoint['attributes']['date'],
      value: dataPoint['attributes']['value']
    };
    if (indicators[key]){
      indicators[key].push(val);
    } else {
      indicators[key] = [val];
    }
  });

  return indicators;
}

