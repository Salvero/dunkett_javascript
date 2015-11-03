
var design = 'La Verticale de la Tour Eiffel';
var bigTower = '<h2>How many [ length ] ?</h2><p>' + design.length + '</p>';
bigTower += '<h2>Can you [ uppercase ] ?</h2><p>' + design.toUpperCase() + '</p>';
bigTower += '<h2>Then now [ lowercase ] ?</h2><p>' + design.toLowerCase() + '</p>';
bigTower += '<h2>Okay, what is [ character index ] in #13 ?</h2><p>' + design.charAt(13) + '</p>';
bigTower += '<h2>How about [ split ] each word ?</h2><p>' + design.split(" ") + '</p>';

var el = document.getElementById('info');
el.innerHTML = bigTower;
