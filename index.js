document.addEventListener("DOMContentLoaded", function () {
  const cardForm = document.getElementById("cardForm");
  const modal = document.getElementById("modal");
  const certificateContent = document.getElementById("certificateContent");
  const closeModal = document.querySelector(".close");

  // Hide the modal initially
  modal.style.display = "none";

  // Submit event listener
  cardForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // 🚨 Get input values ***added personalMessage && courseName***
    const studentNameInput = document.getElementById("studentName");
    const personalMessageInput = document.getElementById("personalMessage");
    const courseNameInput = document.getElementById("courseName");

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    // Validate fields are filled ***added courseName.trim***
    if (
      studentName.trim() === "" ||
      personalMessage.trim() === "" ||
      courseName.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    // 🚨 Generate certificate content dynamically ***added innerHTML && text***
    certificateContent.innerHTML = `
      <h2>Certificate of Achievement</h2>
      <p>This is to certify that
      <h3>${studentName}</h3>
      <p>has almost completed the</p>
      <h4>${courseName}</h4>
      <p>with legendary perseverance and world-class badd-assery fro never giving up🏆</p>
      <img src="./logo.png" alt="Codespace Logo" style="width: 300px; margin-top: 20px;">
      <p>${personalMessage}</p>
    `;

    //  Display the modal
    modal.style.display = "block";

    // Clear the form inputs
    studentNameInput.value = "";
    personalMessageInput.value = "";
    courseNameInput.value = "";
  });

  // 🚨 Close the modal when the close button is clicked ***added eventListener + fucntion***
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
