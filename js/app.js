
let dataBip = null;

window.loadData = () => {
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=666`) 
    .then(response => response.json())
    .then(data => {
        dataBip = data;
        console.log(data);
    });
 
    //function();
};  

const validate = () => {//validation of user data in imput, this function must be called by the button "Iniciar Sesion" 
    const password = () => {//imput type number
        if(password.length > 8){
            //little mesage in red after button "iniciar sesión", css
        }
    };
    
    
    const introduceUser = (name, mail) => {
        if (mail && name) {
    
        }
    };
//function(nextScreen)s
};

