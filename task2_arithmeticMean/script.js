try {
  let ar = check(prompt('введи значення через пробіл')).split(' ')
  console.log(ar)
  arithmetic(ar)
  let test = [null, undefined, false, 2, 3, -6, 6, 8, 'lalal']
  console.log(test)
  arithmetic(test)
} catch (error) {
  console.error(`Помилка, ${error}`) // може бути помилка
} finally {
  console.log('Перевірено') //тобто завжди перевірено
}

//знаходження середнього арифметичного
function arithmetic(array) {
  let counter = 0
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === false || array[i] === null) {
      continue
    }
    let num = Number(array[i])
    if (isNaN(num)) {
      continue
    }

    sum += num //сума
    counter++ // кількість чисел
  }
  let arith = sum / counter //середнє арифметичне

  console.log(`середнє арифметичне ${arith}`)
}

//перевірка введення
function check(y) {
  if (y === undefined || y === null) throw new TypeError('Невірний тип даних.') //перевірка на undefined, null
  if (typeof y === 'string' && y.trim() === '') {
    throw new TypeError('Пуста строка.') //перевірка на пусту строку
  }

  return y
}
