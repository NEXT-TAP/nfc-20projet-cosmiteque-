document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       DARK / LIGHT MODE
    ========================================================= */

    const themeToggle =
        document.getElementById("themeToggle");


    if (themeToggle) {

        /* =========================
           LOAD SAVED THEME
        ========================= */

        const savedTheme =
            localStorage.getItem("theme");


        if (savedTheme === "dark") {

            document.body.classList.add("dark-mode");

        }


        /* =========================
           TOGGLE CLICK
        ========================= */

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");


            const isDark =
                document.body.classList.contains("dark-mode");


            localStorage.setItem(
                "theme",
                isDark ? "dark" : "light"
            );

        });

    }


    /* =========================================================
       CHECK BUSINESS DATA
    ========================================================= */

    if (typeof businessData === "undefined") {

        console.error(
            "Erreur : businessData n'est pas défini."
        );

        return;
    }


    /* =========================================================
       BASIC BUSINESS INFORMATION
    ========================================================= */

    document.title =
        businessData.name;


    const businessName =
        document.getElementById("businessName");

    if (businessName) {

        businessName.textContent =
            businessData.name;

    }


    const footerName =
        document.getElementById("footerName");

    if (footerName) {

        footerName.textContent =
            businessData.name;

    }


    const businessDescription =
        document.getElementById("businessDescription");

    if (businessDescription) {

        businessDescription.textContent =
            businessData.description;

    }


    /* =========================================================
       LOGO
    ========================================================= */

    const logoImage =
        document.getElementById("logoImage");

    if (logoImage) {

        logoImage.src =
            businessData.logo;

    }


    /* =========================================================
       PHONE
    ========================================================= */

    const phone =
        String(businessData.phone || "");


    const phoneClean =
        phone.replace(/\s+/g, "");


    const phoneNumber =
        document.getElementById("phoneNumber");

    if (phoneNumber) {

        phoneNumber.textContent =
            phone;

    }


    const callLink =
        document.getElementById("callLink");

    if (callLink) {

        callLink.href =
            "tel:" + phoneClean;

    }


    const phoneBtn =
        document.getElementById("phoneBtn");

    if (phoneBtn) {

        phoneBtn.href =
            "tel:" + phoneClean;

    }


    /* =========================================================
       WHATSAPP
    ========================================================= */

    const whatsappNumber =
        String(businessData.whatsapp || "")
            .replace(/\D/g, "");


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber;


    const whatsappNumberElement =
        document.getElementById("whatsappNumber");

    if (whatsappNumberElement) {

        whatsappNumberElement.textContent =
            "+" + whatsappNumber;

    }


    const whatsappLink =
        document.getElementById("whatsappLink");

    if (whatsappLink) {

        whatsappLink.href =
            whatsappURL;

    }


    const whatsappBtn =
        document.getElementById("whatsappBtn");

    if (whatsappBtn) {

        whatsappBtn.href =
            whatsappURL;

    }


    /* =========================================================
       INSTAGRAM
    ========================================================= */

    const instagramBtn =
        document.getElementById("instagramBtn");

    if (instagramBtn) {

        instagramBtn.href =
            businessData.instagram;

    }


    const instagramLink =
        document.getElementById("instagramLink");

    if (instagramLink) {

        instagramLink.href =
            businessData.instagram;

    }


    /* =========================================================
       FACEBOOK
    ========================================================= */

    const facebookBtn =
        document.getElementById("facebookBtn");

    if (facebookBtn) {

        facebookBtn.href =
            businessData.facebook;

    }


    const facebookLink =
        document.getElementById("facebookLink");

    if (facebookLink) {

        facebookLink.href =
            businessData.facebook;

    }


    /* =========================================================
       SAVE CONTACT
    ========================================================= */

    const saveContactBtn =
        document.getElementById("saveContactBtn");


    if (saveContactBtn) {

        saveContactBtn.addEventListener(
            "click",
            saveContact
        );

    }


    function saveContact() {

        if (!businessData.contact) {

            console.error(
                "Erreur : businessData.contact n'est pas défini."
            );

            return;
        }


        const contact =
            businessData.contact;


        const firstName =
            contact.firstName || "";


        const lastName =
            contact.lastName || "";


        const organization =
            contact.organization || "";


        const contactPhone =
            contact.phone || "";


        const vCard =
`BEGIN:VCARD
VERSION:3.0
FN:${firstName} ${lastName}
N:${lastName};${firstName};;;
ORG:${organization}
TEL;TYPE=CELL:${contactPhone}
END:VCARD`;


        const blob =
            new Blob(
                [vCard],
                {
                    type:
                        "text/vcard;charset=utf-8"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href =
            url;


        link.download =
            `${firstName}-${lastName}.vcf`;


        document.body.appendChild(link);


        link.click();


        document.body.removeChild(link);


        URL.revokeObjectURL(url);

    }

});