export async function makeRequest(countryCode) {
  // Make request to Berkman API
  // countryCode is in ISO3
  const apiUrl = 'https://thenetmonitor.org/v2/countries/';
  let requestUrl = apiUrl + countryCode;
  let data = '';
  
  try {
    let response = await fetch(requestUrl);
    let responseJson = await response.json();
    console.log('country name hereerererere');
    console.log(responseJson['data']['attributes']['name']);
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
