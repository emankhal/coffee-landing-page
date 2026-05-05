import { useEffect } from 'react';
const ModernTranslate = () => {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ar',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // 2. تحميل السكربت
    const id = 'google-translate-script';
    if (!document.getElementById(id)) {
      const script = document.createElement('script');
      script.id = id;
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // 3. وظيفة حذف الشريط فور ظهوره (بدون تعطيل الترجمة)
    const hideBar = () => {
      const frame = document.querySelector('.goog-te-banner-frame');
      if (frame) {
        frame.style.setProperty('display', 'none', 'important');
      }
      document.body.style.top = '0px';
    };

    const interval = setInterval(hideBar, 100);
    return () => clearInterval(interval);
  }, []);

  // دالة تبديل اللغة البرمجية
  window.changeLanguage = () => {
    const select = document.querySelector('.goog-te-combo');
    if (!select) {
      console.log("Translation engine is still loading... retrying.");
      setTimeout(window.changeLanguage, 500);
      return;
    }

    const currentLang = select.value;
    const targetLang = currentLang === 'ar' ? 'en' : 'ar';

    select.value = targetLang;
    select.dispatchEvent(new Event('change'));

   
  };

  return (
    <div id="google_translate_element" style={{ display: 'none' }}></div>
  );
};

export default ModernTranslate;