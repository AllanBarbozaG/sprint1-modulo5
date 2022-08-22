export function checkName(name) {
  return name == null || name == undefined ?
    false :
    name.length >= 2 ?
      true :
      false
}

export function checkEmail(email) {
  const validationRegex = /\S+@\S+\.\S+/;
  return validationRegex.test(email)
}

export function checkCpf(cpf) {
  let soma = 0;
  let rest;
  
  if (cpf == '00000000000') return false;
  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (soma * 10) % 11;
  } 

  if ((rest == 10) || (rest == 11)) resto = 0;
  if (rest != parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  rest = (soma * 10) % 11;

  if ((rest == 10) || (rest == 11)) rest = 0;
  if (rest != parseInt(cpf.substring(10, 11))) return false;
  return true;
}