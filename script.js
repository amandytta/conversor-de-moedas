let nameUser = document.getElementById("nameUser").value;

let buttonConvert = document.getElementById("btnConverter");

buttonConvert.addEventListener("click", function () {
  let nameUser = document.getElementById("nameUser").value;
  let valorEmLibras = parseFloat(document.getElementById("valorLibras").value);

  if (nameUser === "" || isNaN(valorEmLibras) || valorEmLibras <= 0) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  let cotacaoDoDolar = 1.25;
  let valorEmDolar = valorEmLibras * cotacaoDoDolar;

  document.getElementById("resultado").textContent =
    "USD$ " + valorEmDolar.toFixed(2);
});

let buttonClear = document.getElementById("btnLimpar");

buttonClear.addEventListener("click", function () {
  document.getElementById("valorLibras").value = "";
  document.getElementById("resultado").textContent = "";
});
