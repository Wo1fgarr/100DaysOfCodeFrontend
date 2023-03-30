const regExpDic = {
  email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
  password: /^[0-9a-zA-Z]{4,}$/,
};

/**
 * Function validate. Check Input on RegExp provided in regExpDic by input data-required type
 * @param {HTMLInputElement} el
 * @returns {Boolean} - Return true if valid or doesn't data-required attribute
 */
export function validate(el) {
  const regExpName = el.dataset.required;
  if (!regExpDic[regExpName]) return true;
  return regExpDic[regExpName].test(el.value);
}
