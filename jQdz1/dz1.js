/*1*/
$('#res_btn').on('click', function(){
    let length = $('#count').val();
    if(length.match(/(\D)/g)){
        alert("string cant contain letters");
        return;
    }
    else{
        length = parseInt(length); 
        let chars = "";
        let result = "";
        if($('#first').prop('checked')){
            chars += '1234567890';
        }
        if($('#second').prop('checked')){
            chars += 'QWERTYUIOPASDFGHJKLZXCVBNM'
        }
        if($('#third').prop('checked')){
            chars += 'qwertyuiopasdfghjklzxcvbnm';
        }
        for(let i = 0; i < length; i++){
            let rand = Math.floor(Math.random() * (chars.length - 1) + 0);
            result += `${chars[rand]}`;
        }
        $('#res').val(result);
    }
});

/*2*/
$('.btn').on('click', function(){
    $('.left-block').toggle();
    $('p').toggleClass('hide-arr');
    $(this).val('&harr;');
});

let rightFlag = false;
let leftFlag = false;
$('#upr').mousedown(function(){
    rightFlag = true;
    $(this).css({"cursor": "grabbing"});
});
$('#upr').mouseup(function(){
    rightFlag = false;
    $(this).css({"cursor": "grab"});
    $('.right-block').css({"cursor": "default"});
});
$('#upl').mousedown(function(){
    leftFlag = true;
    $(this).css({"cursor": "grabbing"});
});
$('#upl').mouseup(function(){
    leftFlag = false;
    $(this).css({"cursor": "grab"});
    $('.left-block').css({"cursor": "default"});
});
let upr = document.getElementById('upr');
document.addEventListener('mousemove', function(event){
    if(rightFlag){
        $('.right-block').css({"cursor": "grabbing"});
        var greenBlock = $('#green');
        var orangeBlock = $('#orange');
        let rBlock = $('.right-block');
        let getLine = $('#upr');
        let clientY = parseInt(event.clientY);

        if(clientY > (rBlock[0].offsetTop + 100) && clientY < getLine[0].offsetTop){
            let orangeHeight = orangeBlock.height() + getLine[0].offsetTop - clientY;
            $('#green').height(greenBlock.height() - (getLine[0].offsetTop - clientY));
            orangeBlock.height(orangeHeight);
        }
        if(clientY > orangeBlock[0].offsetTop && clientY < (orangeBlock[0].offsetTop + (orangeBlock.height() - 100))){
            let greenHeight = greenBlock.height() + clientY - orangeBlock[0].offsetTop;
            $('#orange').height(orangeBlock.height() - (clientY - orangeBlock[0].offsetTop));
            greenBlock.height(greenHeight);
        }
    }
    else if(leftFlag){
        $('.left-block').css({"cursor": "grabbing"})
        var blueBlock = $('#blue');
        var pinkBlock = $('#pink');
        let lBlock = $('.left-block');
        let getLine = $('#upl');
        let clientY = parseInt(event.clientY);

        if(clientY > (lBlock[0].offsetTop + 100) && clientY < getLine[0].offsetTop){
            let pinkHeight = pinkBlock.height() + getLine[0].offsetTop - clientY;
            $('#blue').height(blueBlock.height() - (getLine[0].offsetTop - clientY));
            pinkBlock.height(pinkHeight);
        }
        if(clientY > pinkBlock[0].offsetTop && clientY < (pinkBlock[0].offsetTop + (pinkBlock.height() - 100))){
            let blueHeight = blueBlock.height() + clientY - pinkBlock[0].offsetTop;
            $('#pink').height(pinkBlock.height() - (clientY - pinkBlock[0].offsetTop));
            blueBlock.height(blueHeight);
        }
    }
});