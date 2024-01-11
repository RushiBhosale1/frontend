$(document).ready(function() {
    applyHeader();
    applyTableExpander();
    applyTableExpander2();
    lazyLoadImages();
});

function applyHeader() {
    $('.tooltip_js').tooltip();
    $('.sidemenu_js').bind('click', function() {
        var target = $(this).attr('data-target');
        var target_class = $(this).attr('data-class');
        if ($(this).hasClass('va_active')) {
            $(target).removeClass(target_class);
            $(this).removeClass('va_active');
            $('.leftside-menu-opp').removeClass('showme');
            $('.leftside-menu-border').removeClass('showme');
        } else {
            $(target).addClass(target_class);
            $(this).addClass('va_active');
            $('.leftside-menu-opp').addClass('showme');
            $('.leftside-menu-border').addClass('showme');
        }
    });

    $('.leftside-menu-opp').bind('click', function() {
        $('.sidemenu_js').removeClass('va_active');
        $(this).removeClass('showme');
        $('.leftside-menu-opp').removeClass('showme');
        $('.leftside-menu-border').removeClass('showme');
        $('.leftside-menu').removeClass('nav_visible');
    });
}

function applyTableExpander() {
    $('.js_table_expand').bind('click', function() {
        var target = $(this).attr('data-target');
        var target_class = $(this).attr('data-class');
        if ($(this).hasClass('expandactive')) {
            $(target).removeClass(target_class);
            $(this).removeClass('expandactive');
            $(this).html('See more <i class="fas fa-angle-down"></i>');
        } else {
            $(target).addClass(target_class);
            $(this).addClass('expandactive');
            $(this).html('See less <i class="fas fa-angle-up"></i>');
        }
    });
}

function applyTableExpander2() {
    $('.js_table_expand_two').bind('click', function() {
        var this_obj = this;
        var target = $(this).attr('data-target');
        var target_class = $(this).attr('data-class');
        var odid = $(this).data('odid');
        var is_loaded = $(this).data('is_loaded');
        var fakeOrderStatus = $(this).data('fakeorderstatus');
        var disputeId = $(this).data('disputeid');
        var specialRequestId = $(this).data('specialrequestid');
        var pageListing = $(this).data('pagelisting');
        let token = document.querySelector('meta[name=token]').content;

        var _triggerfrompage = '';
        if (typeof $(this).data('triggerfrompage') !== 'undefined') {
            _triggerfrompage = $(this).data('triggerfrompage');
        }

        if (is_loaded == 0) {
            let ajax = $.ajax({
                url: "/get-tracking-update/" + token,
                method: 'post',
                dataType: 'json',
                data: {
                    'ord_details_id': odid,
                    'fakeOrderStatus': fakeOrderStatus,
                    'disputeId': disputeId,
                    'specialRequestId': specialRequestId,
                    'pageListing': pageListing,
                    'trigger_from_page': _triggerfrompage
                },
            });
            ajax.done(function(response) {
                $(this_obj).data('is_loaded', "1");
                if (response['user_type'] == 2 && response['cancel_button'] == 0) {
                    $('#cancel_order_btn_' + response['order_detail_id']).css("display", "none");
                }
                if (response['status'] == 1) {
                    $(".esta_" + odid).replaceWith(response['eta']);
                    $(".proceessing_time_" + odid).html(response['processing_time']);
                    $(".fulfill_by_" + odid).replaceWith(response['FulfilledBy']);
                    $(".tracking_number_box_" + odid).html(response['tracking_number_list']);
                    $(".tracking_url_box_" + odid).html(response['addhtml']);
                    $(".tracking_update_box_" + odid).html(response['getTrackingUpdate']);
                    //$('.order_mapping_item_'+odid).html(response['order_mapping_items']);
                    $(".local_number_box_" + odid).html(response['localTrackingNumber']);
                    $(".use_in_chat_" + odid).replaceWith(response['showUseInChat']);
                    $(this_obj).parents('.table_list_item').find(".order_mapping_item_" + odid).html(response['order_mapping_items']);

                    $(".dispute_history_" + odid).html(response['disputehistory']);
                    $('.discountRefund_' + odid).attr("style", response['discountOption']);
                } else {
                    $('#error_modal').modal('show');
                    $(".spinner-border").remove();
                    $(".error_modal_body").find('.content').text(response['getTrackingUpdate']);
                    $(".error_modal_body").find('.icon_message').html('<i class="fas fa-ban"></i>');
                    setTimeout(function() {
                        $('#error_modal').modal('hide');
                    }, 6000);
                }
            });
        }

        if ($(this).hasClass('expandactive')) {
            $(target).removeClass(target_class);
            $(this).removeClass('expandactive');
            $(this).parent().find('.js_table_expand').html('See more <i class="fas fa-angle-down"></i>');
            $('.order_stack_items_' + odid).removeClass('d-none');
            $(this).parent().parent('.multiple_order_items').addClass('mb-0');

        } else {
            $(target).addClass(target_class);
            $(this).addClass('expandactive');
            $(this).parent().find('.js_table_expand').html('See less <i class="fas fa-angle-up"></i>');
            $('.order_stack_items_' + odid).addClass('d-none');
            $(this).parent().parent('.multiple_order_items').removeClass('mb-0');
        }
    });
}

