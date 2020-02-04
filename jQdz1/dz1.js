/*1*/
$('#res_btn').on('click', function(){
    let length = parseInt($('#count').val());
    let re = "";
    let result = "";
    if($('#first').prop('checked')){
        re += '1234567890';
    }
    if($('#second').prop('checked')){
        re += 'QWERTYUIOPASDFGHJKLZXCVBNM'
    }
    if($('#third').prop('checked')){
        re += 'qwertyuiopasdfghjklzxcvbnm';
    }
    for(let i = 0; i < length; i++){
        let rand = Math.floor(Math.random() * (re.length - 1) + 0);
        result += `${re[rand]}`;
    }
    $('#res').val(result);
});