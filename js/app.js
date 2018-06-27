
let dataBip = null;

fetch(`http://www.psep.cl/api/Bip.php?&numberBip=666`)
    .then(response => response.json())
    .then(data => {
        dataBip = data;
        console.log(data);
    });

//function();


const validate = () => {//validation of user data in imput, this function must be called by the button "Iniciar Sesion" 
    if (password <= 8 && mail) {
        //function(nextScreen);
    }
};

