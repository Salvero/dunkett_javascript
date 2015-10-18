var today = new Date();
var timeNow = today.getTime();
var greeting;

if (timeNow > 18) {
  greeting = 'Good evening!';
} else if (timeNow > 12) {
  greeting = 'Good afternoon!';
} else if (timeNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'welcome!';
}

document.write('<h1>' + greeting.toUpperCase() + '</h1>');
