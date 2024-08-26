const { exec } = require('child_process');

// Команда для запуска Python-файла
const command = 'python3 main.py';

// Запуск команды
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Ошибка выполнения: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Ошибка стандартного потока: ${stderr}`);
    return;
  }
  // Вывод результата выполнения Python-файла
  console.log(`Вывод: ${stdout}`);
});
