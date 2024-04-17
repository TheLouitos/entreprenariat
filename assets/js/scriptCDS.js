function effectuerCalculs() {
    // Fonction pour convertir l'entrée en nombre après avoir remplacé la virgule par un point.
    function convertirEnNombre(input) {
        return Number(input.replace(',', '.'));
    }

    // Liste explicite des identifiants existants
    const idsExistants = [
        'data1', 'data2', 'data3', 'data4', 'data5', 'data6','data11', 'data12', 'data13', 'data14', 'data15', 'data16','data21', 'data22', 'data23', 'data24', 'data25', 'data26','data31', 'data32', 'data33', 'data34', 'data35', 'data36','data41', 'data42', 'data43', 'data44', 'data45', 'data46','data51', 'data52', 'data53', 'data54', 'data55', 'data56','data61', 'data62', 'data63', 'data64', 'data65', 'data66','data71', 'data72', 'data73', 'data74', 'data75', 'data76','data81', 'data82'
        // Continuez avec les identifiants réels existants jusqu'à 'data66' si nécessaire
        // Assurez-vous d'ajouter uniquement les IDs qui existent
    ];

    // Utiliser une boucle pour récupérer les valeurs et les convertir, basée sur les IDs existants
    let data = {};
    idsExistants.forEach(id => {
        const element = document.getElementById(id);
        if (element) { // Vérifie si l'élément existe réellement pour éviter les erreurs
            data[id] = convertirEnNombre(element.value);
        }
    });

// Puisque la liste `idsExistants` contrôle les identifiants traités,
// il n'y a plus besoin de vérifier l'existence de chaque identifiant dans la boucle.


    // Calculs simplifiés. Assurez-vous que les ids requis pour les calculs sont inclus dans le tableau 'ids' passé en paramètre.

    let data2 = data['data2'] / 100;
    let data12 = data['data12'] / 100;
    let data22 = data['data22'] / 100;
    let data32 = data['data32'] / 100;
    let data42 = data['data42'] / 100;
    let data52 = data['data52'] / 100;
    let data62 = data['data62'] / 100;
    let CAplace1 = (data['data1'] * data2 * data['data3'] * data['data5']) + (data['data1'] * data2 * data['data4'] * data['data6']);
    let CAplace2 = (data['data11'] * data12 * data['data13'] * data['data15']) + (data['data11'] * data12 * data['data14'] * data['data16']);
    let CAplace3 = (data['data21'] * data22 * data['data23'] * data['data25']) + (data['data21'] * data22 * data['data24'] * data['data26']);
    let CAplace4 = (data['data31'] * data32 * data['data33'] * data['data35']) + (data['data31'] * data32 * data['data34'] * data['data36']);
    let CAplace5 = (data['data41'] * data42 * data['data43'] * data['data45']) + (data['data41'] * data42 * data['data44'] * data['data46']);
    let CAplace6 = (data['data51'] * data52 * data['data53'] * data['data55']) + (data['data51'] * data52 * data['data54'] * data['data56']);
    let CAplace7 = (data['data61'] * data62 * data['data63'] * data['data65']) + (data['data61'] * data62 * data['data64'] * data['data66']);
    let CAtotTTC = (CAplace1 + CAplace2 + CAplace3 + CAplace4 + CAplace5 + CAplace6 + CAplace7)
    let CAtotHT = CAtotTTC / (1 + (data['data82']) / 100);
    let clientpeak = (data['data1'] * data2 * data['data5']) + (data['data11'] * data12 * data['data15']) + (data['data21'] * data22 * data['data25']) + (data['data31'] * data32 * data['data35']) + (data['data41'] * data42 * data['data45']) + (data['data51'] * data52 * data['data55']) + (data['data61'] * data62 * data['data65'])
    let clientoffpeak = (data['data1'] * data2 * data['data6']) + (data['data11'] * data12 * data['data16']) + (data['data21'] * data22 * data['data26']) + (data['data31'] * data32 * data['data36']) + (data['data41'] * data42 * data['data46']) + (data['data51'] * data52 * data['data56']) + (data['data61'] * data62 * data['data66'])
    let penerate = ((clientpeak + clientoffpeak) / data['data73']) * 100;
    let varcost = CAtotHT * (data['data72'] / 100);
    let opincome = CAtotHT - data['data71'] - varcost;
    let data81 = data['data81'] / 100;
    let taxIS = opincome * data81;
    let netincome = opincome - taxIS;
    let shareCDS = netincome / 2;
    let pourcentshareCDS = 100 / 2;
    let roicCDS = (shareCDS / data['data74']) * 100;
    let sharepart = netincome / 2;
    let pourcentsharepart = 100 / 2;
    let roicpart = ((sharepart + data['data76']) / data['data75']) * 100;

    // Créer une fonction pour mettre à jour les résultats
    function afficherResultat(elementId, label, valeur) {
        document.getElementById(elementId).innerText = `${label}: ${valeur.toFixed(2)}`;
    }

    // Afficher les résultats
    afficherResultat('resultat1', 'Number of clients Peak period', clientpeak);
    afficherResultat('resultat2', 'Number of clients off-Peak period', clientoffpeak);
    afficherResultat('resultat3', 'Penetration Rate', penerate);
    afficherResultat('resultat4', 'Turn-over TTC', CAtotTTC);
    afficherResultat('resultat5', 'Turn-over HT', CAtotHT);
    afficherResultat('resultat6', 'Fixed cost', data['data71']);
    afficherResultat('resultat7', 'Variable cost', varcost);
    afficherResultat('resultat8', 'Operating income (REx)', opincome);
    afficherResultat('resultat11', 'Taxes (IS)', taxIS);
    afficherResultat('resultat12', 'Net income', netincome);
    afficherResultat('resultat13', 'Share of net income of CDS', shareCDS);
    afficherResultat('resultat14', '% Share of net income of CDS', pourcentshareCDS);
    afficherResultat('resultat15', 'ROIC of CDS', roicCDS);
    afficherResultat('resultat16', 'Share of net income of partner', sharepart);
    afficherResultat('resultat17', '% Share of net income of partner', pourcentsharepart);
    afficherResultat('resultat18', 'ROIC of partner', roicpart);

}

function ajusterAffichageLignes() {
  var nombreChoisi = parseInt(document.getElementById('nombreDeLignes').value, 10);
  var lignes = document.querySelectorAll('#conteneurLignes .input-row');
  
  lignes.forEach((ligne, index) => {
    ligne.style.display = (index < nombreChoisi) ? 'flex' : 'none';
  });
}

// Ajuste l'affichage des lignes lors d'un changement de sélection
document.getElementById('nombreDeLignes').addEventListener('change', ajusterAffichageLignes);

// Appel initial pour définir l'affichage correct au chargement de la page
document.addEventListener('DOMContentLoaded', ajusterAffichageLignes);
