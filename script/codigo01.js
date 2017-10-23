$(document).ready(function(){
    $(".celda-pelicula").mouseover(function(){
       $(this).find('img').first().css('display', 'none');
       $(this).find('.celda-descripcion').first().css('display','inline-block');
    });
       $(".celda-pelicula").mouseout(function(){
       $(this).find('img').first().css('display', 'inline');
       $(this).find('.celda-descripcion').first().css('display','none');
    });
    
});


