let res;
$('#incr_btn').on('click', () =>{
    res = parseInt($('#number').text()) + 1;
    $('#number').text(res);
  }); 
$('#decr_btn').on('click', () =>{
    res = parseInt($('#number').text()) - 1;
    $('#number').text(res);
});

/*2*/
$('#adddiv_btn').on('click', () =>{
    $('.divs').append($('<div />', { "class": 'el-d' })
                .css({backgroundColor: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`})
                .click(function (){
                    $(this).remove();}));
});
$('.el-d').click(function (){
    $(this).remove();	
});

/*3*/
$('.item-color').click(function (){
    var c = $(this).attr('data-color');
    $('#some-text').css({color: `${c}`});
});



