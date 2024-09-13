function insurance(brand, year, type) {
  this.brand = brand;
  this.year = year;
  this.type = type;
}

function UI() {}

UI.prototype.fillOptions = () => {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 20;

  const selectYear = document.querySelector("#year");

  for (let i = currentYear; i > minYear; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);

  }
};

const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.fillOptions();
});

eventListeners();
function eventListeners() {
  const formulario = document.querySelector("#quote-insurance");
  formulario.addEventListener("submit", quoteInsurance);
}
