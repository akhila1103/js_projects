$(document).ready(function(){
    $('.repeater').repeater({
        initiEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
        },
        isFirstItemUndeletable: true
    })
})