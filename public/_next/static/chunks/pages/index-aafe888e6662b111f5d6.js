_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [96], {
        "/am7": function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n("cFSR")
            }])
        },
        "3Eee": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            n("mXGw");
            var a, r = n("aXrf"),
                i = n("vkv6"),
                l = n("j/Wi"),
                o = n("t3V9"),
                s = n("oYCi"),
                c = function(e) {
                    var t, c = e.size,
                        d = e.data,
                        u = Object(r.useFragment)(void 0 !== a ? a : a = n("x+oV"), d),
                        m = u.symbol,
                        p = u.asset;
                    return Object(s.jsx)(l.b, {
                        content: m,
                        children: Object(s.jsx)(o.a, {
                            "aria-label": "".concat(m, " logo"),
                            children: Object(s.jsx)(i.b, {
                                size: c,
                                src: null !== (t = p.imageUrl) && void 0 !== t ? t : void 0
                            })
                        })
                    })
                }
        },
        "4TjO": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    t = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    a = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "TopCollectionsLazyQuery",
                        selections: [{
                            args: [t],
                            kind: "FragmentSpread",
                            name: "TopCollections_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "TopCollectionsLazyQuery",
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "first",
                                value: 15
                            }, {
                                kind: "Literal",
                                name: "includeHidden",
                                value: !0
                            }, {
                                kind: "Literal",
                                name: "sortAscending",
                                value: !1
                            }, t],
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "collections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, n, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "createdDate",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isVerified",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentAssetType",
                                        kind: "LinkedField",
                                        name: "nativePaymentAsset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "imageUrl",
                                                storageKey: null
                                            }, n],
                                            storageKey: null
                                        }, n],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsV2Type",
                                        kind: "LinkedField",
                                        name: "statsV2",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "floorPrice",
                                            plural: !1,
                                            selections: a,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "oneDayVolume",
                                            plural: !1,
                                            selections: a,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "sevenDayVolume",
                                            plural: !1,
                                            selections: a,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "thirtyDayVolume",
                                            plural: !1,
                                            selections: a,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "5b06835a91945c40b1fb9afba39c83d5",
                        id: null,
                        metadata: {},
                        name: "TopCollectionsLazyQuery",
                        operationKind: "query",
                        text: "query TopCollectionsLazyQuery(\n  $sortBy: CollectionSort\n) {\n  ...TopCollections_data_34jhwD\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment TopCollections_data_34jhwD on Query {\n  collections(first: 15, sortBy: $sortBy, sortAscending: false, includeHidden: true) {\n    edges {\n      node {\n        ...collection_url\n        id\n        name\n        logo\n        createdDate\n        isVerified\n        nativePaymentAsset {\n          ...PaymentAssetLogo_data\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n          }\n          oneDayChange\n          oneDayVolume {\n            unit\n          }\n          sevenDayChange\n          sevenDayVolume {\n            unit\n          }\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n"
                    }
                }
            }();
            a.hash = "54074de55447e194b4a0d497071360dc", t.default = a
        },
        "4iFg": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            }));
            var a = n("m6w3"),
                r = n("oA/F"),
                i = (n("mXGw"), n("UutA")),
                l = n("vkv6"),
                o = n("67yl"),
                s = n("j/Wi"),
                c = n("D4YM"),
                d = n("C/iq"),
                u = n("oYCi"),
                m = function(e) {
                    var t = e.size,
                        n = void 0 === t ? 14 : t;
                    return Object(u.jsx)(s.b, {
                        content: "ETH",
                        children: Object(u.jsx)(o.a, {
                            cursor: "pointer",
                            tabIndex: 0,
                            children: Object(u.jsx)(p, {
                                alt: "Ether symbol",
                                size: n
                            })
                        })
                    })
                },
                p = Object(i.d)(l.b).withConfig({
                    componentId: "sc-bgaajd-0"
                })(["", ""], Object(c.b)({
                    variants: {
                        dark: {
                            filter: "brightness(3)"
                        }
                    }
                }));
            p.defaultProps = {
                src: d.E
            };
            var h = n("8uvj"),
                b = n("3Eee"),
                g = n("3uPl"),
                j = n("QrBS"),
                x = ["value", "textVariant", "logo"];

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var O = function(e) {
                var t = e.value,
                    n = e.textVariant,
                    a = e.logo,
                    i = Object(r.a)(e, x),
                    l = !(void 0 === t || "0" === t);
                return Object(u.jsxs)(j.a, {
                    alignItems: "center",
                    children: [l && Object(u.jsx)(j.a, {
                        alignItems: "center",
                        display: "inline-flex",
                        height: "22px",
                        marginRight: "4px",
                        children: a ? Object(u.jsx)(b.a, {
                            data: a,
                            size: 14
                        }) : Object(u.jsx)(m, {
                            size: 14
                        })
                    }), Object(u.jsx)(g.a.StatText, y(y({
                        as: "span",
                        variant: null !== n && void 0 !== n ? n : "small"
                    }, i), {}, {
                        children: Object(u.jsx)(h.a, {
                            children: l ? t : "---"
                        })
                    }))]
                })
            }
        },
        "6vc1": function(e, t, n) {
            "use strict";
            n("mXGw");
            var a, r = n("TiKg"),
                i = n.n(r),
                l = n("aXrf"),
                o = n("UutA"),
                s = n("bK7F"),
                c = n("Q5Gx"),
                d = n("QrBS"),
                u = n("bHgl"),
                m = n("oYCi"),
                p = Object(o.d)(d.a).attrs({
                    as: "section"
                }).withConfig({
                    componentId: "sc-wzaqja-0"
                })(["width:100%;flex-direction:column;align-items:center;margin-top:40px;.Carousel--left-arrow{left:-17px;top:62.5%;}.Carousel--right-arrow{right:-17px;top:62.5%;}", ""], Object(c.e)({
                    extraLarge: Object(o.c)([".Carousel--left-arrow{top:63%;}.Carousel--right-arrow{top:63%;}"])
                }));
            t.a = function(e) {
                var t = e.data,
                    r = e.title,
                    o = Object(l.useFragment)(void 0 !== a ? a : a = n("iCgP"), t),
                    c = (null !== o && void 0 !== o ? o : []).filter((function(e) {
                        return Boolean(e.saleStartTime)
                    }));
                if (0 === c.length) return null;
                var d = i()();
                return Object(m.jsxs)(p, {
                    children: [r, Object(m.jsx)(s.b, {
                        slidesNumber: c.length,
                        children: c.map((function(e) {
                            return Object(m.jsx)(u.b, {
                                now: d,
                                promotion: e
                            }, e.promoCardLink)
                        }))
                    })]
                })
            }
        },
        "9U3r": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            })), n.d(t, "b", (function() {
                return b
            }));
            n("mXGw");
            var a = n("UutA"),
                r = n("Q5Gx"),
                i = n("z1wA"),
                l = n("b7Z7"),
                o = n("LoMF"),
                s = n("67yl"),
                c = n("QrBS"),
                d = n("n0tG"),
                u = n("C/iq"),
                m = n("D4YM"),
                p = n("oYCi"),
                h = "meetopensea",
                b = function(e) {
                    var t = e.showButton;
                    return Object(p.jsx)(g, {
                        id: h,
                        children: Object(p.jsx)(j, {
                            children: Object(p.jsxs)(x, {
                                children: [Object(p.jsx)(f, {
                                    children: "Meet OpenSea"
                                }), Object(p.jsx)(y, {
                                    children: "The NFT marketplace with everything for everyone"
                                }), Object(p.jsxs)(O, {
                                    children: [Object(p.jsx)(i.a, {
                                        title: "Meet OpenSea",
                                        url: "https://www.youtube.com/watch?v=gfGuPd1CELo"
                                    }), Object(p.jsx)(d.b, {
                                        textAlign: "center",
                                        variant: "info",
                                        children: "Fiat on-ramp and profile customization is coming soon."
                                    })]
                                }), t ? Object(p.jsx)(w, {
                                    children: Object(p.jsx)(o.c, {
                                        className: "MeetOpenSea--button",
                                        href: "/explore-collections",
                                        children: "Explore the marketplace"
                                    })
                                }) : null]
                            })
                        })
                    })
                },
                g = Object(a.d)(l.a).withConfig({
                    componentId: "sc-b32ykt-0"
                })(["padding-top:40px;width:100%;"]),
                j = Object(a.d)(s.a).withConfig({
                    componentId: "sc-b32ykt-1"
                })(["width:100%;padding-top:40px;padding-bottom:40px;", " ", ";"], Object(r.e)({
                    medium: Object(a.c)(["padding-bottom:0;"])
                }), (function(e) {
                    var t = e.theme;
                    return Object(m.b)({
                        variants: {
                            light: {
                                "background-color": t.colors.lightMarina
                            },
                            dark: {
                                "background-color": t.colors.onyx
                            }
                        }
                    })
                })),
                x = Object(a.d)(l.a).withConfig({
                    componentId: "sc-b32ykt-2"
                })(["max-width:", ";width:100%;"], (function(e) {
                    return e.theme.maxWidth.largePadding
                })),
                f = Object(a.d)(d.b).attrs({
                    variant: "h2"
                }).withConfig({
                    componentId: "sc-b32ykt-3"
                })(["font-size:32px;margin-bottom:8px;margin-top:0;text-align:center;width:100%;", ""], Object(r.e)({
                    phoneXl: Object(a.c)(["font-size:40px;"])
                })),
                y = Object(a.d)(d.b).withConfig({
                    componentId: "sc-b32ykt-4"
                })(["text-align:center;margin-bottom:40px;", ""], Object(r.e)({
                    medium: Object(a.c)(["margin-bottom:20px;"])
                })),
                O = Object(a.d)(l.a).withConfig({
                    componentId: "sc-b32ykt-5"
                })(["", ""], Object(r.e)({
                    medium: Object(a.c)(["background:url(", ") center / contain no-repeat;padding:40px 100px 80px;"], u.Ob)
                })),
                w = Object(a.d)(c.a).withConfig({
                    componentId: "sc-b32ykt-6"
                })(["justify-content:center;margin-bottom:0;margin-top:40px;.MeetOpenSea--button{text-align:center;}", ""], Object(r.e)({
                    medium: Object(a.c)(["margin-bottom:80px;margin-top:0;"])
                }))
        },
        Aujd: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    t = [{
                        alias: null,
                        args: null,
                        concreteType: "AssetContractType",
                        kind: "LinkedField",
                        name: "assetContract",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "address",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "chain",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "tokenId",
                        storageKey: null
                    }];
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "Featured_data",
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imagePreviewUrl",
                        storageKey: null
                    }, e, {
                        alias: null,
                        args: null,
                        concreteType: "AccountType",
                        kind: "LinkedField",
                        name: "creator",
                        plural: !1,
                        selections: [e, {
                            alias: null,
                            args: null,
                            concreteType: "UserType",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "publicUsername",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "asset_url",
                        selections: t
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "AssetMedia_asset"
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "itemEvents_data",
                        selections: t
                    }],
                    type: "AssetType",
                    abstractKey: null
                }
            }();
            a.hash = "ae43f6107aabc2c2064a6d9b29d8c9f4", t.default = a
        },
        DQ1a: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "unit",
                    storageKey: null
                }];
                return {
                    argumentDefinitions: [{
                        defaultValue: 15,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: !0,
                        kind: "LocalArgument",
                        name: "includeHidden"
                    }, {
                        defaultValue: !1,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    }, {
                        defaultValue: "SEVEN_DAY_VOLUME",
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    kind: "Fragment",
                    metadata: null,
                    name: "TopCollections_data",
                    selections: [{
                        alias: null,
                        args: [{
                            kind: "Variable",
                            name: "first",
                            variableName: "count"
                        }, {
                            kind: "Variable",
                            name: "includeHidden",
                            variableName: "includeHidden"
                        }, {
                            kind: "Variable",
                            name: "sortAscending",
                            variableName: "sortAscending"
                        }, {
                            kind: "Variable",
                            name: "sortBy",
                            variableName: "sortBy"
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "collections",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionTypeEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "id",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "name",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "logo",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "createdDate",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "isVerified",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PaymentAssetType",
                                    kind: "LinkedField",
                                    name: "nativePaymentAsset",
                                    plural: !1,
                                    selections: [{
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "PaymentAssetLogo_data"
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionStatsV2Type",
                                    kind: "LinkedField",
                                    name: "statsV2",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "floorPrice",
                                        plural: !1,
                                        selections: e,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "oneDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "oneDayVolume",
                                        plural: !1,
                                        selections: e,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "sevenDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "sevenDayVolume",
                                        plural: !1,
                                        selections: e,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "thirtyDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "thirtyDayVolume",
                                        plural: !1,
                                        selections: e,
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    kind: "InlineDataFragmentSpread",
                                    name: "collection_url",
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }]
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Query",
                    abstractKey: null
                }
            }();
            a.hash = "f4287b61b27270a57cbaae88e70118f2", t.default = a
        },
        HAVD: function(e, t, n) {
            "use strict";
            (function(e) {
                const n = {},
                    a = t => "undefined" !== typeof self && self && t in self ? self : "undefined" !== typeof window && window && t in window ? window : "undefined" !== typeof e && e && t in e ? e : "undefined" !== typeof globalThis && globalThis ? globalThis : void 0,
                    r = ["Headers", "Request", "Response", "ReadableStream", "fetch", "AbortController", "FormData"];
                for (const t of r) Object.defineProperty(n, t, {
                    get() {
                        const e = a(t),
                            n = e && e[t];
                        return "function" === typeof n ? n.bind(e) : n
                    }
                });
                const i = e => null !== e && "object" === typeof e,
                    l = "function" === typeof n.AbortController,
                    o = "function" === typeof n.ReadableStream,
                    s = "function" === typeof n.FormData,
                    c = (e, t) => {
                        const a = new n.Headers(e || {}),
                            r = t instanceof n.Headers,
                            i = new n.Headers(t || {});
                        for (const [n, l] of i) r && "undefined" === l || void 0 === l ? a.delete(n) : a.set(n, l);
                        return a
                    },
                    d = (...e) => {
                        let t = {},
                            n = {};
                        for (const a of e) {
                            if (Array.isArray(a)) Array.isArray(t) || (t = []), t = [...t, ...a];
                            else if (i(a)) {
                                for (let [e, n] of Object.entries(a)) i(n) && e in t && (n = d(t[e], n)), t = { ...t,
                                    [e]: n
                                };
                                i(a.headers) && (n = c(n, a.headers))
                            }
                            t.headers = n
                        }
                        return t
                    },
                    u = ["get", "post", "put", "patch", "head", "delete"],
                    m = {
                        json: "application/json",
                        text: "text/*",
                        formData: "multipart/form-data",
                        arrayBuffer: "*/*",
                        blob: "*/*"
                    },
                    p = [413, 429, 503],
                    h = Symbol("stop");
                class b extends Error {
                    constructor(e) {
                        super(e.statusText || String(0 === e.status || e.status ? e.status : "Unknown response error")), this.name = "HTTPError", this.response = e
                    }
                }
                class g extends Error {
                    constructor(e) {
                        super("Request timed out"), this.name = "TimeoutError", this.request = e
                    }
                }
                const j = e => new Promise((t => setTimeout(t, e))),
                    x = e => u.includes(e) ? e.toUpperCase() : e,
                    f = {
                        limit: 2,
                        methods: ["get", "put", "head", "delete", "options", "trace"],
                        statusCodes: [408, 413, 429, 500, 502, 503, 504],
                        afterStatusCodes: p
                    },
                    y = (e = {}) => {
                        if ("number" === typeof e) return { ...f,
                            limit: e
                        };
                        if (e.methods && !Array.isArray(e.methods)) throw new Error("retry.methods must be an array");
                        if (e.statusCodes && !Array.isArray(e.statusCodes)) throw new Error("retry.statusCodes must be an array");
                        return { ...f,
                            ...e,
                            afterStatusCodes: p
                        }
                    },
                    O = 2147483647;
                class w {
                    constructor(e, t = {}) {
                        if (this._retryCount = 0, this._input = e, this._options = {
                                credentials: this._input.credentials || "same-origin",
                                ...t,
                                headers: c(this._input.headers, t.headers),
                                hooks: d({
                                    beforeRequest: [],
                                    beforeRetry: [],
                                    afterResponse: []
                                }, t.hooks),
                                method: x(t.method || this._input.method),
                                prefixUrl: String(t.prefixUrl || ""),
                                retry: y(t.retry),
                                throwHttpErrors: !1 !== t.throwHttpErrors,
                                timeout: "undefined" === typeof t.timeout ? 1e4 : t.timeout,
                                fetch: t.fetch || n.fetch
                            }, "string" !== typeof this._input && !(this._input instanceof URL || this._input instanceof n.Request)) throw new TypeError("`input` must be a string, URL, or Request");
                        if (this._options.prefixUrl && "string" === typeof this._input) {
                            if (this._input.startsWith("/")) throw new Error("`input` must not begin with a slash when using `prefixUrl`");
                            this._options.prefixUrl.endsWith("/") || (this._options.prefixUrl += "/"), this._input = this._options.prefixUrl + this._input
                        }
                        if (l && (this.abortController = new n.AbortController, this._options.signal && this._options.signal.addEventListener("abort", (() => {
                                this.abortController.abort()
                            })), this._options.signal = this.abortController.signal), this.request = new n.Request(this._input, this._options), this._options.searchParams) {
                            const e = "?" + new URLSearchParams(this._options.searchParams).toString(),
                                t = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, e);
                            !(s && this._options.body instanceof n.FormData || this._options.body instanceof URLSearchParams) || this._options.headers && this._options.headers["content-type"] || this.request.headers.delete("content-type"), this.request = new n.Request(new n.Request(t, this.request), this._options)
                        }
                        void 0 !== this._options.json && (this._options.body = JSON.stringify(this._options.json), this.request.headers.set("content-type", "application/json"), this.request = new n.Request(this.request, {
                            body: this._options.body
                        }));
                        const a = async () => {
                                if (this._options.timeout > O) throw new RangeError("The `timeout` option cannot be greater than 2147483647");
                                await j(1);
                                let e = await this._fetch();
                                for (const t of this._options.hooks.afterResponse) {
                                    const a = await t(this.request, this._options, this._decorateResponse(e.clone()));
                                    a instanceof n.Response && (e = a)
                                }
                                if (this._decorateResponse(e), !e.ok && this._options.throwHttpErrors) throw new b(e);
                                if (this._options.onDownloadProgress) {
                                    if ("function" !== typeof this._options.onDownloadProgress) throw new TypeError("The `onDownloadProgress` option must be a function");
                                    if (!o) throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
                                    return this._stream(e.clone(), this._options.onDownloadProgress)
                                }
                                return e
                            },
                            r = this._options.retry.methods.includes(this.request.method.toLowerCase()) ? this._retry(a) : a();
                        for (const [n, i] of Object.entries(m)) r[n] = async () => {
                            this.request.headers.set("accept", this.request.headers.get("accept") || i);
                            const e = (await r).clone();
                            if ("json" === n) {
                                if (204 === e.status) return "";
                                if (t.parseJson) return t.parseJson(await e.text())
                            }
                            return e[n]()
                        };
                        return r
                    }
                    _calculateRetryDelay(e) {
                        if (this._retryCount++, this._retryCount < this._options.retry.limit && !(e instanceof g)) {
                            if (e instanceof b) {
                                if (!this._options.retry.statusCodes.includes(e.response.status)) return 0;
                                const t = e.response.headers.get("Retry-After");
                                if (t && this._options.retry.afterStatusCodes.includes(e.response.status)) {
                                    let e = Number(t);
                                    return Number.isNaN(e) ? e = Date.parse(t) - Date.now() : e *= 1e3, "undefined" !== typeof this._options.retry.maxRetryAfter && e > this._options.retry.maxRetryAfter ? 0 : e
                                }
                                if (413 === e.response.status) return 0
                            }
                            return .3 * 2 ** (this._retryCount - 1) * 1e3
                        }
                        return 0
                    }
                    _decorateResponse(e) {
                        return this._options.parseJson && (e.json = async () => this._options.parseJson(await e.text())), e
                    }
                    async _retry(e) {
                        try {
                            return await e()
                        } catch (t) {
                            const n = Math.min(this._calculateRetryDelay(t), O);
                            if (0 !== n && this._retryCount > 0) {
                                await j(n);
                                for (const e of this._options.hooks.beforeRetry) {
                                    if (await e({
                                            request: this.request,
                                            options: this._options,
                                            error: t,
                                            retryCount: this._retryCount
                                        }) === h) return
                                }
                                return this._retry(e)
                            }
                            if (this._options.throwHttpErrors) throw t
                        }
                    }
                    async _fetch() {
                        for (const a of this._options.hooks.beforeRequest) {
                            const e = await a(this.request, this._options);
                            if (e instanceof Request) {
                                this.request = e;
                                break
                            }
                            if (e instanceof Response) return e
                        }
                        return !1 === this._options.timeout ? this._options.fetch(this.request.clone()) : (e = this.request.clone(), t = this.abortController, n = this._options, new Promise(((a, r) => {
                            const i = setTimeout((() => {
                                t && t.abort(), r(new g(e))
                            }), n.timeout);
                            n.fetch(e).then(a).catch(r).then((() => {
                                clearTimeout(i)
                            }))
                        })));
                        var e, t, n
                    }
                    _stream(e, t) {
                        const a = Number(e.headers.get("content-length")) || 0;
                        let r = 0;
                        return new n.Response(new n.ReadableStream({
                            start(n) {
                                const i = e.body.getReader();
                                t && t({
                                    percent: 0,
                                    transferredBytes: 0,
                                    totalBytes: a
                                }, new Uint8Array), async function e() {
                                    const {
                                        done: l,
                                        value: o
                                    } = await i.read();
                                    if (l) n.close();
                                    else {
                                        if (t) {
                                            r += o.byteLength;
                                            t({
                                                percent: 0 === a ? 0 : r / a,
                                                transferredBytes: r,
                                                totalBytes: a
                                            }, o)
                                        }
                                        n.enqueue(o), e()
                                    }
                                }()
                            }
                        }))
                    }
                }
                const k = (...e) => {
                        for (const t of e)
                            if ((!i(t) || Array.isArray(t)) && "undefined" !== typeof t) throw new TypeError("The `options` argument must be an object");
                        return d({}, ...e)
                    },
                    v = e => {
                        const t = (t, n) => new w(t, k(e, n));
                        for (const n of u) t[n] = (t, a) => new w(t, k(e, a, {
                            method: n
                        }));
                        return t.HTTPError = b, t.TimeoutError = g, t.create = e => v(k(e)), t.extend = t => v(k(e, t)), t.stop = h, t
                    };
                t.a = v()
            }).call(this, n("bqPV"))
        },
        HMC2: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return $e
            })), n.d(t, "a", (function() {
                return et
            }));
            var a, r, i, l, o = n("mXGw"),
                s = n("UutA"),
                c = n("b7Z7"),
                d = n("LoMF"),
                u = n("lqpq"),
                m = n("sX+s"),
                p = n("7bY5"),
                h = n("n0tG"),
                b = n("tQfM"),
                g = n("qymy"),
                j = n("oYCi"),
                x = function(e) {
                    var t = e.background,
                        n = e.ctaText,
                        a = e.ctaLink,
                        r = e.title;
                    return Object(j.jsx)(f, {
                        marginY: {
                            _: "20px",
                            lg: "40px"
                        },
                        children: Object(j.jsx)(y, {
                            backgroundImage: "url(".concat(t, ")"),
                            maxWidth: {
                                xs: b.e.light.maxWidth.mobileBanner,
                                md: b.e.light.maxWidth.banner
                            },
                            paddingX: {
                                xs: "16px",
                                md: "40px"
                            },
                            children: Object(j.jsx)(g.a, {
                                eventSource: "HomePageBanner",
                                href: a,
                                children: Object(j.jsxs)(p.a, {
                                    alignItems: "center",
                                    children: [Object(j.jsxs)(c.a, {
                                        children: [Object(j.jsx)(m.a, {
                                            lessThan: "md",
                                            children: Object(j.jsx)(h.b, {
                                                as: "h3",
                                                color: b.e.light.colors.text.body,
                                                marginY: "0",
                                                maxWidth: "120px",
                                                variant: "h6",
                                                children: r
                                            })
                                        }), Object(j.jsx)(m.a, {
                                            greaterThanOrEqual: "md",
                                            children: Object(j.jsx)(h.b, {
                                                as: "h1",
                                                color: b.e.light.colors.text.body,
                                                margin: "0",
                                                variant: "h3",
                                                children: r
                                            })
                                        })]
                                    }), Object(j.jsxs)(c.a, {
                                        children: [Object(j.jsx)(m.a, {
                                            lessThan: "md",
                                            children: Object(j.jsx)(d.c, {
                                                marginY: "16px",
                                                size: "small",
                                                children: n
                                            })
                                        }), Object(j.jsx)(m.a, {
                                            greaterThanOrEqual: "md",
                                            children: Object(j.jsx)(d.c, {
                                                marginY: "40px",
                                                size: "medium",
                                                children: n
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                f = Object(s.d)(u.a).withConfig({
                    componentId: "sc-bgihld-0"
                })(["align-items:center;"]),
                y = Object(s.d)(c.a).withConfig({
                    componentId: "sc-bgihld-1"
                })(["width:100%;border-radius:12px;background-repeat:no-repeat;background-size:cover;"]),
                O = n("h7iG"),
                w = n("Ojv9"),
                k = n("JiVo"),
                v = n("xiTr"),
                F = n("bK7F"),
                T = n("Q5Gx"),
                C = n("67yl"),
                _ = n("QrBS"),
                S = n("XHwO"),
                L = n("C/iq"),
                A = function() {
                    var e = Object(k.a)(L.k.map((function(e) {
                        return {
                            image: e.slug,
                            title: e.name,
                            url: "/category/".concat(e.slug),
                            text: e.text
                        }
                    })));
                    return Object(j.jsx)(S.a.Provider, {
                        value: {
                            eventSource: "BrowseCategories"
                        },
                        children: Object(j.jsx)(N, {
                            children: Object(j.jsxs)(F.a, {
                                children: [Object(j.jsx)(_.a, {
                                    textAlign: "center",
                                    children: Object(j.jsx)(h.b, {
                                        as: "h2",
                                        margin: "0",
                                        variant: "h3",
                                        children: "Browse by category"
                                    })
                                }), Object(j.jsx)(c.a, {
                                    className: "BrowseCategories--card-container",
                                    children: e.map((function(e) {
                                        return Object(j.jsx)(v.a, {
                                            containerClassName: "BrowseCategories--card",
                                            href: e.url,
                                            imageUrl: "/static/images/categories/".concat(e.image, ".png"),
                                            children: Object(j.jsx)(_.a, {
                                                alignItems: "center",
                                                height: 40,
                                                justifyContent: "center",
                                                children: Object(j.jsx)(h.b, {
                                                    as: "span",
                                                    className: "BrowseCategories--title",
                                                    variant: "h4",
                                                    children: e.title
                                                })
                                            })
                                        }, e.image)
                                    }))
                                })]
                            })
                        })
                    })
                },
                N = Object(s.d)(C.a).withConfig({
                    componentId: "sc-1c6tvgt-0"
                })(["flex-direction:column;align-items:center;margin-bottom:80px;margin-top:40px;.BrowseCategories--card{place-self:center;transition:transform 0.1s ease-out;border-radius:", ";&:hover{box-shadow:", ";}}.BrowseCategories--card-container{display:grid;justify-content:center;grid-gap:15px;margin-top:50px;width:100%;padding:0 20px;", "}.BrowseCategories--title{color:", ";}"], (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.shadows.default
                }), Object(T.e)({
                    extraLarge: Object(s.c)(["grid-template-columns:repeat(", ",340px);grid-template-rows:repeat( ", ",282px );"], 3, Math.ceil(L.k.length / 3)),
                    tabletS: Object(s.c)(["padding:0 30px;grid-template-columns:repeat(", ",182px);grid-template-rows:repeat( ", ",156px );"], 2, Math.ceil(L.k.length / 2)),
                    phoneXs: Object(s.c)(["grid-template-columns:340px;grid-template-rows:repeat(", ",282px);"], Math.ceil(L.k.length))
                }), (function(e) {
                    return e.theme.colors.text.body
                })),
                K = n("HAVD"),
                D = n("B5kz"),
                E = function() {
                    var e = Object(D.useQuery)("posts", (function() {
                        return R()
                    })).data;
                    return e ? Object(j.jsx)(P, {
                        children: Object(j.jsxs)(_.a, {
                            className: "FromBlog--main",
                            children: [Object(j.jsx)(h.b, {
                                as: "h2",
                                className: "FromBlog--title",
                                variant: "h3",
                                children: "Resources for getting started"
                            }), Object(j.jsx)(F.b, {
                                children: e.map((function(e) {
                                    return Object(j.jsx)(v.a, {
                                        className: "FromBlog--card",
                                        containerClassName: "FromBlog--card-container",
                                        href: e.link,
                                        imageHeight: 265,
                                        imageUrl: e.image,
                                        children: Object(j.jsx)(h.b, {
                                            as: "div",
                                            className: "FromBlog--card-title",
                                            dangerouslySetInnerHTML: {
                                                __html: e.title
                                            },
                                            variant: "h4"
                                        })
                                    }, e.link)
                                }))
                            })]
                        })
                    }) : Object(j.jsx)(_.a, {
                        minHeight: "470px"
                    })
                },
                P = Object(s.d)(_.a).attrs({
                    as: "section"
                }).withConfig({
                    componentId: "sc-zaoynb-0"
                })(["flex-direction:column;align-items:center;margin-top:40px;margin-bottom:120px;.FromBlog--main{flex-direction:column;align-items:center;width:100%;.FromBlog--title{margin-bottom:48px;text-align:center;}.Carousel--left-arrow{left:-8px;top:247px;}.Carousel--right-arrow{right:-19px;top:247px;}.FromBlog--card-container{padding:0;", "}.FromBlog--card{", "}.FromBlog--card-title{color:", ";font-weight:600;font-size:16px;margin:10px 20px 10px 16px;height:50px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}}"], Object(T.e)({
                    small: Object(s.c)(["padding:2%;margin:0 10px;"]),
                    medium: Object(s.c)(["padding:1.3%;"])
                }), Object(T.e)({
                    small: Object(s.c)(["width:98%;"])
                }), (function(e) {
                    return e.theme.colors.text.body
                })),
                R = function() {
                    return K.a.get("https://opensea.io/blog/wp-json/wp/v2/posts?_fields=title,jetpack_featured_media_url,link&include=6314,6297,6295").json().then((function(e) {
                        return e.map((function(e) {
                            return {
                                title: e.title.rendered,
                                link: e.link,
                                image: e.jetpack_featured_media_url
                            }
                        }))
                    }))
                },
                z = n("JAph"),
                B = n.n(z),
                V = n("D4YM"),
                I = function() {
                    var e = [{
                        image: "wallet",
                        title: "Set up your wallet",
                        text: Object(j.jsxs)(h.b, {
                            marginTop: "4px",
                            children: ["Once you\u2019ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the", " ", Object(j.jsx)(g.a, {
                                className: "GettingStarted--link",
                                href: "https://openseahelp.zendesk.com/hc/en-us/articles/1500007978402-Wallets-supported-by-OpenSea",
                                children: "wallets we support"
                            }), "."]
                        })
                    }, {
                        image: "collection",
                        title: "Create your collection",
                        text: Object(j.jsxs)(h.b, {
                            marginTop: "4px",
                            children: ["Click", " ", Object(j.jsx)(g.a, {
                                className: "GettingStarted--link",
                                href: "/collections",
                                children: "My Collections"
                            }), " ", "and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."]
                        })
                    }, {
                        image: "nft",
                        title: "Add your NFTs",
                        text: Object(j.jsx)(h.b, {
                            marginTop: "4px",
                            children: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."
                        })
                    }, {
                        image: "sale",
                        title: "List them for sale",
                        text: Object(j.jsx)(h.b, {
                            marginTop: "4px",
                            children: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"
                        })
                    }];
                    return Object(j.jsx)(S.a.Provider, {
                        value: {
                            eventSource: "GettingStarted"
                        },
                        children: Object(j.jsx)(q, {
                            children: Object(j.jsxs)(F.a, {
                                textAlign: "center",
                                children: [Object(j.jsx)(h.b, {
                                    as: "h2",
                                    variant: "h3",
                                    children: "Create and sell your NFTs"
                                }), Object(j.jsx)(_.a, {
                                    className: "GettingStarted--step-container",
                                    children: e.map((function(e) {
                                        return Object(j.jsx)(U, {
                                            imageUrl: "/static/images/icons/".concat(e.image, ".svg"),
                                            text: e.text,
                                            title: e.title
                                        }, e.image)
                                    }))
                                })]
                            })
                        })
                    })
                },
                U = function(e) {
                    var t = e.imageUrl,
                        n = e.title,
                        a = e.text;
                    return Object(j.jsxs)(C.a, {
                        className: "GettingStarted--step",
                        children: [Object(j.jsx)(B.a, {
                            alt: n,
                            height: 40,
                            src: t,
                            unoptimized: !0,
                            width: 40
                        }), Object(j.jsx)(h.b, {
                            marginBottom: "4px",
                            variant: "bold",
                            children: n
                        }), a]
                    })
                },
                q = Object(s.d)(C.a).withConfig({
                    componentId: "sc-ukft4p-0"
                })(["width:100%;padding-top:40px;padding-bottom:40px;", " .GettingStarted--step-container{flex-wrap:wrap;justify-content:space-around;margin:40px 0 20px 0;width:100%;.GettingStarted--step{max-width:100%;margin-bottom:20px;margin-right:20px;margin-left:20px;padding:0 20px;justify-content:flex-start;", " .GettingStarted--link{font-weight:600;color:", ";&:hover{color:", ";}}}}"], (function(e) {
                    return Object(V.b)({
                        variants: {
                            light: {
                                backgroundColor: e.theme.colors.cloud
                            },
                            dark: {
                                backgroundColor: e.theme.colors.withOpacity.oil
                            }
                        }
                    })
                }), Object(T.e)({
                    small: Object(s.c)(["max-width:240px;padding:0px;"]),
                    medium: Object(s.c)(["max-width:300px;"]),
                    large: Object(s.c)(["max-width:360px;"]),
                    extraLarge: Object(s.c)(["max-width:260px;"])
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                })),
                M = n("9U3r"),
                H = n("6vc1"),
                G = n("aXrf"),
                Y = n("veNq"),
                Q = n("4iFg"),
                W = n("m5he"),
                X = n("8uvj"),
                J = n("ocrj"),
                Z = n("dI2x"),
                $ = n("TEgP"),
                ee = n("9E9p"),
                te = n("1p8O"),
                ne = n("Weac"),
                ae = n("LsOE"),
                re = n("kCmG"),
                ie = n("YTPJ"),
                le = n("LjoF"),
                oe = n("jQgF"),
                se = "\uff0d",
                ce = [{
                    label: "last 24 hours",
                    value: "ONE_DAY_VOLUME"
                }, {
                    label: "last 7 days",
                    value: "SEVEN_DAY_VOLUME"
                }, {
                    label: "last 30 days",
                    value: "THIRTY_DAY_VOLUME"
                }],
                de = function() {
                    var e = Object(o.useState)(ce[0]),
                        t = e[0],
                        n = e[1];
                    return Object(j.jsx)(ge, {
                        children: Object(j.jsxs)(je, {
                            children: [Object(j.jsx)(C.a, {
                                alignItems: "center",
                                className: "title",
                                flexDirection: "row",
                                marginBottom: "56px",
                                textAlign: "center",
                                children: Object(j.jsxs)(h.b, {
                                    as: "h2",
                                    margin: "0px",
                                    variant: "h3",
                                    children: ["Top collections over", Object(j.jsx)(J.a, {
                                        content: function(e) {
                                            var a = e.close,
                                                r = e.List,
                                                i = e.Item;
                                            return Object(j.jsx)(r, {
                                                children: ce.map((function(e) {
                                                    return Object(j.jsx)(i, {
                                                        onClick: function() {
                                                            e.value !== t.value && n(e), a()
                                                        },
                                                        children: Object(j.jsx)(i.Content, {
                                                            children: Object(j.jsx)(_.a, {
                                                                alignItems: "center",
                                                                children: Object(j.jsx)(i.Title, {
                                                                    children: e.label
                                                                })
                                                            })
                                                        })
                                                    }, e.value)
                                                }))
                                            })
                                        },
                                        children: Object(j.jsxs)(_.a, {
                                            className: "TopCollections--dropdown",
                                            children: [Object(j.jsx)(h.b, {
                                                className: "TopCollections--category",
                                                fontSize: 24,
                                                margin: "0",
                                                textAlign: "center",
                                                variant: "faux-link",
                                                whiteSpace: "nowrap",
                                                children: t.label
                                            }), Object(j.jsx)(W.a, {
                                                className: "TopCollections--icon",
                                                color: "blue",
                                                value: "expand_more"
                                            })]
                                        })
                                    })]
                                })
                            }), oe.e ? Object(j.jsx)(he, {}) : Object(j.jsx)(o.Suspense, {
                                fallback: Object(j.jsx)(he, {}),
                                children: Object(j.jsx)(ue, {
                                    sortBy: t.value
                                })
                            }), Object(j.jsx)(d.c, {
                                href: "/rankings",
                                margin: "40px auto 0px",
                                width: "fit-content",
                                children: "Go to Rankings"
                            })]
                        })
                    })
                },
                ue = function(e) {
                    var t = e.sortBy,
                        r = Object(G.useLazyLoadQuery)(void 0 !== a ? a : a = n("4TjO"), {
                            sortBy: t
                        });
                    return Object(j.jsx)(me, {
                        dataKey: r,
                        sortBy: t
                    })
                },
                me = function(e) {
                    var t = e.dataKey,
                        a = e.sortBy,
                        i = Object(ne.e)("hide_collection_floor_prices"),
                        l = Object(G.useFragment)(void 0 !== r ? r : r = n("DQ1a"), t),
                        o = Object(ae.d)(null === l || void 0 === l ? void 0 : l.collections).map((function(e, t) {
                            var n = e.name,
                                r = e.logo,
                                l = e.id,
                                o = e.isVerified,
                                s = e.statsV2,
                                d = e.nativePaymentAsset,
                                u = Object(re.d)(new Date(e.createdDate)),
                                m = "ONE_DAY_VOLUME" === a && s.oneDayChange ? Object(le.d)(s.oneDayChange) : "SEVEN_DAY_VOLUME" === a && s.sevenDayChange ? Object(le.d)(s.sevenDayChange) : "THIRTY_DAY_VOLUME" === a && s.thirtyDayChange ? Object(le.d)(s.thirtyDayChange) : Object(le.d)(0),
                                p = m.isGreaterThan(0),
                                g = m.times(100).toFixed(2).toLocaleString(),
                                x = "ONE_DAY_VOLUME" !== a || Object(le.d)(s.oneDayVolume.unit).isZero() ? "SEVEN_DAY_VOLUME" !== a || Object(le.d)(s.sevenDayVolume.unit).isZero() ? "THIRTY_DAY_VOLUME" !== a || Object(le.d)(s.thirtyDayVolume.unit).isZero() ? se : Object(le.j)(s.thirtyDayVolume.unit, 2) : Object(le.j)(s.sevenDayVolume.unit, 2) : Object(le.j)(s.oneDayVolume.unit, 2),
                                f = s.floorPrice && !Object(le.d)(s.floorPrice.unit).isZero() ? Object(le.j)(s.floorPrice.unit, 2) : se;
                            return Object(j.jsxs)(ee.a, {
                                className: "TopCollections--item",
                                height: 88,
                                href: Object(ie.f)(e),
                                children: [Object(j.jsx)(C.a, {
                                    marginRight: "8px",
                                    children: Object(j.jsx)(h.b, {
                                        as: "span",
                                        fontSize: "16px",
                                        textAlign: "right",
                                        variant: "h4",
                                        children: Object(j.jsx)(X.a, {
                                            children: t + 1
                                        })
                                    })
                                }), Object(j.jsx)(Y.a, {
                                    isNew: u,
                                    isVerified: o,
                                    name: n,
                                    url: r
                                }), Object(j.jsxs)(ee.a.Content, {
                                    children: [Object(j.jsx)(ee.a.Title, {
                                        width: "100%",
                                        children: Object(j.jsx)(X.a, {
                                            children: n
                                        })
                                    }), !i && Object(j.jsx)(ee.a.Description, {
                                        children: Object(j.jsxs)(_.a, {
                                            alignItems: "center",
                                            children: [Object(j.jsx)(c.a, {
                                                marginRight: "4px",
                                                marginTop: "2px",
                                                children: "Floor price:"
                                            }), f !== se ? Object(j.jsx)(Q.a, {
                                                color: b.b.gray,
                                                fontSize: "14px",
                                                logo: d,
                                                value: f
                                            }) : se]
                                        })
                                    })]
                                }), Object(j.jsx)(ee.a.Side, {
                                    children: Object(j.jsxs)($.a, {
                                        alignItems: "flex-end",
                                        flexDirection: "column",
                                        children: [m.isEqualTo(0) ? Object(j.jsx)(Z.e, {
                                            color: b.b.gray,
                                            fontSize: "14px",
                                            margin: "0",
                                            children: se
                                        }) : Object(j.jsx)(Z.e, {
                                            as: "span",
                                            color: p ? "seaGrass" : "coral",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            children: Object(j.jsx)(X.a, {
                                                children: "".concat(p ? "+" : "").concat(g, "%")
                                            })
                                        }), Object(j.jsx)(Q.a, {
                                            color: b.b.gray,
                                            fontSize: "14px",
                                            logo: d,
                                            value: x
                                        })]
                                    })
                                })]
                            }, l)
                        }));
                    return pe(o)
                },
                pe = function(e) {
                    return Object(j.jsxs)(je, {
                        children: [Object(j.jsx)(m.a, {
                            greaterThanOrEqual: "xl",
                            children: Object(j.jsxs)(_.a, {
                                children: [Object(j.jsx)(u.a, {
                                    marginRight: "44px",
                                    minWidth: "30%",
                                    children: e.slice(0, 5)
                                }), Object(j.jsx)(u.a, {
                                    marginRight: "44px",
                                    minWidth: "30%",
                                    children: e.slice(5, 10)
                                }), Object(j.jsx)(u.a, {
                                    marginRight: "44px",
                                    minWidth: "30%",
                                    children: e.slice(10, 15)
                                })]
                            })
                        }), Object(j.jsx)(m.a, {
                            lessThan: "xl",
                            children: Object(j.jsx)(C.a, {
                                children: Object(j.jsx)(u.a, {
                                    maxWidth: "440px",
                                    width: "100%",
                                    children: e
                                })
                            })
                        })]
                    })
                },
                he = function() {
                    var e = be();
                    return pe(e)
                },
                be = function() {
                    return new Array(15).fill(null).map((function(e, t) {
                        return Object(j.jsxs)(ee.a, {
                            className: "TopCollections--item",
                            height: 88,
                            width: "100%",
                            children: [Object(j.jsx)(C.a, {
                                marginRight: "8px",
                                children: Object(j.jsx)(te.a.Line, {
                                    width: "16px"
                                })
                            }), Object(j.jsx)(te.a.Circle, {
                                height: "50px",
                                width: "50px"
                            }), Object(j.jsxs)(ee.a.Content, {
                                children: [Object(j.jsx)(te.a.Row, {
                                    height: "100%",
                                    width: "100%",
                                    children: Object(j.jsx)(te.a.Line, {})
                                }), Object(j.jsx)(te.a.Row, {
                                    height: "100%",
                                    width: "100%",
                                    children: Object(j.jsx)(te.a.Line, {})
                                })]
                            }), Object(j.jsx)(ee.a.Side, {
                                children: Object(j.jsx)(te.a.Line, {
                                    width: "64px"
                                })
                            })]
                        }, t)
                    }))
                },
                ge = Object(s.d)(c.a).withConfig({
                    componentId: "sc-1oks2s3-0"
                })(["padding:0;width:100%;max-width:1280px;margin-left:auto;margin-right:auto;", ""], Object(T.e)({
                    extraLarge: Object(s.c)(["padding:40px;"])
                })),
                je = Object(s.d)(u.a).attrs({
                    as: "section"
                }).withConfig({
                    componentId: "sc-1oks2s3-1"
                })(["width:100%;.TopCollections--item{border-top:1px solid transparent;border-right:1px solid transparent;border-left:1px solid transparent;border-bottom:", ";&:hover{border-radius:", ";border:", ";}}.TopCollections--dropdown{display:inline-flex;align-items:center;cursor:pointer;justify-content:center;}.TopCollections--dropdown{display:inline-flex;align-items:center;cursor:pointer;justify-content:center;margin-left:8px;}"], (function(e) {
                    return "1px solid ".concat(e.theme.colors.border)
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return "1px solid ".concat(e.theme.colors.border)
                })),
                xe = n("uiiN"),
                fe = n("ZwbU"),
                ye = n("HSVd"),
                Oe = function(e) {
                    var t = e.IpRightsTakedownDelistedMode;
                    return Object(j.jsx)(j.Fragment, {
                        children: Object(j.jsxs)(fe.a, {
                            isOpen: !0,
                            children: [Object(j.jsx)(fe.a.Header, {
                                children: Object(j.jsx)(fe.a.Title, {
                                    children: "This content is no longer accessible on OpenSea."
                                })
                            }), Object(j.jsx)(fe.a.Body, {
                                children: Object(j.jsxs)(c.a, {
                                    children: [Object(j.jsxs)(h.b, {
                                        children: ["This content is no longer accessible on OpenSea. It has been removed based on a claim of intellectual property infringement. Learn more about how OpenSea handles these claims", " ", Object(j.jsx)(g.a, {
                                            href: "".concat(L.L, "/hc/en-us/articles/4412092785043-What-can-I-do-if-my-copyrighted-works-are-being-sold-without-my-permission-"),
                                            children: "here"
                                        }), "."]
                                    }), "item-owner" == t && Object(j.jsxs)(h.b, {
                                        children: ["If this item has an active listing, you can remove it", " ", Object(j.jsx)(g.a, {
                                            href: "account/settings?tab=support",
                                            children: "here"
                                        }), "."]
                                    }), "collection-owner" == t && Object(j.jsxs)(h.b, {
                                        children: ["If this collection has active listings, you can remove them", " ", Object(j.jsx)(g.a, {
                                            href: "account/settings?tab=support",
                                            children: "here"
                                        }), "."]
                                    })]
                                })
                            }), Object(j.jsx)(fe.a.Footer, {
                                children: Object(j.jsx)(fe.a.Footer.Button, {
                                    variant: "secondary",
                                    onClick: function() {
                                        return ye.a.push("/")
                                    },
                                    children: "Close"
                                })
                            })]
                        })
                    })
                },
                we = n("TGkK"),
                ke = n("Ld9l"),
                ve = n.n(ke),
                Fe = n("2A7z"),
                Te = n("nuco"),
                Ce = n("j/Wi"),
                _e = n("t3V9"),
                Se = n("7Yyi"),
                Le = n("DWpj"),
                Ae = "Featured",
                Ne = ve()((function() {
                    return n.e(169).then(n.bind(null, "psbw")).then((function(e) {
                        return e.GetFeaturedModal
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["psbw"]
                        },
                        modules: ["../features/home/components/Featured/Featured.react.tsx -> features/home/components/GetFeaturedModal"]
                    }
                }),
                Ke = function(e) {
                    var t, a = e.data,
                        r = Object(G.useFragment)(void 0 !== i ? i : i = n("Aujd"), a),
                        l = {
                            backgroundImage: "url(".concat((null === r || void 0 === r ? void 0 : r.imagePreviewUrl) || (null === r || void 0 === r ? void 0 : r.imageUrl), ")")
                        },
                        o = function() {
                            return Object(j.jsx)(fe.a, {
                                trigger: function(e) {
                                    return Object(j.jsx)(Ce.b, {
                                        content: "Get featured on the homepage",
                                        children: Object(j.jsx)(_e.a, {
                                            "aria-label": "Get featured",
                                            onClick: function(t) {
                                                t.preventDefault(), e(), Object(Se.a)()
                                            },
                                            children: Object(j.jsx)(W.a, {
                                                color: "gray",
                                                cursor: "pointer",
                                                value: "info",
                                                variant: "outlined"
                                            })
                                        })
                                    })
                                },
                                children: Object(j.jsx)(Ne, {})
                            })
                        },
                        s = function() {
                            return Object(j.jsx)(g.a, {
                                className: "Featured--learn-more",
                                href: "/#".concat(M.a),
                                children: Object(j.jsxs)(_.a, {
                                    className: "Featured--learn-more-container",
                                    children: [Object(j.jsx)(W.a, {
                                        className: "Featured--learn-more-icon",
                                        color: "blue",
                                        value: "play_circle_filled"
                                    }), Object(j.jsx)(h.b, {
                                        className: "Featured--learn-more-text",
                                        children: "Learn more about OpenSea"
                                    })]
                                })
                            })
                        };
                    return Object(j.jsx)(j.Fragment, {
                        children: Object(j.jsxs)(Ee, {
                            children: [Object(j.jsx)(c.a, {
                                className: "Featured--background-container",
                                children: Object(j.jsx)(De, {
                                    style: l
                                })
                            }), Object(j.jsxs)(_.a, {
                                className: "Featured--container",
                                children: [Object(j.jsxs)(_.a, {
                                    className: "Featured--title",
                                    children: [Object(j.jsx)(h.b, {
                                        className: "Featured--header",
                                        variant: "h1",
                                        children: L.M
                                    }), Object(j.jsx)(h.b, {
                                        as: "span",
                                        className: "Featured--subheader",
                                        variant: "subtitle",
                                        children: L.N
                                    }), Object(j.jsxs)(_.a, {
                                        className: "Featured--button-container",
                                        children: [Object(j.jsx)(c.a, {
                                            marginRight: "20px",
                                            children: Object(j.jsx)(d.c, {
                                                className: "Featured--button",
                                                eventSource: Ae,
                                                href: "/explore-collections",
                                                children: "Explore"
                                            })
                                        }), Object(j.jsx)(d.c, {
                                            className: "Featured--button",
                                            eventSource: Ae,
                                            href: "/asset/create",
                                            variant: "secondary",
                                            children: "Create"
                                        })]
                                    }), Object(j.jsx)(m.a, {
                                        greaterThanOrEqual: "lg",
                                        children: function(e, t) {
                                            return t && Object(j.jsx)(_.a, {
                                                alignItems: "flex-end",
                                                className: e,
                                                height: "100%",
                                                children: Object(j.jsx)(s, {})
                                            })
                                        }
                                    })]
                                }), Object(j.jsx)(_.a, {
                                    className: "Featured--image",
                                    children: r ? Object(j.jsx)(_.a, {
                                        as: "article",
                                        className: "Featured--image-card",
                                        children: Object(j.jsxs)(g.a, {
                                            className: "Featured--image-link",
                                            href: Object(re.c)(r),
                                            onClick: function() {
                                                var e, t;
                                                return Object(Le.m)(r, {
                                                    assetName: r.name,
                                                    creatorUsername: null === (e = r.creator) || void 0 === e || null === (t = e.user) || void 0 === t ? void 0 : t.publicUsername,
                                                    link: Object(re.c)(r)
                                                })
                                            },
                                            children: [Object(j.jsx)(Fe.a, {
                                                alt: "",
                                                asset: r,
                                                autoPlay: !0,
                                                className: "Featured--image-media",
                                                isMuted: !0,
                                                mediaStyles: {
                                                    objectFit: "cover",
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "inherit",
                                                    borderBottomLeftRadius: 0,
                                                    borderBottomRightRadius: 0
                                                },
                                                priority: !0,
                                                size: 550
                                            }), r.creator && Object(j.jsxs)(ee.a, {
                                                as: "footer",
                                                className: "Featured--image-text-area",
                                                children: [Object(j.jsx)(ee.a.Avatar, {
                                                    alt: "Featured creator",
                                                    className: "Featured--image-avatar",
                                                    outline: 0,
                                                    size: 40,
                                                    src: r.creator.imageUrl
                                                }), Object(j.jsxs)(ee.a.Content, {
                                                    className: "Featured--image-content",
                                                    children: [Object(j.jsx)(ee.a.Title, {
                                                        children: r.name
                                                    }), Object(j.jsx)(ee.a.Description, {
                                                        className: "Featured--image-creator",
                                                        fontSize: 14,
                                                        children: null === (t = r.creator.user) || void 0 === t ? void 0 : t.publicUsername
                                                    })]
                                                }), Object(j.jsx)(ee.a.Side, {
                                                    children: Object(j.jsx)(o, {})
                                                })]
                                            })]
                                        })
                                    }) : Object(j.jsxs)(te.a, {
                                        className: "Featured--skeleton",
                                        children: [Object(j.jsxs)(te.a.Row, {
                                            className: "Featured--skeleton-row",
                                            children: [Object(j.jsx)(te.a.Block, {
                                                className: "Featured--skeleton-block"
                                            }), Object(j.jsx)(te.a.Block, {
                                                className: "Featured--skeleton-block",
                                                direction: "rtl"
                                            })]
                                        }), Object(j.jsx)(te.a.Row, {
                                            children: Object(j.jsxs)(Te.a, {
                                                children: [Object(j.jsx)(Te.a.Avatar, {}), Object(j.jsxs)(Te.a.Content, {
                                                    children: [Object(j.jsx)(Te.a.Title, {}), Object(j.jsx)(Te.a.Description, {})]
                                                }), Object(j.jsxs)(Te.a.Side, {
                                                    children: [Object(j.jsx)(Te.a.Title, {}), Object(j.jsx)(Te.a.Description, {})]
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(j.jsx)(m.a, {
                                    lessThan: "lg",
                                    children: function(e, t) {
                                        return t && Object(j.jsx)(_.a, {
                                            className: e,
                                            justifyContent: "center",
                                            width: "100%",
                                            children: Object(j.jsx)(s, {})
                                        })
                                    }
                                })]
                            })]
                        })
                    })
                },
                De = Object(s.d)(_.a).withConfig({
                    componentId: "sc-vt8n24-0"
                })(["height:780px;background-size:cover;background-color:", ";background-position:center;opacity:0.3;filter:blur(8px);-webkit-filter:blur(8px);mask:linear-gradient(#fff,transparent);-webkit-mask:linear-gradient(#fff,transparent);", ";"], (function(e) {
                    return e.theme.colors.background
                }), Object(T.e)({
                    tabletL: Object(s.c)(["height:586px;"])
                })),
                Ee = Object(s.d)(_.a).withConfig({
                    componentId: "sc-vt8n24-1"
                })(["height:780px;", " .Featured--background-container{width:100%;position:absolute;overflow:hidden;}.Featured--learn-more{z-index:2;cursor:pointer;align-self:flex-start;", " .Featured--learn-more-container{align-items:center;height:30px;&:hover{color:", ";}.Featured--learn-more-icon{color:inherit;}.Featured--learn-more-text{margin-left:8px;font-weight:600;color:", ";&:hover{color:inherit;}}}}.Featured--container{margin:0 auto;max-width:", ";width:100%;flex-wrap:wrap;&:hover{box-shadow:10px;}.Featured--title{flex-direction:column;align-items:center;width:100%;padding:30px 20px 20px 20px;", " .Featured--header{margin:0;font-size:28px;text-align:center;z-index:2;max-width:330px;", "}.Featured--subheader{margin-top:20px;max-width:400px;text-align:center;z-index:2;font-size:18px;", " ", "}.Featured--button-container{margin-top:20px;z-index:2;", " .Featured--button{width:120px;", "}}}.Featured--image{flex-direction:column;align-items:center;width:100%;padding-top:0;", " .AssetMedia--img{border-bottom-left-radius:0;border-bottom-right-radius:0;}.Featured--skeleton{max-width:355px;", " .Featured--skeleton-row{border-top-left-radius:10px;border-top-right-radius:10px;margin-bottom:-10px;.Featured--skeleton-block{height:300px;", "}}}.Featured--image-card{width:100%;background-color:", ";flex-direction:column;border-radius:10px;z-index:2;max-width:355px;box-shadow:0px 0px 10px 0px ", ";", " &:hover{transition:box-shadow 0.3s ease-in;box-shadow:0px 0px 50px 0px ", ";}.Image--image{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important;}.Featured--image-text-area{border:none;&:hover{box-shadow:none;border-bottom-left-radius:10px;border-bottom-right-radius:10px;}.Featured--image-avatar{object-fit:cover;}.Featured--image-creator{color:", ";&:hover{color:", ";}}}.Featured--image-link{border-radius:10px;.Featured--image-media{height:80vw;z-index:2;border-bottom:1px solid ", ";", "}}}}}"], Object(T.e)({
                    tabletL: Object(s.c)(["height:586px;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["padding-top:40px;"])
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.maxWidth.smallPadding
                }), Object(T.e)({
                    tabletL: Object(s.c)(["width:50%;padding:110px 20px 44px 30px;align-items:flex-start;"])
                }), Object(T.e)({
                    small: Object(s.c)(["font-size:32px;max-width:", "px;"], 550),
                    tabletL: Object(s.c)(["text-align:left;max-width:100%;margin-right:10px;"]),
                    extraLarge: Object(s.c)(["font-size:45px;"])
                }), (function(e) {
                    return Object(V.b)({
                        variants: {
                            light: {
                                color: "".concat(e.theme.colors.oil, ";")
                            },
                            dark: {
                                color: "".concat(e.theme.colors.text.subtle, ";")
                            }
                        }
                    })
                }), Object(T.e)({
                    tabletL: Object(s.c)(["font-size:24px;text-align:left;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["margin-top:40px;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["width:167px;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["width:50%;padding:40px 0px;align-items:flex-end;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["max-width:550px;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["height:420px;"])
                }), (function(e) {
                    return e.theme.colors.surface
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), Object(T.e)({
                    tabletL: Object(s.c)(["max-width:550px;margin-right:30px;"])
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                }), (function(e) {
                    return e.theme.colors.border
                }), Object(T.e)({
                    phoneL: Object(s.c)(["height:300px;"]),
                    tabletL: Object(s.c)(["height:420px;"])
                })),
                Pe = n("h64z"),
                Re = n("0c5R"),
                ze = n("O4Bb"),
                Be = n("heV+"),
                Ve = "Featured",
                Ie = "RTFKT Space Drip x Nike Air Force 1",
                Ue = "",
                qe = "/collection/spacedripforging",
                Me = 360,
                He = 550,
                Ge = "https://openseauserdata.com/files/spacedrip_launch_image_4x3.jpg",
                Ye = "RTFKT",
                Qe = "https://openseauserdata.com/files/spacedrip_launch_creator_image.svg",
                We = function() {
                    var e = {
                            backgroundImage: "url(".concat(Ge, ")")
                        },
                        t = function() {
                            return Object(j.jsx)(g.a, {
                                className: "Featured--learn-more",
                                href: "/#".concat(M.a),
                                children: Object(j.jsxs)(_.a, {
                                    className: "Featured--learn-more-container",
                                    children: [Object(j.jsx)(W.a, {
                                        className: "Featured--learn-more-icon",
                                        color: "blue",
                                        value: "play_circle_filled"
                                    }), Object(j.jsx)(h.b, {
                                        className: "Featured--learn-more-text",
                                        children: "Learn more about OpenSea"
                                    })]
                                })
                            })
                        };
                    return Object(j.jsx)(j.Fragment, {
                        children: Object(j.jsxs)(Je, {
                            children: [Object(j.jsx)(c.a, {
                                className: "Featured--background-container",
                                children: Object(j.jsx)(Xe, {
                                    style: e
                                })
                            }), Object(j.jsxs)(_.a, {
                                className: "Featured--container",
                                children: [Object(j.jsxs)(_.a, {
                                    className: "Featured--title",
                                    children: [Object(j.jsx)(h.b, {
                                        className: "Featured--header",
                                        variant: "h1",
                                        children: L.M
                                    }), Object(j.jsx)(h.b, {
                                        as: "span",
                                        className: "Featured--subheader",
                                        variant: "subtitle",
                                        children: L.N
                                    }), Object(j.jsxs)(_.a, {
                                        className: "Featured--button-container",
                                        children: [Object(j.jsx)(c.a, {
                                            marginRight: "20px",
                                            children: Object(j.jsx)(d.c, {
                                                className: "Featured--button",
                                                eventSource: Ve,
                                                href: "/explore-collections",
                                                children: "Explore"
                                            })
                                        }), Object(j.jsx)(d.c, {
                                            className: "Featured--button",
                                            eventSource: Ve,
                                            href: "/asset/create",
                                            variant: "secondary",
                                            children: "Create"
                                        })]
                                    }), Object(j.jsx)(m.a, {
                                        greaterThanOrEqual: "lg",
                                        children: function(e, n) {
                                            return n && Object(j.jsx)(_.a, {
                                                alignItems: "flex-end",
                                                className: e,
                                                height: "100%",
                                                children: Object(j.jsx)(t, {})
                                            })
                                        }
                                    })]
                                }), Object(j.jsx)(_.a, {
                                    className: "Featured--image",
                                    children: Object(j.jsx)(_.a, {
                                        as: "article",
                                        className: "Featured--image-card",
                                        children: Object(j.jsxs)(g.a, {
                                            className: "Featured--image-link",
                                            href: qe,
                                            onClick: function() {
                                                return Object(Le.l)({
                                                    name: Ie,
                                                    creatorUsername: Ye,
                                                    link: qe
                                                })
                                            },
                                            children: [Object(j.jsx)(B.a, {
                                                alt: "",
                                                className: "Featured--image-media",
                                                height: Me,
                                                priority: !0,
                                                src: Ge,
                                                unoptimized: !0,
                                                width: He
                                            }), Object(j.jsxs)(ee.a, {
                                                as: "footer",
                                                className: "Featured--image-text-area",
                                                children: [Object(j.jsx)(ee.a.Avatar, {
                                                    alt: "Featured creator",
                                                    className: "Featured--image-avatar",
                                                    outline: 0,
                                                    size: 38,
                                                    src: Qe
                                                }), Object(j.jsxs)(ee.a.Content, {
                                                    className: "Featured--image-content",
                                                    children: [Object(j.jsx)(ee.a.Title, {
                                                        children: Object(j.jsx)("span", {
                                                            className: "Featured--image-title",
                                                            children: Ie
                                                        })
                                                    }), Object(j.jsxs)(ee.a.Description, {
                                                        className: "Featured--image-creator",
                                                        children: [Object(j.jsx)("span", {
                                                            style: {
                                                                fontWeight: 400
                                                            },
                                                            children: "by"
                                                        }), " ", Object(j.jsx)("span", {
                                                            style: {
                                                                fontWeight: 500
                                                            },
                                                            children: Ye
                                                        })]
                                                    })]
                                                })]
                                            }), Ue && Object(j.jsx)("p", {
                                                className: "Featured--image-description",
                                                children: Ue
                                            })]
                                        })
                                    })
                                }), Object(j.jsx)(m.a, {
                                    lessThan: "lg",
                                    children: function(e, n) {
                                        return n && Object(j.jsx)(_.a, {
                                            className: e,
                                            justifyContent: "center",
                                            width: "100%",
                                            children: Object(j.jsx)(t, {})
                                        })
                                    }
                                })]
                            })]
                        })
                    })
                },
                Xe = Object(s.d)(_.a).withConfig({
                    componentId: "sc-1i1wkh1-0"
                })(["height:780px;background-size:cover;background-color:", ";background-position:center;opacity:0.3;filter:blur(8px);-webkit-filter:blur(8px);mask:linear-gradient(#fff,transparent);-webkit-mask:linear-gradient(#fff,transparent);", ";"], (function(e) {
                    return e.theme.colors.background
                }), Object(T.e)({
                    tabletL: Object(s.c)(["height:586px;"])
                })),
                Je = Object(s.d)(_.a).withConfig({
                    componentId: "sc-1i1wkh1-1"
                })(["height:780px;", " .Featured--background-container{width:100%;position:absolute;overflow:hidden;}.Featured--learn-more{z-index:2;cursor:pointer;align-self:flex-start;", " .Featured--learn-more-container{align-items:center;height:30px;&:hover{color:", ";}.Featured--learn-more-icon{color:inherit;}.Featured--learn-more-text{margin-left:8px;font-weight:600;color:", ";&:hover{color:inherit;}}}}.Featured--container{margin:0 auto;max-width:", ";width:100%;flex-wrap:wrap;&:hover{box-shadow:10px;}.Featured--title{flex-direction:column;align-items:center;width:100%;padding:30px 20px 20px 20px;", " .Featured--header{margin:0;font-size:28px;text-align:center;z-index:2;max-width:330px;", "}.Featured--subheader{margin-top:20px;max-width:400px;text-align:center;z-index:2;font-size:18px;", " ", "}.Featured--button-container{margin-top:20px;z-index:2;", " .Featured--button{width:120px;", "}}}.Featured--image{flex-direction:column;align-items:center;width:100%;padding-top:0;", " .AssetMedia--img{border-bottom-left-radius:0;border-bottom-right-radius:0;}.Featured--skeleton{max-width:355px;", " .Featured--skeleton-row{border-top-left-radius:10px;border-top-right-radius:10px;margin-bottom:-10px;.Featured--skeleton-block{height:300px;", "}}}.Featured--image-card{width:100%;background-color:", ";flex-direction:column;border-radius:10px;overflow:hidden;z-index:2;max-width:355px;box-shadow:0px 0px 10px 0px ", ";", " &:hover{transition:box-shadow 0.3s ease-in;box-shadow:0px 0px 50px 0px ", ";}.Image--image{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important;}.Featured--image-text-area{border:none;margin-top:-11px;padding-left:12px;padding-right:12px;padding-bottom:13px;", " &:hover{box-shadow:none;border-bottom-left-radius:10px;border-bottom-right-radius:10px;}.Featured--image-avatar{object-fit:cover;}.Featured--image-creator{font-size:14px;line-height:20px;margin-top:-1px;color:", ";", "}}.Featured--image-content{margin-left:-3px;}.Featured--image-title{font-size:14px;line-height:20px;color:", ";}.Featured--image-description{padding:0 52px 0 12px;margin-top:-4px;margin-bottom:12px;font-size:14px;line-height:20px;color:", ";", "}.Featured--image-link{border-radius:10px;.Featured--image-media{height:80vw;z-index:2;border-bottom:1px solid ", ";", "}}}}}"], Object(T.e)({
                    tabletL: Object(s.c)(["height:586px;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["padding-top:40px;"])
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.maxWidth.smallPadding
                }), Object(T.e)({
                    tabletL: Object(s.c)(["width:50%;padding:110px 20px 44px 30px;align-items:flex-start;"])
                }), Object(T.e)({
                    small: Object(s.c)(["font-size:32px;max-width:", "px;"], 550),
                    tabletL: Object(s.c)(["text-align:left;max-width:100%;margin-right:10px;"]),
                    extraLarge: Object(s.c)(["font-size:45px;"])
                }), (function(e) {
                    return Object(V.b)({
                        variants: {
                            light: {
                                color: "".concat(e.theme.colors.oil, ";")
                            },
                            dark: {
                                color: "".concat(e.theme.colors.text.subtle, ";")
                            }
                        }
                    })
                }), Object(T.e)({
                    tabletL: Object(s.c)(["font-size:24px;text-align:left;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["margin-top:40px;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["width:167px;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["width:50%;padding:60px 0px;align-items:flex-end;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["max-width:550px;"])
                }), Object(T.e)({
                    tabletL: Object(s.c)(["height:420px;"])
                }), (function(e) {
                    return e.theme.colors.surface
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), Object(T.e)({
                    tabletL: Object(s.c)(["max-width:550px;margin-right:30px;"])
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), Object(T.e)({
                    tabletL: Object(s.c)(["margin-top:-8px;padding-left:16px;padding-right:16px;padding-bottom:15px;"])
                }), (function(e) {
                    return "dark" === e.theme.type ? e.theme.colors.white : e.theme.colors.charcoal
                }), Object(T.e)({
                    tabletL: Object(s.c)(["margin-top:0;"])
                }), (function(e) {
                    return "dark" === e.theme.type ? e.theme.colors.white : e.theme.colors.charcoal
                }), (function(e) {
                    return "dark" === e.theme.type ? e.theme.colors.gray : e.theme.colors.darkGray
                }), Object(T.e)({
                    tabletL: Object(s.c)(["padding:0 16px;margin-top:-2px;margin-bottom:16px;"])
                }), (function(e) {
                    return e.theme.colors.border
                }), Object(T.e)({
                    phoneL: Object(s.c)(["height:300px;"]),
                    tabletL: Object(s.c)(["height:420px;"])
                })),
                Ze = void 0 !== l ? l : l = n("eqlB"),
                $e = function(e) {
                    var t, n, a = e.data,
                        r = Object(Pe.a)().announcementBanner,
                        i = Object(ne.e)("custom_featured_item");
                    Object(Re.a)((function() {
                        Object(ze.l)()
                    }));
                    var l = Be.a.parse({
                            show_delisted_notice: Be.a.Optional(Be.a.boolean)
                        }).show_delisted_notice,
                        o = Be.a.parse({
                            show_ip_rights_delisted_notice: Be.a.Optional(Be.a.isIpRightsTakedownDelisted)
                        }).show_ip_rights_delisted_notice,
                        s = null === r || void 0 === r ? void 0 : r.announcementBanner,
                        d = "HOMEPAGE_ONLY" == (null === s || void 0 === s ? void 0 : s.displayMode),
                        u = Object(ne.n)();
                    return Object(j.jsxs)(j.Fragment, {
                        children: [Object(j.jsx)(et, {}), Object(j.jsxs)(we.a, {
                            announcement: d ? s : void 0,
                            isLanding: !0,
                            children: [i ? Object(j.jsx)(We, {}) : Object(j.jsx)(Ke, {
                                data: null !== (t = null === a || void 0 === a ? void 0 : a.featuredAsset) && void 0 !== t ? t : null
                            }), u && Object(j.jsx)(x, {
                                background: "".concat(L.zb, "/solana/home-banner.png"),
                                ctaLink: "/explore-solana",
                                ctaText: "Explore",
                                title: "Solana is in beta on OpenSea"
                            }), Object(j.jsx)(c.a, {
                                marginBottom: "120px",
                                children: Object(j.jsx)(H.a, {
                                    data: null !== (n = null === a || void 0 === a ? void 0 : a.promotions) && void 0 !== n ? n : null,
                                    title: Object(j.jsx)(h.b, {
                                        as: "h2",
                                        marginBottom: "8px",
                                        textAlign: "center",
                                        variant: "h3",
                                        children: "Notable Drops"
                                    })
                                })
                            }), Object(j.jsx)(de, {}), Object(j.jsx)(O.a, {}), Object(j.jsx)(I, {}), Object(j.jsx)(E, {}), Object(j.jsx)(A, {}), Object(j.jsx)(M.b, {
                                showButton: !0
                            }), Object(j.jsx)(w.a, {}), l && Object(j.jsx)(fe.a, {
                                isOpen: !0,
                                children: Object(j.jsx)(xe.a, {
                                    variant: "home",
                                    onClose: function() {
                                        return ye.a.push("/")
                                    }
                                })
                            }), o && Object(j.jsx)(Oe, {
                                IpRightsTakedownDelistedMode: o
                            })]
                        })]
                    })
                };
            $e.query = Ze, $e.cachePolicy = {
                maxAge: 300
            };
            var et = Object(s.b)(["html{scroll-behavior:smooth;}"])
        },
        cFSR: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("HMC2");
            t.default = a.b
        },
        eqlB: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        kind: "Literal",
                        name: "promotionType",
                        value: "HOMEPAGE"
                    }],
                    t = [{
                        kind: "Literal",
                        name: "featuredAssetType",
                        value: "HOMEPAGE"
                    }],
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "HomePageQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "PromotionType",
                            kind: "LinkedField",
                            name: "promotions",
                            plural: !0,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "Promotions_promotions"
                            }],
                            storageKey: 'promotions(promotionType:"HOMEPAGE")'
                        }, {
                            alias: null,
                            args: t,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "featuredAsset",
                            plural: !1,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "Featured_data"
                            }],
                            storageKey: 'featuredAsset(featuredAssetType:"HOMEPAGE")'
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "HomePageQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "PromotionType",
                            kind: "LinkedField",
                            name: "promotions",
                            plural: !0,
                            selections: [n, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardImg",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardLink",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardVideo",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardVideoMimeType",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoHeader",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "cardColor",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoSubtitle",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "saleStartTime",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "saleEndTime",
                                storageKey: null
                            }],
                            storageKey: 'promotions(promotionType:"HOMEPAGE")'
                        }, {
                            alias: null,
                            args: t,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "featuredAsset",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "name",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "imagePreviewUrl",
                                storageKey: null
                            }, a, {
                                alias: null,
                                args: null,
                                concreteType: "AccountType",
                                kind: "LinkedField",
                                name: "creator",
                                plural: !1,
                                selections: [a, {
                                    alias: null,
                                    args: null,
                                    concreteType: "UserType",
                                    kind: "LinkedField",
                                    name: "user",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "publicUsername",
                                        storageKey: null
                                    }, n],
                                    storageKey: null
                                }, n],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "AssetContractType",
                                kind: "LinkedField",
                                name: "assetContract",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "address",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "chain",
                                    storageKey: null
                                }, n],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "tokenId",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "animationUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "backgroundColor",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "DisplayDataType",
                                    kind: "LinkedField",
                                    name: "displayData",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "cardDisplayStyle",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, n],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "decimals",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "isDelisted",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "displayImageUrl",
                                storageKey: null
                            }, n],
                            storageKey: 'featuredAsset(featuredAssetType:"HOMEPAGE")'
                        }]
                    },
                    params: {
                        cacheID: "95ba7e7d875ba2a532357ba8ea4a36cd",
                        id: null,
                        metadata: {},
                        name: "HomePageQuery",
                        operationKind: "query",
                        text: "query HomePageQuery {\n  promotions(promotionType: HOMEPAGE) {\n    ...Promotions_promotions\n    id\n  }\n  featuredAsset(featuredAssetType: HOMEPAGE) {\n    ...Featured_data\n    id\n  }\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n  decimals\n  isDelisted\n  imageUrl\n  displayImageUrl\n}\n\nfragment Featured_data on AssetType {\n  name\n  imagePreviewUrl\n  imageUrl\n  creator {\n    imageUrl\n    user {\n      publicUsername\n      id\n    }\n    id\n  }\n  ...asset_url\n  ...AssetMedia_asset\n  ...itemEvents_data\n}\n\nfragment Promotions_promotions on PromotionType {\n  id\n  promoCardImg\n  promoCardLink\n  promoCardVideo\n  promoCardVideoMimeType\n  promoHeader\n  cardColor\n  promoSubtitle\n  saleStartTime\n  saleEndTime\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment itemEvents_data on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n"
                    }
                }
            }();
            a.hash = "a49988f52e47904aa50bb5982124266a", t.default = a
        },
        iCgP: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: {
                    plural: !0
                },
                name: "Promotions_promotions",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "promoCardImg",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "promoCardLink",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "promoCardVideo",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "promoCardVideoMimeType",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "promoHeader",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cardColor",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "promoSubtitle",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "saleStartTime",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "saleEndTime",
                    storageKey: null
                }],
                type: "PromotionType",
                abstractKey: null,
                hash: "97de806ab79339bd597c2cc0f063bc57"
            };
            t.default = a
        },
        uiiN: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            n("mXGw");
            var a = n("qymy"),
                r = n("ZwbU"),
                i = n("n0tG"),
                l = n("C/iq"),
                o = n("oYCi"),
                s = function(e) {
                    var t = e.onClose,
                        n = e.variant;
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsx)(r.a.Header, {
                            children: Object(o.jsxs)(r.a.Title, {
                                children: ["account" === n ? "This item" : "The item you tried to visit", " ", "is no longer available on OpenSea"]
                            })
                        }), Object(o.jsx)(r.a.Body, {
                            children: Object(o.jsxs)("div", {
                                className: "DelistedNotice--content",
                                children: [Object(o.jsxs)(i.b, {
                                    children: ["account" === n ? "This item" : "The item you tried to visit", " ", "is no longer available on OpenSea. It will not be visible or accessible to anyone browsing the marketplace", "account" === n ? " or your profile" : "", "."]
                                }), Object(o.jsxs)(i.b, {
                                    children: ["To learn more about why", " ", "account" === n ? "this item" : "the item you tried to visit", " ", "is no longer available on OpenSea, read", " ", Object(o.jsx)(a.a, {
                                        href: "https://openseahelp.zendesk.com/hc/en-us/articles/1500010625362",
                                        children: "our Help Center guide on this topic"
                                    }), ". If you have questions or concerns regarding this action, contact the OpenSea team ", Object(o.jsx)(a.a, {
                                        href: l.Cb,
                                        children: "here"
                                    }), "."]
                                })]
                            })
                        }), Object(o.jsx)(r.a.Footer, {
                            children: Object(o.jsx)(r.a.Footer.Button, {
                                variant: "secondary",
                                onClick: t,
                                children: "Close"
                            })
                        })]
                    })
                }
        },
        veNq: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            n("mXGw");
            var a = n("UutA"),
                r = n("uMSw"),
                i = n("Vy0S"),
                l = n("b7Z7"),
                o = n("QrBS"),
                s = n("j/Wi"),
                c = n("oYCi"),
                d = Object(a.d)(l.a).withConfig({
                    componentId: "sc-3iovjc-0"
                })(["background-color:", ";border-radius:", ";height:10px;min-width:10px;position:absolute;right:20.5%;top:0%;border:1px solid ", ";"], (function(e) {
                    return e.theme.colors.seaGrass
                }), (function(e) {
                    return e.theme.radii.circle
                }), (function(e) {
                    return e.theme.colors.border
                })),
                u = Object(a.d)(l.a).withConfig({
                    componentId: "sc-3iovjc-1"
                })(["height:10px;min-width:10px;position:absolute;right:12.5%;bottom:16%;"]),
                m = function(e) {
                    var t = e.url,
                        n = e.isNew,
                        a = e.isVerified,
                        m = e.name;
                    return Object(c.jsxs)(l.a, {
                        position: "relative",
                        children: [Object(c.jsx)(o.a, {
                            border: "1px solid",
                            borderColor: "border",
                            borderRadius: "circle",
                            marginX: "8px",
                            children: Object(c.jsx)(r.b, {
                                alt: m ? "".concat(m, " profile image") : "",
                                size: 50,
                                sizing: "cover",
                                url: null !== t && void 0 !== t ? t : void 0,
                                variant: "round"
                            })
                        }), n && Object(c.jsx)(s.b, {
                            content: "New",
                            children: Object(c.jsx)(d, {})
                        }), a && Object(c.jsx)(u, {
                            "aria-hidden": "true",
                            children: Object(c.jsx)(i.a, {
                                size: "small"
                            })
                        })]
                    })
                }
        },
        "x+oV": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PaymentAssetLogo_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "symbol",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "AssetType",
                    kind: "LinkedField",
                    name: "asset",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "PaymentAssetType",
                abstractKey: null,
                hash: "dd0a54227a9e4f3ff09cfd83c6e3e874"
            };
            t.default = a
        },
        z1wA: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            n("mXGw");
            var a = n("UutA"),
                r = n("b7Z7"),
                i = n("B6yL"),
                l = n("oYCi"),
                o = function(e) {
                    var t = e.url,
                        n = e.autoplay,
                        a = void 0 !== n && n,
                        r = e.loop,
                        o = e.showControls,
                        c = void 0 === o || o,
                        d = e.title,
                        u = e.playlist,
                        m = void 0 === u || u;
                    return Object(i.n)(t) ? Object(l.jsx)(s, {
                        children: Object(l.jsx)("iframe", {
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0,
                            frameBorder: "0",
                            height: "315",
                            sandbox: "allow-same-origin allow-scripts allow-presentation",
                            src: Object(i.d)(t, a, r, c, m),
                            title: d,
                            width: "560"
                        })
                    }) : null
                },
                s = Object(a.d)(r.a).withConfig({
                    componentId: "sc-1e7ikaq-0"
                })(["height:0;padding-bottom:56.25%;position:relative;iframe,object,embed{height:100%;left:0;position:absolute;top:0;width:100%;}"])
        }
    },
    [
        ["/am7", 1, 0, 13, 5, 9, 7, 3, 11, 6, 4, 12, 10, 2, 8, 14, 15, 16, 17, 18, 19, 20, 21, 22, 27, 29]
    ]
]);
//# sourceMappingURL=index-aafe888e6662b111f5d6.js.map