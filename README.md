# شركة قوائم الرواسي للمقاولات | Qawayim Al-Rawasi Contracting Co.

موقع تعريفي ثنائي اللغة (عربي + إنجليزي) لشركة قوائم الرواسي للمقاولات، مبني بـ React + Vite + Tailwind CSS.

A bilingual (Arabic + English) corporate website for Qawayim Al-Rawasi Contracting Co., built with React + Vite + Tailwind CSS.

---

## ✨ المميزات / Features

- ✅ ثنائي اللغة (عربي RTL / إنجليزي LTR)
- ✅ تصميم متجاوب كامل (موبايل، تابلت، ديسكتوب)
- ✅ سلايدر تفاعلي للقسم الرئيسي
- ✅ تنقّل سلس بين الأقسام
- ✅ عدّادات أرقام متحركة
- ✅ نموذج تواصل تفاعلي
- ✅ زر واتساب عائم
- ✅ آراء العملاء بكاروسيل
- ✅ شريط شركاء النجاح متحرك
- ✅ أنيميشن متقدم عند التمرير

---

## 🚀 التشغيل المحلي / Local Development

### المتطلبات / Prerequisites

- [Node.js](https://nodejs.org/) version 18 or later
- npm (يأتي مع Node.js)

### الخطوات / Steps

```bash
# 1. تثبيت المكتبات / Install dependencies
npm install

# 2. تشغيل المشروع / Run dev server
npm run dev

# 3. افتح المتصفح / Open in browser
# http://localhost:5173
```

### بناء الإنتاج / Production Build

```bash
# بناء الموقع للنشر / Build for production
npm run build

# معاينة النسخة المبنية / Preview production build
npm run preview
```

سيتم إنشاء مجلد `dist/` يحتوي على ملفات الموقع جاهزة للنشر.

The `dist/` folder will be created with production-ready files.

---

## 🌐 النشر / Deployment

### الخيار 1: Vercel (موصى به)

1. ارفع الكود إلى GitHub
2. روح إلى [vercel.com](https://vercel.com)
3. سجّل دخول بحساب GitHub
4. اضغط **"Add New Project"**
5. اختر المستودع
6. اضغط **"Deploy"**

✅ موقعك سيكون على رابط مثل: `your-project.vercel.app`

### الخيار 2: Netlify

1. شغّل: `npm run build`
2. روح إلى [netlify.com](https://netlify.com)
3. اسحب مجلد `dist` إلى الصفحة الرئيسية
4. ✅ تم النشر!

### الخيار 3: GitHub Pages

```bash
npm run build
# ارفع محتوى مجلد dist إلى branch gh-pages
```

---

## 📁 هيكل المشروع / Project Structure

```
qawayim-al-rawasi/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── HeavyEquipmentPlatform.jsx   # المكوّن الرئيسي
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎨 الألوان / Color Palette

| اللون | Hex | الاستخدام |
|------|-----|----------|
| Navy Dark | `#0a1628` | الشريط العلوي، النصوص الرئيسية |
| Navy Light | `#152a52` | تدرجات |
| Gold | `#d4a737` | الأزرار، الشعار، التمييز |
| Gold Dark | `#b8901f` | hover للذهبي |

---

## 🛠️ التقنيات المستخدمة / Tech Stack

- **React 18** - UI Library
- **Vite 5** - Build Tool
- **Tailwind CSS 3** - Styling
- **lucide-react** - Icons
- **Pexels CDN** - Images

---

## ✏️ التعديل / Customization

### تغيير معلومات الشركة

افتح ملف `src/components/HeavyEquipmentPlatform.jsx` وابحث عن `const translations`:

```javascript
const translations = {
  ar: {
    topBar: { phone: "+966500317111" }, // غيّر رقم الهاتف
    brand: { line2: "اسم الشركة" },     // غيّر اسم الشركة
    // ...
  }
}
```

### تغيير الألوان

افتح `tailwind.config.js` أو ابحث في الكود عن `#d4a737` (ذهبي) و `#0a1628` (أزرق) واستبدلهم.

### تغيير الصور

ابحث عن `const IMG = {` في `HeavyEquipmentPlatform.jsx` واستبدل الروابط.

---

## 📞 معلومات التواصل / Contact

- **الهاتف / Phone:** +966 50 031 7111
- **البريد / Email:** arafat@alrowasi.com
- **الموقع / Website:** www.alrawasi.com
- **العنوان / Location:** الرياض، المملكة العربية السعودية

---

## 📄 الترخيص / License

© 2026 Qawayim Al-Rawasi Contracting Co. All Rights Reserved.
