document.addEventListener("DOMContentLoaded", function () {
  // Example: Auto-focus on the first input field when the modal opens
  $('#addClientModal').on('shown.bs.modal', function () {
      $('#name').focus();
  });
});

function openEditUserModal(userId, userName, userEmail, userType, userPhone) {
  // Set the form action URL to the specific user's update route
  const formAction = `/users/${userId}`;
  document.getElementById('editUserForm').action = formAction;

  // Populate the input fields with the user's data
  document.getElementById('editUserName').value = userName;
  document.getElementById('editUserEmail').value = userEmail;
  document.getElementById('editUserType').value = userType;
  document.getElementById('editUserPhone').value = userPhone;

  // Show the modal
  $('#editUserModal').modal('show');
}

