function convertTemperature() {
  var temperatureInput = document.getElementById('temperature').value;
  var unitFahrenheit = document.getElementById('fahrenheit').checked;
  
  if (unitFahrenheit) {
    var celsius = (temperatureInput - 32) * 5 / 9;
    document.getElementById('result').innerHTML = temperatureInput + "°F is " + celsius.toFixed(2) + "°C";
  } else {
    var fahrenheit = (temperatureInput * 9 / 5) + 32;
    document.getElementById('result').innerHTML = temperatureInput + "°C is " + fahrenheit.toFixed(2) + "°F";
  }
}