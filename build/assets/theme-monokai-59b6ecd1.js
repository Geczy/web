import{D as m}from"./index-401d5a59.js";function _(o,n){for(var e=0;e<n.length;e++){const a=n[e];if(typeof a!="string"&&!Array.isArray(a)){for(const c in a)if(c!=="default"&&!(c in o)){const r=Object.getOwnPropertyDescriptor(a,c);r&&Object.defineProperty(o,c,r.get?r:{enumerable:!0,get:()=>a[c]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var t={exports:{}};(function(o,n){ace.define("ace/theme/monokai",["require","exports","module","ace/lib/dom"],function(e,a,c){a.isDark=!0,a.cssClass="ace-monokai",a.cssText=".ace-monokai .ace_gutter {	background: #2F3129;	color: #8F908A	}	.ace-monokai .ace_print-margin {	width: 1px;	background: #555651	}	.ace-monokai {	background-color: #272822;	color: #F8F8F2	}	.ace-monokai .ace_cursor {	color: #F8F8F0	}	.ace-monokai .ace_marker-layer .ace_selection {	background: #49483E	}	.ace-monokai.ace_multiselect .ace_selection.ace_start {	box-shadow: 0 0 3px 0px #272822;	}	.ace-monokai .ace_marker-layer .ace_step {	background: rgb(102, 82, 0)	}	.ace-monokai .ace_marker-layer .ace_bracket {	margin: -1px 0 0 -1px;	border: 1px solid #49483E	}	.ace-monokai .ace_marker-layer .ace_active-line {	background: #202020	}	.ace-monokai .ace_gutter-active-line {	background-color: #272727	}	.ace-monokai .ace_marker-layer .ace_selected-word {	border: 1px solid #49483E	}	.ace-monokai .ace_invisible {	color: #52524d	}	.ace-monokai .ace_entity.ace_name.ace_tag,	.ace-monokai .ace_keyword,	.ace-monokai .ace_meta.ace_tag,	.ace-monokai .ace_storage {	color: #F92672	}	.ace-monokai .ace_punctuation,	.ace-monokai .ace_punctuation.ace_tag {	color: #fff	}	.ace-monokai .ace_constant.ace_character,	.ace-monokai .ace_constant.ace_language,	.ace-monokai .ace_constant.ace_numeric,	.ace-monokai .ace_constant.ace_other {	color: #AE81FF	}	.ace-monokai .ace_invalid {	color: #F8F8F0;	background-color: #F92672	}	.ace-monokai .ace_invalid.ace_deprecated {	color: #F8F8F0;	background-color: #AE81FF	}	.ace-monokai .ace_support.ace_constant,	.ace-monokai .ace_support.ace_function {	color: #66D9EF	}	.ace-monokai .ace_fold {	background-color: #A6E22E;	border-color: #F8F8F2	}	.ace-monokai .ace_storage.ace_type,	.ace-monokai .ace_support.ace_class,	.ace-monokai .ace_support.ace_type {	font-style: italic;	color: #66D9EF	}	.ace-monokai .ace_entity.ace_name.ace_function,	.ace-monokai .ace_entity.ace_other,	.ace-monokai .ace_entity.ace_other.ace_attribute-name,	.ace-monokai .ace_variable {	color: #A6E22E	}	.ace-monokai .ace_variable.ace_parameter {	font-style: italic;	color: #FD971F	}	.ace-monokai .ace_string {	color: #E6DB74	}	.ace-monokai .ace_comment {	color: #75715E	}	.ace-monokai .ace_indent-guide {	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y	}";var r=e("../lib/dom");r.importCssString(a.cssText,a.cssClass,!1)}),function(){ace.require(["ace/theme/monokai"],function(e){o&&(o.exports=e)})}()})(t);var i=t.exports;const k=m(i),s=_({__proto__:null,default:k},[i]);export{s as t};
