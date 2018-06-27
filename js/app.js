const btn = document.querySelector("button");
const name = document.getElementById("name");
const mail = document.getElementById("mail")

fetch(`http://www.psep.cl/api/Bip.php?&numberBip=666`) //sin ; después de fech
    .then(response => response.json())
    .then(data => {
        let stateBip = data;
        console.log(data);
    })




const validar = (name, mail) => {
    if (mail && name) {

    }
};