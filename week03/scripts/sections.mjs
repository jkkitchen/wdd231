//Export function that will populate the section selection element on the page.
export function setSectionSelection(sections) {
    const sectionSelect = document.querySelector("#sectionNumber");

    sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
}


