
const btn = document.getElementById("btn");
const mail = document.getElementById("mail").value;
const password = document.getElementById("password").value;

loadData(data => {
  
    loading.style.display = 'none';
    render();
  });

let render = () => {
    
};

btn.addEventListener("click", () => {
  validate(mail, password);
});