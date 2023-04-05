function onSubmit(event) {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const birthday = event.target.elements.birthday.value;
  const gender = event.target.elements.gender.value;
  const email = event.target.elements.email.value;
  const description = event.target.elements.description.value;
  const state = event.target.elements.state;
  const stateText = state.options[state.selectedIndex].value
  const city = event.target.elements.city;
  const cityText= city.options[city.selectedIndex].text


  const tableBody = document.getElementsByTagName("tbody")[0];
  const tableRow = tableBody.insertRow();
  const tableName = tableRow.insertCell();
  tableName.textContent = name;
  const tableBirthday = tableRow.insertCell();
  tableBirthday.textContent = birthday;
  const tableGender = tableRow.insertCell();
  tableGender.textContent = gender === 'male' ? "Masculino" : "Feminino";
  const tableEmail = tableRow.insertCell();
  tableEmail.textContent = email;
  const tableDescription = tableRow.insertCell();
  tableDescription.textContent = description;
  const tableState = tableRow.insertCell();
  tableState.textContent = stateText;
  const tableCity = tableRow.insertCell();
  tableCity.textContent = cityText;

  document.getElementsByTagName('form')[0].reset();
  const citySelect = document.getElementById("city");
  citySelect.innerHTML = '';
}



const form = document.getElementsByTagName("form")[0];
form.addEventListener('submit', onSubmit);
const stateInput = document.getElementById("state");
stateInput.onchange = () => {
  const state = stateInput.options[stateInput.selectedIndex].value;
  const optionPE1 = new Option("Recife", "recife");
  const optionPE2 = new Option("Cortês", "cortes");
  const optionMG1 = new Option("Contagem", "contagem");
  const optionMG2 = new Option("Betim", "betim");
  const citySelect = document.getElementById("city");
  citySelect.innerHTML = "";
  if (state === "PE") {
    citySelect.add(optionPE1, undefined);
    citySelect.add(optionPE2, undefined);
    citySelect.removeAttribute('disabled');
  } else if(state === "MG") {
    citySelect.add(optionMG1, undefined);
    citySelect.add(optionMG2, undefined);
    citySelect.removeAttribute('disabled');

  } else {
    citySelect.innerHTML = '<option value="">Selecione uma Estado</option>';
    citySelect.setAttribute('disabled', true);

  }
};
