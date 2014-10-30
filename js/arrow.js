var downArrow = document.querySelectorAll('.down-arrow');
var imgDesc = document.querySelectorAll('.img-desc');

for (var i=0;i<downArrow.length;i++){
    downArrow.item(i).addEventListener("click", myFunction);
}


function myFunction() {
    var num = this.getAttribute('data-num');
    if (imgDesc.item(num).getAttribute('data-state') == 'expanded') {
        imgDesc.item(num).setAttribute('data-state', 'collapsed');
    }else{
        imgDesc.item(num).setAttribute('data-state', 'expanded');
    }
    
}