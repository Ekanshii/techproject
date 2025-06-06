// Show only the selected main section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = "block";
    }
}

function showWeapon(subSectionId) {
    const subSections = ["weapon1", "weapon2"];
    subSections.forEach(id => {
        const x = document.getElementById(id);
        if (x) x.style.display = "none";
    });

    const y = document.getElementById(subSectionId);
    if (y) {
        y.style.display = "block";
    }
}


//-----------WEAPON 1-----------//
document.getElementById("weaponGame1").addEventListener("submit", function (e) {
    e.preventDefault();
    // Hide update form on submit
    document.getElementById("weaponGame1").style.display = "none";
    // Show confirmation with proceed/edit buttons
    document.getElementById("afterSubmitweapon1").style.display = "block";
});
document.getElementById("proceed1").addEventListener("click", function () {
    // Hide the after-submit confirmation
    document.getElementById("afterSubmitweapon1").style.display = "none";
    // Reset and hide update form
    document.getElementById("weaponGame1").reset();
    document.getElementById("weaponGame1").style.display = "none";

    // Show updateSection and updateForm1
    document.getElementById("weapon2").style.display = "block";
    document.getElementById("weaponGame2").style.display = "block";
    document.getElementById("weaponGame2").reset();
});

document.getElementById("edit1").addEventListener("click", function () {
    // Hide the after-submit confirmation
    document.getElementById("afterSubmitweapon1").style.display = "none";
    // Show the new form again for editing
    document.getElementById("weaponGame1").style.display = "block";
});
