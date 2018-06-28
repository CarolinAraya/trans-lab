window.onload = (numBip)=>{
    let dataBip = null;

    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numBip}`)
        .then(response => response.json())
        .then(data => {
            dataBip = data;
            console.log(dataBip);
        });
    
    //function();
}



const validate = () => {//validation of user data in imput, this function must be called by the button "Iniciar Sesion" 
    if (password <= 8 && mail) {
        
        nextScreen(); 
    }
};

