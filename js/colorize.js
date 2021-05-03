// пример использования  рандомных чисел(метод Math.round) для генерации разных фонов на сайте


const colors = ['LightCoral', 'Crimson', 'DarkRed', 'PaleVioletRed', 'LightSalmon','DarkSlateGray','DarkGoldenrod','IndianRed','DarkSlateBlue','LightGreen','OliveDrab','DarkSeaGreen','Peru','CadetBlue','Maroon','RosyBrown','BurlyWood'];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;