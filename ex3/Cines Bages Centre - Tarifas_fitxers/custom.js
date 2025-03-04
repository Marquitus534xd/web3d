jQuery(document).ready(function() {
	jQuery(`li.sp-menu-item a[href*="${window.location.search}"]`).parent().addClass("current-item active")
	jQuery(".button-group .button").click(function () { 
		 jQuery(".button-group .button").removeClass("is-checked");                
		 jQuery(this).addClass("is-checked");        
	});
 });
 
 
 function ressaltarCategoriaActual(num) {
    jQuery('ul.sp-megamenu-parent li[data-id]').removeClass("current active");
    jQuery('ul.sp-megamenu-parent li[data-id="' + num + '"]').addClass("current active");
}