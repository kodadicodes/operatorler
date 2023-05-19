let number1 = 10;
let number2 = 20;
let number3 = 30;
let result;

// ARİTMETİK OPERATÖRLER
result = number1 + number3; // Toplama
result = number1 - number3; // Çıkarma
result = number1 / number3; // Bölme
result = number1 * number3; // Çarpma
result = number1 % number1; // Modül (kalan)


// ATAMA OPERATÖRLERİ
result = number1; // Atama
result += number2; // Toplama ataması (result + number2)
result -= number2; // Çıkarma ataması (result - number2)
result /= number2; // Bölme ataması (result / number2)
result *= number2; // Çarpma ataması (result * number2)
result %= number2; // Modül ataması (result % number2)


// KARŞILAŞTIRMA OPERATÖRLERİ
result = number1 == number2; // Eşitlik
result = number1 != number2; // Eşitsizlik
result = 10 === "10"; // Katı eşitlik (değer ve tip)
result = number1 > number2; // Büyüktür
result = number1 < number2; // Küçüktür
result = number1 >= number2; // Büyük eşittir
result = number1 <= number2; // Küçük eşittir

// MANTIKSAL OPERATÖRLER
// && : ve, || : veya, ! : değil
console.log(number1 != number2 && number1 > number2); /* Her iki koşulun da doğru olması gerekir */
// Çıkış: false
console.log(number1 > number3 || number1 == number1);/*true için tek şartı sağlamaı yeterli */
// Çıkış: true