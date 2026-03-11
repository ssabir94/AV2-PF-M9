const formulari = document.getElementById("formulariContacte");

if (formulari) {

    formulari.addEventListener("submit", function (e) {

        e.preventDefault();

        let nom = document.getElementById("nom").value.trim();
        let correu = document.getElementById("correu").value.trim();
        let assumpte = document.getElementById("assumpte").value.trim();
        let missatge = document.getElementById("missatge").value.trim();

        if (nom === "" || correu === "" || assumpte === "" || missatge === "") {

            Swal.fire({
                icon: "warning",
                title: "Falten dades",
                text: "Si us plau, omple tots els camps abans d'enviar el formulari.",
                confirmButtonText: "Entesos"
            });

            return;
        }

        const patroCorreu = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Ho poso per validar que el correu tingui un format adecuat. 

        if (!patroCorreu.test(correu)) {

            Swal.fire({
                icon: "error",
                title: "Correu no vàlid",
                text: "Introdueix una adreça de correu correcta.",
                confirmButtonText: "Tornar"
            });

            return;
        }

        Swal.fire({
            icon: "success",
            title: "Missatge enviat!",
            text: "Gràcies " + nom + ", he rebut el teu missatge correctament.",
            confirmButtonText: "Perfecte"
        });

        formulari.reset();

    });

}