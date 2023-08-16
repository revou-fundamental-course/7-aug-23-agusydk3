var mode = 'luas';


function changeMode(newMode) {
  mode = newMode;
  reset();
  if (mode === 'luas') {
    document.getElementById("label1").innerHTML = "Alas:";
    document.getElementById("label2").innerHTML = "Tinggi:";
    document.getElementById("label3").innerHTML = "";
    document.getElementById("input-container-3").style.display = "none";
  } else if (mode === 'keliling') {
    document.getElementById("label1").innerHTML = "Sisi 1:";
    document.getElementById("label2").innerHTML = "Sisi 2:";
    document.getElementById("label3").innerHTML = "Sisi 3:";
    document.getElementById("input-container-3").style.display = "block";
  }
}

function hitung() {
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  var input3 = parseFloat(document.getElementById("input3").value);
  
  if (isNaN(input1) || isNaN(input2) || (mode === 'keliling' && isNaN(input3))) {
    document.getElementById("result").innerHTML = "Masukkan angka yang valid!";
    return;
  }
  
  var result = "";
  var formula = "";
  
  if (mode === 'luas') {
    var area = 0.5 * input1 * input2;
    result = "Luas segitiga = " + area.toFixed(2);
    formula = " Luas Segitiga = 1/2 * " + input1 + " * " + input2;
  } else if (mode === 'keliling') {
    var perimeter = input1 + input2 + input3;
    result = "Keliling segitiga = " + perimeter.toFixed(2);
    formula = " Keliling Segitiga = " + input1 + " + " + input2 + " + " + input3;
  }
  
  document.getElementById("formula").innerHTML = formula;
  document.getElementById("result").innerHTML = result;
}

function reset() {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("formula").innerHTML = "";
}
