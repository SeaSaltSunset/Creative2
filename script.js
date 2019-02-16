document.getElementById("pokeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("pokeInput").value;
  if (value === "")
    return;
  console.log(value);

   const url = "https://pokeapi.co/api/v2/pokemon-species/" + value ;//+ ",US&units=imperial" + "&APPID=APIKEY";
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
	    const pic_url = "https://img.pokemondb.net/artwork/large/" + json.name + ".jpg";
      let results = "";
      results += "<h3> It's...  " + json.name + '!!! </h3>';
	results +='<img src="https://img.pokemondb.net/artwork/' + json.name + '.jpg"/>';
      results += '<h2>Pokedex ID: #' +json.id + "<hr></h2>";     
       results += '<h2>Habitat: ' + json.habitat['name']  + "<hr></h2>"
      
      results += '<h2>Egg Group: ' + json.egg_groups[0]['name']  + "<hr></h2>"
      
      let hatchSteps = 255 *( json.hatch_counter + 1 ) 
      results += '<h2>Time until hatches: ' + hatchSteps + " steps</h2>"
      results += "<p>"
      results += "</p>";
      document.getElementById("pokeResults").innerHTML = results;
    });

});
