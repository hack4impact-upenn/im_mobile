export function getMetricsList(data) {
  let metric_data = data['data'];
  let metrics = {};

  metric_data.forEach(function(data_point) {
    let key = data_point['attributes']['short_name'];
    let val = {
      long_name: data_point['attributes']['name'],
      type: data_point['attributes']['display_class'],
      id: data_point['attributes']['admin_name']
    };

    metrics[key] = val;
  });

  return metrics;
}
