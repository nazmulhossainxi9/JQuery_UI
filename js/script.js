$(function(){
    // Dgraggable
    $("#draggable").draggable();

    // Drag and Drop 
    $( "#dragg" ).draggable();
    $( "#drop" ).droppable({
      accept: "#dragg",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
            .addClass( "ui-state-highlight" )
            .find( "p" )
            .html( "Dropped!" );
      }
    });

    // Accordion without collapsable
    $( "#accordion" ).accordion();

    // Accordion without collapsable
    $( "#accordion2" ).accordion({
        collapsible: true,
        heightStyle: "content"
    });


    // AutoComplete
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python3",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });
});

// Check Box
$( function() {
    $( "input" ).checkboxradio();
});


// Date Picker 
$( function() {
    $( "#datepicker" ).datepicker();
});

// Drag and Sort 
$( function() {
    $( "#sortable" ).sortable();
});

// Toggle 
$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).toggle( selectedEffect, options, 500 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    });
});