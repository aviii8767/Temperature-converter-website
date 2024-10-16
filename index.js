function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitInput").value;
  let celsius, fahrenheit, kelvin;

  if (isNaN(temp)) {
    document.getElementById("resultOutput").innerHTML =
      "Please enter a valid number!";
    return;
  }

  if (unit === "Celsius") {
    fahrenheit = (temp * 9) / 5 + 32;
    kelvin = temp + 273.15;
    document.getElementById(
      "resultOutput"
    ).innerHTML = `${temp}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(
      2
    )}K`;
  } else if (unit === "Fahrenheit") {
    celsius = ((temp - 32) * 5) / 9;
    kelvin = celsius + 273.15;
    document.getElementById(
      "resultOutput"
    ).innerHTML = `${temp}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
  } else if (unit === "Kelvin") {
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById(
      "resultOutput"
    ).innerHTML = `${temp}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(
      2
    )}°F`;
  }
}
