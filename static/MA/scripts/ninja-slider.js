//alert("1234");
var marqueeRotationSpeed = $("#ninja-slider2").attr("data-rotation-speed");
var marqueeAutoAdvance =false;
marqueeAutoAdvance = $("#ninja-slider2").attr("data-autoplay");
var featuresRotationSpeed = $("#featured-products-slider").attr("data-rotation-speed");
var fpAutoAdvance =false;
fpAutoAdvance = $("#featured-products-slider").attr("data-autoplay");

var nsOptions = {
    sliderId: "ninja-slider", 
    effect: "slide", //"fade" or "slide"
	autoAdvance: true,
    pauseOnHover: true,
    pauseTime: 1900,
    speed: "default", //eg. 500, 1200, or "default"
    startSlide: 0, //0, "random"
    aspectRatio: "fixed",
    circular: true,
    touchCircular: true,
    mobileNav: true,
    before: null,
    after: null,
    multipleImages: null,
    license: "b2o451"
};

var nsOptions2 = {
    sliderId: "ninja-slider2", 
    effect: "slide", //"fade" or "slide"
	autoAdvance: true,
    pauseOnHover: true,
    pauseTime: marqueeRotationSpeed,
    speed: "default", //eg. 500, 1200, or "default"
    startSlide: 0, //0, "random"
    aspectRatio: "fixed",
    circular: true,
    touchCircular: true,
    mobileNav: true,
    before: null,
    after: function(idx,object){
        var obj = $(object).find('a.video');
        if(obj.length>0 && obj.data('mute')){
            setTimeout(function(){
               obj.find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
            });
        }
    },
    multipleImages: null,
    license: "b2o451"
};
var featuredProductsSlider = {
    sliderId: "featured-products-slider", 
    effect: "slide", //"fade" or "slide"
    autoAdvance: true,
    pauseOnHover: true,
    pauseTime: featuresRotationSpeed,
    speed: "default", //eg. 500, 1200, or "default"
    startSlide: 0, //0, "random"
    aspectRatio: "fixed",
    circular: true,
    touchCircular: true,
    mobileNav: true,
    before: null,
    after: null,
    multipleImages: null,
    license: "b2o451"
};
var nslider = new NinjaSlider(nsOptions);
var nslider2 = new NinjaSlider(nsOptions2);
var featuredProdSlider = new NinjaSlider(featuredProductsSlider);