$(document).on('change', '.dropdownTrackingNumber', function() {
    var val = $(this).val();
    var odid = $(this).data('odid');

    var autoFullfillmentOrder = $(this).find(':selected').data('autofullfilment');
    var orderDetailMappingid = $(this).find(':selected').data('ordermappingid');
    $(this).parents('.border_divs').find('.tracking_update_box_' + odid).html('<center><div class="spinner-border text-center text-dark" role="status"><span class="sr-only">Loading...</span></div></center>');
    if (autoFullfillmentOrder == 1) {
        var url = name.goToTrackingPageURL + val + '&fc=100479';
    } else {
        var url = name.goToTrackingPageURL + val;
    }
    url += getDynamicFcParameter(val);
    var data = '<div class="tracking_url_box_' + odid + '">';
    data += '<a href="' + url + '" target="_blank">' + name.goTrackingPage + ' <i class="fas fa-angle-right"></i></a>';
    data += '</div>';
    $(".tracking_url_box_" + odid).html(data);
    var is_loaded = $(this).data('is_loaded');
    let token = document.querySelector('meta[name=token]').content;
    $.ajax({
        type: 'get',
        url: '/change-tracking-info/' + token,
        data: {
            'id': odid,
            'awb_number': val,
            'autoFullfillmentOrder': autoFullfillmentOrder,
            'orderDetailMappingid': orderDetailMappingid
        },
        success: function(data) {
            response = $.parseJSON(data);
            if (response.status == 1) {
                $(".tracking_update_box_" + odid).html(response.getTrackingUpdate);
                $(".proceessing_time_" + odid).html(response.processing_time);
                $('.local_number_box_' + odid).html(response.localTrackingNumber);

            } else if (response.status == 0) {
                $(".tracking_update_box_" + odid).html(response.trackingInfo);
            }
        }
    });
});

