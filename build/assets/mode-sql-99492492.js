import{D as b}from"./index-401d5a59.js";function M(m,k){for(var r=0;r<k.length;r++){const n=k[r];if(typeof n!="string"&&!Array.isArray(n)){for(const c in n)if(c!=="default"&&!(c in m)){const s=Object.getOwnPropertyDescriptor(n,c);s&&Object.defineProperty(m,c,s.get?s:{enumerable:!0,get:()=>n[c]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(m,k){ace.define("ace/mode/sql_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,n,c){var s=r("../lib/oop"),f=r("./text_highlight_rules").TextHighlightRules,h=function(){var p="select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|when|then|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|foreign|not|references|default|null|inner|cross|natural|database|drop|grant|distinct",e="true|false",t="avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl",i="int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|money|real|number|integer",a=this.createKeywordMapper({"support.function":t,keyword:p,"constant.language":e,"storage.type":i},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"comment",start:"/\\*",end:"\\*/"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"string",regex:"`.*?`"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:a,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};s.inherits(h,f),n.SqlHighlightRules=h}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,n,c){var s=r("../../lib/oop"),f=r("../../range").Range,h=r("./fold_mode").FoldMode,p=n.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};s.inherits(p,h),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var a=e.getLine(i);if(this.singleLineBlockCommentRe.test(a)&&!this.startRegionRe.test(a)&&!this.tripleStarBlockCommentRe.test(a))return"";var l=this._getFoldWidgetBase(e,t,i);return!l&&this.startRegionRe.test(a)?"start":l},this.getFoldWidgetRange=function(e,t,i,a){var l=e.getLine(i);if(this.startRegionRe.test(l))return this.getCommentRegionBlock(e,l,i);var o=l.match(this.foldingStartMarker);if(o){var g=o.index;if(o[1])return this.openingBracketBlock(e,o[1],i,g);var d=e.getCommentFoldRange(i,g+o[0].length,1);return d&&!d.isMultiLine()&&(a?d=this.getSectionRange(e,i):t!="all"&&(d=null)),d}if(t!=="markbegin"){var o=l.match(this.foldingStopMarker);if(o){var g=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],i,g):e.getCommentFoldRange(i,g,-1)}}},this.getSectionRange=function(e,t){var i=e.getLine(t),a=i.search(/\S/),l=t,g=i.length;t=t+1;for(var d=t,o=e.getLength();++t<o;){i=e.getLine(t);var v=i.search(/\S/);if(v!==-1){if(a>v)break;var u=this.getFoldWidgetRange(e,"all",t);if(u){if(u.start.row<=l)break;if(u.isMultiLine())t=u.end.row;else if(a==v)break}d=t}}return new f(l,g,d,e.getLine(d).length)},this.getCommentRegionBlock=function(e,t,i){for(var a=t.search(/\s*$/),l=e.getLength(),g=i,d=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++i<l;){t=e.getLine(i);var v=d.exec(t);if(v&&(v[1]?o--:o++,!o))break}var u=i;if(u>g)return new f(g,a,u,t.length)}}.call(p.prototype)}),ace.define("ace/mode/folding/sql",["require","exports","module","ace/lib/oop","ace/mode/folding/cstyle"],function(r,n,c){var s=r("../../lib/oop"),f=r("./cstyle").FoldMode,h=n.FoldMode=function(){};s.inherits(h,f),function(){}.call(h.prototype)}),ace.define("ace/mode/sql",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sql_highlight_rules","ace/mode/folding/sql"],function(r,n,c){var s=r("../lib/oop"),f=r("./text").Mode,h=r("./sql_highlight_rules").SqlHighlightRules,p=r("./folding/sql").FoldMode,e=function(){this.HighlightRules=h,this.foldingRules=new p,this.$behaviour=this.$defaultBehaviour};s.inherits(e,f),function(){this.lineCommentStart="--",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/sql",this.snippetFileId="ace/snippets/sql"}.call(e.prototype),n.Mode=e}),function(){ace.require(["ace/mode/sql"],function(r){m&&(m.exports=r)})}()})(x);var R=x.exports;const y=b(R),F=M({__proto__:null,default:y},[R]);export{F as m};
