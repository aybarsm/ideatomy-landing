$(document).ready(function() {
    var rowRtr=$('#row-contact-form-return');
    var btnSub=$('#valid-form');
    const optionsNotify={'position': 'top center', 'clickToHide': true, 'autoHide': false};

    $.notify.addStyle('iamsg', {
        html: "<div><span data-notify-html/></div>",
        classes: {
          base: {
            // 'white-space': 'nowrap',
            'opacity': '0.75',
            'padding': '5px',
            'border-radius': '10px',
            'text-align': 'left',
            'font-size': $("body").css('font-size'),
            'width': btnSub.width() + 'px',
          },
          success: {
            'background-color': '#089c05',
          },
          error: {
            'background-color': '#ff3d3d',
          },
        }
      });

    function contactFormReturn(success, message){
        btnSub.notify(message, {...{'style': 'iamsg', 'className': success ? 'success' : 'error'}, ...optionsNotify});
        if (!success) return;
        $('input[name=fullname]').val('');
        $('input[name=email]').val('');
        $('textarea[name=message]').val('');
    }

    $("#contact-form [type='submit']").click(function(e) {
        e.preventDefault();
        
        const fullname = $('input[name=fullname]').val();
        const email = $('input[name=email]').val();
        const message = $('textarea[name=message]').val();
       
        const data = {'fullname':fullname, 'email':email, 'message':message, 'recaptcharesponse': grecaptcha.getResponse()};
       
        $.post('php/sendMessage.php', data, function(response){
            contactFormReturn(response.success, response.message);
            grecaptcha.reset();
        }, 'json');

    });
   
});