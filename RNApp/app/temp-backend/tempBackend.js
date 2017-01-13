
async function makeRequest(countryCode) {
  // Make request to Berkman API
  // countryCode is in ISO3
  const apiUrl = 'https://thenetmonitor.org/v2/countries/';
  let requestUrl = apiUrl + countryCode;
  let data = '';
  
  try {
    let response = await fetch(requestUrl);
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}
