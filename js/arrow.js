  var imgDescription = document.querySelector('.img-description');

  document.querySelector('.down-arrow').addEventListener('click', function(e){
  e.preventDefault();
    
  if(aboutDesc.getAttribute('data-state') == 'expanded'){
	  aboutDesc.setAttribute('data-state', 'collapsed');  
  }else{
     	  aboutDesc.setAttribute('data-state', 'expanded');  
  }
  
  });