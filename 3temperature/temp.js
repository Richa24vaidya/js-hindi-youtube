// const convertBtn = document.getElementById('convertBtn');
const form = document.querySelector('form');

form.addEventListener('click', function () {
  const celcius = parseFloat(document.getElementById('celcius').value);
  const fahrenheit = parseInt(document.getElementById('fahrenheit').value)
  const result = document.querySelector('#results');


  if (isNaN(input)) {
    resultBox.textContent = 'Please enter a valid number.';
    return;
  }

  let result;

  // Convert to Celsius first
  let celsius;
  if (from === 'celsius') celsius = input;
  else if (from === 'fahrenheit') celsius = (input - 32) * 5/9;
  else if (from === 'kelvin') celsius = input - 273.15;

  // Convert from Celsius to target unit
  if (celcius < 0 || celcius === '' || isNaN(celcius)  {
    result.innerHTML = `please give a valid number ${celcius}`;
  }
  else if (fahrenheit < 0 || fahrenheit === '' || isNaN(fahrenheit)  {
    result.innerHTML = `please give a valid number ${fahrenheit}`;
  }
  else if (to === 'fahrenheit') result = (celsius * 9/5) + 32;
  else if (to === 'celcius') result = celsius + 273.15;

  resultBox.textContent = `Result: ${result.toFixed(2)} °${to.charAt(0).toUpperCase()}`;
});
