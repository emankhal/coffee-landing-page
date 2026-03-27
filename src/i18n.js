import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "nav_home": "Home",
      "nav_coffee": "Coffee",
      "nav_bakery": "Bakery",
      "nav_about": "About",
      "nav_login": "Login",
      "hero_title": "Welcome To Our Coffee Shop",
      "hero_desc": "Discover the perfect blend of flavor and ambiance at our coffee shop. Indulge in expertly crafted brews, cozy atmosphere.",
      "btn_explore": "Explore Our Menu",
      "btn_book": "Book a Table",
      "feat_hot": "Hot Coffee",
      "feat_iced": "Iced Coffee",
      "feat_bakery": "Bakery",
      "feat_dessert": "Desserts",
      "sec_special_coffee": "Our Special Coffee",
      "sec_special_dessert": "Our Special Dessert",
      "btn_add": "Add to Order",
      "beans_title": "Check Out Our Best Coffee Beans",
      "review_title": "Come and Join our happy customers",
      "subscribe_title": "Subscribe to Our Newsletter",
      "subscribe_btn": "Subscribe",
      "footer_copy": "Coffee Co. All rights reserved.",
      "lang_name": "العربية",
      "coffee_name": "Caramel Latte",
      "coffee_type": "Espresso with Milk",
      "coffee_desc": "Experience the rich blend of Arabica beans with a touch of creamy caramel.",
      "btn_add_order": "Add to Order",
      "dessert_name": "Chocolate Cake",
      "dessert_type": "Sweet & Soft",
      "dessert_desc": "Fresh Arabica beans with caramel.",
      "beans_section_title": "Check Out Our Best Coffee Beans",
      "btn_explore_now": "Explore Now",
      "reviews_title_part1": "Come and Join",
      "reviews_title_part2": "our happy customers",
      "customer_job": "Entrepreneur",
      "rev_1_text": "The coffee here is absolutely amazing, the atmosphere is so cozy!",
      "rev_2_text": "Best place to work and enjoy a perfect latte.",
      "subscribe_desc": "Get the latest updates on our products and promotions directly to your inbox.",
      "email_placeholder": "Enter your email",
      "btn_subscribe": "Subscribe",
      "footer_privacy_title": "PRIVACY",
      "footer_terms": "Terms of use",
      "footer_privacy": "Privacy policy",
      "footer_cookies": "Cookies",
      "footer_services_title": "SERVICES",
      "footer_shop": "Shop",
      "footer_order": "Order ahead",
      "footer_menu": "Menu",
      "footer_about_title": "ABOUT US",
      "footer_locations": "Find a location",
      "footer_about": "About us",
      "footer_story": "Our story",
      "footer_info_title": "INFORMATION",
      "footer_plans": "Plans & pricing",
      "footer_sell": "Sell your products",
      "footer_jobs": "Jobs",
      "footer_social_title": "SOCIAL MEDIA",
      "footer_rights": "Coffee Co. All rights reserved."

    }
  },
  ar: {
    translation: {
      "nav_home": "الرئيسية",
      "nav_coffee": "القهوة",
      "nav_bakery": "المخبوزات",
      "nav_about": "من نحن",
      "nav_login": "تسجيل الدخول",
      "hero_title": "أهلاً بك في مقهانا",
      "hero_desc": "اكتشف المزيج المثالي من النكهة والأجواء في مقهانا. استمتع بمشروباتنا المصنوعة ببراعة في أجواء مريحة.",
      "btn_explore": "تصفح القائمة",
      "btn_book": "احجز طاولة",
      "feat_hot": "قهوة ساخنة",
      "feat_iced": "قهوة مثلجة",
      "feat_bakery": "مخبوزات",
      "feat_dessert": "حلويات",
      "reviews_title_part1": "تعال وانضم إلى",
      "reviews_title_part2": "عملائنا السعداء",
      "customer_job": "رائد أعمال",
      "rev_1_text": "القهوة هنا مذهلة حقاً، والأجواء مريحة جداً للاسترخاء!",
      "rev_2_text": "أفضل مكان للعمل والاستمتاع بـ لاتيه مثالي.",
      "beans_section_title": "اكتشف أفضل أنواع حبوب البن لدينا",
      "btn_explore_now": "استكشف الآن",
      "sec_special_coffee": "قهوتنا المميزة",
      "sec_special_dessert": "حلوياتنا الخاصة",
      "btn_add": "أضف للطلب",

      "beans_title": "اكتشف أفضل حبوب البن لدينا",
      "review_title": "انضم إلى عملائنا السعداء",
      "subscribe_title": "اشترك في نشرتنا الإخبارية",
      "subscribe_btn": "اشتراك",
      "footer_copy": "شركة القهوة. جميع الحقوق محفوظة.",
      "lang_name": "English",
      "coffee_name": "كراميل لاتيه",
      "coffee_type": "إسبريسو مع حليب",
      "coffee_desc": "استمتع بمزيج غني من حبوب أرابيكا مع لمسة من الكراميل الكريمي.",

      "btn_add_order": "أضف للطلب",
      "dessert_name": "كيكة الشوكولاتة",
      "dessert_type": "حلوة وطرية",
      "dessert_desc": "مكونات طازجة مع لمسة كراميل مميزة.",
      "subscribe_desc": "احصل على آخر التحديثات حول منتجاتنا وعروضنا مباشرة إلى بريدك الإلكتروني.",
      "email_placeholder": "أدخل بريدك الإلكتروني",
      "btn_subscribe": "اشترك الآن",
      "footer_privacy_title": "الخصوصية",
"footer_terms": "شروط الاستخدام",
"footer_privacy": "سياسة الخصوصية",
"footer_cookies": "ملفات التعريف",
"footer_services_title": "الخدمات",
"footer_shop": "المتجر",
"footer_order": "الطلب المسبق",
"footer_menu": "القائمة",
"footer_about_title": "عن الموقع",
"footer_locations": "فروعنا",
"footer_about": "من نحن",
"footer_story": "قصتنا",
"footer_info_title": "المعلومات",
"footer_plans": "الخطط والأسعار",
"footer_sell": "بع منتجاتك معنا",
"footer_jobs": "الوظائف",
"footer_social_title": "تواصل معنا",
"footer_rights": "شركة كوفي. جميع الحقوق محفوظة."

    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;