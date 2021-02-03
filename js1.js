function ketqua() {
    var nhapso= document.getElementById('nhaplan1').value;
    var kq='';
    let fontSize=1;

    // for (let i = 0; i <= nhapso; i++) {
    //     kq+=  `<div style="font-size: `+(i*10)+`px;">hello</div>`;
            
    //     }
    //     document.getElementById('kq1').innerHTML=kq;
      for (let i = 0; i <nhapso; i++) {
          kq+= `<div style="font-size:${fontSize}px;">hello</div>`;
          fontSize+=50;

          
      }

    document.getElementById('kq1').innerHTML=kq;


     }
    
