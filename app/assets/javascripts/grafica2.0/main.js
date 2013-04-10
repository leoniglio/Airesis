$(document).ready(function() {
    
//$("#menu-right").hover(function () {
//    $('#menu, #main').animate({'left':'300px'}, 200);
//},function () {
//    $('#menu, #main').animate({'left':'70px'}, 200);
//}
//);

    
$("#menu-top #tolr #curbox").click(function () {
    if($(this).attr("target")==0){
        $(this).attr("target","1");
        $('#menu-top, #main').animate({'right':'250px'}, 200);
        $('#menu-right .sep p').animate({'margin-right':'100px'}, 200);
    }else{
        $(this).attr("target","0");
        $('#menu-top, #main').animate({'right':'70px'}, 200);
        $('#menu-right .sep p').animate({'margin-right':'1px'}, 200);
    }
});
    
$("#menu-top #tolr #curtria").click(function () {
    if($(this).attr("target")==0){
        $(this).attr("target","1");
        $('#menu-top').animate({'height':'250px'}, 200);
        $('#main, #menu2').animate({'top':'250px'}, 200);
    }else{
        $(this).attr("target","0");
        $('#menu-top').animate({'height':'50px'}, 200);
        $('#main, #menu2').animate({'top':'0px'}, 200);
    }
});

    
$('#tolr #mess, #tolr #notify').each(function(){
    $(this).qtip({
        content: {
            text: '<img class="qtip-load" src="/img/loading.gif"/>',
            ajax: {
                url: $(this).attr("rel")
            },
        },
        position: {
            at: 'bottom center',
            my: 'top center',
            viewport: $(window),
            effect: false,
            adjust: { 
                method: 'shift',
                x: 0, y: 0,
            }
        },
        show: {
            event: 'click',
            solo: true,
            ready: true
        },
        hide: 'unfocus',
        style: {
            classes: 'qtip-light qtip-main',
            tip: {
                corner: true,
                width: 15,
                height: 5
            }

        }
    })
})

$('#menu-right .box .logo').each(function(){
    $(this).qtip({
        content: {
            text: '<img class="qtip-load" src="/img/loading.gif"/>',
            ajax: {
                url: $(this).attr("rel")
            },
        },
        position: {
            at: 'left center',
            my: 'right center',
            viewport: $(window),
            effect: false,
            adjust: { 
                method: 'shift',
                x: 0, y: 0,
            }
        },
        show: {
            event: 'mouseover',
            delay:300,
            solo: true,
            ready: true
        },
        hide: 'unfocus',
        style: {
            classes: 'qtip-light qtip-right',
            tip: {
                corner: true,
                width: 15,
                height: 5
            }

        }
    })
}) 
    
    
});
