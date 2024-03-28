const severity = (severityLevel) => {
  if (severityLevel === 'error') {
    return 2;
  }

  if (severityLevel === 'warn') {
    return 1;
  }

  if (severityLevel === 'off') {
    return 0;
  }

  if (severityLevel === 2) {
    return 'error';
  }

  if (severityLevel === 1) {
    return 'warn';
  }

  if (severityLevel === 0) {
    return 'off';
  }
};

// если конфиг вашего плагина не поддерживает severity levels: 'error', 'warn' and 'off',
// а только 0, 1, 2 то тогда можете воспользоваться этим плагином, severity('error'), он вернет 2
// таким образом вам юудет легче читать код а конфигу будет возвращаться правильное значение
// также и на оборот, если ваш конфиг не поддерживает нумерацию тогда напишите так severity(2) вернет 'error'

export { severity };
