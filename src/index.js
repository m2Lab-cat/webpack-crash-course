'use strict';
import _ from 'lodash';
import Tiger  from './utilities';
// import { NAME as NAME_OF_HAM }  from './utilities';
// import * as utilities from './utilities';
// import { NAME, Nijou } from './utilities';

// console.log(utilities.Nijou(3));
// console.log(NAME_OF_HAM);
console.log(Tiger.say());

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());