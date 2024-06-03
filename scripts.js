function order() {
  // Example function to handle order
  alert('You must create an account before booking.');
  window.location.href = 'register.html';
}

function checkout() {
  // Example function to handle checkout
  alert('Checking out...');
}

function register(event) {
  event.preventDefault();
  alert('Account created!');
  window.location.href = 'login.html';
}

function login(event) {
  event.preventDefault();
  alert('Logged in!');
  window.location.href = 'menu.html';

}