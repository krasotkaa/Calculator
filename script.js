const display = document.querySelector('.display')
const buttonsContainerElement = document.querySelector('.buttons')

buttonsContainerElement.addEventListener(
	'click',
	event => {
		if (event.target.classList.contains('buttons')) {
			return
		} else {
			switch (event.target.innerText) {
				case 'AC': {
					display.innerText = '0'
					break
				}

				case '=': {
					try {
						let result = eval(display.innerText)
						if (!isFinite(result)) {
							throw new Error('Invalid: ÷ 0')
						} else {
							display.innerText = result
						}
					} catch (error) {
						display.innerText = error.message
					}
					break
				}

				case '+/-': {
					if (display.innerText.includes('-')) {
						display.innerText = display.innerText.replace('-', '')
					} else {
						display.innerText = display.innerText.replace('', '-')
					}
					break
				}

				case '%': {
					let percentSymbolAndDisplayText = display.innerText + '/100'
					display.innerText = eval(percentSymbolAndDisplayText)
					break
				}
				default: {
					const mathSymbolsArray = ['+', '-', '/', '*', '.']
					const elementClickedText = event.target.innerText
					const containSymbols = mathSymbolsArray.some(symbols =>
						display.innerText.includes(symbols)
					)
					if (
						display.innerText === '0' &&
						!containSymbols &&
						!isNaN(elementClickedText)
					) {
						display.innerText = event.target.innerText
					} else {
						display.innerText += event.target.innerText
					}
				}
			}
		}
	},
	true
)
