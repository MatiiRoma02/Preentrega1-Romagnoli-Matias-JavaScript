// Variables
let tipoCorteSeleccionado = '';
let costoTotal = 0;
let horaTurno = '';

// Condicional
function seleccionarTipoCorte(opcion) {
  switch (opcion) {
    case '1':
      tipoCorteSeleccionado = 'Corte degradado';
      costoTotal = 1000;
      break;
    case '2':
      tipoCorteSeleccionado = 'Corte + Barba';
      costoTotal = 1200;
      break;
    case '3':
      tipoCorteSeleccionado = 'Coloración o Mechas';
      costoTotal = 1500;
      break;
    default:
      console.log('Opción inválida');
      break;
  }
}

// Descuento
function aplicarDescuento(codigo) {
  if (codigo === 'BARBER10') {
    const descuento = costoTotal * 0.10;
    costoTotal -= descuento;
    console.log('Descuento aplicado correctamente');
    alert('Descuento aplicado correctamente')
  } else {
    console.log('Código de descuento aplicado incorrectamente o ya venció');
    alert('Código de descuento aplicado incorrectamente o ya venció')
  }
}

// Seleccionar la hora del turno
function seleccionarHoraTurno(opcion) {
  switch (opcion) {
    case '1':
      horaTurno = '16:00hs';
      break;
    case '2':
      horaTurno = '17:00hs';
      break;
    case '3':
      horaTurno = '18:00hs';
      break;
    case '4':
      horaTurno = '19:00hs';
      break;
    case '5':
      horaTurno = '20:00hs';
      break;
    default:
      console.log('Opción inválida');
      break;
  }
}

//
const opcionSeleccionada = prompt('Selecciona el de corte que te queres hacer:\n\n1. Corte degradado\n2. Corte + Barba\n3. Coloración o Mechas');
seleccionarTipoCorte(opcionSeleccionada);
console.log('Corte seleccionado: ' + tipoCorteSeleccionado);
alert('Corte seleccionado: ' + tipoCorteSeleccionado);
console.log('Costo total: ' + costoTotal);
alert('Costo total: ' + costoTotal);

const codigoDescuento = prompt('Ingresa el código de descuento (BARBER10 Para un 10% de DTO):');
console.log('Código de descuento: ' + codigoDescuento);
aplicarDescuento(codigoDescuento);
console.log('Costo total con descuento: ' + costoTotal);
alert('Costo total con descuento: ' + costoTotal);

const opcionHoraTurno = prompt('Selecciona la hs de tu turno:\n\n1. 16hs\n2. 17hs\n3. 18hs\n4. 19hs\n5. 20hs');
seleccionarHoraTurno(opcionHoraTurno);
console.log('Te estaremos esperando, no faltes a tu turno de las: ' + horaTurno);
alert('Te estaremos esperando, no faltes a tu turno de las: ' + horaTurno);
