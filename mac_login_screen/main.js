$(document).ready(function() {
    
    $('input').keyup(function() {
        if ($(this).val()) {
            $('.password_label').hide();
        } else {
            $('.password_label').show();
        }
    });
    
    $('input').focus();
    
});
