// Get dropdown elements
const dropdowns = document.querySelectorAll('.dropdown');

// Add event listener to each dropdown
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('change', updateTotal);
});

// Function to update total cost
function updateTotal() {
    let totalCost = 0;

    dropdowns.forEach(dropdown => {
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        totalCost += parseInt(selectedOption.value);
    });

    document.getElementById('totalCost').textContent = totalCost;
}
