!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).marked = t());
})(this, function () {
  "use strict";
  function s(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function n(e) {
    return o[e];
  }
  var e,
    t =
      ((function (t) {
        function e() {
          return {
            baseUrl: null,
            breaks: !1,
            gfm: !0,
            headerIds: !0,
            headerPrefix: "",
            highlight: null,
            langPrefix: "language-",
            mangle: !0,
            pedantic: !1,
            renderer: null,
            sanitize: !1,
            sanitizer: null,
            silent: !1,
            smartLists: !1,
            smartypants: !1,
            tokenizer: null,
            xhtml: !1,
          };
        }
        t.exports = {
          defaults: e(),
          getDefaults: e,
          changeDefaults: function (e) {
            t.exports.defaults = e;
          },
        };
      })((e = { exports: {} }), e.exports),
      e.exports),
    r = (t.defaults, t.getDefaults, t.changeDefaults, /[&<>"']/),
    i = /[&<>"']/g,
    a = /[<>"']|&(?!#?\w+;)/,
    l = /[<>"']|&(?!#?\w+;)/g,
    o = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  var c = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function h(e) {
    return e.replace(c, function (e, t) {
      return "colon" === (t = t.toLowerCase())
        ? ":"
        : "#" === t.charAt(0)
        ? "x" === t.charAt(1)
          ? String.fromCharCode(parseInt(t.substring(2), 16))
          : String.fromCharCode(+t.substring(1))
        : "";
    });
  }
  var u = /(^|[^\[])\^/g;
  var p = /[^\w:]/g,
    g = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  var f = {},
    d = /^[^:]+:\/*[^/]*$/,
    k = /^([^:]+:)[\s\S]*$/,
    b = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function m(e, t) {
    f[" " + e] ||
      (d.test(e) ? (f[" " + e] = e + "/") : (f[" " + e] = x(e, "/", !0)));
    var n = -1 === (e = f[" " + e]).indexOf(":");
    return "//" === t.substring(0, 2)
      ? n
        ? t
        : e.replace(k, "$1") + t
      : "/" === t.charAt(0)
      ? n
        ? t
        : e.replace(b, "$1") + t
      : e + t;
  }
  function x(e, t, n) {
    var r = e.length;
    if (0 === r) return "";
    for (var i = 0; i < r; ) {
      var s = e.charAt(r - i - 1);
      if (s !== t || n) {
        if (s === t || !n) break;
        i++;
      } else i++;
    }
    return e.substr(0, r - i);
  }
  var w = function (e, t) {
      if (t) {
        if (r.test(e)) return e.replace(i, n);
      } else if (a.test(e)) return e.replace(l, n);
      return e;
    },
    v = h,
    _ = function (n, e) {
      (n = n.source || n), (e = e || "");
      var r = {
        replace: function (e, t) {
          return (
            (t = (t = t.source || t).replace(u, "$1")), (n = n.replace(e, t)), r
          );
        },
        getRegex: function () {
          return new RegExp(n, e);
        },
      };
      return r;
    },
    y = function (e, t, n) {
      if (e) {
        var r;
        try {
          r = decodeURIComponent(h(n)).replace(p, "").toLowerCase();
        } catch (e) {
          return null;
        }
        if (
          0 === r.indexOf("javascript:") ||
          0 === r.indexOf("vbscript:") ||
          0 === r.indexOf("data:")
        )
          return null;
      }
      t && !g.test(n) && (n = m(t, n));
      try {
        n = encodeURI(n).replace(/%25/g, "%");
      } catch (e) {
        return null;
      }
      return n;
    },
    z = { exec: function () {} },
    $ = function (e) {
      for (var t, n, r = 1; r < arguments.length; r++)
        for (n in (t = arguments[r]))
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e;
    },
    S = function (e, t) {
      var n = e
          .replace(/\|/g, function (e, t, n) {
            for (var r = !1, i = t; 0 <= --i && "\\" === n[i]; ) r = !r;
            return r ? "|" : " |";
          })
          .split(/ \|/),
        r = 0;
      if (n.length > t) n.splice(t);
      else for (; n.length < t; ) n.push("");
      for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
      return n;
    },
    A = x,
    R = function (e, t) {
      if (-1 === e.indexOf(t[1])) return -1;
      for (var n = e.length, r = 0, i = 0; i < n; i++)
        if ("\\" === e[i]) i++;
        else if (e[i] === t[0]) r++;
        else if (e[i] === t[1] && --r < 0) return i;
      return -1;
    },
    Z = function (e) {
      e &&
        e.sanitize &&
        !e.silent &&
        console.warn(
          "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
        );
    },
    q = t.defaults,
    T = A,
    I = S,
    C = w,
    O = R;
  function D(e, t, n) {
    var r = t.href,
      i = t.title ? C(t.title) : null;
    return "!" !== e[0].charAt(0)
      ? { type: "link", raw: n, href: r, title: i, text: e[1] }
      : { type: "image", raw: n, text: C(e[1]), href: r, title: i };
  }
  var E = (function () {
      function e(e) {
        this.options = e || q;
      }
      var t = e.prototype;
      return (
        (t.space = function (e) {
          var t = this.rules.block.newline.exec(e);
          if (t)
            return 1 < t[0].length
              ? { type: "space", raw: t[0] }
              : { raw: "\n" };
        }),
        (t.code = function (e, t) {
          var n = this.rules.block.code.exec(e);
          if (n) {
            var r = t[t.length - 1];
            if (r && "paragraph" === r.type)
              return (
                t.pop(),
                (r.text += "\n" + n[0].trimRight()),
                (r.raw += "\n" + n[0]),
                r
              );
            var i = n[0].replace(/^ {4}/gm, "");
            return {
              type: "code",
              raw: n[0],
              codeBlockStyle: "indented",
              text: this.options.pedantic ? i : T(i, "\n"),
            };
          }
        }),
        (t.fences = function (e) {
          var t = this.rules.block.fences.exec(e);
          if (t)
            return {
              type: "code",
              raw: t[0],
              lang: t[2] ? t[2].trim() : t[2],
              text: t[3] || "",
            };
        }),
        (t.heading = function (e) {
          var t = this.rules.block.heading.exec(e);
          if (t)
            return {
              type: "heading",
              raw: t[0],
              depth: t[1].length,
              text: t[2],
            };
        }),
        (t.nptable = function (e) {
          var t = this.rules.block.nptable.exec(e);
          if (t) {
            var n = {
              type: "table",
              header: I(t[1].replace(/^ *| *\| *$/g, "")),
              align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
              cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
              raw: t[0],
            };
            if (n.header.length === n.align.length) {
              var r,
                i = n.align.length;
              for (r = 0; r < i; r++)
                /^ *-+: *$/.test(n.align[r])
                  ? (n.align[r] = "right")
                  : /^ *:-+: *$/.test(n.align[r])
                  ? (n.align[r] = "center")
                  : /^ *:-+ *$/.test(n.align[r])
                  ? (n.align[r] = "left")
                  : (n.align[r] = null);
              for (i = n.cells.length, r = 0; r < i; r++)
                n.cells[r] = I(n.cells[r], n.header.length);
              return n;
            }
          }
        }),
        (t.hr = function (e) {
          var t = this.rules.block.hr.exec(e);
          if (t) return { type: "hr", raw: t[0] };
        }),
        (t.blockquote = function (e) {
          var t = this.rules.block.blockquote.exec(e);
          if (t) {
            var n = t[0].replace(/^ *> ?/gm, "");
            return { type: "blockquote", raw: t[0], text: n };
          }
        }),
        (t.list = function (e) {
          var t = this.rules.block.list.exec(e);
          if (t) {
            for (
              var n,
                r,
                i,
                s,
                a,
                l,
                o,
                c = t[0],
                h = t[2],
                u = 1 < h.length,
                p = {
                  type: "list",
                  raw: c,
                  ordered: u,
                  start: u ? +h : "",
                  loose: !1,
                  items: [],
                },
                g = t[0].match(this.rules.block.item),
                f = !1,
                d = g.length,
                k = 0;
              k < d;
              k++
            )
              (r = (c = n = g[k]).length),
                ~(n = n.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ") &&
                  ((r -= n.length),
                  (n = this.options.pedantic
                    ? n.replace(/^ {1,4}/gm, "")
                    : n.replace(new RegExp("^ {1," + r + "}", "gm"), ""))),
                k !== d - 1 &&
                  ((i = this.rules.block.bullet.exec(g[k + 1])[0]),
                  (1 < h.length
                    ? 1 === i.length
                    : 1 < i.length || (this.options.smartLists && i !== h)) &&
                    ((s = g.slice(k + 1).join("\n")),
                    (p.raw = p.raw.substring(0, p.raw.length - s.length)),
                    (k = d - 1))),
                (a = f || /\n\n(?!\s*$)/.test(n)),
                k !== d - 1 &&
                  ((f = "\n" === n.charAt(n.length - 1)), (a = a || f)),
                a && (p.loose = !0),
                (o = void 0),
                (l = /^\[[ xX]\] /.test(n)) &&
                  ((o = " " !== n[1]), (n = n.replace(/^\[[ xX]\] +/, ""))),
                p.items.push({
                  raw: c,
                  task: l,
                  checked: o,
                  loose: a,
                  text: n,
                });
            return p;
          }
        }),
        (t.html = function (e) {
          var t = this.rules.block.html.exec(e);
          if (t)
            return {
              type: this.options.sanitize ? "paragraph" : "html",
              raw: t[0],
              pre:
                !this.options.sanitizer &&
                ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
              text: this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(t[0])
                  : C(t[0])
                : t[0],
            };
        }),
        (t.def = function (e) {
          var t = this.rules.block.def.exec(e);
          if (t)
            return (
              t[3] && (t[3] = t[3].substring(1, t[3].length - 1)),
              {
                tag: t[1].toLowerCase().replace(/\s+/g, " "),
                raw: t[0],
                href: t[2],
                title: t[3],
              }
            );
        }),
        (t.table = function (e) {
          var t = this.rules.block.table.exec(e);
          if (t) {
            var n = {
              type: "table",
              header: I(t[1].replace(/^ *| *\| *$/g, "")),
              align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
              cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
            };
            if (n.header.length === n.align.length) {
              n.raw = t[0];
              var r,
                i = n.align.length;
              for (r = 0; r < i; r++)
                /^ *-+: *$/.test(n.align[r])
                  ? (n.align[r] = "right")
                  : /^ *:-+: *$/.test(n.align[r])
                  ? (n.align[r] = "center")
                  : /^ *:-+ *$/.test(n.align[r])
                  ? (n.align[r] = "left")
                  : (n.align[r] = null);
              for (i = n.cells.length, r = 0; r < i; r++)
                n.cells[r] = I(
                  n.cells[r].replace(/^ *\| *| *\| *$/g, ""),
                  n.header.length
                );
              return n;
            }
          }
        }),
        (t.lheading = function (e) {
          var t = this.rules.block.lheading.exec(e);
          if (t)
            return {
              type: "heading",
              raw: t[0],
              depth: "=" === t[2].charAt(0) ? 1 : 2,
              text: t[1],
            };
        }),
        (t.paragraph = function (e) {
          var t = this.rules.block.paragraph.exec(e);
          if (t)
            return {
              type: "paragraph",
              raw: t[0],
              text:
                "\n" === t[1].charAt(t[1].length - 1)
                  ? t[1].slice(0, -1)
                  : t[1],
            };
        }),
        (t.text = function (e) {
          var t = this.rules.block.text.exec(e);
          if (t) return { type: "text", raw: t[0], text: t[0] };
        }),
        (t.escape = function (e) {
          var t = this.rules.inline.escape.exec(e);
          if (t) return { type: "escape", raw: t[0], text: C(t[1]) };
        }),
        (t.tag = function (e, t, n) {
          var r = this.rules.inline.tag.exec(e);
          if (r)
            return (
              !t && /^<a /i.test(r[0])
                ? (t = !0)
                : t && /^<\/a>/i.test(r[0]) && (t = !1),
              !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0])
                ? (n = !0)
                : n &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) &&
                  (n = !1),
              {
                type: this.options.sanitize ? "text" : "html",
                raw: r[0],
                inLink: t,
                inRawBlock: n,
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(r[0])
                    : C(r[0])
                  : r[0],
              }
            );
        }),
        (t.link = function (e) {
          var t = this.rules.inline.link.exec(e);
          if (t) {
            var n = O(t[2], "()");
            if (-1 < n) {
              var r = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + n;
              (t[2] = t[2].substring(0, n)),
                (t[0] = t[0].substring(0, r).trim()),
                (t[3] = "");
            }
            var i = t[2],
              s = "";
            if (this.options.pedantic) {
              var a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
              s = a ? ((i = a[1]), a[3]) : "";
            } else s = t[3] ? t[3].slice(1, -1) : "";
            return D(
              t,
              {
                href: (i = i.trim().replace(/^<([\s\S]*)>$/, "$1"))
                  ? i.replace(this.rules.inline._escapes, "$1")
                  : i,
                title: s ? s.replace(this.rules.inline._escapes, "$1") : s,
              },
              t[0]
            );
          }
        }),
        (t.reflink = function (e, t) {
          var n;
          if (
            (n = this.rules.inline.reflink.exec(e)) ||
            (n = this.rules.inline.nolink.exec(e))
          ) {
            var r = (n[2] || n[1]).replace(/\s+/g, " ");
            if ((r = t[r.toLowerCase()]) && r.href) return D(n, r, n[0]);
            var i = n[0].charAt(0);
            return { type: "text", raw: i, text: i };
          }
        }),
        (t.strong = function (e) {
          var t = this.rules.inline.strong.exec(e);
          if (t)
            return {
              type: "strong",
              raw: t[0],
              text: t[4] || t[3] || t[2] || t[1],
            };
        }),
        (t.em = function (e) {
          var t = this.rules.inline.em.exec(e);
          if (t)
            return {
              type: "em",
              raw: t[0],
              text: t[6] || t[5] || t[4] || t[3] || t[2] || t[1],
            };
        }),
        (t.codespan = function (e) {
          var t = this.rules.inline.code.exec(e);
          if (t)
            return { type: "codespan", raw: t[0], text: C(t[2].trim(), !0) };
        }),
        (t.br = function (e) {
          var t = this.rules.inline.br.exec(e);
          if (t) return { type: "br", raw: t[0] };
        }),
        (t.del = function (e) {
          var t = this.rules.inline.del.exec(e);
          if (t) return { type: "del", raw: t[0], text: t[1] };
        }),
        (t.autolink = function (e, t) {
          var n,
            r,
            i = this.rules.inline.autolink.exec(e);
          if (i)
            return (
              (r =
                "@" === i[2]
                  ? "mailto:" + (n = C(this.options.mangle ? t(i[1]) : i[1]))
                  : (n = C(i[1]))),
              {
                type: "link",
                raw: i[0],
                text: n,
                href: r,
                tokens: [{ type: "text", raw: n, text: n }],
              }
            );
        }),
        (t.url = function (e, t) {
          var n;
          if ((n = this.rules.inline.url.exec(e))) {
            var r, i;
            if ("@" === n[2])
              i = "mailto:" + (r = C(this.options.mangle ? t(n[0]) : n[0]));
            else {
              for (
                var s;
                (s = n[0]),
                  (n[0] = this.rules.inline._backpedal.exec(n[0])[0]),
                  s !== n[0];

              );
              (r = C(n[0])), (i = "www." === n[1] ? "http://" + r : r);
            }
            return {
              type: "link",
              raw: n[0],
              text: r,
              href: i,
              tokens: [{ type: "text", raw: r, text: r }],
            };
          }
        }),
        (t.inlineText = function (e, t, n) {
          var r,
            i = this.rules.inline.text.exec(e);
          if (i)
            return (
              (r = t
                ? this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(i[0])
                    : C(i[0])
                  : i[0]
                : C(this.options.smartypants ? n(i[0]) : i[0])),
              { type: "text", raw: i[0], text: r }
            );
        }),
        e
      );
    })(),
    j = z,
    L = _,
    P = $,
    U = {
      newline: /^\n+/,
      code: /^( {4}[^\n]+\n*)+/,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
      html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
      def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
      nptable: j,
      table: j,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph:
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    };
  (U.def = L(U.def)
    .replace("label", U._label)
    .replace("title", U._title)
    .getRegex()),
    (U.bullet = /(?:[*+-]|\d{1,9}\.)/),
    (U.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
    (U.item = L(U.item, "gm").replace(/bull/g, U.bullet).getRegex()),
    (U.list = L(U.list)
      .replace(/bull/g, U.bullet)
      .replace(
        "hr",
        "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
      )
      .replace("def", "\\n+(?=" + U.def.source + ")")
      .getRegex()),
    (U._tag =
      "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
    (U._comment = /<!--(?!-?>)[\s\S]*?-->/),
    (U.html = L(U.html, "i")
      .replace("comment", U._comment)
      .replace("tag", U._tag)
      .replace(
        "attribute",
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex()),
    (U.paragraph = L(U._paragraph)
      .replace("hr", U.hr)
      .replace("heading", " {0,3}#{1,6} ")
      .replace("|lheading", "")
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
      .replace("tag", U._tag)
      .getRegex()),
    (U.blockquote = L(U.blockquote)
      .replace("paragraph", U.paragraph)
      .getRegex()),
    (U.normal = P({}, U)),
    (U.gfm = P({}, U.normal, {
      nptable:
        "^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
      table:
        "^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    })),
    (U.gfm.nptable = L(U.gfm.nptable)
      .replace("hr", U.hr)
      .replace("heading", " {0,3}#{1,6} ")
      .replace("blockquote", " {0,3}>")
      .replace("code", " {4}[^\\n]")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
      .replace("tag", U._tag)
      .getRegex()),
    (U.gfm.table = L(U.gfm.table)
      .replace("hr", U.hr)
      .replace("heading", " {0,3}#{1,6} ")
      .replace("blockquote", " {0,3}>")
      .replace("code", " {4}[^\\n]")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
      .replace("tag", U._tag)
      .getRegex()),
    (U.pedantic = P({}, U.normal, {
      html: L(
        "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
      )
        .replace("comment", U._comment)
        .replace(
          /tag/g,
          "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
      fences: j,
      paragraph: L(U.normal._paragraph)
        .replace("hr", U.hr)
        .replace("heading", " *#{1,6} *[^\n]")
        .replace("lheading", U.lheading)
        .replace("blockquote", " {0,3}>")
        .replace("|fences", "")
        .replace("|list", "")
        .replace("|html", "")
        .getRegex(),
    }));
  var B = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: j,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    strong:
      /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
    em: /^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: j,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
    _punctuation: "!\"#$%&'()*+\\-./:;<=>?@\\[^_{|}~",
  };
  (B.em = L(B.em)
    .replace(/punctuation/g, B._punctuation)
    .getRegex()),
    (B._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    (B._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (B._email =
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (B.autolink = L(B.autolink)
      .replace("scheme", B._scheme)
      .replace("email", B._email)
      .getRegex()),
    (B._attribute =
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (B.tag = L(B.tag)
      .replace("comment", U._comment)
      .replace("attribute", B._attribute)
      .getRegex()),
    (B._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (B._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
    (B._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (B.link = L(B.link)
      .replace("label", B._label)
      .replace("href", B._href)
      .replace("title", B._title)
      .getRegex()),
    (B.reflink = L(B.reflink).replace("label", B._label).getRegex()),
    (B.normal = P({}, B)),
    (B.pedantic = P({}, B.normal, {
      strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
      link: L(/^!?\[(label)\]\((.*?)\)/)
        .replace("label", B._label)
        .getRegex(),
      reflink: L(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace("label", B._label)
        .getRegex(),
    })),
    (B.gfm = P({}, B.normal, {
      escape: L(B.escape).replace("])", "~|])").getRegex(),
      _extended_email:
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal:
        /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^~+(?=\S)([\s\S]*?\S)~+/,
      text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
    })),
    (B.gfm.url = L(B.gfm.url, "i")
      .replace("email", B.gfm._extended_email)
      .getRegex()),
    (B.breaks = P({}, B.gfm, {
      br: L(B.br).replace("{2,}", "*").getRegex(),
      text: L(B.gfm.text)
        .replace("\\b_", "\\b_| {2,}\\n")
        .replace(/\{2,\}/g, "*")
        .getRegex(),
    }));
  var F = { block: U, inline: B },
    N = t.defaults,
    X = F.block,
    G = F.inline;
  function M(e) {
    return e
      .replace(/---/g, "—")
      .replace(/--/g, "–")
      .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
      .replace(/'/g, "’")
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
      .replace(/"/g, "”")
      .replace(/\.{3}/g, "…");
  }
  function V(e) {
    var t,
      n,
      r = "",
      i = e.length;
    for (t = 0; t < i; t++)
      (n = e.charCodeAt(t)),
        0.5 < Math.random() && (n = "x" + n.toString(16)),
        (r += "&#" + n + ";");
    return r;
  }
  var H = (function () {
      function n(e) {
        (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = e || N),
          (this.options.tokenizer = this.options.tokenizer || new E()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options);
        var t = { block: X.normal, inline: G.normal };
        this.options.pedantic
          ? ((t.block = X.pedantic), (t.inline = G.pedantic))
          : this.options.gfm &&
            ((t.block = X.gfm),
            this.options.breaks ? (t.inline = G.breaks) : (t.inline = G.gfm)),
          (this.tokenizer.rules = t);
      }
      n.lex = function (e, t) {
        return new n(t).lex(e);
      };
      var e,
        t,
        r,
        i = n.prototype;
      return (
        (i.lex = function (e) {
          return (
            (e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ")),
            this.blockTokens(e, this.tokens, !0),
            this.inline(this.tokens),
            this.tokens
          );
        }),
        (i.blockTokens = function (e, t, n) {
          var r, i, s;
          for (
            void 0 === t && (t = []),
              void 0 === n && (n = !0),
              e = e.replace(/^ +$/gm, "");
            e;

          )
            if ((r = this.tokenizer.space(e)))
              (e = e.substring(r.raw.length)), r.type && t.push(r);
            else if ((r = this.tokenizer.code(e, t)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.fences(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.heading(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.nptable(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.hr(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.blockquote(e)))
              (e = e.substring(r.raw.length)),
                (r.tokens = this.blockTokens(r.text, [], n)),
                t.push(r);
            else if ((r = this.tokenizer.list(e))) {
              for (
                e = e.substring(r.raw.length), s = r.items.length, i = 0;
                i < s;
                i++
              )
                r.items[i].tokens = this.blockTokens(r.items[i].text, [], !1);
              t.push(r);
            } else if ((r = this.tokenizer.html(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if (n && (r = this.tokenizer.def(e)))
              (e = e.substring(r.raw.length)),
                this.tokens.links[r.tag] ||
                  (this.tokens.links[r.tag] = { href: r.href, title: r.title });
            else if ((r = this.tokenizer.table(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.lheading(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if (n && (r = this.tokenizer.paragraph(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.text(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if (e) {
              var a = "Infinite loop on byte: " + e.charCodeAt(0);
              if (this.options.silent) {
                console.error(a);
                break;
              }
              throw new Error(a);
            }
          return t;
        }),
        (i.inline = function (e) {
          var t,
            n,
            r,
            i,
            s,
            a,
            l = e.length;
          for (t = 0; t < l; t++)
            switch ((a = e[t]).type) {
              case "paragraph":
              case "text":
              case "heading":
                (a.tokens = []), this.inlineTokens(a.text, a.tokens);
                break;
              case "table":
                for (
                  a.tokens = { header: [], cells: [] },
                    i = a.header.length,
                    n = 0;
                  n < i;
                  n++
                )
                  (a.tokens.header[n] = []),
                    this.inlineTokens(a.header[n], a.tokens.header[n]);
                for (i = a.cells.length, n = 0; n < i; n++)
                  for (
                    s = a.cells[n], a.tokens.cells[n] = [], r = 0;
                    r < s.length;
                    r++
                  )
                    (a.tokens.cells[n][r] = []),
                      this.inlineTokens(s[r], a.tokens.cells[n][r]);
                break;
              case "blockquote":
                this.inline(a.tokens);
                break;
              case "list":
                for (i = a.items.length, n = 0; n < i; n++)
                  this.inline(a.items[n].tokens);
            }
          return e;
        }),
        (i.inlineTokens = function (e, t, n, r) {
          var i;
          for (
            void 0 === t && (t = []),
              void 0 === n && (n = !1),
              void 0 === r && (r = !1);
            e;

          )
            if ((i = this.tokenizer.escape(e)))
              (e = e.substring(i.raw.length)), t.push(i);
            else if ((i = this.tokenizer.tag(e, n, r)))
              (e = e.substring(i.raw.length)),
                (n = i.inLink),
                (r = i.inRawBlock),
                t.push(i);
            else if ((i = this.tokenizer.link(e)))
              (e = e.substring(i.raw.length)),
                "link" === i.type &&
                  (i.tokens = this.inlineTokens(i.text, [], !0, r)),
                t.push(i);
            else if ((i = this.tokenizer.reflink(e, this.tokens.links)))
              (e = e.substring(i.raw.length)),
                "link" === i.type &&
                  (i.tokens = this.inlineTokens(i.text, [], !0, r)),
                t.push(i);
            else if ((i = this.tokenizer.strong(e)))
              (e = e.substring(i.raw.length)),
                (i.tokens = this.inlineTokens(i.text, [], n, r)),
                t.push(i);
            else if ((i = this.tokenizer.em(e)))
              (e = e.substring(i.raw.length)),
                (i.tokens = this.inlineTokens(i.text, [], n, r)),
                t.push(i);
            else if ((i = this.tokenizer.codespan(e)))
              (e = e.substring(i.raw.length)), t.push(i);
            else if ((i = this.tokenizer.br(e)))
              (e = e.substring(i.raw.length)), t.push(i);
            else if ((i = this.tokenizer.del(e)))
              (e = e.substring(i.raw.length)),
                (i.tokens = this.inlineTokens(i.text, [], n, r)),
                t.push(i);
            else if ((i = this.tokenizer.autolink(e, V)))
              (e = e.substring(i.raw.length)), t.push(i);
            else if (n || !(i = this.tokenizer.url(e, V))) {
              if ((i = this.tokenizer.inlineText(e, r, M)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if (e) {
                var s = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(s);
                  break;
                }
                throw new Error(s);
              }
            } else (e = e.substring(i.raw.length)), t.push(i);
          return t;
        }),
        (e = n),
        (r = [
          {
            key: "rules",
            get: function () {
              return { block: X, inline: G };
            },
          },
        ]),
        (t = null) && s(e.prototype, t),
        r && s(e, r),
        n
      );
    })(),
    J = t.defaults,
    K = y,
    Q = w,
    W = (function () {
      function e(e) {
        this.options = e || J;
      }
      var t = e.prototype;
      return (
        (t.code = function (e, t, n) {
          var r = (t || "").match(/\S*/)[0];
          if (this.options.highlight) {
            var i = this.options.highlight(e, r);
            null != i && i !== e && ((n = !0), (e = i));
          }
          return r
            ? '<pre><code class="' +
                this.options.langPrefix +
                Q(r, !0) +
                '">' +
                (n ? e : Q(e, !0)) +
                "</code></pre>\n"
            : "<pre><code>" + (n ? e : Q(e, !0)) + "</code></pre>";
        }),
        (t.blockquote = function (e) {
          return "<blockquote>\n" + e + "</blockquote>\n";
        }),
        (t.html = function (e) {
          return e;
        }),
        (t.heading = function (e, t, n, r) {
          return this.options.headerIds
            ? "<h" +
                t +
                ' id="' +
                this.options.headerPrefix +
                r.slug(n) +
                '">' +
                e +
                "</h" +
                t +
                ">\n"
            : "<h" + t + ">" + e + "</h" + t + ">\n";
        }),
        (t.hr = function () {
          return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
        }),
        (t.list = function (e, t, n) {
          var r = t ? "ol" : "ul";
          return (
            "<" +
            r +
            (t && 1 !== n ? ' start="' + n + '"' : "") +
            ">\n" +
            e +
            "</" +
            r +
            ">\n"
          );
        }),
        (t.listitem = function (e) {
          return "<li>" + e + "</li>\n";
        }),
        (t.checkbox = function (e) {
          return (
            "<input " +
            (e ? 'checked="" ' : "") +
            'disabled="" type="checkbox"' +
            (this.options.xhtml ? " /" : "") +
            "> "
          );
        }),
        (t.paragraph = function (e) {
          return "<p>" + e + "</p>\n";
        }),
        (t.table = function (e, t) {
          return (
            "<table>\n<thead>\n" +
            e +
            "</thead>\n" +
            (t = t && "<tbody>" + t + "</tbody>") +
            "</table>\n"
          );
        }),
        (t.tablerow = function (e) {
          return "<tr>\n" + e + "</tr>\n";
        }),
        (t.tablecell = function (e, t) {
          var n = t.header ? "th" : "td";
          return (
            (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") +
            e +
            "</" +
            n +
            ">\n"
          );
        }),
        (t.strong = function (e) {
          return "<strong>" + e + "</strong>";
        }),
        (t.em = function (e) {
          return "<em>" + e + "</em>";
        }),
        (t.codespan = function (e) {
          return "<code>" + e + "</code>";
        }),
        (t.br = function () {
          return this.options.xhtml ? "<br/>" : "<br>";
        }),
        (t.del = function (e) {
          return "<del>" + e + "</del>";
        }),
        (t.link = function (e, t, n) {
          if (null === (e = K(this.options.sanitize, this.options.baseUrl, e)))
            return n;
          var r = '<a href="' + Q(e) + '"';
          return t && (r += ' title="' + t + '"'), (r += ">" + n + "</a>");
        }),
        (t.image = function (e, t, n) {
          if (null === (e = K(this.options.sanitize, this.options.baseUrl, e)))
            return n;
          var r = '<img src="' + e + '" alt="' + n + '"';
          return (
            t && (r += ' title="' + t + '"'),
            (r += this.options.xhtml ? "/>" : ">")
          );
        }),
        (t.text = function (e) {
          return e;
        }),
        e
      );
    })(),
    Y = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.strong = function (e) {
          return e;
        }),
        (t.em = function (e) {
          return e;
        }),
        (t.codespan = function (e) {
          return e;
        }),
        (t.del = function (e) {
          return e;
        }),
        (t.html = function (e) {
          return e;
        }),
        (t.text = function (e) {
          return e;
        }),
        (t.link = function (e, t, n) {
          return "" + n;
        }),
        (t.image = function (e, t, n) {
          return "" + n;
        }),
        (t.br = function () {
          return "";
        }),
        e
      );
    })(),
    ee = (function () {
      function e() {
        this.seen = {};
      }
      return (
        (e.prototype.slug = function (e) {
          var t = e
            .toLowerCase()
            .trim()
            .replace(/<[!\/a-z].*?>/gi, "")
            .replace(
              /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
              ""
            )
            .replace(/\s/g, "-");
          if (this.seen.hasOwnProperty(t))
            for (
              var n = t;
              this.seen[n]++,
                (t = n + "-" + this.seen[n]),
                this.seen.hasOwnProperty(t);

            );
          return (this.seen[t] = 0), t;
        }),
        e
      );
    })(),
    te = t.defaults,
    ne = v,
    re = (function () {
      function n(e) {
        (this.options = e || te),
          (this.options.renderer = this.options.renderer || new W()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new Y()),
          (this.slugger = new ee());
      }
      n.parse = function (e, t) {
        return new n(t).parse(e);
      };
      var e = n.prototype;
      return (
        (e.parse = function (e, t) {
          void 0 === t && (t = !0);
          var n,
            r,
            i,
            s,
            a,
            l,
            o,
            c,
            h,
            u,
            p,
            g,
            f,
            d,
            k,
            b,
            m,
            x,
            w = "",
            v = e.length;
          for (n = 0; n < v; n++)
            switch ((u = e[n]).type) {
              case "space":
                continue;
              case "hr":
                w += this.renderer.hr();
                continue;
              case "heading":
                w += this.renderer.heading(
                  this.parseInline(u.tokens),
                  u.depth,
                  ne(this.parseInline(u.tokens, this.textRenderer)),
                  this.slugger
                );
                continue;
              case "code":
                w += this.renderer.code(u.text, u.lang, u.escaped);
                continue;
              case "table":
                for (o = c = "", s = u.header.length, r = 0; r < s; r++)
                  o += this.renderer.tablecell(
                    this.parseInline(u.tokens.header[r]),
                    { header: !0, align: u.align[r] }
                  );
                for (
                  c += this.renderer.tablerow(o),
                    h = "",
                    s = u.cells.length,
                    r = 0;
                  r < s;
                  r++
                ) {
                  for (
                    o = "", a = (l = u.tokens.cells[r]).length, i = 0;
                    i < a;
                    i++
                  )
                    o += this.renderer.tablecell(this.parseInline(l[i]), {
                      header: !1,
                      align: u.align[i],
                    });
                  h += this.renderer.tablerow(o);
                }
                w += this.renderer.table(c, h);
                continue;
              case "blockquote":
                (h = this.parse(u.tokens)), (w += this.renderer.blockquote(h));
                continue;
              case "list":
                for (
                  p = u.ordered,
                    g = u.start,
                    f = u.loose,
                    s = u.items.length,
                    h = "",
                    r = 0;
                  r < s;
                  r++
                )
                  (b = (k = u.items[r]).checked),
                    (m = k.task),
                    (d = ""),
                    k.task &&
                      ((x = this.renderer.checkbox(b)),
                      f
                        ? "text" === k.tokens[0].type
                          ? ((k.tokens[0].text = x + " " + k.tokens[0].text),
                            k.tokens[0].tokens &&
                              0 < k.tokens[0].tokens.length &&
                              "text" === k.tokens[0].tokens[0].type &&
                              (k.tokens[0].tokens[0].text =
                                x + " " + k.tokens[0].tokens[0].text))
                          : k.tokens.unshift({ type: "text", text: x })
                        : (d += x)),
                    (d += this.parse(k.tokens, f)),
                    (h += this.renderer.listitem(d, m, b));
                w += this.renderer.list(h, p, g);
                continue;
              case "html":
                w += this.renderer.html(u.text);
                continue;
              case "paragraph":
                w += this.renderer.paragraph(this.parseInline(u.tokens));
                continue;
              case "text":
                for (
                  h = u.tokens ? this.parseInline(u.tokens) : u.text;
                  n + 1 < v && "text" === e[n + 1].type;

                )
                  h +=
                    "\n" +
                    ((u = e[++n]).tokens ? this.parseInline(u.tokens) : u.text);
                w += t ? this.renderer.paragraph(h) : h;
                continue;
              default:
                var _ = 'Token with "' + u.type + '" type was not found.';
                if (this.options.silent) return void console.error(_);
                throw new Error(_);
            }
          return w;
        }),
        (e.parseInline = function (e, t) {
          t = t || this.renderer;
          var n,
            r,
            i = "",
            s = e.length;
          for (n = 0; n < s; n++)
            switch ((r = e[n]).type) {
              case "escape":
                i += t.text(r.text);
                break;
              case "html":
                i += t.html(r.text);
                break;
              case "link":
                i += t.link(r.href, r.title, this.parseInline(r.tokens, t));
                break;
              case "image":
                i += t.image(r.href, r.title, r.text);
                break;
              case "strong":
                i += t.strong(this.parseInline(r.tokens, t));
                break;
              case "em":
                i += t.em(this.parseInline(r.tokens, t));
                break;
              case "codespan":
                i += t.codespan(r.text);
                break;
              case "br":
                i += t.br();
                break;
              case "del":
                i += t.del(this.parseInline(r.tokens, t));
                break;
              case "text":
                i += t.text(r.text);
                break;
              default:
                var a = 'Token with "' + r.type + '" type was not found.';
                if (this.options.silent) return void console.error(a);
                throw new Error(a);
            }
          return i;
        }),
        n
      );
    })(),
    ie = $,
    se = Z,
    ae = w,
    le = t.getDefaults,
    oe = t.changeDefaults,
    ce = t.defaults;
  function he(t, a, l) {
    if (null == t)
      throw new Error("marked(): input parameter is undefined or null");
    if ("string" != typeof t)
      throw new Error(
        "marked(): input parameter is of type " +
          Object.prototype.toString.call(t) +
          ", string expected"
      );
    if (l || "function" == typeof a) {
      var e = (function () {
        l || ((l = a), (a = null)), (a = ie({}, he.defaults, a || {})), se(a);
        var n,
          r,
          i = a.highlight,
          e = 0;
        try {
          n = H.lex(t, a);
        } catch (e) {
          return { v: l(e) };
        }
        r = n.length;
        function s(t) {
          if (t) return (a.highlight = i), l(t);
          var e;
          try {
            e = re.parse(n, a);
          } catch (e) {
            t = e;
          }
          return (a.highlight = i), t ? l(t) : l(null, e);
        }
        if (!i || i.length < 3) return { v: s() };
        if ((delete a.highlight, !r)) return { v: s() };
        for (; e < n.length; e++)
          !(function (n) {
            "code" !== n.type
              ? --r || s()
              : i(n.text, n.lang, function (e, t) {
                  return e
                    ? s(e)
                    : null == t || t === n.text
                    ? --r || s()
                    : ((n.text = t), (n.escaped = !0), void (--r || s()));
                });
          })(n[e]);
        return { v: void 0 };
      })();
      if ("object" == typeof e) return e.v;
    }
    try {
      return (
        (a = ie({}, he.defaults, a || {})), se(a), re.parse(H.lex(t, a), a)
      );
    } catch (e) {
      if (
        ((e.message +=
          "\nPlease report this to https://github.com/markedjs/marked."),
        (a || he.defaults).silent)
      )
        return (
          "<p>An error occurred:</p><pre>" + ae(e.message + "", !0) + "</pre>"
        );
      throw e;
    }
  }
  return (
    (he.options = he.setOptions =
      function (e) {
        return ie(he.defaults, e), oe(he.defaults), he;
      }),
    (he.getDefaults = le),
    (he.defaults = ce),
    (he.use = function (l) {
      var n = ie({}, l);
      l.renderer &&
        (function () {
          function e(i) {
            var s = a[i];
            a[i] = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              var r = l.renderer[i].apply(a, t);
              return !1 === r && (r = s.apply(a, t)), r;
            };
          }
          var a = he.defaults.renderer || new W();
          for (var t in l.renderer) e(t);
          n.renderer = a;
        })(),
        l.tokenizer &&
          (function () {
            function e(i) {
              var s = a[i];
              a[i] = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                var r = l.tokenizer[i].apply(a, t);
                return !1 === r && (r = s.apply(a, t)), r;
              };
            }
            var a = he.defaults.tokenizer || new E();
            for (var t in l.tokenizer) e(t);
            n.tokenizer = a;
          })(),
        he.setOptions(n);
    }),
    (he.Parser = re),
    (he.parser = re.parse),
    (he.Renderer = W),
    (he.TextRenderer = Y),
    (he.Lexer = H),
    (he.lexer = H.lex),
    (he.Tokenizer = E),
    (he.Slugger = ee),
    (he.parse = he)
  );
});
