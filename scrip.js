//khai bao
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
// click
registerBtn.addEventListener('click', () =>{ 
  container.classList.add("active");
});
loginBtn.addEventListener('click', () =>{ 
  container.classList.remove("active");
});

