window.loadData = (numberBip, loadComplete) => {
    let dataBip = null;

    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberBip}`)
        .then(response => response.json())
        .then(dataBip => {
            loadComplete(dataBip);
        });
}