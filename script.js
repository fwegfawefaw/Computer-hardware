const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
   dropdown.addEventListener('change', updateTotal);
});


function updateTotal() {
   let totalCost = 0;

   dropdowns.forEach(dropdown => {
      const selectedOption = dropdown.options[dropdown.selectedIndex];
      totalCost += parseInt(selectedOption.value);
   });

   document.getElementById('totalCost').textContent = totalCost;
}