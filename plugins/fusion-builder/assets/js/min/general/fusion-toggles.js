!function(n){"use strict";n.fn.fusionSwitchAccordionOnLinkClick=function(i){var e;(e=i||("#_"===document.location.hash.substring(0,2)?document.location.hash.replace("#_","#"):document.location.hash))&&n(this).find('.panel-title a[href="'+e+'"]').length&&n(this).find('.panel-title a[href="'+e+'"]').fusionAccordionDoClick(!0)},n.fn.fusionAccordionDoClick=function(i){var e,a,t,o;n(this).closest(".fusion-accordian").find(".toggle-fadein").length&&n(this).closest(".fusion-accordian").find(".toggle-fadein")[0]!==n(this).closest(".fusion-panel").find(".panel-collapse")[0]||!0!==window.fusionAccordianClick&&(window.fusionAccordianClick=!0,e=n(this),a=n(n(this).data("target")).find(".panel-body"),t=e.closest(".fusion-accordian").find(".panel-title a"),o=e.closest(".fusion-accordian").find(".panel-collapse.in"),i&&"true"!==e.attr("aria-expanded")&&(void 0!==e.data("parent")&&o.removeClass("in"),a.parent().addClass("in")),"false"===e.attr("aria-expanded")?(void 0!==e.data("parent")&&t.attr("aria-expanded","false"),e.attr("aria-expanded","true")):e.attr("aria-expanded","false"),e.hasClass("collapsed")?(void 0!==e.data("parent")?t.removeClass("active"):e.removeClass("active"),e.closest(".fusion-fullwidth").hasClass("fusion-equal-height-columns")&&setTimeout(function(){window.dispatchEvent(new Event("fusion-resize-horizontal",{bubbles:!0,cancelable:!0}))},350)):(void 0!==e.data("parent")&&t.removeClass("active"),e.addClass("active"),setTimeout(function(){n(window).trigger("fusion-dynamic-content-render",a),n(window).trigger("fusion-resize-vertical"),n(window).trigger("resize")},350)),window.fusionAccordianClick=!1)}}(jQuery),jQuery(window).on("load",function(){var n=jQuery(".fusion-accordian");jQuery(".fusion-toggle-boxed-mode .panel-collapse").on("click",function(n){jQuery(n.target).is("a")||jQuery(n.target).is("button")||jQuery(n.target).hasClass("fusion-button-text")||jQuery(this).closest(".fusion-panel").find(".panel-title > a").trigger("click")}),window.fusionAccordianClick=!1,n.each(function(){jQuery(this).fusionSwitchAccordionOnLinkClick()}),jQuery(document).on("click dblclick",".fusion-accordian .panel-title a",function(n){n.preventDefault(),jQuery(n.currentTarget).fusionAccordionDoClick()})}),jQuery(document).ready(function(){jQuery(".fusion-accordian .panel-title a").on("click",function(n){n.preventDefault()})});