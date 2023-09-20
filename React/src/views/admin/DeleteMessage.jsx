import React from 'react';

const DeleteConfirmation = ({ onCancel, onConfirm }) => {
  return (
    <div className="delete-confirmation">
      <p>Are you sure you want to delete this item?</p>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Delete</button>
    </div>
  );
};

export default DeleteConfirmation;