(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [4], {
        AhPY: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                a = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && a(t, e, r);
                    return s(t, e), t
                },
                i = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(a, s) {
                        function o(e) {
                            try {
                                c(n.next(e))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function i(e) {
                            try {
                                c(n.throw(e))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(o, i)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                },
                c = this && this.__generator || function(e, t) {
                    var r, n, a, s, o = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                        return this
                    }), s;

                    function i(s) {
                        return function(i) {
                            return function(s) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                                    switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                        case 0:
                                        case 1:
                                            a = s;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: s[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, n = s[1], s = [0];
                                            continue;
                                        case 7:
                                            s = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                                o.label = s[1];
                                                break
                                            }
                                            if (6 === s[0] && o.label < a[1]) {
                                                o.label = a[1], a = s;
                                                break
                                            }
                                            if (a && o.label < a[2]) {
                                                o.label = a[2], o.ops.push(s);
                                                break
                                            }
                                            a[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    s = t.call(e, o)
                                } catch (i) {
                                    s = [6, i], n = 0
                                } finally {
                                    r = a = 0
                                }
                                if (5 & s[0]) throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0
                                }
                            }([s, i])
                        }
                    }
                },
                d = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length)
                        for (var n, a = 0, s = t.length; a < s; a++) !n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
                    return e.concat(n || Array.prototype.slice.call(t))
                },
                u = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OpenSeaPort = void 0;
            var l = r("2aPM"),
                h = r("xBLb"),
                m = r("q+H0"),
                p = o(r("9va6")),
                v = u(r("KzD1")),
                y = r("+URC"),
                f = o(r("AxDN")),
                A = r("WWJC"),
                g = r("AfLb"),
                w = r("xGtb"),
                _ = r("j9xR"),
                T = r("SgkN"),
                k = r("mLbz"),
                E = r("6m6Q"),
                P = function() {
                    function e(e, t, r) {
                        var a;
                        void 0 === t && (t = {}), this.gasPriceAddition = new l.BigNumber(3), this.gasIncreaseFactor = g.DEFAULT_GAS_INCREASE_FACTOR, t.networkName = t.networkName || T.Network.Main, this.api = new A.OpenSeaAPI(t), this._wyvernConfigOverride = t.wyvernConfig, this._networkName = t.networkName;
                        var s = new v.default.providers.HttpProvider("".concat(this.api.apiBaseUrl, "/").concat(g.RPC_URL_PATH)),
                            o = null === (a = t.useReadOnlyProvider) || void 0 === a || a;
                        this.web3 = new v.default(e), this.web3ReadOnly = o ? new v.default(s) : this.web3, this._wyvernProtocol = new y.WyvernProtocol(e, n({
                            network: this._networkName
                        }, t.wyvernConfig)), this._wyvernProtocolReadOnly = o ? new y.WyvernProtocol(s, n({
                            network: this._networkName
                        }, t.wyvernConfig)) : this._wyvernProtocol, this._wrappedNFTFactoryAddress = this._networkName == T.Network.Main ? g.WRAPPED_NFT_FACTORY_ADDRESS_MAINNET : g.WRAPPED_NFT_FACTORY_ADDRESS_RINKEBY, this._wrappedNFTLiquidationProxyAddress = this._networkName == T.Network.Main ? g.WRAPPED_NFT_LIQUIDATION_PROXY_ADDRESS_MAINNET : g.WRAPPED_NFT_LIQUIDATION_PROXY_ADDRESS_RINKEBY, this._uniswapFactoryAddress = this._networkName == T.Network.Main ? g.UNISWAP_FACTORY_ADDRESS_MAINNET : g.UNISWAP_FACTORY_ADDRESS_RINKEBY, this._emitter = new m.EventEmitter, this.logger = r || function(e) {
                            return e
                        }
                    }
                    return e.prototype.addListener = function(e, t, r) {
                        return void 0 === r && (r = !1), r ? this._emitter.once(e, t) : this._emitter.addListener(e, t)
                    }, e.prototype.removeListener = function(e) {
                        e.remove()
                    }, e.prototype.removeAllListeners = function(e) {
                        this._emitter.removeAllListeners(e)
                    }, e.prototype.wrapAssets = function(e) {
                        var t = e.assets,
                            r = e.accountAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, n, a, s, o, i, d = this;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return e = this._getSchema(T.WyvernSchemaName.ERC721), n = t.map((function(t) {
                                            return (0, E.getWyvernAsset)(e, t)
                                        })), a = n.map((function(e) {
                                            return e.id
                                        })), s = n.map((function(e) {
                                            return e.address
                                        })), o = !s.every((function(e, t, r) {
                                            return e === r[0]
                                        })), this._dispatch(T.EventType.WrapAssets, {
                                            assets: n,
                                            accountAddress: r
                                        }), [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: r,
                                            to: this._wrappedNFTLiquidationProxyAddress,
                                            value: 0,
                                            data: (0, k.encodeCall)((0, w.getMethod)(w.WrappedNFTLiquidationProxy, "wrapNFTs"), [a, s, o])
                                        }, (function(e) {
                                            d._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: r
                                            })
                                        }))];
                                    case 1:
                                        return i = c.sent(), [4, this._confirmTransaction(i, T.EventType.WrapAssets, "Wrapping Assets")];
                                    case 2:
                                        return c.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.unwrapAssets = function(e) {
                        var t = e.assets,
                            r = e.destinationAddresses,
                            n = e.accountAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, a, s, o, i, d, u = this;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (!t || !r || t.length != r.length) throw new Error("The 'assets' and 'destinationAddresses' arrays must exist and have the same length.");
                                        return e = this._getSchema(T.WyvernSchemaName.ERC721), a = t.map((function(t) {
                                            return (0, E.getWyvernAsset)(e, t)
                                        })), s = a.map((function(e) {
                                            return e.id
                                        })), o = a.map((function(e) {
                                            return e.address
                                        })), i = !o.every((function(e, t, r) {
                                            return e === r[0]
                                        })), this._dispatch(T.EventType.UnwrapAssets, {
                                            assets: a,
                                            accountAddress: n
                                        }), [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: n,
                                            to: this._wrappedNFTLiquidationProxyAddress,
                                            value: 0,
                                            data: (0, k.encodeCall)((0, w.getMethod)(w.WrappedNFTLiquidationProxy, "unwrapNFTs"), [s, o, r, i])
                                        }, (function(e) {
                                            u._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: n
                                            })
                                        }))];
                                    case 1:
                                        return d = c.sent(), [4, this._confirmTransaction(d, T.EventType.UnwrapAssets, "Unwrapping Assets")];
                                    case 2:
                                        return c.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.liquidateAssets = function(e) {
                        var t = e.assets,
                            r = e.accountAddress,
                            n = e.uniswapSlippageAllowedInBasisPoints;
                        return i(this, void 0, void 0, (function() {
                            var e, a, s, o, i, d, u, l = this;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return e = 0 === n ? g.DEFAULT_WRAPPED_NFT_LIQUIDATION_UNISWAP_SLIPPAGE_IN_BASIS_POINTS : n, a = this._getSchema(T.WyvernSchemaName.ERC721), s = t.map((function(e) {
                                            return (0, E.getWyvernAsset)(a, e)
                                        })), o = s.map((function(e) {
                                            return e.id
                                        })), i = s.map((function(e) {
                                            return e.address
                                        })), d = !i.every((function(e, t, r) {
                                            return e === r[0]
                                        })), this._dispatch(T.EventType.LiquidateAssets, {
                                            assets: s,
                                            accountAddress: r
                                        }), [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: r,
                                            to: this._wrappedNFTLiquidationProxyAddress,
                                            value: 0,
                                            data: (0, k.encodeCall)((0, w.getMethod)(w.WrappedNFTLiquidationProxy, "liquidateNFTs"), [o, i, d, e])
                                        }, (function(e) {
                                            l._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: r
                                            })
                                        }))];
                                    case 1:
                                        return u = c.sent(), [4, this._confirmTransaction(u, T.EventType.LiquidateAssets, "Liquidating Assets")];
                                    case 2:
                                        return c.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.purchaseAssets = function(e) {
                        var t = e.numTokensToBuy,
                            r = e.amount,
                            n = e.contractAddress,
                            a = e.accountAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, s = this;
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this._dispatch(T.EventType.PurchaseAssets, {
                                            amount: r,
                                            contractAddress: n,
                                            accountAddress: a
                                        }), [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: a,
                                            to: this._wrappedNFTLiquidationProxyAddress,
                                            value: r,
                                            data: (0, k.encodeCall)((0, w.getMethod)(w.WrappedNFTLiquidationProxy, "purchaseNFTs"), [t, n])
                                        }, (function(e) {
                                            s._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: a
                                            })
                                        }))];
                                    case 1:
                                        return e = o.sent(), [4, this._confirmTransaction(e, T.EventType.PurchaseAssets, "Purchasing Assets")];
                                    case 2:
                                        return o.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.getQuoteFromUniswap = function(e) {
                        var t = e.numTokens,
                            r = e.isBuying,
                            n = e.contractAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, a, s, o, i, d, u;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, new this.web3.eth.Contract(w.WrappedNFTFactory, this._wrappedNFTFactoryAddress).methods.nftContractToWrapperContract(n).call()];
                                    case 1:
                                        return e = c.sent(), a = new this.web3.eth.Contract(w.WrappedNFT, e), [4, new this.web3.eth.Contract(w.UniswapFactory, this._uniswapFactoryAddress).methods.getExchange(e).call()];
                                    case 2:
                                        return s = c.sent(), o = new this.web3.eth.Contract(w.UniswapExchange, s), i = y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(t), Number(a.methods.decimals().call())), r ? (d = parseInt, [4, o.methods.getEthToTokenOutputPrice(i.toString()).call()]) : [3, 4];
                                    case 3:
                                        return [2, d.apply(void 0, [c.sent()])];
                                    case 4:
                                        return u = parseInt, [4, o.methods.getTokenToEthInputPrice(i.toString()).call()];
                                    case 5:
                                        return [2, u.apply(void 0, [c.sent()])]
                                }
                            }))
                        }))
                    }, e.prototype.wrapEth = function(e) {
                        var t = e.amountInEth,
                            r = e.accountAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, n, a, s = this;
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return e = f.tokens[this._networkName].canonicalWrappedEther, n = y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(t), e.decimals), this._dispatch(T.EventType.WrapEth, {
                                            accountAddress: r,
                                            amount: n
                                        }), [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: r,
                                            to: e.address,
                                            value: n,
                                            data: (0, k.encodeCall)((0, w.getMethod)(w.CanonicalWETH, "deposit"), [])
                                        }, (function(e) {
                                            s._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: r
                                            })
                                        }))];
                                    case 1:
                                        return a = o.sent(), [4, this._confirmTransaction(a, T.EventType.WrapEth, "Wrapping ETH")];
                                    case 2:
                                        return o.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.unwrapWeth = function(e) {
                        var t = e.amountInEth,
                            r = e.accountAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, n, a, s = this;
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return e = f.tokens[this._networkName].canonicalWrappedEther, n = y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(t), e.decimals), this._dispatch(T.EventType.UnwrapWeth, {
                                            accountAddress: r,
                                            amount: n
                                        }), [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: r,
                                            to: e.address,
                                            value: 0,
                                            data: (0, k.encodeCall)((0, w.getMethod)(w.CanonicalWETH, "withdraw"), [n.toString()])
                                        }, (function(e) {
                                            s._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: r
                                            })
                                        }))];
                                    case 1:
                                        return a = o.sent(), [4, this._confirmTransaction(a, T.EventType.UnwrapWeth, "Unwrapping W-ETH")];
                                    case 2:
                                        return o.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.createBundleBuyOrder = function(e) {
                        var t = e.assets,
                            r = e.collection,
                            a = e.quantities,
                            s = e.accountAddress,
                            o = e.startAmount,
                            d = e.expirationTime,
                            u = void 0 === d ? (0, E.getMaxOrderExpirationTimestamp)() : d,
                            l = e.paymentTokenAddress,
                            h = e.sellOrder,
                            m = e.referrerAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, i, d, p, v;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (a = a || t.map((function(e) {
                                                return 1
                                            })), !(l = l || f.tokens[this._networkName].canonicalWrappedEther.address)) throw new Error("Payment token required");
                                        return [4, this._makeBundleBuyOrder({
                                            assets: t,
                                            collection: r,
                                            quantities: a,
                                            accountAddress: s,
                                            startAmount: o,
                                            expirationTime: u,
                                            paymentTokenAddress: l,
                                            extraBountyBasisPoints: 0,
                                            sellOrder: h,
                                            referrerAddress: m
                                        })];
                                    case 1:
                                        return e = c.sent(), [4, this._buyOrderValidationAndApprovals({
                                            order: e,
                                            accountAddress: s
                                        })];
                                    case 2:
                                        c.sent(), i = n(n({}, e), {
                                            hash: (0, E.getOrderHash)(e)
                                        }), c.label = 3;
                                    case 3:
                                        return c.trys.push([3, 5, , 6]), [4, this.authorizeOrder(i)];
                                    case 4:
                                        return d = c.sent(), [3, 6];
                                    case 5:
                                        throw p = c.sent(), console.error(p), new Error("You declined to authorize your offer");
                                    case 6:
                                        return v = n(n({}, i), d), [2, this.validateAndPostOrder(v)]
                                }
                            }))
                        }))
                    }, e.prototype.createBuyOrder = function(e) {
                        var t = e.asset,
                            r = e.accountAddress,
                            a = e.startAmount,
                            s = e.quantity,
                            o = void 0 === s ? 1 : s,
                            d = e.expirationTime,
                            u = void 0 === d ? (0, E.getMaxOrderExpirationTimestamp)() : d,
                            l = e.paymentTokenAddress,
                            h = e.sellOrder,
                            m = e.referrerAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, s, i, d, p;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (!(l = l || f.tokens[this._networkName].canonicalWrappedEther.address)) throw new Error("Payment token required");
                                        return [4, this._makeBuyOrder({
                                            asset: t,
                                            quantity: o,
                                            accountAddress: r,
                                            startAmount: a,
                                            expirationTime: u,
                                            paymentTokenAddress: l,
                                            extraBountyBasisPoints: 0,
                                            sellOrder: h,
                                            referrerAddress: m
                                        })];
                                    case 1:
                                        return e = c.sent(), [4, this._buyOrderValidationAndApprovals({
                                            order: e,
                                            accountAddress: r
                                        })];
                                    case 2:
                                        c.sent(), s = n(n({}, e), {
                                            hash: (0, E.getOrderHash)(e)
                                        }), c.label = 3;
                                    case 3:
                                        return c.trys.push([3, 5, , 6]), [4, this.authorizeOrder(s)];
                                    case 4:
                                        return i = c.sent(), [3, 6];
                                    case 5:
                                        throw d = c.sent(), console.error(d), new Error("You declined to authorize your offer");
                                    case 6:
                                        return p = n(n({}, s), i), [2, this.validateAndPostOrder(p)]
                                }
                            }))
                        }))
                    }, e.prototype.createSellOrder = function(e) {
                        var t = e.asset,
                            r = e.accountAddress,
                            a = e.startAmount,
                            s = e.endAmount,
                            o = e.quantity,
                            d = void 0 === o ? 1 : o,
                            u = e.listingTime,
                            l = e.expirationTime,
                            h = void 0 === l ? (0, E.getMaxOrderExpirationTimestamp)() : l,
                            m = e.waitForHighestBid,
                            p = void 0 !== m && m,
                            v = e.englishAuctionReservePrice,
                            y = e.paymentTokenAddress,
                            f = e.extraBountyBasisPoints,
                            A = void 0 === f ? 0 : f,
                            w = e.buyerAddress,
                            _ = e.buyerEmail;
                        return i(this, void 0, void 0, (function() {
                            var e, o, i, l, m;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, this._makeSellOrder({
                                            asset: t,
                                            quantity: d,
                                            accountAddress: r,
                                            startAmount: a,
                                            endAmount: s,
                                            listingTime: u,
                                            expirationTime: h,
                                            waitForHighestBid: p,
                                            englishAuctionReservePrice: v,
                                            paymentTokenAddress: y || g.NULL_ADDRESS,
                                            extraBountyBasisPoints: A,
                                            buyerAddress: w || g.NULL_ADDRESS
                                        })];
                                    case 1:
                                        return e = c.sent(), [4, this._sellOrderValidationAndApprovals({
                                            order: e,
                                            accountAddress: r
                                        })];
                                    case 2:
                                        return c.sent(), _ ? [4, this._createEmailWhitelistEntry({
                                            order: e,
                                            buyerEmail: _
                                        })] : [3, 4];
                                    case 3:
                                        c.sent(), c.label = 4;
                                    case 4:
                                        o = n(n({}, e), {
                                            hash: (0, E.getOrderHash)(e)
                                        }), c.label = 5;
                                    case 5:
                                        return c.trys.push([5, 7, , 8]), [4, this.authorizeOrder(o)];
                                    case 6:
                                        return i = c.sent(), [3, 8];
                                    case 7:
                                        throw l = c.sent(), console.error(l), new Error("You declined to authorize your auction");
                                    case 8:
                                        return m = n(n({}, o), i), [2, this.validateAndPostOrder(m)]
                                }
                            }))
                        }))
                    }, e.prototype.createFactorySellOrders = function(e) {
                        var t = e.assets,
                            r = e.accountAddress,
                            a = e.startAmount,
                            s = e.endAmount,
                            o = e.quantity,
                            d = void 0 === o ? 1 : o,
                            u = e.listingTime,
                            l = e.expirationTime,
                            h = void 0 === l ? (0, E.getMaxOrderExpirationTimestamp)() : l,
                            m = e.waitForHighestBid,
                            v = void 0 !== m && m,
                            y = e.paymentTokenAddress,
                            f = e.extraBountyBasisPoints,
                            A = void 0 === f ? 0 : f,
                            w = e.buyerAddress,
                            _ = e.buyerEmail,
                            T = e.numberOfOrders,
                            k = void 0 === T ? 1 : T;
                        return i(this, void 0, void 0, (function() {
                            var e, o, l, m, f, T, P, b, S, N = this;
                            return c(this, (function(x) {
                                switch (x.label) {
                                    case 0:
                                        if (k < 1) throw new Error("Need to make at least one sell order");
                                        if (!t || !t.length) throw new Error("Need at least one asset to create orders for");
                                        if (1 !== p.uniqBy(t, (function(e) {
                                                return e.tokenAddress
                                            })).length) throw new Error("All assets must be on the same factory contract address");
                                        return [4, this._makeSellOrder({
                                            asset: t[0],
                                            quantity: d,
                                            accountAddress: r,
                                            startAmount: a,
                                            endAmount: s,
                                            listingTime: u,
                                            expirationTime: h,
                                            waitForHighestBid: v,
                                            paymentTokenAddress: y || g.NULL_ADDRESS,
                                            extraBountyBasisPoints: A,
                                            buyerAddress: w || g.NULL_ADDRESS
                                        })];
                                    case 1:
                                        return e = x.sent(), [4, this._sellOrderValidationAndApprovals({
                                            order: e,
                                            accountAddress: r
                                        })];
                                    case 2:
                                        x.sent(), o = function(e) {
                                            return i(N, void 0, void 0, (function() {
                                                var t, o, i, l, m;
                                                return c(this, (function(c) {
                                                    switch (c.label) {
                                                        case 0:
                                                            return [4, this._makeSellOrder({
                                                                asset: e,
                                                                quantity: d,
                                                                accountAddress: r,
                                                                startAmount: a,
                                                                endAmount: s,
                                                                listingTime: u,
                                                                expirationTime: h,
                                                                waitForHighestBid: v,
                                                                paymentTokenAddress: y || g.NULL_ADDRESS,
                                                                extraBountyBasisPoints: A,
                                                                buyerAddress: w || g.NULL_ADDRESS
                                                            })];
                                                        case 1:
                                                            return t = c.sent(), _ ? [4, this._createEmailWhitelistEntry({
                                                                order: t,
                                                                buyerEmail: _
                                                            })] : [3, 3];
                                                        case 2:
                                                            c.sent(), c.label = 3;
                                                        case 3:
                                                            o = n(n({}, t), {
                                                                hash: (0, E.getOrderHash)(t)
                                                            }), c.label = 4;
                                                        case 4:
                                                            return c.trys.push([4, 6, , 7]), [4, this.authorizeOrder(o)];
                                                        case 5:
                                                            return i = c.sent(), [3, 7];
                                                        case 6:
                                                            throw l = c.sent(), console.error(l), new Error("You declined to authorize your auction, or your web3 provider can't sign using personal_sign. Try 'web3-provider-engine' and make sure a mnemonic is set. Just a reminder: there's no gas needed anymore to mint tokens!");
                                                        case 7:
                                                            return m = n(n({}, o), i), [2, this.validateAndPostOrder(m)]
                                                    }
                                                }))
                                            }))
                                        }, l = p.range(k * t.length), m = p.chunk(l, g.SELL_ORDER_BATCH_SIZE), f = 0, T = 0, P = m, x.label = 3;
                                    case 3:
                                        return T < P.length ? (b = P[T], [4, Promise.all(b.map((function(e) {
                                            return i(N, void 0, void 0, (function() {
                                                var r;
                                                return c(this, (function(n) {
                                                    return r = Math.floor(e / k), [2, o(t[r])]
                                                }))
                                            }))
                                        })))]) : [3, 7];
                                    case 4:
                                        return S = x.sent(), this.logger("Created and posted a batch of ".concat(S.length, " orders in parallel.")), f += S.length, [4, (0, E.delay)(500)];
                                    case 5:
                                        x.sent(), x.label = 6;
                                    case 6:
                                        return T++, [3, 3];
                                    case 7:
                                        return [2, f]
                                }
                            }))
                        }))
                    }, e.prototype.createBundleSellOrder = function(e) {
                        var t = e.bundleName,
                            r = e.bundleDescription,
                            a = e.bundleExternalLink,
                            s = e.assets,
                            o = e.collection,
                            d = e.quantities,
                            u = e.accountAddress,
                            l = e.startAmount,
                            h = e.endAmount,
                            m = e.expirationTime,
                            p = void 0 === m ? (0, E.getMaxOrderExpirationTimestamp)() : m,
                            v = e.listingTime,
                            y = e.waitForHighestBid,
                            f = void 0 !== y && y,
                            A = e.englishAuctionReservePrice,
                            w = e.paymentTokenAddress,
                            _ = e.extraBountyBasisPoints,
                            T = void 0 === _ ? 0 : _,
                            k = e.buyerAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, i, m, y, _;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return d = d || s.map((function(e) {
                                            return 1
                                        })), [4, this._makeBundleSellOrder({
                                            bundleName: t,
                                            bundleDescription: r,
                                            bundleExternalLink: a,
                                            assets: s,
                                            collection: o,
                                            quantities: d,
                                            accountAddress: u,
                                            startAmount: l,
                                            endAmount: h,
                                            listingTime: v,
                                            expirationTime: p,
                                            waitForHighestBid: f,
                                            englishAuctionReservePrice: A,
                                            paymentTokenAddress: w || g.NULL_ADDRESS,
                                            extraBountyBasisPoints: T,
                                            buyerAddress: k || g.NULL_ADDRESS
                                        })];
                                    case 1:
                                        return e = c.sent(), [4, this._sellOrderValidationAndApprovals({
                                            order: e,
                                            accountAddress: u
                                        })];
                                    case 2:
                                        c.sent(), i = n(n({}, e), {
                                            hash: (0, E.getOrderHash)(e)
                                        }), c.label = 3;
                                    case 3:
                                        return c.trys.push([3, 5, , 6]), [4, this.authorizeOrder(i)];
                                    case 4:
                                        return m = c.sent(), [3, 6];
                                    case 5:
                                        throw y = c.sent(), console.error(y), new Error("You declined to authorize your auction");
                                    case 6:
                                        return _ = n(n({}, i), m), [2, this.validateAndPostOrder(_)]
                                }
                            }))
                        }))
                    }, e.prototype.fulfillOrder = function(e) {
                        var t = e.order,
                            r = e.accountAddress,
                            n = e.recipientAddress,
                            a = e.referrerAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, s, o, d, u, l, h = this;
                            return c(this, (function(m) {
                                switch (m.label) {
                                    case 0:
                                        return e = this._makeMatchingOrder({
                                            order: t,
                                            accountAddress: r,
                                            recipientAddress: n || r
                                        }), s = (0, E.assignOrdersToSides)(t, e), o = s.buy, d = s.sell, u = this._getMetadata(t, a), [4, this._atomicMatch({
                                            buy: o,
                                            sell: d,
                                            accountAddress: r,
                                            metadata: u
                                        })];
                                    case 1:
                                        return l = m.sent(), [4, this._confirmTransaction(l, T.EventType.MatchOrders, "Fulfilling order", (function() {
                                            return i(h, void 0, void 0, (function() {
                                                return c(this, (function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, this._validateOrder(t)];
                                                        case 1:
                                                            return [2, !e.sent()]
                                                    }
                                                }))
                                            }))
                                        }))];
                                    case 2:
                                        return m.sent(), [2, l]
                                }
                            }))
                        }))
                    }, e.prototype.cancelOrder = function(e) {
                        var t = e.order,
                            r = e.accountAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, n = this;
                            return c(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this._dispatch(T.EventType.CancelOrder, {
                                            order: t,
                                            accountAddress: r
                                        }), [4, this._wyvernProtocol.wyvernExchange.cancelOrder_([t.exchange, t.maker, t.taker, t.feeRecipient, t.target, t.staticTarget, t.paymentToken], [t.makerRelayerFee, t.takerRelayerFee, t.makerProtocolFee, t.takerProtocolFee, t.basePrice, t.extra, t.listingTime, t.expirationTime, t.salt], t.feeMethod, t.side, t.saleKind, t.howToCall, t.calldata, t.replacementPattern, t.staticExtradata, t.v || 0, t.r || g.NULL_BLOCK_HASH, t.s || g.NULL_BLOCK_HASH).sendTransactionAsync({
                                            from: r
                                        })];
                                    case 1:
                                        return e = a.sent(), [4, this._confirmTransaction(e, T.EventType.CancelOrder, "Cancelling order", (function() {
                                            return i(n, void 0, void 0, (function() {
                                                return c(this, (function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, this._validateOrder(t)];
                                                        case 1:
                                                            return [2, !e.sent()]
                                                    }
                                                }))
                                            }))
                                        }))];
                                    case 2:
                                        return a.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.bulkCancelExistingOrders = function(e) {
                        var t = e.accountAddress;
                        return i(this, void 0, void 0, (function() {
                            var e;
                            return c(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this._dispatch(T.EventType.BulkCancelExistingOrders, {
                                            accountAddress: t
                                        }), [4, this._wyvernProtocol.wyvernExchange.incrementNonce().sendTransactionAsync({
                                            from: t
                                        })];
                                    case 1:
                                        return e = r.sent(), [4, this._confirmTransaction(e.toString(), T.EventType.BulkCancelExistingOrders, "Bulk cancelling existing orders")];
                                    case 2:
                                        return r.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.approveSemiOrNonFungibleToken = function(e) {
                        var t = e.tokenId,
                            r = e.tokenAddress,
                            n = e.accountAddress,
                            a = e.proxyAddress,
                            s = e.tokenAbi,
                            o = void 0 === s ? w.ERC721 : s,
                            d = e.skipApproveAllIfTokenAddressIn,
                            u = void 0 === d ? new Set : d,
                            l = e.schemaName,
                            h = void 0 === l ? T.WyvernSchemaName.ERC721 : l;
                        return i(this, void 0, void 0, (function() {
                            var e, s, d, l, m, p, v, y, f = this;
                            return c(this, (function(A) {
                                switch (A.label) {
                                    case 0:
                                        return e = this._getSchema(h), s = new this.web3.eth.Contract(o, r), a ? [3, 2] : [4, this._getProxy(n)];
                                    case 1:
                                        if (!(a = A.sent() || void 0)) throw new Error("Uninitialized account");
                                        A.label = 2;
                                    case 2:
                                        return [4, (d = function() {
                                            return i(f, void 0, void 0, (function() {
                                                var e;
                                                return c(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, (0, E.rawCall)(this.web3ReadOnly, {
                                                                from: n,
                                                                to: s.options.address,
                                                                data: s.methods.isApprovedForAll(n, a).encodeABI()
                                                            })];
                                                        case 1:
                                                            return e = t.sent(), [2, parseInt(e)]
                                                    }
                                                }))
                                            }))
                                        })()];
                                    case 3:
                                        if (1 == (l = A.sent())) return this.logger("Already approved proxy for all tokens"), [2, null];
                                        if (0 != l) return [3, 8];
                                        if (u.has(r)) return this.logger("Already approving proxy for all tokens in another transaction"), [2, null];
                                        u.add(r), A.label = 4;
                                    case 4:
                                        return A.trys.push([4, 7, , 8]), this._dispatch(T.EventType.ApproveAllAssets, {
                                            accountAddress: n,
                                            proxyAddress: a,
                                            contractAddress: r
                                        }), [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: n,
                                            to: s.options.address,
                                            data: s.methods.setApprovalForAll(a, !0).encodeABI()
                                        }, (function(e) {
                                            f._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: n
                                            })
                                        }))];
                                    case 5:
                                        return v = A.sent(), [4, this._confirmTransaction(v, T.EventType.ApproveAllAssets, "Approving all tokens of this type for trading", (function() {
                                            return i(f, void 0, void 0, (function() {
                                                return c(this, (function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, d()];
                                                        case 1:
                                                            return [2, 1 == e.sent()]
                                                    }
                                                }))
                                            }))
                                        }))];
                                    case 6:
                                        return A.sent(), [2, v];
                                    case 7:
                                        throw m = A.sent(), console.error(m), new Error("Couldn't get permission to approve these tokens for trading. Their contract might not be implemented correctly. Please contact the developer!");
                                    case 8:
                                        return this.logger("Contract does not support Approve All"), [4, (p = function() {
                                            return i(f, void 0, void 0, (function() {
                                                var e, r;
                                                return c(this, (function(o) {
                                                    switch (o.label) {
                                                        case 0:
                                                            return o.trys.push([0, 2, , 3]), [4, s.methods.getApproved(t).call()];
                                                        case 1:
                                                            return "string" === typeof(e = o.sent()) && "0x" == e && (e = void 0), [3, 3];
                                                        case 2:
                                                            return r = o.sent(), console.error(r), [3, 3];
                                                        case 3:
                                                            return e == a ? (this.logger("Already approved proxy for this token"), [2, !0]) : (this.logger("Approve response: ".concat(e)), e ? [3, 5] : [4, (0, E.getNonCompliantApprovalAddress)(s, t, n)]);
                                                        case 4:
                                                            if ((e = o.sent()) == a) return this.logger("Already approved proxy for this item"), [2, !0];
                                                            this.logger("Special-case approve response: ".concat(e)), o.label = 5;
                                                        case 5:
                                                            return [2, !1]
                                                    }
                                                }))
                                            }))
                                        })()];
                                    case 9:
                                        if (A.sent()) return [2, null];
                                        A.label = 10;
                                    case 10:
                                        return A.trys.push([10, 13, , 14]), this._dispatch(T.EventType.ApproveAsset, {
                                            accountAddress: n,
                                            proxyAddress: a,
                                            asset: (0, E.getWyvernAsset)(e, {
                                                tokenId: t,
                                                tokenAddress: r
                                            })
                                        }), [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: n,
                                            to: s.options.address,
                                            data: s.methods.approve(a, t).encodeABI()
                                        }, (function(e) {
                                            f._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: n
                                            })
                                        }))];
                                    case 11:
                                        return v = A.sent(), [4, this._confirmTransaction(v, T.EventType.ApproveAsset, "Approving single token for trading", p)];
                                    case 12:
                                        return A.sent(), [2, v];
                                    case 13:
                                        throw y = A.sent(), console.error(y), new Error("Couldn't get permission to approve this token for trading. Its contract might not be implemented correctly. Please contact the developer!");
                                    case 14:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.approveFungibleToken = function(e) {
                        var t, r = e.accountAddress,
                            n = e.tokenAddress,
                            a = e.proxyAddress,
                            s = e.minimumAmount,
                            o = void 0 === s ? y.WyvernProtocol.MAX_UINT_256 : s;
                        return i(this, void 0, void 0, (function() {
                            var e, s, d, u = this;
                            return c(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return a = a || (null === (t = this._wyvernConfigOverride) || void 0 === t ? void 0 : t.wyvernTokenTransferProxyContractAddress) || y.WyvernProtocol.getTokenTransferProxyAddress(this._networkName), [4, this._getApprovedTokenCount({
                                            accountAddress: r,
                                            tokenAddress: n,
                                            proxyAddress: a
                                        })];
                                    case 1:
                                        return (e = l.sent()).isGreaterThanOrEqualTo(o) ? (this.logger("Already approved enough currency for trading"), [2, null]) : (this.logger("Not enough token approved for trade: ".concat(e, " approved to transfer ").concat(n)), this._dispatch(T.EventType.ApproveCurrency, {
                                            accountAddress: r,
                                            contractAddress: n,
                                            proxyAddress: a
                                        }), s = [g.ENJIN_COIN_ADDRESS, g.MANA_ADDRESS].includes(n.toLowerCase()), o.isGreaterThan(0) && s ? [4, this.unapproveFungibleToken({
                                            accountAddress: r,
                                            tokenAddress: n,
                                            proxyAddress: a
                                        })] : [3, 3]);
                                    case 2:
                                        l.sent(), l.label = 3;
                                    case 3:
                                        return [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: r,
                                            to: n,
                                            data: (0, k.encodeCall)((0, w.getMethod)(w.ERC20, "approve"), [a, y.WyvernProtocol.MAX_UINT_256.toString()])
                                        }, (function(e) {
                                            u._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: r
                                            })
                                        }))];
                                    case 4:
                                        return d = l.sent(), [4, this._confirmTransaction(d, T.EventType.ApproveCurrency, "Approving currency for trading", (function() {
                                            return i(u, void 0, void 0, (function() {
                                                return c(this, (function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, this._getApprovedTokenCount({
                                                                accountAddress: r,
                                                                tokenAddress: n,
                                                                proxyAddress: a
                                                            })];
                                                        case 1:
                                                            return [2, e.sent().isGreaterThanOrEqualTo(o)]
                                                    }
                                                }))
                                            }))
                                        }))];
                                    case 5:
                                        return l.sent(), [2, d]
                                }
                            }))
                        }))
                    }, e.prototype.unapproveFungibleToken = function(e) {
                        var t, r = e.accountAddress,
                            n = e.tokenAddress,
                            a = e.proxyAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, s = this;
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return a = a || (null === (t = this._wyvernConfigOverride) || void 0 === t ? void 0 : t.wyvernTokenTransferProxyContractAddress) || y.WyvernProtocol.getTokenTransferProxyAddress(this._networkName), [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: r,
                                            to: n,
                                            data: (0, k.encodeCall)((0, w.getMethod)(w.ERC20, "approve"), [a, 0])
                                        }, (function(e) {
                                            s._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: r
                                            })
                                        }))];
                                    case 1:
                                        return e = o.sent(), [4, this._confirmTransaction(e, T.EventType.UnapproveCurrency, "Resetting Currency Approval", (function() {
                                            return i(s, void 0, void 0, (function() {
                                                return c(this, (function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, this._getApprovedTokenCount({
                                                                accountAddress: r,
                                                                tokenAddress: n,
                                                                proxyAddress: a
                                                            })];
                                                        case 1:
                                                            return [2, e.sent().isZero()]
                                                    }
                                                }))
                                            }))
                                        }))];
                                    case 2:
                                        return o.sent(), [2, e]
                                }
                            }))
                        }))
                    }, e.prototype.getCurrentPrice = function(e) {
                        return i(this, void 0, void 0, (function() {
                            return c(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this._wyvernProtocolReadOnly.wyvernExchange.calculateCurrentPrice_([e.exchange, e.maker, e.taker, e.feeRecipient, e.target, e.staticTarget, e.paymentToken], [e.makerRelayerFee, e.takerRelayerFee, e.makerProtocolFee, e.takerProtocolFee, e.basePrice, e.extra, e.listingTime, e.expirationTime, e.salt], e.feeMethod, e.side, e.saleKind, e.howToCall, e.calldata, e.replacementPattern, e.staticExtradata).callAsync()];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.isOrderFulfillable = function(e) {
                        var t = e.order,
                            r = e.accountAddress,
                            n = e.recipientAddress,
                            a = e.referrerAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, s, o, i, d, u;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return e = this._makeMatchingOrder({
                                            order: t,
                                            accountAddress: r,
                                            recipientAddress: n || r
                                        }), s = (0, E.assignOrdersToSides)(t, e), o = s.buy, i = s.sell, d = this._getMetadata(t, a), [4, this._estimateGasForMatch({
                                            buy: o,
                                            sell: i,
                                            accountAddress: r,
                                            metadata: d
                                        })];
                                    case 1:
                                        return u = c.sent(), this.logger("Gas estimate for ".concat(t.side == T.OrderSide.Sell ? "sell" : "buy", " order: ").concat(u)), [2, null != u && u > 0]
                                }
                            }))
                        }))
                    }, e.prototype.isAssetTransferrable = function(e, t) {
                        var r = e.asset,
                            n = e.fromAddress,
                            a = e.toAddress,
                            s = e.quantity,
                            o = e.useProxy,
                            d = void 0 !== o && o;
                        return void 0 === t && (t = 1), i(this, void 0, void 0, (function() {
                            var e, o, i, u, l, h, m, p;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return e = this._getSchema(this._getSchemaName(r)), o = s ? y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(s), r.decimals || 0) : (0, E.makeBigNumber)(1), i = (0, E.getWyvernAsset)(e, r, o), u = e.functions.transfer(i), l = n, d ? [4, this._getProxy(n)] : [3, 2];
                                    case 1:
                                        if (!(h = c.sent())) return console.error("This asset's owner (".concat(n, ") does not have a proxy!")), [2, !1];
                                        l = h, c.label = 2;
                                    case 2:
                                        m = (0, k.encodeTransferCall)(u, n, a), c.label = 3;
                                    case 3:
                                        return c.trys.push([3, 5, , 8]), [4, (0, E.estimateGas)(this._getClientsForRead({
                                            retries: t
                                        }).web3, {
                                            from: l,
                                            to: u.target,
                                            data: m
                                        })];
                                    case 4:
                                        return [2, c.sent() > 0];
                                    case 5:
                                        return p = c.sent(), t <= 0 ? (console.error(p), console.error(l, u.target, m), [2, !1]) : [4, (0, E.delay)(500)];
                                    case 6:
                                        return c.sent(), [4, this.isAssetTransferrable({
                                            asset: r,
                                            fromAddress: n,
                                            toAddress: a,
                                            quantity: s,
                                            useProxy: d
                                        }, t - 1)];
                                    case 7:
                                        return [2, c.sent()];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.transfer = function(e) {
                        var t = e.fromAddress,
                            r = e.toAddress,
                            n = e.asset,
                            a = e.quantity,
                            s = void 0 === a ? 1 : a;
                        return i(this, void 0, void 0, (function() {
                            var e, a, o, i, d, u, l, h, m = this;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return e = this._getSchema(this._getSchemaName(n)), a = y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(s), n.decimals || 0), o = (0, E.getWyvernAsset)(e, n, a), i = [g.CK_ADDRESS, g.CK_RINKEBY_ADDRESS].includes(o.address), d = i || !!n.version && [T.TokenStandardVersion.ERC721v1, T.TokenStandardVersion.ERC721v2].includes(n.version), u = this._getSchemaName(n) === T.WyvernSchemaName.ERC20 ? (0, E.annotateERC20TransferABI)(o) : d ? (0, E.annotateERC721TransferABI)(o) : e.functions.transfer(o), this._dispatch(T.EventType.TransferOne, {
                                            accountAddress: t,
                                            toAddress: r,
                                            asset: o
                                        }), l = (0, k.encodeTransferCall)(u, t, r), [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: t,
                                            to: u.target,
                                            data: l
                                        }, (function(e) {
                                            m._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: t
                                            })
                                        }))];
                                    case 1:
                                        return h = c.sent(), [4, this._confirmTransaction(h, T.EventType.TransferOne, "Transferring asset")];
                                    case 2:
                                        return c.sent(), [2, h]
                                }
                            }))
                        }))
                    }, e.prototype.transferAll = function(e) {
                        var t = e.assets,
                            r = e.fromAddress,
                            n = e.toAddress,
                            a = e.schemaName,
                            s = void 0 === a ? T.WyvernSchemaName.ERC721 : a;
                        return i(this, void 0, void 0, (function() {
                            var e, a, o, i, d, u, l, h = this;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return n = (0, E.validateAndFormatWalletAddress)(this.web3, n), e = t.map((function(e) {
                                            return h._getSchemaName(e) || s
                                        })), a = t.map((function(e) {
                                            return (0, E.getWyvernAsset)(h._getSchema(h._getSchemaName(e)), e)
                                        })), o = (0, k.encodeAtomicizedTransfer)(e.map((function(e) {
                                            return h._getSchema(e)
                                        })), a, r, n, this._wyvernProtocol, this._networkName), i = o.calldata, d = o.target, [4, this._getProxy(r)];
                                    case 1:
                                        return (u = c.sent()) ? [3, 3] : [4, this._initializeProxy(r)];
                                    case 2:
                                        u = c.sent(), c.label = 3;
                                    case 3:
                                        return [4, this._approveAll({
                                            schemaNames: e,
                                            wyAssets: a,
                                            accountAddress: r,
                                            proxyAddress: u
                                        })];
                                    case 4:
                                        return c.sent(), this._dispatch(T.EventType.TransferAll, {
                                            accountAddress: r,
                                            toAddress: n,
                                            assets: a
                                        }), [4, (0, E.sendRawTransaction)(this.web3, {
                                            from: r,
                                            to: u,
                                            data: (0, k.encodeProxyCall)(d, T.HowToCall.DelegateCall, i)
                                        }, (function(e) {
                                            h._dispatch(T.EventType.TransactionDenied, {
                                                error: e,
                                                accountAddress: r
                                            })
                                        }))];
                                    case 5:
                                        return l = c.sent(), [4, this._confirmTransaction(l, T.EventType.TransferAll, "Transferring ".concat(t.length, " asset").concat(1 == t.length ? "" : "s"))];
                                    case 6:
                                        return c.sent(), [2, l]
                                }
                            }))
                        }))
                    }, e.prototype.getFungibleTokens = function(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.symbol,
                            n = t.address,
                            a = t.name;
                        return i(this, void 0, void 0, (function() {
                            var e, t, s;
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return (0, E.onDeprecated)("Use `api.getPaymentTokens` instead"), e = f.tokens[this._networkName], [4, this.api.getPaymentTokens({
                                            symbol: r,
                                            address: n,
                                            name: a
                                        })];
                                    case 1:
                                        return t = o.sent().tokens, s = d([e.canonicalWrappedEther], e.otherTokens, !0).filter((function(e) {
                                            return (null == r || e.symbol.toLowerCase() == r.toLowerCase()) && ((null == n || e.address.toLowerCase() == n.toLowerCase()) && (null == a || e.name == a))
                                        })), [2, d(d([], s, !0), t, !0)]
                                }
                            }))
                        }))
                    }, e.prototype.getAssetBalance = function(e, t) {
                        var r = e.accountAddress,
                            n = e.asset;
                        return void 0 === t && (t = 1), i(this, void 0, void 0, (function() {
                            var e, a, s, o, i, u, h, m, p;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return e = this._getSchema(this._getSchemaName(n)), a = (0, E.getWyvernAsset)(e, n), e.functions.countOf ? (o = e.functions.countOf(a), i = new(this._getClientsForRead({
                                            retries: t
                                        }).web3.eth.Contract)([o], o.target), u = o.inputs.filter((function(e) {
                                            return void 0 !== e.value
                                        })).map((function(e) {
                                            return e.value
                                        })), [4, (m = i.methods)[o.name].apply(m, d([r], u, !1)).call()]) : [3, 2];
                                    case 1:
                                        return void 0 !== (s = c.sent()) ? [2, new l.BigNumber(s)] : [3, 8];
                                    case 2:
                                        if (!e.functions.ownerOf) return [3, 7];
                                        if (o = e.functions.ownerOf(a), i = new(this._getClientsForRead({
                                                retries: t
                                            }).web3.eth.Contract)([o], o.target), o.inputs.filter((function(e) {
                                                return void 0 === e.value
                                            }))[0]) throw new Error("Missing an argument for finding the owner of this asset");
                                        u = o.inputs.map((function(e) {
                                            return e.value.toString()
                                        })), c.label = 3;
                                    case 3:
                                        return c.trys.push([3, 5, , 6]), [4, (p = i.methods)[o.name].apply(p, u).call()];
                                    case 4:
                                        return (h = c.sent()) ? [2, h.toLowerCase() == r.toLowerCase() ? new l.BigNumber(1) : new l.BigNumber(0)] : [3, 6];
                                    case 5:
                                        return c.sent(), [3, 6];
                                    case 6:
                                        return [3, 8];
                                    case 7:
                                        throw new Error("Missing ownership schema for this asset type");
                                    case 8:
                                        if (!(t <= 0)) return [3, 9];
                                        throw new Error("Unable to get current owner from smart contract");
                                    case 9:
                                        return [4, (0, E.delay)(500)];
                                    case 10:
                                        return c.sent(), [4, this.getAssetBalance({
                                            accountAddress: r,
                                            asset: n
                                        }, t - 1)];
                                    case 11:
                                        return [2, c.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.getTokenBalance = function(e, t) {
                        var r = e.accountAddress,
                            n = e.tokenAddress,
                            a = e.schemaName,
                            s = void 0 === a ? T.WyvernSchemaName.ERC20 : a;
                        return void 0 === t && (t = 1), i(this, void 0, void 0, (function() {
                            var e;
                            return c(this, (function(a) {
                                return e = {
                                    tokenId: null,
                                    tokenAddress: n,
                                    schemaName: s
                                }, [2, this.getAssetBalance({
                                    accountAddress: r,
                                    asset: e
                                }, t)]
                            }))
                        }))
                    }, e.prototype.computeFees = function(e) {
                        var t = e.asset,
                            r = e.side,
                            n = e.accountAddress,
                            a = e.extraBountyBasisPoints,
                            s = void 0 === a ? 0 : a;
                        return i(this, void 0, void 0, (function() {
                            var e, a, o, i, d, u, l, h, m, p, v, y;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (e = g.DEFAULT_BUYER_FEE_BASIS_POINTS, a = g.DEFAULT_SELLER_FEE_BASIS_POINTS, o = 0, i = 0, d = (0, E.makeBigNumber)(0), u = null, l = g.DEFAULT_MAX_BOUNTY, t && (e = +t.collection.openseaBuyerFeeBasisPoints, a = +t.collection.openseaSellerFeeBasisPoints, o = +t.collection.devBuyerFeeBasisPoints, i = +t.collection.devSellerFeeBasisPoints, l = a), r != T.OrderSide.Sell || !t) return [3, 4];
                                        d = t.transferFee ? (0, E.makeBigNumber)(t.transferFee) : d, u = t.transferFeePaymentToken ? t.transferFeePaymentToken.address : u, c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), [4, (0, E.getTransferFeeSettings)(this.web3, {
                                            asset: t,
                                            accountAddress: n
                                        })];
                                    case 2:
                                        return h = c.sent(), d = null != h.transferFee ? h.transferFee : d, u = h.transferFeeTokenAddress || u, [3, 4];
                                    case 3:
                                        return m = c.sent(), console.error(m), [3, 4];
                                    case 4:
                                        if (p = r == T.OrderSide.Sell ? s : 0, v = p + g.OPENSEA_SELLER_BOUNTY_BASIS_POINTS > l, p > 0 && v) throw y = "Total bounty exceeds the maximum for this asset type (".concat(l / 100, "%)."), l >= g.OPENSEA_SELLER_BOUNTY_BASIS_POINTS && (y += " Remember that OpenSea will add ".concat(g.OPENSEA_SELLER_BOUNTY_BASIS_POINTS / 100, "% for referrers with OpenSea accounts!")), new Error(y);
                                        return [2, {
                                            totalBuyerFeeBasisPoints: e + o,
                                            totalSellerFeeBasisPoints: a + i,
                                            openseaBuyerFeeBasisPoints: e,
                                            openseaSellerFeeBasisPoints: a,
                                            devBuyerFeeBasisPoints: o,
                                            devSellerFeeBasisPoints: i,
                                            sellerBountyBasisPoints: p,
                                            transferFee: d,
                                            transferFeeTokenAddress: u
                                        }]
                                }
                            }))
                        }))
                    }, e.prototype.validateAndPostOrder = function(e) {
                        return i(this, void 0, void 0, (function() {
                            return c(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.api.postOrder((0, E.orderToJSON)(e))];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            }))
                        }))
                    }, e.prototype._computeGasPrice = function() {
                        return i(this, void 0, void 0, (function() {
                            var e, t;
                            return c(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, (0, E.getCurrentGasPrice)(this.web3)];
                                    case 1:
                                        return e = r.sent(), t = this.web3.utils.toWei(this.gasPriceAddition.toString(), "gwei"), [2, e.plus(t)]
                                }
                            }))
                        }))
                    }, e.prototype._correctGasAmount = function(e) {
                        return Math.ceil(e * this.gasIncreaseFactor)
                    }, e.prototype._estimateGasForMatch = function(e, t) {
                        var r = e.buy,
                            n = e.sell,
                            a = e.accountAddress,
                            s = e.metadata,
                            o = void 0 === s ? g.NULL_BLOCK_HASH : s;
                        return void 0 === t && (t = 1), i(this, void 0, void 0, (function() {
                            var e, s;
                            return c(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return r.maker.toLowerCase() != a.toLowerCase() || r.paymentToken != g.NULL_ADDRESS ? [3, 2] : [4, this._getRequiredAmountForTakingSellOrder(n)];
                                    case 1:
                                        e = i.sent(), i.label = 2;
                                    case 2:
                                        return i.trys.push([2, 4, , 7]), [4, this._getClientsForRead({
                                            retries: t
                                        }).wyvernProtocol.wyvernExchange.atomicMatch_([r.exchange, r.maker, r.taker, r.feeRecipient, r.target, r.staticTarget, r.paymentToken, n.exchange, n.maker, n.taker, n.feeRecipient, n.target, n.staticTarget, n.paymentToken], [r.makerRelayerFee, r.takerRelayerFee, r.makerProtocolFee, r.takerProtocolFee, r.basePrice, r.extra, r.listingTime, r.expirationTime, r.salt, n.makerRelayerFee, n.takerRelayerFee, n.makerProtocolFee, n.takerProtocolFee, n.basePrice, n.extra, n.listingTime, n.expirationTime, n.salt], [r.feeMethod, r.side, r.saleKind, r.howToCall, n.feeMethod, n.side, n.saleKind, n.howToCall], r.calldata, n.calldata, r.replacementPattern, n.replacementPattern, r.staticExtradata, n.staticExtradata, [r.v || 0, n.v || 0], [r.r || g.NULL_BLOCK_HASH, r.s || g.NULL_BLOCK_HASH, n.r || g.NULL_BLOCK_HASH, n.s || g.NULL_BLOCK_HASH, o]).estimateGasAsync({
                                            from: a,
                                            value: e
                                        })];
                                    case 3:
                                        return [2, i.sent()];
                                    case 4:
                                        return s = i.sent(), t <= 0 ? (console.error(s), [2, void 0]) : [4, (0, E.delay)(200)];
                                    case 5:
                                        return i.sent(), [4, this._estimateGasForMatch({
                                            buy: r,
                                            sell: n,
                                            accountAddress: a,
                                            metadata: o
                                        }, t - 1)];
                                    case 6:
                                        return [2, i.sent()];
                                    case 7:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype._estimateGasForTransfer = function(e) {
                        var t = e.assets,
                            r = e.fromAddress,
                            n = e.toAddress,
                            a = e.schemaName,
                            s = void 0 === a ? T.WyvernSchemaName.ERC721 : a;
                        return i(this, void 0, void 0, (function() {
                            var e, a, o, i, d, u, l = this;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return e = t.map((function(e) {
                                            return l._getSchemaName(e) || s
                                        })), a = t.map((function(e) {
                                            return (0, E.getWyvernAsset)(l._getSchema(l._getSchemaName(e)), e)
                                        })), [4, this._getProxy(r)];
                                    case 1:
                                        if (!(o = c.sent())) throw new Error("Uninitialized proxy address");
                                        return [4, this._approveAll({
                                            schemaNames: e,
                                            wyAssets: a,
                                            accountAddress: r,
                                            proxyAddress: o
                                        })];
                                    case 2:
                                        return c.sent(), i = (0, k.encodeAtomicizedTransfer)(e.map((function(e) {
                                            return l._getSchema(e)
                                        })), a, r, n, this._wyvernProtocol, this._networkName), d = i.calldata, u = i.target, [2, (0, E.estimateGas)(this.web3, {
                                            from: r,
                                            to: o,
                                            data: (0, k.encodeProxyCall)(u, T.HowToCall.DelegateCall, d)
                                        })]
                                }
                            }))
                        }))
                    }, e.prototype._getProxy = function(e, t) {
                        return void 0 === t && (t = 0), i(this, void 0, void 0, (function() {
                            var r;
                            return c(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this._wyvernProtocolReadOnly.wyvernProxyRegistry.proxies(e).callAsync()];
                                    case 1:
                                        if ("0x" == (r = n.sent())) throw new Error("Couldn't retrieve your account from the blockchain - make sure you're on the correct Ethereum network!");
                                        return r && r != g.NULL_ADDRESS ? [3, 5] : t > 0 ? [4, (0, E.delay)(1e3)] : [3, 4];
                                    case 2:
                                        return n.sent(), [4, this._getProxy(e, t - 1)];
                                    case 3:
                                        return [2, n.sent()];
                                    case 4:
                                        r = null, n.label = 5;
                                    case 5:
                                        return [2, r]
                                }
                            }))
                        }))
                    }, e.prototype._initializeProxy = function(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r, a, s, o = this;
                            return c(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        return this._dispatch(T.EventType.InitializeAccount, {
                                            accountAddress: e
                                        }), this.logger("Initializing proxy for account: ".concat(e)), t = {
                                            from: e
                                        }, [4, this._wyvernProtocol.wyvernProxyRegistry.registerProxy().estimateGasAsync(t)];
                                    case 1:
                                        return r = d.sent(), [4, this._wyvernProtocol.wyvernProxyRegistry.registerProxy().sendTransactionAsync(n(n({}, t), {
                                            gas: this._correctGasAmount(r)
                                        }))];
                                    case 2:
                                        return a = d.sent(), [4, this._confirmTransaction(a, T.EventType.InitializeAccount, "Initializing proxy for account", (function() {
                                            return i(o, void 0, void 0, (function() {
                                                return c(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, this._getProxy(e, 0)];
                                                        case 1:
                                                            return [2, !!t.sent()]
                                                    }
                                                }))
                                            }))
                                        }))];
                                    case 3:
                                        return d.sent(), [4, this._getProxy(e, 10)];
                                    case 4:
                                        if (!(s = d.sent())) throw new Error("Failed to initialize your account :( Please restart your wallet/browser and try again!");
                                        return [2, s]
                                }
                            }))
                        }))
                    }, e.prototype._getApprovedTokenCount = function(e) {
                        var t, r = e.accountAddress,
                            n = e.tokenAddress,
                            a = e.proxyAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, s;
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return n || (n = f.tokens[this._networkName].canonicalWrappedEther.address), e = a || (null === (t = this._wyvernConfigOverride) || void 0 === t ? void 0 : t.wyvernTokenTransferProxyContractAddress) || y.WyvernProtocol.getTokenTransferProxyAddress(this._networkName), [4, (0, E.rawCall)(this.web3, {
                                            from: r,
                                            to: n,
                                            data: (0, k.encodeCall)((0, w.getMethod)(w.ERC20, "allowance"), [r, e])
                                        })];
                                    case 1:
                                        return s = o.sent(), [2, (0, E.makeBigNumber)(s)]
                                }
                            }))
                        }))
                    }, e.prototype._makeBuyOrder = function(e) {
                        var t, r = e.asset,
                            n = e.quantity,
                            a = e.accountAddress,
                            s = e.startAmount,
                            o = e.expirationTime,
                            d = void 0 === o ? (0, E.getMaxOrderExpirationTimestamp)() : o,
                            u = e.paymentTokenAddress,
                            l = e.extraBountyBasisPoints,
                            h = void 0 === l ? 0 : l,
                            m = e.sellOrder,
                            p = e.referrerAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, o, i, l, v, f, A, w, _, P, b, S, N, x, F, R, C, O, B, L, D, I, W, M, U, H, q, K;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return a = (0, E.validateAndFormatWalletAddress)(this.web3, a), e = this._getSchema(this._getSchemaName(r)), o = y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(n), r.decimals || 0), i = (0, E.getWyvernAsset)(e, r, o), [4, this.api.getAsset(r)];
                                    case 1:
                                        return l = c.sent(), v = m ? m.maker : g.NULL_ADDRESS, [4, this.computeFees({
                                            asset: l,
                                            extraBountyBasisPoints: h,
                                            side: T.OrderSide.Buy
                                        })];
                                    case 2:
                                        return f = c.sent(), A = f.totalBuyerFeeBasisPoints, w = f.totalSellerFeeBasisPoints, _ = this._getBuyFeeParameters(A, w, m), P = _.makerRelayerFee, b = _.takerRelayerFee, S = _.makerProtocolFee, N = _.takerProtocolFee, x = _.makerReferrerFee, F = _.feeRecipient, R = _.feeMethod, C = (0, k.encodeBuy)(e, i, a, (null === m || void 0 === m ? void 0 : m.waitingForBestCounterOrder) ? void 0 : E.merkleValidatorByNetwork[this._networkName]), O = C.target, B = C.calldata, L = C.replacementPattern, [4, this._getPriceParameters(T.OrderSide.Buy, u, d, s)];
                                    case 3:
                                        return D = c.sent(), I = D.basePrice, W = D.extra, M = D.paymentToken, U = this._getTimeParameters({
                                            expirationTimestamp: d
                                        }), [4, this._getStaticCallTargetAndExtraData({
                                            asset: l,
                                            useTxnOriginStaticCall: !1
                                        })];
                                    case 4:
                                        return H = c.sent(), q = H.staticTarget, K = H.staticExtradata, [2, {
                                            exchange: (null === (t = this._wyvernConfigOverride) || void 0 === t ? void 0 : t.wyvernExchangeContractAddress) || y.WyvernProtocol.getExchangeContractAddress(this._networkName),
                                            maker: a,
                                            taker: v,
                                            quantity: o,
                                            makerRelayerFee: P,
                                            takerRelayerFee: b,
                                            makerProtocolFee: S,
                                            takerProtocolFee: N,
                                            makerReferrerFee: x,
                                            waitingForBestCounterOrder: !1,
                                            feeMethod: R,
                                            feeRecipient: F,
                                            side: T.OrderSide.Buy,
                                            saleKind: T.SaleKind.FixedPrice,
                                            target: O,
                                            howToCall: O === E.merkleValidatorByNetwork[this._networkName] ? T.HowToCall.DelegateCall : T.HowToCall.Call,
                                            calldata: B,
                                            replacementPattern: L,
                                            staticTarget: q,
                                            staticExtradata: K,
                                            paymentToken: M,
                                            basePrice: I,
                                            extra: W,
                                            listingTime: U.listingTime,
                                            expirationTime: U.expirationTime,
                                            salt: y.WyvernProtocol.generatePseudoRandomSalt(),
                                            metadata: {
                                                asset: i,
                                                schema: e.name,
                                                referrerAddress: p
                                            }
                                        }]
                                }
                            }))
                        }))
                    }, e.prototype._makeSellOrder = function(e) {
                        var t, r = e.asset,
                            n = e.quantity,
                            a = e.accountAddress,
                            s = e.startAmount,
                            o = e.endAmount,
                            d = e.listingTime,
                            u = e.expirationTime,
                            l = void 0 === u ? (0, E.getMaxOrderExpirationTimestamp)() : u,
                            h = e.waitForHighestBid,
                            m = e.englishAuctionReservePrice,
                            p = void 0 === m ? 0 : m,
                            v = e.paymentTokenAddress,
                            f = e.extraBountyBasisPoints,
                            A = e.buyerAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, i, u, m, g, w, _, P, b, S, N, x, F, R, C, O, B, L, D, I, W, M, U, H, q, K, z, V, G, Y;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return a = (0, E.validateAndFormatWalletAddress)(this.web3, a), e = this._getSchema(this._getSchemaName(r)), i = y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(n), r.decimals || 0), u = (0, E.getWyvernAsset)(e, r, i), [4, this.api.getAsset(r)];
                                    case 1:
                                        return m = c.sent(), [4, this.computeFees({
                                            asset: m,
                                            side: T.OrderSide.Sell,
                                            extraBountyBasisPoints: f
                                        })];
                                    case 2:
                                        return g = c.sent(), w = g.totalSellerFeeBasisPoints, _ = g.totalBuyerFeeBasisPoints, P = g.sellerBountyBasisPoints, b = (0, k.encodeSell)(e, u, a, h ? void 0 : E.merkleValidatorByNetwork[this._networkName]), S = b.target, N = b.calldata, x = b.replacementPattern, F = null != o && o !== s ? T.SaleKind.DutchAuction : T.SaleKind.FixedPrice, [4, this._getPriceParameters(T.OrderSide.Sell, v, l, s, o, h, p)];
                                    case 3:
                                        return R = c.sent(), C = R.basePrice, O = R.extra, B = R.paymentToken, L = R.reservePrice, D = this._getTimeParameters({
                                            expirationTimestamp: l,
                                            listingTimestamp: d,
                                            waitingForBestCounterOrder: h
                                        }), I = this._getSellFeeParameters(_, w, h, P), W = I.makerRelayerFee, M = I.takerRelayerFee, U = I.makerProtocolFee, H = I.takerProtocolFee, q = I.makerReferrerFee, K = I.feeRecipient, z = I.feeMethod, [4, this._getStaticCallTargetAndExtraData({
                                            asset: m,
                                            useTxnOriginStaticCall: h
                                        })];
                                    case 4:
                                        return V = c.sent(), G = V.staticTarget, Y = V.staticExtradata, [2, {
                                            exchange: (null === (t = this._wyvernConfigOverride) || void 0 === t ? void 0 : t.wyvernExchangeContractAddress) || y.WyvernProtocol.getExchangeContractAddress(this._networkName),
                                            maker: a,
                                            taker: A,
                                            quantity: i,
                                            makerRelayerFee: W,
                                            takerRelayerFee: M,
                                            makerProtocolFee: U,
                                            takerProtocolFee: H,
                                            makerReferrerFee: q,
                                            waitingForBestCounterOrder: h,
                                            englishAuctionReservePrice: L ? (0, E.makeBigNumber)(L) : void 0,
                                            feeMethod: z,
                                            feeRecipient: K,
                                            side: T.OrderSide.Sell,
                                            saleKind: F,
                                            target: S,
                                            howToCall: S === E.merkleValidatorByNetwork[this._networkName] ? T.HowToCall.DelegateCall : T.HowToCall.Call,
                                            calldata: N,
                                            replacementPattern: x,
                                            staticTarget: G,
                                            staticExtradata: Y,
                                            paymentToken: B,
                                            basePrice: C,
                                            extra: O,
                                            listingTime: D.listingTime,
                                            expirationTime: D.expirationTime,
                                            salt: y.WyvernProtocol.generatePseudoRandomSalt(),
                                            metadata: {
                                                asset: u,
                                                schema: e.name
                                            }
                                        }]
                                }
                            }))
                        }))
                    }, e.prototype._getStaticCallTargetAndExtraData = function(e) {
                        var t = e.asset,
                            r = e.useTxnOriginStaticCall;
                        return i(this, void 0, void 0, (function() {
                            var e, n, a, s, o, i, d, u, l;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return e = [g.CHEEZE_WIZARDS_GUILD_ADDRESS.toLowerCase(), g.CHEEZE_WIZARDS_GUILD_RINKEBY_ADDRESS.toLowerCase()].includes(t.tokenAddress.toLowerCase()), n = t.tokenAddress.toLowerCase() == g.DECENTRALAND_ESTATE_ADDRESS.toLowerCase(), (a = this._networkName == T.Network.Main) && !r ? [2, {
                                            staticTarget: g.NULL_ADDRESS,
                                            staticExtradata: "0x"
                                        }] : e ? (s = a ? g.CHEEZE_WIZARDS_BASIC_TOURNAMENT_ADDRESS : g.CHEEZE_WIZARDS_BASIC_TOURNAMENT_RINKEBY_ADDRESS, o = new this.web3.eth.Contract(w.CheezeWizardsBasicTournament, s), [4, (0, E.rawCall)(this.web3, {
                                            to: o.options.address,
                                            data: o.methods.wizardFingerprint(t.tokenId).encodeABI()
                                        })]) : [3, 2];
                                    case 1:
                                        return i = c.sent(), [2, {
                                            staticTarget: a ? g.STATIC_CALL_CHEEZE_WIZARDS_ADDRESS : g.STATIC_CALL_CHEEZE_WIZARDS_RINKEBY_ADDRESS,
                                            staticExtradata: (0, k.encodeCall)((0, w.getMethod)(w.StaticCheckCheezeWizards, "succeedIfCurrentWizardFingerprintMatchesProvidedWizardFingerprint"), [t.tokenId, i, r])
                                        }];
                                    case 2:
                                        return n && a ? (d = g.DECENTRALAND_ESTATE_ADDRESS, u = new this.web3.eth.Contract(w.DecentralandEstates, d), [4, (0, E.rawCall)(this.web3, {
                                            to: u.options.address,
                                            data: u.methods.getFingerprint(t.tokenId).encodeABI()
                                        })]) : [3, 4];
                                    case 3:
                                        return l = c.sent(), [2, {
                                            staticTarget: g.STATIC_CALL_DECENTRALAND_ESTATES_ADDRESS,
                                            staticExtradata: (0, k.encodeCall)((0, w.getMethod)(w.StaticCheckDecentralandEstates, "succeedIfCurrentEstateFingerprintMatchesProvidedEstateFingerprint"), [t.tokenId, l, r])
                                        }];
                                    case 4:
                                        return r ? [2, {
                                            staticTarget: a ? g.STATIC_CALL_TX_ORIGIN_ADDRESS : g.STATIC_CALL_TX_ORIGIN_RINKEBY_ADDRESS,
                                            staticExtradata: (0, k.encodeCall)((0, w.getMethod)(w.StaticCheckTxOrigin, "succeedIfTxOriginMatchesHardcodedAddress"), [])
                                        }] : [2, {
                                            staticTarget: g.NULL_ADDRESS,
                                            staticExtradata: "0x"
                                        }];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype._makeBundleBuyOrder = function(e) {
                        var t, r = e.assets,
                            n = e.collection,
                            a = e.quantities,
                            s = e.accountAddress,
                            o = e.startAmount,
                            d = e.expirationTime,
                            u = void 0 === d ? (0, E.getMaxOrderExpirationTimestamp)() : d,
                            l = e.paymentTokenAddress,
                            h = e.extraBountyBasisPoints,
                            m = void 0 === h ? 0 : h,
                            p = e.sellOrder,
                            v = e.referrerAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, i, d, h, f, A, w, _, P, b, S, N, x, F, R, C, O, B, L, D, I, W, M, U, H, q = this;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return s = (0, E.validateAndFormatWalletAddress)(this.web3, s), e = a.map((function(e, t) {
                                            return y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(e), r[t].decimals || 0)
                                        })), i = (0, E.getWyvernBundle)(r, r.map((function(e) {
                                            return q._getSchema(e.schemaName)
                                        })), e), d = i.schemas.map((function(e) {
                                            return q._getSchema(e)
                                        })), h = p ? p.maker : g.NULL_ADDRESS, n ? [4, this.api.getAsset(r[0])] : [3, 2];
                                    case 1:
                                        return A = c.sent(), [3, 3];
                                    case 2:
                                        A = void 0, c.label = 3;
                                    case 3:
                                        return f = A, [4, this.computeFees({
                                            asset: f,
                                            extraBountyBasisPoints: m,
                                            side: T.OrderSide.Buy
                                        })];
                                    case 4:
                                        return w = c.sent(), _ = w.totalBuyerFeeBasisPoints, P = w.totalSellerFeeBasisPoints, b = this._getBuyFeeParameters(_, P, p), S = b.makerRelayerFee, N = b.takerRelayerFee, x = b.makerProtocolFee, F = b.takerProtocolFee, R = b.makerReferrerFee, C = b.feeRecipient, O = b.feeMethod, B = (0, k.encodeAtomicizedBuy)(d, i.assets, s, this._wyvernProtocol, this._networkName), L = B.calldata, D = B.replacementPattern, [4, this._getPriceParameters(T.OrderSide.Buy, l, u, o)];
                                    case 5:
                                        return I = c.sent(), W = I.basePrice, M = I.extra, U = I.paymentToken, H = this._getTimeParameters({
                                            expirationTimestamp: u
                                        }), [2, {
                                            exchange: (null === (t = this._wyvernConfigOverride) || void 0 === t ? void 0 : t.wyvernExchangeContractAddress) || y.WyvernProtocol.getExchangeContractAddress(this._networkName),
                                            maker: s,
                                            taker: h,
                                            quantity: (0, E.makeBigNumber)(1),
                                            makerRelayerFee: S,
                                            takerRelayerFee: N,
                                            makerProtocolFee: x,
                                            takerProtocolFee: F,
                                            makerReferrerFee: R,
                                            waitingForBestCounterOrder: !1,
                                            feeMethod: O,
                                            feeRecipient: C,
                                            side: T.OrderSide.Buy,
                                            saleKind: T.SaleKind.FixedPrice,
                                            target: y.WyvernProtocol.getAtomicizerContractAddress(this._networkName),
                                            howToCall: T.HowToCall.DelegateCall,
                                            calldata: L,
                                            replacementPattern: D,
                                            staticTarget: g.NULL_ADDRESS,
                                            staticExtradata: "0x",
                                            paymentToken: U,
                                            basePrice: W,
                                            extra: M,
                                            listingTime: H.listingTime,
                                            expirationTime: H.expirationTime,
                                            salt: y.WyvernProtocol.generatePseudoRandomSalt(),
                                            metadata: {
                                                bundle: i,
                                                referrerAddress: v
                                            }
                                        }]
                                }
                            }))
                        }))
                    }, e.prototype._makeBundleSellOrder = function(e) {
                        var t, r = e.bundleName,
                            n = e.bundleDescription,
                            a = e.bundleExternalLink,
                            s = e.assets,
                            o = e.collection,
                            d = e.quantities,
                            u = e.accountAddress,
                            l = e.startAmount,
                            h = e.endAmount,
                            m = e.listingTime,
                            p = e.expirationTime,
                            v = void 0 === p ? (0, E.getMaxOrderExpirationTimestamp)() : p,
                            f = e.waitForHighestBid,
                            A = e.englishAuctionReservePrice,
                            w = void 0 === A ? 0 : A,
                            _ = e.paymentTokenAddress,
                            P = e.extraBountyBasisPoints,
                            b = e.buyerAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, i, p, A, S, N, x, F, R, C, O, B, L, D, I, W, M, U, H, q, K, z, V, G, Y, X, Z = this;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return u = (0, E.validateAndFormatWalletAddress)(this.web3, u), e = d.map((function(e, t) {
                                            return y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(e), s[t].decimals || 0)
                                        })), i = (0, E.getWyvernBundle)(s, s.map((function(e) {
                                            return Z._getSchema(e.schemaName)
                                        })), e), p = i.schemas.map((function(e) {
                                            return Z._getSchema(e)
                                        })), i.name = r, i.description = n, i.external_link = a, o ? [4, this.api.getAsset(s[0])] : [3, 2];
                                    case 1:
                                        return S = c.sent(), [3, 3];
                                    case 2:
                                        S = void 0, c.label = 3;
                                    case 3:
                                        return A = S, [4, this.computeFees({
                                            asset: A,
                                            side: T.OrderSide.Sell,
                                            extraBountyBasisPoints: P
                                        })];
                                    case 4:
                                        return N = c.sent(), x = N.totalSellerFeeBasisPoints, F = N.totalBuyerFeeBasisPoints, R = N.sellerBountyBasisPoints, C = (0, k.encodeAtomicizedSell)(p, i.assets, u, this._wyvernProtocol, this._networkName), O = C.calldata, B = C.replacementPattern, [4, this._getPriceParameters(T.OrderSide.Sell, _, v, l, h, f, w)];
                                    case 5:
                                        return L = c.sent(), D = L.basePrice, I = L.extra, W = L.paymentToken, M = L.reservePrice, U = this._getTimeParameters({
                                            expirationTimestamp: v,
                                            listingTimestamp: m,
                                            waitingForBestCounterOrder: f
                                        }), H = null != h && h !== l ? T.SaleKind.DutchAuction : T.SaleKind.FixedPrice, q = this._getSellFeeParameters(F, x, f, R), K = q.makerRelayerFee, z = q.takerRelayerFee, V = q.makerProtocolFee, G = q.takerProtocolFee, Y = q.makerReferrerFee, X = q.feeRecipient, [2, {
                                            exchange: (null === (t = this._wyvernConfigOverride) || void 0 === t ? void 0 : t.wyvernExchangeContractAddress) || y.WyvernProtocol.getExchangeContractAddress(this._networkName),
                                            maker: u,
                                            taker: b,
                                            quantity: (0, E.makeBigNumber)(1),
                                            makerRelayerFee: K,
                                            takerRelayerFee: z,
                                            makerProtocolFee: V,
                                            takerProtocolFee: G,
                                            makerReferrerFee: Y,
                                            waitingForBestCounterOrder: f,
                                            englishAuctionReservePrice: M ? (0, E.makeBigNumber)(M) : void 0,
                                            feeMethod: T.FeeMethod.SplitFee,
                                            feeRecipient: X,
                                            side: T.OrderSide.Sell,
                                            saleKind: H,
                                            target: y.WyvernProtocol.getAtomicizerContractAddress(this._networkName),
                                            howToCall: T.HowToCall.DelegateCall,
                                            calldata: O,
                                            replacementPattern: B,
                                            staticTarget: g.NULL_ADDRESS,
                                            staticExtradata: "0x",
                                            paymentToken: W,
                                            basePrice: D,
                                            extra: I,
                                            listingTime: U.listingTime,
                                            expirationTime: U.expirationTime,
                                            salt: y.WyvernProtocol.generatePseudoRandomSalt(),
                                            metadata: {
                                                bundle: i
                                            }
                                        }]
                                }
                            }))
                        }))
                    }, e.prototype._makeMatchingOrder = function(e) {
                        var t = this,
                            r = e.order,
                            n = e.accountAddress,
                            a = e.recipientAddress;
                        n = (0, E.validateAndFormatWalletAddress)(this.web3, n), a = (0, E.validateAndFormatWalletAddress)(this.web3, a);
                        var s = function() {
                                var e = r.target === E.merkleValidatorByNetwork[t._networkName];
                                if ("asset" in r.metadata) {
                                    var n = t._getSchema(r.metadata.schema);
                                    return r.side == T.OrderSide.Buy ? (0, k.encodeSell)(n, r.metadata.asset, a, e ? r.target : void 0) : (0, k.encodeBuy)(n, r.metadata.asset, a, e ? r.target : void 0)
                                }
                                if ("bundle" in r.metadata) {
                                    var s = r.metadata.bundle,
                                        o = s.schemas ? s.schemas.map((function(e) {
                                            return t._getSchema(e)
                                        })) : s.assets.map((function() {
                                            return t._getSchema("schema" in r.metadata ? r.metadata.schema : void 0)
                                        })),
                                        i = r.side == T.OrderSide.Buy ? (0, k.encodeAtomicizedSell)(o, r.metadata.bundle.assets, a, t._wyvernProtocol, t._networkName) : (0, k.encodeAtomicizedBuy)(o, r.metadata.bundle.assets, a, t._wyvernProtocol, t._networkName);
                                    return {
                                        target: y.WyvernProtocol.getAtomicizerContractAddress(t._networkName),
                                        calldata: i.calldata,
                                        replacementPattern: i.replacementPattern
                                    }
                                }
                                throw new Error("Invalid order metadata")
                            }(),
                            o = s.target,
                            i = s.calldata,
                            c = s.replacementPattern,
                            d = this._getTimeParameters({
                                expirationTimestamp: 0,
                                isMatchingOrder: !0
                            }),
                            u = r.feeRecipient == g.NULL_ADDRESS ? g.OPENSEA_FEE_RECIPIENT : g.NULL_ADDRESS;
                        return {
                            exchange: r.exchange,
                            maker: n,
                            taker: r.maker,
                            quantity: r.quantity,
                            makerRelayerFee: r.makerRelayerFee,
                            takerRelayerFee: r.takerRelayerFee,
                            makerProtocolFee: r.makerProtocolFee,
                            takerProtocolFee: r.takerProtocolFee,
                            makerReferrerFee: r.makerReferrerFee,
                            waitingForBestCounterOrder: !1,
                            feeMethod: r.feeMethod,
                            feeRecipient: u,
                            side: (r.side + 1) % 2,
                            saleKind: T.SaleKind.FixedPrice,
                            target: o,
                            howToCall: r.howToCall,
                            calldata: i,
                            replacementPattern: c,
                            staticTarget: g.NULL_ADDRESS,
                            staticExtradata: "0x",
                            paymentToken: r.paymentToken,
                            basePrice: r.basePrice,
                            extra: (0, E.makeBigNumber)(0),
                            listingTime: d.listingTime,
                            expirationTime: d.expirationTime,
                            salt: y.WyvernProtocol.generatePseudoRandomSalt(),
                            metadata: r.metadata
                        }
                    }, e.prototype._validateMatch = function(e, t) {
                        var r = e.buy,
                            n = e.sell,
                            a = e.accountAddress,
                            s = e.shouldValidateBuy,
                            o = void 0 !== s && s,
                            d = e.shouldValidateSell,
                            u = void 0 !== d && d;
                        return void 0 === t && (t = 1), i(this, void 0, void 0, (function() {
                            var e, s, i, d, l;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return c.trys.push([0, 7, , 10]), o ? [4, this._validateOrder(r)] : [3, 2];
                                    case 1:
                                        if (e = c.sent(), this.logger("Buy order is valid: ".concat(e)), !e) throw new Error("Invalid buy order. It may have recently been removed. Please refresh the page and try again!");
                                        c.label = 2;
                                    case 2:
                                        return u ? [4, this._validateOrder(n)] : [3, 4];
                                    case 3:
                                        if (s = c.sent(), this.logger("Sell order is valid: ".concat(s)), !s) throw new Error("Invalid sell order. It may have recently been removed. Please refresh the page and try again!");
                                        c.label = 4;
                                    case 4:
                                        return [4, (0, _.requireOrdersCanMatch)(this._getClientsForRead({
                                            retries: t
                                        }).wyvernProtocol, {
                                            buy: r,
                                            sell: n,
                                            accountAddress: a
                                        })];
                                    case 5:
                                        return i = c.sent(), this.logger("Orders matching: ".concat(i)), [4, (0, _.requireOrderCalldataCanMatch)(this._getClientsForRead({
                                            retries: t
                                        }).wyvernProtocol, {
                                            buy: r,
                                            sell: n
                                        })];
                                    case 6:
                                        return d = c.sent(), this.logger("Order calldata matching: ".concat(d)), [2, !0];
                                    case 7:
                                        if (l = c.sent(), t <= 0) throw new Error("Error matching this listing: ".concat(l instanceof Error ? l.message : "", ". Please contact the maker or try again later!"));
                                        return [4, (0, E.delay)(500)];
                                    case 8:
                                        return c.sent(), [4, this._validateMatch({
                                            buy: r,
                                            sell: n,
                                            accountAddress: a,
                                            shouldValidateBuy: o,
                                            shouldValidateSell: u
                                        }, t - 1)];
                                    case 9:
                                        return [2, c.sent()];
                                    case 10:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype._createEmailWhitelistEntry = function(e) {
                        var t = e.order,
                            r = e.buyerEmail;
                        return i(this, void 0, void 0, (function() {
                            var e;
                            return c(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!(e = "asset" in t.metadata ? t.metadata.asset : void 0) || !e.id) throw new Error("Whitelisting only available for non-fungible assets.");
                                        return [4, this.api.postAssetWhitelist(e.address, e.id, r)];
                                    case 1:
                                        return n.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype._sellOrderValidationAndApprovals = function(e) {
                        var t, r = e.order,
                            n = e.accountAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, a, s, o, i;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return e = "bundle" in r.metadata ? r.metadata.bundle.assets : r.metadata.asset ? [r.metadata.asset] : [], a = "bundle" in r.metadata && "schemas" in r.metadata.bundle ? r.metadata.bundle.schemas : "schema" in r.metadata ? [r.metadata.schema] : [], s = r.paymentToken, [4, this._approveAll({
                                            schemaNames: a,
                                            wyAssets: e,
                                            accountAddress: n
                                        })];
                                    case 1:
                                        return c.sent(), s == g.NULL_ADDRESS ? [3, 3] : (o = (0, E.makeBigNumber)(r.basePrice), i = (null === (t = this._wyvernConfigOverride) || void 0 === t ? void 0 : t.wyvernTokenTransferProxyContractAddress) || y.WyvernProtocol.getTokenTransferProxyAddress(this._networkName), [4, this.approveFungibleToken({
                                            accountAddress: n,
                                            tokenAddress: s,
                                            minimumAmount: o,
                                            proxyAddress: i
                                        })]);
                                    case 2:
                                        c.sent(), c.label = 3;
                                    case 3:
                                        return [4, this._wyvernProtocol.wyvernExchange.validateOrderParameters_([r.exchange, r.maker, r.taker, r.feeRecipient, r.target, r.staticTarget, r.paymentToken], [r.makerRelayerFee, r.takerRelayerFee, r.makerProtocolFee, r.takerProtocolFee, r.basePrice, r.extra, r.listingTime, r.expirationTime, r.salt], r.feeMethod, r.side, r.saleKind, r.howToCall, r.calldata, r.replacementPattern, r.staticExtradata).callAsync({
                                            from: n
                                        })];
                                    case 4:
                                        if (!c.sent()) throw console.error(r), new Error("Failed to validate sell order parameters. Make sure you're on the right network!");
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.approveOrder = function(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r, n = this;
                            return c(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return t = e.maker, !0, this._dispatch(T.EventType.ApproveOrder, {
                                            order: e,
                                            accountAddress: t
                                        }), [4, this._wyvernProtocol.wyvernExchange.approveOrder_([e.exchange, e.maker, e.taker, e.feeRecipient, e.target, e.staticTarget, e.paymentToken], [e.makerRelayerFee, e.takerRelayerFee, e.makerProtocolFee, e.takerProtocolFee, e.basePrice, e.extra, e.listingTime, e.expirationTime, e.salt], e.feeMethod, e.side, e.saleKind, e.howToCall, e.calldata, e.replacementPattern, e.staticExtradata, true).sendTransactionAsync({
                                            from: t
                                        })];
                                    case 1:
                                        return r = a.sent(), [4, this._confirmTransaction(r.toString(), T.EventType.ApproveOrder, "Approving order", (function() {
                                            return i(n, void 0, void 0, (function() {
                                                return c(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, this._validateOrder(e)];
                                                        case 1:
                                                            return [2, t.sent()]
                                                    }
                                                }))
                                            }))
                                        }))];
                                    case 2:
                                        return a.sent(), [2, r]
                                }
                            }))
                        }))
                    }, e.prototype._validateOrder = function(e) {
                        return i(this, void 0, void 0, (function() {
                            return c(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this._wyvernProtocolReadOnly.wyvernExchange.validateOrder_([e.exchange, e.maker, e.taker, e.feeRecipient, e.target, e.staticTarget, e.paymentToken], [e.makerRelayerFee, e.takerRelayerFee, e.makerProtocolFee, e.takerProtocolFee, e.basePrice, e.extra, e.listingTime, e.expirationTime, e.salt], e.feeMethod, e.side, e.saleKind, e.howToCall, e.calldata, e.replacementPattern, e.staticExtradata, e.v || 0, e.r || g.NULL_BLOCK_HASH, e.s || g.NULL_BLOCK_HASH).callAsync()];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            }))
                        }))
                    }, e.prototype._approveAll = function(e) {
                        var t = e.schemaNames,
                            r = e.wyAssets,
                            n = e.accountAddress,
                            a = e.proxyAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, s, o = this;
                            return c(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        return (e = a) ? [3, 2] : [4, this._getProxy(n, 0)];
                                    case 1:
                                        e = d.sent(), d.label = 2;
                                    case 2:
                                        return (a = e || void 0) ? [3, 4] : [4, this._initializeProxy(n)];
                                    case 3:
                                        a = d.sent(), d.label = 4;
                                    case 4:
                                        return s = new Set, [2, Promise.all(r.map((function(e, r) {
                                            return i(o, void 0, void 0, (function() {
                                                var o, i, d, u, l;
                                                return c(this, (function(c) {
                                                    switch (c.label) {
                                                        case 0:
                                                            o = t[r], c.label = 1;
                                                        case 1:
                                                            return c.trys.push([1, 3, , 4]), [4, this._ownsAssetOnChain({
                                                                accountAddress: n,
                                                                proxyAddress: a,
                                                                wyAsset: e,
                                                                schemaName: o
                                                            })];
                                                        case 2:
                                                            return i = c.sent(), [3, 4];
                                                        case 3:
                                                            return c.sent(), i = !0, [3, 4];
                                                        case 4:
                                                            if (!i) throw d = "quantity" in e ? e.quantity : 1, console.error("Failed on-chain ownership check: ".concat(n, " on ").concat(o, ":"), e), new Error("You don't own enough to do that (".concat(d, " base units of ").concat(e.address).concat(e.id ? " token " + e.id : "", ")"));
                                                            switch (o) {
                                                                case T.WyvernSchemaName.ERC721:
                                                                case T.WyvernSchemaName.ERC721v3:
                                                                case T.WyvernSchemaName.ERC1155:
                                                                case T.WyvernSchemaName.LegacyEnjin:
                                                                case T.WyvernSchemaName.ENSShortNameAuction:
                                                                    return [3, 5];
                                                                case T.WyvernSchemaName.ERC20:
                                                                    return [3, 7]
                                                            }
                                                            return [3, 9];
                                                        case 5:
                                                            return u = e, [4, this.approveSemiOrNonFungibleToken({
                                                                tokenId: u.id.toString(),
                                                                tokenAddress: u.address,
                                                                accountAddress: n,
                                                                proxyAddress: a,
                                                                schemaName: o,
                                                                skipApproveAllIfTokenAddressIn: s
                                                            })];
                                                        case 6:
                                                            return [2, c.sent()];
                                                        case 7:
                                                            return l = e, s.has(l.address) ? [2, null] : (s.add(l.address), [4, this.approveFungibleToken({
                                                                tokenAddress: l.address,
                                                                accountAddress: n,
                                                                proxyAddress: a
                                                            })]);
                                                        case 8:
                                                            return [2, c.sent()];
                                                        case 9:
                                                            return [2]
                                                    }
                                                }))
                                            }))
                                        })))]
                                }
                            }))
                        }))
                    }, e.prototype._buyOrderValidationAndApprovals = function(e) {
                        var t, r = e.order,
                            n = e.counterOrder,
                            a = e.accountAddress;
                        return i(this, void 0, void 0, (function() {
                            var e, s;
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return (e = r.paymentToken) == g.NULL_ADDRESS ? [3, 4] : (s = (0, E.makeBigNumber)(r.basePrice), n ? [4, this._getRequiredAmountForTakingSellOrder(n)] : [3, 2]);
                                    case 1:
                                        s = o.sent(), o.label = 2;
                                    case 2:
                                        return [4, this.approveFungibleToken({
                                            accountAddress: a,
                                            tokenAddress: e,
                                            minimumAmount: s,
                                            proxyAddress: (null === (t = this._wyvernConfigOverride) || void 0 === t ? void 0 : t.wyvernTokenTransferProxyContractAddress) || y.WyvernProtocol.getTokenTransferProxyAddress(this._networkName)
                                        })];
                                    case 3:
                                        o.sent(), o.label = 4;
                                    case 4:
                                        return [4, this._wyvernProtocolReadOnly.wyvernExchange.validateOrderParameters_([r.exchange, r.maker, r.taker, r.feeRecipient, r.target, r.staticTarget, r.paymentToken], [r.makerRelayerFee, r.takerRelayerFee, r.makerProtocolFee, r.takerProtocolFee, r.basePrice, r.extra, r.listingTime, r.expirationTime, r.salt], r.feeMethod, r.side, r.saleKind, r.howToCall, r.calldata, r.replacementPattern, r.staticExtradata).callAsync({
                                            from: a
                                        })];
                                    case 5:
                                        if (!o.sent()) throw console.error(r), new Error("Failed to validate buy order parameters. Make sure you're on the right network!");
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype._ownsAssetOnChain = function(e) {
                        var t = e.accountAddress,
                            r = e.proxyAddress,
                            n = e.wyAsset,
                            a = e.schemaName;
                        return i(this, void 0, void 0, (function() {
                            var e, s, o;
                            return c(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return e = {
                                            tokenId: n.id || null,
                                            tokenAddress: n.address,
                                            schemaName: a
                                        }, s = new l.BigNumber("quantity" in n ? n.quantity : 1), [4, this.getAssetBalance({
                                            accountAddress: t,
                                            asset: e
                                        })];
                                    case 1:
                                        return i.sent().isGreaterThanOrEqualTo(s) ? [2, !0] : (o = r) ? [3, 3] : [4, this._getProxy(t)];
                                    case 2:
                                        o = i.sent(), i.label = 3;
                                    case 3:
                                        return (r = o) ? [4, this.getAssetBalance({
                                            accountAddress: r,
                                            asset: e
                                        })] : [3, 5];
                                    case 4:
                                        if (i.sent().isGreaterThanOrEqualTo(s)) return [2, !0];
                                        i.label = 5;
                                    case 5:
                                        return [2, !1]
                                }
                            }))
                        }))
                    }, e.prototype._getBuyFeeParameters = function(e, t, r) {
                        var n, a;
                        return this._validateFees(e, t), r ? (n = r.waitingForBestCounterOrder ? (0, E.makeBigNumber)(r.makerRelayerFee) : (0, E.makeBigNumber)(r.takerRelayerFee), a = r.waitingForBestCounterOrder ? (0, E.makeBigNumber)(r.takerRelayerFee) : (0, E.makeBigNumber)(r.makerRelayerFee)) : (n = (0, E.makeBigNumber)(e), a = (0, E.makeBigNumber)(t)), {
                            makerRelayerFee: n,
                            takerRelayerFee: a,
                            makerProtocolFee: (0, E.makeBigNumber)(0),
                            takerProtocolFee: (0, E.makeBigNumber)(0),
                            makerReferrerFee: (0, E.makeBigNumber)(0),
                            feeRecipient: g.OPENSEA_FEE_RECIPIENT,
                            feeMethod: T.FeeMethod.SplitFee
                        }
                    }, e.prototype._getSellFeeParameters = function(e, t, r, n) {
                        void 0 === n && (n = 0), this._validateFees(e, t);
                        var a = r ? g.NULL_ADDRESS : g.OPENSEA_FEE_RECIPIENT;
                        return {
                            makerRelayerFee: r ? (0, E.makeBigNumber)(e) : (0, E.makeBigNumber)(t),
                            takerRelayerFee: r ? (0, E.makeBigNumber)(t) : (0, E.makeBigNumber)(e),
                            makerProtocolFee: (0, E.makeBigNumber)(0),
                            takerProtocolFee: (0, E.makeBigNumber)(0),
                            makerReferrerFee: (0, E.makeBigNumber)(n),
                            feeRecipient: a,
                            feeMethod: T.FeeMethod.SplitFee
                        }
                    }, e.prototype._validateFees = function(e, t) {
                        var r = g.INVERSE_BASIS_POINT / 100;
                        if (e > g.INVERSE_BASIS_POINT || t > g.INVERSE_BASIS_POINT) throw new Error("Invalid buyer/seller fees: must be less than ".concat(r, "%"));
                        if (e < 0 || t < 0) throw new Error("Invalid buyer/seller fees: must be at least 0%")
                    }, e.prototype._getTimeParameters = function(e) {
                        var t = e.expirationTimestamp,
                            r = void 0 === t ? (0, E.getMaxOrderExpirationTimestamp)() : t,
                            n = e.listingTimestamp,
                            a = e.waitingForBestCounterOrder,
                            s = void 0 !== a && a,
                            o = e.isMatchingOrder,
                            i = void 0 !== o && o,
                            c = new Date;
                        c.setMonth(c.getMonth() + g.MAX_EXPIRATION_MONTHS);
                        var d = Math.round(c.getTime() / 1e3),
                            u = Math.round(Date.now() / 1e3);
                        if (!i && 0 === r) throw new Error("Expiration time cannot be 0");
                        if (n && n < u) throw new Error("Listing time cannot be in the past.");
                        if (n && n >= r) throw new Error("Listing time must be before the expiration time.");
                        if (s && n) throw new Error("Cannot schedule an English auction for the future.");
                        if (parseInt(r.toString()) != r) throw new Error("Expiration timestamp must be a whole number of seconds");
                        if (r > d) throw new Error("Expiration time must not exceed six months from now");
                        if (s) {
                            n = r, r += g.ORDER_MATCHING_LATENCY_SECONDS;
                            var l = u + 60 * g.MIN_EXPIRATION_MINUTES;
                            if (!i && n < l) throw new Error("Expiration time must be at least ".concat(g.MIN_EXPIRATION_MINUTES, " minutes from now"))
                        } else {
                            var h = (n = n || Math.round(Date.now() / 1e3 - 100)) + 60 * g.MIN_EXPIRATION_MINUTES;
                            if (!i && r < h) throw new Error("Expiration time must be at least ".concat(g.MIN_EXPIRATION_MINUTES, " minutes from the listing date"))
                        }
                        return {
                            listingTime: (0, E.makeBigNumber)(n),
                            expirationTime: (0, E.makeBigNumber)(r)
                        }
                    }, e.prototype._getPriceParameters = function(e, t, r, n, a, s, o) {
                        return void 0 === s && (s = !1), i(this, void 0, void 0, (function() {
                            var i, d, u, l, h, m, p, v;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return i = null != a ? n - a : 0, d = t.toLowerCase(), u = t == g.NULL_ADDRESS, [4, this.api.getPaymentTokens({
                                            address: d
                                        })];
                                    case 1:
                                        if (l = c.sent().tokens, h = l[0], isNaN(n) || null == n || n < 0) throw new Error("Starting price must be a number >= 0");
                                        if (!u && !h) throw new Error("No ERC-20 token found for '".concat(d, "'"));
                                        if (u && s) throw new Error("English auctions must use wrapped ETH or an ERC-20 token.");
                                        if (u && e === T.OrderSide.Buy) throw new Error("Offers must use wrapped ETH or an ERC-20 token.");
                                        if (i < 0) throw new Error("End price must be less than or equal to the start price.");
                                        if (i > 0 && 0 == r) throw new Error("Expiration time must be set if order will change in price.");
                                        if (o && !s) throw new Error("Reserve prices may only be set on English auctions.");
                                        if (o && o < n) throw new Error("Reserve price must be greater than or equal to the start amount.");
                                        return m = u ? (0, E.makeBigNumber)(this.web3.utils.toWei(n.toString(), "ether")).integerValue() : y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(n), h.decimals), p = u ? (0, E.makeBigNumber)(this.web3.utils.toWei(i.toString(), "ether")).integerValue() : y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(i), h.decimals), v = o ? u ? (0, E.makeBigNumber)(this.web3.utils.toWei(o.toString(), "ether")).integerValue() : y.WyvernProtocol.toBaseUnitAmount((0, E.makeBigNumber)(o), h.decimals) : void 0, [2, {
                                            basePrice: m,
                                            extra: p,
                                            paymentToken: d,
                                            reservePrice: v
                                        }]
                                }
                            }))
                        }))
                    }, e.prototype._getMetadata = function(e, t) {
                        var r = t || e.metadata.referrerAddress;
                        if (r && (0, h.isValidAddress)(r)) return r
                    }, e.prototype._atomicMatch = function(e) {
                        var t = e.buy,
                            r = e.sell,
                            n = e.accountAddress,
                            a = e.metadata,
                            s = void 0 === a ? g.NULL_BLOCK_HASH : a;
                        return i(this, void 0, void 0, (function() {
                            var e, a, o, i, d, u, l, h, m;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return a = !0, o = !0, r.maker.toLowerCase() != n.toLowerCase() ? [3, 2] : [4, this._sellOrderValidationAndApprovals({
                                            order: r,
                                            accountAddress: n
                                        })];
                                    case 1:
                                        return c.sent(), o = !1, [3, 6];
                                    case 2:
                                        return t.maker.toLowerCase() != n.toLowerCase() ? [3, 6] : [4, this._buyOrderValidationAndApprovals({
                                            order: t,
                                            counterOrder: r,
                                            accountAddress: n
                                        })];
                                    case 3:
                                        return c.sent(), a = !1, t.paymentToken != g.NULL_ADDRESS ? [3, 5] : [4, this._getRequiredAmountForTakingSellOrder(r)];
                                    case 4:
                                        e = c.sent(), c.label = 5;
                                    case 5:
                                        return [3, 6];
                                    case 6:
                                        return [4, this._validateMatch({
                                            buy: t,
                                            sell: r,
                                            accountAddress: n,
                                            shouldValidateBuy: a,
                                            shouldValidateSell: o
                                        })];
                                    case 7:
                                        c.sent(), this._dispatch(T.EventType.MatchOrders, {
                                            buy: t,
                                            sell: r,
                                            accountAddress: n,
                                            matchMetadata: s
                                        }), d = {
                                            from: n,
                                            value: e
                                        }, u = [
                                            [t.exchange, t.maker, t.taker, t.feeRecipient, t.target, t.staticTarget, t.paymentToken, r.exchange, r.maker, r.taker, r.feeRecipient, r.target, r.staticTarget, r.paymentToken],
                                            [t.makerRelayerFee, t.takerRelayerFee, t.makerProtocolFee, t.takerProtocolFee, t.basePrice, t.extra, t.listingTime, t.expirationTime, t.salt, r.makerRelayerFee, r.takerRelayerFee, r.makerProtocolFee, r.takerProtocolFee, r.basePrice, r.extra, r.listingTime, r.expirationTime, r.salt],
                                            [t.feeMethod, t.side, t.saleKind, t.howToCall, r.feeMethod, r.side, r.saleKind, r.howToCall], t.calldata, r.calldata, t.replacementPattern, r.replacementPattern, t.staticExtradata, r.staticExtradata, [t.v || 0, r.v || 0],
                                            [t.r || g.NULL_BLOCK_HASH, t.s || g.NULL_BLOCK_HASH, r.r || g.NULL_BLOCK_HASH, r.s || g.NULL_BLOCK_HASH, s]
                                        ], c.label = 8;
                                    case 8:
                                        return c.trys.push([8, 10, , 11]), [4, this._wyvernProtocolReadOnly.wyvernExchange.atomicMatch_(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10]).estimateGasAsync(d)];
                                    case 9:
                                        return l = c.sent(), d.gas = this._correctGasAmount(l), [3, 11];
                                    case 10:
                                        throw h = c.sent(), console.error("Failed atomic match with args: ", u, h), new Error('Oops, the Ethereum network rejected this transaction :( The OpenSea devs have been alerted, but this problem is typically due an item being locked or untransferrable. The exact error was "'.concat(h instanceof Error ? h.message.substr(0, _.MAX_ERROR_LENGTH) : "unknown", '..."'));
                                    case 11:
                                        return c.trys.push([11, 13, , 14]), this.logger("Fulfilling order with gas set to ".concat(d.gas)), [4, this._wyvernProtocol.wyvernExchange.atomicMatch_(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10]).sendTransactionAsync(d)];
                                    case 12:
                                        return i = c.sent(), [3, 14];
                                    case 13:
                                        throw m = c.sent(), console.error(m), this._dispatch(T.EventType.TransactionDenied, {
                                            error: m,
                                            buy: t,
                                            sell: r,
                                            accountAddress: n,
                                            matchMetadata: s
                                        }), new Error('Failed to authorize transaction: "'.concat(m instanceof Error && m.message ? m.message : "user denied", '..."'));
                                    case 14:
                                        return [2, i]
                                }
                            }))
                        }))
                    }, e.prototype._getRequiredAmountForTakingSellOrder = function(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r, n, a;
                            return c(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, this.getCurrentPrice(e)];
                                    case 1:
                                        return t = s.sent(), r = (0, E.estimateCurrentPrice)(e), n = l.BigNumber.max(t, r), e.takerRelayerFee = (0, E.makeBigNumber)(e.takerRelayerFee), a = e.takerRelayerFee.div(g.INVERSE_BASIS_POINT), [2, a.times(n).plus(n).integerValue(l.BigNumber.ROUND_CEIL)]
                                }
                            }))
                        }))
                    }, e.prototype.getNonce = function(e) {
                        return this._wyvernProtocol.wyvernExchange.nonces(e).callAsync()
                    }, e.prototype.authorizeOrder = function(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r, a, s, o, i;
                            return c(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        t = e.maker, this._dispatch(T.EventType.CreateOrder, {
                                            order: e,
                                            accountAddress: e.maker
                                        }), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 4, , 5]), [4, this.getNonce(t)];
                                    case 2:
                                        return r = c.sent(), a = {
                                            maker: e.maker,
                                            exchange: e.exchange,
                                            taker: e.taker,
                                            makerRelayerFee: e.makerRelayerFee.toString(),
                                            takerRelayerFee: e.takerRelayerFee.toString(),
                                            makerProtocolFee: e.makerProtocolFee.toString(),
                                            takerProtocolFee: e.takerProtocolFee.toString(),
                                            feeRecipient: e.feeRecipient,
                                            feeMethod: e.feeMethod,
                                            side: e.side,
                                            saleKind: e.saleKind,
                                            target: e.target,
                                            howToCall: e.howToCall,
                                            calldata: e.calldata,
                                            replacementPattern: e.replacementPattern,
                                            staticTarget: e.staticTarget,
                                            staticExtradata: e.staticExtradata,
                                            paymentToken: e.paymentToken,
                                            basePrice: e.basePrice.toString(),
                                            extra: e.extra.toString(),
                                            listingTime: e.listingTime.toString(),
                                            expirationTime: e.expirationTime.toString(),
                                            salt: e.salt.toString()
                                        }, s = {
                                            types: g.EIP_712_ORDER_TYPES,
                                            domain: {
                                                name: g.EIP_712_WYVERN_DOMAIN_NAME,
                                                version: g.EIP_712_WYVERN_DOMAIN_VERSION,
                                                chainId: this._networkName == T.Network.Main ? 1 : 4,
                                                verifyingContract: e.exchange
                                            },
                                            primaryType: "Order",
                                            message: n(n({}, a), {
                                                nonce: r.toNumber()
                                            })
                                        }, [4, (0, E.signTypedDataAsync)(this.web3, s, t)];
                                    case 3:
                                        return o = c.sent(), [2, n(n({}, o), {
                                            nonce: r.toNumber()
                                        })];
                                    case 4:
                                        throw i = c.sent(), this._dispatch(T.EventType.OrderDenied, {
                                            order: e,
                                            accountAddress: t
                                        }), i;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype._getSchemaName = function(e) {
                        return "assetContract" in e ? e.assetContract.schemaName : e.schemaName
                    }, e.prototype._getSchema = function(e) {
                        var t = e || T.WyvernSchemaName.ERC721,
                            r = f.schemas[this._networkName].filter((function(e) {
                                return e.name == t
                            }))[0];
                        if (!r) throw new Error("Trading for this asset (".concat(t, ") is not yet supported. Please contact us or check back later!"));
                        return r
                    }, e.prototype._dispatch = function(e, t) {
                        this._emitter.emit(e, t)
                    }, e.prototype._getClientsForRead = function(e) {
                        return e.retries > 0 ? {
                            web3: this.web3,
                            wyvernProtocol: this._wyvernProtocol
                        } : {
                            web3: this.web3ReadOnly,
                            wyvernProtocol: this._wyvernProtocolReadOnly
                        }
                    }, e.prototype._confirmTransaction = function(e, t, r, a) {
                        return i(this, void 0, void 0, (function() {
                            var s, o;
                            return c(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return s = {
                                            transactionHash: e,
                                            event: t
                                        }, this.logger("Transaction started: ".concat(r)), e != g.NULL_BLOCK_HASH ? [3, 4] : (this._dispatch(T.EventType.TransactionCreated, {
                                            event: t
                                        }), a ? [3, 2] : (this.logger("Unknown action, waiting 1 minute: ".concat(r)), [4, (0, E.delay)(6e4)]));
                                    case 1:
                                        return i.sent(), [2];
                                    case 2:
                                        return [4, this._pollCallbackForConfirmation(t, r, a)];
                                    case 3:
                                        return [2, i.sent()];
                                    case 4:
                                        return i.trys.push([4, 6, , 7]), this._dispatch(T.EventType.TransactionCreated, s), [4, (0, E.confirmTransaction)(this.web3, e)];
                                    case 5:
                                        return i.sent(), this.logger("Transaction succeeded: ".concat(r)), this._dispatch(T.EventType.TransactionConfirmed, s), [3, 7];
                                    case 6:
                                        throw o = i.sent(), this.logger("Transaction failed: ".concat(r)), this._dispatch(T.EventType.TransactionFailed, n(n({}, s), {
                                            error: o
                                        })), o;
                                    case 7:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype._pollCallbackForConfirmation = function(e, t, r) {
                        return i(this, void 0, void 0, (function() {
                            var n = this;
                            return c(this, (function(a) {
                                return [2, new Promise((function(a, s) {
                                    var o = function(d) {
                                        return i(n, void 0, void 0, (function() {
                                            return c(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, r()];
                                                    case 1:
                                                        return n.sent() ? (this.logger("Transaction succeeded: ".concat(t)), this._dispatch(T.EventType.TransactionConfirmed, {
                                                            event: e
                                                        }), [2, a()]) : d <= 0 ? [2, s()] : (d % 10 == 0 && this.logger("Tested transaction ".concat(60 - d + 1, " times: ").concat(t)), [4, (0, E.delay)(5e3)]);
                                                    case 2:
                                                        return n.sent(), [2, o(d - 1)]
                                                }
                                            }))
                                        }))
                                    };
                                    return o(60)
                                }))]
                            }))
                        }))
                    }, e.prototype.isAuthenticatedProxyRevoked = function(e) {
                        return i(this, void 0, void 0, (function() {
                            return c(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this._wyvernProtocol.getAuthenticatedProxy(e)];
                                    case 1:
                                        return [2, t.sent().revoked().callAsync()]
                                }
                            }))
                        }))
                    }, e.prototype.revokeAuthenticatedProxyAccess = function(e) {
                        return i(this, void 0, void 0, (function() {
                            return c(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this._wyvernProtocol.getAuthenticatedProxy(e)];
                                    case 1:
                                        return [2, t.sent().setRevoke(!0).sendTransactionAsync({
                                            from: e
                                        })]
                                }
                            }))
                        }))
                    }, e.prototype.unrevokeAuthenticatedProxyAccess = function(e) {
                        return i(this, void 0, void 0, (function() {
                            return c(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this._wyvernProtocol.getAuthenticatedProxy(e)];
                                    case 1:
                                        return [2, t.sent().setRevoke(!1).sendTransactionAsync({
                                            from: e
                                        })]
                                }
                            }))
                        }))
                    }, e
                }();
            t.OpenSeaPort = P
        }
    }
]);