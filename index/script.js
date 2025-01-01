document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  // Options data
  const options = [
    { value: "option1", text: "Select", price: 0 },
    { value: "option2", text: "HP", price: 100 },
    { value: "option3", text: "Dell", price: 120 },
    { value: "option4", text: "Lenovo", price: 110 },
  ];

  // Create a new row with inputs and buttons
  function createRow() {
    const row = document.createElement("div");
    row.classList.add("data-div");

    // Dropdown
    const select = document.createElement("select");
    select.classList.add("choices");
    options.forEach(({ value, text, price }) => {
      const opt = document.createElement("option");
      opt.value = value;
      opt.textContent = text;
      opt.dataset.price = price;
      select.appendChild(opt);
    });

    // Inputs
    const priceInput = createInput("number", "Price", 0, true);
    const quantityInput = createInput("number", "Quantity", 0);
    const totalInput = createInput("number", "Total", 0, true);

    // Buttons
    const minusBtn = createButton("-", () => row.remove());
    const plusBtn = createButton("+", createRow);

    // Event Listeners
    select.addEventListener("change", () => {
      const price = parseFloat(select.options[select.selectedIndex].dataset.price);
      priceInput.value = price;
      updateTotal(priceInput, quantityInput, totalInput);
    });

    quantityInput.addEventListener("input", () => {
      updateTotal(priceInput, quantityInput, totalInput);
    });

    // Append elements
    row.append(minusBtn, select, priceInput, quantityInput, totalInput, plusBtn);
    container.appendChild(row);
  }

  // Create input element
  function createInput(type, placeholder, value = 0, readOnly = false) {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.value = value;
    input.readOnly = readOnly;
    return input;
  }

  // Create button element
  function createButton(text, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
  }

  // Update total
  function updateTotal(priceInput, quantityInput, totalInput) {
    const price = parseFloat(priceInput.value) || 0;
    const quantity = parseInt(quantityInput.value) || 0;
    totalInput.value = (price * quantity).toFixed(2);
  }

  // Initialize with one row
  createRow();
});