function getDynamicFcParameter(trackingNumber) {
    trackingNumber = trackingNumber.toLowerCase();
    const trackingNumberPrefixMap = [{
            prefix: '1750',
            value: '&fc=190815'
        },
        // { prefix: 'SP00000', value: '&fc=190769' },
        {
            prefix: ['SP00000', 'SPT0000'],
            value: '&fc=190769'
        },
        {
            prefix: ['10', 'Q10', 'Q1', '3A'],
            value: '&fc=190208'
        },
        {
            prefix: 'SP',
            value: '&fc=100479'
        },
        {
            prefix: ['LB', 'LD', 'LE'],
            value: '&fc=2063'
        },
        {
            prefix: ['YT', '143'],
            value: '&fc=190008'
        },
        {
            prefix: 'SPT',
            value: '&fc=190823'
        },
        {
            prefix: 'FSK',
            value: '&fc=100466'
        },
        {
            prefix: '3SAL',
            value: '&fc=190271'
        },
        {
            prefix: ['JV', '3S'],
            value: '&fc=100047'
        },
        {
            prefix: '30',
            value: '&fc=190094'
        },
        {
            prefix: 'SY',
            value: '&fc=190072'
        },
        {
            prefix: 'WN',
            value: '&fc=190086'
        },
        {
            prefix: 'Q0',
            value: '&fc=100027'
        },
        {
            prefix: 'UH',
            value: '&fc=190012'
        },
        {
            prefix: ['LT', 'LS'],
            value: '&fc=14044'
        },
        {
            prefix: 'LV',
            value: '&fc=3011'
        },
        {
            prefix: '14',
            value: '&fc=190008'
        },
        {
            prefix: '00',
            value: '&fc=7041'
        },
        {
            prefix: ['01', '06'],
            value: '&fc=100007'
        },
        {
            prefix: 'AG',
            value: '&fc=3011'
        },
        {
            prefix: 'DE',
            value: '&fc=100295'
        },
        {
            prefix: ['DYEN', 'DYSB'],
            value: '&fc=190085'
        },
        {
            prefix: 'DY',
            value: '&fc=190208'
        },
        {
            prefix: 'EQ',
            value: '&fc=190136'
        },
        {
            prefix: 'H1',
            value: '&fc=100031'
        },
        {
            prefix: ['SU', '50', 'Z1', 'Z2', 'Z3', 'Z4'],
            value: '&fc=190111'
        },
        {
            prefix: 'VR',
            value: '&fc=190012'
        },
        {
            prefix: 'HHWNO',
            value: '&fc=190008'
        },
        {
            prefix: ['LR', 'LW', 'NLEXP', 'T6'],
            value: '&fc=190271'
        },
        {
            prefix: 'HHWP',
            value: '&fc=190003'
        },
    ];

    for (const item of trackingNumberPrefixMap) {
        if (Array.isArray(item.prefix)) {
            for (const prefix of item.prefix) {
                if (trackingNumber.startsWith(prefix.toLowerCase())) {
                    return item.value;
                }
            }
        } else {
            if (trackingNumber.startsWith((item.prefix).toLowerCase())) {
                return item.value;
            }
        }
    }
    return '';
}

// $(".btn:not(.daterange-btn)").click(function(){
$(".btn:not(.daterange-btn):not(.deleteRequest):not(.special_request_cancel)").click(function() {
    var val = $(this).val();
    var selectedTab = $('.selected').data('value');
    //var disputeRequestsApproved = $('.dispute_requests_approved.selected').data('type');
    //var disputeRequestsDeclined = $('.dispute_requests_declined.selected').data('type');
    $('.btn').removeClass('selected');
    $(this).addClass('selected');
    if (selectedTab == 1) {

        $('#closeDispute').addClass('showselect');


    } else if (selectedTab == 0) {

        $('#openDispute').addClass('showselect');

    }
    $('.selectedVal').val(val);

    /*if(disputeRequestsApproved == "approved"){
    	$('.dispute_requests_approved').addClass('selected'); 
    }else if(disputeRequestsApproved == "approved"){
    	$('.dispute_requests_approved').addClass('selected'); 
    }	
    alert(selectedTab);
    alert(disputeRequestsApproved);
    alert(disputeRequestsDeclined);*/
});

$(function() {
    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye-slash fa-eye");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
});

/*Validation for phone number*/
$(document).ready(function() {
    $("input[type=numeric]").keypress(function(event) {
        if ((event.which < 32) || (event.which > 126)) return true;
        return jQuery.isNumeric($(this).val() + String.fromCharCode(event.which));
    }); // numeric.keypress;
});
/* Add greetings in dashboard	*/
$(function() {
    var welcome;
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (hour < 12) {
        welcome = wishTitleArr.goodMorning;
    } else if (hour < 17) {
        welcome = wishTitleArr.goodAfternoon;
    } else {
        welcome = wishTitleArr.goodEvening;
    }
    $(".wishes span").append(welcome);
});

/*upload file show name*/
$('#validatedCustomFile').on('change', function() {
    //get the file name
    var fileName = document.getElementById("validatedCustomFile").files[0].name;
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').find(".fileName").html(fileName);
});

