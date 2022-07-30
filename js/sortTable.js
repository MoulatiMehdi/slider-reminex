// Sort the table By ASCII characters (increasing or decreasing)
function sortTable(n) {

    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

    table = document.getElementById("sortTab");
    switching = true;

    // Set the sorting direction to ascending:
    dir = "asc";

    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {

        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;

        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {

            // Start by saying there should be no switching:
            shouldSwitch = false;

            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {

            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {

            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
    for (let sort_icon of rows[0].getElementsByTagName('i')) {

        sort_icon.className = "fa-solid fa-sort fa-2xs "
    }
    rows[0].getElementsByTagName('i')[n].className = (dir === "asc" ? "fa-solid fa-sort-up fa-2xs opacity-100" : "fa-solid fa-sort-down fa-2xs opacity-100")
}

// find all the rows that match the input in the given table name
function findInTable(string, tableId) {
    let table, rows;

    // remove spaces (if started or ended by spaces) from string
    string = string.replace(/(^\s)|(\s$)/g, "").toLowerCase()

    table = document.getElementById(tableId)

    // table exist ?
    if (table !== undefined) {

        rows = table.rows;
        let nbrRows = rows.length

        // not in the input ?
        if (string === "") {
            for (let i = 1; i < nbrRows; i++) {
                rows[i].style.display = "table-row";
            }
        } else {
            for (let i = 1; i < nbrRows; i++) {
                if (rows[i].innerText.toLowerCase().includes(string))
                    rows[i].style.display = 'table-row'
                else
                    rows[i].style.display = 'none'
            }
        }
    }


}
