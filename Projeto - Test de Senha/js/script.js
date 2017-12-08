$(function () {
    $('#senha').bind('keyup', function () {
        var pass = $(this).val();
        var forca = 0;

        if (pass.length > 10) {
            forca = forca + 25;
        }

        var box = new RegExp(/[a-z]/i);
        if (box.test(pass)) {
            forca = forca + 25;
        }

        var box = new RegExp(/[0-9]/i);
        if (box.test(pass)) {
            forca = forca + 25;
        }

        var box = new RegExp(/[^a-z0-9]/i);
        if (box.test(pass)) {
            forca = forca + 25;
        }

        if (forca == 25) {

            $('#forca').removeClass().addClass('pessima').html("Péssima");
        }
        if (forca == 50) {
            $('#forca').removeClass().addClass('ruim').html("Ruim");
        }
        if (forca == 75) {
            $('#forca').removeClass().addClass('boa').html("Aceitavel");
        }
        if (forca == 100) {
            $('#forca').removeClass().addClass('otima').html("Excelente");
        }
    });
});