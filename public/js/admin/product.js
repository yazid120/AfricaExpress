document.addEventListener('DOMContentLoaded', function() {
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('modal');

  openModalBtn.addEventListener('click', function() {
      modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });

  // Form Submission
  const addProductForm = document.getElementById('addProductForm');
  addProductForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      // Retrieve form values
      const productName = document.getElementById('productName').value;
      const brandName = document.getElementById('brandName').value;
      const priceUnit = document.getElementById('priceUnit').value;
      const productImage = document.getElementById('productImage').value;
      const quantityAvailable = document.getElementById('quantityAvailable').value;
      const productDescription = document.getElementById('productDescription').value;

      // Perform actions to add the product (e.g., send data to server)
      const formData = new FormData();
      formData.append('productName', productName);
      formData.append('brandId', brandName);
      formData.append('priceUnit', priceUnit);
      formData.append('productImage', productImage);
      formData.append('quantityAvailable', quantityAvailable);
      formData.append('productDescription', productDescription);
      console.log(formData);

      fetch('http://localhost:8000/products/add', {
        method: 'POST',
        body: formData // Send form data as the body of the request
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the server returns JSON data
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });

      // Close the modal after adding the product
      modal.style.display = 'none';

      // Reset the form
      addProductForm.reset();
  });
});
