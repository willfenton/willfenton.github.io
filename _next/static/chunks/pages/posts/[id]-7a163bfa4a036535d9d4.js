_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var i=a(n("q1tI")),o=n("elyg"),u=n("nOHt"),s=n("vNVm"),c={};function l(e,t,n,r){if((0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),a=n&&n.pathname||"/",d=i.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),i=n[0],u=n[1];return{href:i,as:e.as?(0,o.resolveHref)(a,e.as):u||i}}),[a,e.href,e.as]),f=d.href,h=d.as,m=e.children,g=e.replace,w=e.shallow,v=e.scroll,p=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=i.Children.only(m),y=b&&"object"===typeof b&&b.ref,T=(0,s.useIntersection)({rootMargin:"200px"}),C=r(T,2),x=C[0],M=C[1],D=i.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,i.useEffect)((function(){var e=M&&t&&(0,o.isLocalURL)(f),r="undefined"!==typeof p?p:n&&n.locale,a=c[f+"%"+h+(r?"%"+r:"")];e&&!a&&l(n,f,h,{locale:r})}),[h,f,M,p,t,n]);var N={ref:D,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,u,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:i,locale:s}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,f,h,g,w,v,p)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),l(n,f,h,{priority:!0}))}};return(e.passHref||"a"===b.type&&!("href"in b.props))&&(N.href=(0,o.addBasePath)((0,o.addLocale)(h,"undefined"!==typeof p?p:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(b,N)};t.default=d},u7QL:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return De})),n.d(t,"default",(function(){return Ne}));var r=n("q1tI"),a=n.n(r),i=n("8Kt/"),o=n.n(i),u=n("YFqc"),s=n.n(u),c=n("7O5W"),l=n("8tEE"),d=n("wHSu"),f=n("IP2g"),h=a.a.createElement;c.b.add(l.a,l.b,d.b,d.a);function m(e){var t=e.children,n=e.home;return h("div",{className:"w-full h-screen bg-gray-100"},h(o.a,null,h("meta",{name:"description",content:"My personal website"}),h("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon/favicon-96x96.png"}),h("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),h("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),h("style",null,"body { --tw-bg-opacity: 1; background-color: rgba(243, 244, 246, var(--tw-bg-opacity));; }")),h("header",null,n?h(a.a.Fragment,null,h("div",{className:"flex flex-col"},h("div",{className:"bg-black mx-auto p-6 m-12 rounded-2xl flex flex-col"},h("div",{className:"mx-auto inline-flex flex-row flex-shrink-0 items-center"},h("img",{className:"w-52 h-52 flex-none rounded-full",src:"/images/profile.jpg",alt:"Will Fenton"}),h("div",{className:"p-6 space-y-2"},h("h1",{className:"text-6xl font-semibold tracking-tight text-white"},"Will Fenton"),h("h2",{className:"text-4xl text-gray-200"},"Software Developer"))),h("div",{className:"mx-auto mt=4 inline-flex flex-row flex-shrink-0 items-center space-x-2"},h("a",{href:"https://github.com/willfenton"},h(f.a,{className:"w-8 h-8 text-white",icon:["fab","github"]})),h("a",{href:"https://www.linkedin.com/in/will-fenton-b155281a2/"},h(f.a,{className:"w-8 h-8 text-white",icon:["fab","linkedin"]})),h("a",{href:"/will-fenton-resume.pdf"},h(f.a,{className:"w-8 h-8 text-white",icon:["fas","file-pdf"]})),h("button",{onClick:function(){window.prompt("Copy to clipboard: Ctrl+C, Enter","willfenton14@gmail.com")},onKeyDown:function(){window.prompt("Copy to clipboard: Ctrl+C, Enter","willfenton14@gmail.com")}},h(f.a,{className:"w-8 h-8 text-white",icon:["fas","envelope"]})))))):h(a.a.Fragment,null,h(s.a,{href:"/"},h("a",null,h("img",{src:"/images/profile.jpg",alt:"Will Fenton"}))),h("h2",null,h(s.a,{href:"/"},h("a",null,"Will Fenton"))))),h("main",null,t),!n&&h("div",null,h(s.a,{href:"/"},h("a",null,"\u2190 Back to home"))))}function g(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}var v={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},p=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,b=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,y=/^([+-])(\d{2})(?::?(\d{2}))?$/;function T(e){var t,n={},r=e.split(v.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],v.timeZoneDelimiter.test(n.date)&&(n.date=e.split(v.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=v.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function C(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function x(e,t){if(null===t)return null;var n=e.match(p);if(!n)return null;var r=!!n[4],a=M(n[1]),i=M(n[2])-1,o=M(n[3]),u=M(n[4]),s=M(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,u,s):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(U[t]||(P(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(P(e)?366:365)}(t,a)?(c.setUTCFullYear(t,i,Math.max(a,o)),c):new Date(NaN)}function M(e){return e?parseInt(e):1}function D(e){var t=e.match(b);if(!t)return null;var n=N(t[1]),r=N(t[2]),a=N(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?36e5*n+6e4*r+1e3*a:NaN}function N(e){return e&&parseFloat(e.replace(",","."))||0}function k(e){if("Z"===e)return 0;var t=e.match(y);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(36e5*r+6e4*a):NaN}var U=[31,null,31,30,31,30,31,31,30,31,30,31];function P(e){return e%400===0||e%4===0&&e%100}function S(e){w(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function E(e){w(1,arguments);var t=S(e);return!isNaN(t)}var W={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var O={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},q={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function L(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function z(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(l,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(l,(function(e){return e.test(c)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var F,H={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"===typeof W[e]?W[e]:1===t?W[e].one:W[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:O,formatRelative:function(e,t,n,r){return q[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:L({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:L({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:L({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:L({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:L({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(F={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(F.matchPattern);if(!a)return null;var i=a[0],o=n.match(F.parsePattern);if(!o)return null;var u=F.valueCallback?F.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function j(e,t){w(2,arguments);var n=S(e).getTime(),r=g(t);return new Date(n+r)}function _(e,t){w(2,arguments);var n=g(t);return j(e,-n)}function X(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var Q={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return X("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):X(n+1,2)},d:function(e,t){return X(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return X(e.getUTCHours()%12||12,t.length)},H:function(e,t){return X(e.getUTCHours(),t.length)},m:function(e,t){return X(e.getUTCMinutes(),t.length)},s:function(e,t){return X(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return X(Math.floor(r*Math.pow(10,n-3)),t.length)}};function R(e){w(1,arguments);var t=1,n=S(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function G(e){w(1,arguments);var t=S(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=R(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=R(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function B(e){w(1,arguments);var t=G(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=R(n);return r}function I(e,t){w(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:g(a),o=null==n.weekStartsOn?i:g(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=S(e),s=u.getUTCDay(),c=(s<o?7:0)+s-o;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function A(e,t){w(1,arguments);var n=S(e,t),r=n.getUTCFullYear(),a=t||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:g(o),s=null==a.firstWeekContainsDate?u:g(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var l=I(c,t),d=new Date(0);d.setUTCFullYear(r,0,s),d.setUTCHours(0,0,0,0);var f=I(d,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function J(e,t){w(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:g(a),o=null==n.firstWeekContainsDate?i:g(n.firstWeekContainsDate),u=A(e,t),s=new Date(0);s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0);var c=I(s,t);return c}var K="midnight",Z="noon",$="morning",V="afternoon",ee="evening",te="night";function ne(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+X(i,2)}function re(e,t){return e%60===0?(e>0?"-":"+")+X(Math.abs(e)/60,2):ae(e,t)}function ae(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+X(Math.floor(a/60),2)+n+X(a%60,2)}var ie={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return Q.y(e,t)},Y:function(e,t,n,r){var a=A(e,r),i=a>0?a:1-a;return"YY"===t?X(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):X(i,t.length)},R:function(e,t){return X(G(e),t.length)},u:function(e,t){return X(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return X(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return X(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return Q.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return X(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){w(1,arguments);var n=S(e),r=I(n,t).getTime()-J(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):X(a,t.length)},I:function(e,t,n){var r=function(e){w(1,arguments);var t=S(e),n=R(t).getTime()-B(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):X(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):Q.d(e,t)},D:function(e,t,n){var r=function(e){w(1,arguments);var t=S(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):X(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return X(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return X(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return X(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?Z:0===a?K:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?ee:a>=12?V:a>=4?$:te,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Q.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Q.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):X(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):X(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Q.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Q.s(e,t)},S:function(e,t){return Q.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return re(a);case"XXXX":case"XX":return ae(a);case"XXXXX":case"XXX":default:return ae(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return re(a);case"xxxx":case"xx":return ae(a);case"xxxxx":case"xxx":default:return ae(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ne(a,":");case"OOOO":default:return"GMT"+ae(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ne(a,":");case"zzzz":default:return"GMT"+ae(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return X(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return X((r._originalDate||e).getTime(),t.length)}};function oe(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function ue(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var se={p:ue,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return oe(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",oe(a,t)).replace("{{time}}",ue(i,t))}};function ce(e){return e.getTime()%6e4}function le(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+ce(t))%6e4:ce(t))}var de=["D","DD"],fe=["YY","YYYY"];function he(e){return-1!==de.indexOf(e)}function me(e){return-1!==fe.indexOf(e)}function ge(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var we=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ve=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pe=/^'([^]*?)'?$/,be=/''/g,ye=/[a-zA-Z]/;function Te(e){return e.match(pe)[1].replace(be,"'")}var Ce=a.a.createElement;function xe(e){var t=e.dateString,n=function(e,t){w(1,arguments);var n=t||{},r=null==n.additionalDigits?2:g(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,i=T(e);if(i.date){var o=C(i.date,r);a=x(o.restDateString,o.year)}if(isNaN(a)||!a)return new Date(NaN);var u,s=a.getTime(),c=0;if(i.time&&(c=D(i.time),isNaN(c)||null===c))return new Date(NaN);if(!i.timezone){var l=new Date(s+c),d=new Date(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate(),l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds());return d.setFullYear(l.getUTCFullYear()),d}return u=k(i.timezone),isNaN(u)?new Date(NaN):new Date(s+c+u)}(t);return Ce("time",{dateTime:t},function(e,t,n){w(2,arguments);var r=String(t),a=n||{},i=a.locale||H,o=i.options&&i.options.firstWeekContainsDate,u=null==o?1:g(o),s=null==a.firstWeekContainsDate?u:g(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,l=null==c?0:g(c),d=null==a.weekStartsOn?l:g(a.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var f=S(e);if(!E(f))throw new RangeError("Invalid time value");var h=le(f),m=_(f,h),v={firstWeekContainsDate:s,weekStartsOn:d,locale:i,_originalDate:f};return r.match(ve).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,se[t])(e,i.formatLong,v):e})).join("").match(we).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return Te(n);var o=ie[r];if(o)return!a.useAdditionalWeekYearTokens&&me(n)&&ge(n,t,e),!a.useAdditionalDayOfYearTokens&&he(n)&&ge(n,t,e),o(m,n,i.localize,v);if(r.match(ye))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(n,"LLLL d, yyyy"))}var Me=a.a.createElement,De=!0;function Ne(e){var t=e.postData;return Me(m,{home:!1},Me(o.a,null,Me("title",null,t.title)),Me("article",null,Me("h1",null,t.title),Me("div",null,Me(xe,{dateString:t.date})),Me("div",{dangerouslySetInnerHTML:{__html:t.contentHtml}})))}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,a=(0,i.useRef)(),c=(0,i.useState)(!1),l=r(c,2),d=l[0],f=l[1],h=(0,i.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||d||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,i.useEffect)((function(){u||d||(0,o.default)((function(){return f(!0)}))}),[d]),[h,d]};var i=n("q1tI"),o=a(n("0G5g")),u="undefined"!==typeof IntersectionObserver;var s=new Map},wyEa:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return n("u7QL")}])}},[["wyEa",0,1,5,4,2,3]]]);