interface JQueryStatic {
  ajax(option: object): object;
}

declare module 'jquery' {
  export = JQueryStatic;
}
declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;

/** ********
 *   嘿嘿嘿
 ***********/
// 全局变量方式
var ajaxGlobal = jQuery.ajax;
// 别名方式调用
$.ajax({});
