let firstValue = '0'
let secondValue = ''
let action = ''
let activeVariable = '1'

const addFontStyles = (result, node) => {
  const resultString = result.toString()
  const comma = result.split(',')
  node.classList.remove(
    'comma_size_xs',
    'minus_comma_size_xxs',
    'minus_comma_size_xs',
    'comma_dot_size_xs',
    'comma_dot_size_s',
    'comma_dot_size_m',
    'comma_dot_size_l',
    'comma_dot_size_xl',
    'minus_comma_dot_size_xs',
    'minus_comma_dot_size_s',
    'minus_comma_dot_size_m',
    'minus_comma_dot_size_l',
    'minus_comma_dot_size_xl',
    'doublecomma_size_xs',
    'doublecomma_size_s',
    'doublecomma_size_m',
    'minus_doublecomma_size_xs',
    'minus_doublecomma_size_s',
    'minus_doublecomma_size_m',
    'doublecomma_dot_size_xs',
    'doublecomma_dot_size_s',
    'doublecomma_dot_size_m',
    'minus_doublecomma_dot_size_xs',
    'minus_doublecomma_dot_size_s',
    'minus_doublecomma_dot_size_m',
    'dot_size_xs',
    'dot_size_s',
    'dot_size_m',
    'dot_size_l',
    'minus_dot_size_xs',
    'minus_dot_size_s',
    'minus_dot_size_m',
    'minus_dot_size_l',
    'minus_dot_size_xl'
  )

  if (result.includes('-') && comma.length === 3 && result.includes('.')) {
    if (resultString.length > 12) {
      node.classList.add('minus_doublecomma_dot_size_m')
      return
    }
    if (resultString.length > 11) {
      node.classList.add('minus_doublecomma_dot_size_s')
      return
    }
    if (resultString.length > 10) {
      node.classList.add('minus_doublecomma_dot_size_xs')
      return
    }
    return
  }
  if (comma.length === 3 && result.includes('.')) {
    if (resultString.length > 11) {
      node.classList.add('doublecomma_dot_size_m')
      return
    }
    if (resultString.length > 10) {
      node.classList.add('doublecomma_dot_size_s')
      return
    }
    if (resultString.length > 9) {
      node.classList.add('doublecomma_dot_size_xs')
      return
    }
    return
  }

  if (result.includes('-') && comma.length === 3) {
    if (resultString.length > 11) {
      node.classList.add('minus_doublecomma_size_m')
      return
    }
    if (resultString.length > 10) {
      node.classList.add('minus_doublecomma_size_s')
      return
    }
    if (resultString.length > 9) {
      node.classList.add('minus_doublecomma_size_xs')
      return
    }
    return
  }
  if (comma.length === 3) {
    if (resultString.length > 10) {
      node.classList.add('doublecomma_size_m')
      return
    }
    if (resultString.length > 9) {
      node.classList.add('doublecomma_size_s')
      return
    }
    if (resultString.length > 8) {
      node.classList.add('doublecomma_size_xs')
      return
    }
    return
  }

  if (result.includes('-') && result.includes(',') && result.includes('.')) {
    if (resultString.length > 11) {
      node.classList.add('minus_comma_dot_size_xl')
      return
    }
    if (resultString.length > 10) {
      node.classList.add('minus_comma_dot_size_l')
      return
    }
    if (resultString.length > 9) {
      node.classList.add('minus_comma_dot_size_m')
      return
    }
    if (resultString.length > 8) {
      node.classList.add('minus_comma_dot_size_s')
      return
    }
    if (resultString.length > 7) {
      node.classList.add('minus_comma_dot_size_xs')
      return
    }
    return
  }
  if (result.includes(',') && result.includes('.')) {
    if (resultString.length > 10) {
      node.classList.add('comma_dot_size_xl')
      return
    }
    if (resultString.length > 9) {
      node.classList.add('comma_dot_size_l')
      return
    }
    if (resultString.length > 8) {
      node.classList.add('comma_dot_size_m')
      return
    }
    if (resultString.length > 7) {
      node.classList.add('comma_dot_size_s')
      return
    }
    if (resultString.length > 6) {
      node.classList.add('comma_dot_size_xs')
      return
    }
    return
  }

  if (result.includes('-') && result.includes(',')) {
    if (resultString.length > 7) {
      node.classList.add('minus_comma_size_xs')
      return
    }
    if (resultString.length > 6) {
      node.classList.add('minus_comma_size_xxs')
      return
    }
    return
  }
  if (result.includes(',')) {
    if (resultString.length > 6) {
      node.classList.add('comma_size_xs')
      return
    }
    return
  }

  if (result.includes('-') && result.includes('.')) {
    if (resultString.length > 10) {
      node.classList.add('minus_dot_size_xl')
      return
    }
    if (resultString.length > 9) {
      node.classList.add('minus_dot_size_l')
      return
    }
    if (resultString.length > 8) {
      node.classList.add('minus_dot_size_m')
      return
    }
    if (resultString.length > 7) {
      node.classList.add('minus_dot_size_s')
      return
    }
    if (resultString.length > 6) {
      node.classList.add('minus_dot_size_xs')
      return
    }
    return
  }
  if (result.includes('.')) {
    if (resultString.length > 9) {
      node.classList.add('dot_size_l')
      return
    }
    if (resultString.length > 8) {
      node.classList.add('dot_size_m')
      return
    }
    if (resultString.length > 7) {
      node.classList.add('dot_size_s')
      return
    }
    if (resultString.length > 6) {
      node.classList.add('dot_size_xs')
    }
  }
}

