// From data.js
var tableData = data;

// Select table body
var tbody = d3.select("tbody");

// function to populate table
function populateTable() {
    tableData.map(data => {

       
        var row = tbody.append("tr");
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    });
}

// populate table
populateTable();

// filter table
var button1 = d3.select("#filter-btn");

button1.on("click", function() {

   
    var inputValue = d3.select("#datetime").property("value");
    console.log(inputValue);
    
   
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);

    // clear table
    tbody.html("");

    // make new table
    filteredData.forEach(obj => {
        
       
        var row = tbody.append("tr");
        row.append("td").text(obj.datetime);
        row.append("td").text(obj.city);
        row.append("td").text(obj.state);
        row.append("td").text(obj.country);
        row.append("td").text(obj.shape);
        row.append("td").text(obj.durationMinutes);
        row.append("td").text(obj.comments);
    });
});

// restore table
var button2 = d3.select("#unfilter-btn");

button2.on("click", function(){
    tbody.html("");
    populateTable();
});