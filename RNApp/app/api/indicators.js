/* 
Returns a keymap of indicators to arrays of data points
Note: A sample return object looks like { indic1: [datapt1, datapt2, datapt3], indic2: [datapt1] }
Note: A sample data point looks like { date:'2010-10-01', value: 0.423 }
*/
export function getCountryIndicators(data) {
  let indicatorData = data['data']['relationships']['data_points']['data'];
  let indicators = {};

  indicatorData.forEach(function(dataPoint) {
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

/*
Returns a keymap of the given indicators to their respective info (title, type)
Note: A sample return object looks like { ippoc: {name: 'IP addresses per point of control', isPercentage: false}, bbcost2:{...} }
*/
export function getIndicatorInfo(json, indicators) {
  let indicatorList = json['data'];
  let infoObj = {}; 

  for (var indicator in indicators) {
    indicatorList.forEach(function(indicObj) {
      let indicInfo = indicObj['attributes'];
      if (indicInfo['admin_name'] === indicator) {
        infoObj[indicator] = {};
        infoObj[indicator]['title'] = indicInfo['short_name'];
        infoObj[indicator]['isPercentage'] = (indicInfo['display_class'] === 'percentage');
      }
    });
  }
  return infoObj;
};
