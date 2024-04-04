document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    var name = document.getElementById('Nama').value.trim();
    var username = document.getElementById('Username').value.trim();
    var email = document.getElementById('Email').value.trim();
    var password = document.getElementById('Password').value.trim();
    var phone = document.getElementById('Phone').value.trim();
    var website = document.getElementById('Wesite').value.trim();
    var gender = document.querySelector('select[name="pilihan"]').value;
    
    var isValid = true;

    // Validasi Nama
    if (name === '') {
        alertMessage('Nama tidak boleh kosong');
        isValid = false;
    }

    // Validasi Username
    if (username === '') {
        alertMessage('Username tidak boleh kosong');
        isValid = false;
    }

    // Validasi Email
    if (!isValidEmail(email)) {
        alertMessage('Email tidak valid');
        isValid = false;
    }

    // Validasi Password
    if (!isValidPassword(password)) {
        alertMessage('Password harus terdiri dari minimal 7 karakter dan setidaknya satu huruf besar');
        isValid = false;
    }

    // Validasi Phone Number
    if (!isValidPhoneNumber(phone)) {
        alertMessage('Phone number harus berupa angka dan memiliki panjang 10-12 digit dan diawali dengan "08"');
        isValid = false;
    }

    if (gender === '4') {
        alertMessage('Pilih gender anda');
        isValid = false;
    }

    if (isValid) {
        alert('Form berhasil diverifikasi. Data siap untuk dikirim.');
        // Anda dapat mengganti alert dengan logika pengiriman data ke server di sini.
    }
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhoneNumber(phone) {
    var phonePattern = /^\d+$/;
    return phonePattern.test(phone);
}

function alertMessage(message) {
    alert(message);
}

function isValidPhoneNumber(phone) {
    var phonePattern = /^08\d{8,10}$/;
    return phonePattern.test(phone);
}

function isValidPassword(password) {
    // Memeriksa apakah password memiliki panjang minimal 7 karakter dan setidaknya satu huruf besar
    return password.length >= 7 && /[A-Z]/.test(password);
}