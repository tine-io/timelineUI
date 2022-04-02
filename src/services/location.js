async function getLocationsByTimerange(startDate, endDate, token) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    var points;
    await fetch("http://localhost:8000/timerange?start=" + startDate + "&end=" + endDate, requestOptions)
        .then(response => response.text())
        .then(result => points = result)
        .catch(error => console.log('error', error));
    return points;
}

export {
    getLocationsByTimerange
  }