(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{395:function(t,a,s){"use strict";s.r(a);var n=s(22),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[t._v("#")]),t._v(" 注解")]),t._v(" "),s("p",[t._v("既然作为校验权限的一个框架，那么就需要使用某种方式给路径上添加权限，本文讲解两个用与设置权限的注解")]),t._v(" "),s("h2",{attrs:{id:"hasauthrole"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hasauthrole"}},[t._v("#")]),t._v(" HasAuthRole")]),t._v(" "),s("p",[t._v("给路径添加访问角色，操作权限，提交方式")]),t._v(" "),s("p",[t._v("作用范围： 类（Type），方法（Method）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("注释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("em",[t._v("roles")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String[]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("给路径设置角色")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("em",[t._v("permissions")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String[]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("给路径设置操作权限")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("em",[t._v("method")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String[]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("AUTO是拦截所有的提交方式，其他提交方式可以自定义，要大写例如 POST,GET")])])])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@HasAuthRole")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roles "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dept"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("permissions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"delete"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AUTO"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"allcalibrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#allcalibrations"}},[t._v("#")]),t._v(" AllCalibrations")]),t._v(" "),s("p",[t._v("是否开启完全匹配，加上这个注解会使校验操作权限的时候，会校验用户是否包含了所有的操作权限")]),t._v(" "),s("p",[t._v("作用范围： 类（Type），方法（Method）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("注释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("em",[t._v("permission")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启 操作权限的完全匹配，默认为开启")])])])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AllCalibrations")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@HasAuthRole")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roles "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("permissions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"delete"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AUTO"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);