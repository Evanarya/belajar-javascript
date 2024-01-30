var siswa = new Object();
siswa.namaDepan = " Evan";
siswa.namaBelakang = "Arya";
siswa.alamat = "bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
}

alert("Nama :" + siswa.namaLengkap());