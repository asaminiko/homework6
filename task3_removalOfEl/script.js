try {
  let array = check(prompt('Введи елемент масиву через пробіл')).split(' ')
  let el = check(prompt('Введи елементи масиву через пробіл, щоб видалити їх'))
  console.log(`Масив: ${array}`)
  console.log(`Видалення: ${el}`)
  array = removeElement(array, el)
  console.log(`Результат: ${array}`)
} catch (error) {
  console.error(`Помилка, ${error}`)
} finally {
  console.log('Перевірено')
}
//видалення елементів з масиву
function removeElement(array, item) {
  array = array.filter((i) => !item.includes(i))
  return array
}
//перевірка введення
function check(y) {
  if (y === undefined || y === null) throw new TypeError('Невірний тип даних.') //перевірка на undefined, null
  if (typeof y === 'string' && y.trim() === '') {
    throw new TypeError('Пуста строка.') //перевірка на пусту строку
  }

  return y
}
