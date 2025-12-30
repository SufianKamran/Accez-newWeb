// Static blog data for static export
// When adding new posts, add them to this file

export interface BlogPostMeta {
  slug: string
  title: string
  titleAr: string
  excerpt: string
  excerptAr: string
  date: string
  author: string
  authorAr: string
  coverImage: string
  category: string
  categoryAr: string
  tags: string[]
  tagsAr: string[]
  readingTime: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
  contentAr: string
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'how-to-create-manage-properties-accez-cloud',
    title: 'How to Create and Manage Properties in Accez.Cloud',
    titleAr: 'كيفية إنشاء وإدارة العقارات في Accez.Cloud',
    excerpt: 'Learn how to create, publish, and edit properties in Accez.Cloud. This comprehensive guide walks you through property setup, adding details, and managing your real estate portfolio efficiently.',
    excerptAr: 'تعلم كيفية إنشاء ونشر وتعديل العقارات في Accez.Cloud. يرشدك هذا الدليل الشامل خلال إعداد العقار وإضافة التفاصيل وإدارة محفظتك العقارية بكفاءة.',
    date: '2024-12-20',
    author: 'Accez Team',
    authorAr: 'فريق أكسيز',
    coverImage: '/images/blog/property-management-image.jpg',
    category: 'Tutorials',
    categoryAr: 'الدروس التعليمية',
    tags: ['Property Management', 'Getting Started', 'Tutorial', 'Properties'],
    tagsAr: ['إدارة العقارات', 'البدء', 'دروس تعليمية', 'العقارات'],
    readingTime: '5 min read',
  },
  {
    slug: 'getting-started-with-property-management',
    title: 'Getting Started with Property Management Software',
    titleAr: 'البدء باستخدام برنامج إدارة العقارات',
    excerpt: 'Learn how property management software can transform your rental business and streamline your daily operations.',
    excerptAr: 'تعرف على كيف يمكن لبرنامج إدارة العقارات تحويل أعمال الإيجار الخاصة بك وتبسيط عملياتك اليومية.',
    date: '2024-12-15',
    author: 'Accez Team',
    authorAr: 'فريق أكسيز',
    coverImage: '/images/blog/property-management-image.jpg',
    category: 'Getting Started',
    categoryAr: 'البدء',
    tags: ['Property Management', 'Software', 'Beginner Guide'],
    tagsAr: ['إدارة العقارات', 'البرمجيات', 'دليل المبتدئين'],
    readingTime: '4 min read',
  },
].sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))

// Extract unique categories
export const blogCategories: { en: string; ar: string }[] = Array.from(
  new Map(blogPosts.map((post) => [post.category, post.categoryAr])).entries()
).map(([en, ar]) => ({ en, ar }))

// Extract unique tags
export const blogTags: { en: string; ar: string }[] = Array.from(
  blogPosts.reduce((map, post) => {
    post.tags.forEach((tag, index) => {
      if (!map.has(tag)) {
        map.set(tag, post.tagsAr[index] || tag)
      }
    })
    return map
  }, new Map<string, string>()).entries()
).map(([en, ar]) => ({ en, ar }))

