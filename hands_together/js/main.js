function filtrar() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("txt_consulta");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabela_vagas");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filtrarOngsIndex() {
    // Declare variables
    var input, filter, table, td, i, txtValue;
    input = document.getElementById("txt_consulta_ongs");
    filter = input.value.toUpperCase();
    table = document.getElementById("info_ongs");
    ong = table.getElementsByClassName("ongs");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < ong.length; i++) {
        td = ong[i];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                ong[i].style.display = "";
            } else {
                ong[i].style.display = "none";
            }
        }
    }
}

function filtrarOngsByState(){
    var input, filter, table, td, i, txtValue;
    input = document.getElementById("inputGroupSelectTipos");
    filter = input.value.toUpperCase();
    table = document.getElementById("info_ongs");
    ong = table.getElementsByClassName("ongs");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < ong.length; i++) {
        td = ong[i].getElementsByClassName("col-2").getElementById("localizacao");
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                ong[i].style.display = "";
            } else {
                ong[i].style.display = "none";
            }
        }
    }
}