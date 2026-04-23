(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/prompts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Journal prompts grouped by mood. When "random" is selected we pull from
// every category flattened together.
__turbopack_context__.s([
    "MOODS",
    ()=>MOODS,
    "MOOD_HEADLINES",
    ()=>MOOD_HEADLINES,
    "PROMPTS",
    ()=>PROMPTS,
    "RANDOM_MOOD",
    ()=>RANDOM_MOOD,
    "getPromptPool",
    ()=>getPromptPool,
    "getRandomPrompt",
    ()=>getRandomPrompt
]);
const MOODS = [
    {
        id: "creative",
        label: "Creative"
    },
    {
        id: "happy",
        label: "Happy"
    },
    {
        id: "sad",
        label: "Sad"
    },
    {
        id: "enraged",
        label: "Enraged"
    },
    {
        id: "nostalgic",
        label: "Nostalgic"
    },
    {
        id: "melancholic",
        label: "Melancholic"
    },
    {
        id: "grief",
        label: "In grief"
    }
];
const RANDOM_MOOD = {
    id: "random",
    label: "Give me anything"
};
const MOOD_HEADLINES = {
    creative: "A spark for your creative mind:",
    happy: "Here's a prompt to sit with the joy:",
    sad: "Here's a prompt to soak in the sadness:",
    enraged: "Here's a prompt to let the fire speak:",
    nostalgic: "Here's a prompt for the wistful wanderer:",
    melancholic: "Here's a prompt for the quiet blue:",
    grief: "Here's a gentle prompt for today:",
    random: "Because you're up for anything... here's today's prompt:"
};
const PROMPTS = {
    creative: [
        "Invent a small ritual you'd perform before starting any creative work.",
        "Describe an object from your childhood as if it were a character.",
        "Write a scene set entirely inside a single color.",
        "What would your hands make if they never got tired?",
        "Imagine a museum of feelings. Which room do you visit first?",
        "Describe a sound you've never heard but desperately want to.",
        "If your current mood were a building, what would it look like?"
    ],
    happy: [
        "What small thing today felt disproportionately good?",
        "Describe a moment this week you'd press pause on and live in forever.",
        "Who or what made you feel seen lately?",
        "What's something you're quietly proud of?",
        "List five tiny luxuries that cost almost nothing.",
        "Describe happiness as a weather pattern.",
        "What would you tell last year's version of you right now?"
    ],
    sad: [
        "What is the sadness trying to show you?",
        "Write a letter to the part of yourself that's hurting.",
        "Describe a color that matches how today feels.",
        "What comfort, however small, is available to you right now?",
        "If your sadness had a shape, what would you do with it?",
        "Whose voice would you want beside you at this moment, and why?",
        "What do you need to let go of, even just a little?"
    ],
    enraged: [
        "Write everything you wish you'd said, without editing.",
        "What boundary is your anger pointing at?",
        "Describe the anger as a creature. What does it want?",
        "Whose expectation are you no longer willing to carry?",
        "If this anger were heat, what would it cook, and what would it burn?",
        "What old story is this rage actually finishing?",
        "Write a letter you'll never send to the person you're angriest at."
    ],
    nostalgic: [
        "What smell transports you somewhere? Describe the place.",
        "Write about a song that belongs to a specific summer of your life.",
        "Which version of yourself do you miss the most?",
        "Describe a room from a house you no longer live in.",
        "What tradition from your past would you want to resurrect?",
        "Who would you text right now if time didn't matter?",
        "Write about a meal that tastes like a memory."
    ],
    melancholic: [
        "What quiet ache have you been carrying?",
        "Describe the feeling of rain through a window.",
        "What beautiful thing makes you a little sad?",
        "Write about something ending that you haven't fully mourned.",
        "Describe a goodbye that still lingers.",
        "What would it look like to honor this sadness instead of fix it?",
        "Write a love letter to a season that's leaving."
    ],
    grief: [
        "What do you wish you could tell them today?",
        "Describe a small object that holds their presence for you.",
        "What did they teach you, even without trying?",
        "Write about a sound, smell, or place that brings them back.",
        "What part of them lives in how you move through the world?",
        "If grief had a room in you, how would you furnish it?",
        "What do you want to keep? What is okay to soften?"
    ]
};
function getPromptPool(moodId) {
    if (!moodId || moodId === "random") {
        return Object.values(PROMPTS).flat();
    }
    return PROMPTS[moodId] ?? [];
}
function getRandomPrompt(moodId, avoid) {
    const pool = getPromptPool(moodId);
    if (pool.length === 0) return "";
    if (pool.length === 1) return pool[0];
    let next = pool[Math.floor(Math.random() * pool.length)];
    let safety = 0;
    while(next === avoid && safety < 8){
        next = pool[Math.floor(Math.random() * pool.length)];
        safety += 1;
    }
    return next;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Chip.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
/**
 * Chip — pill-shaped mood selector.
 *
 * Variants:
 *  - default  → muted outline, fills with sand/stone when active
 *  - gradient → reserved for the special "Give me anything" chip; when
 *               active, uses a vivid pink → orange → blue gradient with
 *               italic white text (same in both light and dark mode).
 *
 * The gradient variant uses a 1×1 CSS grid with a hidden italic "ghost"
 * sibling so the chip always reserves space for the wider italic version
 * — the visible label can switch between roman and italic without
 * causing the chip to grow or shrink.
 *
 * The Figma uses Instrument Serif Regular 24px for chip text.
 */ const GRADIENT_BG = "linear-gradient(91deg, #FF56A5 0.59%, #FF7935 54.54%, #6D88FF 100.93%)";
function Chip({ label, active = false, onClick, variant = "default" }) {
    const isGradient = variant === "gradient";
    const isGradientActive = active && isGradient;
    const renderLabel = ()=>{
        if (!isGradient) return label;
        // Stack a hidden italic ghost on top of the visible label so the
        // chip's width is always sized for the italic version.
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "grid",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    className: "invisible italic [grid-area:1/1]",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/app/components/Chip.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `[grid-area:1/1] ${active ? "italic" : "not-italic"}`,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/app/components/Chip.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Chip.jsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        "aria-pressed": active,
        style: isGradientActive ? {
            background: GRADIENT_BG
        } : undefined,
        className: [
            "rounded-full px-4 py-2 font-serif text-2xl leading-none tracking-label",
            "transition-all duration-300 ease-out",
            "hover:-translate-y-[1px] active:translate-y-0",
            isGradientActive ? [
                // gradient active — overrides theme-driven active styles
                "text-white border border-transparent",
                "shadow-[0_6px_22px_-6px_rgba(255,121,53,0.55)]"
            ].join(" ") : active ? [
                // standard active — filled pill
                "bg-[var(--chip-active-bg)] text-[var(--chip-active-text)]",
                "shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08)]"
            ].join(" ") : [
                // default — outlined pill, slightly dim so the active one pops
                "border border-[var(--chip-border)] bg-transparent text-[var(--ink)]",
                "opacity-70 hover:opacity-100"
            ].join(" ")
        ].join(" "),
        children: renderLabel()
    }, void 0, false, {
        fileName: "[project]/app/components/Chip.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = Chip;
var _c;
__turbopack_context__.k.register(_c, "Chip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Button({ variant = "solid", size = "lg", children, onClick, disabled = false, ariaLabel, className = "" }) {
    if (variant === "circle") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClick,
            disabled: disabled,
            "aria-label": ariaLabel,
            className: [
                "flex h-16 w-16 items-center justify-center rounded-full",
                "border border-[var(--btn-circle-border)] bg-transparent",
                "text-[var(--btn-circle-text)] font-serif italic text-4xl leading-none",
                "opacity-80 transition-all duration-200 ease-out",
                "hover:opacity-100 hover:scale-105 active:scale-95",
                "disabled:opacity-30 disabled:pointer-events-none",
                className
            ].join(" "),
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/Button.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    // solid
    const sizeClasses = size === "lg" ? "px-6 py-3 text-[26px] sm:px-8 sm:py-4 sm:text-[40px]" : "px-5 py-3 text-[22px] sm:px-6 sm:text-[32px]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        disabled: disabled,
        "aria-label": ariaLabel,
        className: [
            "inline-flex items-center justify-center rounded-full",
            "bg-[var(--btn-solid-bg)] text-[var(--btn-solid-text)]",
            "font-serif italic leading-none tracking-[0.02em]",
            "opacity-90 transition-all duration-200 ease-out",
            "hover:opacity-100 hover:shadow-lg active:scale-[0.98]",
            "disabled:opacity-40 disabled:pointer-events-none",
            sizeClasses,
            className
        ].join(" "),
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/Button.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Paper.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Paper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Paper({ className = "", children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 600 420",
                preserveAspectRatio: "none",
                className: "absolute inset-0 h-full w-full drop-shadow-[0_4px_40px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_4px_40px_rgba(0,0,0,0.45)]",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: PAPER_PATH,
                        fill: "var(--paper-fill)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Paper.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: TOP_SHADOW_PATH,
                        fill: "var(--paper-shadow-edge)",
                        opacity: "0.55"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Paper.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: BOTTOM_SHADOW_PATH,
                        fill: "var(--paper-shadow-edge)",
                        opacity: "0.55"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Paper.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Paper.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full w-full",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/components/Paper.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Paper.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Paper;
/* ---------------------------------------------------------------
   Hand-crafted torn-edge path. The top zig-zag oscillates between
   y≈2 and y≈28; the bottom between y≈392 and y≈418. Sides are clean.
   --------------------------------------------------------------- */ const PAPER_PATH = `
M 0 20
L 14 8 L 28 22 L 42 6 L 56 18 L 70 4 L 84 24 L 98 10 L 112 20 L 126 5
L 140 15 L 154 25 L 168 9 L 182 22 L 196 4 L 210 18 L 224 12 L 238 24
L 252 7 L 266 19 L 280 3 L 294 15 L 308 25 L 322 10 L 336 20 L 350 4
L 364 14 L 378 24 L 392 8 L 406 18 L 420 3 L 434 13 L 448 23 L 462 9
L 476 19 L 490 5 L 504 15 L 518 25 L 532 10 L 546 20 L 560 4 L 574 14
L 588 24 L 600 18
L 600 398
L 586 412 L 572 398 L 558 414 L 544 400 L 530 414 L 516 398 L 502 412
L 488 398 L 474 414 L 460 400 L 446 413 L 432 398 L 418 414 L 404 402
L 390 415 L 376 400 L 362 414 L 348 398 L 334 412 L 320 400 L 306 415
L 292 400 L 278 414 L 264 402 L 250 413 L 236 400 L 222 414 L 208 402
L 194 413 L 180 398 L 166 412 L 152 400 L 138 414 L 124 400 L 110 413
L 96 402 L 82 414 L 68 400 L 54 413 L 40 400 L 26 414 L 12 400 L 0 410
Z
`.replace(/\s+/g, " ").trim();
// A thin band following the top tear, giving the edge subtle depth.
const TOP_SHADOW_PATH = `
M 0 20
L 14 8 L 28 22 L 42 6 L 56 18 L 70 4 L 84 24 L 98 10 L 112 20 L 126 5
L 140 15 L 154 25 L 168 9 L 182 22 L 196 4 L 210 18 L 224 12 L 238 24
L 252 7 L 266 19 L 280 3 L 294 15 L 308 25 L 322 10 L 336 20 L 350 4
L 364 14 L 378 24 L 392 8 L 406 18 L 420 3 L 434 13 L 448 23 L 462 9
L 476 19 L 490 5 L 504 15 L 518 25 L 532 10 L 546 20 L 560 4 L 574 14
L 588 24 L 600 18
L 600 34
L 588 38 L 574 32 L 560 22 L 546 36 L 532 26 L 518 40 L 504 30 L 490 22
L 476 34 L 462 26 L 448 38 L 434 28 L 420 20 L 406 34 L 392 24 L 378 40
L 364 30 L 350 22 L 336 36 L 322 26 L 308 40 L 294 30 L 280 20 L 266 34
L 252 24 L 238 38 L 224 28 L 210 34 L 196 22 L 182 38 L 168 26 L 154 40
L 140 32 L 126 22 L 112 36 L 98 26 L 84 40 L 70 22 L 56 34 L 42 24
L 28 38 L 14 26 L 0 36
Z
`.replace(/\s+/g, " ").trim();
const BOTTOM_SHADOW_PATH = `
M 0 396
L 12 386 L 26 398 L 40 386 L 54 398 L 68 384 L 82 398 L 96 386 L 110 398
L 124 386 L 138 400 L 152 386 L 166 400 L 180 384 L 194 399 L 208 388
L 222 400 L 236 386 L 250 399 L 264 388 L 278 400 L 292 386 L 306 401
L 320 386 L 334 398 L 348 384 L 362 400 L 376 386 L 390 401 L 404 388
L 418 400 L 432 384 L 446 399 L 460 386 L 474 400 L 488 384 L 502 398
L 516 384 L 530 400 L 544 386 L 558 400 L 572 384 L 586 398 L 600 384
L 600 398
L 586 412 L 572 398 L 558 414 L 544 400 L 530 414 L 516 398 L 502 412
L 488 398 L 474 414 L 460 400 L 446 413 L 432 398 L 418 414 L 404 402
L 390 415 L 376 400 L 362 414 L 348 398 L 334 412 L 320 400 L 306 415
L 292 400 L 278 414 L 264 402 L 250 413 L 236 400 L 222 414 L 208 402
L 194 413 L 180 398 L 166 412 L 152 400 L 138 414 L 124 400 L 110 413
L 96 402 L 82 414 L 68 400 L 54 413 L 40 400 L 26 414 L 12 400 L 0 410
Z
`.replace(/\s+/g, " ").trim();
var _c;
__turbopack_context__.k.register(_c, "Paper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/PaperStack.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Paper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Paper.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/**
 * PaperStack — three torn-edge paper cards stacked together. The two cards in
 * the back are decorative (rotated to match the Figma comp); only the top
 * card is interactive.
 *
 * Drag thresholds and animation timings are kept in module-scope constants so
 * they can be tweaked in one place.
 */ const SWIPE_THRESHOLD = 120; // px the user must drag past to trigger a swipe
const EXIT_DURATION = 380; // ms — must match the .swipe-exit transition
const PaperStack = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function PaperStack({ interactive = false, onSwipe, children }, ref) {
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const startXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const animatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    /* -------------------------------------------------------------
   * Helpers
   * ----------------------------------------------------------- */ const setCardTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PaperStack.PaperStack.useCallback[setCardTransform]": (transform, withTransition)=>{
            const node = cardRef.current;
            if (!node) return;
            if (withTransition) {
                node.classList.remove("no-transition");
            } else {
                node.classList.add("no-transition");
            }
            node.style.transform = transform;
        }
    }["PaperStack.PaperStack.useCallback[setCardTransform]"], []);
    const resetCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PaperStack.PaperStack.useCallback[resetCard]": ()=>{
            const node = cardRef.current;
            if (!node) return;
            node.classList.add("no-transition");
            node.style.transform = "translate3d(0,0,0) rotate(0deg)";
            // Force a reflow before removing the no-transition class so the next
            // pointer interaction animates from a known state.
            // eslint-disable-next-line no-unused-expressions
            node.offsetHeight;
            node.classList.remove("no-transition");
        }
    }["PaperStack.PaperStack.useCallback[resetCard]"], []);
    const triggerExit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PaperStack.PaperStack.useCallback[triggerExit]": (direction)=>{
            if (animatingRef.current) return;
            animatingRef.current = true;
            const node = cardRef.current;
            if (!node) {
                animatingRef.current = false;
                return;
            }
            const sign = direction === "right" ? 1 : -1;
            // Make sure the transition is enabled before assigning the exit transform.
            node.classList.remove("no-transition");
            node.style.transform = `translate3d(${sign * 120}vw, 0, 0) rotate(${sign * 30}deg)`;
            const handleEnd = {
                "PaperStack.PaperStack.useCallback[triggerExit].handleEnd": ()=>{
                    node.removeEventListener("transitionend", handleEnd);
                    // Snap back instantly — the parent will swap the prompt content and
                    // cross-fade it in.
                    resetCard();
                    animatingRef.current = false;
                    if (typeof onSwipe === "function") onSwipe(direction);
                }
            }["PaperStack.PaperStack.useCallback[triggerExit].handleEnd"];
            node.addEventListener("transitionend", handleEnd);
            // Safety timeout in case transitionend doesn't fire (reduced motion etc).
            setTimeout({
                "PaperStack.PaperStack.useCallback[triggerExit]": ()=>{
                    if (animatingRef.current) handleEnd();
                }
            }["PaperStack.PaperStack.useCallback[triggerExit]"], EXIT_DURATION + 120);
        }
    }["PaperStack.PaperStack.useCallback[triggerExit]"], [
        onSwipe,
        resetCard
    ]);
    /* -------------------------------------------------------------
   * Imperative API for external arrow buttons
   * ----------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "PaperStack.PaperStack.useImperativeHandle": ()=>({
                swipeLeft: ({
                    "PaperStack.PaperStack.useImperativeHandle": ()=>triggerExit("left")
                })["PaperStack.PaperStack.useImperativeHandle"],
                swipeRight: ({
                    "PaperStack.PaperStack.useImperativeHandle": ()=>triggerExit("right")
                })["PaperStack.PaperStack.useImperativeHandle"]
            })
    }["PaperStack.PaperStack.useImperativeHandle"], [
        triggerExit
    ]);
    /* -------------------------------------------------------------
   * Pointer handlers
   * ----------------------------------------------------------- */ const onPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PaperStack.PaperStack.useCallback[onPointerDown]": (e)=>{
            if (!interactive || animatingRef.current) return;
            // Only respond to primary button / single touch.
            if (e.pointerType === "mouse" && e.button !== 0) return;
            try {
                e.currentTarget.setPointerCapture(e.pointerId);
            } catch (_) {}
            startXRef.current = e.clientX;
            dxRef.current = 0;
            setDragging(true);
            setCardTransform("translate3d(0,0,0) rotate(0deg)", false);
        }
    }["PaperStack.PaperStack.useCallback[onPointerDown]"], [
        interactive,
        setCardTransform
    ]);
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PaperStack.PaperStack.useCallback[onPointerMove]": (e)=>{
            if (!dragging) return;
            const dx = e.clientX - startXRef.current;
            dxRef.current = dx;
            const rotate = dx / 20;
            setCardTransform(`translate3d(${dx}px, 0, 0) rotate(${rotate}deg)`, false);
        }
    }["PaperStack.PaperStack.useCallback[onPointerMove]"], [
        dragging,
        setCardTransform
    ]);
    const onPointerEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PaperStack.PaperStack.useCallback[onPointerEnd]": (e)=>{
            if (!dragging) return;
            try {
                if (e && e.pointerId !== undefined) {
                    e.currentTarget.releasePointerCapture(e.pointerId);
                }
            } catch (_) {}
            const dx = dxRef.current;
            setDragging(false);
            if (Math.abs(dx) > SWIPE_THRESHOLD) {
                triggerExit(dx > 0 ? "right" : "left");
            } else {
                // Snap back with transition.
                setCardTransform("translate3d(0,0,0) rotate(0deg)", true);
            }
        }
    }["PaperStack.PaperStack.useCallback[onPointerEnd]"], [
        dragging,
        setCardTransform,
        triggerExit
    ]);
    /* -------------------------------------------------------------
   * Render
   * ----------------------------------------------------------- */ // Shared sizing — Figma is ~698 × 603 desktop. Use aspect ratio + clamp.
    const stackSizeClasses = "w-[clamp(280px,82vw,640px)] aspect-[600/420]";
    // The two decorative back cards (no children, no interaction).
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative grid place-items-center select-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative ${stackSizeClasses}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": "true",
                    className: "absolute inset-0 origin-center rotate-[-12.73deg] translate-y-[6px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Paper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "h-full w-full opacity-90"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PaperStack.jsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/PaperStack.jsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": "true",
                    className: "absolute inset-0 origin-center rotate-[9.52deg] translate-y-[2px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Paper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "h-full w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PaperStack.jsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/PaperStack.jsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: cardRef,
                    onPointerDown: onPointerDown,
                    onPointerMove: onPointerMove,
                    onPointerUp: onPointerEnd,
                    onPointerCancel: onPointerEnd,
                    className: [
                        "absolute inset-0 origin-center",
                        "card-swipe",
                        "transition-transform duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        interactive ? "cursor-grab active:cursor-grabbing" : ""
                    ].join(" "),
                    style: {
                        transform: "translate3d(0,0,0) rotate(0deg)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Paper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "h-full w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full w-full items-center justify-center px-6 sm:px-10",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/app/components/PaperStack.jsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/PaperStack.jsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/PaperStack.jsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/PaperStack.jsx",
            lineNumber: 168,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/PaperStack.jsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}, "0GBsJrpQj88UTz8JzQfWwJTkQis=")), "0GBsJrpQj88UTz8JzQfWwJTkQis=");
