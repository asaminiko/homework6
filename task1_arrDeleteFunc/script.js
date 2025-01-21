try {
  let str = prompt('Напиши щось')
  let el = prompt('Який символ ти хотів би прибрати?')
  console.log(`Строка: ${str}`)
  console.log(`Ти хочеш видалити: ${el}`)
  str = check(str)
  el = check(el)
  removal(str, el)
} catch (error) {
  console.error(`Помилка: ${error.message}`) //може бути помилка
} finally {
  console.log('Перевірено') //тобто завжди перевірить
}

//Видалення символів
function removal(a, b) {
  let words = a.split(' ')
  b = b.split('')
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
