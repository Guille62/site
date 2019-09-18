new fullpage('#fullPage', {
	autoScrolling: true, // AUTO SCROLL
	navigation: false, //NAVEGADORES LATERALES
	anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'], // Nombres default secciones
	navigationTooltips: ['Primera Sección', 'Segunda Sección', 'Tercera Sección', 'Cuarta Sección', 'Quinta Sección', 'Sexta Sección', 'Septima Sección'], // NOMBRES PARA LOS NAVEGADORES LATERALES
	showActiveTooltip: true,  // MUESTRA LA SECCIÓN ACTIVA EN EL NAV. LATERAL
	scrollingSpeed:2000, // VELOCIDAD CON QUE CAMBIA SECCIÓN
	controlArrows: false, // FLECHAS SE SOBREPONEN CON LOS LATERALES
    slidesNavigation: true, //NAVEGADOR PARTE LATERAL INFERIOR
    
   
});





$(document).ready(function() {

    // Gets the video src from the data-src on each button
    var $imageSrc;  
    $('.gallery img').click(function() {
        $imageSrc = $(this).data('bigimage');
    });
    console.log($imageSrc);
      
      
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    
    $("#image").attr('src', $imageSrc  ); 
    })
      
      
    // reset the modal image
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#image").attr('src',''); 
    }) 
        
        
    // document ready  
    });
    
