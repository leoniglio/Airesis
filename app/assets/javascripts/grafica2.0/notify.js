$(".cont-mess .mess.new").hover(function () {
    $(this).find('button').show()
},function () {
    $(this).find('button').hide()
});
    
$(".cont-mess .mess.new button").click(function () {
    $(this).parent().css({'background-color': 'white'});
    $(this).parent().removeClass("new").addClass("old");
    inLoad();
});

inLoad();
function inLoad(){
    
$(".cont-mess .mess.old button").click(function () {
    $(this).parent().slideUp()
});

$('.cont-mess .mess.new button').qtip({
    content: {
            text: 'LETTO',
    },
    position: {
        at: 'top center',
        my: 'bottom center',
        viewport: $(window),
        effect: false,
        adjust: { 
            method: 'shift',
            x: 0, y: 0,
        }
    },
    show: {
        event: 'mouseover',
//        solo: true,
    },
//    hide: 'unfocus',
    style: {
        classes: 'qtip-shadow qtip-vote',
        tip: {
            corner: true,
            width: 15,
            height: 5
        }
    }
});
    
}
