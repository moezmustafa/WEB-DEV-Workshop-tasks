function add() {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    const result = operand1 + operand2;
    document.getElementById('result').textContent = `Result: ${result}`;
  }
  
  function subtract() {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    const result = operand1 - operand2;
    document.getElementById('result').textContent = `Result: ${result}`;
  }
  
  function multiply() {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    const result = operand1 * operand2;
    document.getElementById('result').textContent = `Result: ${result}`;
  }
  
  function divide() {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    const result = operand1 / operand2;
    document.getElementById('result').textContent = `Result: ${result}`;
  }
  