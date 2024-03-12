

function bmiCal() {
    var height = parseFloat(document.getElementById('input_height').value);
    var weight = parseFloat(document.getElementById('input_weight').value);

    document.getElementById('display').innerHTML = 'Your BMI is ' + weight / (height * height);
}





