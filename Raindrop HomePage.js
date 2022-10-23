// ==UserScript==
// @name        Raindrop Home
// @namespace   Violentmonkey Scripts
// @version     0.1.1
// @uso:version 0.1.1
// @match       https://raindrop.io/virgile-arlaud*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @updateURL   https://raw.githubusercontent.com/Virgile-fr/Raindrop-HomePage/main/Raindrop%20HomePage.js
// @downloadURL https://raw.githubusercontent.com/Virgile-fr/Raindrop-HomePage/main/Raindrop%20HomePage.js
// @grant       GM_addStyle
// @grant       GM_addElement
// @grant       GM.getValue
// @run-at      document-end
// ==/UserScript==


// DELETE HTML
waitForKeyElements ("._path_49ua7_1",killNode);
waitForKeyElements ("._title_1qs4k_16",killNode);
waitForKeyElements ("._button_mzeri_1",killNode);
waitForKeyElements ("._excerpt_1k0zu_43",killNode);
waitForKeyElements ("._buttons_mzeri_112",killNode);
waitForKeyElements ("._info_1asgq_1",killNode);
waitForKeyElements ("._footer_1lqfz_1",killNode);
waitForKeyElements ("._subheader_16ovf_1",killNode);
waitForKeyElements ("._toolbar_1qs4k_1",killNode)

function killNode (jNode) {
    jNode.remove ();
}

// DARK MODE ACTIVATION

if (window.matchMedia) {
// Check if the dark-mode Media-Query matches
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
// Add data-theme="dark" to ._page_1630o_1
  document.querySelectorAll('._page_1630o_1')[0].setAttribute("data-theme", "dark")
}
}

// CSS LOADING STYLES

function GM_addStyle (cssStr) {
    var newNode         = document.createElement ('style');
    newNode.textContent = cssStr;
    var targ    = document.getElementsByTagName ('head')[0] || document.body || document.documentElement;
    targ.appendChild (newNode);
}



GM_addStyle(`/*___________________________________________________________________________________________________________________________*/



@media (prefers-color-scheme: light) { :root {
--bodybkg:#FEFEFE;
--background:#FEFEFE;
--background-hsl-regular: 0,0%,100% !important;
--background-color-regular: hsl(var(--background-hsl-regular)) !important;
--background-color-secondary: #F3F5F6 !important;
--background-color-disabled: rgba(0,0,0,.07) !important;
--accent-color: #3169FF !important;
--text-color-regular: #1E1E1E !important;
--text-color-secondary: #70767A !important;
--text-color-disabled: rgba(0,0,0,.2) !important;
--line-color: rgba(0,0,0,.15) !important;
}}

@media (prefers-color-scheme: dark) { :root {
--bodybkg:#2E2E30;
--background:#26252C;
--background-hsl-regular: 0,0%,19% !important;
--background-color-regular: hsl(var(--background-hsl-regular)) !important;
--background-color-secondary: #222222 !important;
--background-color-disabled: rgba(255,255,255,.15) !important;
--accent-color: #3169FF !important;
--text-color-regular: #E0E0E0 !important;
--text-color-secondary: #8A8F94 !important;
--text-color-disabled: rgba(0,0,0,.2) !important;
--line-color: rgba(255,255,255,.18) !important;
}}

body{background-color: var(--bodybkg);}

/* No displaygrid for title */ ._about_1k0zu_28 {display:unset;}

/* no padding + BACKGROUND */ ._theme_1yncj_1
{padding:0px; background:var(--background)!important}


/* Full screen content background */#content {height:100vh}

/* header proprieties*/ ._header_l3vap_1 {
background: radial-gradient(circle,hsla(var(--background-hsl-regular),.8) 90%,var(--background-color-regular) 100%);
backdrop-filter: blur(20px) !important;
-webkit-backdrop-filter: blur(20px) !important;
z-index: 1;
border-bottom: solid 0.7px var(--line-color) !important;
box-shadow: none;}
._title_l3vap_42 {font-weight: 300;}
._inner_l3vap_25 {justify-content: center;}

/* card proprieties */ ._single_1k0zu_1{
background-color: var(--background-color-secondary);
border-radius: 4px;
box-shadow: inset 0 0 0 var(--line-size) var(--line-color);
}

/* Grid proprieties */ ._items_114ev_6{
--grid-item-width: 170px !important;
grid-gap: 20px;
padding: 20px;
}

/* Footer proprieties */ #test {
opacity:0%;
display:flex;
align-items:center;
justify-content:center;
width: 100vw;
height: 50px;

background: radial-gradient(circle,hsla(var(--background-hsl-regular),.8) 90%,var(--background-color-regular) 100%);
backdrop-filter: blur(20px) !important;
-webkit-backdrop-filter: blur(20px) !important;
border-top: solid 0.7px var(--line-color);

color: var(--text-color-regular);
font-size: var(--font-size-h1);
font-weight: 300;

position: fixed;
bottom: 0px;
margin: 0px;
  z-index:8;
}

#test:hover {opacity:100%;}
#test a{
  margin: 0px 1vw;
}

/* No Scrollbar */
* {-ms-overflow-style: none !important;  /* Internet Explorer 10+ */
scrollbar-width: none !important;  /* Firefox */}
*::-webkit-scrollbar {display: none !important;} /*Chrome */
.element::-webkit-scrollbar { -webkit-appearance: none; width: 0;height: 0; } /*Safari*/


`);/*_____________________________________________________________________________________________________________________________________*/



/* pour que l'url finisse par un "/" afin que les filtres fonctionnent */
function changeURL(newUrl){  document.location.href = newUrl;  }
let actualURL = document.URL;
if (document.URL.substr(-1) != '/') actualURL += '/';
if ((document.URL.substr(-1) != '/') & ((document.URL.split('/').length) <= 5)) changeURL(actualURL);



$("body").append ( `
<div id="test">
  <a href=".."><button>My Profile</button></a>
  <a href="sort=-created&perpage=30&page=0"><button>Filter Newest</button></a>
  <a href="sort=created&perpage=30&page=0"><button>Filter Oldest</button></a>
  <a href="sort=title&perpage=30&page=0"><button>Filter A to Z</button></a>
  <a href="sort=-title&perpage=30&page=0"><button>Filter Z to A</button></a>
  <a href="."><button>Custom Filter</button></a>
</div>
` );
