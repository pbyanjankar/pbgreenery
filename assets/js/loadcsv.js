function populateTable(csvData) {

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
        "columnDefs": [
              {
                  "targets": [3, 4],
                  "className": 'dt-body-right'
              }
        ],
        "columns": [
          { "type": "string" },
          { "type": "string" },
          { "type": "string" },
          { "type": "num-fmt",
                    render: $.fn.dataTable.render.number( ',', '.', 0 )

          },
          { "type": "num-fmt",
                    render: $.fn.dataTable.render.number( ',', '.', 2 ),
                    

          }
        ],
        "paging": true
      });
}

function populateFileAge(date1, date2) {
  try {
      var diff = getAge( new Date(date1) , new Date(date2) );
      $('#file-age').append(diff);
  } catch(err) {
      return console.log(err.message);
  }
}

function getAge(date1, date2) {
  let milliSec = Math.abs(date1 - date2) / 1000;
  const days = Math.floor(milliSec / 86400);
  const lastModified = "Last modified: "
  
  if(days>1){
    return lastModified + days + " days ago"
  }
  
  if(days==1){
    return lastModified + days + " day ago"
  }

  milliSec -= days * 86400;
  const hours = Math.floor(milliSec / 3600) % 24;

  if(hours>1){
    return lastModified + hours + " hours ago"
  }

  if(hours==1){
    return lastModified + hours + " hour ago"
  }


  milliSec -= hours * 3600;
  const minutes = Math.floor(milliSec / 60) % 60;
  if(minutes>1){
    return lastModified + minutes + " minutes ago"
  }

  if(minutes >= 0 ){
    return lastModified + minutes + " minute ago"
  }


  return "";
}
