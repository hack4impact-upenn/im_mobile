// Returns a keymap of indicators to arrays of data points
// Note: A sample return object looks like { indic1: [datapt1, datapt2, datapt3], indic2: [datapt1] }
// Note: A sample data point looks like { date:'2010-10-01', value: 0.423 }
export function getCountryIndicators(data) {
  let indic_data = data['data']['relationships']['data_points']['data'];
  let indicators = {};

  indic_data.forEach(function(data_point){
    let key = data_point['attributes']['indicator'];
    let val = {
      date: data_point['attributes']['date'],
      value: data_point['attributes']['value']
    };
    if (indicators[key]){
      indicators[key].push(val);
    } else {
      indicators[key] = [val];
    }
  });

  return indicators;
}

export function getMetricsList(data) {
  let metric_data = data['data'];
  let metrics = {};

  metric_data.forEach(function(data_point) {
    let key = data_point['attributes']['short_name'];
    let val = {
      long_name: data_point['attributes']['name'],
      type: data_point['attributes']['display_class']
    };

    metrics[key] = val;
  });

  return metrics;
}

