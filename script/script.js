function enviar() {
  let name = document.getElementById("name").value
  let phone = document.getElementById("phone").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let company = document.getElementById("company").value
  let cnpj = document.getElementById("cnpj").value

  if (name != '' && phone != '' && email != '' && password != '' && company != '' && cnpj != '') {
    alert("Seu dados foram enviados com sucesso!")
  } else {
    alert("Insira todos os campos corretamente.")
  }
}

// function mostrar() {
//   let name = document.getElementById("name").value;
//   let phone = document.getElementById("phone").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   let company = document.getElementById("company").value;
//   let cnpj = document.getElementById("cnpj").value;
//   let funcao = document.getElementById("empresa-faz").value;

//   console.log(`${name}, ${phone}, ${email}, ${password}, ${company}, ${cnpj}, ${funcao}`);
// }