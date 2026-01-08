// main.js - Handling I18n and Navigation

// Translation Dictionary
const i18nData = {
    en: {
        nav: {
            home: "Home",
            monitoring: "Monitoring",
            analysis: "AI Analysis",
            translation: "Local Translation",
            pricing: "Pricing",
            get_extension: "Get Extension"
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    zh: {
        nav: {
            home: "首页",
            monitoring: "全网监控",
            analysis: "AI 分析",
            translation: "本地翻译",
            pricing: "价格",
            get_extension: "获取扩展"
        },
        footer: {
            rights: "版权所有。"
        }
    },
    ja: {
        nav: {
            home: "ホーム",
            monitoring: "モニタリング",
            analysis: "AI分析",
            translation: "ローカル翻訳",
            pricing: "価格",
            get_extension: "拡張機能を入手"
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    ko: {
        nav: {
            home: "홈",
            monitoring: "모니터링",
            analysis: "AI 분석",
            translation: "로컬 번역",
            pricing: "가격",
            get_extension: "확장 프로그램 받기"
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            monitoring: "Surveillance",
            analysis: "Analyse IA",
            translation: "Traduction Locale",
            pricing: "Tarification",
            get_extension: "Obtenir"
        },
        footer: {
            rights: "Tous droits réservés."
        }
    },
    de: {
        nav: {
            home: "Startseite",
            monitoring: "Überwachung",
            analysis: "KI-Analyse",
            translation: "Lokale Übersetzung",
            pricing: "Preise",
            get_extension: "Holen Sie"
        },
        footer: {
            rights: "Alle Rechte vorbehalten."
        }
    }
};

// Page Specific Content (Simplified for demo)
const pageContent = {
    // ... populated inside individual pages via inline script or expanded here
};

function setLanguage(lang) {
    localStorage.setItem('oppradar_lang', lang);
    updatePageContent(lang);
}

function updatePageContent(lang) {
    const data = i18nData[lang] || i18nData.en;
    
    // Update Nav
    document.querySelectorAll('[data-i18n-nav]').forEach(el => {
        const key = el.getAttribute('data-i18n-nav');
        if (data.nav[key]) el.innerText = data.nav[key];
    });

    // Update Footer
    document.querySelectorAll('[data-i18n-footer]').forEach(el => {
        const key = el.getAttribute('data-i18n-footer');
        if (data.footer[key]) el.innerText = data.footer[key];
    });

    // Update Specific Page Content if functions exist
    if (typeof window.updateSpecificPageContent === 'function') {
        window.updateSpecificPageContent(lang);
    }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    const savedLang = localStorage.getItem('oppradar_lang') || 'en';
    updatePageContent(savedLang);
});