const formatNumber = result => {
  if (result > 999999999 || result < -999999999){
    const numResult = Number(result);
    return  numResult.toExponential()
  }
  const parts = result.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

const renderResult = result => {
  const node = document.querySelector('.basic')
  const countZero = result.split('0')
  if (result.includes('e')) {
    result = (((Number(result).toPrecision(2)).toString()).replace(/\+/g, '')).replace(/\.0/g, '');
  }
  if (firstValue.length > 10 && countZero.length <= 3 && !result.includes('e')) {
    result = parseFloat(result).toFixed(1)
  }
  node.textContent = result
  addFontStyles(result, node)
}

const ac = () => {
  firstValue = '0'
  secondValue = ''
  action = ''
  renderResult(firstValue)
}
const plus = () => {
  firstValue = (Number(firstValue) + Number(secondValue)).toString()
  const formattedValue = formatNumber(firstValue)
  renderResult(formattedValue)
}
const minus = () => {
  firstValue = (Number(firstValue) - Number(secondValue)).toString()
  const formattedValue = formatNumber(firstValue)
  renderResult(formattedValue)
}
const multiply = () => {
  firstValue = (Number(firstValue) * Number(secondValue)).toString()
  const formattedValue = formatNumber(firstValue)
  renderResult(formattedValue)
}
const division = () => {
  if (firstValue === '0' && secondValue === '0'){
    renderResult('Error')
    return;
  }
  if (firstValue === '0' && secondValue === '') {
    renderResult('Error')
    return
  }
  if (secondValue === '') {
    firstValue = (Number(firstValue) / Number(firstValue)).toString()
    const formattedValue = formatNumber(firstValue)
    renderResult(formattedValue)
    return
  }
  if (secondValue === '0') {
    renderResult('Error')
    return
  }
  firstValue = (Number(firstValue) / Number(secondValue)).toString()
  const formattedValue = formatNumber(firstValue)
  renderResult(formattedValue)
}
const percent = () => {
  if (secondValue === '0') {
    return
  }
  if (activeVariable === '2') {
    secondValue = (secondValue / 100).toString()
    const formattedValue = formatNumber(secondValue)
    renderResult(formattedValue)
    return
  }
  if (firstValue === '0') {
    return
  }
  if (activeVariable === '1') {
    firstValue = (firstValue / 100).toString()
    const formattedValue = formatNumber(firstValue)
    renderResult(formattedValue)
  }
}
const plusMinus = () => {
  const valuesAfterDotRegex = /\.\D*$/
  if (activeVariable === '1') {
    if (firstValue === '0') {
      firstValue = '-0'
      const formattedValue = formatNumber(firstValue)
      renderResult(formattedValue)
      return
    }
    if (firstValue === '-0') {
      firstValue = '0'
      const formattedValue = formatNumber(firstValue)
      renderResult(formattedValue)
      return
    }
    if (valuesAfterDotRegex.test(firstValue)) {
      firstValue = -firstValue + '.'
      const formattedValue = formatNumber(firstValue)
      renderResult(formattedValue)
      return
    }
    firstValue = (-firstValue).toString()
    const formattedValue = formatNumber(firstValue)
    renderResult(formattedValue)
    return
  }
  if (secondValue === '0') {
    secondValue = '-0'
    const formattedValue = formatNumber(secondValue)
    renderResult(formattedValue)
    return
  }
  if (secondValue === '-0') {
    secondValue = '0'
    const formattedValue = formatNumber(secondValue)
    renderResult(formattedValue)
    return
  }
  if (valuesAfterDotRegex.test(secondValue)) {
    secondValue = -secondValue + '.'
    const formattedValue = formatNumber(secondValue)
    renderResult(formattedValue)
    return
  }
  secondValue = (-secondValue).toString()
  const formattedValue = formatNumber(secondValue)
  renderResult(formattedValue)
}

document.querySelector('.ac').onclick = () => {
  ac()
}
document.querySelector('.plus-minus').onclick = () => {
  plusMinus()
}
document.querySelector('.percent').onclick = () => {
  percent()
}
document.querySelector('.plus').onclick = () => {
  action = '+'
  secondValue = ''
  activeVariable = '2'
}
document.querySelector('.minus').onclick = () => {
  action = '-'
  secondValue = ''
  activeVariable = '2'
}
document.querySelector('.division').onclick = () => {
  action = '/'
  secondValue = ''
  activeVariable = '2'
}
document.querySelector('.multiply').onclick = () => {
  action = '*'
  secondValue = ''
  activeVariable = '2'
}

document.querySelector('.equal').onclick = (result) => {
  activeVariable = '1'
  if (action === '+') {
    plus()
  }
  if (action === '-') {
    minus()
  }
  if (action === '*') {
    multiply()
  }
  if (action === '/') {
    division()
  }
}

const isWithinLimit = result => {
  return result.replace(/[\.-]/g, '').length < 9
}

document.querySelector('.calculator').onclick = event => {
  const nextValue = event.target.textContent
  if (
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(
      nextValue
    )
  ) {
    if (document.querySelector('.basic').textContent === 'Error') {
      ac()
    }
    if (document.querySelector('.basic').textContent === 'NaN') {
      ac()
    }
    if (document.querySelector('.basic').textContent === 'Infinity') {
      ac()
    }
    if (Boolean(firstValue) && Boolean(action)) {
      if (
        Boolean(secondValue) &&
        secondValue.includes('.') &&
        nextValue === '.'
      ) {
        return
      }

      if (nextValue === '.' && !secondValue.includes('.')) {
        if (!isWithinLimit(secondValue)) {
          return
        }
        if (secondValue === '') {
          secondValue = `${'0' + secondValue}`
          return
        }
        secondValue = `${secondValue}.`
        const formattedValue = formatNumber(secondValue)
        renderResult(formattedValue)
        return
      }
      if (
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(nextValue)
        && activeVariable === '2') {
        if (!isWithinLimit(secondValue)) {
          return
        }
        if (secondValue === '0') {
          secondValue = nextValue
          const formattedValue = formatNumber(secondValue)
          renderResult(formattedValue)
          return
        }
        if (secondValue === '-0') {
          secondValue = (-nextValue).toString()
          const formattedValue = formatNumber(secondValue)
          renderResult(formattedValue)
          return
        }
        secondValue = `${secondValue}${nextValue}`
        const formattedValue = formatNumber(secondValue)
        renderResult(formattedValue)
        return
      }
    }

    if (nextValue === '.' && !firstValue.includes('.')) {
      if (!isWithinLimit(firstValue)) {
        return
      }
      firstValue = `${firstValue}.`
      const formattedValue = formatNumber(firstValue)
      renderResult(formattedValue) + '.'
      return
    }
    if (
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(nextValue)
    ) {
      secondValue = ''
      if (!isWithinLimit(firstValue)) {
        return
      }
      if (firstValue === '0') {
        firstValue = nextValue
        const formattedValue = formatNumber(firstValue)
        renderResult(formattedValue)
        return
      }
      if (firstValue === '-0') {
        firstValue = (-nextValue).toString()
        const formattedValue = formatNumber(firstValue)
        renderResult(formattedValue)
        return
      }
      firstValue = `${firstValue}${nextValue}`
      const formattedValue = formatNumber(firstValue)
      renderResult(formattedValue)
    }
  }
}

document.addEventListener('keydown', function(event) {
  const zeroButtonKeyboard = document.getElementById('zeroBtn')
  if(event.key === '0'){
    zeroButtonKeyboard.click()
  }
  const nineButtonKeyboard = document.getElementById('nineBtn')
  if(event.key === '9'){
    nineButtonKeyboard.click()
  }
  const eightButtonKeyboard = document.getElementById('eightBtn')
  if(event.key === '8'){
    eightButtonKeyboard.click()
  }
  const sevenButtonKeyboard = document.getElementById('sevenBtn')
  if(event.key === '7'){
    sevenButtonKeyboard.click()
  }
  const sixButtonKeyboard = document.getElementById('sixBtn')
  if(event.key === '6'){
    sixButtonKeyboard.click()
  }
  const fiveButtonKeyboard = document.getElementById('fiveBtn')
  if(event.key === '5'){
    fiveButtonKeyboard.click()
  }
  const fourButtonKeyboard = document.getElementById('fourBtn')
  if(event.key === '4'){
    fourButtonKeyboard.click()
  }
  const threeButtonKeyboard = document.getElementById('threeBtn')
  if(event.key === '3'){
    threeButtonKeyboard.click()
  }
  const twoButtonKeyboard = document.getElementById('twoBtn')
  if(event.key === '2'){
    twoButtonKeyboard.click()
  }
  const oneButtonKeyboard = document.getElementById('oneBtn')
  if(event.key === '1'){
    oneButtonKeyboard.click()
  }

  const allClearButton = document.getElementById('allClearBtn')
  if(event.key === 'c'){
    allClearButton.click()
  }
  const equalButton = document.getElementById('equalBtn')
  if(event.key === '=' || event.key === 'Enter'){
    equalButton.click()
  }
  const plusButton = document.getElementById('plusBtn')
  if(event.key === '+' || event.key === 'p' || event.key === 'P'){
    plusButton.click()
  }
  const minusButton = document.getElementById('minusBtn')
  if(event.key === '-' || event.key === 'm' || event.key === 'M'){
    minusButton.click()
  }
  const multiplyButton = document.getElementById('multiplyBtn')
  if(event.key === '*' || event.key === 'x' || event.key === 'X'){
    multiplyButton.click()
  }
  const divisionButton = document.getElementById('divisionBtn')
  if(event.key === '/' || event.key === ':'){
    divisionButton.click()
  }
  const percentButton = document.getElementById('percentBtn')
  if(event.key === '%'){
    percentButton.click()
  }
  const dotButton = document.getElementById('dotBtn')
  if(event.key === '.'){
    dotButton.click()
  }
  const plusMinusButton = document.getElementById('plusMinusBtn')
  if(event.key === 's' || event.key === 'S'){
    plusMinusButton.click()
  }

  if (event.key === 'Backspace') {
    backspace()
  }
})

const backspace = () => {
  if (secondValue !== '' && activeVariable === '1'){
    activeVariable = '1'
    firstValue = '0'
    secondValue = '';
    renderResult(firstValue)
    return
  }
  if (firstValue === '0' || secondValue === '0'){
    return
  }
  if (secondValue.length < 2 && activeVariable === '2'){
    secondValue = '0';
    renderResult(secondValue)
    return
  }
  if (firstValue.length < 2){
    firstValue = '0';
    renderResult(firstValue)
    return
  }
  if (activeVariable === '2') {
    secondValue = secondValue.slice(0, -1);
    const formattedValue = formatNumber(secondValue);
    renderResult(formattedValue);
    return
  }
  firstValue = firstValue.slice(0, -1);
  const formattedValue = formatNumber(firstValue);
  renderResult(formattedValue);
};
