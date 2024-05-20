let imgbox = document.getElementsByClassName("imgbox");
let QRbox = document.getElementById("QRbox");
let url = document.getElementById("url");

function generateQR(){
    QRbox.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url.value;
}

function clearscreen(){
    url.value = "";
    QRbox.src = "";
}