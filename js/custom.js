$(function() {

    var activeIndex = $('.active-tab').index(),
        $contentlis = $('.tabs-content li'),
        $tabslis = $('.tabs li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.tabs').on('click', 'li', function(e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('active-tab');
        $current.addClass('active-tab');
        $contentlis.hide().eq(index).show();
    });
});

// $(document).ready(function() {
//     $('.multiple-items-2').slick({
//         infinite: true,

//         arrows: false,
//         dots: true,
//         cellpadding: 20,
//         arrows: true,
//         responsive: [{
//                 breakpoint: 3000,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                 }
//             }, {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }, {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }

//         ]
//     });
// });



$(document).ready(function() {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    $('.multiple-items-2').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        cellpadding: 20,
        arrows: true,
        responsive: [{
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });


    $('.get-my-score').click(function(e) {
        e.preventDefault();
        $(this).closest('.for-overlay').children('.overlay-card').removeClass('d-none');
    });
    $('.for-overlay .closeovelay').click(function(e) {
        e.preventDefault();
        $(this).closest('.for-overlay').children('.overlay-card').addClass('d-none');
    });
    
});




$(document).ready(function() {
    // Show the first tab and hide the rest
    $('#largetabs-nav li:first-child').addClass('active');
    $('.tab-content:first').show();

    // Click function
    $('#largetabs-nav li').click(function() {
        $('#largetabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
});

$(document).ready(function() {

    var opts = {
        angle: -0.02, // The span of the gauge arc
        lineWidth: 0.15, // The line thickness
        radiusScale: 1, // Relative radius
        color: '#6FADCF',
        pointer: {
            length: 0.4, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#B16B1E',
        colorStop: '#4BB806', // just experiment with them
        strokeColor: '#E0E0E0', // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true, // High resolution support
        percentColors: [
            [0.0, "#B16B1E"],
            [0.20, "#B16B1E"],
            [0.50, "#B16B1E"],
            [0.80, "#4BB806"],
            [1.0, "#4BB806"]
        ],

    };

    var target = document.getElementById('canvas-preview'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 900; // set max gauge value
    gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(702); // set actual value

});
$(document).ready(function() {


    var opts = {
        angle: -0.02, // The span of the gauge arc
        lineWidth: 0.15, // The line thickness
        radiusScale: 1, // Relative radius
        color: '#6FADCF',
        pointer: {
            length: 0.4, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#B16B1E',
        colorStop: '#4BB806', // just experiment with them
        strokeColor: '#E0E0E0', // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true, // High resolution support
        percentColors: [
            [0.0, "#B16B1E"],
            [0.20, "#B16B1E"],
            [0.50, "#B16B1E"],
            [0.80, "#4BB806"],
            [1.0, "#4BB806"]
        ],

    };

    var target = document.getElementById('canvas-preview1'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 900; // set max gauge value
    gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(702); // set actual value

});
// $(".price").after('<span>₹</span>');
$('.modal-toggle1').on('click', function(e) {
    e.preventDefault();
    $('.modal1').toggleClass('is-visible');
    $('body').toggleClass('overflow-hidden');
    console.log(' modal clicked')
});
$('.close-modal').on('click', function(e) {
    e.preventDefault();
    $('.modal1').removeClass('is-visible');
    $('body').removeClass('overflow-hidden');

});



$('.modal-toggle2').on('click', function(e) {
    e.preventDefault();
    $('.modal2').toggleClass('is-visible');
    $('body').removeClass('overflow-hidden');
    console.log(' modal 2 clicked')
});
$('.close-modal').on('click', function(e) {
    e.preventDefault();
    $('.modal2').removeClass('is-visible');
    $('body').removeClass('overflow-hidden');

});


$(document).mouseup(function(e) {
    var container = $(".dd-input");

    if (!container.is(e.target) // if clicked outside
        &&
        container.has(e.target).length === 0) {
        container.hide();
        $(".dd-input").prop("checked", false); //to uncheck
    }
});
// $('.benefits-outer').slideUp();

$('.offer-details').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('reverse-arrow')
    $(this).closest('.itemsBox').siblings('.benefits-outer').slideToggle();
});
$('.offer-details').click(function(e) {
    e.preventDefault();
    $(this).closest('.mobile-grid').siblings('.benefits-outer').slideToggle();
});
var options = {
    valueNames: ['name', 'Amount', 'percent', 'annual-fees']
};

var userList = new List('users', options);


function getBank(el) {
    bank = $(el).attr('bank');
    alert(bank);
    $('.compare-price').text(bank);
}


// function extraTicketAttachment(el) {

//     if ($('input.append-onclick').is(':checked')) {
//         jQuery(".offer-to-compare .compare-grouped").prepend('<div class="ms-0 filled"><img src="img/comparebajaj.svg" alt="" class="offer-image" width="52px"><span class="compare-price">₹8,00,000</span><img src="img/times.svg" alt="" class="times"></div>')

//     }

//     // bank = $(el).attr('bank');
//     // alert(bank);
//     // $('.compare-price').text(bank);
// }

// function extraTicketAttachmenthdfc(el) {
//     if ($('input.append-onclick').is(':checked')) {

//         jQuery(".offer-to-compare .compare-grouped").prepend('<div class="ms-0 filled"><img src="img/hdfc.png" alt="" class="offer-image" width="52px"><span class="compare-price">₹8,00,000</span><img src="img/times.svg" alt="" class="times"></div>')
//     }

//     // bank = $(el).attr('bank');
//     // alert(bank);
//     // $('.compare-price').text(bank);
// }

//  function extraTicketAttachmentaditya(el) {
//      if ($('input.append-onclick').is(':checked')) {
//          jQuery(".offer-to-compare .compare-grouped").prepend('<div class="ms-0 filled"><img src="img/aditya.png" alt="" class="offer-image" width="52px"><span class="compare-price">₹8,00,000</span><img src="img/times.svg" alt="" class="times"></div>')
//      }

//  }


// // $(document).on("click", ".compare-button", function() {
// //     if ($('input.append-onclick').prop('checked', false)) {

// //         $(this).closest('.itemsBox').;
// //     }
// // });

$('.compare-message').hide();


// $("input.append-onclick").change(function() {
//     $(this).closest(".itemsBox").addClass('d-block', this.checked);
//     $('.compare-message').show();
// });

$("input.append-onclick").change(function() {
    $(this).closest(".itemsBox").find('.compare-row').hide();
    $('.compare-message').show();
});



$(document).on("click", ".times", function() {
    $(this).parent().hide();
    // jQuery(".offer-to-compare .compare-grouped").append('<div class="ms-0 blanked" style="border: 1px dashed #006685;box-sizing: border-box;border-radius: 4px;"></div>')

    // $("input").prop("checked", false); //to uncheck
});

$('.compare-button').click(function(e) {
    e.preventDefault();

    $(".itemsBox").addClass('hide-it');

    $('.slider-container-hide').hide();
});


(function($) {
    "use strict";

    $.fn.numericFlexboxSorting = function(options) {
        const settings = $.extend({
            elToSort: ".boxes .mobile-grid"
                // ,elToSort: ".boxes li"

        }, options);

        const $select = this;
        const ascOrder = (a, b) => a - b;
        const descOrder = (a, b) => b - a;

        $select.on("change", () => {
            const selectedOption = $select.find(".radio-input:checked").attr("data-sort");
            sortColumns(settings.elToSort, selectedOption);
        });

        function sortColumns(el, opt) {
            const attr = "data-" + opt.split(":")[0];
            const sortMethod = (opt.includes("asc")) ? ascOrder : descOrder;
            const sign = (opt.includes("asc")) ? "" : "-";

            const sortArray = $(el).map((i, el) => $(el).attr(attr)).sort(sortMethod);

            for (let i = 0; i < sortArray.length; i++) {
                $(el).filter(`[${attr}="${sortArray[i]}"]`).css("order", sign + sortArray[i]);
            }
        }

        return $select;
    };
})(jQuery);

// call the plugin
$(".b-select").numericFlexboxSorting();





// $('.sorttoggle').slideUp();
$('.sort-tab').click(function(e) {
    e.preventDefault();
    $('.sorttoggle').slideToggle();
    $('.sort-tab').toggleClass('reversearrow');
});






// $(document).on("click", ".radio-input", function() {

//     var arnvh = $(this).closest(".sorttoggle1").arrowToggleren(".sorttitle").text();

//     $('.sort-tab span').text('Sorted by: ' + arnvh).removeClass('fw-700');


// });


// var sho = $("#tab1 .list>div").length;
// $('.numb').text(sho);


$(document).ready(function() {

    $(document).ready(function() {
        $('.base-plan').click(function(e) {
            e.preventDefault();
            $('.base-plan').removeClass('border-right-0');
            $('.base-standard').removeClass('border-right-0');
            $('.base-standard').addClass('border-left-0');


        });
        $('.base-standard').click(function(e) {
            e.preventDefault();

            $('.base-plan').addClass('border-right-0');
            $('.base-standard').removeClass('border-right-0');

        });
        $('.base-premium').click(function(e) {
            e.preventDefault();
            $('.base-plan').removeClass('border-right-0');
            $('.base-standard').addClass('border-right-0 border-left-1');
            $('.base-standard').removeClass('border-left-0');


        });
    });



    // var password = document.getElementById("password"),
    //     confirm_password = document.getElementById("confirm_password");

    // function validatePassword() {
    //     if (password.value != confirm_password.value) {
    //         confirm_password.setCustomValidity("Passwords Don't Match");
    //     } else {
    //         confirm_password.setCustomValidity('');
    //     }
    // }

    // password.onchange = validatePassword;
    // confirm_password.onkeyup = validatePassword;


    // $("input").keyup(function() {
    //     if ($('.password').val() && $('.passwords').val()) {
    //         $('[data-pwmatch="submit"]').attr('disabled', false);
    //     } else {
    //         $('[data-pwmatch="submit"]').attr('disabled', true);
    //     }
    // });



    $(function() {
        var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        $('.password').on('keyup', function(updateCount) {
            $('.message').hide();
            regExp.test($(this).val()) ? $('.password').val() && $('.passwords').val() && $('.message').hide() && $('[data-pwmatch="submit"]').attr('disabled', false) : $('.message').show() && $('[data-pwmatch="submit"]').attr('disabled', true);
        });

    });


    $('.password').keyup(updateCount);

    function updateCount() {
        var cs = $(this).val().length;
        console.log(cs);
        if (cs < 8) {
            console.log('Please enter 8-15 characters using at least one letter and number');
        } else {
            console.log('more than 8');

        }
    }

    $("input.append-onclick").change(function() {
        if ($('#2').prop('checked') || $('#3').prop('checked')) {
            $('[data-pwmatch="submit"]').attr('disabled', false);
        } else {
            $('[data-pwmatch="submit"]').attr('disabled', true);
        }
    });
});

var arrowToggle = document.querySelector('.toggle-arrow')
    // var accordionContent = document.querySelector('.report-accordion-content')






var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');



for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }

}




var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки


window.onload = function() {
    tabContent = document.getElementsByClassName('reporttabContent');
    tab = document.getElementsByClassName('reporttab');
    hideTabsContent(1);
}

$('#reporttabs').on("click", function(event) {
    var target = event.target;
    if (target.className == 'reporttab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
});

function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}


// $('.report-page-tabs li').addClass('hide-important');
// $('.report-page-tabs li:first-child').removeClass('hide-important');




if ($(window).width() < 480 || $(window).height() < 480) {

    $(".report-page-tabs li:not(.init)").toggle();

    $(".report-page-tabs").on("click", ".init", function() {
        $(this).closest(".report-page-tabs").children('li:not(.init)').toggle();
    });

    var allOptions = $(".report-page-tabs").children('li:not(.init)');

    $(".report-page-tabs").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $(".report-page-tabs").children('.init').html($(this).html());
        allOptions.toggle();
    });

}


// function extraTicketAttachment(el) {
//     if ($('input.append-onclick').is(':checked')) {
//         jQuery(".offer-to-compare .compare-grouped").prepend('<div class="ms-0 filled"><img src="img/comparebajaj.svg" alt="" class="offer-image" width="52px"><span class="compare-price">₹8,00,000</span><img src="img/times.svg" alt="" class="times"></div>')
//     }
  
// }

/** compare offers**/

$(".form-group").on("change", function(){
     var chkBankName1 = $(this).find("input.append-onclick").attr("data-bank");
    if ($("input.append-onclick[data-bank='" + chkBankName1 + "']").is(':checked')) {
        $(".compare-message").show();
        var dataSrc = $(this).parents('.compareList').find(".image-column img").attr("data-src");
        var chkBankName = $(this).find("input.append-onclick").attr("data-bank");
        var ammount =  $(this).parents('.compareList').find(".limit-column").text();
        var elem = $("<div class='ms-0 filled' data-bank='"+ chkBankName +"'><img class='filled-img' width='32%' src='"+ dataSrc +"'/><p class='para-intro-regular-2c'>"+ ammount +"</p><img src='img/times.svg' class='closeComp'/></div>");
        $( ".compare-grouped-position-absolute" ).append(elem);
    } else{
        var chkBankName2 = $(this).find("input.append-onclick").attr("data-bank");
        $(this).parents(".right-column").find(".filled[data-bank='" + chkBankName2 + "']").remove();
    }

    if ( $('.compare-grouped-position-absolute').children().length >= 2 ) {
        $(".compare-button").removeClass("disabled");
        $("input.append-onclick").not(':checked').attr('disabled',false);
    }
    else{
        $(".compare-button").addClass("disabled");
    }

    if ( $('.compare-grouped-position-absolute').children().length == 0 ) {
        $(".compare-message").hide();
    }

    if ( $('.compare-grouped-position-absolute').children().length == 3 ) {
        $("input.append-onclick").not(':checked').attr('disabled',true);
    }
});


$('.compare-grouped-position-absolute').on('click','.filled', function(){
    var tempName = $(this).attr("data-bank");
    $('body').find("[data-bank='" + tempName + "']").prop('checked',false);
    $(this).remove();
    if ($(this).length == 1 ) {
        $(".compare-button").addClass("disabled");
    }
    let msgLength = $(".compare-grouped-position-absolute .filled");
    if(msgLength.length == 0) {
        $(".compare-message").hide();
    }
    $('.benefits-outer').slideUp();
    $(".offer-details").removeClass('reverse-arrow')
});

$(".compare-button").on("click", function(){
    var checkedBoxes = $('input.append-onclick:not(:checked)');
    checkedBoxes.closest(".compareList").hide();
    $(".clear-compare").css("display","flex");
    var checkedBoxesValue = $('input.append-onclick:checked');
    $(".checkedValue").text(checkedBoxesValue.length);
    $('.benefits-outer').slideUp();
    $(".offer-details").removeClass('reverse-arrow')
});

// $(".clear-compare").on("click", function(){
//     $('input.append-onclick').prop('checked',false);
//     $(".compareList").show();
//     $(this).hide();
//     $(".compare-button").css("display","flex");
//     $(".compare-grouped-position-absolute .filled").remove();
//     $(".compare-message").css("display","none");
//     var len = $(".list .compareList");
//     $(".checkedValue").text(len.length);
//     $('.benefits-outer').slideUp();
//     $(".offer-details").removeClass('reverse-arrow')
// });
