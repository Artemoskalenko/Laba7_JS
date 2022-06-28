let choise = prompt('Выберите номер задания(1-3)');
choise = parseInt(choise);
if (choise === 1) {

  function check(num) {
    if (isNaN(num) === false) {
      if (num % 2 == 0) {
        alert('Число четное')
      }
      else {
        alert('Число нечетное')
      }
    }
    else {
      alert('Вводимые данные должны быть числом')
    }
  }
  num = prompt("Введите число для проверки")
  check(num)
}

else if (choise === 2) {
  let masiv = [];
  let sch = 0;
  let flag = true;
  let sum = 0;
  function simple() {
    for (let b = 2; b < 20; b++) {
      for (let i = 2; i < b; i++) {
        if (b % i == 0) {
          flag = false;
          break;
        }
        else {
          flag = true;
        }
      }

      if (flag == true) {
        masiv.push(b);
        sch++;
      }
      if (sch === 5) {
        break;
      }

    }
    alert(masiv);
    for (let z = 0; z < 5; z++) {
      sum += masiv[z];
    }
  }
  simple();
  alert(sum);
}

else if (choise === 3) {
  let num = prompt('Введите число');
  function easy(num) {
    let res = 0;
    let unit = '0';
    let number;
    for (let y = 0; y < num; y++) {
      unit = unit + "1";
      number = parseInt(unit);
      res = res + number;
    }
    alert(res)
  }
  easy(num);
}
