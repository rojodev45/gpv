/* ==============================================
 FORMS
 =============================================== */
$(document).ready(function() {
    'use strict';
    $('textarea').each(function(){
            $(this).val($(this).val().trim());
        }
    );
    $('#FormNews input[id=emailnews]').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            if (event.target.checkValidity()) {
                $('#newsletter_recaptcha').modal('show');
            }
            event.preventDefault();
            event.stopPropagation();
        }
    });

    $('#newsletter_recaptcha').on('show.bs.modal', function (event) {
        var modal = $(this)
        var email_news = $('#FormNews input[id=emailnews]').val();
        if(email_news.length == 0){
            alert("Please enter Email in newsletter box");
            return false;
        }
        modal.find('.modal-body input[id=modal_emailnews]').val(email_news)
    });
    $('#newsletter_recaptcha').on('hide.bs.modal', function (event) {
        var modal = $(this);
        //modal.find('.modal-body input[id=nom]').val('');
        modal.find('.modal-body input[id=emailnews]').val('');
    });
    // FOOTER Newsletter
    $('form#FormNews').validate({
        submitHandler: function(form) {
            var gcres = grecaptcha.getResponse(0);
            if(gcres.length == 0){
                alert("Merci de confirmer que vous n'êtes pas un robot");
                return false;
            }
            $('#newsletter_recaptcha').modal('hide');
            jQuery(form).ajaxSubmit({
                type: "POST",
                url: "/crm/subscribeme",
                data:{
                    contact_name: ' ',
                    email_from:$('#emailnews').val(),
                    website:$('#website').val(),
                    name:"Inscription emailing [Footer]",
                    description:"Inscription emailing [" + $('#emailnews').val() + "]",
                    gres: gcres,
                },
                //target: "#resultNewsletter",
                success: function(data){
                    grecaptcha.reset();
                    $('#modal_newsletter_subscribe').modal('show');
                    $('#FormNews').val('');
                    $('#emailnews').val('');
                }
            });
        }
    });

    // FOOTER Message
    $('form#contact-us').validate({
        submitHandler: function(form) {
            var gcres = grecaptcha.getResponse(1);
            if(gcres.length == 0){
                alert("Merci de confirmer que vous n'êtes pas un robot");
                return false;
            }
            jQuery(form).ajaxSubmit({

                type: "POST",
                url: "/crm/contactus",
                data:{
                    website:$('#website').val(),
                    contact_name:$('#footerInputName').val(),
                    email_from:$('#footerInputEmail').val(),
                    name:"Message [Footer]",
                    description:$('#footerInputMess').val(),
                    gres: gcres
                    //             phone:$('#telephone').val(),
                },
                success: function(){
                    window.location.href='/confirmation-contact?email='+ $('#footerInputEmail').val();
                }


            });
        }
    });


    // PAGE contact
    $('form#contact-us-page').validate({
        submitHandler: function(form) {
            jQuery(form).ajaxSubmit({

                type: "POST",
                url: "/crm/contactus",
                data:{
                    website:$('#website').val(),
                    contact_name:$('#nom').val(),
                    email_from:$('#email').val(),
                    name:"Demande de contact",
                    description:$('#message').val(),
                    phone:$('#telephone').val(),
                    request_subscribe : 1
                },
                success: function(){
                    window.location.href='/confirmation-contact?email='+ $('form#contact-us-page input#email').val();
                },
                error: function() {
                    $('form#contact-us-page #result').html('<p class="error">Une erreur est survenue lors de l\'envoi de votre message, veuillez r&eacute;essayer plus tard.<p>');
                }


            });
        }
    });

    // PAGE devis
    $('form#demande-de-devis').validate({
        submitHandler: function(form) {


            var selected_destinations = '';
            $.each($('#destination').val(),function(index, value){
                selected_destinations += value + ', ';
            } );

            var date_depart = $('#date_depart').val();
            if(date_depart){
                // date_depart = date_depart.substr(6, 4) + "-" + date_depart.substr(0, 2) + "-" + date_depart.substr(3, 2);
                date_depart = date_depart.substr(6, 4) + "-" + date_depart.substr(3, 2) + "-" + date_depart.substr(0, 2);
                $('#date_depart').val(date_depart);
            }

            $('#date_flexible').val(($('#date_flexible').is(':checked') ? 1 : 0));
            $('#vol_inclus').val(($('#vol_inclus').is(':checked') ? 1 : 0));
            var  vals = {
                /*champs natifs*/
                contact_name:$('#prenom').val()+'  ' +$('#nom').val(),
                email_from:$('#email').val(),
                name:"Demande de devis",
                description: ($('#desc_projet').val() != "" ? $('#desc_projet').val() : " "),

                /*champs custom*/
                destination : selected_destinations,
                titre_circuit : $('#titre_circuit').text(),
                website : $('#website').val(),
                date_flexible : $('#date_flexible').val(),
                vols_inclus : $('#vol_inclus').val(),
                duree : $('#duree').val(),
                budget : $('#budget').val(),
                nb_adulte : $('#nb_adulte').val(),
                nb_enfant : $('#nb_enfant').val(),
                nb_golfeurs : $('#nb_golfeurs').val(),
                nb_non_golfeurs : $('#nb_non_golfeurs').val(),
                desc_projet : ($('#desc_projet').val() != "" ? $('#desc_projet').val() : " "),
                civilite : $('#civilite').val(),
                prenom: $('#prenom').val(),
                nom : $('#nom').val(),
                street: $('#adresse').val(),
                zip : $('#code_postal').val(),
                city : $('#ville').val(),
                pays : $('#pays').val(),
                phone : $('#telephone').val(),
                request_subscribe : 1
            };

            if(date_depart){
                vals['date_depart'] = date_depart;
            }

            jQuery(form).ajaxSubmit({
                type: "POST",
                url: "/crm/contactus",
                data:vals,
                success: function(){
                    window.location.href='/confirmation-devis?email='+$('input#email').val();
                },
                error: function() {
                    $('form#demande-de-devis #result').html('<p class="error">Une erreur est survenue lors de l\'envoi de votre demande, veuillez r&eacute;essayer plus tard.<p>');
                }
            });
        }
    });

    // PAGE newsletter
    $('form#newsletterpage').validate({
        submitHandler: function(form) {
            jQuery(form).ajaxSubmit({
                type: "POST",
                url: "/crm/subscribeme",
                data:{
                    website:$('#website').val(),
                    contact_name: ' ',
                    email_from:$('#email').val(),
                    name:"Inscription emailing",
                    description:"Inscription emailing [" + $('#email').val() + "]"
                },
                success: function(){
                    $('form#newsletterpage').html('<a href="/" class="form-btn ">Retour &agrave; la page d\'accueil</a> ');
                },
                error: function() {
                    $('form#newsletterpage #result').html('<p class="error">Une erreur est survenue lors de votre inscription, veuillez r&eacute;essayer plus tard.<p>');
                }
            });
        }
    });

    $('form#newsletterpage #newsletterCancel').click(function(){
        $('form#newsletterpage').html('<a href="/" class="form-btn ">Retour &agrave; la page d\'accueil</a> ');
    });
});
