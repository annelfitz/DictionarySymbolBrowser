import{c as e,a as r,b as n,d as a}from"./p-415086dd.js";var s=e((function(){!function(e){
//! moment.js locale configuration
var r="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function n(e,r,n,a){var s=e;switch(n){case"s":return a||r?"néhány másodperc":"néhány másodperce";case"ss":return s+(a||r)?" másodperc":" másodperce";case"m":return"egy"+(a||r?" perc":" perce");case"mm":return s+(a||r?" perc":" perce");case"h":return"egy"+(a||r?" óra":" órája");case"hh":return s+(a||r?" óra":" órája");case"d":return"egy"+(a||r?" nap":" napja");case"dd":return s+(a||r?" nap":" napja");case"M":return"egy"+(a||r?" hónap":" hónapja");case"MM":return s+(a||r?" hónap":" hónapja");case"y":return"egy"+(a||r?" év":" éve");case"yy":return s+(a||r?" év":" éve")}return""}function a(e){return(e?"":"[múlt] ")+"["+r[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,r,n){return e<12?!0===n?"de":"DE":!0===n?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return a.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return a.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}("function"==typeof r?n:a.moment)}));const t=Object.freeze(Object.assign(Object.create(null),s,{default:s}));export{t as h}