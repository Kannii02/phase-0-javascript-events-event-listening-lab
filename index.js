function addingEventListener() {
  const input = document.getElementById('button'); // Select the element
  input.addEventListener('click', function () {
    alert('I was clicked!');
  });
}

export { addingEventListener };
