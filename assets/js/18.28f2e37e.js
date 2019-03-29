(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{251:function(t,s,e){"use strict";e.r(s);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},n=e(6),o=Object(n.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[e("h1",{attrs:{id:"configuring-the-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-app","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuring the App")]),t._v(" "),e("blockquote",[e("p",[t._v("The App uses a client side config file in order to set certain behavioral settings. The config file is a JavaScript file that adds an object into the window's global scope, which the application in turn uses.")])]),t._v(" "),e("h2",{attrs:{id:"allowed-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allowed-apis","aria-hidden":"true"}},[t._v("#")]),t._v(" Allowed APIs")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("api")]),t._v(" key allows you to set the API URL the application tries to connect to. The object follows the format "),e("code",[t._v('"url": "name"')]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n  api"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token string"}},[t._v('"https://demo-api.directus.app/_/"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Directus Demo API"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("You can add multiple API urls by adding multiple keys to this object. This will result in the application rendering a dropdown on the login page which the user can use to pick between the different available APIs.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n  api"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token string"}},[t._v('"https://demo-api.directus.app/_/"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Directus Demo API"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/_/"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Local Test"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token string"}},[t._v('"https://api.example.com/prod/"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Example Production"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Don't forget to add the "),e("a",{attrs:{href:"#"}},[t._v("API Project")]),t._v(" in the URL!")])]),t._v(" "),e("h2",{attrs:{id:"allow-other-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allow-other-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Allow Other API")]),t._v(" "),e("p",[t._v("By setting the "),e("code",[t._v("allowOtherAPI")]),t._v(' to true, the application will render an additional "Other" option in the API picker dropdown, which allows the user to log into any API by providing it\'s URL manually.')]),t._v(" "),e("h2",{attrs:{id:"router-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router-mode","aria-hidden":"true"}},[t._v("#")]),t._v(" Router Mode")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("routerMode")]),t._v(" option controls the way in which the applications creates it's links. By default, this option is set to "),e("code",[t._v("history")]),t._v(". In "),e("code",[t._v("history")]),t._v(' mode, links will be "absolute".')]),t._v(" "),e("p",[t._v('These "absolute" links mean that your server will have to route every request to the '),e("code",[t._v("/index.html")]),t._v(" file. If it doesn't, the user will get a 404 error when refreshing or directly opening a URL.")]),t._v(" "),e("p",[t._v("The alternative value for this option is "),e("code",[t._v("hash")]),t._v(". In "),e("code",[t._v("hash")]),t._v(" mode, every link will be prepended with a "),e("code",[t._v("#")]),t._v(" character, which results in the browser treating every link as the same page. This fixes the routing problem mentioned above, and allows you to use the application on servers where you can't control the routing rules on the server.")]),t._v(" "),e("p",[e("strong",[t._v("History Mode")])]),t._v(" "),e("div",{staticClass:"language-url extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://directus.app/collections/projects/2\nhttps://directus.app/settings/roles/5\nhttps://directus.app/ext/dashboard\n")])])]),e("p",[e("strong",[t._v("Hash Mode")])]),t._v(" "),e("div",{staticClass:"language-url extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://directus.app/#/collections/projects/2\nhttps://directus.app/#/settings/roles/5\nhttps://directus.app/#/ext/dashboard\n")])])])])},[],!1,null,null,null);o.options.__file="configuration.md";s.default=o.exports}}]);