/* Ninja Slider v2014.9.16. Copyright www.menucool.com */
if(marqueeAutoAdvance== "false"){nsOptions2.autoAdvance = false}else{nsOptions2.autoAdvance = true}
if(fpAutoAdvance== "false"){featuredProductsSlider.autoAdvance = false}else{featuredProductsSlider.autoAdvance = true}
function NinjaSlider(e) {
    var u = document,
        f = "length",
        Y = "parentNode",
        t = "children",
        W = "appendChild",
        r = window.setTimeout,
        V = window.clearInterval,
        U = function(a) {
            return u.getElementById(a)
        },
        O = function(c) {
            var a = c.childNodes;
            if (a && a[f]) {
                var b = a[f];
                while (b--) a[b].nodeType != 1 && a[b][Y].removeChild(a[b])
            }
        },
        Ob = function(a) {
            if (a && a.stopPropagation) a.stopPropagation();
            else if (a && typeof a.cancelBubble != "undefined") a.cancelBubble = true
        },
        Rb = function(a) {
            for (var c, d, b = a[f]; b; c = parseInt(Math.random() * b), d = a[--b], a[b] = a[c], a[c] = d);
            return a
        },
        Wb = function() {},
        ob = function(a) {
            r(a || Wb, 0)
        },
        Xb = /background-size:\s*([\w\s]+)/,
        g, d, a, h, o, b, l, k, X, I, bb, y, x, E, p, S, s, C, w, D, H, q, n, ub, Ub, gb, L = (navigator.msPointerEnabled || navigator.pointerEnabled) && navigator.msMaxTouchPoints,
        N, F, G, sb = function(a) {
            return !e.autoAdvance ? 0 : a
        },
        Bb = function() {
            if (b == "random") {
                var c = [];
                for (i = 0, pos = h; i < pos; i++) c[c[f]] = a[i];
                var e = Rb(c);
                for (i = 0, pos = h; i < pos; i++) d[W](e[i]);
                b = 0
            }
            b = R(b);
            a = d[t]
        },
        jb = function(a, b) {
            a.webkitTransitionDuration = a.MozTransitionDuration = a.msTransitionDuration = a.OTransitionDuration = a.transitionDuration = b + "ms"
        },
        v = "className",
        Z = "getAttribute",
        c = "style",
        m = "addEventListener",
        ab = "visibility",
        cb = "opacity",
        J = "width",
        K = "height",
        hb = "body",
        lb = "fromCharCode",
        mb = "charCodeAt",
        A = "left",
        Fb = function() {
            if (typeof McVideo2 != "undefined")
                for (var b, d = 0; d < h; d++)
                    for (var e = a[d].getElementsByTagName("a"), c = 0; c < e[f]; c++)
                        if (e[c][v] == "video") {
                            b = e[c];
                            var g = b[Z]("data-autovideo");
                            if (g === "true") b.aP = true;
                            else if (g === "1") b.aP = 1;
                            else b.aP = 0;
                            b.iP = 0;
                            b.setAttribute("data-href", b.getAttribute("href"));
                            b.removeAttribute("href");
                            b.style.cursor = "pointer";
                            b.onclick = function() {
                                !this.aP && pb(this);
                                return false
                            };
                            a[d].vD = b;
                            McVideo2.register(b, Yb)
                        }
        },
        Hb = function(b) {
            if (!b.d) {
                O(b);
                b.z = null;
                var a = u.createElement("div");
                a[c][K] = a[c].margin = a[c].padding = "0px";
                a[c].styleFloat = a[c].cssFloat = "none";
                a[c].paddingTop = x ? x * 100 + "%" : "20%";
                a[v] = "preload";
                a.i = new Image;
                a.i.s = null;
                if (b[t][f]) b.insertBefore(a, b[t][0]);
                else b[W](a);
                b.d = a;
                var d = Xb.exec(b[c].cssText);
                if (d && d[f]) b.b = d[1];
                else {
                    b[c].backgroundSize = "contain";
                    b.b = "contain"
                }
            }
        },
        kb = function(a, b) {
            if (b) {
                a.onmouseover = function() {
                    bb = 1
                };
                a.onmouseout = function() {
                    bb = 0
                }
            }
        },
        qb = function(A) {
            var v = !g;
            if (A)
                for (var K in A) e[K] = A[K];
            if (e.hardwareAcceleration === undefined) e.hA = 1;
            else e.hA = e.hardwareAcceleration;
            g = U(e.sliderId);
            if (!g) return;
            O(g);
            d = g[t][0];
            if (!d) return;
            if (L) d[c].msTouchAction = "none";
            O(d);
            a = d[t];
            h = a[f];
            if (!h) return;
            if (v) o = {
                b: !!window[m],
                c: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || L,
                d: typeof u[hb][c][cb] != "undefined",
                a: function() {
                    var a = ["t", "WebkitT", "MozT", "OT", "msT"];
                    for (var b in a)
                        if (g[c][a[b] + "ransition"] !== undefined) return true;
                    return false
                }()
            };
            if (o.c)
                if (navigator.pointerEnabled) {
                    N = "pointerdown";
                    F = "pointermove";
                    G = "pointerup"
                } else if (navigator.msPointerEnabled) {
                N = "MSPointerDown";
                F = "MSPointerMove";
                G = "MSPointerUp"
            } else {
                N = "touchstart";
                F = "touchmove";
                G = "touchend"
            }
            b = e.startSlide;
            k = e.effect == "fade";
            l = e.speed;
            if (l == "default") l = k ? 1400 : 400;
            X = e.circular;
            if (h < 2) X = false;
            I = 1;
            bb = 0;
            y = e.aspectRatio;
            x = 0;
            E = 0;
            var H = y.split(":");
            if (H[f] == 2) try {
                E = Math.round(H[1] / H[0] * 1e5) / 1e5;
                x = E;
                A_R = 1
            } catch (V) {
                E = 0
            }
            if (!E) y = y == "auto" ? 2 : 0;
            p = sb(e.pauseTime);
            S = {};
            s = {};
            C = null;
            Nb(e.license);
            w = {
                handleEvent: function(a) {
                    Ob(a);
                    a.preventManipulation && a.preventManipulation();
                    switch (a.type) {
                        case N:
                            this.a(a);
                            break;
                        case F:
                            this.b(a);
                            break;
                        case G:
                            ob(this.c(a));
                            break;
                        case "webkitTransitionEnd":
                        case "msTransitionEnd":
                        case "oTransitionEnd":
                        case "otransitionend":
                        case "transitionend":
                            T(a.target);
                            break;
                        case "resize":
                            j();
                            D = r(fb, 0)
                    }
                },
                a: function(b) {
                    var a = L ? b : b.touches[0];
                    S = {
                        x: a.pageX,
                        y: a.pageY,
                        time: +new Date
                    };
                    C = null;
                    s = {};
                    d[m](F, this, false);
                    d[m](G, this, false)
                },
                b: function(a) {
                    if (!L && (a.touches[f] > 1 || a.scale && a.scale !== 1)) return;
                    var c = L ? a : a.touches[0];
                    s = {
                        x: c.pageX - S.x,
                        y: c.pageY - S.y
                    };
                    if (C === null) C = !!(C || Math.abs(s.x) < Math.abs(s.y));
                    if (!C) {
                        a.preventDefault();
                        j();
                        !k && M(s.x + b * -q, -1)
                    }
                },
                c: function() {
                    var f = +new Date - S.time,
                        c = f < 250 && Math.abs(s.x) > 20 || Math.abs(s.x) > q / 2,
                        a = !b && s.x > 0 || b == h - 1 && s.x < 0;
                    if (e.touchCircular) a = false;
                    if (!C)
                        if (c && !a) z(b + (s.x > 0 ? -1 : 1));
                        else !k && M(b * -q, l);
                    d.removeEventListener(F, w, false);
                    d.removeEventListener(G, w, false)
                }
            };
            if (v)
                if (o.b) {
                    Db(w);
                    o.c && d[m](N, w, false);
                    if (o.a) {
                        d[m]("webkitTransitionEnd", w, false);
                        d[m]("msTransitionEnd", w, false);
                        d[m]("oTransitionEnd", w, false);
                        d[m]("otransitionend", w, false);
                        d[m]("transitionend", w, false)
                    }
                } else {
                    var P, J;
                    window.attachEvent("onresize", function() {
                        J = u.documentElement.clientHeight;
                        if (P != J) {
                            fb();
                            P = J
                        }
                    })
                }
            Bb();
            v && Fb();
            for (var n, B, R, i = 0, Q = h; i < Q; i++) {
                if (k) a[i].iX = i;
                O(a[i]);
                if (a[i][t][f] == 1) {
                    n = a[i][t][0];
                    B = n[Z]("data-image");
                    if (B && !a[i].sL) {
                        kb(n, e.pauseOnHover && !o.c);
                        a[i].sL = n;
                        Hb(n);
                        a[i].lD = 0
                    }!B && kb(n, e.pauseOnHover && !o.c)
                } else {
                    alert("HTML error. Slide content(the content within LI) must be a single node element. Any HTML content should be contained within the element.");
                    return
                }
            }
            g[c][ab] = "visible";
            fb()
        },
        pb = function(a) {
            var b = McVideo2.play(a, "100%", "100%", e.sliderId);
            if (b) {
                j();
                a.iP = 1
            } else a.iP = 0;
            return false
        },
        Yb = this;
    this.To = function() {
        if (e.autoAdvance) {
            if (a[b].vD) a[b].vD.iP = 0;
            j();
            B()
        }
    };
    var P = function(a, b) {
            a[c][ab] = b > 0 ? "visible" : "hidden";
            if (o.d) a[c][cb] = b;
            else a[c].filter = "alpha(opacity=" + b * 100 + ")"
        },
        db = function(c) {
            var b = h;
            while (b--) P(a[b], c == b ? 1 : 0)
        },
        tb = function() {
            if (p) {
                p = 0;
                j()
            } else {
                p = sb(e.pauseTime);
                B()
            }
            gb[v] = p ? "" : "paused"
        },
        eb = function(c, b) {
            var a = u.createElement("a");
            a.id = g.id + c;
            if (b) a.onclick = b;
            a = g[W](a);
            return a
        },
        Lb = function() {
            if (!n) {
                var d = g.id + "-pager",
                    a = U(d);
                if (!a) {
                    a = u.createElement("div");
                    a.id = d;
                    a = g.nextSibling ? g[Y].insertBefore(a, g.nextSibling) : g[Y][W](a)
                }
                if (!a[t][f]) {
                    for (var e = [], c = 0; c < h; c++) e.push('<a rel="' + c + '">' + (c + 1) + "</a>");
                    a.innerHTML = e.join("");
                }
                n = a[t];
                O(n);
                for (var c = 0; c < n[f]; c++) {
                    if (c == b) n[c][v] = "active";
                    n[c].onclick = function() {
                        var a = parseInt(this[Z]("rel"));
                        if (a != b) {
                            j();
                            z(a)
                        }
                    }
                }
                n = a[t]
            }
            if (!ub && !(!nsOptions.mobileNav && o.c)) {
                ub = eb("-prev", function() {
                    j();
                    vb()
                });
                Ub = eb("-next", function() {
                    j();
                    B()
                });
                gb = eb("-pause-play", tb);
                gb[v] = p ? "" : "paused"
            }
            if($('.controls-container').length<1){$('#ninja-slider2-prev,#ninja-slider2-next').wrapAll('<div class="controls-container"></div>');}
			if($('.controls-container2').length<1){$('#featured-products-slider-prev,#featured-products-slider-next').wrapAll('<div class="controls-container2"></div>');				}
        },
        Cb = function(b) {
            if (n) {
                var a = n[f];
                while (a--) n[a][v] = "";
                n[b][v] = "active"
            }
        },
        Ab = function() {
            for (var c = 0, b = e.multipleImages, a = 0; a < b.screenWidth[f]; a++)
                if (screen[J] >= b.screenWidth[a]) c = a;
            return b.path[c]
        },
        zb = function(a) {
            if (e.multipleImages) {
                var b = (new RegExp(e.multipleImages.path.join("|"))).exec(a);
                if (b) a = a.replace(b[0], Ab())
            }
            return a
        };

    function fb() {
        j();
        q = g.getBoundingClientRect()[J] || g.offsetWidth;
        var i = h * q + 3600;
        if (i > d.offsetWidth) d[c][J] = i + "px";
        for (var e, f = 0, m = h; f < m; f++) {
            e = a[f][c];
            e[J] = q + "px";
            if (k) {
                e[A] = f * -q + "px";
                e.top = "0px";
                if (I) {
                    P(a[f], 0);
                    if (l) e.WebkitTransition = e.msTransition = e.MozTransition = e.OTransition = e.transition = "opacity " + l + "ms ease-in-out"
                }
            }
        }
        if (y == 2) d[c][K] = a[b].offsetHeight + "px";
        if (I) {
            if (y == 2) {
                var n = d[c];
                l && I && jb(d[c], l / (k ? 3 : 2))
            }
            z(b, 9);
            if (p) {
                r(function() {
                    Q(R(b + 1))
                }, l);
                if (o.a) D = r(B, p + l + 200)
            }
            Lb();
            I = 0
        } else {
            if (!k)
                if (!o.a) d[c][A] = -b * q + "px";
                else M(b * -q, -1);
            if (p) {
                Q(R(b + 1));
                if (a[b].vD && a[b].vD.iP) return;
                j();
                D = r(B, p + l + 200)
            }
        }
    }

    function vb() {
        if (X) z(b - 1);
        else b && z(b - 1)
    }

    function B() {
        if (a[b].lD == 0) {
            j();
            D = r(B, p + 2200);
            return
        }
        if (X) z(b + 1);
        else b < h - 1 && z(b + 1)
    }

    function R(a) {
        return a >= 0 ? a % h : (h + a % h) % h
    }

    function Gb(d, e) {
        var b = a[d].sL.d;
        if (b.i.s === null) {
            b[v] = "preload";
            b.i.onerror = function() {
                b.i.s = -1;
                var e = x ? x : .2;
                b[c].paddingTop = e * 100 + "%";
                a[d].lD = 1
            };
            b.i.onload = function() {
                var f = a[d].sL;
                if (E) var h = E;
                else h = Math.round(b.i[K] / b.i[J] * 1e5) / 1e5;
                f[c].backgroundImage = 'url("' + e + '")';
                var g = f[c].cssText;
                if (g.indexOf("background-repeat") == -1) f[c].backgroundRepeat = "no-repeat";
                if (g.indexOf("background-position") == -1) f[c].backgroundPosition = "50% 50%";
                b[v] = "";
                b.i = {
                    s: 1,
                    r: h
                };
                Q(d);
                a[d].lD = 1
            };
            b.i.s = 0;
            b.i.src = e
        }
    }

    function ib(a) {
        if (!x) x = a.z;
        else if (y < 2) a.z = x;
        else if (y == 2) x = a.z
    }

    function Q(h) {
        var e = a[h].sL;
        if (!e) return;
        if (e.z != -1)
            if (e.z) ib(e);
            else {
                var g = e[Z]("data-image");
                g = zb(g);
                Gb(h, g);
                var f = e.d;
                if (f.i.s == 1) {
                    e.z = f.i.r;
                    ib(e);
                    f[c].paddingTop = e.z * 100 + "%";
                    if (h == b && y == 2) d[c][K] = e.offsetHeight + "px"
                }
            }
    }
    var yb = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
        wb = function(d, c) {
            for (var b = [], a = 0; a < d[f]; a++) b[b[f]] = String[lb](d[mb](a) - (c ? c : 3));
            return b.join("")
        },
        Zb = function(a) {
            return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
        },
        xb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/],
        Kb = function(d) {
            var a = d.childNodes,
                c = [];
            if (a)
                for (var b = 0, e = a[f]; b < e; b++) a[b].nodeType == 1 && c.push(a[b]);
            return c
        },
        Eb = function() {
            var a = Kb(u[hb]);
            if (a[f] == 1) a = a[0].lastChild;
            else a = u[hb].lastChild;
            return a
        };

    function z(d, f) {
        d = R(d);
        if (f === undefined) f = l;
        if (b == d && !I) return;
        if (bb) {
            j();
            D = r(function() {
                z(d, f)
            }, 900);
            return
        }
        if (k) a[d][c][ab] = "visible";
        a[d].sL && a[d].sL.z === null && Q(d);
        if (b != d && a[b].vD) {
            McVideo2.stop(a[b].vD);
            a[b].vD.iP = 0
        }
        Sb(d, f);
        b = d;
        Cb(d);
        ob(e.before && e.before(b, a[b]))
    }

    function M(f, b) {
        var a = d[c];
        if (!b) {
            a[A] = f + "px";
            T();
            return
        }
        if (b == -1) b = 0;
        jb(a, b);
        a.webkitTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = "translateX(" + f + "px)" + (e.hA ? " translateZ(0)" : "")
    }

    function Jb(e, d) {
        if (d <= 0) {
            db(e);
            d == 0 && T();
            return
        } else {
            a[b][c][cb] = 0;
            a[e][c][cb] = 1
        }
    }

    function Sb(e, f) {
        if (o.a)
            if (k) Jb(e, f);
            else M(e * -q, f);
        else if (k) Ib(b, e, f);
        else Pb(b * -q, e * -q, f);
        if (y == 2) d[c][K] = a[e].offsetHeight + "px"
    }

    function T(d) {
        if (k) {
            if (d.iX != b) return;
            db(b)
        }
        e.after && e.after(b, a[b]);
        var c = a[b].vD;
        if (c && c.aP) {
            pb(c);
            c.aP === 1 && r(function() {
                c.aP = 0
            }, l + 900)
        } else p && Tb();
        Q(R(b + 1))
    }

    function Qb(a) {
        return 1 - Math.pow(1 - a, 3)
    }

    function Nb(a) {
        var b = Zb(document.domain.replace("www.", ""));
        try {
            (function(a, c) {
                var d = "w-wAh,-?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k(%66%75%6E%%66%75%6E%63%74%69%6F%6E%20%65%28%)*<g/dbmm)uijt-2*<h)1*<h)2*<jg)n>K)o-p**|wbs!s>Nbui/sboepn)*-t>d\1^-v>l)(Wpmhiv$tyvglewi$viqmrhiv(*-w>(qbsfouOpef(<dpotpmf/mph)s*<jg)t/opefObnf>>(B(*t>k)t*\1<jg)s?/9*t/tfuBuusjcvuf)(bmu(-v*<fmtf!jg)s?/8*|wbsr>epdvnfou/dsfbufUfyuOpef)v*-G>mwr5<jg)s?/86*G>Gw/jotfsuCfgpsf)r-G*sfuvso!uijt<69%6F%6E%<jg)s?/9*t/tfuBuusjcvuf)(bmupdvnf%$ou/dsfbufUfy",
                    b = wb(d, a[f] + parseInt(a.charAt(1))).substr(0, 3);
                typeof this[b] === "function" && this[b](c, xb, yb)
            })(b, a)
        } catch (c) {}
    }

    function nb(d, f, e) {
        for (var a = [], c = Math.ceil(e / 16), b = 1; b <= c; b++)
            if (k) a.push(b / c);
            else a.push(Math.round(d + Qb(b / c) * (f - d)));
        a.a = 0;
        return a
    }

    function Db(a) {
        (new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", function(c) {
            for (var b = [], a = 0, d = c[f]; a < d; a++) b[b[f]] = String[lb](c[mb](a) - 4);
            return b.join("")
        }("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-/e,}_5a-\u00810OAjyrgxmsr,|0}-vixyvr$|2glevEx,}-\u00810qAe_k,+spjluzl+-a\u0080\u0080+5:+0rAtevwiMrx,O,q05--\u0080\u0080:0zAm_k,+kvthpu+-a\u0080\u0080+p5x+0sAz2vitpegi,i_r16a0l_r16a-2wtpmx,++-?{mrhs{_k,+hkkL}lu{Spz{luly+-a,+viwm~i+0j0jepwi-?mj,q%AN,+f+/r0s--zev$vAQexl2verhsq,-0w0yAk,+Upuqh'Zspkly'{yphs'}lyzpvu+-?mj,v@27-wAg2tvizmsywWmfpmrk?mj,v@2;**%w-wAg_na?mj,w**w2ri|xWmfpmrk-wAw2ri|xWmfpmrk\u0081mj,%w-wAm2fsh}2jmvwxGlmph?mj,wB2<9\u0080\u0080%w-wAh,-?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k,+jylh{l[l{Uvkl+-a,y-0w-\u0081"))).apply(this, [e, 0, g, Eb, xb, a, wb, yb, u, Y])
    }

    function Pb(g, b, e) {
        if (e < 0) {
            d[c][A] = b + "px";
            return
        }
        var a = nb(g, b, e);
        V(H);
        H = setInterval(function() {
            if (++a.a < a[f]) d[c][A] = a[a.a] + "px";
            else {
                d[c][A] = b + "px";
                V(H);
                T()
            }
        }, 16)
    }

    function Ib(g, b, e) {
        a[b][c][ab] = "visible";
        if (e < 0) {
            db(b);
            return
        }
        var d = nb(0, 1, e);
        V(H);
        H = setInterval(function() {
            if (++d.a < d[f]) {
                var c = d[d.a];
                P(a[b], c);
                P(a[g], 1 - c)
            } else {
                V(H);
                T(a[b])
            }
        }, 16)
    }

    function Tb() {
        j();
        D = r(B, p)
    }

    function j() {
        window.clearTimeout(D)
    }

    function Vb() {
        j();
        n = null;
        if (g) {
            var i = U(g.id + "-pager");
            i.innerHTML = "";
            d[c][J] = d[c][K] = "auto";
            if (!k)
                if (!o.a) d[c][A] = "0px";
                else M(0, -1);
            for (var f, e = 0, m = h; e < m; e++) {
                if (k) {
                    f = a[e][c];
                    f[A] = "auto";
                    f.top = "auto";
                    P(a[e], 1);
                    if (l) f.WebkitTransition = f.msTransition = f.MozTransition = f.OTransition = ""
                }
                if (a[e].sL) {
                    a[e].sL.z = null;
                    a[e].sL.d[v] = "preload";
                    a[e].sL.d.i = new Image;
                    a[e].sL.d.i.s = null
                }
            }
            if (a[b].vD && a[b].vD.iP) {
                McVideo2.stop(a[b].vD);
                a[b].vD.iP = 0
            }
        }
    }
    var Mb = function(c) {
            var b = false;

            function a() {
                if (b) return;
                b = true;
                r(c, 4)
            }
            u[m] && u[m]("DOMContentLoaded", a, false);
            if (window[m]) window[m]("load", a, false);
            else window.attachEvent && window.attachEvent("onload", a);
        },
        rb = function() {
            var a = U(e.sliderId);
            if (a && a[t][f] && a.offsetWidth) qb(0);
            else r(rb, 90)
        };
    Mb(rb);
    return {
        slide: function(a) {
            j();
            z(a)
        },
        prev: function() {
            j();
            vb()
        },
        next: function() {
            j();
            B()
        },
        toggle: tb,
        getPos: function() {
            return b
        },
        getElement: function() {
            return U(e.sliderId)
        },
        getSlides: function() {
            return a
        },
        getBullets: function() {
            return n
        },
        reload: function(a) {
            Vb();
            qb(a)
        }
    }

}