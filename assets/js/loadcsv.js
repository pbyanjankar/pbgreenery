function populateTable(csv) {
  $.when($.get(csv)).then(
    function(data){
      var csvData = $.csv.toArrays(data, {separator: ',', delimiter: '"'});

      $('#parts-table').append("<tbody></tbody>");

      for (i = 1; i < csvData.length; i++) { 
        var trow = "<tr>";

          for (j = 0; j < csvData[i].length; j++) { 
            trow += "<td>"
            trow += csvData[i][j];
            trow += "</td>";
          }
          
        trow += "</tr>";
        $('#parts-table tbody').append(trow);
      }

      $("#parts-table").dataTable({
        "columns": [
          { "type": "string" },
          { "type": "string" },
          { "type": "string" },
          { "type": "num" },
          { "type": "num-fmt",
                    render: $.fn.dataTable.render.number( ',', '.', 2 )

          }
        ],
        "paging": true
      });
    });
}