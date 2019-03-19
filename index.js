function myId() {
    // 声明变量
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("singTable");
    tr = table.getElementsByTagName("tr");
  
    // 循环表格每一行，查找匹配项
    for (i = 0; i < tr.length; i++) {
      if (isNaN(input)) {
        td = tr[i].getElementsByTagName("td")[1]
      } 
       //else {
      //   td = tr[i].getElementsByTagName("td")[0]
      // }
    
      
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
  ;(function(){
    var tbody = document.querySelector('#singTable').tBodies[0];
    var th = document.querySelector('#singTable').tHead.rows[0].cells;
    var td = tbody.rows;
    for(var i = 0;i < th.length;i++){
      th[i].flag = 1;
      th[i].onclick = function(){
        sort(this.getAttribute('data-type'),this.flag,this.cellIndex);
        this.flag = -this.flag;
      };
    };
    function sort(str,flag,n){
      var arr = [];
      for(var i = 0;i < td.length;i++){
        arr.push(td[i]);
      };
      arr.sort(function(a,b){
        return method(str,a.cells[n].innerHTML,b.cells[n].innerHTML) * flag;
      });
      for(var i = 0;i < arr.length;i++){
        tbody.appendChild(arr[i]);
      };
    };
    function method(str,a,b){
      switch(str){
      case 'num': 
        return a-b;
        break;
      case 'string': 
        return a.localeCompare(b);
        break;
      default:
        return new Date(a.split('-').join('/')).getTime()-new Date(b.split('-').join('/')).getTime();
      };
    };
    })();