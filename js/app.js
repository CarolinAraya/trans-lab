const btn = document.querySelector("button");
const name = document.getElementById("name");
const mail = document.getElementById("mail");
const password = document.getElementById("password");

const loadData = () => {
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=666`) 
    .then(response => response.json())
    .then(data => {
        let stateBip = data;
        console.log(data);
    })

}

const validate = () => {//validation of user data in imput
    const password = () => {//imput type number
        if(password.length > 8){
            //little mesage in red after button "iniciar sesión", css
        }
    };
    
    
    const introduceUser = (name, mail) => {
        if (mail && name) {
    
        }
    };
};

