function upper(strings, ...values) {
  var str = '';
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      str += String(values[i - 1]).toUpperCase();
    }
    str += strings[i];
  }
  return str;
}

// **********************

function upper(strings, ...values) {
  var str = '';
  strings.forEach(function Interpolate(string, i) {
    if (i > 0) {
      str += String(values[i - 1]).toUpperCase();
    }
    str += string;
  });
  return str;
}

// **********************

var name = 'kyle',
  twitter = 'getify',
  topic = 'JS Recent Parts';

console.log(
  upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
    'Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!'
);
