const input = document.getElementById('inputvalue');
const result = document.getElementById('result');
const cel = document.getElementById('cel');
const fah = document.getElementById('fah');
const convertBtn = document.getElementById('convert');

convertBtn.addEventListener('click', () => {
    const inputValue = parseFloat(input.value);
    if (isNaN(inputValue)) {
        result.textContent = 'Please enter a valid number.';
        return;
    }
    if (cel.checked) {
        const fahrenheit = (inputValue * 9/5) + 32;
        result.textContent = `${inputValue} °C is equal to ${fahrenheit.toFixed(2)} °F.`;
    } else if (fah.checked) {
        const celsius = (inputValue - 32) * 5/9;
        result.textContent = `${inputValue} °F is equal to ${celsius.toFixed(2)} °C.`;
    } else {
        result.textContent = 'Please select a conversion type.';
    }
});