(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [18], {
        "+n/q": function(e, n, t) {
            "use strict";
            var a, i = t("m6w3"),
                r = (t("mXGw"), t("aXrf")),
                l = t("UutA"),
                c = t("pZwI"),
                o = t("qymy"),
                s = t("jxQ4"),
                u = t("b7Z7"),
                d = t("QrBS"),
                g = t("sX+s"),
                m = t("j/Wi"),
                b = t("n70p"),
                p = t("JRnK"),
                j = t("h64z"),
                h = t("OJfA"),
                f = t("CJkU"),
                O = t("LjoF"),
                y = t("7v7j"),
                v = t("u6YR"),
                x = t("D4YM"),
                k = t("oYCi");

            function w(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function F(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? w(Object(t), !0).forEach((function(n) {
                        Object(i.a)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            n.a = function(e) {
                var n = e.className,
                    i = e.dataKey,
                    l = e.isCreator,
                    x = e.isOwner,
                    w = e.mode,
                    A = e.variant,
                    K = void 0 === A ? "both" : A,
                    C = e.ownedQuantity,
                    L = e.target,
                    S = e.iconSize,
                    U = void 0 === S ? 22 : S,
                    N = e.handleOverflow,
                    z = void 0 === N || N,
                    D = e.justifyContent,
                    T = e.fontWeight,
                    q = void 0 === T ? "inherit" : T,
                    _ = e.testId,
                    E = void 0 === _ ? "AccountLink" : _,
                    M = e.isLink,
                    J = void 0 === M || M,
                    X = Object(j.a)().wallet,
                    Y = Object(r.useFragment)(void 0 !== a ? a : a = t("qT35"), i),
                    R = Y.address,
                    B = Y.user,
                    G = Y.config,
                    Q = Y.isCompromised,
                    V = Y.displayName,
                    W = null !== B && void 0 !== B && B.publicUsername ? Object(y.n)(B.publicUsername, 21) : null !== V && void 0 !== V ? V : void 0,
                    Z = X.isActiveAccount(Y) ? "you" : W || Object(f.b)(R),
                    $ = Object(h.a)(Y, l);
                return Object(b.a)().isPhoenixEnabled && l ? Object(k.jsxs)(k.Fragment, {
                    children: [Object(k.jsx)(g.a, {
                        lessThan: "sm",
                        children: Object(k.jsxs)(d.a, {
                            alignItems: "center",
                            children: [Object(k.jsx)(p.a, {
                                variant: "small",
                                children: "By\xa0"
                            }), Object(k.jsx)(o.a, {
                                href: $,
                                children: Object(k.jsx)(P, {
                                    variant: "small-bold",
                                    children: Z
                                })
                            }), Object(k.jsx)(c.a, {
                                config: G,
                                isCompromised: !!Q,
                                tooltipPlacement: "bottom",
                                variant: "tiny"
                            })]
                        })
                    }), Object(k.jsx)(g.a, {
                        greaterThanOrEqual: "sm",
                        children: Object(k.jsxs)(d.a, {
                            alignItems: "center",
                            children: [Object(k.jsx)(p.a, {
                                variant: "body",
                                children: "By\xa0"
                            }), Object(k.jsx)(o.a, {
                                href: $,
                                children: Object(k.jsx)(P, {
                                    variant: "semibold",
                                    children: Z
                                })
                            }), Object(k.jsx)(c.a, {
                                config: G,
                                isCompromised: !!Q,
                                variant: "tiny"
                            })]
                        })
                    })]
                }) : Object(k.jsxs)(I, {
                    className: Object(v.a)("AccountLink", {
                        "light-container": "light" === w,
                        "ellipsis-overflow": "both" !== K && z,
                        "variant-both": "both" === K
                    }, n),
                    "data-testid": E,
                    justifyContent: D,
                    children: ["no-image" !== K && Object(k.jsx)(u.a, F(F({}, J ? {
                        as: o.a,
                        href: Object(h.a)(Y),
                        target: L,
                        onClick: function(e) {
                            return e.stopPropagation()
                        }
                    } : void 0), {}, {
                        fontWeight: q,
                        children: Object(k.jsx)(m.b, {
                            content: Z,
                            children: Object(k.jsx)("span", {
                                children: Object(k.jsx)(s.a, {
                                    className: Object(v.a)("AccountLink", {
                                        image: !w,
                                        "light-image": "light" === w
                                    }),
                                    dataKey: Y,
                                    size: U
                                })
                            })
                        })
                    })), Object(k.jsxs)(k.Fragment, {
                        children: [l ? Object(k.jsx)(k.Fragment, {
                            children: "Created by\xa0"
                        }) : x ? C ? Object(k.jsxs)(k.Fragment, {
                            children: [Object(y.n)(Object(O.m)(C), 19), "\xa0owned by\xa0"]
                        }) : Object(k.jsx)(k.Fragment, {
                            children: "Owned by\xa0"
                        }) : "", "only-image" !== K && Object(k.jsx)(u.a, F(F({
                            className: Object(v.a)("AccountLink", {
                                "light-text": "light" === w,
                                "ellipsis-overflow": z,
                                "ellipsis-variant-both": z && "both" === K
                            })
                        }, J ? {
                            as: o.a,
                            href: $,
                            target: L,
                            onClick: function(e) {
                                e.stopPropagation()
                            }
                        } : void 0), {}, {
                            fontWeight: q,
                            children: Object(k.jsx)("span", {
                                children: Z
                            })
                        }))]
                    }), Object(k.jsx)(c.a, {
                        config: G,
                        isCompromised: Q
                    })]
                })
            };
            var P = Object(l.d)(p.a).withConfig({
                    componentId: "sc-4gdciy-0"
                })(["&:hover{", "}&:active{", "}"], (function(e) {
                    return Object(x.b)({
                        variants: {
                            dark: {
                                color: e.theme.colors.gray
                            },
                            light: {
                                color: e.theme.colors.oil
                            }
                        }
                    })
                }), (function(e) {
                    return Object(x.b)({
                        variants: {
                            dark: {
                                color: e.theme.colors.ash
                            },
                            light: {
                                color: e.theme.colors.darkGray
                            }
                        }
                    })
                })),
                I = Object(l.d)(u.a).withConfig({
                    componentId: "sc-4gdciy-1"
                })(["display:inline-flex;align-items:center;height:24px;width:100%;&.AccountLink--variant-both{display:inline-flex;}.AccountLink--ellipsis-variant-both{display:inline-block;}.AccountLink--ellipsis-overflow{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}.AccountLink--image{cursor:pointer;margin-right:8px;}&.AccountLink--light-container{.AccountLink--light-image{border:2px solid white;border-radius:50%;margin:0 4px;}.AccountLink--light-text{color:white;}&:hover{.AccountLink--light-image{box-shadow:0px 1px 3px rgba(0,0,0,0.6);}.AccountLink--light-text{text-shadow:0px 1px 3px rgba(0,0,0,0.6);}}}"])
        },
        azPg: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return l
            }));
            t("mXGw");
            var a = t("9va6"),
                i = t("ZwbU"),
                r = t("oYCi"),
                l = function(e) {
                    var n = e.children,
                        t = e.trigger,
                        l = e.initiallyOpen,
                        c = e.overrides;
                    return Object(r.jsx)(i.a, {
                        focusFirstFocusableElement: !1,
                        initiallyOpen: l,
                        overrides: Object(a.merge)({
                            Dialog: {
                                props: {
                                    style: {
                                        height: "min(calc(100vw - 50px), calc(100vh - 50px))",
                                        width: "min(calc(100vw - 50px), calc(100vh - 50px))",
                                        background: "transparent",
                                        border: 0,
                                        position: "initial",
                                        borderRadius: "initial"
                                    }
                                }
                            },
                            CloseRoot: {
                                style: {
                                    top: 8,
                                    right: 8
                                }
                            }
                        }, c),
                        position: "centered",
                        trigger: t,
                        children: n
                    })
                }
        },
        bKUJ: function(e, n, t) {
            "use strict";
            t.r(n);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "input"
                    }],
                    n = [{
                        kind: "Variable",
                        name: "input",
                        variableName: "input"
                    }],
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "ProfileImageMutation",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "account",
                            plural: !1,
                            selections: [t],
                            storageKey: null
                        }],
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "ProfileImageMutation",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "account",
                            plural: !1,
                            selections: [t, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "75fc44089a8f98943e046805a6fb2a2c",
                        id: null,
                        metadata: {},
                        name: "ProfileImageMutation",
                        operationKind: "mutation",
                        text: "mutation ProfileImageMutation(\n  $input: AccountMutationInput!\n) {\n  account(input: $input) {\n    imageUrl\n    id\n  }\n}\n"
                    }
                }
            }();
            a.hash = "e9efa8b36e5861abcde9971f1426320e", n.default = a
        },
        jxQ4: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return x
            })), t.d(n, "a", (function() {
                return k
            }));
            var a, i, r = t("qd51"),
                l = t("/dBk"),
                c = t.n(l),
                o = (t("wcNg"), t("mXGw")),
                s = t("aXrf"),
                u = t("UutA"),
                d = t("67yl"),
                g = t("azPg"),
                m = t("g8rX"),
                b = t("h64z"),
                p = t("Nbt0"),
                j = t("Ujrs"),
                h = t("u6YR"),
                f = t("mEYO"),
                O = t("m5he"),
                y = t("uMSw"),
                v = t("oYCi"),
                x = void 0 !== a ? a : a = t("yVLq"),
                k = function(e) {
                    var n = e.className,
                        a = e.editable,
                        l = e.isDynamic,
                        u = e.size,
                        k = e.loaderSize,
                        F = e.dataKey,
                        P = Object(o.useState)("standby"),
                        I = P[0],
                        A = P[1],
                        K = Object(p.a)().attempt,
                        C = Object(b.a)().mutate,
                        L = Object(s.useFragment)(x, F).imageUrl,
                        S = function() {
                            var e = Object(r.a)(c.a.mark((function e(n) {
                                return c.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return A("wait"), e.next = 3, K(Object(r.a)(c.a.mark((function e() {
                                                return c.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, C(void 0 !== i ? i : i = t("bKUJ"), {
                                                                input: {
                                                                    profileImage: null === n || void 0 === n ? void 0 : n.file
                                                                }
                                                            }, {
                                                                shouldAuthenticate: !0
                                                            });
                                                        case 2:
                                                            Object(j.b)(), A("done");
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        U = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.onClick;
                            return Object(v.jsx)(y.b, {
                                alt: "User Profile Image",
                                className: "ProfileImage--image",
                                size: u,
                                sizing: "cover",
                                url: L,
                                variant: "round",
                                onClick: n
                            })
                        };
                    return Object(v.jsx)(w, {
                        className: Object(h.a)("ProfileImage", {
                            editable: a
                        }, n),
                        children: l ? Object(v.jsxs)(v.Fragment, {
                            children: [a && Object(v.jsx)(f.a, {
                                "aria-label": "Select a profile image",
                                overlay: Object(v.jsx)(d.a, {
                                    height: "100%",
                                    justifyContent: "center",
                                    children: Object(v.jsx)(O.a, {
                                        color: "white",
                                        value: "edit"
                                    })
                                }),
                                shape: "round",
                                variant: "overlay",
                                zIndex: 2,
                                onChange: S
                            }), "wait" === I ? Object(v.jsx)("div", {
                                className: "ProfileImage--loader",
                                children: Object(v.jsx)(m.a, {
                                    size: k
                                })
                            }) : Object(v.jsx)(g.a, {
                                trigger: function(e) {
                                    return U({
                                        onClick: e
                                    })
                                },
                                children: Object(v.jsx)(y.b, {
                                    alt: "User Profile Image",
                                    className: "ProfileImage--image",
                                    size: u,
                                    sizing: "cover",
                                    url: L,
                                    variant: "round"
                                })
                            })]
                        }) : U()
                    })
                },
                w = u.d.div.withConfig({
                    componentId: "sc-yrcith-0"
                })(["position:relative;.ProfileImage--loader{height:100%;width:100%;display:flex;align-items:center;justify-content:center;}.ProfileImage--image{cursor:pointer;}"])
        },
        qT35: function(e, n, t) {
            "use strict";
            t.r(n);
            var a = function() {
                var e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    n = {
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
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "AccountLink_data",
                    selections: [e, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "config",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCompromised",
                        storageKey: null
                    }, n, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "displayName",
                        storageKey: null
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "ProfileImage_data"
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "wallet_accountKey",
                        selections: [e]
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "accounts_url",
                        selections: [e, n]
                    }],
                    type: "AccountType",
                    abstractKey: null
                }
            }();
            a.hash = "34eb3e12ba8b373ed6b27e35acb85532", n.default = a
        },
        yVLq: function(e, n, t) {
            "use strict";
            t.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ProfileImage_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "imageUrl",
                    storageKey: null
                }, {
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
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "displayName",
                    storageKey: null
                }],
                type: "AccountType",
                abstractKey: null,
                hash: "f8cd77b121935fbae0b574d844e5dda6"
            };
            n.default = a
        }
    }
]);
//# sourceMappingURL=614ea5b6dd14c5d051044a8021a9477f60e859ba.4f9ba3536e2e5ea466d3.js.map