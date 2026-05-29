var turno = 'x.png';
var griglia = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function controllo() {
    var combinazioni = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
     for(combinazione of combinazioni) {
        let somma = 0;
        for(cella of combinazione) {
            somma += griglia[cella];
        };
        if (somma == 3) {
            return 'x';
        }
        else {
            if (somma == 30) {
                return 'o'
            }
        }
    };
    return '';
}

function mossa(id) {
    if (griglia[id] == 0) {
        var cella = document.getElementById(id);
        cella.src = turno;
        if (turno == 'x.png') {
            griglia[id] = 1;
            turno = 'o.png';
        }
        else {
            turno = 'x.png'
            griglia[id] = 10;
        }
        let vincitore = controllo();
        setTimeout(() => {
            if (vincitore != '') {
                alert('Partita terminata, ha vinto: ' + vincitore);
            }
        }, 200);
    }
}