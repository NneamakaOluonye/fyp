const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const one_word = (value) => value.split(" ").length === 1;
export const equal_to = (value1, value2) => value1 === value2;
export const only_numbers = (value) => /^\d+$/.test(value);
export const card_exp_validator = (value) =>
  value.length === 5 &&
  value.charAt(2) === "/" &&
  /^\d+$/.test(value.substring(0, 2)) &&
  /^\d+$/.test(value.substring(3));
export const email_or_phone = (value) =>
  validateEmail(value) || isValidPhoneNumber(value, "US");
