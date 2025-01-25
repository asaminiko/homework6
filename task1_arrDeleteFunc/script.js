try {
  let str = check(prompt('Напиши щось'))
  let el = check(
    prompt('Який символ ти хотів би прибрати? Введи через пробіл')
  ).split(' ')
  console.log(`Строка: ${str}`)
  console.log(`Ти хочеш видалити: ${el}`)

  removal(str, el)
} catch (error) {
  console.error(`Помилка: ${error}`) //може бути помилка
} finally {
  console.log('Перевірено') //тобто завжди перевірить
}

//Видалення символів
function removal(a, b) {
  let words = a.split(' ')
  filteredWords = words.map((word) => {
    let letters = word.split('')
    let filteredLetters = letters.filter((i) => !b.includes(i))
    return filteredLetters.join('')
  })
  console.log(filteredWords.join(' '))
}

//перевірка введення
function check(y) {
  if (y === undefined || y === null) throw new TypeError('Невірний тип даних.') //перевірка на undefined, null
  if (typeof y === 'string' && y.trim() === '') {
    throw new TypeError('Пуста строка.') //перевірка на пусту строку
  }

  return y
}
