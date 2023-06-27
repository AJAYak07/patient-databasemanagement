const appointmentForm = document.getElementById("appointment-form");

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;

  // Perform validation if required

  const appointmentData = {
    name: name,
    email: email,
    doctor: doctor,
    date: date,
  };

  // Perform AJAX request to book the appointment (send appointmentData to server)

  // Display success or error message to the user
});
