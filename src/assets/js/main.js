
function requestApi(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Og==");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://gateway.marvel.com/v1/public/characters?orderBy=name&ts=1&apikey=cce4237dc02073fba69789cb4aed5be3&hash=66874614563d454ab9159e1f6192a972", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}


