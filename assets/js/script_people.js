function effectuerCalculs() {
    // Fonction pour récupérer et convertir les valeurs des entrées en nombres
    function recupererValeur(id) {
        return Number(document.getElementById(id).value);
    }

    // Récupération des valeurs avec une boucle
    let data = [];
    for (let i = 1; i <= 13; i++) {
        data[i] = recupererValeur(`data${i}`);
    }

    // Calculs
    let resultat1 = data[3] / data[1];
    let resultat5 = data[10] / (1 + (data[11] / 100));
    // resultat8 est identique à resultat5, cette ligne pourrait être omise et remplacée par l'utilisation de resultat5
    let resultat8 = resultat5;
    let resultat3 = data[3] * (data[4] / 100);
    let resultat2 = data[1] * (data[4] / 100) * resultat5;
    let resultat4 = resultat2 - data[2];
    let resultat6 = resultat2 - data[2] - resultat3;
    let resultat7 = (resultat6 / resultat2) * 100;
    let resultat9 = data[2] / (resultat8 - resultat1);
    let resultat10 = (resultat9 / data[1]) * 100;
    let resultat11 = resultat2 - resultat3 - data[2];
    let resultat12 = resultat11 + data[5];
    let resultat13 = data[9] - (resultat12 / (data[6] * data[7] * data[8]));

    // Afficher les résultats
    document.getElementById('resultat1').innerText = 'Unitary Variable Cost :' + resultat1.toFixed(2) +' $';
    document.getElementById('resultat2').innerText = 'Turn over (CA):' + resultat2.toFixed(2) + ' $';
    document.getElementById('resultat3').innerText = 'Real Variable Cost (Production setting):' + resultat3.toFixed(2) + ' $';
    document.getElementById('resultat4').innerText = 'Turn over - Fixed Cost:' + resultat4.toFixed(2) + ' $';
    document.getElementById('resultat5').innerText = 'Price (HT):' + resultat5.toFixed(2) + ' $';
    document.getElementById('resultat6').innerText = 'Result:' + resultat6.toFixed(2) + ' $';
    document.getElementById('resultat7').innerText = 'Result (%):' + resultat7.toFixed(2) + ' %';
    document.getElementById('resultat8').innerText = 'Selling Prices Without Tax To Consumer (PVC HT):' + resultat8.toFixed(2) + ' $';
    document.getElementById('resultat9').innerText = 'Number article (seuil de renta):' + resultat9.toFixed(2) + ' $';
    document.getElementById('resultat10').innerText = 'Number article (seuil de renta) (%):' + resultat10.toFixed(2) + ' %';
    document.getElementById('resultat11').innerText = '∆ Total Salary Cost:' + resultat11.toFixed(2) + ' $';
    document.getElementById('resultat12').innerText = 'Result salary expense:' + resultat12.toFixed(2) + ' $';
    document.getElementById('resultat13').innerText = 'Reduction of people (fire):' + resultat13.toFixed(2);
}