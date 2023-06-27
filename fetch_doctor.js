const doctorSelect = document.getElementById("doctor");

fetch("fetch_doctors.php")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((doctor) => {
      const option = document.createElement("option");
      option.value = doctor.id;
      option.textContent = doctor.name;
      doctorSelect.appendChild(option);
    });
  })
  .catch((error) => console.error(error));
