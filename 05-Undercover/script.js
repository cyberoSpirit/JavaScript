'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    if (birthYear > 1999) {
      var isMillenial = true;
    }
    const output = `${firstName} ou are ${age}, born in ${birthYear}`;
    console.log(isMillenial); //work - undefined
    console.log(output);
  }
  printAge();
  //console.log(isMillenial); //doesn't work
  return age;
}

const firstName = 'Julia';
calcAge(1998);
//console.log(isMillenial); //doesn't work
