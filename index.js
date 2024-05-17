// Передаем в PHP из JS данные,
// и получаем эти данные обратно в JS

const data = {
  //отправляемые данные в формате объекта
  value1: 11,
  value2: "11.4",
};

// console.log(data.length);
let responce;
let dataFromDb;

async function getInfoFromDB() {
  try {
    responce = await fetch("main.php", {
      method: "POST", // метод отправки
      headers: {
        // заголовки
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), //отправляемые данные в формате JSON
    });

    dataFromDb = await responce.json(); //если убрать await, то получим промис
    return dataFromDb;
  } catch (error) {
    console.log(error);
  }
}

await getInfoFromDB(); // так получим данные
console.log(dataFromDb);

// getInfoFromDB(); // а так получим промис
// console.log(dataFromDb);

// console.log(await getInfoFromDB());

// видно что данные в JS и в PHP совпадают:
for (let key in data) {
  console.log(data[key]);
  console.log(dataFromDb[key]);
  if (data[key] === dataFromDb[key]) {
    console.log("OK1");
  } else {
    console.log("NO1");
  }
}

// видно что объекты ссылаются на разные данные:
if (data == dataFromDb) {
  console.log("OK2");
} else {
  console.log("NO2");
}
