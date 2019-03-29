(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,i){e.exports=i.p+"assets/img/relation.73e1c403.png"},143:function(e,t,i){e.exports=i.p+"assets/img/relation.62fab19a.png"},144:function(e,t,i){e.exports=i.p+"assets/img/relation.57a894c0.png"},178:function(e,t,i){e.exports=i.p+"assets/img/field.426dd591.png"},179:function(e,t,i){e.exports=i.p+"assets/img/interface.186f8182.png"},180:function(e,t,i){e.exports=i.p+"assets/img/name.fd2bda2a.png"},181:function(e,t,i){e.exports=i.p+"assets/img/options.6b7b61ac.png"},182:function(e,t,i){e.exports=i.p+"assets/img/done.fe8fbf50.png"},183:function(e,t,i){e.exports=i.p+"assets/img/field.d570fc0f.png"},184:function(e,t,i){e.exports=i.p+"assets/img/interface.1bc40098.png"},185:function(e,t,i){e.exports=i.p+"assets/img/name.f39491d4.png"},186:function(e,t,i){e.exports=i.p+"assets/img/o2m-m2o.ca1983dd.png"},187:function(e,t,i){e.exports=i.p+"assets/img/m2m.1504ca63.png"},188:function(e,t,i){e.exports=i.p+"assets/img/create_junction.56756852.png"},189:function(e,t,i){e.exports=i.p+"assets/img/junction.7a069b3b.png"},190:function(e,t,i){e.exports=i.p+"assets/img/interface.fde5ee6a.png"},191:function(e,t,i){e.exports=i.p+"assets/img/options.1e2c4d72.png"},192:function(e,t,i){e.exports=i.p+"assets/img/done.4c63ee62.png"},193:function(e,t,i){e.exports=i.p+"assets/img/m2mm.27b7b9e5.png"},226:function(e,t,i){"use strict";i.r(t);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=i(6),a=Object(o.a)(s,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[s("h1",{attrs:{id:"relationships"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relationships","aria-hidden":"true"}},[e._v("#")]),e._v(" Relationships")]),e._v(" "),s("blockquote",[s("p",[e._v("If certain collections within your project are related then you can connect them with Relationships. There are multiple types of relationships but technically Directus only needs to store one: the "),s("strong",[e._v("Many-to-One")]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"many-to-one"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#many-to-one","aria-hidden":"true"}},[e._v("#")]),e._v(" Many-to-One")]),e._v(" "),s("p",[e._v("A many-to-one (M2O) relationship exists when an item of "),s("strong",[e._v("Collection A")]),e._v(" is linked to one single item of "),s("strong",[e._v("Collection B")]),e._v(", but an item of "),s("strong",[e._v("Collection B")]),e._v(" may be linked to many items of "),s("strong",[e._v("Collection A")]),e._v(". For example, a movie has one director, but directors have many movies.")]),e._v(" "),s("h3",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),s("p",[e._v("This setup is specific to the "),s("code",[e._v("movies → directors")]),e._v(" (M2O) field. The following steps assume you already have two collections: "),s("code",[e._v("movies")]),e._v(" and "),s("code",[e._v("directors")]),e._v(". Each collection has the default "),s("code",[e._v("id")]),e._v(" primary key and a "),s("code",[e._v("name")]),e._v(" field.")]),e._v(" "),s("div",{pre:!0},[s("ol",[s("li",[e._v("Go to "),s("strong",[e._v("Settings > Collections & Fields > Movies")])]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("New Field")])]),e._v(" "),s("li",[e._v("Interface: Choose "),s("strong",[e._v("Many-to-One")])]),e._v(" "),s("li",[e._v("Schema: "),s("strong",[e._v("Name")]),e._v(" your field (we're using "),s("code",[e._v("director")]),e._v(")")]),e._v(" "),s("li",[e._v("Relation: Select "),s("strong",[e._v("Directors")]),e._v(" as the Related Collection")]),e._v(" "),s("li",[e._v("Options: Enter a "),s("strong",[e._v("Dropdown Template")]),e._v(" (we're using "),s("code",[e._v("{{name}}")]),e._v(")\n"),s("ul",[s("li",[e._v("This can be any "),s("a",{attrs:{href:"https://www.npmjs.com/package/micromustache",target:"_blank",rel:"noopener noreferrer"}},[e._v("MicroMustache"),s("OutboundLink")],1),e._v(" string containing field names available within "),s("code",[e._v("directors")])])])])])]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("Matching MySQL Datatype")]),e._v(" "),s("p",[e._v("In this example the "),s("code",[e._v("directors")]),e._v(" collection uses the default "),s("code",[e._v("id")]),e._v(" primary key, which has a Database DataType of "),s("code",[e._v("INT")]),e._v(". If you're using a different primary key type, such as "),s("code",[e._v("STRING")]),e._v(', make sure that your relational field\'s DataType/Length matches that of the primary key it will store. This can be adjusted under "Advanced Options" in the Field Modal.')])]),e._v(" "),s("h4",{attrs:{id:"screenshots"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screenshots","aria-hidden":"true"}},[e._v("#")]),e._v(" Screenshots")]),e._v(" "),s("p",[e._v("Both dropdowns under \"This Collection\" are disabled since those refer to the field we're configuring now. The Related Field is also disabled since it must be the collection's Primary Key. All you need to do is choose which collection you want to relate to... in this case: "),s("code",[e._v("directors")]),e._v(".")]),e._v(" "),s("img",{attrs:{src:i(143)}}),e._v(" "),s("img",{attrs:{src:i(178),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(179),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(180),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(143),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(181),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(182),width:"100"}}),e._v(" "),s("h2",{attrs:{id:"one-to-many"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#one-to-many","aria-hidden":"true"}},[e._v("#")]),e._v(" One-to-Many")]),e._v(" "),s("p",[e._v("A one-to-many (O2M) relationship exists when an item of "),s("strong",[e._v("Collection A")]),e._v(" may be linked to many items of "),s("strong",[e._v("Collection B")]),e._v(", but an item of "),s("strong",[e._v("Collection B")]),e._v(" is linked to only one single item of "),s("strong",[e._v("Collection A")]),e._v(". For example, directors have many movies, but a movie only has one director. As you can see, this is the "),s("em",[e._v("same relationship")]),e._v(" as the M2O above... but looking at it from the opposite direction.")]),e._v(" "),s("h3",{attrs:{id:"setup-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),s("p",[e._v("This setup is specific to the "),s("code",[e._v("directors → movies")]),e._v(" (O2M) field. The following steps assume you already have two collections: "),s("code",[e._v("movies")]),e._v(" and "),s("code",[e._v("directors")]),e._v(". Each collection has the default "),s("code",[e._v("id")]),e._v(" primary key and a "),s("code",[e._v("name")]),e._v(" field. Additionally, we're assuming you have already created the M2O relationship above, which creates the "),s("code",[e._v("movies.director")]),e._v(" field.")]),e._v(" "),s("div",{pre:!0},[s("ol",[s("li",[e._v("Go to "),s("strong",[e._v("Settings > Collections & Fields > Directors")])]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("New Field")])]),e._v(" "),s("li",[e._v("Interface: Choose "),s("strong",[e._v("One-to-Many")])]),e._v(" "),s("li",[e._v("Schema: "),s("strong",[e._v("Name")]),e._v(" your field (we're using "),s("code",[e._v("movies")]),e._v(")")]),e._v(" "),s("li",[e._v("Relation: Select "),s("strong",[e._v("Movies")]),e._v(" as the Related Collection and "),s("strong",[e._v("Director")]),e._v(" as the Related Field\n"),s("ul",[s("li",[e._v("The "),s("code",[e._v("movie.director")]),e._v(" field was created during M2O setup above")])])])])]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("Alias Fields")]),e._v(" "),s("p",[e._v("Technically, this process does not create a new field, it remotely manages the relational data using the "),s("code",[e._v("movies.director")]),e._v(" field. So if you were to look in the database you would not see an actual "),s("code",[e._v("directors.movies")]),e._v(' column. That is why we call this an "alias", because it simply '),s("em",[e._v("represents")]),e._v(" a field.")])]),e._v(" "),s("h4",{attrs:{id:"screenshots-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screenshots-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Screenshots")]),e._v(" "),s("p",[e._v('Both dropdowns under "This Collection" are disabled since those refer to the field we\'re configuring now. First, choose the Related Collection, in this case '),s("code",[e._v("movies")]),e._v(". Once that is selected the Field dropdown will update to show the allowed options and you can choose the field that will store the foreign key in the related collection. In this example, "),s("code",[e._v("movies.director")]),e._v(" will store "),s("code",[e._v("director.id")]),e._v(" so we choose "),s("code",[e._v("director")]),e._v(".")]),e._v(" "),s("img",{attrs:{src:i(138)}}),e._v(" "),s("img",{attrs:{src:i(183),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(184),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(185),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(138),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(138),width:"100"}}),e._v(" "),s("h2",{attrs:{id:"direction-matters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#direction-matters","aria-hidden":"true"}},[e._v("#")]),e._v(" Direction Matters")]),e._v(" "),s("p",[e._v("Now we understand that a M2O and O2M are the "),s("em",[e._v("exact")]),e._v(" same relationship... just viewed from opposite directions. The "),s("code",[e._v("movies")]),e._v(" form shows a M2O dropdown to choose the director, and the "),s("code",[e._v("directors")]),e._v(" form has a O2M listing to select their movies. But if you were to peek behind the scenes you would only see one entry in "),s("code",[e._v("directus_relations")]),e._v(" defining this duplex relationship.")]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v('An easy way to remember which side is which: the "many" is an actual column that stores the foreign key, while the "one" side is a simulated column using the '),s("code",[e._v("ALIAS")]),e._v(" datatype.")])]),e._v(" "),s("p",[s("img",{attrs:{src:i(186),alt:"O2M + M2O"}})]),e._v(" "),s("h2",{attrs:{id:"many-to-many"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#many-to-many","aria-hidden":"true"}},[e._v("#")]),e._v(" Many-to-Many")]),e._v(" "),s("p",[e._v("A many-to-many (M2M) is a slightly more advanced relationship that allows you to link "),s("em",[e._v("any")]),e._v(" items within "),s("strong",[e._v("Collection A")]),e._v(" and "),s("strong",[e._v("Collection B")]),e._v(". For example, movies can have many genres, and genres can have many movies.")]),e._v(" "),s("p",[e._v("Technically this is not a new relationship type, it is a O2M and M2O "),s("em",[e._v("working together")]),e._v(' across a "junction" collection. Each item in the junction (eg: '),s("code",[e._v("movie_genres")]),e._v(") is a single link between one item in "),s("code",[e._v("movies")]),e._v(" and one item in "),s("code",[e._v("genres")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"setup-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),s("p",[e._v("This setup is specific to the "),s("code",[e._v("movies → genres")]),e._v(" (M2M) field. The following steps assume you already have two collections: "),s("code",[e._v("movies")]),e._v(" and "),s("code",[e._v("genres")]),e._v(". Each collection has the default "),s("code",[e._v("id")]),e._v(" primary key and a "),s("code",[e._v("name")]),e._v(" field.")]),e._v(" "),s("div",{pre:!0},[s("ol",[s("li",[e._v("Go to "),s("strong",[e._v("Settings > Collections & Fields")])]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("New Collection")])]),e._v(" "),s("li",[s("strong",[e._v("Name")]),e._v(" your junction collection (we're using "),s("code",[e._v("movie_genres")]),e._v(")")]),e._v(" "),s("li",[e._v("Set the junction collection to be "),s("em",[e._v("Hidden")]),e._v(" (Optional)")]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("New Field")]),e._v(" — Add "),s("code",[e._v("movie_genres.movie")]),e._v(" (basic numeric type)")]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("New Field")]),e._v(" — Add "),s("code",[e._v("movie_genres.genre")]),e._v(" (basic numeric type)")]),e._v(" "),s("li",[e._v("Go to "),s("strong",[e._v("Settings > Collections & Fields > Movies")])]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("New Field")])]),e._v(" "),s("li",[e._v("Interface: Choose "),s("strong",[e._v("Many-to-Many")])]),e._v(" "),s("li",[e._v("Schema: "),s("strong",[e._v("Name")]),e._v(" your field (we're using "),s("code",[e._v("genres")]),e._v(")")]),e._v(" "),s("li",[e._v("Relation: Select "),s("strong",[e._v("Genres")]),e._v(" as the Related Collection\n"),s("ul",[s("li",[e._v("Select "),s("strong",[e._v("Movie Genres")]),e._v(" as the Junction Collection")]),e._v(" "),s("li",[e._v("Map "),s("code",[e._v("movies.id")]),e._v(" to "),s("strong",[e._v("Movie")]),e._v(" under the junction")]),e._v(" "),s("li",[e._v("Map "),s("code",[e._v("genres.id")]),e._v(" to "),s("strong",[e._v("Genre")]),e._v(" under the junction")])])]),e._v(" "),s("li",[e._v("Options: "),s("strong",[e._v("Visible Columns")]),e._v(" sets the columns the interface shows (we're using "),s("code",[e._v("name")]),e._v(")\n"),s("ul",[s("li",[s("strong",[e._v("Display Template")]),e._v(" sets the columns the interface shows (we're using "),s("code",[e._v("{{name}}")]),e._v(")")])])])])]),e._v(" "),s("p",[s("img",{attrs:{src:i(187),alt:"M2M"}})]),e._v(" "),s("h4",{attrs:{id:"screenshots-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screenshots-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Screenshots")]),e._v(" "),s("p",[e._v("Both dropdowns under \"This Collection\" are disabled since those refer to the field we're configuring now. The Related Field is also disabled since it must be the collection's Primary Key. First, choose the collection you want to relate to. Now select a junction collection and connect its keys by following the arrows.")]),e._v(" "),s("img",{attrs:{src:i(144)}}),e._v(" "),s("img",{attrs:{src:i(188),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(189),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(190),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(144),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(191),width:"100"}}),e._v(" "),s("img",{attrs:{src:i(192),width:"100"}}),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("Relation Arrows")]),e._v(" "),s("p",[e._v("During relationship setup the App shows arrows between each field to help visualize the data model. "),s("em",[e._v("Each arrow points from the primary key field to the foreign key field.")])])]),e._v(" "),s("h2",{attrs:{id:"many-to-any"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#many-to-any","aria-hidden":"true"}},[e._v("#")]),e._v(" Many-to-Any")]),e._v(" "),s("p",[e._v("The many-to-any (M2X) allows you to connect items within "),s("strong",[e._v("Collection A")]),e._v(" to many items from "),s("strong",[e._v("any collection")]),e._v(". It is essentially the same as a M2M, but requires connected collections to use a Universally Unique Identifier (UUID) for the primary key. The Directus relational architecture supports this type of relationship, but there is no dedicated M2X interface yet.")]),e._v(" "),s("p",[e._v("This type of relationship goes by many different names, and is often referred to by its specific purpose. Some names include: matrix field, replicator, M2MM, M2X, M2N, etc.")]),e._v(" "),s("p",[s("img",{attrs:{src:i(193),alt:"M2M"}})]),e._v(" "),s("h2",{attrs:{id:"translations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#translations","aria-hidden":"true"}},[e._v("#")]),e._v(" Translations")]),e._v(" "),s("p",[e._v("The translation interface is a standard O2M relation, but it expects a specific data model to ensure things work properly. Below are the basic collections and fields this interface uses.")]),e._v(" "),s("h3",{attrs:{id:"languages-collection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#languages-collection","aria-hidden":"true"}},[e._v("#")]),e._v(" Languages Collection")]),e._v(" "),s("p",[e._v("This is the collection that contains all of the languages your project uses. In this example we'll name it "),s("code",[e._v("languages")]),e._v(" and make it hidden since this content will be accessed through the parent collection. It requires at least these two fields:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("code")]),e._v(" — This is the primary key. We recommend setting this to a string so it can store the country or locale code. eg: "),s("code",[e._v("en")]),e._v(" or "),s("code",[e._v("en-US")])]),e._v(" "),s("li",[s("code",[e._v("name")]),e._v(" — This is the human-readable name shown in the App")])]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("While it is most common to suport one global set of languages per project, you "),s("em",[e._v("could")]),e._v(" create multiple language collections to support different locales throughout your project.")])]),e._v(" "),s("h3",{attrs:{id:"translation-collections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#translation-collections","aria-hidden":"true"}},[e._v("#")]),e._v(" Translation Collections")]),e._v(" "),s("p",[e._v("Every parent collection (eg: "),s("code",[e._v("articles")]),e._v(") contains all language-agnostic fields, such as: "),s("em",[e._v("Publish Date")]),e._v(", "),s("em",[e._v("Author")]),e._v(", and a "),s("em",[e._v("Featured Toggle")]),e._v(". But we also need to create a related collection (eg: "),s("code",[e._v("article_translations")]),e._v(") with any fields that will be translated, such as the "),s("em",[e._v("Title")]),e._v(" and "),s("em",[e._v("Body")]),e._v(". Let's go over the required fields in these translation collections.")]),e._v(" "),s("h4",{attrs:{id:"parent-foreign-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parent-foreign-key","aria-hidden":"true"}},[e._v("#")]),e._v(" Parent Foreign Key")]),e._v(" "),s("p",[e._v("This is the field that stores the parent item's primary key. So in our example we would add an "),s("code",[e._v("article")]),e._v(" field to store the article's ID.")]),e._v(" "),s("p",[e._v("Suggested field configuration:")]),e._v(" "),s("ul",[s("li",[e._v("Interface: Numeric")]),e._v(" "),s("li",[e._v("Schema\n"),s("ul",[s("li",[e._v("Hidden On Detail: "),s("code",[e._v("true")]),e._v(" (this is a utility field so typically you will want to enable this option so it doesn't appear)")]),e._v(" "),s("li",[e._v("Field type: "),s("code",[e._v("integer")])]),e._v(" "),s("li",[e._v("Signed: "),s("code",[e._v("false")])])])])]),e._v(" "),s("h4",{attrs:{id:"language-foreign-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#language-foreign-key","aria-hidden":"true"}},[e._v("#")]),e._v(" Language Foreign Key")]),e._v(" "),s("p",[e._v("This is the field that stores the language code. We recommend calling this field "),s("code",[e._v("language")]),e._v(".")]),e._v(" "),s("p",[e._v("Suggested field configuration:")]),e._v(" "),s("ul",[s("li",[e._v("Interface: Text input")]),e._v(" "),s("li",[e._v("Schema\n"),s("ul",[s("li",[e._v("Hidden On Detail: "),s("code",[e._v("true")]),e._v(" (this is a utility field so typically you will want to enable this option so it doesn't appear)")]),e._v(" "),s("li",[e._v("Field type: "),s("code",[e._v("lang")])])])])]),e._v(" "),s("h4",{attrs:{id:"translated-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#translated-fields","aria-hidden":"true"}},[e._v("#")]),e._v(" Translated Fields")]),e._v(" "),s("p",[e._v("You can add any number of other fields, each will be translated within the interface.")]),e._v(" "),s("h3",{attrs:{id:"setup-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),s("p",[e._v("These setup instructions are specific to the "),s("em",[e._v("Articles")]),e._v(" example above. It assumes you already have setup these collections: "),s("code",[e._v("articles")]),e._v(", "),s("code",[e._v("article_translations")]),e._v(", "),s("code",[e._v("languages")]),e._v(".")]),e._v(" "),s("div",{pre:!0},[s("ol",[s("li",[e._v("Go to "),s("strong",[e._v("Settings > Collections & Fields > Articles")])]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("New Field")])]),e._v(" "),s("li",[e._v("Interface: Choose "),s("strong",[e._v("Translation")])]),e._v(" "),s("li",[e._v("Schema: "),s("strong",[e._v("Name")]),e._v(" your field (we're using "),s("code",[e._v("translations")]),e._v(")")]),e._v(" "),s("li",[e._v("Relation: Select "),s("strong",[e._v("Article Translations")]),e._v(" as the Related Collection and "),s("strong",[e._v("Article")]),e._v(" as the Related Field\n"),s("ul",[s("li",[e._v("The "),s("code",[e._v("article_translations.article")]),e._v(" field was created during "),s("em",[e._v("Translation Collections")]),e._v(" setup above")])])]),e._v(" "),s("li",[e._v("Options: "),s("strong",[e._v("Languages Collection")]),e._v(" is the collection created during "),s("em",[e._v("Translations")]),e._v(" setup above (we're using "),s("code",[e._v("languages")]),e._v(")\n"),s("ul",[s("li",[s("strong",[e._v("Language Primary Key Field")]),e._v(" the Language Foreign Key field created during "),s("em",[e._v("Translation Collections")]),e._v(" setup above (we're using "),s("code",[e._v("language")]),e._v(")")])])])])])])},[],!1,null,null,null);a.options.__file="relationships.md";t.default=a.exports}}]);