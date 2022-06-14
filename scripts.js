var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

//Essa função vai somar 1 ao meu número atual na contagem
//++ é o mesmo que +1
function increment() {
	currentNumber = ++currentNumber;
	currentNumberWrapper.innerHTML = currentNumber;
	refreshColor();
	stopCount();
}

//Essa função vai diminuir 1 do meu número atual na contagem
//-- é o mesmo que -1
function decrement() {
	currentNumber = --currentNumber;
	currentNumberWrapper.innerHTML = currentNumber;
	refreshColor();
	stopCount();
}

//Essa função vai alterar as cores quando a contagem chegar na condição. 
function refreshColor() {
	if (currentNumber < 0) {
		currentNumberWrapper.style.color = 'red';
	} else {
		currentNumberWrapper.style.color = 'blue';
	}  
  }

//Essa função vai parar a contagem quanto o número for maior que 9+1 e quando for menor que 9-1
  function stopCount() {
	if (currentNumber < -9) {
		currentNumber = 0};
	if (currentNumber > 9) {
		currentNumber = 0};
  }

/*Para que as funções de alterar cor (refreshColor) e parar contagem (stopColor) aconteçam é necessário chamá-las,
dentro das funções de incremento e decremento.*/ 
