var downArrow = document.querySelectorAll('.down-arrow');
var imgDescription = document.querySelectorAll('.img-description');

for (var i=0;i<downArrow.length;i++){
    downArrow.item(i).addEventListener("click", myFunction);
}


function myFunction() {
    var num = this.getAttribute('data-num');
    if (imgDescription.item(num).getAttribute('data-state') == 'expanded') {
        imgDescription.item(num).setAttribute('data-state', 'collapsed');
    }else{
        imgDescription.item(num).setAttribute('data-state', 'expanded');
    }
    
}