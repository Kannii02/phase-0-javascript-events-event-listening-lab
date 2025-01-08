function addingEventListener() {
  const input = document.getElementById('button');
  input.addEventListener('click', () => {
      alert('I was clicked!');
  });
}

export { addingEventListener }; // Export the function for testing
