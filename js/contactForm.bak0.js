$(document).ready(function() {
    $.notify.addStyle('iamsg', {
        html: "<div><span data-notify-text/></div>",
        classes: {
          base: {
            'white-space': 'nowrap',
            'opacity': '0.85',
            'padding': '5px',
            'border-radius': '10px',
          },
          success: {
            'background-color': '#089c05',
          },
          error: {
            'background-color': '#ff3d3d',
          },
        }
      });
    const optionsNotify={'position': 'top center', 'clickToHide': true, 'autoHide': false};

    function contactFormReturn(success, message){
        var rowRtr=$('#row-contact-form-return');
        var btnSub=$('#valid-form');
        $('#message-contact-form-return').html(message);
        rowRtr.removeClass(success ? 'msg-error' : 'msg-success').addClass(success ? 'msg-success' : 'msg-error');
        if (success){
            $('input[name=fullname]').val('');
            $('input[name=email]').val('');
            $('textarea[name=message]').val('');
        }
        btnSub.notify('Hello Box', {...{'style': 'iamsg', 'className': 'success'}, ...optionsNotify});
        return rowRtr.removeClass('d-none');
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