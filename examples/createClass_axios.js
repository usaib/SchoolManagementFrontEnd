
function tableforclasses(jsonObject, element, label) {
        var col = [];
        for (var i = 0; i < jsonObject.length; i++) {
            for (var key in jsonObject[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
            }
        var table = document.getElementById(element);
        var tr = table.insertRow(-1);
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
        var nth=document.createElement('th');
        nth.innerHTML="Action";
        tr.appendChild(nth)
        for (var i = 0; i < jsonObject.length; i++) {
    
            tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = jsonObject[i][col[j]];
    
            }
            tr.insertCell(-1).innerHTML="<button type='button' class='btn btn-warning' id='ed' onclick='openForm(this)'  >Edit</button>     <button class='btn btn-danger' id='del' type='button' onclick='myFunction(this)'>Delete</button></td>";
    
    
        }
    }
    function ClassSecTable(){
        axios.get('http://192.168.0.106:5000/getcreatedclasslabels')
      .then(function (response) {
        // handle success
        tableforclasses(response.data,'allclassestable');
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }
ClassSecTable();
   
