/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll(""); // All Accordion items

accordionItems.forEach(item => {
    const accordionHeader = item.querySelector(""); // Accordion header

    accordionHeader.addEventListener("click", () => {

        const openItem = document.querySelector(''); // class that shows the open accordion

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector(""); // individual accordion item

    if (item.classList.contains('')) { // If the accordion is open
        accordionContent.removeAttribute('style');
        item.classList.remove(''); // remove the open class
    } else {
        item.classList.add(''); // add the accordion open class
        accordionContent.style.height = accordionContent.scrollHeight + 'px'; // height of the accordion details
    }
}