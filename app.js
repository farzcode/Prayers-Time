function succes(position){
    console.log(position);
}

function error(){
    alert('posisi tidak dapat diakses');
}

function userLocation(){
    if(!navigator.geolocation){
        alert('Geolocation tidak didukung didalam browser anda, silahkan gunakan browser lain');
    }else{
        navigator.geolocation.getCurrentPosition(succes, error);
    }
}

function index() {
    let app             = document.getElementById('app');
    let h3              = document.createElement('h3');
    h3.innerHTML        = 'Prayer Times';

    app.appendChild(h3);

    userLocation();
}

index();