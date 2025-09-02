document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector(".my-table table");
  const tbody = table.querySelector("tbody");
  const input = document.querySelector(".my-table input");

  table.addEventListener("click", function (e) {
    const target = e.target;
    if (target.tagName.toLowerCase() !== "td" && target.closest("td") === null) {
      return;
    }
    e.target.closest('td').classList.toggle("active");
  });

  input.addEventListener("change", function () {
    const n = parseInt(this.value);
    generateTable(n);
  });

  function generateTable(n) {
    tbody.innerHTML = "";
    for (let i = 1; i <= n; i++) {
      const row = document.createElement("tr");
      for (let j = 1; j <= n; j++) {
        const cell = document.createElement("td");
        row.appendChild(cell);
        const title = document.createElement("h5");
        title.textContent = `Row ${i} - Col ${j}`;
        cell.appendChild(title);
      }
      tbody.appendChild(row);
    }
  }
});
