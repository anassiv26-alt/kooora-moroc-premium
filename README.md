# ⚽ كووورة مغربية (Kooora Moroc) — دليل التثبيت والتشغيل

دليل تقني متكامل ومفصل لنشر الواجهة البرمجية، ورفعها على GitHub، واستخدام لوحة التحكم التفاعلية المدمجة.

---

## 🔒 معلومات المرور الخاصة بالإدارة (Admin CMS)
للدخول لغرفة التحكم الرياضية وتعديل ومزامنة المباريات والمقالات، اضغط على أيقونة **الدرع الأمني** في أعلى يسار الشاشة:
* **البريد الإلكتروني المعتمد:** `admin@koooramoroc.ma`
* **كلمة المرور:** `AdminKooora2030!`

---

## ⚙️ 1. تشغيل المشروع محلياً (Local Development)

```bash
# تثبيت الحزم المطلوبة
npm install

# تشغيل الخادم المحلي للتطوير
npm run dev
```

---

## 🐙 2. رفع المشروع على GitHub وتفعيله مجاناً على Cloudflare Pages

1. قم بإنشاء مستودع (Repository) جديد على حسابك في GitHub باسم `kooora-moroc`.
2. افتح مبنى الأوامر (Terminal) في مجلد المشروع وقم برفع الملفات:
```bash
git init
git add .
git commit -m "feat: release kooora moroc v1"
git branch -M main
git remote add origin [https://github.com/VOTRE_PSEUDO/kooora-moroc.git](https://github.com/VOTRE_PSEUDO/kooora-moroc.git)
git push -u origin main
```
3. توجه إلى منصة **Cloudflare Pages** واربطها بحساب GitHub الخاص بك، ثم اختر مستودع `kooora-moroc` واضغط **Deploy**. الموقع الآن متاح للعامة وبسرعة فائقة مجاناً مدى الحياة !

---

## 📱 3. تصدير التطبيق إلى نظام Android (Capacitor)

لتحويل الموقع الإلكتروني إلى تطبيق أندرويد حقيقي بصيغة `.apk` يقبل التثبيت على الهواتف:

```bash
# 1. بناء ملفات الإنتاج النهائية
npm run build

# 2. إضافة حزم Capacitor للمشروع
npm install @capacitor/core @capacitor/cli

# 3. إعداد الإعدادات الأساسية
npx cap init "كووورة مغربية" "com.noureddin.koooramoroc" --web-dir=dist

# 4. تثبيت منصة الأندرويد وربطها
npm install @capacitor/android
npx cap add android

# 5. فتح المشروع على Android Studio لبناء النسخة النهائية
npx cap open android
```