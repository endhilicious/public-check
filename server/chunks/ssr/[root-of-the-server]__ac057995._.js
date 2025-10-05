module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/SEOSchema.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SEOSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function SEOSchema() {
    // LocalBusiness Schema dengan Rating & Reviews
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://sewamotormakassar.com/#business",
        "name": "Andi Rental - Daeng Remolis",
        "alternateName": "Andi Rental Motor Makassar",
        "description": "Sewa motor murah dan terpercaya di Makassar. Rental motor harian, mingguan, dan bulanan dengan banyak pilihan motor. Melayani area Makassar dan sekitarnya.",
        "image": [
            "https://sewamotormakassar.com/img/banner-promo.png",
            "https://sewamotormakassar.com/img/hero-logo.png",
            "https://sewamotormakassar.com/img/gadget-res.png"
        ],
        "logo": "https://sewamotormakassar.com/img/logo.png",
        "url": "https://sewamotormakassar.com",
        "telephone": "+6281543486139",
        "priceRange": "Rp 80.000 - Rp 150.000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl Pajjaiang raya no 36, depan pintu gerbang perumahan dewi kumalasari",
            "addressLocality": "Makassar",
            "addressRegion": "Sulawesi Selatan",
            "postalCode": "90000",
            "addressCountry": "ID"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-5.1477",
            "longitude": "119.4327"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "08:00",
                "closes": "20:00"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Ahmad Fauzi"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "Pelayanan sangat memuaskan! Motor dalam kondisi bagus dan harga terjangkau. Recommended!"
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Siti Nurhaliza"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "Fast respon, motor bersih terawat. Paling recommended di Makassar!"
            }
        ],
        "areaServed": {
            "@type": "City",
            "name": "Makassar"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Rental Motor Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Rental Motor Harian",
                        "description": "Sewa motor harian mulai dari Rp 80.000"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Rental Motor Mingguan",
                        "description": "Sewa motor mingguan dengan harga special"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Rental Motor Bulanan",
                        "description": "Sewa motor bulanan dengan harga terbaik"
                    }
                }
            ]
        },
        "sameAs": [
            "https://www.facebook.com/sewamotormakassar",
            "https://www.instagram.com/sewamotormakassar"
        ]
    };
    // Product Schema for Motor Rental Service
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Sewa Motor di Makassar - Rental Motor Murah",
        "description": "Rental motor Makassar terlengkap dan terpercaya dengan harga mulai Rp 80.000/hari. Unit terbaru, pelayanan 24/7, free antar jemput.",
        "image": "https://sewamotormakassar.com/img/banner-promo.png",
        "brand": {
            "@type": "Brand",
            "name": "Andi Rental - Daeng Remolis"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
        },
        "offers": {
            "@type": "AggregateOffer",
            "url": "https://sewamotormakassar.com",
            "priceCurrency": "IDR",
            "lowPrice": "80000",
            "highPrice": "150000",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "Andi Rental - Daeng Remolis"
            }
        }
    };
    // BreadcrumbList Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://sewamotormakassar.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Rental Motor Makassar",
                "item": "https://sewamotormakassar.com/#listmotor"
            }
        ]
    };
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Berapa harga sewa motor di Makassar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Harga sewa motor di Makassar mulai dari Rp 80.000 per hari hingga Rp 150.000 tergantung jenis motor dan durasi sewa. Kami juga menyediakan paket mingguan dan bulanan dengan harga lebih hemat."
                }
            },
            {
                "@type": "Question",
                "name": "Apakah ada layanan antar jemput motor?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, kami menyediakan layanan antar jemput motor gratis untuk area Makassar. Anda bisa memesan melalui WhatsApp dan motor akan diantar ke lokasi Anda."
                }
            },
            {
                "@type": "Question",
                "name": "Dokumen apa saja yang diperlukan untuk sewa motor?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Untuk sewa motor di Makassar, Anda cukup membawa KTP/SIM dan melakukan deposit sesuai ketentuan. Prosesnya cepat dan mudah."
                }
            },
            {
                "@type": "Question",
                "name": "Apakah motor rental sudah termasuk helm dan jas hujan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, setiap rental motor sudah termasuk helm dan jas hujan gratis untuk kenyamanan perjalanan Anda."
                }
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(localBusinessSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SEOSchema.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(productSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SEOSchema.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(breadcrumbSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SEOSchema.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(faqSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SEOSchema.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac057995._.js.map