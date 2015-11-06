$(document).ready(function () {

    function refresh() {
        var gl = $('input[name=gl]:checked').val();
        var el = $('input[name=el]:checked').val();
        var dh = $('input[name=dh]:checked').val();

        var volume = 'voor extra volume ca. 50-75';
        var geenExt = 'met deze eigen haarlengte en de gewenste lengte GEEN';

        var t = [
            [
                [ 25, 50, 75 ],
                [ volume, volume, volume ],
                [ volume, volume, volume ],
                [ volume, volume, volume ]
            ],
            [
                [ 75, 100, 125 ],
                [ 50, 75, 100 ],
                [ volume, volume, volume ],
                [ volume, volume, volume ]
            ],
            [
                [ geenExt, geenExt, geenExt ],
                [ 125, 150, 175 ],
                [ 100, 125, 150 ],
                [ volume, volume, volume ]
            ],
            [
                [ geenExt, geenExt, geenExt ],
                [ 150, 175, 200 ],
                [ 125, 150, 175 ],
                [ 100, 125, 150 ]
            ],
            [
                [ geenExt, geenExt, geenExt ],
                [ geenExt, geenExt, geenExt ],
                [ 150, 175, 200 ],
                [ 125, 150, 175 ]
            ]
        ];

        if (dh && gl && el) {
            var results = t[gl][el][dh];
            $('p.advies-text').html('Wij adviseren ' + results + ' extensions');

            $('#firstPk').val(Math.ceil(results / 25) + ' packets');
            $('#secondPk').val(Math.ceil(results / 20) + ' packets');
            $('#thirdPk').val(Math.ceil(results / 25) + ' packets');
            $('#fourthPk').val(Math.ceil(results / 50) + ' packets');

            if (results === volume) {
                $('#firstPk').val(3 + ' packets');
                $('#secondPk').val(4 + ' packets');
                $('#thirdPk').val(3 + ' packets');
                $('#fourthPk').val(2 + ' packets');
            }

            var notAvailable = [];
            if (gl == 3) {
                notAvailable.push('#secondPk')
            }

            if (gl == 4) {
                notAvailable.push('#thirdPk', '#fourthPk');
            }

            $(notAvailable.join(",")).val('not available');

            if (results === geenExt) {
                $('#firstPk,#secondPk,#thirdPk,#fourthPk').val('');
            }

        } // end main if statement
        else {
            $('p.advies-text').html('Please select a value for all options.');
        }
    }

    $(".box-buttons > input[type=radio]").on("click", refresh);
    refresh();
});
