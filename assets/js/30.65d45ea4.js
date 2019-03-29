(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{269:function(e,t,a){"use strict";a.r(t);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=a(6),i=Object(r.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"standalone-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standalone-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Standalone Application")]),e._v(" "),a("blockquote",[a("p",[e._v("Our decoupled architecture allows you to install just the Directus Application, without the API. This is useful if you want one App to manage multiple APIs.")])]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v('The Directus App is comprised of static files and does not have any special requirements. However if you would like to use "history" mode for clean URLs then you will need a way to route all traffic to the App\'s '),a("code",[e._v("/public/index.html")]),e._v(" file.")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("The Directus application is a static single-page webapp (SPA) and can be installed in three ways:")]),e._v(" "),a("h3",{attrs:{id:"using-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-git","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Git")]),e._v(" "),a("p",[e._v("The easiest way of installing and updating the app is through Git. By using the build branch on our repo, you're assured to have the latest version pre-bundled and ready to go.")]),e._v(" "),a("p",[e._v("To install the pre-bundled build version through Git, run")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone -b build https://github.com/directus/app.git directus\n")])])]),a("h3",{attrs:{id:"manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually","aria-hidden":"true"}},[e._v("#")]),e._v(" Manually")]),e._v(" "),a("p",[e._v("If you don't have access to the command line in your server, you can download the static bundle manually as a zip. Head over to "),a("a",{attrs:{href:"https://github.com/directus/app/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("the releases page"),a("OutboundLink")],1),e._v(" to download a fresh copy of the latest version.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("For instructions on how to setup a local development copy, checkout our "),a("a",{attrs:{href:"https://docs.directus.io/advanced/source.html#application-source",target:"_blank",rel:"noopener noreferrer"}},[e._v("dev install guide"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"using-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Docker")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/directus/docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/directus/docker"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("After you've installed the application, you need to create a config file. This file controls what API instances the app tries to connect to. The easiest way to create this file is by renaming or duplicating the "),a("code",[e._v("config_example.js")]),e._v(" file to "),a("code",[e._v("config.js")]),e._v(" and adjusting the default settings within.")]),e._v(" "),a("h2",{attrs:{id:"updating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating","aria-hidden":"true"}},[e._v("#")]),e._v(" Updating")]),e._v(" "),a("h3",{attrs:{id:"using-git-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-git-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Git")]),e._v(" "),a("p",[e._v("If you're using a direct clone of the "),a("code",[e._v("build")]),e._v(" branch, all you need to do to update the application is run")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\n")])])]),a("h3",{attrs:{id:"manually-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Manually")]),e._v(" "),a("p",[e._v("Updating is basically the same as installing fresh. You can download a copy of the latest version from "),a("a",{attrs:{href:"https://github.com/directus/app/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("the releases page"),a("OutboundLink")],1),e._v(" and overwrite the files you had before. "),a("strong",[e._v("Make sure not to override your "),a("code",[e._v("config.js")]),e._v(" file")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"using-docker-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-docker-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Docker")]),e._v(" "),a("p",[e._v("Updating the application is the same as in the manual way. Download a fresh copy of the application from the "),a("a",{attrs:{href:"https://github.com/directus/app/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("releases page"),a("OutboundLink")],1),e._v(" and overwrite all the files in use. Remember to restart your Docker process.")])])},[],!1,null,null,null);i.options.__file="standalone.md";t.default=i.exports}}]);