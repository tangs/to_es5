"use strict";

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.fill");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.fill");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.define-property");

webpackJsonp([22], {
  1110: function _(t, e, i) {
    var o = i(988);
    "string" == typeof o && (o = [[t.i, o, ""]]), o.locals && (t.exports = o.locals);
    i(226)("5cb05240", o, !0);
  },
  1303: function _(t, e, i) {
    t.exports = {
      render: function render() {
        var t = this,
            e = t.$createElement,
            o = t._self._c || e;
        return o("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.showExamination,
            expression: "showExamination"
          }],
          staticClass: "examination"
        }, [o("div", {
          staticClass: "main"
        }, [o("div", {
          staticClass: "title"
        }, [o("div", {
          staticClass: "question-type"
        }, [t._v("\n        " + t._s(t.questionType || "") + "（" + t._s(t.currentQuestionIndex + 1) + "/" + t._s(t.ExaminationDataLen) + "）\n        "), o("span", {
          style: {
            color: t.difficultyColor[t.difficulty]
          }
        }, [t._v(t._s(t.difficultyState[t.difficulty]))])]), t._v(" "), t.showTimer ? o("div", {
          staticClass: "timer"
        }, [t._v(t._s(t.timer))]) : t._e()]), t._v(" "), t._l(t.ExaminationData, function (e, i) {
          return o("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: i === t.currentQuestionIndex,
              expression: "key===currentQuestionIndex"
            }],
            key: i,
            staticClass: "exam"
          }, [1 === e.type || 2 === e.type ? o("single-multiple-question", {
            ref: "singleMultipleComp",
            refInFor: !0,
            attrs: {
              examState: t.examState,
              showState: !0,
              analysis: t.analysis,
              clickable: !0,
              questionID: i + 1,
              options: e
            }
          }) : t._e(), t._v(" "), 3 === e.type ? o("judge-question", {
            ref: "judgeComp",
            refInFor: !0,
            attrs: {
              examState: t.examState,
              showState: !0,
              analysis: t.analysis,
              clickable: !0,
              questionID: i + 1,
              options: e
            }
          }) : t._e(), t._v(" "), 5 === e.type ? o("fill-question", {
            ref: "fillComp",
            refInFor: !0,
            attrs: {
              examState: t.examState,
              showState: !0,
              analysis: t.analysis,
              questionID: i + 1,
              options: e
            }
          }) : t._e(), t._v(" "), 6 === e.type ? o("answer-question", {
            ref: "answerComp",
            refInFor: !0,
            attrs: {
              examState: t.examState,
              showState: !0,
              analysis: t.analysis,
              questionID: i + 1,
              options: e
            }
          }) : t._e()], 1);
        })], 2), t._v(" "), o("div", {
          staticClass: "bottom-bar"
        }, [o("img", {
          staticClass: "answer-card",
          attrs: {
            src: i(549)
          },
          on: {
            click: function click(e) {
              e.stopPropagation(), t.clickQuestionGrid(e);
            }
          }
        }), t._v(" "), o("div", {
          staticClass: "pre-question",
          style: t.currentQuestionIndex + 1 == 1 ? "color:rgba(176, 176, 176, 0.6);" : "color:#28a0f6",
          on: {
            click: function click(e) {
              e.stopPropagation(), t.clickPreQuestion(e);
            }
          }
        }, [o("img", {
          staticClass: "icon",
          attrs: {
            src: i(551)
          }
        }), t._v(" 上一题\n    ")]), t._v(" "), o("div", {
          staticClass: "submit-exam"
        }), t._v(" "), o("div", {
          staticClass: "next-question",
          on: {
            click: function click(e) {
              e.stopPropagation(), t.clickNextQuestion(e);
            }
          }
        }, [t._v("\n      " + t._s(t.text) + "\n      "), o("img", {
          staticClass: "icon",
          attrs: {
            src: i(550)
          }
        })])]), t._v(" "), t.showQuestionGrid ? o("question-grid", {
          attrs: {
            currentQuestionIndex: t.currentQuestionIndex,
            options: t.questionGridOptions
          },
          on: {
            _navToQuestion: t.navToQuestion,
            submitExam: t.clickSubmitExam
          }
        }) : t._e(), t._v(" "), o("confirm", {
          attrs: {
            options: t.confirmOptions
          }
        }), t._v(" "), o("alert", {
          attrs: {
            title: t.alertOptions.title,
            content: t.alertOptions.content
          },
          on: {
            "on-hide": t.alertHide
          },
          model: {
            value: t.alertOptions.showAlert,
            callback: function callback(e) {
              t.alertOptions.showAlert = e;
            },
            expression: "alertOptions.showAlert"
          }
        }), t._v(" "), o("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.errorFlag,
            expression: "errorFlag"
          }],
          staticClass: "wsError"
        }, [o("span", [t._v("网络不稳定,计分系统重连中,第" + t._s(t.errorCount) + "次")])])], 1);
      },
      staticRenderFns: []
    };
  },
  267: function _(t, e, i) {
    function o(t) {
      i(1110);
    }

    var s = i(5)(i(793), i(1303), o, null, null);
    t.exports = s.exports;
  },
  346: function _(t, e, i) {
    function o(t) {
      i(356);
    }

    var s = i(5)(i(354), i(357), o, null, null);
    t.exports = s.exports;
  },
  348: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = i(87),
        s = i.n(o);
    e["default"] = {
      name: "confirm",
      components: {
        XDialog: s.a
      },
      props: {
        value: {
          type: Boolean,
          "default": !1
        },
        showInput: {
          type: Boolean,
          "default": !1
        },
        placeholder: {
          type: String,
          "default": ""
        },
        theme: {
          type: String,
          "default": "ios"
        },
        hideOnBlur: {
          type: Boolean,
          "default": !1
        },
        title: String,
        confirmText: String,
        cancelText: String,
        maskTransition: {
          type: String,
          "default": "vux-fade"
        },
        dialogTransition: {
          type: String,
          "default": "vux-dialog"
        },
        content: String,
        closeOnConfirm: {
          type: Boolean,
          "default": !0
        },
        inputAttrs: Object
      },
      created: function created() {
        this.showValue = this.show, this.value && (this.showValue = this.value);
      },
      watch: {
        value: function value(t) {
          this.showValue = t;
        },
        showValue: function showValue(t) {
          var e = this;
          this.$emit("input", t), t && (this.showInput && (this.msg = "", setTimeout(function () {
            e.$refs.input && e.$refs.input.focus();
          }, 300)), this.$emit("on-show"));
        }
      },
      data: function data() {
        return {
          msg: "",
          showValue: !1
        };
      },
      methods: {
        setInputValue: function setInputValue(t) {
          this.msg = t;
        },
        _onConfirm: function _onConfirm() {
          this.closeOnConfirm && (this.showValue = !1), this.$emit("on-confirm", this.msg);
        },
        _onCancel: function _onCancel() {
          this.showValue = !1, this.$emit("on-cancel");
        }
      }
    };
  },
  349: function _(t, e, i) {
    e = t.exports = i(225)(!1), e.push([t.i, '.vux-fade-enter-active,.vux-fade-leave-active{opacity:1;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.vux-fade-enter,.vux-fade-leave-to{opacity:0}.vux-dialog-enter-active,.vux-dialog-leave-active{opacity:1;-webkit-transition-duration:.4s;transition-duration:.4s;-webkit-transform:translate(-50%,-50%) scale(1)!important;transform:translate(-50%,-50%) scale(1)!important;-webkit-transition-property:opacity,-webkit-transform!important;transition-property:opacity,-webkit-transform!important;transition-property:transform,opacity!important;transition-property:transform,opacity,-webkit-transform!important}.vux-dialog-leave-active{-webkit-transition-duration:.3s;transition-duration:.3s}.vux-dialog-enter{opacity:0;-webkit-transform:translate(-50%,-50%) scale(1.185)!important;transform:translate(-50%,-50%) scale(1.185)!important}.vux-dialog-leave-active{opacity:0;-webkit-transform:translate(-50%,-50%) scale(.85)!important;transform:translate(-50%,-50%) scale(.85)!important}.vux-mask-enter,.vux-mask-leave-active{opacity:0}.vux-mask-enter-active,.vux-mask-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.weui-mask{background:rgba(0,0,0,.6)}.weui-mask,.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-dialog{position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.weui-dialog__hd{padding:1.3em 1.6em .5em}.weui-dialog__title{font-weight:400;font-size:18px}.weui-dialog__bd{padding:0 1.6em .8em;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;color:#999}.weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.weui-dialog__ft{position:relative;line-height:48px;font-size:18px;display:-webkit-box;display:-webkit-flex;display:flex}.weui-dialog__ft:after{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-dialog__btn{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.weui-dialog__btn:active{background-color:#eee}.weui-dialog__btn:after{content:" ";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.weui-dialog__btn:first-child:after{display:none}.weui-dialog__btn_default{color:#353535}.weui-dialog__btn_primary{color:#0bb20c}.weui-skin_android .weui-dialog{text-align:left;box-shadow:0 6px 30px 0 rgba(0,0,0,.1)}.weui-skin_android .weui-dialog__title{font-size:21px}.weui-skin_android .weui-dialog__hd{text-align:left}.weui-skin_android .weui-dialog__bd{color:#999;padding:.25em 1.6em 2em;font-size:17px;text-align:left}.weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:42px;font-size:16px;padding:0 1.6em .7em}.weui-skin_android .weui-dialog__ft:after{display:none}.weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.weui-skin_android .weui-dialog__btn:after{display:none}.weui-skin_android .weui-dialog__btn:active,.weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,.06)}.weui-skin_android .weui-dialog__btn:last-child{margin-right:-.8em}.weui-skin_android .weui-dialog__btn_default{color:gray}@media screen and (min-width:1024px){.weui-dialog{width:35%}}.vux-prompt{padding-bottom:1.6em}.vux-prompt-msgbox{width:80%;border:1px solid #dedede;border-radius:5px;padding:4px 5px;-webkit-appearance:none;appearance:none;outline:none;font-size:16px}', ""]);
  },
  350: function _(t, e, i) {
    var o = i(349);
    "string" == typeof o && (o = [[t.i, o, ""]]), o.locals && (t.exports = o.locals);
    i(226)("6f2d4fde", o, !0);
  },
  351: function _(t, e) {
    t.exports = {
      render: function render() {
        var t = this,
            e = t.$createElement,
            i = t._self._c || e;
        return i("div", [i("x-dialog", {
          attrs: {
            dialogClass: "android" === t.theme ? "weui-dialog weui-skin_android" : "weui-dialog",
            "mask-transition": t.maskTransition,
            "dialog-transition": "android" === t.theme ? "vux-fade" : t.dialogTransition,
            "hide-on-blur": t.hideOnBlur
          },
          on: {
            "on-hide": function onHide(e) {
              t.$emit("on-hide");
            }
          },
          model: {
            value: t.showValue,
            callback: function callback(e) {
              t.showValue = e;
            },
            expression: "showValue"
          }
        }, [t.title ? i("div", {
          staticClass: "weui-dialog__hd"
        }, [i("strong", {
          staticClass: "weui-dialog__title"
        }, [t._v(t._s(t.title))])]) : t._e(), t._v(" "), t.showInput ? i("div", {
          staticClass: "vux-prompt"
        }, [i("input", t._b({
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.msg,
            expression: "msg"
          }],
          ref: "input",
          staticClass: "vux-prompt-msgbox",
          attrs: {
            placeholder: t.placeholder
          },
          domProps: {
            value: t.msg
          },
          on: {
            input: function input(e) {
              e.target.composing || (t.msg = e.target.value);
            }
          }
        }, "input", t.inputAttrs))]) : i("div", {
          staticClass: "weui-dialog__bd"
        }, [t._t("default", [i("div", {
          domProps: {
            innerHTML: t._s(t.content)
          }
        })])], 2), t._v(" "), i("div", {
          staticClass: "weui-dialog__ft"
        }, [i("a", {
          staticClass: "weui-dialog__btn weui-dialog__btn_default",
          attrs: {
            href: "javascript:;"
          },
          on: {
            click: t._onCancel
          }
        }, [t._v(t._s(t.cancelText || "取消"))]), t._v(" "), i("a", {
          staticClass: "weui-dialog__btn weui-dialog__btn_primary",
          attrs: {
            href: "javascript:;"
          },
          on: {
            click: t._onConfirm
          }
        }, [t._v(t._s(t.confirmText || "确定"))])])])], 1);
      },
      staticRenderFns: []
    };
  },
  352: function _(t, e, i) {
    function o(t) {
      i(350);
    }

    var s = i(5)(i(348), i(351), o, null, null);
    t.exports = s.exports;
  },
  354: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = i(352),
        s = i.n(o);
    e["default"] = {
      name: "myConfirm",
      props: ["options"],
      components: {
        Confirm: s.a
      }
    };
  },
  355: function _(t, e, i) {
    e = t.exports = i(225)(!1), e.push([t.i, ".confirm{position:fixed;left:0;top:0;right:0;bottom:0;z-index:100000000}.confirm.fadeIn-enter-active{-webkit-transition:all .3s ease;transition:all .3s ease}.confirm.fadeIn-enter{opacity:0}.confirm .weui-dialog{border-radius:8px}.confirm .weui-dialog__btn_default,.confirm .weui-dialog__title{color:#000}.confirm .weui-dialog__btn_primary{color:#28a0f6}.confirm .weui-mask{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.confirm .weui-dialog,.confirm .weui-mask{display:block!important}.confirm .weui-dialog__hd{padding:1.3em 1.6em .6em;color:#000}.confirm .weui-dialog__hd .weui-dialog__title{font-size:.17rem}.confirm .weui-dialog__bd{font-size:.14rem;color:#888;min-height:30px;height:.56rem}.confirm .weui-dialog__ft{color:#000;font-size:.17rem;line-height:40px}", ""]);
  },
  356: function _(t, e, i) {
    var o = i(355);
    "string" == typeof o && (o = [[t.i, o, ""]]), o.locals && (t.exports = o.locals);
    i(226)("2818eedc", o, !0);
  },
  357: function _(t, e) {
    t.exports = {
      render: function render() {
        var t = this,
            e = t.$createElement,
            i = t._self._c || e;
        return i("transition", {
          attrs: {
            name: "fadeIn"
          }
        }, [i("confirm", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.options.showConfirmBox,
            expression: "options.showConfirmBox"
          }],
          staticClass: "confirm",
          attrs: {
            show: t.options.showConfirmBox,
            "close-on-confirm": !1,
            title: t.options.confirmTitle,
            content: t.options.confirmContent
          },
          on: {
            "on-confirm": t.options.showConfirm,
            "on-cancel": t.options.hideConfirm
          }
        })], 1);
      },
      staticRenderFns: []
    };
  },
  358: function _(t, e, i) {
    t.exports = {
      "default": i(360),
      __esModule: !0
    };
  },
  360: function _(t, e, i) {
    i(362), t.exports = i(1).Object.keys;
  },
  361: function _(t, e, i) {
    var o = i(6),
        s = i(1),
        n = i(13);

    t.exports = function (t, e) {
      var i = (s.Object || {})[t] || Object[t],
          a = {};
      a[t] = e(i), o(o.S + o.F * n(function () {
        i(1);
      }), "Object", a);
    };
  },
  362: function _(t, e, i) {
    var o = i(32),
        s = i(21);
    i(361)("keys", function () {
      return function (t) {
        return s(o(t));
      };
    });
  },
  520: function _(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAhFBMVEUAAADmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DmQ0DAvniwAAAAK3RSTlMA+kTQuqNZ7K9yYT0M9XcrJyMf3ZCBfm1lGOXUoZuMh2hTUEwFw8C9tCYVCrKXLgAAARdJREFUOMt1kueSgzAMhJcaCCWUFLj0clXv/343sgixifh+MLJ2PczKAvBDxx469xJYLYio2GlyExH5aBJivn/f9NQjIr4ZG4fXufLqk5s3qVtjOdh6x519BSH/Mo6gHvWIz8kDboMKX051wKc1bM5kuHDtF1ymcEnFsQGWpogxpRNHKvod74gi+NCIn7KXQSdeiF5hjlAM2zn9RAMnXV/TyHleD8Sh/GU7DCoUx3KqX0w7AdCqo7ia5p7L3hOHEzaTfH/WgRb5S6+llbkPF4x6LhMsx0YijggDEi3Eiw+yr0iw4mGvrP2qkRarJKFBP+hHuAQkjJkwoaHn5KpWX6ENt3cmZGglcJPEEA5UaztqbfYNCvmVv/8/pTeuZDRZFwAAAABJRU5ErkJggg==";
  },
  521: function _(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAMAAABemGpIAAAAclBMVEUAAAAooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPZmaLgPAAAAJXRSTlMAIAL05bu1q4p0QNLJGQwG+NfBpZ9lX08T7NCZkoBZRTXd3M0nbvsAoAAAAPFJREFUOMuNklkOgzAMRB2Wlh1KS0v3de5/xYq4KBGhxO8voyfLjobk3NZSs+5yQKYGaQSgEbn7JwYigZoVWg2vpVetEmjOfpXukVZPD8Fhv7EJ+VEb3vYucA+hdnMlcFNo4mCSlzfXPbO7db4nwm6axew6eT/csSKbIP4zV/FXFnZ2Ytfp2ecIJjZzW04KpyRg7E0Kfm+CqXyFIeVox6+mJ4f+YuxsCBIwj/kOvkc5rIg6MAeah4fx+cqstFADJmvHYxdQOWxetMzKlr1FWxu3IxLYvoXdpjU1SeAr9ySiGkrVkpAMQElSLkhJTL1duO4L1dwqYVFhAW4AAAAASUVORK5CYII=";
  },
  522: function _(t, e, i) {
    function o(t) {
      i(570);
    }

    var s = i(5)(i(564), i(588), o, null, null);
    t.exports = s.exports;
  },
  538: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = {
      name: "QuestionGrid",
      props: ["options", "currentQuestionIndex", "isEvaluation"],
      data: function data() {
        return {
          single: this.options.options.single,
          multiple: this.options.options.multiple,
          judge: this.options.options.judge,
          fill: this.options.options.fill,
          answer: this.options.options.answer,
          resultArr: [],
          questionLen: 0
        };
      },
      methods: {
        _navToQuestion: function _navToQuestion(t) {
          this.$emit("_navToQuestion", t);
        },
        _submitExam: function _submitExam() {
          this.$emit("submitExam", this.resultArr);
        },
        _checkAnswer: function _checkAnswer() {
          var t = this.single || [],
              e = this.multiple || [],
              i = this.judge || [],
              o = this.fill || [],
              s = this.answer || [],
              n = t.length,
              a = e.length,
              r = i.length,
              l = o.length,
              u = s.length;
          this.questionLen = n + a + r + l + u;

          for (var c = [], d = [], m = [], f = [], p = [], h = 0; h < n; h++) {
            t[h].length > 0 ? c.push(!0) : c.push(!1);
          }

          for (var g = 0; g < a; g++) {
            e[g].length > 0 ? d.push(!0) : d.push(!1);
          }

          for (var w = 0; w < r; w++) {
            i[w].length > 0 ? m.push(!0) : m.push(!1);
          }

          for (var b = 0; b < l; b++) {
            "" === o[b].join("") ? f.push(!1) : f.push(!0);
          }

          for (var x = 0; x < u; x++) {
            "" === s[x][0] ? p.push(!1) : p.push(!0);
          }

          this.resultArr = c.concat(d, m, f, p);
        }
      },
      created: function created() {
        this._checkAnswer();
      }
    };
  },
  542: function _(t, e, i) {
    e = t.exports = i(225)(!1), e.push([t.i, '.question-grid{position:absolute;left:0;top:0;right:0;bottom:0;z-index:9999}.question-grid.upward-enter-active,.question-grid.upward-leave-active{-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;-webkit-transform:translateZ(0);transform:translateZ(0)}.question-grid.upward-enter,.question-grid.upward-leave-to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.question-grid .mask,.question-grid .submit-btn,.question-grid .wrapper{position:absolute;width:100%;bottom:0}.question-grid .mask{top:0;background-color:#000;opacity:.4;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.question-grid .wrapper{bottom:.49rem;background-color:#fff;overflow:hidden}.question-grid .grid{overflow:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-top:.5rem;width:100%;max-height:55vh;bottom:0;padding:.09rem 0}.question-grid .top-bar{position:absolute;top:0;padding:.15rem;background-color:#fff;color:#000;width:100%;font-size:0}.question-grid .top-bar .left-box{margin-top:.02rem}.question-grid .top-bar .answered,.question-grid .top-bar .close,.question-grid .top-bar .left-box,.question-grid .top-bar .no-answer,.question-grid .top-bar .question-icon,.question-grid .top-bar .question-num{display:inline-block;vertical-align:middle}.question-grid .top-bar .question-icon{width:.14rem;margin-right:.06rem}.question-grid .top-bar .question-num{font-size:.14rem}.question-grid .top-bar .close{position:absolute;right:.15rem;margin-top:-.015rem;font-size:0}.question-grid .top-bar .close-span,.question-grid .top-bar .close-svg{display:inline-block;vertical-align:middle}.question-grid .top-bar .close-span{font-size:.14rem}.question-grid .top-bar .close-svg{width:.17rem;margin-top:.0125rem;margin-right:.05rem}.question-grid .top-bar .middle-box{position:absolute;text-align:center;left:0;right:0;top:.165rem;height:.14rem;line-height:.14rem;margin:0 auto;font-size:.14rem;color:#000}.question-grid .top-bar .middle-box .desc{font-size:.14rem;display:inline-block;vertical-align:top}.question-grid .top-bar .answered,.question-grid .top-bar .no-answer{font-size:0}.question-grid .top-bar .no-answer{margin-right:.12rem}.question-grid .top-bar .no-answer .circle{border:1px solid #b2b2b2}.question-grid .top-bar .desc{margin-top:.024rem}.question-grid .top-bar .answered .circle{border:1px solid #28a0f6}.question-grid .top-bar .circle{display:inline-block;width:.13rem;height:.13rem;border-radius:50%;margin-top:.01rem;margin-right:.05rem}.question-grid .grid-li{width:16.66666%;float:left;text-align:center;display:inline-block;vertical-align:middle;padding:.06rem 0}.question-grid .grid-li .bg{display:inline-block;width:.35rem;height:.35rem;line-height:.35rem;box-sizing:border-box;border-radius:50%;border:1px solid #b2b2b2;font-size:.15rem;color:#b2b2b2}.question-grid .grid-li.active .bg{background-color:#e3f3ff;color:#28a0f6;border:1px solid #28a0f6}.question-grid .grid-li.current-circle .bg{background-color:#28a0f6;color:#fff;border:1px solid #28a0f6}.question-grid .grid:after{content:" ";display:block;height:0;clear:both;visibility:hidden}.question-grid .submit-btn{height:.49rem;line-height:.49rem;text-align:center;font-size:.2rem;color:#fff;background-color:#28a0f6}', ""]);
  },
  547: function _(t, e, i) {
    var o = i(542);
    "string" == typeof o && (o = [[t.i, o, ""]]), o.locals && (t.exports = o.locals);
    i(226)("c970d086", o, !0);
  },
  549: function _(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB0CAMAAABwk6bhAAABjFBMVEUAAAD///9xufIooPYooPYooPYooPYooPYooPbp6ekooPYooPbo6Ojo6OgooPbo6Ojo6Ojr6+vq6urp6enp6eno6OgooPbo6OgooPYooPYooPbo6OgooPYooPYooPYooPYooPYooPbp6ekooPbo6Ojo6Ojo6Ojo6OgooPbo6Ojo6Ojo6OgooPbo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OgooPYooPYooPbo6OgooPbo6Ojo6Ojo6OhZtvgooPbo6OgooPYooPYooPb6+voooPbo6OgooPbo6Ojo6Ojo6Ojo6Ojo6OgooPb///+h1fuGyvr8/v/9/f01pvdKr/jH5v12w/nw8PDs7Oxzwfn6+vrR6/309PT4/P/u7u4rofaAx/r4+PhVtPja7/0/qvf8/Pz29vYqofbJ5/1qvfm/4/yd1PuRzvqJy/ptv/lZtvhFrff0+v/m9P7d8P6Dyfpgufjy8vLt9/7C5Pyy3fwxpPbh8v7M6f2s2vym2Ptku/k6qffF5f2X0fuLzPpHrvcB7yLeAAAATHRSTlMAqgLlQe+TI/z3s5iQWCwRC/377ebDrqJMSPTYysaHdBoM8um4qpx8cTsnHNzOloZ0akQG4ZmOjIByZFw15d/e1by6rG5OMC8kGMWskdbwMwAABWhJREFUaN7NmFdTGzEQgBVXXOg2mN5DSSCQ3nvPyg1yxnHDGIMDobfQU/54mIwnYN1J6E4Sk+/NfvlmV7t7KyHz2EbejPsHgm23Gz0Nnsbbz0aDA/7xNyM2pJqRan+wN5HRUsVkMhbDGMdic8lkMaVlEr1B/6MRpIra6uZAQkvNxLAhsZmUlgg0V9cqMD/sb8gU5/AFzBUzDf0P5fpvDng0fcS0DGiegZuyzHUTbYkiaWb7i4m2iToZ+b7fqCWxaZJa4/1a0agHe7fnsCXmtN5Boeirb2sxbJmYFnhoufsff8wksRBzmdHHltS3btTPYGFm6v11FsJuIzJuOffPhk2H3UCELRL8jVtm3B+CGSJsseCDH/jdw4EUZrG+G46U8qvxPcjGVydXSpHw7jpmkQpwp/6Rh5Hy2fDyCRhwshyeZcwczyM+92CCNlaiC7kCMCjkFqK0pksM8rjHEpTj3l8qm5n+pX3KwWfGLl5TrlJK7aA0D1zMlw4o9mbbBe5m4+6eWgETrEwZ6rVmttw47o1jMMnWhmHsfpb7hpF7bTMLpslurhnYWVU3YVRruwWwROGrkX2CuizV693RCFgmEtXb6ykL1vvepH6W5UGAvH7uJRuvGS4to0VM8jUOQsT1qS+O3jIq9G1MEs6CINkwJtm+arAx6YvtG0jgm77oqkn3tUbdgedACrnohcfen6K5xe2YINVPJp2ScyWZr0x8XYBM+iJI5IhMfOD8UnlfI3ssCxLJkh2n+c9Vm4eo9I04SCW+QVR8w/t/8mai2tKTIJnJNFFzA6jMO3Km50A6OXLGvyvLPxGB74ICvhKhlxeLkYbKwNcKoIDCGnHq1wyH+iYoYZMI/W/B1xKlPpsFJWRnK0P31J7Kx4ke3wJFbBG9Pn4qb6scbgvATf40ltk8cFO50860ITRMTPUV/smB8Y8fGMf5N2piwg+jsRR34L8nz7N6iJcAlvDhasXfv4HOQuVWMYb6X105zxNWkkn2APYwAesgnlSoXgVRJW6gksY6FgEWsY70KtBwIxadQAUbsLCADfgFNDpZbpudIafCL7fbGHIHyJBHgIqDIfeplvsYcrtquZ3urgHVcqihyh+olz+gypvUy5voR65e3kdzdwOPPEohzSWHboq8hUd+CDS2uOQtFPkQj/x7nEaJSz5EkbtA/ZmDiyL3XobcS5G3X4a8nSK/fhny6xS58zLkToq8lUf+Zfo83/EZO1M88laKHJgYvhqUztzRE0hzyEFEnv5yjoOdM3kevkUF5K0iZ74FOSyQdqGCW4ZpzoKT12o7kdnyc8Ixb6sJDZmKT9gG7K39fTdbER0yXq4PSxbm5+chX/55BKsY/4RJ4fHqsiDHS7B8BIW08IdliO/M0+W0nz1kxHcwt3xIZJnQcxxfx/zyFqE1Sk85DWJrFOq7hAXy/1ydH/B81T5PfzZkOswj7xK6Lv0EGnGu65LQRTE9RWOfQ27/X6/I6h8HlD+LRKw9i6BOtfJOxMKtVu5GTJpUyr2IjUOCfIlRbmw6xOUlMKYDIauhh3ndYWbgbF4AheXFMAeLy0DhBbqYmipQQlUN4sAFSnAhHnrsoAB7D+IiBAoIIU58IB0f4qXnOUjmeQ/ixu0EqTjdyAShKqldFkKm6AKJvEYmuQfSuIvMYrsDkrhjQ+btPsVutl1K5u/ZkDVeVwnX+RCyTMgp2N8hJIC7AwTocCMhbHcFWsyGRGmxgyXsISSBHleVhUpz9SA51LwEk7ysQfJwdJgqNAeSi8PLm3yvA8nH3WnnKLNON1KDzeGzM80+hw2p5G1XUx8Y0NfU9ZYwq6G7pcvlbX/qbAVodT5t97q6WrqRBf4AC/vfqYQo9U0AAAAASUVORK5CYII=";
  },
  550: function _(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAlCAMAAACeRoI0AAAAb1BMVEUAAACwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLAkRfGRAAAAJHRSTlMAufIgrmLbpEsz+ebRxZyUinBIKBYLBO3hy4J7Z1U8LRJcU0HKfS2UAAAAsElEQVQoz42PRxKDMBAEkUTOiJxsbOv/b/TulR1VwbG70PYEVutvAD7lnOsAf+UkWiD6gkQCxFCSUJMUE98oB/BLQqLogWhJ5D8gOhLuA8TpfEO0b8jiGXKtniGBd0jNQ95AbDzEAnFwbwSEjUmc6AbObQhreTokvJg7HSvC63XHhm+G4o1sJlwLnHL6JnCEF+2MU5ydwewYZ1fj02xNuMHZ+9PsA2dz4MzZokUpA/AfeyAVq0rECxgAAAAASUVORK5CYII=";
  },
  551: function _(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAlCAMAAACeRoI0AAAAaVBMVEUAAACwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLAmGKgjAAAAInRSTlMAufJKYiLbraR+Myv55tHFnJSKcFQWCwTt4ctnQzweErNZWC6Y0QAAAK1JREFUKM+tkUkSgyAABAVFxX3BPdGE/z8ywxWGWzh2V0FPkZBjpEwJnq21IsQTcPMOcAnc1j7dBHC3+HjpgMXm47oFLoOrXw3wFOCvxZlptjU0W/LsQ9Hs8+HZCc0eeLYOcOb6rgAb0Jx8Q0nvxqMSYiRCHRAFEc8J0a/EfNzbNxEDxF4Rod0I1PJ1GRGpE5qIKjokjwxZ+9iQwg1RRIwQ8o9DLjZk57nJLYT6ASq4FJBDZfMTAAAAAElFTkSuQmCC";
  },
  552: function _(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAALVBMVEUAAAAooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPYooPZI4kUlAAAADnRSTlMAD/DQ+eC968mwGxQiCE8P+KYAAABzSURBVBjTY9j5DgSyGJaB6dkM85yUlJRUnjHkgemXDE82MDAwMOoJPhcA0tx+DI8YQCBO8DGY1qM7/wnIHbx1gs8vgNzlx5BXbGxsbP6CoQ9MP4P6o4fhBNRfDIIgwICLRlePbh6afYPA/6jxgR5f6PEJABsSdy8FUQdeAAAAAElFTkSuQmCC";
  },
  556: function _(t, e, i) {
    t.exports = {
      render: function render() {
        var t = this,
            e = t.$createElement,
            o = t._self._c || e;
        return o("transition", {
          attrs: {
            name: "upward"
          }
        }, [o("div", {
          staticClass: "question-grid"
        }, [o("div", {
          staticClass: "mask"
        }), t._v(" "), o("div", {
          staticClass: "wrapper"
        }, [o("div", {
          staticClass: "top-bar vux-1px-b"
        }, [o("div", {
          staticClass: "left-box"
        }, [o("img", {
          staticClass: "question-icon",
          attrs: {
            src: i(552)
          }
        }), t._v(" "), o("span", {
          staticClass: "question-num"
        }, [t._v(t._s(t.currentQuestionIndex + 1 || 0) + "/" + t._s(t.questionLen || 0))])]), t._v(" "), o("div", {
          staticClass: "middle-box"
        }, [o("div", {
          staticClass: "no-answer"
        }, [o("div", {
          staticClass: "circle"
        }), t._v(" "), o("div", {
          staticClass: "desc"
        }, [t._v("未答")])]), t._v(" "), o("div", {
          staticClass: "answered"
        }, [o("div", {
          staticClass: "circle"
        }), t._v(" "), o("div", {
          staticClass: "desc"
        }, [t._v("已答")])])]), t._v(" "), o("div", {
          staticClass: "close",
          on: {
            click: function click(e) {
              e.stopPropagation(), t.options.closeGrid(e);
            }
          }
        }, [o("svg", {
          staticClass: "close-svg",
          attrs: {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 1024 1024",
            "enable-background": "new 0 0 1024 1024",
            "xml:space": "preserve"
          }
        }, [o("path", {
          attrs: {
            fill: "#28a0f6",
            d: "M570.2,512l378-378c16.1-16.1,16.1-42.1,0-58.2c-16.1-16.1-42.1-16.1-58.2,0l-378,378l-378-378\n\tc-16.1-16.1-42.1-16.1-58.2,0C59.8,92,59.8,118,75.8,134l378,378l-378,378c-16.1,16.1-16.1,42.1,0,58.2c16.1,16.1,42.1,16.1,58.2,0\n\tl378-378l378,378c16.1,16.1,42.1,16.1,58.2,0c16.1-16.1,16.1-42.1,0-58.2L570.2,512z M570.2,512"
          }
        }), t._v(" "), o("rect", {
          attrs: {
            x: "255.6",
            y: "255.1",
            fill: "none",
            width: "512.9",
            height: "513.8"
          }
        })]), t._v(" "), o("div", {
          staticClass: "close-span"
        }, [t._v("关闭")])])]), t._v(" "), o("ul", {
          staticClass: "grid"
        }, t._l(t.resultArr, function (e, i) {
          return o("li", {
            key: i,
            staticClass: "grid-li",
            "class": {
              active: e,
              "current-circle": t.currentQuestionIndex === i
            },
            on: {
              click: function click(e) {
                e.stopPropagation(), t._navToQuestion(i);
              }
            }
          }, [o("div", {
            staticClass: "bg"
          }, [o("span", [t._v(t._s(i + 1))])])]);
        }))]), t._v(" "), o("div", {
          staticClass: "submit-btn",
          on: {
            click: function click(e) {
              e.stopPropagation(), t._submitExam(e);
            }
          }
        }, [t._v(t._s(t.isEvaluation ? "提交" : "交卷"))])])]);
      },
      staticRenderFns: []
    };
  },
  561: function _(t, e, i) {
    function o(t) {
      i(547);
    }

    var s = i(5)(i(538), i(556), o, null, null);
    t.exports = s.exports;
  },
  564: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = {
      name: "QuestionAnalyze",
      props: ["analysis", "successAnswers", "type"],
      data: function data() {
        return {
          analyzeType: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
        };
      }
    };
  },
  565: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = i(522),
        s = i.n(o);
    e["default"] = {
      name: "SingleMultipleQuestion",
      props: ["analysis", "examState", "options", "questionID", "clickable", "showScore"],
      data: function data() {
        return {
          questionData: "string" == typeof this.options.options ? JSON.parse(this.options.options) : this.options.options.slice(),
          otherArr: '[""]',
          questionType: ["single", "multiple"],
          questionTypeValue: ["单选题", "多选题"],
          number: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"],
          questionContent: {
            showScore: void 0 === this.showScore || this.showScore
          }
        };
      },
      computed: {
        rightAnswers: function rightAnswers() {
          for (var t = JSON.parse(this.options.successAnswers), e = this.questionData.slice(), i = t.length, o = "", s = 0; s < i; s++) {
            var n = e.indexOf(t[s]);

            if (-1 === n) {
              o = "此题已做更改!";
              break;
            }

            o += this.number[n];
          }

          return o;
        },
        questionAnswers: function questionAnswers() {
          return JSON.parse(this.options.answers || this.options.answer || this.otherArr);
        }
      },
      components: {
        questionAnalyze: s.a
      },
      methods: {
        switchActive: function switchActive(t) {
          if (!this.analysis) {
            if (!this.clickable) return;
            var e = this.$refs,
                i = e.radio,
                o = e.questionLi,
                s = this.options.type;

            if (1 === s) {
              for (var n = i.length, a = 0; a < n; a++) {
                o[a].setAttribute("chosen", "false"), i[a].classList.remove("active");
              }

              o[t].setAttribute("chosen", "true"), i[t].classList.add("active");
            }

            if (2 === s) {
              var r = o[t];
              "false" === r.getAttribute("chosen") ? r.setAttribute("chosen", "true") : r.setAttribute("chosen", "false"), i[t].classList.toggle("active");
            }

            e = null, o = null, i = null;
          }
        }
      }
    };
  },
  567: function _(t, e, i) {
    e = t.exports = i(225)(!1), e.push([t.i, ".question-analyze{color:#353535}.question-analyze .sub{font-size:.14rem;color:#888;padding:.15rem .15rem .1rem;line-height:.14rem;background-color:#f0eff5}.question-analyze .body{padding:.15rem;background-color:#fff}.question-analyze .analyze-li{margin-bottom:.12rem}.question-analyze .analyze-li:last-child{margin-bottom:0}.question-analyze .analyze-detail{word-wrap:break-word}", ""]);
  },
  568: function _(t, e, i) {
    e = t.exports = i(225)(!1), e.push([t.i, ".single-multiple-question{padding-top:.15rem;background-color:#fff}.single-multiple-question .subject{padding:0 .15rem;font-weight:700}.single-multiple-question .question-num{color:#28a0f6}.single-multiple-question .answer-state{width:.16rem;height:.16rem;margin-bottom:-.018rem;margin-left:.08rem}.single-multiple-question .splitLine{font-size:.14rem;color:#888;padding:.15rem .15rem .1rem;line-height:.14rem;background-color:#f0eff5}.single-multiple-question .right-answer{color:#e64540;padding:.15rem}.single-multiple-question .sub{font-size:.14rem;color:#888;padding:.15rem .15rem .1rem;line-height:.14rem;background-color:#f0eff5}.single-multiple-question .answer-content{padding:.14rem;color:#e64540}.single-multiple-question .question-ul{font-size:0;color:#000;padding:.15rem}.single-multiple-question .question-ul .option{font-size:.17rem;margin-bottom:.2rem}.single-multiple-question .question-ul .option:hover{cursor:pointer}.single-multiple-question .question-ul .option:last-child{margin-bottom:0}.single-multiple-question .question-ul .radio{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:.25rem;height:.25rem;color:#28a0f6;border:1px solid #28a0f6;border-radius:50%}.single-multiple-question .question-ul .radio.active{background-color:#28a0f6;color:#fff}.single-multiple-question .question-ul .index-id{font-size:.14rem}", ""]);
  },
  570: function _(t, e, i) {
    var o = i(567);
    "string" == typeof o && (o = [[t.i, o, ""]]), o.locals && (t.exports = o.locals);
    i(226)("e6a3d8fe", o, !0);
  },
  571: function _(t, e, i) {
    var o = i(568);
    "string" == typeof o && (o = [[t.i, o, ""]]), o.locals && (t.exports = o.locals);
    i(226)("6ef12cdd", o, !0);
  },
  588: function _(t, e) {
    t.exports = {
      render: function render() {
        var t = this,
            e = t.$createElement,
            i = t._self._c || e;
        return t.analysis ? i("div", {
          staticClass: "question-analyze"
        }, [i("div", {
          staticClass: "sub"
        }, [t._v("解析")]), t._v(" "), i("ul", {
          staticClass: "body"
        }, [t.analysis ? i("p", {
          staticClass: "analyze-li analyze-detail"
        }, [t._v("\n            " + t._s(t.analysis) + "\n        ")]) : t._e(), t._v(" "), t.type < 4 ? i("li", {
          staticClass: "analyze-li"
        }, [t._v("\n            故正确答案为 "), i("span", {
          staticStyle: {
            color: "#e64540"
          }
        }, [t._v(t._s(t.successAnswers))])]) : t._e()])]) : t._e();
      },
      staticRenderFns: []
    };
  },
  589: function _(t, e, i) {
    t.exports = {
      render: function render() {
        var t = this,
            e = t.$createElement,
            o = t._self._c || e;
        return o("div", {
          staticClass: "single-multiple-question"
        }, [o("div", {
          staticClass: "subject"
        }, [o("span", {
          staticClass: "question-num"
        }, [t._v(t._s(t.questionID) + ".")]), t._v(t._s(t.options.examQuestionTitle) + "\n        "), t.questionContent.showScore ? o("span", [t._v("（" + t._s(t.options.score || 0) + "分）")]) : t._e(), t._v(" "), t.analysis ? o("img", {
          staticClass: "answer-state",
          attrs: {
            src: i(t.analysis && t.options.score ? 521 : 520)
          }
        }) : t._e()]), t._v(" "), o("ul", {
          staticClass: "question-ul",
          "class": t.questionType[t.options.type - 1],
          attrs: {
            examquestionid: t.options.examQuestionId
          }
        }, t._l(t.questionData, function (e, i) {
          return o("li", {
            key: i,
            ref: "questionLi",
            refInFor: !0,
            staticClass: "option",
            attrs: {
              chosen: t.examState && -1 !== t.questionAnswers.indexOf(t.questionData[i]) ? "true" : "false",
              answerkey: t.questionData[i]
            },
            on: {
              click: function click(e) {
                e.stopPropagation(), t.switchActive(i);
              }
            }
          }, [o("div", {
            ref: "radio",
            refInFor: !0,
            staticClass: "radio",
            "class": {
              active: !(!t.analysis && !t.examState) && -1 !== t.questionAnswers.indexOf(t.questionData[i])
            }
          }, [o("span", {
            staticClass: "index-id"
          }, [t._v(t._s(t.number[i]))])]), t._v(" "), o("span", [t._v(t._s(e))])]);
        })), t._v(" "), t.analysis ? o("div", [o("div", {
          staticClass: "splitLine"
        }, [t._v("正确答案")]), t._v(" "), o("div", {
          staticClass: "right-answer"
        }, [t._v(t._s(t.rightAnswers))]), t._v(" "), o("question-analyze", {
          attrs: {
            successAnswers: t.rightAnswers,
            analysis: t.options.analysis,
            type: 1
          }
        })], 1) : t._e()]);
      },
      staticRenderFns: []
    };
  },
  592: function _(t, e, i) {
    function o(t) {
      i(571);
    }

    var s = i(5)(i(565), i(589), o, null, null);
    t.exports = s.exports;
  },
  599: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = i(522),
        s = i.n(o);
    e["default"] = {
      name: "AnswerQuestion",
      props: ["analysis", "examState", "options", "questionID", "showScore"],
      data: function data() {
        return {
          questionAnswers: JSON.parse(this.options.answers),
          questionContent: {
            showScore: void 0 === this.showScore || this.showScore
          }
        };
      },
      computed: {
        successAnswers: function successAnswers() {
          return JSON.parse(this.options.successAnswers)[0];
        },
        examAnswers: function examAnswers() {
          return JSON.parse(this.options.answers);
        }
      },
      components: {
        questionAnalyze: s.a
      }
    };
  },
  611: function _(t, e, i) {
    e = t.exports = i(225)(!1), e.push([t.i, ".answer-question{padding-top:.15rem;background-color:#fff}.answer-question .subject{padding:0 .15rem .15rem;font-weight:700}.answer-question .question-num{color:#28a0f6}.answer-question .answer-state{width:.16rem;height:.16rem;margin-bottom:-.018rem;margin-left:.08rem}.answer-question .splitLine{margin-bottom:.15rem}.answer-question .splitLine,.answer-question .splitLine-last{font-size:.14rem;color:#888;padding:.15rem .15rem .1rem;line-height:.14rem;background-color:#f0eff5}.answer-question .right-answer{color:#e64540;padding:.15rem;word-wrap:break-word}.answer-question .question-ul{font-size:0;color:#000;padding-bottom:.2rem}.answer-question .question-ul .text-area{background-color:#f0eff5;border-radius:5px;text-indent:.1rem;text-align:justify;font-size:.16rem;width:100%;padding-top:.1rem}.answer-question .question-ul .text-area::-webkit-input-placeholder{color:#c1c1c1}.answer-question .question-ul .input-box{font-size:.17rem;border-bottom:1px solid #888}.answer-question .question-ul .option{width:100%;padding:0 .16rem;margin-bottom:.2rem}.answer-question .question-ul .option:last-child{margin-bottom:0}.answer-question .question-ul .option:hover{cursor:pointer}.answer-question .question-ul .answer,.answer-question .question-ul .input-box,.answer-question .question-ul .radio{display:inline-block;vertical-align:bottom}.answer-question .question-ul .radio{font-size:0;width:.25rem;height:.25rem;border-radius:50%;text-align:center;line-height:.25rem;box-sizing:border-box;color:#28a0f6;border:1px solid #28a0f6;margin-right:.1rem}.answer-question .question-ul .radio.active{background-color:#28a0f6;color:#fff}.answer-question .question-ul .index{font-size:.14rem}.answer-question .question-ul .answer{font-size:.17rem}", ""]);
  },
  617: function _(t, e, i) {
    var o = i(611);
    "string" == typeof o && (o = [[t.i, o, ""]]), o.locals && (t.exports = o.locals);
    i(226)("176963fe", o, !0);
  },
  627: function _(t, e, i) {
    t.exports = {
      render: function render() {
        var t = this,
            e = t.$createElement,
            o = t._self._c || e;
        return o("div", {
          staticClass: "answer-question"
        }, [o("div", {
          staticClass: "subject"
        }, [o("span", {
          staticClass: "question-num"
        }, [t._v(t._s(t.questionID) + ".")]), t._v(t._s(t.options.examQuestionTitle) + "\n        "), t.questionContent.showScore ? o("span", [t._v("（" + t._s(t.options.score || 0) + "分）")]) : t._e(), t._v(" "), t.analysis ? o("img", {
          staticClass: "answer-state",
          attrs: {
            src: i(t.analysis && t.options.score > 0 ? 521 : 520)
          }
        }) : t._e()]), t._v(" "), t.analysis ? o("div", {
          staticClass: "splitLine"
        }, [t._v(t._s(t.analysis ? "您的答案" : "答题"))]) : t._e(), t._v(" "), o("ul", {
          staticClass: "question-ul answer",
          attrs: {
            examquestionid: t.options.examQuestionId
          }
        }, [o("li", {
          ref: "questionLi",
          staticClass: "option answer"
        }, [o("textarea", {
          staticClass: "text-area",
          attrs: {
            cols: "20",
            rows: "10",
            placeholder: t.analysis ? t.questionAnswers ? t.questionAnswers[0] : "考生未作答！" : "请输入您的答案",
            disabled: t.analysis
          },
          domProps: {
            value: t.examAnswers
          }
        })])]), t._v(" "), t.analysis ? o("div", [o("div", {
          staticClass: "splitLine-last"
        }, [t._v("正确答案")]), t._v(" "), o("div", {
          staticClass: "right-answer"
        }, [t._v(t._s(t.successAnswers))]), t._v(" "), o("question-analyze", {
          attrs: {
            analysis: t.options.analysis,
            type: 6
          }
        })], 1) : t._e()]);
      },
      staticRenderFns: []
    };
  },
  631: function _(t, e, i) {
    function o(t) {
      i(617);
    }

    var s = i(5)(i(599), i(627), o, null, null);
    t.exports = s.exports;
  },
  646: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = i(522),
        s = i.n(o);
    e["default"] = {
      name: "FillQuestion",
      props: ["analysis", "examState", "options", "questionID", "showScore"],
      data: function data() {
        return {
          questionContent: {
            showScore: void 0 === this.showScore || this.showScore
          }
        };
      },
      computed: {
        successAnswers: function successAnswers() {
          return JSON.parse(this.options.successAnswers);
        },
        examAnswers: function examAnswers() {
          var t = this.options;
          return JSON.parse(t.answers || t.answer || '[""]');
        }
      },
      components: {
        questionAnalyze: s.a
      }
    };
  },
  647: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = i(522),
        s = i.n(o);
    e["default"] = {
      name: "Judge-Question",
      props: ["analysis", "examState", "options", "questionID", "showScore"],
      data: function data() {
        return {
          questionData: JSON.parse(this.options.options),
          otherArr: '[""]',
          number: ["A", "B"],
          questionContent: {
            showScore: void 0 === this.showScore || this.showScore
          }
        };
      },
      computed: {
        successAnswers: function successAnswers() {
          return JSON.parse(this.options.successAnswers)[0];
        },
        questionAnswers: function questionAnswers() {
          return JSON.parse(this.options.answers || this.otherArr);
        }
      },
      components: {
        questionAnalyze: s.a
      },
      methods: {
        switchActive: function switchActive(t) {
          if (!this.analysis) {
            for (var e = this.$refs, i = e.radio, o = e.questionLi, s = i.length, n = 0; n < s; n++) {
              o[n].setAttribute("chosen", "false"), i[n].classList.remove("active");
            }

            o[t].setAttribute("chosen", "true"), i[t].classList.add("active");
          }
        }
      }
    };
  },
  657: function _(t, e, i) {
    t.exports = {
      "default": i(660),
      __esModule: !0
    };
  },
  660: function _(t, e, i) {
    i(48), i(33), t.exports = i(661);
  },
  661: function _(t, e, i) {
    var o = i(7),
        s = i(49);

    t.exports = i(1).getIterator = function (t) {
      var e = s(t);
      if ("function" != typeof e) throw TypeError(t + " is not iterable!");
      return o(e.call(t));
    };
  },
  665: function _(t, e, i) {
    e = t.exports = i(225)(!1), e.push([t.i, ".fill-question{padding-top:.15rem;background-color:#fff}.fill-question .subject{padding:0 .15rem;font-weight:700}.fill-question .question-num{color:#28a0f6}.fill-question .analysis-wrap{word-wrap:break-word}.fill-question .answer-state{width:.16rem;height:.16rem;margin-bottom:-.018rem;margin-left:.08rem}.fill-question .splitLine{font-size:.14rem;color:#888;padding:.15rem .15rem .1rem;line-height:.14rem;background-color:#f0eff5}.fill-question .right-answer{word-wrap:break-word}.fill-question .right-answer .input-box{color:#e64540}.fill-question .input-box{padding:.15rem;font-size:.16rem;width:100%}.fill-question .question-ul{font-size:0;color:#000;padding-top:.2rem}.fill-question .question-ul .option:last-child{margin-bottom:0}.fill-question .question-ul .option:hover{cursor:pointer}.fill-question .question-ul .answer,.fill-question .question-ul .input-box{display:inline-block;vertical-align:bottom}.fill-question .question-ul .index{font-size:.14rem}.fill-question .question-ul .answer{font-size:.17rem}", ""]);
  },
  667: function _(t, e, i) {
    e = t.exports = i(225)(!1), e.push([t.i, ".judge-question{padding-top:.15rem;background-color:#fff}.judge-question .splitLine{font-size:.14rem;color:#888;padding:.15rem .15rem .1rem;line-height:.14rem;background-color:#f0eff5}.judge-question .right-answer{color:#e64540;padding:.15rem}.judge-question .subject{font-weight:700;padding:0 .15rem}.judge-question .question-num{color:#28a0f6}.judge-question .answer-state{width:.16rem;height:.16rem;margin-bottom:-.018rem;margin-left:.08rem}.judge-question .question-ul{font-size:0;color:#000;padding-top:.2rem}.judge-question .question-ul .option{margin-bottom:.2rem;padding:0 .15rem}.judge-question .question-ul .option:hover{cursor:pointer}.judge-question .question-ul .option:last-child{margin-bottom:0;padding-bottom:.2rem}.judge-question .question-ul .answer,.judge-question .question-ul .radio{display:inline-block;vertical-align:middle}.judge-question .question-ul .radio{font-size:0;width:.25rem;height:.25rem;border-radius:50%;text-align:center;line-height:.25rem;box-sizing:border-box;color:#28a0f6;border:1px solid #28a0f6;margin-right:.1rem}.judge-question .question-ul .radio.active{background-color:#28a0f6;color:#fff}.judge-question .question-ul .index-id{font-size:.14rem}.judge-question .question-ul .answer{font-size:.17rem}", ""]);
  },
  677: function _(t, e, i) {
    var o = i(665);
    "string" == typeof o && (o = [[t.i, o, ""]]), o.locals && (t.exports = o.locals);
    i(226)("5511a70e", o, !0);
  },
  679: function _(t, e, i) {
    var o = i(667);
    "string" == typeof o && (o = [[t.i, o, ""]]), o.locals && (t.exports = o.locals);
    i(226)("41284d67", o, !0);
  },
  701: function _(t, e, i) {
    t.exports = {
      render: function render() {
        var t = this,
            e = t.$createElement,
            o = t._self._c || e;
        return o("div", {
          staticClass: "fill-question"
        }, [o("div", {
          staticClass: "subject"
        }, [o("span", {
          staticClass: "question-num"
        }, [t._v(t._s(t.questionID) + ".")]), t._v(t._s(t.options.examQuestionTitle) + "（" + t._s(t.options.score || 0) + "分）\n    "), t._v(" "), t.analysis ? o("img", {
          staticClass: "answer-state",
          attrs: {
            src: i(t.analysis && t.options.score > 0 ? 521 : 520)
          }
        }) : t._e()]), t._v(" "), t.analysis ? t._e() : o("ul", {
          staticClass: "question-ul fill",
          attrs: {
            examquestionid: t.options.examQuestionId
          }
        }, t._l(this.options.fillNumber, function (e, i) {
          return o("li", {
            ref: "questionLi",
            refInFor: !0,
            staticClass: "option"
          }, [o("div", {
            staticClass: "splitLine"
          }, [t._v("第" + t._s(i + 1) + "空")]), t._v(" "), o("input", {
            staticClass: "input-box",
            domProps: {
              value: t.examAnswers && t.examAnswers[i]
            }
          })]);
        })), t._v(" "), t.analysis ? o("ul", {
          staticClass: "question-ul fill",
          attrs: {
            examquestionid: t.options.examQuestionId
          }
        }, t._l(t.examAnswers, function (e, i) {
          return o("li", {
            ref: "questionLi",
            refInFor: !0,
            staticClass: "option"
          }, [o("div", {
            staticClass: "splitLine"
          }, [t._v("第" + t._s(i + 1) + "空")]), t._v(" "), o("div", {
            staticClass: "input-box analysis-wrap",
            attrs: {
              readonly: ""
            }
          }, [t._v(t._s(t.examAnswers && t.examAnswers[i]))])]);
        })) : t._e(), t._v(" "), t.analysis ? o("div", [o("div", {
          staticClass: "splitLine"
        }, [t._v("正确答案")]), t._v(" "), o("div", {
          staticClass: "right-answer"
        }, t._l(t.successAnswers, function (e, i) {
          return o("div", {
            staticClass: "input-box",
            attrs: {
              readonly: ""
            }
          }, [t._v("\n        " + t._s(i + 1 + "." + e) + "\n      ")]);
        })), t._v(" "), o("question-analyze", {
          attrs: {
            analysis: t.options.analysis,
            type: 5
          }
        })], 1) : t._e()]);
      },
      staticRenderFns: []
    };
  },
  703: function _(t, e, i) {
    t.exports = {
      render: function render() {
        var t = this,
            e = t.$createElement,
            o = t._self._c || e;
        return o("div", {
          staticClass: "judge-question"
        }, [o("div", {
          staticClass: "subject"
        }, [o("span", {
          staticClass: "question-num"
        }, [t._v(t._s(t.questionID) + ".")]), t._v(t._s(t.options.examQuestionTitle) + "（" + t._s(t.options.score || 0) + "分）\n    "), t._v(" "), t.analysis ? o("img", {
          staticClass: "answer-state",
          attrs: {
            src: i(t.analysis && t.options.score ? 521 : 520)
          }
        }) : t._e()]), t._v(" "), o("ul", {
          staticClass: "question-ul judge",
          attrs: {
            examquestionid: t.options.examQuestionId
          }
        }, t._l(t.questionData, function (e, i) {
          return o("li", {
            ref: "questionLi",
            refInFor: !0,
            staticClass: "option",
            attrs: {
              answerkey: t.questionData[i],
              chosen: t.questionAnswers[0] === t.questionData[i] ? "true" : "false"
            },
            on: {
              click: function click(e) {
                e.stopPropagation(), t.switchActive(i);
              }
            }
          }, [o("div", {
            ref: "radio",
            refInFor: !0,
            staticClass: "radio",
            "class": {
              active: !(!t.analysis && !t.examState) && -1 !== t.questionAnswers.indexOf(t.questionData[i])
            }
          }, [o("span", {
            staticClass: "index-id"
          }, [t._v(t._s(t.number[i]))])]), t._v(" "), o("span", {
            staticClass: "answer"
          }, [t._v(t._s(t.questionData[i]))])]);
        })), t._v(" "), t.analysis ? o("div", [o("div", {
          staticClass: "splitLine"
        }, [t._v("正确答案")]), t._v(" "), o("div", {
          staticClass: "right-answer"
        }, [t._v(t._s(t.successAnswers))]), t._v(" "), t.analysis ? o("question-analyze", {
          attrs: {
            successAnswers: t.successAnswers,
            analysis: t.options.analysis,
            type: 3
          }
        }) : t._e()], 1) : t._e()]);
      },
      staticRenderFns: []
    };
  },
  722: function _(t, e, i) {
    function o(t) {
      i(677);
    }

    var s = i(5)(i(646), i(701), o, null, null);
    t.exports = s.exports;
  },
  723: function _(t, e, i) {
    function o(t) {
      i(679);
    }

    var s = i(5)(i(647), i(703), o, null, null);
    t.exports = s.exports;
  },
  793: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var o = i(657),
        s = i.n(o),
        n = i(358),
        a = i.n(n),
        r = i(88),
        l = i.n(r),
        u = i(28),
        c = i.n(u),
        d = i(592),
        m = i.n(d),
        f = i(723),
        p = i.n(f),
        h = i(722),
        g = i.n(h),
        w = i(631),
        b = i.n(w),
        x = i(561),
        v = i.n(x),
        A = i(346),
        _ = i.n(A),
        q = i(86),
        y = i.n(q),
        C = i(29),
        k = i(20),
        I = i(90),
        L = i(14);

    e["default"] = {
      name: "PracticeExamination",
      data: function data() {
        return {
          wsObj: {},
          currentObj: {},
          wsData: {},
          filterKeys: [],
          initExamedState: !0,
          abnormalDataObj: {},
          examFlag: !1,
          errorCount: 0,
          errorFlag: !1,
          heartflag: !1,
          text: "下一题",
          clickSubmitState: !1,
          examState: !1,
          examStartTime: null,
          examEndTime: null,
          showExamination: !1,
          ExaminationData: [],
          showTimer: !0,
          resultData: {},
          wsTempArr: [],
          wsTempObj: {},
          examRecordId: "",
          examLength: 0,
          difficultyState: ["困难", "中等", "简单"],
          difficultyColor: ["#36c55c", "#28a0f6", "#e64340"],
          ws: null,
          analysis: this.$route.query.analysis,
          questionTypeValue: ["单选题", "多选题", "判断题", "", "填空题", "问答题"],
          currentQuestionIndex: this.$route.query.currentIndex ? parseInt(this.$route.query.currentIndex) : 0,
          timer: "00:00:00",
          setTimer: null,
          showQuestionGrid: !1,
          wsState: !1,
          questionGridOptions: {
            closeGrid: this.closeGrid,
            options: {}
          },
          confirmOptions: {
            showConfirmBox: !1,
            confirmTitle: "温馨提示",
            confirmContent: "",
            showConfirm: this.showConfirmWrap,
            hideConfirm: this.hideConfirmWrap
          },
          alertOptions: {
            showAlert: !1,
            title: "提示",
            content: "试卷提交成功！"
          },
          isClose: !1,
          timerInit: null,
          currentTime: null,
          errorTimer: null
        };
      },
      computed: c()({
        questionType: function questionType() {
          var t = this.ExaminationData;
          return t.length > 0 ? this.questionTypeValue[t[this.currentQuestionIndex].type - 1] : "单选题";
        },
        difficulty: function difficulty() {
          return this.ExaminationData.length > 0 && this.ExaminationData[this.currentQuestionIndex].diffculty - 1;
        },
        ExaminationDataLen: function ExaminationDataLen() {
          return this.ExaminationData.length;
        }
      }, i.i(C.a)({
        loginInfo: function loginInfo(t) {
          return t.loginInfo;
        }
      })),
      components: {
        singleMultipleQuestion: m.a,
        judgeQuestion: p.a,
        fillQuestion: g.a,
        answerQuestion: b.a,
        questionGrid: v.a,
        confirm: _.a,
        Alert: y.a
      },
      methods: {
        navToQuestion: function navToQuestion(t) {
          this.analysis || t + 1 !== this.ExaminationDataLen ? this.text = "下一题" : this.text = "提交试卷", this.clickSubmitState = !1, this.currentQuestionIndex = t, this._sendWSData();
        },
        _sendWSData: function _sendWSData() {
          if (!this.analysis) {
            this._collectAnswers(), this._checkAnswers(), this.wsObj.token = this.loginInfo.data.token, this.wsObj.examId = this.$route.query.examId + "", this.wsObj.examRecordId = l()(this.examRecordId);
            var t = this.currentObj;

            if (a()(t).length > 0) {
              this.wsObj.answers = l()(t);

              for (var e = a()(t), i = e.length, o = 0; o < i; o++) {
                var s = e[o];
                this.abnormalDataObj[s] = t[s];
              }

              this.wsState && 1 === this.ws.readyState && (this.ws.send(l()(this.wsObj)), this.wsTempObj = this.wsData, this.wsTempArr = this.filterKeys.slice(0));
            }
          }
        },
        alertHide: function alertHide() {
          "0" === this.$route.query.isDisplay ? "1" === this.$route.query.examType ? this.$router.replace("/exercise") : this.$router.replace("/exam") : this.$router.replace({
            path: "/examination/examResult",
            query: {
              examRecordId: this.examRecordId,
              examId: this.$route.query.examId
            }
          });
        },
        _getExamList: function _getExamList() {
          var t = this,
              e = {
            token: this.loginInfo.data.token
          };
          this.analysis ? (e.examRecordId = this.$route.query.examRecordId, e.type = "c", i.i(k._2)(e).then(function (e) {
            if (0 === e.code) {
              var i = e.data,
                  o = i.length;
              t.examLength = o;
              var s = i.RADIO || [],
                  n = i.MULTISELECT || [],
                  a = i.JUDGE || [],
                  r = i.FILL || [],
                  l = i.QA || [];
              t.showTimer = !1, t.ExaminationData = s.concat(n, a, r, l), t.$nextTick(function () {
                t.showExamination = !0;
              });
            }
          })) : (e.examId = this.$route.query.examId, i.i(k._5)(e).then(function (e) {
            0 === e.code ? (t.analysis || t.initWs(), t.currentTime = e.gmt, t._traversalExam(e.data)) : t.errorTimer = setTimeout(function () {
              L.a.$vux.alert.hide(), t.$router.back(), clearTimeout(t.errorTimer), t.errorTimer = null;
            }, 1e3);
          }));
        },
        _checkAnswers: function _checkAnswers() {
          this.wsData = JSON.parse(l()(this.resultData)), this.wsObj = {}, this.currentObj = {};
          var t = this.wsData,
              e = a()(t),
              i = this.wsTempObj,
              o = this.currentObj,
              n = !0,
              r = !1,
              u = void 0;

          try {
            for (var c, d = s()(e); !(n = (c = d.next()).done); n = !0) {
              var m = c.value,
                  f = t[m],
                  p = f.length;
              if (p <= 1 && "" === f[0]) delete t[m];else {
                if (p > 1) {
                  for (var h = "", g = 0; g < p; g++) {
                    h += f[g];
                  }

                  if ("" === h) {
                    delete t[m];
                    continue;
                  }
                }

                l()(f) !== l()(i[m]) && (o[m] = f);
              }
            }
          } catch (t) {
            r = !0, u = t;
          } finally {
            try {
              !n && d["return"] && d["return"]();
            } finally {
              if (r) throw u;
            }
          }

          this.filterKeys = a()(t);
          var w = this.filterKeys.length,
              b = this.wsTempArr.slice(0);
          if (w > 0) for (var x = 0; x < w; x++) {
            var v = e[x];

            if (-1 === b.indexOf(v)) {
              void 0 !== t[v] && (o[v] = t[v]);
              break;
            }
          }
          this.initExamedState && (this.wsTempObj = t, this.wsTempArr = this.filterKeys.slice(0), this.initExamedState = !1);
        },
        _initExamedQuestion: function _initExamedQuestion() {
          this._collectAnswers(), this._checkAnswers();
        },
        _traversalExam: function _traversalExam(t) {
          var e = this;
          this.examLength = t.examLength, this.examStartTime = t.startTime, this.examEndTime = t.endTime, this.examState = !!t.startTime;
          var i = t.RADIO,
              o = t.MULTISELECT,
              s = t.JUDGE,
              n = t.FILL,
              a = t.QA;
          i.length > 0 ? this.examRecordId = i[0].examRecordId : o.length > 0 ? this.examRecordId = o[0].examRecordId : s.length > 0 ? this.examRecordId = s[0].examRecordId : n.length > 0 ? this.examRecordId = n[0].examRecordId : a.length > 0 && (this.examRecordId = a[0].examRecordId), this.ExaminationData = i.concat(o, s, n, a), this._getFormatDate(), this.analysis || this.$nextTick(function () {
            e._initExamedQuestion();
          });
        },
        clickPreQuestion: function clickPreQuestion() {
          if (!this.wsState && !this.analysis) return void window.confirm("计分系统连接中...,请稍等");
          this._sendWSData(), "提交试卷" === this.text && (this.text = "下一题"), this.clickSubmitState = !1, 0 !== this.currentQuestionIndex && this.currentQuestionIndex--;
        },
        clickNextQuestion: function clickNextQuestion() {
          return this.wsState || this.analysis ? (this._sendWSData(), "提交试卷" === this.text ? void this.clickQuestionGrid() : void (this.currentQuestionIndex !== this.ExaminationData.length - 1 && (this.clickSubmitState || ++this.currentQuestionIndex + 1 == this.ExaminationDataLen && (this.text = "提交试卷")))) : void window.confirm("计分系统连接中...,请稍等");
        },
        closeGrid: function closeGrid() {
          this.showQuestionGrid = !1;
        },
        clickQuestionGrid: function clickQuestionGrid() {
          this.analysis ? this.$router.back() : (this._collectAnswers(), this.showQuestionGrid = !0);
        },
        clickSubmitExam: function clickSubmitExam(t) {
          this.clickSubmitState = !0, this.clickNextQuestion();
          var e = 0;
          t.forEach(function (t) {
            !1 === t && e++;
          }), this.showQuestionGrid = !1, e > 0 ? (this.confirmOptions.confirmContent = "您还有" + e + "道题未作答，是否提交？", this.confirmOptions.showConfirmBox = !0) : this.showConfirmWrap();
        },
        _collectAnswers: function _collectAnswers() {
          for (var t = document.getElementsByClassName("question-ul single"), e = t.length, i = document.getElementsByClassName("question-ul multiple"), o = i.length, s = document.getElementsByClassName("question-ul judge"), n = s.length, a = document.getElementsByClassName("question-ul fill"), r = a.length, l = document.getElementsByClassName("question-ul answer"), u = l.length, c = [], d = [], m = [], f = [], p = [], h = {}, g = 0; g < e; g++) {
            for (var w = [], b = t[g], x = b.getElementsByTagName("li"), v = b.getAttribute("examquestionid"), A = x.length, _ = 0; _ < A; _++) {
              var q = x[_];
              "true" === q.getAttribute("chosen") && w.push(q.getAttribute("answerkey"));
            }

            c.push(w), w.length <= 0 && (w = [""]), h[v] = w;
          }

          for (var y = 0; y < o; y++) {
            for (var C = [], k = i[y], I = k.getElementsByTagName("li"), L = k.getAttribute("examquestionid"), O = I.length, S = 0; S < O; S++) {
              var D = I[S];
              "true" === D.getAttribute("chosen") && C.push(D.getAttribute("answerkey"));
            }

            d.push(C), C.length <= 0 && (C = [""]), h[L] = C;
          }

          for (var P = 0; P < n; P++) {
            for (var Q = [], E = s[P], j = E.getElementsByTagName("li"), T = E.getAttribute("examquestionid"), z = j.length, Y = 0; Y < z; Y++) {
              var R = j[Y];
              "true" === R.getAttribute("chosen") && Q.push(R.getAttribute("answerkey"));
            }

            m.push(Q), Q.length <= 0 && (Q = [""]), h[T] = Q;
          }

          for (var M = 0; M < r; M++) {
            for (var B = [], F = a[M], J = F.getElementsByTagName("li"), G = F.getAttribute("examquestionid"), N = J.length, U = 0; U < N; U++) {
              var K = J[U].getElementsByTagName("input")[0];
              B.push(K.value);
            }

            f.push(B), B.length <= 0 && (B = [""]), h[G] = B;
          }

          for (var V = 0; V < u; V++) {
            for (var H = [], W = l[V], Z = W.getElementsByTagName("li"), X = W.getAttribute("examquestionid"), $ = Z.length, tt = 0; tt < $; tt++) {
              var et = Z[tt].getElementsByTagName("textarea")[0];
              H.push(et.value);
            }

            p.push(H), h[X] = H;
          }

          var it = {};
          it.single = c, it.multiple = d, it.judge = m, it.fill = f, it.answer = p, this.questionGridOptions.options = it, this.resultData = h;
        },
        showConfirmWrap: function showConfirmWrap() {
          var t = this;

          if (!this.examFlag) {
            this._collectAnswers(), this.confirmOptions.showConfirmBox = !1;

            for (var e = this.resultData, o = this.currentQuestionIndex, s = a()(e)[o], n = {}, r = this.abnormalDataObj, u = a()(r), c = u.length, d = 0; d < c; d++) {
              var m = u[d];
              n[m] = r[m];
            }

            n[s] = e[s];
            var f = {
              token: this.loginInfo.data.token,
              answers: l()(n),
              examId: this.$route.query.examId,
              examRecordId: this.examRecordId,
              socket: 0
            };
            this.examFlag = !0, i.i(k._6)(f).then(function (e) {
              t.examFlag = !1, 0 === e.code && (t.alertOptions.showAlert = !0);
            })["catch"](function () {
              t.examFlag = !1;
            });
          }
        },
        hideConfirmWrap: function hideConfirmWrap() {
          this.confirmOptions.showConfirmBox = !1;
        },
        _getFormatDate: function _getFormatDate() {
          var t = this,
              e = void 0;
          e = this.examStartTime ? this.examEndTime - this.currentTime : 6e4 * this.examLength, this.setTimer = setInterval(function () {
            var i = e / 1e3,
                o = i / 60,
                s = o / 60 | 0,
                n = o % 60 | 0,
                a = i % 60 | 0;
            s < 10 && (s = "0" + s), n < 10 && (n = "0" + n), a < 10 && (a = "0" + a), e -= 1e3, t.timer = s + ":" + n + ":" + a, 0 == s && 0 == n && 0 == a && (t.alertOptions.content = "考试时间已到，试卷已强制提交！", t.showConfirmWrap(), clearInterval(t.setTimer), t.setTimer = null);
          }, 1e3), this.$nextTick(function () {
            t.showExamination = !0;
          });
        },
        initWs: function initWs() {
          var t = this,
              e = I.a.prototype.wsProtocol + I.a.prototype.wsBaseURL + I.a.prototype.wsUrl.exam;
          this.ws = new WebSocket(e), this.ws.onopen = function (e) {
            t.wsState = !0, t.$vux.toast.text("考试记录系统连接成功", "middle"), t.heartflag = !0, clearInterval(t.timerInit), t.timerInit = null, t.errorCount = 0, t.errorFlag = !1;
          }, this.ws.onclose = function () {
            t.retry();
          }, this.ws.onmessage = function (e) {
            if (e.data) {
              var i = JSON.parse(JSON.parse(e.data).answers),
                  o = a()(i)[0];

              if (o) {
                var s = t.abnormalDataObj;
                a()(s).indexOf(o) > -1 && delete s[o];
              }
            }
          }, this.ws.onerror = function () {
            t.retry();
          };
        },
        retry: function retry() {
          var t = this;
          if (!this.$route.fullPath.includes("practiceExam")) return clearInterval(this.timerInit), !1;
          this.errorFlag = !0, this.timerInit || (this.heartflag = !1, this.heartflag || (this.timerInit = setInterval(function () {
            if (t.errorCount++, t.errorCount < 10 && (t.ws = null, t.initWs()), 10 == t.errorCount) {
              clearInterval(t.timerInit), t.timerInit = null, t.errorCount = 0, t.errorFlag = !1;
              t.isClose = !0, t.alertOptions.content = "系统异常,请重新考试,将为您保留答案", t.alertOptions.showAlert = !0;
            }
          }, 3e3)));
        }
      },
      created: function created() {
        this._getExamList();
      },
      beforeDestory: function beforeDestory() {
        this.clickSubmitState = !1, this.setTimer && clearInterval(this.setTimer), this.setTimer = null, this.errorTimer && clearTimeout(this.errorTimer), this.errorTimer = null, !this.analysis && this.ws && (this.ws.close(), clearInterval(this.timerInit));
      },
      beforeRouteLeave: function beforeRouteLeave(t, e, i) {
        this.clickSubmitState = !0, this.clickNextQuestion(), this.clickSubmitState = !1, this.setTimer && clearInterval(this.setTimer), this.setTimer = null, this.errorTimer && clearTimeout(this.errorTimer), this.errorTimer = null, !this.analysis && this.ws && (this.ws.close(), clearInterval(this.timerInit)), i();
      }
    };
  },
  988: function _(t, e, i) {
    e = t.exports = i(225)(!1), e.push([t.i, ".examination{position:absolute;left:0;top:0;right:0;bottom:0;background-color:#f0eff5}.examination .wsError{position:fixed;width:100%;height:100%;background:rgba(0,0,0,.8);z-index:9999999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.examination .wsError span{color:#fff;font-size:16px}.examination .main{position:absolute;top:0;width:100%;bottom:.7rem;overflow-y:auto;-webkit-overflow-scrolling:touch}.examination .title{position:relative;height:.44rem;line-height:.47rem;background-color:#fff;font-weight:700;font-size:.17rem;color:#000;overflow:hidden;margin-bottom:.15rem}.examination .question-type{display:inline-block;padding-left:.15rem}.examination .timer{position:absolute;top:0;color:#888;right:.15rem}.examination .bottom-bar{position:absolute;bottom:0;width:100%;background-color:#fff;height:.49rem;font-size:.16rem;color:hsla(0,0%,69%,.6);z-index:9999}.examination .bottom-bar .answer-card{position:absolute;bottom:.13rem;width:.62rem;left:50%;margin-left:-.31rem;display:inline-block}.examination .bottom-bar .next-question,.examination .bottom-bar .pre-question{position:absolute;height:.49rem;line-height:.49rem}.examination .bottom-bar .icon{height:.18rem;vertical-align:middle;margin-top:-.05rem;opacity:.6}.examination .bottom-bar .pre-question{left:0;padding-left:.43rem;padding-right:.33rem}.examination .bottom-bar .pre-question .icon{margin-right:.1rem}.examination .bottom-bar .next-question{color:#28a0f6;right:0;padding-right:.43rem;padding-left:.33rem}.examination .bottom-bar .next-question .icon{margin-left:.1rem}.examination .vux-alert .weui-dialog__hd{line-height:.5rem}.examination .vux-alert .weui-dialog__bd{font-size:.14rem;color:#888;height:.3rem;line-height:.3rem;margin-bottom:.1rem}.examination .weui-dialog__title{font-size:.17rem;color:#000}.examination .weui-dialog__ft{font-size:.17rem}.examination .vux-x-dialog .weui-mask{background-color:#000;opacity:.4;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);z-index:10000}.examination .vux-x-dialog .weui-dialog{z-index:10000}", ""]);
  }
});