// Full blog post content
export const blogPostsContent: Record<string, { content: string; contentAr: string }> = {
  'how-to-create-manage-properties-accez-cloud': {
    content: `Starting with property management in Accez.Cloud is simple and straightforward. Whether you're managing a single property or an entire portfolio, our platform makes it easy to create, publish, and maintain your property listings. In this guide, we'll walk you through every step of the property creation process.

## What You'll Learn

- How to create a new property from scratch
- Adding essential property details
- Uploading property images and location data
- Publishing your property to make it live
- Editing and updating property information

## Step 1: Navigate to the Properties Page

Begin by logging into your Accez.Cloud property manager portal. From your dashboard, navigate to the Properties section. If you're just getting started, you'll see an empty properties page ready for your first listing.

## Step 2: Create Your First Property

Click on the "Add Property" button to begin the creation process. A form will appear where you'll enter your property's basic information:

- **Property Name**: Give your property a clear, identifiable name
- **Total Number of Units**: Specify how many units are available in this property
- **Number of Floors**: Enter the total floors in the building

Once you've filled in these essential details, click the "Submit" button to create your property.

## Step 3: Add Property Details and Images

After creation, your property will be in draft status. Click on the property card to access the property details section. Here you'll:

- **Upload Property Images**: Choose high-quality photos that showcase your property's best features
- **Add Address Information**: Enter the complete address including street, city, state, and postal code
- **Include Additional Details**: Add any other relevant information about the property

## Step 4: Publish Your Property

Once you've completed all the necessary information, it's time to make your property live. Click the "Publish Property" button. Your property will now be active and visible in your property management system.

You can verify the publication by clicking on the property card and navigating to the property overview section.

## Step 5: Edit and Update Properties

Need to make changes? No problem! Navigate back to your properties list and select the property you want to edit. You can:

- Update property images
- Modify address information
- Change property details
- Update availability status

After making your changes, click the submit button to save your updates.

## Watch the Full Video Tutorial

For a visual walkthrough of the entire property creation process, watch our complete video tutorial:

[Watch: How to Create, Publish & Edit Properties in Accez.Cloud](https://youtu.be/Ws2W3AouRgE?si=6s_41PW_8ZjtQe5u)

## Key Takeaways

- Properties start in draft status and must be published to go live
- High-quality images improve property presentation
- Complete address information is essential for property management
- Properties can be edited and updated at any time
- The property card provides quick access to all property details`,
    contentAr: `البدء بإدارة العقارات في Accez.Cloud بسيط ومباشر. سواء كنت تدير عقاراً واحداً أو محفظة كاملة، تسهل منصتنا إنشاء ونشر وصيانة قوائم عقاراتك. في هذا الدليل، سنرشدك خلال كل خطوة من عملية إنشاء العقار.

## ما ستتعلمه

- كيفية إنشاء عقار جديد من الصفر
- إضافة تفاصيل العقار الأساسية
- رفع صور العقار وبيانات الموقع
- نشر عقارك لجعله مباشراً
- تعديل وتحديث معلومات العقار

## الخطوة 1: الانتقال إلى صفحة العقارات

ابدأ بتسجيل الدخول إلى بوابة مدير العقارات في Accez.Cloud. من لوحة التحكم، انتقل إلى قسم العقارات. إذا كنت قد بدأت للتو، سترى صفحة عقارات فارغة جاهزة لأول قائمة لك.

## الخطوة 2: إنشاء أول عقار لك

انقر على زر "إضافة عقار" لبدء عملية الإنشاء. سيظهر نموذج حيث ستدخل المعلومات الأساسية لعقارك:

- **اسم العقار**: أعطِ عقارك اسماً واضحاً ومميزاً
- **إجمالي عدد الوحدات**: حدد عدد الوحدات المتوفرة في هذا العقار
- **عدد الطوابق**: أدخل إجمالي الطوابق في المبنى

بمجرد ملء هذه التفاصيل الأساسية، انقر على زر "إرسال" لإنشاء عقارك.

## الخطوة 3: إضافة تفاصيل وصور العقار

بعد الإنشاء، سيكون عقارك في حالة مسودة. انقر على بطاقة العقار للوصول إلى قسم تفاصيل العقار. هنا ستقوم بـ:

- **رفع صور العقار**: اختر صوراً عالية الجودة تُظهر أفضل ميزات عقارك
- **إضافة معلومات العنوان**: أدخل العنوان الكامل بما في ذلك الشارع والمدينة والولاية والرمز البريدي
- **تضمين تفاصيل إضافية**: أضف أي معلومات أخرى ذات صلة بالعقار

## الخطوة 4: نشر عقارك

بمجرد إكمال جميع المعلومات اللازمة، حان وقت جعل عقارك مباشراً. انقر على زر "نشر العقار". سيكون عقارك الآن نشطاً ومرئياً في نظام إدارة العقارات الخاص بك.

يمكنك التحقق من النشر بالنقر على بطاقة العقار والانتقال إلى قسم نظرة عامة على العقار.

## الخطوة 5: تعديل وتحديث العقارات

هل تحتاج إلى إجراء تغييرات؟ لا مشكلة! انتقل مرة أخرى إلى قائمة عقاراتك واختر العقار الذي تريد تعديله. يمكنك:

- تحديث صور العقار
- تعديل معلومات العنوان
- تغيير تفاصيل العقار
- تحديث حالة التوفر

بعد إجراء تغييراتك، انقر على زر الإرسال لحفظ تحديثاتك.

## شاهد الفيديو التعليمي الكامل

للحصول على شرح مرئي لعملية إنشاء العقار بالكامل، شاهد الفيديو التعليمي الكامل:

[شاهد: كيفية إنشاء ونشر وتعديل العقارات في Accez.Cloud](https://youtu.be/Ws2W3AouRgE?si=6s_41PW_8ZjtQe5u)

## النقاط الرئيسية

- تبدأ العقارات في حالة مسودة ويجب نشرها لتصبح مباشرة
- الصور عالية الجودة تحسن عرض العقار
- معلومات العنوان الكاملة ضرورية لإدارة العقارات
- يمكن تعديل وتحديث العقارات في أي وقت
- توفر بطاقة العقار وصولاً سريعاً لجميع تفاصيل العقار`,
  },
  'getting-started-with-property-management': {
    content: `Property management software has revolutionized how landlords and property managers handle their rental portfolios. In this guide, we'll explore the key benefits and features you should look for.

## Why Use Property Management Software?

Managing rental properties involves countless tasks - from tenant screening to maintenance requests, rent collection to financial reporting. Property management software centralizes all these functions in one place.

### Key Benefits

**Time Savings**: Automate repetitive tasks like rent reminders and lease renewals.

**Better Organization**: Keep all property documents, tenant information, and financial records in one secure location.

**Improved Communication**: Streamline communications with tenants through integrated messaging systems.

**Financial Insights**: Generate detailed reports on rental income, expenses, and profitability.

## Essential Features to Look For

When choosing property management software, consider these must-have features:

- Online rent collection
- Maintenance request tracking
- Tenant screening capabilities
- Financial reporting tools
- Document storage
- Mobile accessibility

## Getting Started with Accez

Accez.cloud provides all these features and more, designed specifically for modern property managers. Our platform makes it easy to manage single properties or large portfolios with the same powerful tools.

Start your free trial today and experience the difference professional property management software can make.`,
    contentAr: `لقد أحدثت برامج إدارة العقارات ثورة في كيفية تعامل الملاك ومديري العقارات مع محافظهم الإيجارية. في هذا الدليل، سنستكشف الفوائد الرئيسية والميزات التي يجب أن تبحث عنها.

## لماذا تستخدم برنامج إدارة العقارات؟

تتضمن إدارة العقارات المؤجرة مهام لا حصر لها - من فحص المستأجرين إلى طلبات الصيانة، ومن تحصيل الإيجار إلى التقارير المالية. يجمع برنامج إدارة العقارات كل هذه الوظائف في مكان واحد.

### الفوائد الرئيسية

**توفير الوقت**: أتمتة المهام المتكررة مثل تذكيرات الإيجار وتجديد عقود الإيجار.

**تنظيم أفضل**: احتفظ بجميع مستندات العقارات ومعلومات المستأجرين والسجلات المالية في مكان آمن واحد.

**تحسين التواصل**: تبسيط الاتصالات مع المستأجرين من خلال أنظمة المراسلة المتكاملة.

**رؤى مالية**: إنشاء تقارير مفصلة عن دخل الإيجار والمصروفات والربحية.

## الميزات الأساسية التي يجب البحث عنها

عند اختيار برنامج إدارة العقارات، ضع في اعتبارك هذه الميزات الضرورية:

- تحصيل الإيجار عبر الإنترنت
- تتبع طلبات الصيانة
- قدرات فحص المستأجرين
- أدوات التقارير المالية
- تخزين المستندات
- إمكانية الوصول عبر الهاتف المحمول

## البدء مع أكسيز

يوفر Accez.cloud جميع هذه الميزات وأكثر، مصممة خصيصاً لمديري العقارات العصريين. تسهل منصتنا إدارة العقارات الفردية أو المحافظ الكبيرة بنفس الأدوات القوية.

ابدأ تجربتك المجانية اليوم واختبر الفرق الذي يمكن أن يحدثه برنامج إدارة العقارات الاحترافي.`,
  },
}

// Helper function to get full post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  const postMeta = blogPosts.find((p) => p.slug === slug)
  const postContent = blogPostsContent[slug]

  if (!postMeta || !postContent) {
    return null
  }

  return {
    ...postMeta,
    content: postContent.content,
    contentAr: postContent.contentAr,
  }
}
