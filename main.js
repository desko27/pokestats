$(document).ready(function() {

    // call validateNature()
    // 
    // - No `input` event exists on angular2, jQuery has it. We
    //   need it because `keyup` event does not detect when an
    //   option from suggestions dropdown is clicked.
    // 
    // - Minimal timeout is needed for ngClass to notice and update.
    // 
    // - `zone.run()` lets us to run an internal angular component's
    //   method from here.
    // 
    $(document).on('input', '#nature input', function() {
        
        setTimeout(function() {

            window.angularComponentRef.zone.run(() => {
                window.angularComponentRef.component.validateNature();
            });

        }, 5);

    });

});