_c1 = PaperStack;
const __TURBOPACK__default__export__ = PaperStack;
var _c, _c1;
__turbopack_context__.k.register(_c, "PaperStack$forwardRef");
__turbopack_context__.k.register(_c1, "PaperStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/LandingView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prompts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Chip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Chip.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PaperStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PaperStack.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LandingView({ onGenerate }) {
    _s();
    const [activeMood, setActiveMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("creative");
    const handleGenerate = ()=>{
        if (!activeMood) return;
        onGenerate(activeMood);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative z-10 mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-10 sm:py-20 md:pt-48 md:pb-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20 lg:gap-32 xl:gap-40",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-12 md:gap-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-serif text-[72px] leading-[0.95] tracking-tight md:text-[96px] lg:text-[120px]",
                            children: [
                                "What's on your mind",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic text-[var(--ink-soft)]",
                                    children: "?"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingView.jsx",
                                    lineNumber: 32,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LandingView.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]",
                                    children: "I’m feeling…"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingView.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOODS"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Chip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            label: m.label,
                                            active: activeMood === m.id,
                                            onClick: ()=>setActiveMood(m.id)
                                        }, m.id, false, {
                                            fileName: "[project]/app/components/LandingView.jsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingView.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LandingView.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]",
                                    children: "Not feeling anything particular?"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingView.jsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Chip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANDOM_MOOD"].label,
                                        active: activeMood === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANDOM_MOOD"].id,
                                        onClick: ()=>setActiveMood(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANDOM_MOOD"].id),
                                        variant: "gradient"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/LandingView.jsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingView.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LandingView.jsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/LandingView.jsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center md:justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PaperStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        interactive: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variant: "solid",
                            size: "lg",
                            onClick: handleGenerate,
                            disabled: !activeMood,
                            ariaLabel: "Generate a journal prompt",
                            children: "Give me a prompt"
                        }, void 0, false, {
                            fileName: "[project]/app/components/LandingView.jsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/LandingView.jsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/LandingView.jsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/LandingView.jsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/LandingView.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(LandingView, "8irRx98uC+ZTRdZ9fYzrp7zRFMg=");
_c = LandingView;
var _c;
__turbopack_context__.k.register(_c, "LandingView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/PromptView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PromptView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowLeft$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/ArrowLeft.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/ArrowRight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prompts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PaperStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PaperStack.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Button.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PromptView({ moodId, prompt, onNext, onPrev, onHome, canGoBack }) {
    _s();
    const stackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Crossfade key — bumped every time the prompt changes so the inner
    // <span> remounts and re-runs its enter animation.
    const [renderKey, setRenderKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptView.useEffect": ()=>{
            setRenderKey({
                "PromptView.useEffect": (k)=>k + 1
            }["PromptView.useEffect"]);
        }
    }["PromptView.useEffect"], [
        prompt
    ]);
    const handleSwipe = (direction)=>{
        // Right swipe → previous, Left swipe → next (matches arrow direction).
        if (direction === "right") {
            if (canGoBack) onPrev();
            else onNext();
        } else {
            onNext();
        }
    };
    const handlePrevClick = ()=>{
        if (!canGoBack) return;
        if (stackRef.current) stackRef.current.swipeRight();
        else onPrev();
    };
    const handleNextClick = ()=>{
        if (stackRef.current) stackRef.current.swipeLeft();
        else onNext();
    };
    const headline = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOOD_HEADLINES"][moodId] ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOOD_HEADLINES"].random;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]",
                children: headline
            }, void 0, false, {
                fileName: "[project]/app/components/PromptView.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-14 sm:mt-16 md:mt-20 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PaperStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ref: stackRef,
                    interactive: true,
                    onSwipe: handleSwipe,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block max-w-[88%] rotate-[-12deg] text-center font-serif italic leading-[1.05] text-[#4A4947] animate-fade-in text-[clamp(28px,5.6vw,56px)]",
                        children: prompt
                    }, renderKey, false, {
                        fileName: "[project]/app/components/PromptView.jsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/PromptView.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/PromptView.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-16 sm:mt-20 md:mt-24 flex w-full items-center justify-center gap-6 sm:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "circle",
                        onClick: handlePrevClick,
                        disabled: !canGoBack,
                        ariaLabel: "Previous prompt",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowLeft$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft"], {
                            size: 28,
                            weight: "regular"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PromptView.jsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/PromptView.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-[280px] text-center font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]",
                        children: "Swipe or use the buttons to switch prompts"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PromptView.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "circle",
                        onClick: handleNextClick,
                        ariaLabel: "Next prompt",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                            size: 28,
                            weight: "regular"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PromptView.jsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/PromptView.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PromptView.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-16 sm:mt-20 md:mt-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "solid",
                    size: "md",
                    onClick: onHome,
                    ariaLabel: "Back to home",
                    children: "Back to home"
                }, void 0, false, {
                    fileName: "[project]/app/components/PromptView.jsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/PromptView.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PromptView.jsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(PromptView, "q3C6KAR0f8JC9NH6GNlPL9zK9cg=");
_c = PromptView;
var _c;
__turbopack_context__.k.register(_c, "PromptView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Toggle.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Toggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ThemeProvider.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Toggle() {
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = theme === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggleTheme,
        "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
        className: [
            "relative inline-flex h-8 w-[68px] items-center rounded-full border px-1",
            "transition-colors duration-500 ease-out",
            "shadow-toggle dark:shadow-toggle-dark",
            isDark ? "border-stone-400 bg-stone-400" : "border-sand-500 bg-sand-400"
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: [
                    "flex h-6 w-6 items-center justify-center transition-opacity duration-300",
                    isDark ? "opacity-0" : "opacity-100"
                ].join(" "),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SunIcon, {}, void 0, false, {
                    fileName: "[project]/app/components/Toggle.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Toggle.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: [
                    "ml-auto flex h-6 w-6 items-center justify-center transition-opacity duration-300",
                    isDark ? "opacity-100" : "opacity-0"
                ].join(" "),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonIcon, {}, void 0, false, {
                    fileName: "[project]/app/components/Toggle.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Toggle.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: [
                    "absolute left-[3px] top-[3px] h-6 w-6 rounded-full",
                    "transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                    isDark ? "bg-stone-200 opacity-80" : "bg-sand-600"
                ].join(" "),
                style: {
                    transform: isDark ? "translateX(0)" : "translateX(36px)"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Toggle.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Toggle.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Toggle, "Q4eAjrIZ0CuRuhycs6byifK2KBk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toggle;
function SunIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "18",
        height: "18",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "text-stone-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/Toggle.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3v1.5M12 19.5V21M4.2 4.2l1.1 1.1M18.7 18.7l1.1 1.1M3 12h1.5M19.5 12H21M4.2 19.8l1.1-1.1M18.7 5.3l1.1-1.1"
            }, void 0, false, {
                fileName: "[project]/app/components/Toggle.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Toggle.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c1 = SunIcon;
function MoonIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "18",
        height: "18",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"
            }, void 0, false, {
                fileName: "[project]/app/components/Toggle.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 4.5l.7 1.4 1.4.7-1.4.7-.7 1.4-.7-1.4-1.4-.7 1.4-.7z"
            }, void 0, false, {
                fileName: "[project]/app/components/Toggle.jsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Toggle.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_c2 = MoonIcon;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Toggle");
__turbopack_context__.k.register(_c1, "SunIcon");
__turbopack_context__.k.register(_c2, "MoonIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LandingView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/LandingView.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PromptView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PromptView.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Toggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prompts.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Page() {
    _s();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("landing");
    const [mood, setMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleGenerate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[handleGenerate]": (moodId)=>{
            const first = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomPrompt"])(moodId, null);
            setMood(moodId);
            setHistory([
                first
            ]);
            setIndex(0);
            setView("prompt");
        }
    }["Page.useCallback[handleGenerate]"], []);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[handleNext]": ()=>{
            setHistory({
                "Page.useCallback[handleNext]": (prev)=>{
                    // If we're already at the end of history, generate a fresh prompt.
                    if (index >= prev.length - 1) {
                        const current = prev[index];
                        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomPrompt"])(mood, current);
                        const updated = [
                            ...prev,
                            next
                        ];
                        setIndex(updated.length - 1);
                        return updated;
                    }
                    // Otherwise step forward through previously seen prompts.
                    setIndex(index + 1);
                    return prev;
                }
            }["Page.useCallback[handleNext]"]);
        }
    }["Page.useCallback[handleNext]"], [
        index,
        mood
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[handlePrev]": ()=>{
            if (index > 0) setIndex(index - 1);
        }
    }["Page.useCallback[handlePrev]"], [
        index
    ]);
    const handleHome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[handleHome]": ()=>{
            setView("landing");
            // Defer state cleanup until after the fade so we don't see a flash.
            setTimeout({
                "Page.useCallback[handleHome]": ()=>{
                    setMood(null);
                    setHistory([]);
                    setIndex(0);
                }
            }["Page.useCallback[handleHome]"], 500);
        }
    }["Page.useCallback[handleHome]"], []);
    const isLanding = view === "landing";
    const currentPrompt = history[index] ?? "";
    const canGoBack = index > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-[100dvh] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-layer"
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-5 top-5 z-30 sm:right-8 sm:top-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: [
                    "absolute inset-0 overflow-y-auto overflow-x-hidden transition-all duration-500 ease-out",
                    isLanding ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                ].join(" "),
                "aria-hidden": !isLanding,
                children: isLanding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LandingView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onGenerate: handleGenerate
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 87,
                    columnNumber: 23
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: [
                    "absolute inset-0 overflow-y-auto overflow-x-hidden transition-all duration-500 ease-out",
                    !isLanding ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
                ].join(" "),
                "aria-hidden": isLanding,
                children: !isLanding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PromptView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    moodId: mood,
                    prompt: currentPrompt,
                    onNext: handleNext,
                    onPrev: handlePrev,
                    onHome: handleHome,
                    canGoBack: canGoBack
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(Page, "iHZ214liPT6OVVoXxlK/u1yLylo=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@phosphor-icons/react/dist/lib/context.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconContext",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    color: "currentColor",
    size: "1em",
    weight: "regular",
    mirrored: !1
});
;
}),
"[project]/node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$context$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/lib/context.es.js [app-client] (ecmascript)");
;
;
const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((s, a)=>{
    const { alt: n, color: r, size: t, weight: o, mirrored: c, children: i, weights: m, ...x } = s, { color: d = "currentColor", size: l, weight: f = "regular", mirrored: g = !1, ...w } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$context$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContext"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        ref: a,
        xmlns: "http://www.w3.org/2000/svg",
        width: t != null ? t : l,
        height: t != null ? t : l,
        fill: r != null ? r : d,
        viewBox: "0 0 256 256",
        transform: c || g ? "scale(-1, 1)" : void 0,
        ...w,
        ...x
    }, !!n && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("title", null, n), i, m.get(o != null ? o : f));
});
p.displayName = "IconBase";
;
}),
"[project]/node_modules/@phosphor-icons/react/dist/defs/ArrowLeft.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const a = /* @__PURE__ */ new Map([
    [
        "bold",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"
        }))
    ],
    [
        "duotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M112,56V200L40,128Z",
            opacity: "0.2"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"
        }))
    ],
    [
        "fill",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"
        }))
    ],
    [
        "light",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"
        }))
    ],
    [
        "regular",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
        }))
    ],
    [
        "thin",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"
        }))
    ]
]);
;
}),
"[project]/node_modules/@phosphor-icons/react/dist/csr/ArrowLeft.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>s,
    "ArrowLeftIcon",
    ()=>r
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$IconBase$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$ArrowLeft$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/defs/ArrowLeft.es.js [app-client] (ecmascript)");
;
;
;
const r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((e, t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$IconBase$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: t,
        ...e,
        weights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$ArrowLeft$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
r.displayName = "ArrowLeftIcon";
const s = r;
;
}),
"[project]/node_modules/@phosphor-icons/react/dist/defs/ArrowRight.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const a = /* @__PURE__ */ new Map([
    [
        "bold",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
        }))
    ],
    [
        "duotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M216,128l-72,72V56Z",
            opacity: "0.2"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"
        }))
    ],
    [
        "fill",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"
        }))
    ],
    [
        "light",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"
        }))
    ],
    [
        "regular",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
        }))
    ],
    [
        "thin",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
        }))
    ]
]);
;
}),
"[project]/node_modules/@phosphor-icons/react/dist/csr/ArrowRight.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>s,
    "ArrowRightIcon",
    ()=>r
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$IconBase$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/defs/ArrowRight.es.js [app-client] (ecmascript)");
;
;
;
const r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((t, e)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$IconBase$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: e,
        ...t,
        weights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
r.displayName = "ArrowRightIcon";
const s = r;
;
}),
]);

//# sourceMappingURL=_0mle0ra._.js.map