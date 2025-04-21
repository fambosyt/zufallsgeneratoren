function generateNumber() {
  const num = Math.floor(Math.random() * 100) + 1;
  document.getElementById('numberResult').textContent = num;
}

function generateName() {
  const names = ['Lena', 'Ben', 'Mila', 'Paul', 'Emma', 'Leo', 'Sophie', 'Jonas'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  document.getElementById('nameResult').textContent = randomName;
}

function generatePassword(length = 10) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('passwordResult').textContent = password;
}

function generateColor() {
  const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.getElementById('colorResult').textContent = hex;
  document.getElementById('colorPreview').style.backgroundColor = hex;
}
