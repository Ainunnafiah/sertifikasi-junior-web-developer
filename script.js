// Fungsi untuk melakukan sorting data menggunakan Bubble Sort
function sortData() {
    var nilai1 = parseInt(document.getElementById("nilai-1").value);
    var nilai2 = parseInt(document.getElementById("nilai-2").value);
    var nilai3 = parseInt(document.getElementById("nilai-3").value);
    var nilai4 = parseInt(document.getElementById("nilai-4").value);

    getnilai = [nilai1, nilai2, nilai3, nilai4];
    
    var len = getnilai.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
        if (getnilai[j] > getnilai[j + 1]) {
            var temp = getnilai[j];
            getnilai[j] = getnilai[j + 1];
            getnilai[j + 1] = temp;
            }
        }
    }

    // Panggil nilai yg sudah di sort
    document.getElementById("hasil").value = getnilai.join(', ');
}

//Fungsi untuk export File PDF
function exportPDF(){
    const dt = document.getElementById("hasil").value;
    html2pdf().from(dt).save();
}