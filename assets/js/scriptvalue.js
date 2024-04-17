document.addEventListener('DOMContentLoaded', (event) => {
    function convertirEnNombre(input) {
        return Number(input.replace(',', '.'));
    }

    function lireValeur(id) {
        const element = document.getElementById(id);
        if (!element) {
            afficherErreur(`L'élément avec l'ID ${id} est introuvable.`);
            return null;
        }
        return convertirEnNombre(element.value);
    }

    function afficherErreur(message) {
        const containerErreur = document.getElementById('erreur');
        containerErreur.innerText = message;
        containerErreur.style.display = 'block'; // Assurez-vous que cet élément est correctement stylisé dans CSS
    }

    function cacherErreur() {
        const containerErreur = document.getElementById('erreur');
        containerErreur.style.display = 'none';
    }

    function calculerValeurs(data) {
        let FCFac = data['data3'] * (data['data5'] / 100);
        let FCFn = FCFac;
        let WACC = data['data7'] / 100;
        let g = data['data6'] / 100;
        let VPN = 0;

        for (let t = 1; t <= data['data8']; t++) {
            VPN += FCFn / Math.pow(1 + WACC, t);
            FCFn *= (1 + g);
        }

        let g_perpetual = g - 0.01;
        if (WACC <= g_perpetual) {
            afficherErreur("Le taux de croissance perpétuel doit être inférieur au WACC.");
            return null;
        }
        let valeurResiduelle = FCFn * (1 + g_perpetual) / (WACC - g_perpetual);
        VPN += valeurResiduelle / Math.pow(1 + WACC, data['data8']);

        return {
            FCFac: FCFac,
            valeurResiduelle: valeurResiduelle,
            VPN: VPN,
            nombreActions: data['data4'],
            detteNette: data['data9']
        };
    }

    function effectuerCalculs() {
        cacherErreur();
        let data = {};
        let ids = ['data3', 'data4', 'data5', 'data6', 'data7', 'data8', 'data9'];
        for (let id of ids) {
            let valeur = lireValeur(id);
            if (valeur === null) return; // Arrête l'exécution si une erreur est trouvée
            data[id] = valeur;
        }

        let resultats = calculerValeurs(data);
        if (!resultats) return; // Si une erreur de calcul survient

        let valeurEquite = resultats.VPN - resultats.detteNette;
        let valeurParAction = valeurEquite / resultats.nombreActions;

        document.getElementById('resultat1').innerText = `Flux de trésorerie libre (FCF) actuel: ${resultats.FCFac.toFixed(2)} $`;
        document.getElementById('resultat2').innerText = `Valeur résiduelle: ${resultats.valeurResiduelle.toFixed(2)} $`;
        document.getElementById('resultat3').innerText = `Valeur présente nette (VPN): ${resultats.VPN.toFixed(2)} $`;
        document.getElementById('resultat4').innerText = `Valeur de l'équité: ${valeurEquite.toFixed(2)} $`;
        document.getElementById('resultat5').innerText = `Valeur par action: ${valeurParAction.toFixed(2)} $`;
    }

    document.querySelector('button').addEventListener('click', effectuerCalculs);
});
