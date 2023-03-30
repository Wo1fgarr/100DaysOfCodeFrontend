import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './viewes/form';

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

// Even
form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
})

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

// Hendlers
function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    if(!isValidInput) {
      showInputError(el);
    } 
    return isValidInput;
  });

  console.log(isValidForm);
}