$(document).on('change', '.validatedCustomFile', function() {
    //get the file name
    var fileName = this.files[0].name;
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').find(".fileName").html(fileName);
});

$(".linkactive").click(function() {
    // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
    if ($(this).hasClass("active")) {
        $(".linkactive").removeClass("active");
    }
    // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
    else {
        $(".linkactive").removeClass("active");
        $(this).addClass("active");
    }
});

function createTime(time_end) {
    var time_left_to_display = '';
    const sec = parseInt(time_end, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    time_left_to_display = hours + ':' + minutes + ':' + seconds; // Return is HH : MM : SS
    return time_left_to_display;
}

function setQuotationBidTimeLeft_new(obj) {
    var time_end = $(obj).data('time_end');
    var is_pause_time = $(obj).data('is_pause_time');
    var time_start_after = $(obj).data('time_start_after');

    if (is_pause_time == 1) {
        // temp_time_end = parseInt(time_end) - 86400;
        temp_time_end = parseInt(time_end);
        time_start_after = parseInt(time_start_after) - 1;
        $(obj).data('time_start_after', time_start_after);

        if (time_start_after <= 0) {
            $(obj).data('is_pause_time', 0);
        }

        if (temp_time_end <= 0) {
            time_left_to_display = "00:00:00";
        } else {
            time_left_to_display = createTime(temp_time_end);
        }

        $(obj).html(time_left_to_display);
    } else {
        if (time_end > 0) {
            //console.log("else if");
            time_end = parseInt(time_end) - 1;
            $(obj).data('time_end', time_end);
            //console.log(time_end);
            time_left_to_display = createTime(time_end);

            $(obj).html(time_left_to_display);
        } else {
            //console.log("else");
            $(obj).html("00:00:00");
        }
    }
}

function iniQuotationBidTimeLeft() {
    $(".quotation_bid_time_left_new").each(function() {
        var obj = this;
        var is_pause_time = $(obj).data('is_pause_time');
        var pid = $(obj).data('pid');
        var temp_var = 'intervalId_' + pid;
        var intervalId = {
            temp_var
        };
        if (is_pause_time == 0 || true) {
            clearTimeout(intervalId);
            intervalId = window.setInterval(function() {
                setQuotationBidTimeLeft_new(obj);
            }, 1000);
        } else {
            setQuotationBidTimeLeft_new(obj);
        }
    })
}

function setQuotationBidTimeLeft(obj) {

    $(obj).html(calculateTime($(obj).data('bposttime'), $(obj).data('bcurrtime')));
    // date_future = new Date(date_future);
    date_now = new Date($(obj).data('bcurrtime'));
    date_now.setSeconds(date_now.getSeconds() + 1);
    $(obj).data('bcurrtime', date_now);
}

function timeDiffCalc(dateFuture, dateNow) {
    // let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    //console.log('calculated days', days);
    // calculate hours
    const hours = parseInt(Math.floor(diffInMilliSeconds / 3600) % 24);
    diffInMilliSeconds -= hours * 3600;
    // console.log('calculated hours', hours);

    // calculate minutes
    const minutes = parseInt(Math.floor(diffInMilliSeconds / 60) % 60);
    diffInMilliSeconds -= minutes * 60;

    // calculate minutes
    const seconds = parseInt(diffInMilliSeconds); // = //Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= seconds * 60;
    // console.log('seconds', seconds);

    let difference = '';
    if (days > 0) {
        difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;
    difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`;
    difference += (seconds === 0 || hours === 1) ? `${seconds} seconds` : `${seconds} seconds`;

    return difference;
}

function calculateTime(date_future, date_now) {
    date_future = new Date(date_future);
    date_now = new Date(date_now);
    //console.log("date_now : " + date_now);

    //return false;

    seconds = Math.floor((date_future - (date_now)) / 1000);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

    //$(".time").text("Time until new year:\nDays: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds);
    return ("Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds);
}

$(function() {
    return false;
    date_future = new Date(new Date().getFullYear() + 1, 0, 1);
    date_now = new Date();

    //console.log("date_future : " + date_future);
    //console.log("date_now : " + date_now);

    seconds = Math.floor((date_future - (date_now)) / 1000);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    days = Math.floor(hours / 24);
    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    $(".time").text("Time until new year:\nDays: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds);
});

// Parsley storng password validations.

//has uppercase
window.Parsley.addValidator('uppercase', {
    requirementType: 'number',
    validateString: function(value, requirement) {
        var uppercases = value.match(/[A-Z]/g) || [];
        return uppercases.length >= requirement;
    },

});

//has lowercase
window.Parsley.addValidator('lowercase', {
    requirementType: 'number',
    validateString: function(value, requirement) {
        var lowecases = value.match(/[a-z]/g) || [];
        return lowecases.length >= requirement;
    },

});

//has number
window.Parsley.addValidator('number', {
    requirementType: 'number',
    validateString: function(value, requirement) {
        var numbers = value.match(/[0-9]/g) || [];
        return numbers.length >= requirement;
    },

});

//has special char
window.Parsley.addValidator('special', {
    requirementType: 'number',
    validateString: function(value, requirement) {
        var specials = value.match(/[^a-zA-Z0-9]/g) || [];
        return specials.length >= requirement;
    },
});

function deleteStoreConfirm(id) {

    $("#deleteStoreConfirmatiom_Modal").modal('show');
    $('#del_store').attr("data-id", id);
}

function deleteStoreData(key = null, acc = null, uid = null) {

    var stroeID = $('#del_store').data('id');
    let token = document.querySelector('meta[name=token]').content;
    $("#spinner-loader-container").fadeIn();
    $.ajax({
        type: 'post',
        url: '/delete-store/' + token,
        data: {
            'id': stroeID
        },
        success: function(data) {
            result = $.parseJSON(data);
            if (result['type'] == "error") {

                $("#spinner-loader-container").fadeOut();
                $('#deleteStoreConfirmatiom_Modal').modal('hide');
                $("#h6").replaceWith(
                    '<h6 id="h6" >' + result['message'] + "</h6>"
                );
                $("#cancel_modal").modal('show');
                setTimeout(function() {
                    $('#cancel_modal').modal('hide');
                }, 5000);

            } else if (result['type'] == "success") {

                $("#spinner-loader-container").fadeOut();
                $('#deleteStoreConfirmatiom_Modal').modal('hide');
                $("#success_modal").modal('show');
                setTimeout(function() {
                    $('#success_modal').modal('hide');
                    if (key == 'by_Admin') {

                        var str = "/client-details/" + token + "/" + acc + "/" + uid;

                    } else if (key == 'by_teamlead') {
                        var str = "/client-detail/" + token + "/" + acc + "/" + uid;

                    } else {
                        var str = "/stores/" + token;

                    }
                    window.location.replace(str)
                }, 5000);
            }
        }
    });
}

function storeList() {
    let token = document.querySelector('meta[name=token]').content;
    var str = "/stores/" + token;
    window.location.replace(str)
}

$(document).ajaxComplete(function(event, xhr, options) {
    if (xhr.responseText == 'session_out') {
        window.location.href = window.location.origin;
    }
    lazyLoadImages();
});

$(document).ajaxError(function(e, xhr, opt) {
    if (typeof xhr != 'undefined' && xhr.status === 403) {
        $("#loading_loder").fadeOut();
        $('#csrf_token_expire_modal').modal('show');
    }
});

$(document).ajaxStop(function() {
    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip()
    }
});

if ($('[data-toggle="tooltip"]').length) {
    $('[data-toggle="tooltip"]').tooltip()
}

function parsleyFileSizeValidation(id) {
    var _inputMaxFileSize = $('input#' + id).data('parsley-max-file-size');
    _inputMaxFileSize = Number(_inputMaxFileSize * 1024);

    window.Parsley.addValidator('maxFileSize', {
        validateString: function(_value, maxSize, parsleyInstance) {
            if (!window.FormData) {
                // alert('You are making all developpers in the world cringe. Upgrade your browser!');
                return true;
            }
            var files = parsleyInstance.$element[0].files;
            maxSize = Number(maxSize * 1024);
            return files.length != 1 || files[0].size <= maxSize;
        },
        requirementType: 'integer',
        messages: {
            // %s Kb.
            en: scriptLangKeys.fileSizeValidationErrorMessage.replace("#size#", bytesToSize(_inputMaxFileSize))
        }
    });
}

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

/*validate search*/
var _is_input_empty = 1;
var _is_input_previous_value = null;

function inputSearchAjaxIni(obj) {
    // if (_is_input_previous_value === null) {
    //     _is_input_previous_value = obj.value;
    //     return true;
    // }

    if (_is_input_previous_value == obj.value) {
        return false;
    }
    if (_is_input_empty == 1 && obj.value.length == 0) {
        _is_input_previous_value = obj.value;
        _is_input_empty = 0;
        return true;
    } else if (obj.value.length >= 3) {
        _is_input_previous_value = obj.value;
        _is_input_empty = 1;
        return true;
    } else return false;
}

/*validate search for order list with order search*/
/*orderFilterType = 1 means ORDER_FILTER_WITH_MAPPING_ID*/
function inputSearchAjaxIniForOrderList(obj, orderFilterType, accountType) {
    var checkNumericValue = $.isNumeric(obj.value);

    if (_is_input_previous_value == obj.value) {
        return false;
    }

    if (_is_input_empty == 1 && obj.value.length == 0) {
        _is_input_previous_value = obj.value;
        _is_input_empty = 0;
        return true;
    } else if (obj.value.length >= 3 && orderFilterType == 1 && checkNumericValue == false) {
        if (accountType == name.clientUserType || accountType == name.agentSupportUserType || accountType == name.teamleaderUserType) {
            $('#client_orders_body').html(name.orderListNotFound);
            $('#client_orders_pagination').html('');
        } else {
            $('#sup_orders_body').html(name.orderListNotFound);
            $('#sup_orders_pagination').html('');
        }
    } else if (orderFilterType == 1 && obj.value == 0) {
        if (accountType == name.clientUserType || accountType == name.agentSupportUserType || accountType == name.teamleaderUserType) {
            $('#client_orders_body').html(name.orderListNotFound);
            $('#client_orders_pagination').html('');
        } else {
            $('#sup_orders_body').html(name.orderListNotFound);
            $('#sup_orders_pagination').html('');
        }
    } else if (obj.value.length >= 3) {
        _is_input_previous_value = obj.value;
        _is_input_empty = 1;
        return true;
    } else if (orderFilterType == 1 && checkNumericValue == true) {
        _is_input_previous_value = obj.value;
        _is_input_empty = 1;
        return true;
    } else return false;
}

function validateUrl() {
    window.Parsley.addValidator('urlstrict', {
        requirementType: 'string',
        validateString: function(value, requirement, parsleyInstance) {
            var regExp = /^(?:(?:https?):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

            return '' !== value ? regExp.test(value) : false;
        },
        messages: {
            en: scriptLangKeys.urlStrictValidateMessage,
        }
    });
}

function lazyLoadImages() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to a more compatible method here
    }
}

function selectUploadFile() {
    var fileName = document.querySelector('.selectDisputeFile').value;
    var getFileType = $(".selectDisputeFile")[0].files[0].type;
    var getFileSize = $(".selectDisputeFile")[0].files[0].size;
    var imageExtension = ["image/jpeg", "image/jpg", "image/gif", "image/png", "image/webp", "application/pdf", "application/docx", "application/docx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    var videoExtension = ["video/mp4", "video/x-msvideo", "video/x-ms-wmv", "video/mpeg", "video/x-flv", "video/quicktime", "video/webm", "video/3gpp2", "video/mj2", "video/ogg"];
    var getFileSize = Math.round((getFileSize / 1024));
    if ($.inArray(getFileType, imageExtension) !== -1) {
        if (getFileSize > 0 && getFileSize <= fileUploadKeys.maxFilSize) {
            return true;
        } else {
            $(".selectDisputeFile").val("");
            $(".fileName").html('<div class="fileName"></div>');
            $('#error_modal').modal('show');
            $(".small_modal_mod").find('.content').text("" + fileUploadKeys.fileSizeError + "");
            $(".small_modal_mod").find('.icon_message').html('<i class="fas fa-ban"></i>');
            setTimeout(function() {
                $('#error_modal').modal('hide');
            }, 6000);
            return false;
        }
    } else if ($.inArray(getFileType, videoExtension) !== -1) {
        if (getFileSize > 0 && getFileSize <= fileUploadKeys.maxVideoSize) {
            return true;
        } else {
            $(".selectDisputeFile").val("");
            $(".fileName").html('<div class="fileName"></div>');
            $('#error_modal').modal('show');
            $(".small_modal_mod").find('.content').text("" + fileUploadKeys.videoSizeError + "");
            $(".small_modal_mod").find('.icon_message').html('<i class="fas fa-ban"></i>');
            setTimeout(function() {
                $('#error_modal').modal('hide');
            }, 6000);
            return false;

        }
    } else {
        $(".selectDisputeFile").val("");
        $(".fileName").html('<div class="fileName"></div>');
        $('#error_modal').modal('show');
        $(".small_modal_mod").find('.content').text("" + fileUploadKeys.InvalidFile + "");
        $(".small_modal_mod").find('.icon_message').html('<i class="fas fa-ban"></i>');
        setTimeout(function() {
            $('#error_modal').modal('hide');
        }, 6000);
        return false;
    }
};


$(document).on("click", ".cantQuote", function() {
    var productId = $(this).data('pid');
    var quotationRequestId = $(this).data('quotationrequestid');
    $("#cantQuoteConfirmatiom_Modal").modal('show');
    $('#confrim_quote').attr("data-pid", productId).attr("data-qid", quotationRequestId);
})

$(document).on("click", ".cantQuoteConfirm", function() {
    $('.cantQuote').addClass('disabled');
    $("#cantQuoteConfirmatiom_Modal").modal('hide');
    $('.loading_loder').show();
    var productId = $(this).data('pid');
    var quotationRequestId = $(this).data('qid');
    let token = document.querySelector('meta[name=token]').content;

    $.ajax({
        type: 'post',
        url: '/save-product-details/' + token,
        data: {
            'pid': productId,
            'quotationRequestId': quotationRequestId
        },
        dataType: "json",
        success: function(data) {

            $('.loading_loder').hide();

            if (data.status == 1) {

                $('#request_accepted_modal').modal('show');

                setTimeout(function() {
                    $("#request_accepted_modal").modal('hide');

                    var x = "/agent-supplier-products/" + token;
                    window.location.replace(x)
                }, 5000)

            } else if (data.status == 0) {
                $('.cantQuote').reomveClass('disabled');
                $('#request_cancel_modal').modal('show');
                setTimeout(function() {
                    $("#request_cancel_modal").modal('hide');
                    var x = "/agent-supplier-products/" + token;
                    window.location.replace(x)
                }, 10000)
            }
        },

    });
})

function redirectBackTo() {
    let token = document.querySelector('meta[name=token]').content;
    var x = "/agent-supplier-products/" + token;
    window.location.replace(x)
}


$(document).on('click', '.autoTrackingStore', function() {
    //console.log(this);
    let token = document.querySelector('meta[name=token]').content;
    autotracking = 0;
    if ($(this).is(":checked")) {
        autotracking = 1;
    }

    const storeId = $(this).val();
    const accountid = $(this).data('accountid');
    $.ajax({
        type: 'post',
        url: '/activeAutoFullfillmentStore/' + token,
        data: {
            'storeId': storeId,
            'autotracking': autotracking,
            'account_detail_id': accountid,
        },
        success: function(data) {
            data = $.parseJSON(data);
            var msg = data.msg;
            var successmsg = showSuccessAlert(msg);
            // console.log(successmsg);

        }
    });
});

$(document).on('click', '.clientNotification', function() {
    let token = document.querySelector('meta[name=token]').content;

    clientNotification = 0;
    if ($(this).is(":checked")) {
        clientNotification = 1;
    }

    const storeId = $(this).val();

    $.ajax({
        type: 'post',
        url: '/clientnotify/' + token,
        data: {
            'storeId': storeId,
            'clientNotification': clientNotification,
        },
        success: function(data) {
            data = $.parseJSON(data);
            var msg = data.msg;
            var successmsg = showSuccessAlert(msg);
            // console.log(successmsg);
        }
    });
});

function showSuccessAlert(message = "Record updated", is_refresh = 0) {

    var modelId = 'success_modal_' + Date.now();

    var model = "<div id='" + modelId + "' name='auto_fullfilment' class='modal fade bd-example-modal-sm' tabindex='-1'role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'><div class='modal-dialog modal-sm  modal-dialog-centered'> <div class='modal-content'> <div class='modal-header' style='padding:5px 1rem;'> <button type='button' class='close abso__close' data-dismiss='modal' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>   <div class='small_modal_mod'>"
    model += message;
    model += "</div> </div> </div> </div>";
    $("body").append(model);
    $('#' + modelId).modal('show');

    setTimeout(function() {
        $('#' + modelId).modal('hide');
    }, 5000);

    $('#' + modelId).on('hidden.bs.modal', function() {
        $("#" + modelId).remove();
        if (is_refresh == 1) {
            window.location.reload();
        }
    });
}


$(document).on("click", '.expand_abso', function() {
    var $parentDiv = $(this).parent('.border_divs');
    $parentDiv.toggleClass('maximized-card');
    // $(this).find('i').toggleClass('fa-expand fa-compress');
    if ($(this + " .expand_cl").hasClass('fa-compress')) {
        $(this + " .expand_cl").removeClass('fa-compress');
        $(this + " .expand_cl").addClass('fa-expand')
        // $(this + " .expand_cl").attr('title', scriptLangKeys.expand);
        $(this + " .expand_cl").attr('data-original-title', scriptLangKeys.expand);
    } else {
        $(this + " .expand_cl").removeClass('fa-expand');
        $(this + " .expand_cl").addClass('fa-compress');
        // $(this + " .expand_cl").attr('title', scriptLangKeys.compress);
        $(this + " .expand_cl").attr('data-original-title', scriptLangKeys.compress);
    }

    if ($parentDiv.hasClass('maximized-card')) {
        $('body').append('<div class="expand_abso-overlay"></div>');
    } else {
        $('body').find('.expand_abso-overlay').remove();
    }
});


$(document).on("click", '.view_order_properties', function() {
    let token = document.querySelector('meta[name=token]').content;
    $("#spinner-loader-container").fadeIn();
    var id = $(this).data("id");
    $.ajax({
        url: "/get-order-custom-properties/" + token,
        method: "POST",
        data: {
            "id": id
        },
        dataType: "json",
        success: function(res) {
            if (res.status == "undefined") {
                $('#error_modal').modal('show');
                $(".error_modal_body").find('.content').html(scriptLangKeys.ErrorInProcessingPleaseTryAgain);
                setTimeout(function() {
                    $('#error_modal').modal('hide');
                }, 6000);
            } else {
                $(".customOrderProperties").remove();
                $("#spinner-loader-container").hide();
                $("body").append(res.data);
                $('#customOrderProperties').modal('show');
            }
        },
        error: function(res) {
            $("#spinner-loader-container").fadeOut();
            $('#error_modal').modal('show');
            $(".error_modal_body").find('.content').html(scriptLangKeys.ErrorInProcessingPleaseTryAgain);
            setTimeout(function() {
                $('#error_modal').modal('hide');
            }, 6000);
        }
    });
});

// // for countdown

// //var countDownDate = new Date("Aug 21, 2023 15:30:00").getTime();
// var countDownDate = new Date(Date.UTC(2023, 7, 21, 10, 0, 0));



//   // Update the count down every 1 second
//   var x = setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Output the result in an element with id="countdown"
//     document.getElementById("countdown").innerHTML = days + "d : " + hours + "h : "
//     + minutes + "m : " + seconds + "s ";

//     // If the count down is over, write some text 
//     if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("countdown").innerHTML = "EXPIRED";
//     }
// }, );