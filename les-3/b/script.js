let baseUrl = " http://www.omdbapi.com/?t=parasite&apikey=e90b651b ";

window.onload = function () {
  //get value from input
  // ...
  // build url

  let url = baseUrl;

  getData(url).then((result) => {
    console.log(result);
  });
};

async function getData(url) {
  let response = await fetch(url);
  return await response.json();
}
