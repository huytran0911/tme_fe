(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flowbite$2d$react$40$0$2e$12$2e$14_reac_24b3641a15409b45d70a0e9baf21f6c7$2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Navbar$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/flowbite-react@0.12.14_reac_24b3641a15409b45d70a0e9baf21f6c7/node_modules/flowbite-react/dist/components/Navbar/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flowbite$2d$react$40$0$2e$12$2e$14_reac_24b3641a15409b45d70a0e9baf21f6c7$2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Navbar$2f$NavbarCollapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/flowbite-react@0.12.14_reac_24b3641a15409b45d70a0e9baf21f6c7/node_modules/flowbite-react/dist/components/Navbar/NavbarCollapse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flowbite$2d$react$40$0$2e$12$2e$14_reac_24b3641a15409b45d70a0e9baf21f6c7$2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Navbar$2f$NavbarLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/flowbite-react@0.12.14_reac_24b3641a15409b45d70a0e9baf21f6c7/node_modules/flowbite-react/dist/components/Navbar/NavbarLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flowbite$2d$react$40$0$2e$12$2e$14_reac_24b3641a15409b45d70a0e9baf21f6c7$2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Navbar$2f$NavbarToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/flowbite-react@0.12.14_reac_24b3641a15409b45d70a0e9baf21f6c7/node_modules/flowbite-react/dist/components/Navbar/NavbarToggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/use-intl@4.6.1_react@19.2.0/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.6.1_next@16.0.3_e6be4854f8439f45787e7743b3fd0c4f/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const navItems = (locale)=>[
        {
            key: "nav.home",
            href: `/${locale}`
        },
        {
            key: "nav.about",
            href: `/${locale}/gioi-thieu`
        },
        {
            key: "nav.support",
            href: "#"
        },
        {
            key: "nav.newItems",
            href: `/${locale}/new-products`
        },
        {
            key: "nav.promo",
            href: "#"
        },
        {
            key: "nav.order",
            href: "#"
        },
        {
            key: "nav.contact",
            href: `/${locale}/lien-he`
        }
    ];
const SearchIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-4 w-4 text-slate-500",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M12.9 14.32a6 6 0 1 1 1.414-1.414l2.387 2.387a1 1 0 0 1-1.414 1.414L12.9 14.32ZM12 9a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 40,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SearchIcon;
const VietnamFlag = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 16",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "vnClip",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "24",
                        height: "16",
                        rx: "2"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 51,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#vnClip)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "24",
                        height: "16",
                        fill: "#da251d"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 56,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "12,4 12.9,6.8 15.8,6.8 13.4,8.5 14.4,11.2 12,9.5 9.6,11.2 10.6,8.5 8.2,6.8 11.1,6.8",
                        fill: "#ffff00"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 57,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 55,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "24",
                height: "16",
                rx: "2",
                fill: "none",
                stroke: "#00000020",
                strokeWidth: "0.5"
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = VietnamFlag;
const UKFlag = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 16",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "ukClip",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "24",
                        height: "16",
                        rx: "2"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 69,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 68,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#ukClip)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "24",
                        height: "16",
                        fill: "#012169"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 74,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L24,16 M24,0 L0,16",
                        stroke: "#fff",
                        strokeWidth: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 75,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L24,16",
                        stroke: "#C8102E",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 76,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M24,0 L0,16",
                        stroke: "#C8102E",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 77,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12,0 V16 M0,8 H24",
                        stroke: "#fff",
                        strokeWidth: "5"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 78,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12,0 V16 M0,8 H24",
                        stroke: "#C8102E",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 79,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 73,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "24",
                height: "16",
                rx: "2",
                fill: "none",
                stroke: "#00000020",
                strokeWidth: "0.5"
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 81,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = UKFlag;
function Header({ onToggleSidebar }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Header");
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || "/";
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, isAuthenticated, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { itemCount, openCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartContext"])();
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const normalizePath = (path)=>{
        if (!path) return "/";
        const trimmed = path === "/" ? "/" : path.replace(/\/+$/, "");
        return trimmed || "/";
    };
    // Normalized current path (with locale) for active nav check
    const normalizedPath = normalizePath(pathname);
    // Build path for locale switch without duplicating locale prefix
    const trimLocale = (path)=>path.replace(/^\/(vi|en)/, "") || "/";
    const ensureLeadingSlash = (path)=>path.startsWith("/") ? path : `/${path}`;
    const normalizedPathWithoutLocale = ensureLeadingSlash(trimLocale(pathname));
    const localizedPath = (targetLocale)=>{
        const suffix = normalizedPathWithoutLocale === "/" ? "" : normalizedPathWithoutLocale;
        return `/${targetLocale}${suffix}`;
    };
    const isNavActive = (href)=>{
        const target = normalizePath(href);
        // Home should only match exactly locale root, not every route starting with /vi or /en.
        if (target === `/${locale}`) return normalizedPath === target;
        return normalizedPath === target || normalizedPath.startsWith(`${target}/`);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handler = {
                "Header.useEffect.handler": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setDropdownOpen(false);
                    }
                }
            }["Header.useEffect.handler"];
            document.addEventListener("mousedown", handler);
            return ({
                "Header.useEffect": ()=>document.removeEventListener("mousedown", handler)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const initials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Header.useMemo[initials]": ()=>{
            if (!user?.userName) return "U";
            const parts = user.userName.split(" ");
            if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "U";
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
    }["Header.useMemo[initials]"], [
        user
    ]);
    const handleLogout = ()=>{
        logout();
        setDropdownOpen(false);
        router.push(`/${locale}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onToggleSidebar,
                                        className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-100 transition hover:border-primary hover:text-primary md:hidden",
                                        "aria-label": t("toggleSidebar"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-4 w-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 1.8,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M4 6h16M4 12h16M4 18h16"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${locale}`,
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-8 w-8 items-center justify-center rounded-md bg-primary text-xs font-bold text-white shadow-inner",
                                                children: "TME"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden leading-tight sm:block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs font-semibold text-white",
                                                        children: "TME"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-slate-300",
                                                        children: "Thien Minh Electronics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden flex-1 md:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "search",
                                            placeholder: t("searchPlaceholder"),
                                            className: "w-full rounded-full bg-slate-100/95 px-3 py-1.5 text-sm text-slate-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#EE4D2D]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "absolute right-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow hover:bg-primary-dark",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center gap-3 md:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-4 w-4 text-slate-200",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 1.5,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M2.25 6.75c0 8.284 6.716 15 15 15H21a.75.75 0 0 0 .75-.75v-1.372a.75.75 0 0 0-.563-.726l-4.423-1.106a.75.75 0 0 0-.83.343l-.97 1.622a.75.75 0 0 1-.82.334 12.035 12.035 0 0 1-7.182-7.182.75.75 0 0 1 .334-.82l1.622-.97a.75.75 0 0 0 .343-.83L6.098 3.813a.75.75 0 0 0-.726-.563H4.002a.75.75 0 0 0-.75.75v2.75Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "leading-tight",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-slate-300",
                                                        children: t("hotlineLabel")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] font-semibold text-white",
                                                        children: "028.3957.3224"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        ref: dropdownRef,
                                        children: isAuthenticated && user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setDropdownOpen((prev)=>!prev),
                                                    className: "group flex items-center gap-2 rounded-lg px-2 py-1.5 text-white transition hover:bg-slate-700/60",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-xs font-bold text-white shadow-inner",
                                                            children: initials
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Header.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "hidden text-left lg:block",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-300",
                                                                    children: t("userMenu.greeting")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Header.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "max-w-[100px] truncate text-[11px] font-semibold text-white",
                                                                    children: user.userName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Header.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Header.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: `h-3.5 w-3.5 text-slate-300 transition-transform ${dropdownOpen ? "rotate-180" : ""}`,
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: 2,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M19 9l-7 7-7-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Header.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this),
                                                dropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-0 top-full z-50 mt-2 w-52 origin-top-right animate-in fade-in slide-in-from-top-2 rounded-xl border border-slate-200 bg-white py-1 shadow-xl sm:w-56",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-b border-slate-100 px-4 py-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-sm font-bold text-white",
                                                                        children: initials
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Header.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "min-w-0 flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "truncate text-sm font-semibold text-slate-900",
                                                                                children: user.userName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Header.tsx",
                                                                                lineNumber: 255,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            user.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "truncate text-xs text-slate-500",
                                                                                children: user.role
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Header.tsx",
                                                                                lineNumber: 259,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Header.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Header.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "py-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/${locale}/account`,
                                                                    className: "flex items-center gap-3 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50",
                                                                    onClick: ()=>setDropdownOpen(false),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "h-4 w-4 text-slate-400",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: 1.5,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Header.tsx",
                                                                                lineNumber: 273,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Header.tsx",
                                                                            lineNumber: 272,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        t("userMenu.myAccount")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Header.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/${locale}/account/orders`,
                                                                    className: "flex items-center gap-3 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50",
                                                                    onClick: ()=>setDropdownOpen(false),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "h-4 w-4 text-slate-400",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: 1.5,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Header.tsx",
                                                                                lineNumber: 283,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Header.tsx",
                                                                            lineNumber: 282,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        t("userMenu.myOrders")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Header.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/${locale}/account/wishlist`,
                                                                    className: "flex items-center gap-3 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50",
                                                                    onClick: ()=>setDropdownOpen(false),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "h-4 w-4 text-slate-400",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: 1.5,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Header.tsx",
                                                                                lineNumber: 293,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Header.tsx",
                                                                            lineNumber: 292,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        t("userMenu.wishlist")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Header.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/${locale}/account/addresses`,
                                                                    className: "flex items-center gap-3 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50",
                                                                    onClick: ()=>setDropdownOpen(false),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "h-4 w-4 text-slate-400",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: 1.5,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Header.tsx",
                                                                                    lineNumber: 303,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Header.tsx",
                                                                                    lineNumber: 304,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/Header.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        t("userMenu.addresses")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Header.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Header.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-t border-slate-100 py-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "flex w-full items-center gap-3 px-4 py-2 text-sm text-red-600 transition hover:bg-red-50",
                                                                onClick: handleLogout,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "h-4 w-4",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: 1.5,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Header.tsx",
                                                                            lineNumber: 318,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Header.tsx",
                                                                        lineNumber: 317,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    t("userMenu.logout")
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Header.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${locale}/auth/login`,
                                            className: "group flex items-center gap-2 rounded-lg px-2 py-1.5 text-white transition hover:bg-slate-700/60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-6 w-6 text-slate-200",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 1.5,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden text-left lg:block",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] font-medium text-white",
                                                        children: t("loginOrRegister")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${locale}/account/orders`,
                                        className: "group flex items-center gap-2 rounded-lg px-2 py-1.5 text-white transition hover:bg-slate-700/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-6 w-6 text-slate-200",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 1.5,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden text-left lg:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] font-medium text-white",
                                                    children: t("orders")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 361,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openCart,
                                        className: "group flex items-center gap-2 rounded-lg px-2 py-1.5 text-white transition hover:bg-slate-700/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "h-6 w-6 text-slate-200",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 1.5,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.09-.773 2.328-1.87l1.704-7.636a1.5 1.5 0 00-1.462-1.822H6.019M7.5 14.25L5.106 5.272M7.5 14.25h8.25m-8.25 0l-1.5-7.5m10.5 7.5l1.5-7.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Header.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 17
                                                    }, this),
                                                    itemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white",
                                                        children: itemCount > 99 ? "99+" : itemCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden text-left lg:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] font-medium text-white",
                                                    children: t("cart")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 388,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 367,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 border-l border-slate-600 pl-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: localizedPath("vi"),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center gap-1 rounded-md px-1.5 py-1 text-[10px] font-semibold transition", locale === "vi" ? "bg-slate-700 text-orange-300" : "text-slate-400 hover:bg-slate-800 hover:text-white"),
                                                title: "Tiếng Việt",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VietnamFlag, {
                                                        className: "h-3 w-[18px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "VI"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: localizedPath("en"),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center gap-1 rounded-md px-1.5 py-1 text-[10px] font-semibold transition", locale === "en" ? "bg-slate-700 text-orange-300" : "text-slate-400 hover:bg-slate-800 hover:text-white"),
                                                title: "English",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UKFlag, {
                                                        className: "h-3 w-[18px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "EN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 408,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-6xl items-center gap-2 px-4 pb-2 md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "search",
                                        placeholder: t("searchPlaceholder"),
                                        className: "w-full rounded-full bg-slate-100/95 px-3 py-1.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#EE4D2D]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "absolute right-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow hover:bg-primary-dark",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 436,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 432,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 426,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openCart,
                                className: "relative flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-4 w-4",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 1.6,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M2.25 3h1.386a.75.75 0 0 1 .724.578l.383 1.722M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.04-1.81 1.297-3.79.52-5.04-.56-.91-1.707-1.96-4.238-1.96H7.53m0 0L6.743 5.3M7.53 7.25h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 444,
                                        columnNumber: 13
                                    }, this),
                                    itemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-semibold text-white",
                                        children: itemCount > 99 ? "99+" : itemCount
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 459,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 439,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b bg-white shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-6xl items-center gap-3 overflow-x-auto px-4 py-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flowbite$2d$react$40$0$2e$12$2e$14_reac_24b3641a15409b45d70a0e9baf21f6c7$2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Navbar$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                        fluid: true,
                        rounded: true,
                        className: "w-full border-0 bg-transparent p-0 flex h-6 items-stretch gap-6 text-sm font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flowbite$2d$react$40$0$2e$12$2e$14_reac_24b3641a15409b45d70a0e9baf21f6c7$2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Navbar$2f$NavbarToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavbarToggle"], {
                                className: "md:hidden"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 470,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flowbite$2d$react$40$0$2e$12$2e$14_reac_24b3641a15409b45d70a0e9baf21f6c7$2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Navbar$2f$NavbarCollapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavbarCollapse"], {
                                children: navItems(locale).map((item)=>{
                                    const active = isNavActive(item.href);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flowbite$2d$react$40$0$2e$12$2e$14_reac_24b3641a15409b45d70a0e9baf21f6c7$2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Navbar$2f$NavbarLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavbarLink"], {
                                        href: item.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-sm font-medium text-slate-700 hover:text-[#EE4D2D] hover:underline", active && "text-[#EE4D2D] underline underline-offset-8 decoration-2"),
                                        children: t(item.key)
                                    }, item.key, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 475,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 469,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 468,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(Header, "lRDJ0LfuI9vKL4EfFcbfgaPfEL0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartContext"]
    ];
});
_c3 = Header;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SearchIcon");
__turbopack_context__.k.register(_c1, "VietnamFlag");
__turbopack_context__.k.register(_c2, "UKFlag");
__turbopack_context__.k.register(_c3, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/categories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCategories",
    ()=>getAllCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/httpClient.ts [app-client] (ecmascript)");
;
const CATEGORIES_URL = "/client/v1/categories";
async function getAllCategories() {
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(CATEGORIES_URL);
    if (!envelope.success) {
        throw new Error(envelope.error || "Khong tai duoc danh muc.");
    }
    const normalize = (node, parentId)=>{
        const rawChildren = node.categories?.length ? node.categories : node.children?.length ? node.children : undefined;
        const children = rawChildren?.length ? rawChildren.map((child)=>normalize(child, node.id)) : undefined;
        return {
            id: node.id,
            name: node.name,
            nameEn: node.nameEn,
            parentId: parentId ?? node.parentId ?? null,
            children
        };
    };
    return envelope.data.map((item)=>normalize(item, null));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useCategories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/categories.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CATEGORY_QUERY_KEY = [
    "categories"
];
function useCategories() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: CATEGORY_QUERY_KEY,
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCategories"],
        staleTime: 24 * 60 * 60 * 1000,
        gcTime: 48 * 60 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        placeholderData: {
            "useCategories.useQuery": (previousData)=>previousData
        }["useCategories.useQuery"]
    });
}
_s(useCategories, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/CategorySelectionContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategorySelectionProvider",
    ()=>CategorySelectionProvider,
    "useCategorySelection",
    ()=>useCategorySelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CategorySelectionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CategorySelectionProvider({ children }) {
    _s();
    const [selectedCategoryId, setSelectedCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const value = {
        selectedCategoryId,
        selectCategory: setSelectedCategoryId
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategorySelectionContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/layout/CategorySelectionContext.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
_s(CategorySelectionProvider, "bVdoYxvOV87rAdCPJtwevRqjQSA=");
_c = CategorySelectionProvider;
function useCategorySelection() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CategorySelectionContext);
    if (!ctx) {
        throw new Error("useCategorySelection must be used within CategorySelectionProvider");
    }
    return ctx;
}
_s1(useCategorySelection, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "CategorySelectionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/category/CategorySidebarV3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategorySidebarV3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@headlessui+react@2.2.9_rea_a25c7d5210e847ee7f3967624984dcab/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@headlessui+react@2.2.9_rea_a25c7d5210e847ee7f3967624984dcab/node_modules/@headlessui/react/dist/components/disclosure/disclosure.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@headlessui+react@2.2.9_rea_a25c7d5210e847ee7f3967624984dcab/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/use-intl@4.6.1_react@19.2.0/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.6.1_next@16.0.3_e6be4854f8439f45787e7743b3fd0c4f/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useCategories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CategorySelectionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/CategorySelectionContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const L1_WIDTH = 220;
const L2_WIDTH = 220;
const L3_WIDTH = 200;
const L4_WIDTH = 200;
const CLOSE_DELAY = 200;
const PANEL_MAX_HEIGHT = 520;
function normalizeNode(node, groupId) {
    return {
        id: node.id,
        name: node.name,
        nameEn: node.nameEn,
        parentId: node.parentId ?? null,
        groupId,
        sortOrder: null,
        isActive: true,
        children: node.children?.length ? node.children.map((child)=>normalizeNode(child, groupId)) : []
    };
}
function buildGroupsFromCategories(categories) {
    return categories.map((cat, index)=>{
        const groupId = cat.id;
        return {
            id: groupId,
            name: cat.name,
            nameEn: cat.nameEn,
            sort: index,
            categories: cat.children?.length ? cat.children.map((child)=>normalizeNode(child, groupId)) : []
        };
    });
}
function matchText(query, ...labels) {
    if (!query.trim()) return false;
    const lower = query.trim().toLowerCase();
    return labels.some((label)=>(label ?? "").toLowerCase().includes(lower));
}
function filterGroups(groups, query) {
    if (!query.trim()) return groups;
    const filtered = [];
    const walk = (nodes)=>{
        const result = [];
        for (const node of nodes){
            const children = walk(node.children ?? []);
            if (matchText(query, node.name, node.nameEn) || children.length) {
                result.push({
                    ...node,
                    children
                });
            }
        }
        return result;
    };
    for (const group of groups){
        const categories = walk(group.categories);
        if (matchText(query, group.name, group.nameEn) || categories.length) {
            filtered.push({
                ...group,
                categories
            });
        }
    }
    return filtered;
}
function getLabel(node, locale) {
    if (locale === "vi") return node.name;
    return node.nameEn?.trim() ? node.nameEn : node.name;
}
const ITEM_HEIGHT = 32; // Approximate height of each menu item in pixels
const PANEL_PADDING = 12; // Padding inside panel
function estimatePanelHeight(itemCount) {
    return Math.min(itemCount * ITEM_HEIGHT + PANEL_PADDING, PANEL_MAX_HEIGHT);
}
function calcOffsetWithFlip(itemTop, containerTop, itemHeight, childItemCount) {
    const offset = itemTop - containerTop;
    const estimatedPanelHeight = estimatePanelHeight(childItemCount);
    const viewportHeight = ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable";
    const absoluteTop = itemTop;
    const margin = 20; // Minimum margin from viewport bottom
    // Check if panel would overflow viewport bottom
    if (absoluteTop + estimatedPanelHeight > viewportHeight - margin) {
        // Flip: align panel bottom with the hovered item bottom
        const flippedOffset = offset - estimatedPanelHeight + itemHeight;
        return Math.max(0, flippedOffset);
    }
    return offset;
}
function PopupPanel({ left, top, width, items, locale, activeId, depth, onHoverItem, onNavigate, onMouseEnter, onMouseLeave }) {
    if (!items.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute z-[100]",
        style: {
            left,
            top
        },
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-auto max-h-[70vh] overflow-y-auto bg-white p-1.5 shadow-lg dark:bg-slate-900 scrollbar-thin",
            style: {
                width,
                maxHeight: PANEL_MAX_HEIGHT
            },
            role: "menu",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-0.5",
                children: items.map((item)=>{
                    const isActive = activeId === item.id;
                    const hasChildren = item.children?.length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onMouseEnter: (e)=>onHoverItem(item.id, e),
                        onFocus: (e)=>onHoverItem(item.id, e),
                        onClick: ()=>onNavigate(item),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex w-full items-center justify-between rounded-sm px-2.5 py-1.5 text-sm text-slate-800 transition hover:bg-orange-50 hover:text-orange-600", isActive ? "bg-orange-50 text-orange-600 font-semibold ring-1 ring-orange-100 rounded-sm" : "rounded-sm", depth === 0 ? "text-base font-semibold" : ""),
                        role: "menuitem",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-left",
                                children: getLabel(item, locale)
                            }, void 0, false, {
                                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                lineNumber: 199,
                                columnNumber: 17
                            }, this),
                            hasChildren ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TriangleRightIcon, {
                                className: "ml-2 h-3 w-3 text-slate-500"
                            }, void 0, false, {
                                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                lineNumber: 200,
                                columnNumber: 32
                            }, this) : null
                        ]
                    }, item.id, true, {
                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                        lineNumber: 186,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/category/CategorySidebarV3.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/category/CategorySidebarV3.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_c = PopupPanel;
function CategorySidebarV3({ groups: propGroups, onCategoryClick, className }) {
    _s();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("CategoryMenu");
    const { data, isLoading, isError, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"])();
    const { selectCategory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CategorySelectionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategorySelection"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeGroupId, setActiveGroupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeLevel2Id, setActiveLevel2Id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeLevel3Id, setActiveLevel3Id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [offset2, setOffset2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [offset3, setOffset3] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [offset4, setOffset4] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const closeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CategorySidebarV3.useMemo[groups]": ()=>propGroups ?? (data ? buildGroupsFromCategories(data) : [])
    }["CategorySidebarV3.useMemo[groups]"], [
        data,
        propGroups
    ]);
    const filteredGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CategorySidebarV3.useMemo[filteredGroups]": ()=>filterGroups(groups, query)
    }["CategorySidebarV3.useMemo[filteredGroups]"], [
        groups,
        query
    ]);
    const activeGroup = filteredGroups.find((group)=>group.id === activeGroupId) ?? null;
    const level2List = activeGroup ? activeGroup.categories : [];
    const activeLevel2 = level2List.find((node)=>node.id === activeLevel2Id) ?? null;
    const level3List = activeLevel2?.children ?? [];
    const activeLevel3 = level3List.find((node)=>node.id === activeLevel3Id) ?? null;
    const level4List = activeLevel3?.children ?? [];
    const errorMessage = isError && (error instanceof Error ? error.message : t("error"));
    const handleCategoryClick = (node)=>{
        selectCategory(node.id);
        onCategoryClick?.(node);
        // Close popups after selection
        setActiveGroupId(null);
        setActiveLevel2Id(null);
        setActiveLevel3Id(null);
        // Navigate to products page with category ID
        router.push(`/${locale}/products?categoryId=${node.id}`);
    };
    const clearClose = ()=>{
        if (closeTimer.current !== null) {
            window.clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };
    const scheduleClose = ()=>{
        clearClose();
        closeTimer.current = window.setTimeout(()=>{
            setActiveGroupId(null);
            setActiveLevel2Id(null);
            setActiveLevel3Id(null);
        }, CLOSE_DELAY);
    };
    const containerTop = ()=>containerRef.current?.getBoundingClientRect().top ?? 0;
    const calcTop = (e, childItemCount)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        return calcOffsetWithFlip(rect.top, containerTop(), rect.height, childItemCount);
    };
    const handleEnterLevel1 = (id, e)=>{
        clearClose();
        const group = filteredGroups.find((g)=>g.id === id);
        const childCount = group?.categories?.length ?? 0;
        setActiveGroupId(id);
        setActiveLevel2Id(null);
        setActiveLevel3Id(null);
        setOffset2(calcTop(e, childCount));
    };
    const handleEnterLevel2 = (id, e)=>{
        clearClose();
        const node = level2List.find((n)=>n.id === id);
        const childCount = node?.children?.length ?? 0;
        setActiveLevel2Id(id);
        setActiveLevel3Id(null);
        setOffset3(calcTop(e, childCount));
    };
    const handleEnterLevel3 = (id, e)=>{
        clearClose();
        const node = level3List.find((n)=>n.id === id);
        const childCount = node?.children?.length ?? 0;
        setActiveLevel3Id(id);
        setOffset4(calcTop(e, childCount));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sticky top-[100px] space-y-3 rounded-lg border border-orange-100 bg-orange-50/80 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuIcon, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                    lineNumber: 315,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-600",
                                        children: t("categoriesLabel")
                                    }, void 0, false, {
                                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-semibold text-slate-900 dark:text-slate-100",
                                        children: t("componentList")
                                    }, void 0, false, {
                                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "lg:hidden rounded-xl border border-orange-200 px-3 py-2 text-xs font-medium text-orange-600 shadow-sm dark:border-orange-500/40 dark:text-orange-300",
                        onClick: ()=>setMobileOpen(true),
                        children: t("browseButton")
                    }, void 0, false, {
                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: query,
                        onChange: (e)=>setQuery(e.target.value),
                        type: "text",
                        placeholder: t("searchPlaceholder"),
                        className: "w-full rounded-xl border border-orange-100 bg-white px-3 py-2 pl-10 text-sm text-slate-800 shadow-inner focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    }, void 0, false, {
                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/category/CategorySidebarV3.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-3 text-sm text-slate-500 dark:text-slate-400",
                children: t("loading")
            }, void 0, false, {
                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                lineNumber: 350,
                columnNumber: 9
            }, this) : errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-3 text-sm text-red-600 dark:text-red-400",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                lineNumber: 354,
                columnNumber: 9
            }, this) : filteredGroups.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative hidden lg:block overflow-visible",
                ref: containerRef,
                onMouseEnter: clearClose,
                onMouseLeave: scheduleClose,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        role: "menu",
                        "aria-label": "Category group list",
                        children: filteredGroups.map((group)=>{
                            const isActive = group.id === activeGroupId;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onMouseEnter: (e)=>handleEnterLevel1(group.id, e),
                                onFocus: (e)=>handleEnterLevel1(group.id, e),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex w-full items-center justify-between rounded-sm px-2.5 py-2 text-left text-sm font-medium transition-colors duration-150", isActive ? "bg-orange-500 text-white shadow-sm" : "bg-white/80 text-slate-800 hover:bg-orange-100 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: getLabel(group, locale)
                                    }, void 0, false, {
                                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                        lineNumber: 378,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TriangleRightIcon, {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("h-3 w-3", isActive ? "text-white" : "text-slate-300")
                                    }, void 0, false, {
                                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                        lineNumber: 379,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, group.id, true, {
                                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                lineNumber: 366,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this),
                    level2List.length > 0 && activeGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopupPanel, {
                        left: L1_WIDTH,
                        top: offset2,
                        width: L2_WIDTH,
                        items: level2List,
                        locale: locale,
                        activeId: activeLevel2Id,
                        depth: 1,
                        onHoverItem: handleEnterLevel2,
                        onNavigate: (node)=>handleCategoryClick(node),
                        onMouseEnter: clearClose,
                        onMouseLeave: scheduleClose
                    }, void 0, false, {
                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                        lineNumber: 386,
                        columnNumber: 13
                    }, this) : null,
                    level3List.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopupPanel, {
                        left: L1_WIDTH + L2_WIDTH,
                        top: offset3,
                        width: L3_WIDTH,
                        items: level3List,
                        locale: locale,
                        activeId: activeLevel3Id,
                        depth: 2,
                        onHoverItem: handleEnterLevel3,
                        onNavigate: (node)=>handleCategoryClick(node),
                        onMouseEnter: clearClose,
                        onMouseLeave: scheduleClose
                    }, void 0, false, {
                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                        lineNumber: 402,
                        columnNumber: 13
                    }, this) : null,
                    level4List.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopupPanel, {
                        left: L1_WIDTH + L2_WIDTH + L3_WIDTH,
                        top: offset4,
                        width: L4_WIDTH,
                        items: level4List,
                        locale: locale,
                        activeId: null,
                        depth: 3,
                        onHoverItem: ()=>undefined,
                        onNavigate: (node)=>handleCategoryClick(node),
                        onMouseEnter: clearClose,
                        onMouseLeave: scheduleClose
                    }, void 0, false, {
                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                        lineNumber: 418,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                lineNumber: 356,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-3 text-sm text-slate-500 dark:text-slate-400",
                children: t("noCategories")
            }, void 0, false, {
                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                lineNumber: 434,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileCategoryDrawer, {
                open: mobileOpen,
                onClose: ()=>setMobileOpen(false),
                groups: filteredGroups,
                locale: locale,
                onNavigate: (node)=>{
                    handleCategoryClick(node);
                    setMobileOpen(false);
                },
                query: query,
                setQuery: setQuery,
                t: t
            }, void 0, false, {
                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/category/CategorySidebarV3.tsx",
        lineNumber: 306,
        columnNumber: 5
    }, this);
}
_s(CategorySidebarV3, "R//fO4+dz+xelCBNbGEDkVqYLI0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CategorySelectionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategorySelection"]
    ];
});
_c1 = CategorySidebarV3;
function MobileCategoryDrawer({ open, onClose, groups, locale, onNavigate, query, setQuery, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
        show: open,
        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            onClose: onClose,
            className: "relative z-[120]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                    enter: "ease-out duration-150",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/50",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                        lineNumber: 480,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/category/CategorySidebarV3.tsx",
                    lineNumber: 471,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                    enter: "ease-out duration-150",
                    enterFrom: "-translate-x-full",
                    enterTo: "translate-x-0",
                    leave: "ease-in duration-150",
                    leaveFrom: "translate-x-0",
                    leaveTo: "-translate-x-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                        className: "fixed inset-y-0 left-0 w-[85vw] min-w-[260px] max-w-xs overflow-y-auto rounded-r-2xl border border-orange-100 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Title, {
                                        className: "text-sm font-semibold text-slate-900 dark:text-slate-100",
                                        children: t("mobileTitle")
                                    }, void 0, false, {
                                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                        lineNumber: 494,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "rounded-lg border border-slate-200 px-2 py-1 text-xs text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
                                        children: t("close")
                                    }, void 0, false, {
                                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                        lineNumber: 497,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                lineNumber: 493,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value),
                                            type: "text",
                                            placeholder: t("searchPlaceholder"),
                                            className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pl-9 text-sm text-slate-700 shadow-inner focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                                        }, void 0, false, {
                                            fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                            lineNumber: 508,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                                lineNumber: 516,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                            lineNumber: 515,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                    lineNumber: 507,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                lineNumber: 506,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"], {
                                        as: "div",
                                        className: "rounded-xl border border-slate-200 dark:border-slate-700",
                                        children: ({ open })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"].Button, {
                                                        className: "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-800 hover:bg-orange-50 dark:text-slate-100 dark:hover:bg-slate-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: getLabel(group, locale)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                                                lineNumber: 527,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRightIcon, {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("h-4 w-4 transition-transform", open ? "rotate-90 text-orange-500" : "text-slate-400")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                                                lineNumber: 528,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"].Panel, {
                                                        className: "border-t border-slate-100 px-2 py-2 dark:border-slate-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: group.categories.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-lg bg-slate-50 px-2.5 py-2 dark:bg-slate-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            className: "w-full py-1 text-left text-sm font-medium text-slate-800 hover:text-orange-600 dark:text-slate-100 dark:hover:text-orange-300",
                                                                            onClick: ()=>onNavigate(node),
                                                                            children: getLabel(node, locale)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                                                            lineNumber: 539,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        node.children?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-1.5 space-y-0.5 border-t border-slate-200 pt-1.5 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200",
                                                                            children: node.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    className: "block w-full py-1.5 text-left hover:text-orange-600 dark:hover:text-orange-300",
                                                                                    onClick: ()=>onNavigate(child),
                                                                                    children: getLabel(child, locale)
                                                                                }, child.id, false, {
                                                                                    fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                                                                    lineNumber: 549,
                                                                                    columnNumber: 37
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                                                            lineNumber: 547,
                                                                            columnNumber: 33
                                                                        }, this) : null
                                                                    ]
                                                                }, node.id, true, {
                                                                    fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                    }, group.id, false, {
                                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                        lineNumber: 523,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                                lineNumber: 521,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/category/CategorySidebarV3.tsx",
                        lineNumber: 492,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/category/CategorySidebarV3.tsx",
                    lineNumber: 483,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/category/CategorySidebarV3.tsx",
            lineNumber: 470,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/category/CategorySidebarV3.tsx",
        lineNumber: 469,
        columnNumber: 5
    }, this);
}
_c2 = MobileCategoryDrawer;
function SearchIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-4 w-4",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M12.9 14.32a6 6 0 1 1 1.414-1.414l2.387 2.387a1 1 0 0 1-1.414 1.414L12.9 14.32ZM12 9a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/components/category/CategorySidebarV3.tsx",
            lineNumber: 585,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/category/CategorySidebarV3.tsx",
        lineNumber: 578,
        columnNumber: 5
    }, this);
}
_c3 = SearchIcon;
function MenuIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-4 w-4",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                x2: "21",
                y1: "6",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                lineNumber: 607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                x2: "21",
                y1: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                lineNumber: 608,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                x2: "21",
                y1: "18",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/components/category/CategorySidebarV3.tsx",
                lineNumber: 609,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/category/CategorySidebarV3.tsx",
        lineNumber: 596,
        columnNumber: 5
    }, this);
}
_c4 = MenuIcon;
function ChevronRightIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-4 w-4",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "9 18 15 12 9 6"
        }, void 0, false, {
            fileName: "[project]/components/category/CategorySidebarV3.tsx",
            lineNumber: 627,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/category/CategorySidebarV3.tsx",
        lineNumber: 616,
        columnNumber: 5
    }, this);
}
_c5 = ChevronRightIcon;
function TriangleRightIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 12",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "4,2 9,6 4,10"
        }, void 0, false, {
            fileName: "[project]/components/category/CategorySidebarV3.tsx",
            lineNumber: 640,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/category/CategorySidebarV3.tsx",
        lineNumber: 634,
        columnNumber: 5
    }, this);
}
_c6 = TriangleRightIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "PopupPanel");
__turbopack_context__.k.register(_c1, "CategorySidebarV3");
__turbopack_context__.k.register(_c2, "MobileCategoryDrawer");
__turbopack_context__.k.register(_c3, "SearchIcon");
__turbopack_context__.k.register(_c4, "MenuIcon");
__turbopack_context__.k.register(_c5, "ChevronRightIcon");
__turbopack_context__.k.register(_c6, "TriangleRightIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/product-legacy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLegacyProductFilters",
    ()=>getLegacyProductFilters,
    "getLegacyProducts",
    ()=>getLegacyProducts,
    "getProductLegacy",
    ()=>getProductLegacy,
    "getProductRelated",
    ()=>getProductRelated,
    "getProductSimilar",
    ()=>getProductSimilar,
    "getProductVariants",
    ()=>getProductVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/httpClient.ts [app-client] (ecmascript)");
;
const PRODUCT_LEGACY_URL = "/client/v1/products";
async function getProductLegacy(productId) {
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`${PRODUCT_LEGACY_URL}/${productId}/legacy`);
    if (!envelope.success) {
        throw new Error(envelope.error || "Không tải được thông tin sản phẩm.");
    }
    return envelope.data;
}
async function getProductRelated(productId) {
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`${PRODUCT_LEGACY_URL}/${productId}/related`);
    if (!envelope.success) {
        throw new Error(envelope.error || "Không tải được sản phẩm đề nghị.");
    }
    return envelope.data || [];
}
async function getProductSimilar(productId) {
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`${PRODUCT_LEGACY_URL}/${productId}/similar`);
    if (!envelope.success) {
        throw new Error(envelope.error || "Không tải được sản phẩm cùng chức năng.");
    }
    return envelope.data || [];
}
async function getProductVariants(productId) {
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`${PRODUCT_LEGACY_URL}/${productId}/variants`);
    if (!envelope.success) {
        throw new Error(envelope.error || "Không tải được biến thể sản phẩm.");
    }
    return envelope.data || {
        activeSaleOff: null,
        variants: []
    };
}
async function getLegacyProducts(params = {}) {
    const { categoryId, providerId, packed, pin, type, origin, page = 1, pageSize = 16 } = params;
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`${PRODUCT_LEGACY_URL}/legacy`, {
        params: {
            CategoryId: categoryId,
            ProviderId: providerId,
            Packed: packed,
            Pin: pin,
            Type: type,
            Origin: origin,
            Page: page,
            PageSize: pageSize
        }
    });
    if (!envelope.success) {
        throw new Error(envelope.error || "Không tải được danh sách sản phẩm.");
    }
    return envelope.data || {
        items: [],
        totalCount: 0,
        page: 1,
        pageSize: 16,
        totalPages: 0,
        hasNextPage: false,
        hasPreviousPage: false
    };
}
async function getLegacyProductFilters(params = {}) {
    const { categoryId, providerId, packed, pin, type, origin } = params;
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`${PRODUCT_LEGACY_URL}/legacy/filters`, {
        params: {
            CategoryId: categoryId,
            ProviderId: providerId,
            Packed: packed,
            Pin: pin,
            Type: type,
            Origin: origin
        }
    });
    if (!envelope.success) {
        throw new Error(envelope.error || "Không tải được bộ lọc sản phẩm.");
    }
    return envelope.data || {
        providers: [],
        packed: [],
        pin: [],
        type: [],
        origin: []
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useProductLegacy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLegacyProductFilters",
    ()=>useLegacyProductFilters,
    "useLegacyProducts",
    ()=>useLegacyProducts,
    "useProductLegacy",
    ()=>useProductLegacy,
    "useProductRelated",
    ()=>useProductRelated,
    "useProductSimilar",
    ()=>useProductSimilar,
    "useProductVariants",
    ()=>useProductVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$product$2d$legacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/product-legacy.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
const PRODUCT_LEGACY_KEY = "product-legacy";
const PRODUCT_RELATED_KEY = "product-related";
const PRODUCT_SIMILAR_KEY = "product-similar";
const PRODUCT_VARIANTS_KEY = "product-variants";
const LEGACY_PRODUCTS_KEY = "legacy-products";
const LEGACY_PRODUCT_FILTERS_KEY = "legacy-product-filters";
function useProductLegacy(productId, enabled = true) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            PRODUCT_LEGACY_KEY,
            productId
        ],
        queryFn: {
            "useProductLegacy.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$product$2d$legacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductLegacy"])(productId)
        }["useProductLegacy.useQuery"],
        enabled: Boolean(productId) && enabled,
        placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
    });
}
_s(useProductLegacy, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useProductRelated(productId, enabled = true) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            PRODUCT_RELATED_KEY,
            productId
        ],
        queryFn: {
            "useProductRelated.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$product$2d$legacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductRelated"])(productId)
        }["useProductRelated.useQuery"],
        enabled: Boolean(productId) && enabled,
        placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
    });
}
_s1(useProductRelated, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useProductSimilar(productId, enabled = true) {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            PRODUCT_SIMILAR_KEY,
            productId
        ],
        queryFn: {
            "useProductSimilar.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$product$2d$legacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductSimilar"])(productId)
        }["useProductSimilar.useQuery"],
        enabled: Boolean(productId) && enabled,
        placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
    });
}
_s2(useProductSimilar, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useProductVariants(productId, enabled = true) {
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            PRODUCT_VARIANTS_KEY,
            productId
        ],
        queryFn: {
            "useProductVariants.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$product$2d$legacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductVariants"])(productId)
        }["useProductVariants.useQuery"],
        enabled: Boolean(productId) && enabled,
        placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
    });
}
_s3(useProductVariants, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useLegacyProducts(params, enabled = true) {
    _s4();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            LEGACY_PRODUCTS_KEY,
            params
        ],
        queryFn: {
            "useLegacyProducts.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$product$2d$legacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegacyProducts"])(params)
        }["useLegacyProducts.useQuery"],
        enabled,
        placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
    });
}
_s4(useLegacyProducts, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useLegacyProductFilters(params, enabled = true) {
    _s5();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            LEGACY_PRODUCT_FILTERS_KEY,
            params
        ],
        queryFn: {
            "useLegacyProductFilters.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$product$2d$legacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegacyProductFilters"])(params)
        }["useLegacyProductFilters.useQuery"],
        enabled,
        placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"],
        staleTime: 5 * 60 * 1000
    });
}
_s5(useLegacyProductFilters, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProductFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCT_FILTER_INITIAL_STATE",
    ()=>PRODUCT_FILTER_INITIAL_STATE,
    "default",
    ()=>ProductFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.6.1_next@16.0.3_e6be4854f8439f45787e7743b3fd0c4f/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useProductLegacy.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PRODUCT_FILTER_INITIAL_STATE = {
    providerId: "",
    origin: "",
    type: "",
    pin: "",
    packed: ""
};
function ProductFilter({ onFilterChange, categoryId, defaultCollapsed = false, variant = "sidebar", filters: externalFilters }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("ProductFilter");
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultCollapsed);
    const [internalFilters, setInternalFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PRODUCT_FILTER_INITIAL_STATE);
    // Use external filters if provided (controlled mode), otherwise use internal state
    const filters = externalFilters ?? internalFilters;
    // Fetch filter options from API - only pass categoryId to get all available options
    const filterParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductFilter.useMemo[filterParams]": ()=>({
                categoryId
            })
    }["ProductFilter.useMemo[filterParams]"], [
        categoryId
    ]);
    const { data: filterOptions, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLegacyProductFilters"])(filterParams);
    const handleFilterChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductFilter.useCallback[handleFilterChange]": (key, value)=>{
            const newFilters = {
                ...filters,
                [key]: value
            };
            if (!externalFilters) {
                setInternalFilters(newFilters);
            }
            onFilterChange?.(newFilters);
        }
    }["ProductFilter.useCallback[handleFilterChange]"], [
        filters,
        onFilterChange,
        externalFilters
    ]);
    const handleReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductFilter.useCallback[handleReset]": ()=>{
            if (!externalFilters) {
                setInternalFilters(PRODUCT_FILTER_INITIAL_STATE);
            }
            onFilterChange?.(PRODUCT_FILTER_INITIAL_STATE);
        }
    }["ProductFilter.useCallback[handleReset]"], [
        onFilterChange,
        externalFilters
    ]);
    const hasActiveFilters = Object.values(filters).some((v)=>v !== "");
    // Convert API response to filter options format
    const providerOptions = filterOptions?.providers?.map((p)=>({
            value: p.id.toString(),
            label: p.name
        })) || [];
    const originOptions = filterOptions?.origin?.map((o)=>({
            value: o,
            label: o
        })) || [];
    const typeOptions = filterOptions?.type?.map((t)=>({
            value: t,
            label: t
        })) || [];
    const pinOptions = filterOptions?.pin?.map((p)=>({
            value: p,
            label: p
        })) || [];
    const packedOptions = filterOptions?.packed?.map((p)=>({
            value: p,
            label: p
        })) || [];
    // Inline variant for mobile/horizontal layout
    if (variant === "inline") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-slate-200 bg-white p-3 shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterIcon, {
                                className: "mr-1 inline-block h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductFilter.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            t("title"),
                            ":"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductFilter.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSelect, {
                        value: filters.providerId,
                        onChange: (v)=>handleFilterChange("providerId", v),
                        options: providerOptions,
                        placeholder: t("brand"),
                        allLabel: t("all"),
                        isLoading: isLoading
                    }, void 0, false, {
                        fileName: "[project]/components/ProductFilter.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSelect, {
                        value: filters.origin,
                        onChange: (v)=>handleFilterChange("origin", v),
                        options: originOptions,
                        placeholder: t("origin"),
                        allLabel: t("all"),
                        isLoading: isLoading
                    }, void 0, false, {
                        fileName: "[project]/components/ProductFilter.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSelect, {
                        value: filters.type,
                        onChange: (v)=>handleFilterChange("type", v),
                        options: typeOptions,
                        placeholder: t("pinType"),
                        allLabel: t("all"),
                        isLoading: isLoading
                    }, void 0, false, {
                        fileName: "[project]/components/ProductFilter.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSelect, {
                        value: filters.pin,
                        onChange: (v)=>handleFilterChange("pin", v),
                        options: pinOptions,
                        placeholder: t("pinCount"),
                        allLabel: t("all"),
                        isLoading: isLoading
                    }, void 0, false, {
                        fileName: "[project]/components/ProductFilter.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSelect, {
                        value: filters.packed,
                        onChange: (v)=>handleFilterChange("packed", v),
                        options: packedOptions,
                        placeholder: t("packed"),
                        allLabel: t("all"),
                        isLoading: isLoading
                    }, void 0, false, {
                        fileName: "[project]/components/ProductFilter.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleReset,
                        className: "rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50",
                        children: t("reset")
                    }, void 0, false, {
                        fileName: "[project]/components/ProductFilter.tsx",
                        lineNumber: 158,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductFilter.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductFilter.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    }
    // Sidebar variant (vertical layout)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl bg-white/95 shadow-sm ring-1 ring-slate-100 backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setIsCollapsed(!isCollapsed),
                className: "flex w-full items-center justify-between rounded-t-2xl bg-gradient-to-r from-orange-50/80 to-white p-3 transition hover:from-orange-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[#EE4D2D] shadow-inner",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterIcon, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductFilter.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProductFilter.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-slate-900",
                                        children: t("title")
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductFilter.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-orange-600",
                                        children: [
                                            Object.values(filters).filter((v)=>v !== "").length,
                                            " active"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductFilter.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductFilter.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductFilter.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {
                        className: `h-5 w-5 text-slate-400 transition-transform ${isCollapsed ? "" : "rotate-180"}`
                    }, void 0, false, {
                        fileName: "[project]/components/ProductFilter.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductFilter.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overflow-hidden transition-all duration-300 ease-in-out ${isCollapsed ? "max-h-0" : "max-h-[500px]"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 p-3 pt-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterField, {
                            label: t("brand"),
                            value: filters.providerId,
                            onChange: (v)=>handleFilterChange("providerId", v),
                            options: providerOptions,
                            allLabel: t("all"),
                            isLoading: isLoading
                        }, void 0, false, {
                            fileName: "[project]/components/ProductFilter.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterField, {
                            label: t("origin"),
                            value: filters.origin,
                            onChange: (v)=>handleFilterChange("origin", v),
                            options: originOptions,
                            allLabel: t("all"),
                            isLoading: isLoading
                        }, void 0, false, {
                            fileName: "[project]/components/ProductFilter.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterField, {
                            label: t("pinType"),
                            value: filters.type,
                            onChange: (v)=>handleFilterChange("type", v),
                            options: typeOptions,
                            allLabel: t("all"),
                            isLoading: isLoading
                        }, void 0, false, {
                            fileName: "[project]/components/ProductFilter.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterField, {
                            label: t("pinCount"),
                            value: filters.pin,
                            onChange: (v)=>handleFilterChange("pin", v),
                            options: pinOptions,
                            allLabel: t("all"),
                            isLoading: isLoading
                        }, void 0, false, {
                            fileName: "[project]/components/ProductFilter.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterField, {
                            label: t("packed"),
                            value: filters.packed,
                            onChange: (v)=>handleFilterChange("packed", v),
                            options: packedOptions,
                            allLabel: t("all"),
                            isLoading: isLoading
                        }, void 0, false, {
                            fileName: "[project]/components/ProductFilter.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleReset,
                                className: "flex-1 rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50",
                                children: t("reset")
                            }, void 0, false, {
                                fileName: "[project]/components/ProductFilter.tsx",
                                lineNumber: 260,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ProductFilter.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductFilter.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProductFilter.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductFilter.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(ProductFilter, "IG5I9MkRvqU4q1OAAJ4+GUXsWac=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLegacyProductFilters"]
    ];
});
_c = ProductFilter;
function FilterField({ label, value, onChange, options, allLabel, isLoading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xs font-medium text-slate-600",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ProductFilter.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                disabled: isLoading,
                className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: allLabel
                    }, void 0, false, {
                        fileName: "[project]/components/ProductFilter.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: opt.value,
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/ProductFilter.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductFilter.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductFilter.tsx",
        lineNumber: 300,
        columnNumber: 5
    }, this);
}
_c1 = FilterField;
function FilterSelect({ value, onChange, options, placeholder, allLabel, isLoading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        value: value,
        onChange: (e)=>onChange(e.target.value),
        disabled: isLoading,
        className: "rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm text-slate-700 transition focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "",
                children: `--${placeholder}--`
            }, void 0, false, {
                fileName: "[project]/components/ProductFilter.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: opt.value,
                    children: opt.label
                }, opt.value, false, {
                    fileName: "[project]/components/ProductFilter.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductFilter.tsx",
        lineNumber: 338,
        columnNumber: 5
    }, this);
}
_c2 = FilterSelect;
// Icons
function FilterIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
        }, void 0, false, {
            fileName: "[project]/components/ProductFilter.tsx",
            lineNumber: 367,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProductFilter.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
_c3 = FilterIcon;
function ChevronIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "6 9 12 15 18 9"
        }, void 0, false, {
            fileName: "[project]/components/ProductFilter.tsx",
            lineNumber: 384,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProductFilter.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
}
_c4 = ChevronIcon;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ProductFilter");
__turbopack_context__.k.register(_c1, "FilterField");
__turbopack_context__.k.register(_c2, "FilterSelect");
__turbopack_context__.k.register(_c3, "FilterIcon");
__turbopack_context__.k.register(_c4, "ChevronIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.6.1_next@16.0.3_e6be4854f8439f45787e7743b3fd0c4f/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Social media configuration
const socialLinks = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/tme.vn",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/tme.vn",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Zalo",
        url: "https://zalo.me/tme.vn",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            viewBox: "0 0 48 48",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm6.844 32.143H14.95c-.467 0-.847-.38-.847-.848 0-.174.054-.345.154-.489l10.486-14.98h-8.236c-.468 0-.848-.38-.848-.848s.38-.848.848-.848h11.085c.468 0 .848.38.848.848 0 .174-.054.345-.154.489L17.8 30.448h13.044c.468 0 .848.38.848.848s-.38.847-.848.847z"
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@tmevn",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "TikTok",
        url: "https://www.tiktok.com/@tme.vn",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Footer() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Footer");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-slate-900 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 py-8 sm:py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 md:grid-cols-3 lg:grid-cols-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-base font-bold text-white shadow-inner",
                                            children: "TME"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "leading-tight",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold",
                                                    children: t("brandLine")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-300",
                                                    children: t("companyName")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-white",
                                                    children: t("addressLabel")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                "220 Tân Phước - Phường 6 - Quận 10 - Tp. Hồ Chí Minh"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-white",
                                                    children: t("phoneLabel")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this),
                                                " 028.3957.3224"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-white",
                                                    children: t("faxLabel")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this),
                                                " 028.6264.3029"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-white",
                                                    children: t("emailLabel")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "mailto:info@tme.vn",
                                                    className: "text-orange-300 hover:text-orange-200",
                                                    children: "info@tme.vn"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs font-semibold uppercase tracking-[0.12em] text-slate-200",
                                    children: t("policiesTitle")
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "transition hover:text-orange-400",
                                                children: t("policy.purchase")
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "transition hover:text-orange-400",
                                                children: t("policy.warranty")
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "transition hover:text-orange-400",
                                                children: t("policy.commitment")
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "transition hover:text-orange-400",
                                                children: t("policy.partner")
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5 lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-semibold uppercase tracking-[0.12em] text-slate-200",
                                            children: t("socialTitle")
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: social.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    title: social.name,
                                                    className: "flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-200 transition hover:border-orange-400 hover:bg-orange-500/10 hover:text-orange-300",
                                                    children: social.icon
                                                }, social.name, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-semibold uppercase tracking-[0.12em] text-slate-200",
                                            children: t("paymentTitle")
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                "Visa",
                                                "MasterCard",
                                                "ATM",
                                                "Momo",
                                                "ZaloPay",
                                                "VNPay"
                                            ].map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200 transition hover:border-orange-400 hover:text-orange-300",
                                                    children: method
                                                }, method, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 py-3 text-center text-[11px] text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: t("copyrightLine1")
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: t("copyrightLine2")
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Footer, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildImageUrl",
    ()=>buildImageUrl,
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
// Image base URL - can be CDN or static server (port 7000 = admin server for local dev)
const defaultImageBaseUrl = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_IMAGE_BASE_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ADMIN_API_URL || "https://localhost:7000").replace(/\/$/, "");
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs);
}
function formatDate(input, format = "default") {
    if (!input) return "";
    const date = new Date(input);
    if (Number.isNaN(date.getTime()) || date.getFullYear() <= 1) return "";
    if (format === "dd-MM-yyyy" || format === "dd/MM/yyyy") {
        const dd = String(date.getDate()).padStart(2, "0");
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const yyyy = date.getFullYear();
        const sep = format === "dd/MM/yyyy" ? "/" : "-";
        return `${dd}${sep}${mm}${sep}${yyyy}`;
    }
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}
function buildImageUrl(path, baseUrl = defaultImageBaseUrl) {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    // Handle paths that start with "../" or "./" - strip the relative prefix
    let normalizedPath = path;
    while(normalizedPath.startsWith("../") || normalizedPath.startsWith("./")){
        normalizedPath = normalizedPath.replace(/^\.\.?\//, "");
    }
    const normalizedBase = baseUrl.replace(/\/$/, "");
    return `${normalizedBase}${normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/cart/CartDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/use-intl@4.6.1_react@19.2.0/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.6.1_next@16.0.3_e6be4854f8439f45787e7743b3fd0c4f/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function usePlaceholderSrc() {
    return "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none'><rect width='80' height='80' rx='8' fill='%23f8fafc'/><rect x='8' y='8' width='64' height='64' rx='6' fill='white' stroke='%23e2e8f0'/><text x='40' y='45' text-anchor='middle' fill='%2394a3b8' font-family='Arial' font-size='10'>No img</text></svg>`);
}
function CartDrawer() {
    _s();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Cart");
    const tCommon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Common");
    const placeholderSrc = usePlaceholderSrc();
    const drawerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { isCartOpen, closeCart, items, summary, isEmpty, isLoading, updateItem, removeItem, isUpdatingItem, isRemovingItem, grandTotal, itemCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartContext"])();
    // Close on escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartDrawer.useEffect": ()=>{
            const handleEscape = {
                "CartDrawer.useEffect.handleEscape": (e)=>{
                    if (e.key === "Escape" && isCartOpen) {
                        closeCart();
                    }
                }
            }["CartDrawer.useEffect.handleEscape"];
            document.addEventListener("keydown", handleEscape);
            return ({
                "CartDrawer.useEffect": ()=>document.removeEventListener("keydown", handleEscape)
            })["CartDrawer.useEffect"];
        }
    }["CartDrawer.useEffect"], [
        isCartOpen,
        closeCart
    ]);
    // Close on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartDrawer.useEffect": ()=>{
            const handleClickOutside = {
                "CartDrawer.useEffect.handleClickOutside": (e)=>{
                    if (isCartOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
                        closeCart();
                    }
                }
            }["CartDrawer.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "CartDrawer.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["CartDrawer.useEffect"];
        }
    }["CartDrawer.useEffect"], [
        isCartOpen,
        closeCart
    ]);
    // Prevent body scroll when drawer is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartDrawer.useEffect": ()=>{
            if (isCartOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            return ({
                "CartDrawer.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["CartDrawer.useEffect"];
        }
    }["CartDrawer.useEffect"], [
        isCartOpen
    ]);
    const formatPrice = (value)=>value.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", {
            minimumFractionDigits: 0
        });
    const isMutating = isUpdatingItem || isRemovingItem;
    if (!isCartOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 bg-black/40 transition-opacity"
            }, void 0, false, {
                fileName: "[project]/components/cart/CartDrawer.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: drawerRef,
                className: "fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-slate-200 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-slate-900",
                                children: [
                                    t("title"),
                                    itemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 text-sm font-normal text-slate-500",
                                        children: [
                                            "(",
                                            itemCount,
                                            " ",
                                            tCommon("items"),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cart/CartDrawer.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: closeCart,
                                className: "rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700",
                                "aria-label": "Close cart",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cart/CartDrawer.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cart/CartDrawer.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-500",
                                children: tCommon("loading")
                            }, void 0, false, {
                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/cart/CartDrawer.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this) : isEmpty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full flex-col items-center justify-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "mb-4 h-16 w-16 text-slate-300",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1,
                                        d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cart/CartDrawer.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500",
                                    children: t("empty")
                                }, void 0, false, {
                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closeCart,
                                    className: "mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark",
                                    children: t("continueShopping")
                                }, void 0, false, {
                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cart/CartDrawer.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 sm:space-y-4",
                            children: items.map((item)=>{
                                const imageSrc = item.productImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildImageUrl"])(item.productImage) : placeholderSrc;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 rounded-lg border border-slate-200 bg-white p-2 sm:gap-3 sm:p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-slate-50 sm:h-20 sm:w-20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: imageSrc,
                                                alt: item.productName || "Product",
                                                fill: true,
                                                sizes: "(min-width: 640px) 80px, 64px",
                                                className: "object-contain p-1",
                                                unoptimized: true,
                                                onError: (e)=>{
                                                    e.target.src = placeholderSrc;
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                                lineNumber: 178,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/cart/CartDrawer.tsx",
                                            lineNumber: 177,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-1 flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${locale}/products/${item.productId}`,
                                                    onClick: closeCart,
                                                    className: "line-clamp-2 text-sm font-medium text-slate-800 hover:text-primary",
                                                    children: item.productName
                                                }, void 0, false, {
                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 23
                                                }, this),
                                                item.options && item.options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-xs text-slate-500",
                                                    children: item.options.map((opt)=>`${opt.typeName}: ${opt.value}`).join(", ")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 25
                                                }, this),
                                                item.activeSaleOff > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 flex flex-wrap items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white",
                                                            children: [
                                                                t("discountLabel"),
                                                                " ",
                                                                formatPrice(item.activeSaleOff),
                                                                "đ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/cart/CartDrawer.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 27
                                                        }, this),
                                                        item.quantity > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-green-600 font-medium",
                                                            children: [
                                                                "× ",
                                                                item.quantity,
                                                                " = -",
                                                                formatPrice(item.activeSaleOff * item.quantity),
                                                                "đ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/cart/CartDrawer.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 25
                                                }, this),
                                                item.appliedTier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-xs text-green-600",
                                                    children: [
                                                        t("bulkPrice"),
                                                        " (",
                                                        item.appliedTier.minQty,
                                                        "+)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-auto flex items-end justify-between pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col",
                                                            children: [
                                                                item.activeSaleOff > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-400 line-through",
                                                                    children: [
                                                                        formatPrice(item.unitPrice),
                                                                        " đ"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-semibold text-primary",
                                                                    children: [
                                                                        formatPrice(item.unitPrice - item.activeSaleOff),
                                                                        " đ"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/cart/CartDrawer.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>updateItem(item.id, Math.max(1, item.quantity - 1)),
                                                                    disabled: isMutating || item.quantity <= 1,
                                                                    className: "flex h-8 w-8 items-center justify-center rounded border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40",
                                                                    children: "−"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-8 text-center text-sm font-medium",
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>updateItem(item.id, item.quantity + 1),
                                                                    disabled: isMutating || item.quantity >= item.stock,
                                                                    className: "flex h-8 w-8 items-center justify-center rounded border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40",
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>removeItem(item.id),
                                                                    disabled: isMutating,
                                                                    className: "ml-1 flex h-8 w-8 items-center justify-center rounded text-slate-400 hover:bg-red-50 hover:text-red-500 disabled:opacity-40 sm:ml-2",
                                                                    "aria-label": "Remove item",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "h-4 w-4",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/cart/CartDrawer.tsx",
                                                                            lineNumber: 279,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/cart/CartDrawer.tsx",
                                                                        lineNumber: 273,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/cart/CartDrawer.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-right text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-500",
                                                            children: [
                                                                t("subtotalLabel"),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/cart/CartDrawer.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-slate-700",
                                                            children: [
                                                                formatPrice(item.lineTotal),
                                                                " đ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/cart/CartDrawer.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 25
                                                        }, this),
                                                        item.activeSaleOff > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 text-green-600",
                                                            children: [
                                                                "(-",
                                                                formatPrice(item.activeSaleOff * item.quantity),
                                                                "đ)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/cart/CartDrawer.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/cart/CartDrawer.tsx",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/components/cart/CartDrawer.tsx",
                                    lineNumber: 172,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/cart/CartDrawer.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cart/CartDrawer.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    !isEmpty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-slate-200 p-4",
                        children: [
                            summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 space-y-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-slate-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("subtotal")
                                            }, void 0, false, {
                                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    formatPrice(summary.subtotal),
                                                    " đ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cart/CartDrawer.tsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this),
                                    summary.saleOffDiscount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-green-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("discount")
                                            }, void 0, false, {
                                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                                lineNumber: 324,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "-",
                                                    formatPrice(summary.saleOffDiscount),
                                                    " đ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                                lineNumber: 325,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cart/CartDrawer.tsx",
                                        lineNumber: 323,
                                        columnNumber: 19
                                    }, this),
                                    summary.bundleDiscount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-green-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("bundleDiscount")
                                            }, void 0, false, {
                                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                                lineNumber: 330,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "-",
                                                    formatPrice(summary.bundleDiscount),
                                                    " đ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                                lineNumber: 331,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cart/CartDrawer.tsx",
                                        lineNumber: 329,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-t border-slate-200 pt-2 text-base font-semibold text-slate-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("total")
                                            }, void 0, false, {
                                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary",
                                                children: [
                                                    formatPrice(grandTotal),
                                                    " đ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                                lineNumber: 336,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cart/CartDrawer.tsx",
                                        lineNumber: 334,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                lineNumber: 317,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${locale}/cart`,
                                        onClick: closeCart,
                                        className: "flex-1 rounded-xl border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50",
                                        children: t("viewCart")
                                    }, void 0, false, {
                                        fileName: "[project]/components/cart/CartDrawer.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${locale}/checkout`,
                                        onClick: closeCart,
                                        className: "flex-1 rounded-xl bg-primary py-2.5 text-center text-sm font-semibold text-white transition hover:bg-primary-dark",
                                        children: t("checkout")
                                    }, void 0, false, {
                                        fileName: "[project]/components/cart/CartDrawer.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cart/CartDrawer.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cart/CartDrawer.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cart/CartDrawer.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CartDrawer, "vOYwexqNHOUCEXtPDiRsvc6hinc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        usePlaceholderSrc,
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartContext"]
    ];
});
_c = CartDrawer;
var _c;
__turbopack_context__.k.register(_c, "CartDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/ProductFilterContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCT_FILTER_INITIAL_STATE",
    ()=>PRODUCT_FILTER_INITIAL_STATE,
    "ProductFilterProvider",
    ()=>ProductFilterProvider,
    "useProductFilter",
    ()=>useProductFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const PRODUCT_FILTER_INITIAL_STATE = {
    providerId: "",
    origin: "",
    type: "",
    pin: "",
    packed: ""
};
const ProductFilterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ProductFilterProvider({ children }) {
    _s();
    const [filters, setFiltersState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PRODUCT_FILTER_INITIAL_STATE);
    const setFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductFilterProvider.useCallback[setFilters]": (newFilters)=>{
            setFiltersState(newFilters);
        }
    }["ProductFilterProvider.useCallback[setFilters]"], []);
    const updateFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductFilterProvider.useCallback[updateFilter]": (key, value)=>{
            setFiltersState({
                "ProductFilterProvider.useCallback[updateFilter]": (prev)=>({
                        ...prev,
                        [key]: value
                    })
            }["ProductFilterProvider.useCallback[updateFilter]"]);
        }
    }["ProductFilterProvider.useCallback[updateFilter]"], []);
    const resetFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductFilterProvider.useCallback[resetFilters]": ()=>{
            setFiltersState(PRODUCT_FILTER_INITIAL_STATE);
        }
    }["ProductFilterProvider.useCallback[resetFilters]"], []);
    const hasActiveFilters = Object.values(filters).some((v)=>v !== "");
    const value = {
        filters,
        setFilters,
        updateFilter,
        resetFilters,
        hasActiveFilters
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductFilterContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/layout/ProductFilterContext.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
_s(ProductFilterProvider, "uW14vW0TXi6gsjVvwzrjrGXPxOE=");
_c = ProductFilterProvider;
function useProductFilter() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ProductFilterContext);
    if (!ctx) {
        throw new Error("useProductFilter must be used within ProductFilterProvider");
    }
    return ctx;
}
_s1(useProductFilter, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ProductFilterProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MainLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$category$2f$CategorySidebarV3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/category/CategorySidebarV3.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cart/CartDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CategorySelectionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/CategorySelectionContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ProductFilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/ProductFilterContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function MainLayout({ children }) {
    _s();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CategorySelectionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategorySelectionProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ProductFilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductFilterProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onToggleSidebar: ()=>setSidebarOpen((prev)=>!prev)
                    }, void 0, false, {
                        fileName: "[project]/components/MainLayout.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex w-full max-w-[1400px] gap-5 px-2 py-4 sm:px-4 sm:py-6 lg:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "hidden w-64 shrink-0 lg:block relative z-30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContent, {}, void 0, false, {
                                    fileName: "[project]/components/MainLayout.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MainLayout.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "min-w-0 flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-xl border border-slate-200 bg-white/80 p-3 shadow-sm sm:p-5",
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/components/MainLayout.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MainLayout.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MainLayout.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 lg:hidden ${sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"}`,
                        onClick: ()=>setSidebarOpen(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-y-0 left-0 w-72 max-w-[80vw] transform overflow-y-auto bg-white shadow-xl transition-transform duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`,
                            onClick: (e)=>e.stopPropagation(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full space-y-4 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$category$2f$CategorySidebarV3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/MainLayout.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileSidebarFilter, {}, void 0, false, {
                                        fileName: "[project]/components/MainLayout.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MainLayout.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/MainLayout.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MainLayout.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/MainLayout.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/MainLayout.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MainLayout.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/MainLayout.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/MainLayout.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(MainLayout, "5rGDkYpGQ8fHM9RkMWnKOwsxadk=");
_c = MainLayout;
// Sidebar content with category menu and product filter (sticky)
function SidebarContent() {
    _s1();
    const { selectedCategoryId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CategorySelectionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategorySelection"])();
    const { filters, setFilters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ProductFilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductFilter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky top-[100px] space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$category$2f$CategorySidebarV3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "!relative !top-0"
            }, void 0, false, {
                fileName: "[project]/components/MainLayout.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "sidebar",
                categoryId: selectedCategoryId ?? undefined,
                filters: filters,
                onFilterChange: setFilters
            }, void 0, false, {
                fileName: "[project]/components/MainLayout.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MainLayout.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s1(SidebarContent, "HHnppmhexdWlNrvK59tfn8LUPKU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CategorySelectionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategorySelection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ProductFilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductFilter"]
    ];
});
_c1 = SidebarContent;
// Mobile sidebar filter
function MobileSidebarFilter() {
    _s2();
    const { selectedCategoryId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CategorySelectionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategorySelection"])();
    const { filters, setFilters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ProductFilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductFilter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        variant: "sidebar",
        categoryId: selectedCategoryId ?? undefined,
        filters: filters,
        onFilterChange: setFilters,
        defaultCollapsed: true
    }, void 0, false, {
        fileName: "[project]/components/MainLayout.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s2(MobileSidebarFilter, "HHnppmhexdWlNrvK59tfn8LUPKU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CategorySelectionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategorySelection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ProductFilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductFilter"]
    ];
});
_c2 = MobileSidebarFilter;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MainLayout");
__turbopack_context__.k.register(_c1, "SidebarContent");
__turbopack_context__.k.register(_c2, "MobileSidebarFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/product/QuickVariantModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuickVariantModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@headlessui+react@2.2.9_rea_a25c7d5210e847ee7f3967624984dcab/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@headlessui+react@2.2.9_rea_a25c7d5210e847ee7f3967624984dcab/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/use-intl@4.6.1_react@19.2.0/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.6.1_next@16.0.3_e6be4854f8439f45787e7743b3fd0c4f/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useProductLegacy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function groupVariantOptions(variants) {
    const groups = new Map();
    for (const variant of variants){
        if (!variant.options) continue;
        for (const opt of variant.options){
            if (!groups.has(opt.productTypeId)) {
                groups.set(opt.productTypeId, {
                    typeId: opt.productTypeId,
                    typeName: opt.productTypeName || "",
                    values: []
                });
            }
            const group = groups.get(opt.productTypeId);
            if (!group.values.some((v)=>v.valueId === opt.productTypeValueId)) {
                group.values.push({
                    valueId: opt.productTypeValueId,
                    valueName: opt.productTypeValueName || ""
                });
            }
        }
    }
    return Array.from(groups.values());
}
function findMatchingVariant(variants, selectedOptions) {
    if (selectedOptions.size === 0) return variants[0] || null;
    return variants.find((variant)=>{
        if (!variant.options) return false;
        return Array.from(selectedOptions.entries()).every(([typeId, valueId])=>variant.options.some((opt)=>opt.productTypeId === typeId && opt.productTypeValueId === valueId));
    }) || null;
}
function getPriceForQuantity(variant, qty) {
    if (!variant.priceTiers || variant.priceTiers.length === 0) {
        return variant.price || 0;
    }
    const sortedTiers = [
        ...variant.priceTiers
    ].sort((a, b)=>b.minQty - a.minQty);
    const applicableTier = sortedTiers.find((tier)=>qty >= tier.minQty);
    return applicableTier ? applicableTier.price : variant.price || 0;
}
function usePlaceholderSrc() {
    return "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120' fill='none'><rect width='120' height='120' rx='12' fill='%23f8fafc'/><rect x='20' y='20' width='80' height='80' rx='8' fill='white' stroke='%23e2e8f0' stroke-width='2'/><text x='60' y='65' text-anchor='middle' fill='%2394a3b8' font-family='Arial' font-size='12'>No img</text></svg>`);
}
function QuickVariantModal({ productId, isOpen, onClose, mode = "cart" }) {
    _s();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("QuickVariant");
    const tDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("ProductDetail");
    const tCommon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Common");
    const placeholderSrc = usePlaceholderSrc();
    const { data: product, isLoading: isLoadingProduct } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductLegacy"])(productId, isOpen);
    const { data: variantsData, isLoading: isLoadingVariants } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductVariants"])(productId, isOpen);
    const { addItemWithNotification, isAddingItem, openCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartContext"])();
    // Extract variants array and activeSaleOff from wrapper
    const variants = variantsData?.variants;
    const variantActiveSaleOff = variantsData?.activeSaleOff ?? 0;
    const hasVariants = variants && variants.length > 0;
    const optionGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuickVariantModal.useMemo[optionGroups]": ()=>hasVariants ? groupVariantOptions(variants) : []
    }["QuickVariantModal.useMemo[optionGroups]"], [
        variants,
        hasVariants
    ]);
    const [selectedOptions, setSelectedOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Reset state when modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickVariantModal.useEffect": ()=>{
            if (isOpen) {
                setSelectedOptions(new Map());
                setQuantity(1);
                setError(null);
            }
        }
    }["QuickVariantModal.useEffect"], [
        isOpen,
        productId
    ]);
    // Auto-select first option for each group
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickVariantModal.useEffect": ()=>{
            if (optionGroups.length > 0 && selectedOptions.size === 0) {
                const initial = new Map();
                optionGroups.forEach({
                    "QuickVariantModal.useEffect": (group)=>{
                        if (group.values.length > 0) {
                            initial.set(group.typeId, group.values[0].valueId);
                        }
                    }
                }["QuickVariantModal.useEffect"]);
                setSelectedOptions(initial);
            }
        }
    }["QuickVariantModal.useEffect"], [
        optionGroups,
        selectedOptions.size
    ]);
    const selectedVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuickVariantModal.useMemo[selectedVariant]": ()=>{
            if (!hasVariants) return null;
            return findMatchingVariant(variants, selectedOptions);
        }
    }["QuickVariantModal.useMemo[selectedVariant]"], [
        variants,
        selectedOptions,
        hasVariants
    ]);
    const handleOptionSelect = (typeId, valueId)=>{
        setSelectedOptions((prev)=>{
            const newMap = new Map(prev);
            newMap.set(typeId, valueId);
            return newMap;
        });
        setError(null);
    };
    const displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuickVariantModal.useMemo[displayName]": ()=>{
            if (!product) return "";
            if (locale === "vi") return product.name;
            return product.nameEn?.trim() ? product.nameEn : product.name;
        }
    }["QuickVariantModal.useMemo[displayName]"], [
        product,
        locale
    ]);
    // Base price before discount (for strikethrough display)
    const basePrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuickVariantModal.useMemo[basePrice]": ()=>{
            if (hasVariants && selectedVariant) {
                return getPriceForQuantity(selectedVariant, quantity);
            }
            return product?.price1 || 0;
        }
    }["QuickVariantModal.useMemo[basePrice]"], [
        hasVariants,
        selectedVariant,
        quantity,
        product?.price1
    ]);
    // Final price after applying activeSaleOff discount
    const currentPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuickVariantModal.useMemo[currentPrice]": ()=>{
            if (hasVariants && selectedVariant) {
                const base = getPriceForQuantity(selectedVariant, quantity);
                return Math.max(0, base - variantActiveSaleOff);
            }
            return product?.finalPrice || 0;
        }
    }["QuickVariantModal.useMemo[currentPrice]"], [
        hasVariants,
        selectedVariant,
        quantity,
        variantActiveSaleOff,
        product?.finalPrice
    ]);
    // Active discount amount to display
    const activeDiscount = hasVariants ? variantActiveSaleOff : product?.activeSaleOff || 0;
    const currentStock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuickVariantModal.useMemo[currentStock]": ()=>{
            if (hasVariants && selectedVariant) {
                return selectedVariant.stock;
            }
            return product?.quantity || 0;
        }
    }["QuickVariantModal.useMemo[currentStock]"], [
        hasVariants,
        selectedVariant,
        product?.quantity
    ]);
    const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuickVariantModal.useMemo[imageSrc]": ()=>{
            if (product?.image) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildImageUrl"])(product.image);
            }
            return placeholderSrc;
        }
    }["QuickVariantModal.useMemo[imageSrc]"], [
        product?.image,
        placeholderSrc
    ]);
    const formatPrice = (value)=>value.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", {
            minimumFractionDigits: 0
        });
    const hasStock = currentStock > 0;
    const handleQuantityChange = (delta)=>{
        setQuantity((prev)=>{
            if (!hasStock) return 0;
            const next = prev + delta;
            const min = 1;
            const max = currentStock;
            if (next < min) return min;
            if (next > max) return max;
            return next;
        });
    };
    const handleAddToCart = async ()=>{
        if (!product || !hasStock) return;
        if (hasVariants && !selectedVariant) {
            setError(tDetail("selectVariant"));
            return;
        }
        const variantId = selectedVariant?.id;
        if (!variantId) {
            setError(tDetail("noCartSupport"));
            return;
        }
        try {
            await addItemWithNotification(variantId, quantity, displayName);
            onClose();
            if (mode === "cart") {
                openCart();
            } else {
                router.push(`/${locale}/checkout`);
            }
        } catch (err) {
            console.error("Failed to add to cart:", err);
        }
    };
    const isLoading = isLoadingProduct || isLoadingVariants;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
        show: isOpen,
        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            onClose: onClose,
            className: "relative z-[200]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                    enter: "ease-out duration-200",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-150",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/50",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/product/QuickVariantModal.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-full items-center justify-center p-3 sm:p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                            enter: "ease-out duration-200",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-150",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                className: "w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-slate-200 px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$9_rea_a25c7d5210e847ee7f3967624984dcab$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Title, {
                                                className: "text-base font-semibold text-slate-900",
                                                children: mode === "cart" ? t("title.cart") : t("title.buy")
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                lineNumber: 270,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onClose,
                                                className: "rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-5 w-5",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M6 18L18 6M6 6l12 12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/product/QuickVariantModal.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-40 items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-500",
                                                children: tCommon("loading")
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                lineNumber: 293,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                            lineNumber: 292,
                                            columnNumber: 21
                                        }, this) : !product ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-40 items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-red-500",
                                                children: t("productNotFound")
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                lineNumber: 299,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                            lineNumber: 298,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-50",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: imageSrc,
                                                                alt: displayName,
                                                                fill: true,
                                                                sizes: "80px",
                                                                className: "object-contain p-1",
                                                                unoptimized: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "line-clamp-2 text-sm font-medium text-slate-900",
                                                                    children: displayName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 text-xs text-slate-500",
                                                                    children: product.code
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 flex flex-wrap items-baseline gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-lg font-bold text-primary",
                                                                            children: currentPrice > 0 ? `${formatPrice(currentPrice)} đ` : tDetail("contact")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                            lineNumber: 323,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        activeDiscount > 0 && basePrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-slate-400 line-through",
                                                                                    children: [
                                                                                        formatPrice(basePrice),
                                                                                        " đ"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                                    lineNumber: 330,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white",
                                                                                    children: [
                                                                                        "-",
                                                                                        formatPrice(activeDiscount),
                                                                                        "đ"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                                    lineNumber: 333,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 23
                                                }, this),
                                                optionGroups.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: optionGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mb-1.5 text-xs font-medium text-slate-700",
                                                                    children: group.typeName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                    lineNumber: 347,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-1.5",
                                                                    children: group.values.map((value)=>{
                                                                        const isSelected = selectedOptions.get(group.typeId) === value.valueId;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>handleOptionSelect(group.typeId, value.valueId),
                                                                            className: `rounded-lg border px-2.5 py-1.5 text-xs font-medium transition ${isSelected ? "border-primary bg-orange-50 text-primary" : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"}`,
                                                                            children: value.valueName
                                                                        }, value.valueId, false, {
                                                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                            lineNumber: 355,
                                                                            columnNumber: 37
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                    lineNumber: 350,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, group.typeId, true, {
                                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 25
                                                }, this),
                                                selectedVariant?.priceTiers && selectedVariant.priceTiers.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg border border-slate-200 bg-slate-50 p-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-1.5 text-xs font-medium text-slate-600",
                                                            children: t("quantityPricing")
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1.5",
                                                            children: [
                                                                ...selectedVariant.priceTiers
                                                            ].sort((a, b)=>a.minQty - b.minQty).map((tier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `rounded-md px-2 py-1 text-xs ${quantity >= tier.minQty ? "bg-primary/10 font-medium text-primary" : "border border-slate-200 bg-white text-slate-600"}`,
                                                                    children: [
                                                                        tier.minQty,
                                                                        "+: ",
                                                                        formatPrice(tier.price),
                                                                        " đ"
                                                                    ]
                                                                }, tier.id, true, {
                                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                    lineNumber: 385,
                                                                    columnNumber: 33
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: hasStock ? "text-emerald-600" : "font-medium text-red-500",
                                                                children: hasStock ? t("available", {
                                                                    count: currentStock
                                                                }) : tDetail("outOfStock")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "inline-flex items-center rounded-lg border border-slate-200 bg-slate-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleQuantityChange(-1),
                                                                    disabled: !hasStock || quantity <= 1 || isAddingItem,
                                                                    className: "flex h-9 w-9 items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-40",
                                                                    children: "−"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-10 text-center text-sm font-semibold text-slate-800",
                                                                    children: quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                    lineNumber: 421,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleQuantityChange(1),
                                                                    disabled: !hasStock || quantity >= currentStock || isAddingItem,
                                                                    className: "flex h-9 w-9 items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-40",
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 23
                                                }, this),
                                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600",
                                                    children: error
                                                }, void 0, false, {
                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                            lineNumber: 304,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/product/QuickVariantModal.tsx",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, this),
                                    !isLoading && product && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-slate-200 px-4 py-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleAddToCart,
                                            disabled: !hasStock || isAddingItem,
                                            className: "flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-white transition hover:bg-primary-dark disabled:bg-slate-300",
                                            children: [
                                                isAddingItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-4 w-4 animate-spin",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "opacity-25",
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10",
                                                            stroke: "currentColor",
                                                            strokeWidth: "4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "opacity-75",
                                                            fill: "currentColor",
                                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 25
                                                }, this),
                                                mode === "cart" ? t("title.cart") : t("title.buy")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                                            lineNumber: 448,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/product/QuickVariantModal.tsx",
                                        lineNumber: 447,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product/QuickVariantModal.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/product/QuickVariantModal.tsx",
                            lineNumber: 258,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/product/QuickVariantModal.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/product/QuickVariantModal.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/product/QuickVariantModal.tsx",
            lineNumber: 243,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/product/QuickVariantModal.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, this);
}
_s(QuickVariantModal, "UbHBZC5DqcKsWB489ffBqsfzr5o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        usePlaceholderSrc,
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductLegacy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductVariants"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartContext"]
    ];
});
_c = QuickVariantModal;
var _c;
__turbopack_context__.k.register(_c, "QuickVariantModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/product/ProductLegacyDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductLegacyDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/use-intl@4.6.1_react@19.2.0/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.6.1_next@16.0.3_e6be4854f8439f45787e7743b3fd0c4f/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useProductLegacy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2f$QuickVariantModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product/QuickVariantModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function normalizeImage(src) {
    if (!src) return null;
    // Use buildImageUrl to properly add domain and handle relative paths
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildImageUrl"])(src);
}
// Rewrite image src in HTML content to use full URLs
function rewriteContentImages(html) {
    return html.replace(/src=["']([^"']+)["']/gi, (match, src)=>{
        const trimmed = src.trim();
        // Skip absolute URLs and data URIs
        if (/^(https?:)?\/\//i.test(trimmed) || trimmed.startsWith("data:")) return match;
        const full = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildImageUrl"])(trimmed);
        return `src="${full}"`;
    });
}
function usePlaceholderSrc() {
    return "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='320' height='240' viewBox='0 0 320 240' fill='none'><rect width='320' height='240' rx='16' fill='%23f8fafc'/><rect x='36' y='40' width='248' height='160' rx='12' fill='white' stroke='%23e2e8f0' stroke-width='2'/><path d='M84 158l54-70 50 60 34-30 18 22' stroke='%23cbd5e1' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/><circle cx='120' cy='90' r='18' fill='%23e2e8f0'/><text x='160' y='195' text-anchor='middle' fill='%2394a3b8' font-family='Arial, sans-serif' font-size='14'>No image</text></svg>`);
}
function InfoRow({ label, value }) {
    if (!value) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-x-2 gap-y-0.5 text-sm text-slate-700 sm:grid sm:grid-cols-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full text-slate-500 sm:col-span-1 sm:w-auto",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 break-words font-medium text-slate-900 sm:col-span-2",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c = InfoRow;
function RelatedProductCard({ product, locale, placeholderSrc }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("ProductDetail");
    const imageSrc = product.image ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildImageUrl"])(product.image) : placeholderSrc;
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCardClick = ()=>{
        router.push(`/${locale}/products/${product.productId}`);
    };
    const handleAddToCart = (e)=>{
        e.stopPropagation();
        setModalOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        onClick: handleCardClick,
        className: "group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition hover:border-primary hover:shadow-md sm:p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageSrc,
                    alt: product.name || "Product",
                    fill: true,
                    sizes: "(min-width: 1024px) 200px, 50vw",
                    className: "object-contain p-2 transition group-hover:scale-105",
                    unoptimized: true,
                    onError: (e)=>{
                        e.target.src = placeholderSrc;
                    }
                }, void 0, false, {
                    fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-1 flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] text-slate-500",
                        children: product.code
                    }, void 0, false, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "line-clamp-2 flex-1 text-xs font-medium text-slate-800 group-hover:text-primary sm:text-sm",
                        children: product.name || "N/A"
                    }, void 0, false, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleAddToCart,
                        className: "mt-1 w-full rounded-lg bg-primary py-1.5 text-xs font-semibold text-white transition hover:bg-primary-dark sm:py-2",
                        children: t("addToCart")
                    }, void 0, false, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2f$QuickVariantModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                productId: product.productId,
                isOpen: modalOpen,
                onClose: ()=>setModalOpen(false),
                mode: "cart"
            }, void 0, false, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(RelatedProductCard, "t9ZkYaWQdpiR6m4W2h1MDiG1NDE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c1 = RelatedProductCard;
function ProductGrid({ products, locale, placeholderSrc, isLoading, emptyMessage }) {
    _s1();
    const tCommon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Common");
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-8 text-center text-sm text-slate-500",
            children: tCommon("loading")
        }, void 0, false, {
            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this);
    }
    if (!products || products.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-8 text-center text-sm text-slate-500",
            children: emptyMessage
        }, void 0, false, {
            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RelatedProductCard, {
                product: product,
                locale: locale,
                placeholderSrc: placeholderSrc
            }, product.productId, false, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s1(ProductGrid, "D+4QCcfc7SQcbGbaH8hjUaF0I0E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c2 = ProductGrid;
function groupVariantOptions(variants) {
    const groups = new Map();
    for (const variant of variants){
        if (!variant.options) continue;
        for (const opt of variant.options){
            if (!groups.has(opt.productTypeId)) {
                groups.set(opt.productTypeId, {
                    typeId: opt.productTypeId,
                    typeName: opt.productTypeName || "",
                    values: []
                });
            }
            const group = groups.get(opt.productTypeId);
            if (!group.values.some((v)=>v.valueId === opt.productTypeValueId)) {
                group.values.push({
                    valueId: opt.productTypeValueId,
                    valueName: opt.productTypeValueName || ""
                });
            }
        }
    }
    return Array.from(groups.values());
}
// Find variant that matches all selected options
function findMatchingVariant(variants, selectedOptions) {
    if (selectedOptions.size === 0) return variants[0] || null;
    return variants.find((variant)=>{
        if (!variant.options) return false;
        return Array.from(selectedOptions.entries()).every(([typeId, valueId])=>variant.options.some((opt)=>opt.productTypeId === typeId && opt.productTypeValueId === valueId));
    }) || null;
}
// Get price based on quantity from price tiers
function getPriceForQuantity(variant, qty) {
    if (!variant.priceTiers || variant.priceTiers.length === 0) {
        return variant.price || 0;
    }
    // Sort tiers by minQty descending to find the applicable tier
    const sortedTiers = [
        ...variant.priceTiers
    ].sort((a, b)=>b.minQty - a.minQty);
    const applicableTier = sortedTiers.find((tier)=>qty >= tier.minQty);
    return applicableTier ? applicableTier.price : variant.price || 0;
}
function WholesalePriceModal({ isOpen, onClose, priceTiers, basePrice, locale, formatPrice }) {
    _s2();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("ProductDetail");
    if (!isOpen) return null;
    const sortedTiers = [
        ...priceTiers
    ].sort((a, b)=>a.minQty - b.minQty);
    // Calculate max quantity for each tier (next tier's minQty - 1, or "+" for last)
    const tiersWithRange = sortedTiers.map((tier, index)=>{
        const nextTier = sortedTiers[index + 1];
        const maxQty = nextTier ? nextTier.minQty - 1 : null;
        const savings = basePrice - tier.price;
        return {
            ...tier,
            maxQty,
            savings
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[150] flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-md rounded-xl bg-white p-4 shadow-xl mx-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-4 text-center text-base font-semibold text-slate-900",
                        children: t("wholesale.title")
                    }, void 0, false, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden rounded-lg border border-slate-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-slate-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-left font-medium text-slate-600",
                                                children: t("wholesale.quantity")
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-left font-medium text-slate-600",
                                                children: t("wholesale.unitPrice")
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-left font-medium text-slate-600",
                                                children: t("wholesale.savings")
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100",
                                    children: tiersWithRange.map((tier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2.5 text-slate-700",
                                                    children: tier.maxQty ? `${tier.minQty} - ${tier.maxQty}` : `≥ ${tier.minQty}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2.5 font-medium text-primary",
                                                    children: [
                                                        formatPrice(tier.price),
                                                        "đ"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2.5 text-green-600",
                                                    children: tier.savings > 0 ? `-${formatPrice(tier.savings)}đ` : "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, tier.id, true, {
                                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50",
                            children: t("wholesale.close")
                        }, void 0, false, {
                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
}
_s2(WholesalePriceModal, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c3 = WholesalePriceModal;
function VariantPicker({ variants, selectedOptions, onOptionSelect, locale }) {
    _s3();
    const optionGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VariantPicker.useMemo[optionGroups]": ()=>groupVariantOptions(variants)
    }["VariantPicker.useMemo[optionGroups]"], [
        variants
    ]);
    if (optionGroups.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 space-y-3",
        children: optionGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 text-sm font-medium text-slate-700",
                        children: group.typeName
                    }, void 0, false, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 322,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: group.values.map((value)=>{
                            const isSelected = selectedOptions.get(group.typeId) === value.valueId;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onOptionSelect(group.typeId, value.valueId),
                                className: `rounded-lg border px-3 py-1.5 text-sm font-medium transition ${isSelected ? "border-primary bg-orange-50 text-primary" : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"}`,
                                children: value.valueName
                            }, value.valueId, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 327,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this)
                ]
            }, group.typeId, true, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 321,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
_s3(VariantPicker, "4acitWHgkn+2raq/MRVTB7GLoFo=");
_c4 = VariantPicker;
function ProductLegacyDetail({ productId }) {
    _s4();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("ProductDetail");
    const tCommon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Common");
    const tCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("ProductCard");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data, isLoading, isError, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductLegacy"])(productId);
    const { addItemWithNotification, isAddingItem, lastMessage, openCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartContext"])();
    const placeholderSrc = usePlaceholderSrc();
    const displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductLegacyDetail.useMemo[displayName]": ()=>{
            if (!data) return "";
            if (locale === "vi") return data.name;
            return data.nameEn?.trim() ? data.nameEn : data.name;
        }
    }["ProductLegacyDetail.useMemo[displayName]"], [
        data,
        locale
    ]);
    const shortDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductLegacyDetail.useMemo[shortDescription]": ()=>{
            if (!data) return "";
            if (locale === "vi") return data.shortContent || data.shortContentEn || "";
            return data.shortContentEn?.trim() ? data.shortContentEn : data.shortContent || "";
        }
    }["ProductLegacyDetail.useMemo[shortDescription]"], [
        data,
        locale
    ]);
    const htmlContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductLegacyDetail.useMemo[htmlContent]": ()=>{
            if (!data) return "";
            let content = "";
            if (locale === "vi") {
                content = data.content || data.contentEn || "";
            } else {
                const en = data.contentEn && data.contentEn.trim().length > 0 ? data.contentEn : "";
                content = en || data.content || "";
            }
            // Rewrite image URLs in HTML content to use full domain
            return content ? rewriteContentImages(content) : "";
        }
    }["ProductLegacyDetail.useMemo[htmlContent]"], [
        data,
        locale
    ]);
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductLegacyDetail.useMemo[images]": ()=>{
            if (!data) return [];
            const rawImages = [
                data.image,
                data.image2,
                data.image3,
                data.image4
            ];
            const normalized = rawImages.map({
                "ProductLegacyDetail.useMemo[images].normalized": (src)=>normalizeImage(src)
            }["ProductLegacyDetail.useMemo[images].normalized"]).filter(Boolean);
            // Debug: log image URLs
            console.log("[ProductLegacyDetail] Raw images:", rawImages);
            console.log("[ProductLegacyDetail] Normalized images:", normalized);
            return normalized;
        }
    }["ProductLegacyDetail.useMemo[images]"], [
        data
    ]);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("info");
    // Fetch variants (API returns wrapper: { activeSaleOff, variants })
    const { data: variantsData, isLoading: isLoadingVariants } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductVariants"])(productId);
    const variants = variantsData?.variants;
    const variantActiveSaleOff = variantsData?.activeSaleOff ?? 0;
    const hasVariants = variants && variants.length > 0;
    // State for selected variant options
    const [selectedOptions, setSelectedOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    // State for wholesale price modal
    const [showWholesaleModal, setShowWholesaleModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Find the matching variant based on selected options
    const selectedVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductLegacyDetail.useMemo[selectedVariant]": ()=>{
            if (!hasVariants) return null;
            return findMatchingVariant(variants, selectedOptions);
        }
    }["ProductLegacyDetail.useMemo[selectedVariant]"], [
        variants,
        selectedOptions,
        hasVariants
    ]);
    // Handle option selection
    const handleOptionSelect = (typeId, valueId)=>{
        setSelectedOptions((prev)=>{
            const newMap = new Map(prev);
            newMap.set(typeId, valueId);
            return newMap;
        });
    };
    // Auto-select first variant options when variants are loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductLegacyDetail.useEffect": ()=>{
            if (variants && variants.length > 0 && selectedOptions.size === 0) {
                const firstVariant = variants[0];
                if (firstVariant.options && firstVariant.options.length > 0) {
                    const defaultOptions = new Map();
                    firstVariant.options.forEach({
                        "ProductLegacyDetail.useEffect": (opt)=>{
                            defaultOptions.set(opt.productTypeId, opt.productTypeValueId);
                        }
                    }["ProductLegacyDetail.useEffect"]);
                    setSelectedOptions(defaultOptions);
                }
            }
        }
    }["ProductLegacyDetail.useEffect"], [
        variants
    ]);
    // Fetch related and similar products only when their tabs are active
    const { data: relatedProducts, isLoading: isLoadingRelated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductRelated"])(productId, activeTab === "related");
    const { data: similarProducts, isLoading: isLoadingSimilar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductSimilar"])(productId, activeTab === "similar");
    const mainImage = selectedImage || images[0] || placeholderSrc;
    const formatPrice = (value)=>value.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", {
            minimumFractionDigits: 0
        });
    // Calculate price and stock based on variant (if available) or legacy data
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const currentPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductLegacyDetail.useMemo[currentPrice]": ()=>{
            if (hasVariants && selectedVariant) {
                return getPriceForQuantity(selectedVariant, quantity);
            }
            return data?.finalPrice || 0;
        }
    }["ProductLegacyDetail.useMemo[currentPrice]"], [
        hasVariants,
        selectedVariant,
        quantity,
        data?.finalPrice
    ]);
    const currentStock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductLegacyDetail.useMemo[currentStock]": ()=>{
            if (hasVariants && selectedVariant) {
                return selectedVariant.stock;
            }
            return data?.quantity || 0;
        }
    }["ProductLegacyDetail.useMemo[currentStock]"], [
        hasVariants,
        selectedVariant,
        data?.quantity
    ]);
    const currentSku = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductLegacyDetail.useMemo[currentSku]": ()=>{
            if (hasVariants && selectedVariant) {
                return selectedVariant.sku;
            }
            return data?.code || null;
        }
    }["ProductLegacyDetail.useMemo[currentSku]"], [
        hasVariants,
        selectedVariant,
        data?.code
    ]);
    const hasDiscount = data && data.originalPrice !== null && data.originalPrice > 0 && data.originalPrice > currentPrice;
    const discountPercent = hasDiscount && data ? Math.round((data.originalPrice - currentPrice) / data.originalPrice * 100) : 0;
    // Active discount: use variant's activeSaleOff if has variants, otherwise product's activeSaleOff
    const activeDiscount = hasVariants ? variantActiveSaleOff : data?.activeSaleOff || 0;
    const hasActiveDiscount = activeDiscount > 0;
    const totalDiscount = activeDiscount * quantity;
    const hasStock = currentStock > 0;
    const handleQuantityChange = (delta)=>{
        setQuantity((prev)=>{
            if (!hasStock) return 0;
            const next = prev + delta;
            const min = 1;
            const max = currentStock;
            if (next < min) return min;
            if (next > max) return max;
            return next;
        });
    };
    // Error message for variant selection
    const [variantError, setVariantError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleAddToCart = async ()=>{
        if (!data || !hasStock) return;
        // If product has variants, user must select one
        if (hasVariants && !selectedVariant) {
            setVariantError(t("selectVariant"));
            return;
        }
        setVariantError(null);
        // Use variant ID if available, otherwise this product might not support cart
        // (legacy products without variants might need different handling)
        const variantId = selectedVariant?.id;
        if (!variantId) {
            // For legacy products without variants, we can't add to cart via API
            // Show a message or handle differently
            setVariantError(t("noCartSupport"));
            return;
        }
        try {
            await addItemWithNotification(variantId, quantity, displayName);
            openCart(); // Open cart drawer to show the added item
        } catch (err) {
            // Error is already handled by addItemWithNotification
            console.error("Failed to add to cart:", err);
        }
    };
    const handleBuyNow = async ()=>{
        if (!data || !hasStock) return;
        // If product has variants, user must select one
        if (hasVariants && !selectedVariant) {
            setVariantError(t("selectVariant"));
            return;
        }
        setVariantError(null);
        const variantId = selectedVariant?.id;
        if (!variantId) {
            setVariantError(t("noCartSupport"));
            return;
        }
        try {
            await addItemWithNotification(variantId, quantity, displayName);
            // Navigate to checkout page
            router.push(`/${locale}/checkout`);
        } catch (err) {
            console.error("Failed to add to cart:", err);
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm",
            children: tCommon("loading")
        }, void 0, false, {
            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
            lineNumber: 567,
            columnNumber: 7
        }, this);
    }
    if (isError || !data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 shadow-sm",
            children: [
                error instanceof Error ? error.message : tCommon("error"),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "ml-3 rounded-md border border-red-200 px-3 py-1 text-xs font-medium text-red-700 hover:bg-red-100",
                    onClick: ()=>refetch(),
                    children: tCommon("retry")
                }, void 0, false, {
                    fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                    lineNumber: 577,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
            lineNumber: 575,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "text-xs text-slate-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-x-1 gap-y-0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${locale}`,
                            className: "hover:text-primary",
                            children: tCommon("home")
                        }, void 0, false, {
                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                            lineNumber: 591,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                            lineNumber: 594,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hover:text-primary",
                            children: data.categoryName
                        }, void 0, false, {
                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                            lineNumber: 595,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                            lineNumber: 596,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "min-w-0 truncate text-slate-700",
                            children: displayName
                        }, void 0, false, {
                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                            lineNumber: 597,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                    lineNumber: 590,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 589,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-3 grid gap-4 sm:mt-4 sm:gap-6 lg:gap-8 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:mx-0 sm:max-w-none sm:p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-square overflow-hidden rounded-xl bg-slate-50 sm:aspect-[4/3]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: mainImage,
                                    alt: displayName,
                                    fill: true,
                                    sizes: "(min-width: 1024px) 320px, (min-width: 640px) 50vw, 280px",
                                    className: "object-contain p-2 sm:p-3",
                                    unoptimized: true,
                                    onError: (e)=>{
                                        if (e.target.src !== placeholderSrc) {
                                            setSelectedImage(placeholderSrc);
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                    lineNumber: 604,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 603,
                                columnNumber: 11
                            }, this),
                            images.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 grid grid-cols-3 gap-1.5 sm:mt-3 sm:grid-cols-4 sm:gap-2",
                                children: images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSelectedImage(img),
                                        className: `relative aspect-[4/3] overflow-hidden rounded-lg border ${mainImage === img ? "border-primary ring-1 ring-primary" : "border-slate-200"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: img,
                                            alt: displayName,
                                            fill: true,
                                            sizes: "(min-width: 640px) 80px, 60px",
                                            className: "object-contain p-1",
                                            unoptimized: true,
                                            onError: (e)=>{
                                                e.target.src = placeholderSrc;
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                            lineNumber: 629,
                                            columnNumber: 19
                                        }, this)
                                    }, img, false, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 621,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 619,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 602,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs uppercase tracking-wide text-slate-500",
                                children: data.categoryName
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 647,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-1 text-lg font-semibold text-slate-900 sm:text-xl",
                                children: displayName
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 648,
                                columnNumber: 11
                            }, this),
                            shortDescription ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 overflow-hidden break-words text-sm text-slate-700 [&_*]:max-w-full",
                                dangerouslySetInnerHTML: {
                                    __html: shortDescription
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 650,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: t("code"),
                                        value: data.code
                                    }, void 0, false, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 657,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: t("provider"),
                                        value: data.providerName
                                    }, void 0, false, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 658,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: t("type"),
                                        value: data.type
                                    }, void 0, false, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 659,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: t("origin"),
                                        value: data.origin
                                    }, void 0, false, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 660,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: t("unit"),
                                        value: data.unit
                                    }, void 0, false, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 661,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 656,
                                columnNumber: 11
                            }, this),
                            selectedVariant?.priceTiers && selectedVariant.priceTiers.length > 1 && (()=>{
                                const sortedTiers = [
                                    ...selectedVariant.priceTiers
                                ].sort((a, b)=>a.minQty - b.minQty);
                                const basePrice = sortedTiers[0]?.price || selectedVariant.price || 0;
                                // Show first 2 tiers inline
                                const previewTiers = sortedTiers.slice(0, 2);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/80 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shrink-0 text-sm text-slate-500",
                                            children: t("wholesale.title")
                                        }, void 0, false, {
                                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                            lineNumber: 673,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-700",
                                                children: previewTiers.map((tier, idx)=>{
                                                    const nextTier = sortedTiers[idx + 1];
                                                    const maxQty = nextTier ? nextTier.minQty - 1 : null;
                                                    const range = maxQty ? `${tier.minQty} - ${maxQty}` : `≥ ${tier.minQty}`;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            idx > 0 && ", ",
                                                            t("wholesale.buyItems"),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: [
                                                                    "(",
                                                                    range,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 27
                                                            }, this),
                                                            " ",
                                                            t("wholesale.itemsFor"),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-primary",
                                                                children: [
                                                                    formatPrice(tier.price),
                                                                    "đ"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                                lineNumber: 688,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, tier.id, true, {
                                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 677,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowWholesaleModal(true),
                                            className: "shrink-0 text-sm font-medium text-primary hover:underline",
                                            children: [
                                                t("wholesale.viewMore"),
                                                " >"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                            lineNumber: 694,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                    lineNumber: 672,
                                    columnNumber: 15
                                }, this);
                            })(),
                            selectedVariant?.priceTiers && selectedVariant.priceTiers.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WholesalePriceModal, {
                                isOpen: showWholesaleModal,
                                onClose: ()=>setShowWholesaleModal(false),
                                priceTiers: selectedVariant.priceTiers,
                                basePrice: selectedVariant.priceTiers[0]?.price || selectedVariant.price || 0,
                                locale: locale,
                                formatPrice: formatPrice
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 707,
                                columnNumber: 13
                            }, this),
                            hasVariants && variants && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VariantPicker, {
                                variants: variants,
                                selectedOptions: selectedOptions,
                                onOptionSelect: handleOptionSelect,
                                locale: locale
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 719,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 space-y-2 rounded-xl bg-orange-50/60 p-3 sm:mt-4 sm:p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-baseline gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold text-primary sm:text-2xl",
                                                children: currentPrice > 0 ? `${formatPrice(currentPrice - activeDiscount)} đ` : t("contact")
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 729,
                                                columnNumber: 15
                                            }, this),
                                            hasActiveDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-slate-400 line-through",
                                                children: [
                                                    formatPrice(currentPrice),
                                                    " đ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 735,
                                                columnNumber: 17
                                            }, this),
                                            !hasActiveDiscount && hasDiscount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-slate-400 line-through",
                                                children: [
                                                    formatPrice(data.originalPrice),
                                                    " đ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 740,
                                                columnNumber: 17
                                            }, this) : null,
                                            hasActiveDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600",
                                                children: [
                                                    "-",
                                                    formatPrice(activeDiscount),
                                                    " đ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 745,
                                                columnNumber: 17
                                            }, this),
                                            !hasActiveDiscount && discountPercent > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600",
                                                children: [
                                                    "-",
                                                    discountPercent,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 750,
                                                columnNumber: 17
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 728,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-medium ${hasStock ? "text-green-600" : "text-red-500"}`,
                                                children: hasStock ? `${t("stock")}: ${currentStock} ${t("items")}` : t("outOfStock")
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 756,
                                                columnNumber: 15
                                            }, this),
                                            currentSku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-w-0 truncate text-slate-500",
                                                children: [
                                                    "SKU: ",
                                                    currentSku
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 762,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 755,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 727,
                                columnNumber: 11
                            }, this),
                            variantError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600",
                                children: variantError
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 769,
                                columnNumber: 13
                            }, this),
                            lastMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-3 rounded-lg border px-3 py-2 text-sm ${lastMessage.type === "success" ? "border-green-200 bg-green-50 text-green-700" : "border-red-200 bg-red-50 text-red-600"}`,
                                children: lastMessage.text
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 776,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-wrap items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 px-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleQuantityChange(-1),
                                                disabled: !hasStock || quantity <= 1 || isAddingItem,
                                                className: "flex h-9 w-9 items-center justify-center rounded-l-xl text-base text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40",
                                                children: "−"
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 789,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-10 text-center text-sm font-semibold text-slate-800",
                                                children: quantity
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 797,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleQuantityChange(1),
                                                disabled: !hasStock || quantity >= currentStock || isAddingItem,
                                                className: "flex h-9 w-9 items-center justify-center rounded-r-xl text-base text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 800,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 788,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleAddToCart,
                                        disabled: !hasStock || isAddingItem,
                                        className: "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-slate-300",
                                        children: [
                                            isAddingItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-4 w-4 animate-spin",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        className: "opacity-25",
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10",
                                                        stroke: "currentColor",
                                                        strokeWidth: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                        lineNumber: 818,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        className: "opacity-75",
                                                        fill: "currentColor",
                                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                        lineNumber: 819,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                                lineNumber: 817,
                                                columnNumber: 17
                                            }, this),
                                            t("addToCart")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 810,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleBuyNow,
                                        disabled: !hasStock || isAddingItem,
                                        className: "inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-orange-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-300",
                                        children: t("buyNow")
                                    }, void 0, false, {
                                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                        lineNumber: 824,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 787,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 646,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 601,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 border-b border-slate-200 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("info"),
                                className: `rounded-lg px-3 py-1 text-sm font-semibold transition ${activeTab === "info" ? "bg-orange-50 text-primary" : "text-slate-500 hover:text-slate-700"}`,
                                children: t("tabs.info")
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 838,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("related"),
                                className: `rounded-lg px-3 py-1 text-sm font-semibold transition ${activeTab === "related" ? "bg-orange-50 text-primary" : "text-slate-500 hover:text-slate-700"}`,
                                children: t("tabs.related")
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 849,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("similar"),
                                className: `rounded-lg px-3 py-1 text-sm font-semibold transition ${activeTab === "similar" ? "bg-orange-50 text-primary" : "text-slate-500 hover:text-slate-700"}`,
                                children: t("tabs.similar")
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 860,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 837,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-3",
                        children: [
                            activeTab === "info" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prose max-w-none overflow-x-auto text-sm prose-img:max-w-full prose-table:w-full prose-table:table-fixed prose-pre:overflow-x-auto prose-ul:list-disc prose-li:marker:text-slate-500 [&_*]:max-w-full",
                                // TODO: sanitize HTML before production (e.g. DOMPurify)
                                dangerouslySetInnerHTML: {
                                    __html: htmlContent || ""
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 874,
                                columnNumber: 13
                            }, this),
                            activeTab === "related" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductGrid, {
                                products: relatedProducts || [],
                                locale: locale,
                                placeholderSrc: placeholderSrc,
                                isLoading: isLoadingRelated,
                                emptyMessage: t("noRelated")
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 881,
                                columnNumber: 13
                            }, this),
                            activeTab === "similar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductGrid, {
                                products: similarProducts || [],
                                locale: locale,
                                placeholderSrc: placeholderSrc,
                                isLoading: isLoadingSimilar,
                                emptyMessage: t("noSimilar")
                            }, void 0, false, {
                                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                                lineNumber: 890,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                        lineNumber: 872,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product/ProductLegacyDetail.tsx",
                lineNumber: 836,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/product/ProductLegacyDetail.tsx",
        lineNumber: 588,
        columnNumber: 5
    }, this);
}
_s4(ProductLegacyDetail, "WLbRkE4z/Ojf0OGa3OcyCsEdCzg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$6$2e$1_next$40$16$2e$0$2e$3_e6be4854f8439f45787e7743b3fd0c4f$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductLegacy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartContext"],
        usePlaceholderSrc,
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductVariants"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductRelated"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProductLegacy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductSimilar"]
    ];
});
_c5 = ProductLegacyDetail;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "InfoRow");
__turbopack_context__.k.register(_c1, "RelatedProductCard");
__turbopack_context__.k.register(_c2, "ProductGrid");
__turbopack_context__.k.register(_c3, "WholesalePriceModal");
__turbopack_context__.k.register(_c4, "VariantPicker");
__turbopack_context__.k.register(_c5, "ProductLegacyDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/[locale]/products/[productId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MainLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2f$ProductLegacyDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product/ProductLegacyDetail.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function ProductPage({ params }) {
    const { productId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const id = Number(productId);
    if (isNaN(id) || id <= 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-red-200 bg-red-50 p-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-600",
                    children: "Invalid product ID"
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/products/[productId]/page.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/products/[productId]/page.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/[locale]/products/[productId]/page.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2f$ProductLegacyDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            productId: id
        }, void 0, false, {
            fileName: "[project]/app/[locale]/products/[productId]/page.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/[locale]/products/[productId]/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = ProductPage;
var _c;
__turbopack_context__.k.register(_c, "ProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1a8ec699._.js.map