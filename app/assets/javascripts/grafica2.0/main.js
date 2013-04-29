$(document).ready(function() {
        
var mylog=1,
    myprop=1,
    submenupannel=0,
    menu2show=0,
    myprop_off='DAI IL TUO CONTRIBUTO',
    myprop_on='ESCI DAI CONTRIBUTI',
    accountpannel=0;
    
    
    
//  ----------------------------------------------------------------  MYLOG
    
myLog()
function myLog(){
    if(mylog==0){
        $('#menu-right #mybox').hide();
        $('#main, #menu-top').animate({'right': '0px'}, 0);
    }else{
        $('#inlog').hide();
        $('#menu-right #mybox').show();
        $('#main, #menu-top').animate({'right': '80px'}, 0);
    }
}
    
//  ----------------------------------------------------------------  INWIDTH
    
function inWidth(){
    if(window.innerWidth<800){
        $("#main-copy").addClass("slim");
        $("#main1").css({
            'margin-left':'0px',
            'margin-top':'160px',
        })
        $('#main .menu2-show').show();
        $('#main .menu2 .myboxcont').slideUp();
    }else{
        $("#main-copy").removeClass("slim");
        $("#main1").css({
            'margin-left':'280px',
            'margin-top':'0px',
        })
        $('#main .menu2-show').hide();
        $('#main .menu2 .myboxcont').show();
    }
}
inWidth(800);
$(window).resize(function () {
    inWidth();
});


//  ----------------------------------------------------------------  ACCOUNT
        
$("#avatar").click(function () {
    if(accountpannel==0){
        if(window.innerWidth>1300){
            accountpannel=1;
            $('#menu-top, #main').animate({'right':'450px'},100);
            $('#menu-right').animate({'width':'450px'},100);
            $('#mybox').hide();
            $('#account').show();
            $('#account').load('/page/account.html');
            $(this).animate({
                'height':'80px',
                'width':'80px',
            },100);
        }
    }else{
        accountpannel=0;
        $('#menu-top, #main').animate({'right':'80px'},200);
        $('#mybox').show();
        $('#main1').show();
        $('#account').hide();
        $('#menu-group').show();
        $(this).animate({
            'height':'55px',
            'width':'55px',
        },100);
    }
});
//  ----------------------------------------------------------------  MYPROPOSTA
    
if(myprop==1){
    $('.myprop').show();
    myprop_off='VISUALIZZA 3 CONTRIBUTI';
    myprop_on='ESCI DAI CONTRIBUTI';
    $('.tit.sug').text(myprop_off);
}else{
    myprop_off='DAI IL TUO CONTRIBUTO';
    myprop_on='ESCI DAL CONTRIBUTO';
    $('.myprop').hide();
    $('.tit.sug').text(myprop_off);
}
    
$("#main .menu2-show").click(function () {
    if(menu2show==0){
        menu2show=1;
        $('#main .menu2 .myboxcont').slideDown();
    }else{
        menu2show=0;
        $('#main .menu2 .myboxcont').slideUp();
    }
});

//  ----------------------------------------------------------------  MULTISOLITION

$(".multisolution .box").click(function () {
    if($(this).attr('sel')==undefined){
        $(".multisolution .box").removeClass('sel');
        $(this).addClass('sel');
    }else{
        $(this).remove('sel');
    }
    $(".multisolution").addClass('loadx');
});
    

//  ----------------------------------------------------------------  OPENCLOSE


$("#main .openclose").click(function () {
    if($(this).attr("openclose")==0){
        $(this).attr("openclose","1");
        $('#main .'+$(this).attr('myclass')).slideDown();
    }else{
        $(this).attr("openclose","0");
        $('#main .'+$(this).attr('myclass')).slideUp();
    }
});
    

//  ----------------------------------------------------------------  SUGGEST
    
$("#main .suggest .tit.sug").click(function () {
    var mypos = ($("#main #main-copy").width()-$("#main #main-copy #main1").width()-220);
    if(mypos<300){mypos=300};
    $('#menu-right #suggest .mycomment').show();
    $("#main .suggest .tria").hide();
    $("#main .suggest").removeClass("sel");
    $('.tit.sug').text(myprop_off);
    if($(this).parent().attr("target")==0){
        $("#main .suggest").attr("target","0");
        $(this).parent().attr("target","1");
        $('#menu-right #suggest').show();
        $(this).parent().find(".tria").show(250);
        $(this).parent().addClass("sel");
        $('.tit.sug').text(myprop_on);
        $('#main').animate({'right': mypos+'px'}, 200);
        $('#menu-right').animate({'width': mypos+'px'}, 200);
        if(window.innerWidth>1600){
            $('#menu-right #suggest').css('margin-right','80px');
//            $('#menu-right #suggest').css('margin-top','0px');
            $('#menu-right #mybox').show();
        }else{
//            $('#menu-top').css('right','0px');
            $('#menu-right #suggest').css('margin-right','0px');
//            $('#menu-right #suggest').css('margin-top','83px');
            $('#menu-right #mybox').hide();
        }
        if(window.innerWidth<1000 & window.innerWidth>800){
            $('#menu-left').animate({'margin-left': '-280px'}, 200);
            $('#main1').animate({'margin-left': '0px'}, 200);
        }
        if(myprop==1){
//            $('#menu-right #suggest').css('margin-top','0px');
            $('#menu-right #suggest .mycomment').hide();
        }
    }else{
        $(this).parent().attr("target","0");
        $('.tit.sug').text(myprop_off);
        $('#menu-right #suggest').hide();
        $(this).parent().find(".tria").hide();
        $('#menu-right #mybox').show();
        if(window.innerWidth<1000 & window.innerWidth>800){
            $('#menu-left').animate({'margin-left': '0px'}, 200);
            $('#main1').animate({'margin-left': '280px'}, 200);
        }
        $('#menu-top, #main').animate({'right':'80px'}, 200);
        $('#menu-right').animate({'width': '280px'}, 200);
        myLog();
    }
});

    
//  ----------------------------------------------------------------  MODIFICA
    
$("#main .suggest .tit.mod").click(function () {
    if($(this).attr('target')==0){
        $(this).attr('target',1);
        $(this).parent().parent().parent().parent().find('form').show();
        $(this).parent().parent().parent().parent().find('.proposal_content').hide();
        if($(this).attr('edit')=='solution'){
            $(".tit1.solution .myimput").show();
            $(".tit1.solution .mytitle").hide();
        }
    }else{
        $(this).attr('target',0)
        $(this).parent().parent().parent().parent().find('form').hide();
        $(this).parent().parent().parent().parent().find('.proposal_content').show();
        $(".tit1.solution .myimput").hide();
        $(".tit1.solution .mytitle").show();
    }
});
    
    
//  ----------------------------------------------------------------  OPENRIGHT
    

//$("#menu-top #tolr #curbox").click(function () {
//    if($(this).attr('target')==0){
//        $(this).attr('target',1);
//        $('#menu-top, #main').animate({'right':'250px'},200);
//        $("#menu-right").removeClass("slim");
//    }else{
//        $(this).attr('target',0);
//        $('#menu-top, #main').animate({'right':'80px'},200);
//        $("#menu-right").addClass("slim");
//    }
//});
    
    
//  ----------------------------------------------------------------  LOGOAIRESIS
    
$("#menu-top #logo-but, #logo-airesis").click(function () {
    if(submenupannel==0){
        submenupannel=1;
        $('#main #main-copy').animate({'padding-top':'250px'}, 200);
        $('#menu-top .group-cont').slideDown().delay(200);
        $(this).addClass("sel");
    }else{
        submenupannel=0;
        $('#main #main-copy').animate({'padding-top':'80px'}, 200);
        $('#menu-top .group-cont').slideUp().delay(0);
        $(this).removeClass("sel");
    }
});

    
//  ----------------------------------------------------------------  RISPONDI
    
$(".comment1 .vote .rispondi").click(function () {
    if($(this).attr("target")==0){
        $(this).attr("target","1");
        $(this).css("background-color","gray")
        $(this).parent().parent().find(".recomment").show();
    }else{
        $(this).attr("target","0");
        $(this).css("background-color","silver")
        $(this).parent().parent().find(".recomment").hide();
    }
});

    
//  ----------------------------------------------------------------  QUIP
    
$('#tolr #mess, #tolr #notify').each(function(){
    $(this).qtip({
        content: {
            text: '<img class="qtip-load" src="img/loading.gif"/>',
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
//            ready: true
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
});
    
$('.vote img, .ui-icon').each(function(){
    $(this).qtip({
        content: {
            text: $(this).attr('title'),
        },
        position: {
            at: 'top center',
            my: 'bottom center',
        },
        style: {
            classes: 'qtip-dark qtip-vote',
            tip: {
                corner: true,
                width: 15,
                height: 5
            }
        }
    })
});
    
$('#tolr #curinfo').each(function(){
    $(this).qtip({
        content: {
            text: '<img class="qtip-load" src="img/loading.gif"/>',
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
        },
        hide: 'unfocus',
        style: {
            classes: 'qtip-light qtip-info',
            tip: {
                corner: true,
                width: 15,
                height: 5
            }

        }
    })
});

$('#menu-right .box .logo').each(function(){
    $(this).qtip({
        content: {
            text: '<img class="qtip-load" src="/assets/img/loading.gif"/>',
            ajax: {
                url: '/page/box/'+$(this).attr('box')+'.php',
            }
        },
        position: {
            at: 'left center', 
            my: 'right center',
            viewport: $(window),
            effect: false,
            resize: true,
            adjust: { 
                method: 'shift',
                x: -5, y: 0,
            }
        },
        show: {
            solo: true,
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

$('#main .history').qtip({
    content: {
            text: '<img class="qtip-load" src="/assets/img/loading.gif"/>',
            ajax: {
                url: '/page/history.php',
                type: 'POST',
                data: {
                    id: '01'
                }
            }
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
    },
    hide: 'unfocus',
    style: {
        classes: 'qtip-dark qtip-shadow qtip-youtube',
        tip: {
            corner: true,
            width: 15,
            height: 5
        }
    }
});
    
    
$('#rankleftpanel .points, #rankleftpanel .ranking, #rankleftpanel .percent-bar').qtip({
    content: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisici elitLorem ipsum dolor sit amet, consectetur adipisici elitLorem ipsum dolor sit amet, consectetur adipisici elit',
    },
    position: {
        at: 'right center',
        my: 'left center',
        viewport: $(window),
        effect: false,
        adjust: { 
            method: 'shift',
            x: 0, y: 0,
        }
    },
    show: {
        event: 'mouseover',
        solo: true,
    },
//    hide: 'unfocus',
    style: {
        classes: 'qtip-dark qtip-shadow qtip-youtube',
        tip: {
            corner: true,
            width: 15,
            height: 5
        }
    }
});
    
$('#rankleftpanel .percent-up, #rankleftpanel .percent-down').qtip({
    content: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisici elitLorem ipsum dolor sit amet',
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
        event: 'mouseover',
        solo: true,
    },
//    hide: 'unfocus',
    style: {
        classes: 'qtip-dark qtip-shadow qtip-youtube',
        tip: {
            corner: true,
            width: 15,
            height: 5
        }
    }
});    
    
$('#avatar').qtip({
    content: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisici elitLorem ipsum dolor sit amet',
            ajax: {
                url: '/page/avatar.php',
            }
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
        solo: true,
    },
    hide: 'unfocus',
    style: {
        classes: 'qtip-dark qtip-shadow qtip-youtube qtip-avatar',
        tip: {
            corner: true,
            width: 15,
            height: 5
        }
    }
});    
    
    
    
    
    
    
    
});
