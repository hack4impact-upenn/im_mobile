export async function makeRequest(map) {
  // Make request to Berkman API
  // countryCode is in ISO3
  const apiUrl = 'https://thenetmonitor.org/v2/countries/';
  let requestUrl = apiUrl + map.props.iso3Code;
  console.log('requesturl: ' + requestUrl);
  let data = '';
  
  try {
    let response = await fetch(requestUrl);
    let responseJson = await response.json();
    console.log('country name hereerererere');
    console.log(responseJson['data']['attributes']['name']);
    map.setState({isLoading:false});
    return responseJson['data'];
  } catch(error) {
    console.error(error);
  }
}

export function getCountryName(responseData) {
  //console.log('Country name here!!!!');
  //console.log(responseData['attributes']['name']);
  //console.log('was it right?');

  let test = makeRequest('usa');
  return test['attributes']['name'];
}
