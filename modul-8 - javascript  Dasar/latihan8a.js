var grade = prompt('Masukkan nilaimu :');

if (grade < 39) {
  alert(' niali kamu ' + grade + ' grade E');
} else if (grade >= 40 && grade <= 65) {
  alert(' nilai kamu ' + grade + ' grade D');
} else if (grade > 65 && grade <= 74) {
  alert(' nilai kamu ' + grade + ' grade C');
} else if (grade >= 75 && grade <= 84) {
  alert(' nilai kamu ' + grade + ' grade B');
} else if (grade >= 85 && grade <= 94) {
  alert(' nilai kamu ' + grade + ' grade A');
} else {
  alert('Anda harus memasukkan angka !');
}
