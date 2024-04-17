function effectuerCalculs() {

    // Fonction pour convertir l'entrée en nombre après avoir remplacé la virgule par un point.
    function convertirEnNombre(input) {
        return Number(input.replace(',', '.'));
    }

    // Utiliser une boucle pour récupérer les valeurs et les convertir.
    let data = {};
    for (let i = 1; i <= 14; i++) {
        data[i] = convertirEnNombre(document.getElementById(`data${i}`).value);
    }

    // Calculs simplifiés
    let dat11 = data[11] / 100;
    let resultat1 = data[3] / data[1];
    let resultat3 = data[3] * (data[4] / 100);
    let resultat14 = (data[2] + resultat3) / (1 - (data[14] / 100));
    let resultat15 = ((resultat14 * (1 + dat11)) / data[1]) / (data[4] / 100);

    // Calculs dépendants de resultat15
    let resultat2 = data[1] * (data[4] / 100) * resultat15;
    let resultat4 = resultat2 - data[2];
    // resultat5 est identique à resultat15
    let resultat6 = resultat2 - data[2] - resultat3;
    let resultat7 = (resultat6 / resultat2) * 100;
    // resultat8 est identique à resultat5
    let resultat11 = resultat2 - resultat3 - data[2];
    let resultat12 = parseFloat(resultat11) + data[5];

    // Créer une fonction pour mettre à jour les résultats
    function afficherResultat(elementId, label, valeur) {
        document.getElementById(elementId).innerText = `${label}: ${valeur.toFixed(2)} $`;
    }

    // Afficher les résultats
    afficherResultat('resultat1', 'Unitary Variable Cost', resultat1);
    afficherResultat('resultat2', 'Turn over (CA)', resultat2);
    afficherResultat('resultat3', 'Real Variable Cost (Production setting)', resultat3);
    afficherResultat('resultat4', 'Turn over - Fixed Cost', resultat4);
    afficherResultat('resultat5', 'Price (HT)', resultat15); // Utilise resultat15 directement
    afficherResultat('resultat6', 'Result', resultat6);
    document.getElementById('resultat7').innerText = 'Result (%): ' + resultat7.toFixed(2) + ' %';
    afficherResultat('resultat8', 'Selling Prices Without Tax To Consumer (PVC HT)', resultat15); // Utilise resultat15 directement
    afficherResultat('resultat11', '∆ Total Salary Cost', resultat11);
    afficherResultat('resultat12', 'Result salary expense', resultat12);
    afficherResultat('resultat14', 'Targeted Op. Turn Over (CA)', resultat14);
    afficherResultat('resultat15', 'Prix nécessaire', resultat15);
}
