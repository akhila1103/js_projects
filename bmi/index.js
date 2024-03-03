function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = ( weight / ((height * height) / 10000)).toFixed(2);
    if(isNaN(weight) || weight == ""){
        alert("Please enter your weight");
    }
    else if(isNaN(height) || height == ""){
        alert("Please enter your height");
    }
    else{
        if(bmi <= 18.4){
            document.getElementById("message").innerHTML = "You are underweight";
        }
        else if(bmi>=18.5 && bmi<=24.9){
            document.getElementById("message").innerHTML = "You are normal";
        }
        else if(bmi>=25 && bmi<=39.9){
            document.getElementById("message").innerHTML = "You are overweight";
        }
        else{
            document.getElementById("message").innerHTML = "You are obese";
        }
    }
}