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
    slug: 'how-to-create-manage-work-orders-accez-cloud',
    title: 'How to Create and Manage Work Orders in Accez.Cloud',
    titleAr: 'كيفية إنشاء وإدارة أوامر العمل في Accez.Cloud',
    excerpt: 'Streamline maintenance management with Accez.Cloud work orders. Learn how to create, track, and resolve maintenance issues reported by residents efficiently.',
    excerptAr: 'بسّط إدارة الصيانة مع أوامر العمل في Accez.Cloud. تعلم كيفية إنشاء وتتبع وحل مشاكل الصيانة التي يبلغ عنها المقيمون بكفاءة.',
    date: '2026-01-19',
    author: 'Accez Team',
    authorAr: 'فريق أكسيز',
    coverImage: '/images/blog/property-management-image.jpg',
    category: 'Tutorials',
    categoryAr: 'الدروس التعليمية',
    tags: ['Work Orders', 'Maintenance', 'Tutorial', 'Property Management'],
    tagsAr: ['أوامر العمل', 'الصيانة', 'دروس تعليمية', 'إدارة العقارات'],
    readingTime: '7 min read',
  },
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
    slug: 'how-to-create-manage-units-accez-cloud',
    title: 'How to Create and Manage Units in Accez.Cloud',
    titleAr: 'كيفية إنشاء وإدارة الوحدات في Accez.Cloud',
    excerpt: 'Complete guide to creating and managing rental units in Accez.Cloud. Learn about long-term vs short-term units, pricing, lease management, and tenant assignments.',
    excerptAr: 'دليل شامل لإنشاء وإدارة الوحدات الإيجارية في Accez.Cloud. تعرف على الوحدات طويلة الأجل مقابل قصيرة الأجل والتسعير وإدارة عقود الإيجار وتعيين المستأجرين.',
    date: '2024-12-18',
    author: 'Accez Team',
    authorAr: 'فريق أكسيز',
    coverImage: '/images/blog/property-management-image.jpg',
    category: 'Tutorials',
    categoryAr: 'الدروس التعليمية',
    tags: ['Unit Management', 'Getting Started', 'Tutorial', 'Units'],
    tagsAr: ['إدارة الوحدات', 'البدء', 'دروس تعليمية', 'الوحدات'],
    readingTime: '6 min read',
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
  'how-to-create-manage-work-orders-accez-cloud': {
    content: `Effective maintenance management is crucial for property operations and resident satisfaction. Accez.Cloud's work order system helps you document, track, and resolve maintenance issues quickly and efficiently. Whether created by residents or property managers, work orders ensure nothing falls through the cracks.

## What Are Work Orders?

Work orders are formal requests to resolve maintenance issues or complete tasks within your property. They serve as:

- Documentation of maintenance needs
- Tracking tools for issue resolution
- Communication channels between residents and management
- Historical records of property maintenance

## Who Can Create Work Orders?

Work orders in Accez.Cloud can be created by:

- **Residents**: Directly reporting issues they're experiencing
- **Property Managers**: Creating work orders on behalf of residents or for proactive maintenance

This flexibility ensures all maintenance needs are captured and addressed.

## Step 1: Navigate to Work Orders

From your dashboard homepage, navigate to the Properties section. Select the property for which you want to create a work order. Once in the property view, click on the "Work Orders" tab.

## Step 2: Create Your First Work Order

If you haven't created any work orders yet, you'll see an empty work orders page. Click the "Add First Work Order" button to begin.

A new page will open with a comprehensive work order creation form.

## Step 3: Fill in Work Order Details

Complete the following information:

**Title**: Create a clear, descriptive title for the work order (e.g., "Leaking Kitchen Faucet - Unit 204")

**Problem Category**: Select the appropriate category:
- Plumbing
- Electrical
- HVAC
- Appliances
- Structural
- General Maintenance
- Other

**Problem Description**: Provide detailed information about the issue the resident is facing. Include:
- When the problem started
- Severity of the issue
- Any temporary measures taken
- Impact on daily living

**Location Details**:
- Specific area within the property
- Unit number
- Floor
- Exact location within the unit (kitchen, bathroom, etc.)

**Status**: Set the initial work order status:
- Open
- In Progress
- On Hold
- Completed
- Cancelled

**Image Upload**: Add photos documenting the issue. Visual references help maintenance teams understand and prioritize the work.

## Step 4: Submit the Work Order

After filling in all required details, click the "Create" button. Your work order is now successfully created and will appear in the work orders list.

The work order is now trackable and can be assigned to maintenance personnel for resolution.

## Managing Existing Work Orders

### Viewing Work Orders

All created work orders appear in the work orders list with key information:
- Work order title
- Status
- Creation date
- Priority level
- Assigned unit

### Editing Work Orders

To update a work order:

1. Click the three-dot icon next to the work order
2. Select "Edit" from the menu
3. Update any information (status, details, priority)
4. Save your changes

This is particularly useful for:
- Updating status as work progresses
- Adding additional information
- Modifying priority levels
- Recording completion notes

### Deleting Work Orders

If a work order is no longer needed:

1. Click the three-dot icon
2. Select "Delete"
3. Confirm the deletion

**Note**: Only delete work orders that are duplicates or created in error. Completed work orders should be marked as complete for historical records.

## Watch the Full Video Tutorial

See the complete work order creation and management process:

[Watch: How to Create & Manage Work Orders in Accez.Cloud](https://youtu.be/qKjzk0ysrKo)

## Key Takeaways

- Work orders can be created by both residents and property managers
- Detailed descriptions help maintenance teams respond effectively
- Photos provide valuable visual context for issues
- Status tracking ensures nothing is overlooked
- Work order history provides valuable property maintenance records
- Categories help organize and prioritize maintenance requests

## Best Practices for Work Order Management

**Respond Quickly**: Acknowledge work orders promptly to build resident trust and satisfaction.

**Provide Detailed Information**: The more details included, the better prepared maintenance teams will be.

**Use Photos Liberally**: Visual documentation helps diagnose issues before arriving on-site.

**Update Status Regularly**: Keep residents informed by updating work order status as progress is made.

**Track Completion**: Always mark work orders as complete with resolution notes for future reference.

**Review Patterns**: Regularly review work orders to identify recurring issues that may need proactive solutions.

## Work Order Workflow Tips

- **Triage by Priority**: Establish a system for prioritizing work orders (emergency, urgent, routine)
- **Set Response Times**: Define expected response times for different priority levels
- **Communicate with Residents**: Keep residents informed throughout the resolution process
- **Document Everything**: Maintain detailed notes and photos for insurance and records
- **Follow Up**: Verify resident satisfaction after work completion`,
    contentAr: `إدارة الصيانة الفعالة أمر بالغ الأهمية لعمليات العقارات ورضا المقيمين. يساعدك نظام أوامر العمل في Accez.Cloud على توثيق وتتبع وحل مشاكل الصيانة بسرعة وكفاءة. سواء تم إنشاؤها من قبل المقيمين أو مديري العقارات، تضمن أوامر العمل عدم إغفال أي شيء.

## ما هي أوامر العمل؟

أوامر العمل هي طلبات رسمية لحل مشاكل الصيانة أو إكمال المهام داخل عقارك. وهي تعمل كـ:

- توثيق لاحتياجات الصيانة
- أدوات تتبع لحل المشاكل
- قنوات اتصال بين المقيمين والإدارة
- سجلات تاريخية لصيانة العقار

## من يمكنه إنشاء أوامر العمل؟

يمكن إنشاء أوامر العمل في Accez.Cloud بواسطة:

- **المقيمين**: الإبلاغ مباشرة عن المشاكل التي يواجهونها
- **مديري العقارات**: إنشاء أوامر العمل نيابة عن المقيمين أو للصيانة الاستباقية

تضمن هذه المرونة التقاط ومعالجة جميع احتياجات الصيانة.

## الخطوة 1: الانتقال إلى أوامر العمل

من الصفحة الرئيسية للوحة التحكم، انتقل إلى قسم العقارات. حدد العقار الذي تريد إنشاء أمر عمل له. بمجرد الدخول إلى عرض العقار، انقر على علامة تبويب "أوامر العمل".

## الخطوة 2: إنشاء أول أمر عمل

إذا لم تكن قد أنشأت أي أوامر عمل بعد، سترى صفحة أوامر عمل فارغة. انقر على زر "إضافة أول أمر عمل" للبدء.

ستفتح صفحة جديدة تحتوي على نموذج شامل لإنشاء أمر العمل.

## الخطوة 3: ملء تفاصيل أمر العمل

أكمل المعلومات التالية:

**العنوان**: أنشئ عنواناً واضحاً ووصفياً لأمر العمل (مثل "تسرب صنبور المطبخ - الوحدة 204")

**فئة المشكلة**: حدد الفئة المناسبة:
- السباكة
- الكهرباء
- التكييف والتدفئة
- الأجهزة
- الهيكلية
- الصيانة العامة
- أخرى

**وصف المشكلة**: قدم معلومات مفصلة حول المشكلة التي يواجهها المقيم. تشمل:
- متى بدأت المشكلة
- شدة المشكلة
- أي إجراءات مؤقتة تم اتخاذها
- التأثير على الحياة اليومية

**تفاصيل الموقع**:
- المنطقة المحددة داخل العقار
- رقم الوحدة
- الطابق
- الموقع الدقيق داخل الوحدة (المطبخ، الحمام، إلخ.)

**الحالة**: حدد حالة أمر العمل الأولية:
- مفتوح
- قيد التنفيذ
- معلق
- مكتمل
- ملغى

**رفع الصور**: أضف صوراً توثق المشكلة. المراجع البصرية تساعد فرق الصيانة على فهم العمل وتحديد أولوياته.

## الخطوة 4: إرسال أمر العمل

بعد ملء جميع التفاصيل المطلوبة، انقر على زر "إنشاء". تم الآن إنشاء أمر العمل بنجاح وسيظهر في قائمة أوامر العمل.

أمر العمل الآن قابل للتتبع ويمكن تعيينه لموظفي الصيانة للحل.

## إدارة أوامر العمل الموجودة

### عرض أوامر العمل

تظهر جميع أوامر العمل المنشأة في قائمة أوامر العمل مع المعلومات الرئيسية:
- عنوان أمر العمل
- الحالة
- تاريخ الإنشاء
- مستوى الأولوية
- الوحدة المعينة

### تعديل أوامر العمل

لتحديث أمر العمل:

1. انقر على أيقونة النقاط الثلاث بجوار أمر العمل
2. حدد "تعديل" من القائمة
3. حدث أي معلومات (الحالة، التفاصيل، الأولوية)
4. احفظ تغييراتك

هذا مفيد بشكل خاص لـ:
- تحديث الحالة مع تقدم العمل
- إضافة معلومات إضافية
- تعديل مستويات الأولوية
- تسجيل ملاحظات الإكمال

### حذف أوامر العمل

إذا لم يعد أمر العمل مطلوباً:

1. انقر على أيقونة النقاط الثلاث
2. حدد "حذف"
3. أكد الحذف

**ملاحظة**: احذف فقط أوامر العمل المكررة أو التي تم إنشاؤها بالخطأ. يجب تمييز أوامر العمل المكتملة على أنها مكتملة للسجلات التاريخية.

## شاهد الفيديو التعليمي الكامل

شاهد عملية إنشاء وإدارة أوامر العمل الكاملة:

[شاهد: كيفية إنشاء وإدارة أوامر العمل في Accez.Cloud](https://youtu.be/qKjzk0ysrKo)

## النقاط الرئيسية

- يمكن إنشاء أوامر العمل من قبل كل من المقيمين ومديري العقارات
- الأوصاف التفصيلية تساعد فرق الصيانة على الاستجابة بفعالية
- الصور توفر سياقاً بصرياً قيماً للمشاكل
- تتبع الحالة يضمن عدم إغفال أي شيء
- سجل أوامر العمل يوفر سجلات صيانة قيمة للعقار
- الفئات تساعد في تنظيم وتحديد أولويات طلبات الصيانة

## أفضل الممارسات لإدارة أوامر العمل

**استجب بسرعة**: اعترف بأوامر العمل على الفور لبناء ثقة ورضا المقيمين.

**قدم معلومات مفصلة**: كلما زادت التفاصيل المضمنة، كان استعداد فرق الصيانة أفضل.

**استخدم الصور بكثرة**: التوثيق البصري يساعد في تشخيص المشاكل قبل الوصول إلى الموقع.

**حدث الحالة بانتظام**: أبقِ المقيمين على اطلاع بتحديث حالة أمر العمل مع تقدم العمل.

**تتبع الإكمال**: ضع دائماً علامة على أوامر العمل كمكتملة مع ملاحظات الحل للرجوع إليها في المستقبل.

**راجع الأنماط**: راجع أوامر العمل بانتظام لتحديد المشاكل المتكررة التي قد تحتاج إلى حلول استباقية.

## نصائح سير عمل أوامر العمل

- **الفرز حسب الأولوية**: ضع نظاماً لتحديد أولويات أوامر العمل (طوارئ، عاجل، روتيني)
- **حدد أوقات الاستجابة**: عرّف أوقات الاستجابة المتوقعة لمستويات الأولوية المختلفة
- **تواصل مع المقيمين**: أبقِ المقيمين على اطلاع طوال عملية الحل
- **وثق كل شيء**: حافظ على ملاحظات وصور مفصلة للتأمين والسجلات
- **المتابعة**: تحقق من رضا المقيم بعد إكمال العمل`,
  },
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
  'how-to-create-manage-units-accez-cloud': {
    content: `Units are the foundation of your property management operations in Accez.Cloud. Whether you're managing long-term residential rentals or short-term vacation properties, our platform makes unit creation and management straightforward and efficient. This guide covers everything you need to know about setting up and managing your units.

## Prerequisites

Before creating units, ensure you have:

- An existing property in Accez.Cloud (Learn how to create properties)
- Active resident accounts (required for long-term units)

## Understanding Unit Types

Accez.Cloud supports two types of units:

**Long-Term Units**: Designed for traditional residential rentals with lease agreements, tenant assignments, and extended stay periods.

**Short-Term Units**: Perfect for vacation rentals, temporary stays, and flexible booking arrangements.

## Step 1: Access Unit Creation

From your dashboard, click on your property card to enter the property details section. Select the "Units" header from the navigation menu. If you haven't created any units yet, you'll see an option to add your first unit.

Click the "Add Your First Unit" button to begin.

## Step 2: Choose Your Unit Type

A new page will appear with the option to create either a short-term or long-term unit. By default, long-term unit is selected. For this guide, we'll focus on creating a long-term unit.

**Important Note**: Long-term units require an active resident to be assigned. Make sure you have resident accounts created before proceeding.

## Step 3: Fill in General Unit Information

Complete the following sections:

**Basic Information:**
- Unit number or name
- Unit type (apartment, studio, etc.)
- Square footage
- Number of bedrooms and bathrooms

**Property Details and Amenities:**
- List all amenities included (parking, balcony, appliances, etc.)
- Special features
- Pet policies
- Furnishing status

**Availability Status:**
- Available
- Occupied
- Under maintenance

## Step 4: Configure Ownership and Tenant Information

This critical section requires:

**Ownership Type:**
- Owned by Company
- Privately Owned

**Tenant Assignment:**
- Select the resident who will occupy the unit
- Enter the rental price you'll charge the resident

**Lease Duration:**
- Start date of the lease
- End date of the lease
- This determines how long the resident can stay in the unit

## Step 5: Add Additional Information and Images

Complete any optional additional information that provides context about the unit. This section can be skipped if not necessary.

Upload high-quality images of the unit showing:
- Living spaces
- Kitchen and bathrooms
- Special features
- Views

## Step 6: Save Your Unit

After filling in all required information, click the "Save" button. Your long-term unit is now successfully created and will appear in your units list.

## Managing Existing Units

### Viewing Unit Details

Click on the three-dot icon next to any unit and select "View" to see complete unit information. You can scroll through all the details you've entered and verify everything is correct.

### Editing Units

If you need to update any information:

1. Click the "Edit" button while viewing unit details
2. Make your changes (e.g., update availability status, change pricing, modify amenities)
3. Click "Save" to apply your updates

The system will immediately reflect your changes.

## Watch the Full Video Tutorial

See the complete unit creation process in action:

[Watch: How to Create & Edit Units in Accez.Cloud](https://youtu.be/YYPe_ZtuYWc?si=RBAiW_8kAQ4_c79Y)

## Key Takeaways

- Long-term units require active resident accounts for tenant assignment
- Ownership type affects how the unit is managed and reported
- Lease duration is critical for tracking occupancy and renewals
- Detailed amenity lists help attract quality tenants
- Units can be edited and updated at any time
- Availability status helps track unit occupancy in real-time

## Best Practices for Unit Management

**Keep Information Updated**: Regularly review and update unit details, especially availability status and pricing.

**Use High-Quality Images**: Professional photos significantly improve unit appeal and can reduce vacancy times.

**Detailed Amenity Lists**: Comprehensive amenity information helps residents make informed decisions.

**Regular Maintenance Tracking**: Use availability status to track units under maintenance or renovation.

## Next Steps

With your units created, you're ready to:

- Set up work order management for maintenance requests
- Configure services and amenities for resident bookings
- Connect distribution channels for short-term units`,
    contentAr: `الوحدات هي أساس عمليات إدارة العقارات الخاصة بك في Accez.Cloud. سواء كنت تدير إيجارات سكنية طويلة الأجل أو عقارات عطلات قصيرة الأجل، تجعل منصتنا إنشاء الوحدات وإدارتها أمراً بسيطاً وفعالاً. يغطي هذا الدليل كل ما تحتاج لمعرفته حول إعداد وإدارة وحداتك.

## المتطلبات الأساسية

قبل إنشاء الوحدات، تأكد من أن لديك:

- عقار موجود في Accez.Cloud (تعرف على كيفية إنشاء العقارات)
- حسابات مقيمين نشطة (مطلوبة للوحدات طويلة الأجل)

## فهم أنواع الوحدات

يدعم Accez.Cloud نوعين من الوحدات:

**الوحدات طويلة الأجل**: مصممة للإيجارات السكنية التقليدية مع عقود الإيجار وتعيينات المستأجرين وفترات الإقامة الممتدة.

**الوحدات قصيرة الأجل**: مثالية لإيجارات العطلات والإقامات المؤقتة وترتيبات الحجز المرنة.

## الخطوة 1: الوصول إلى إنشاء الوحدة

من لوحة التحكم، انقر على بطاقة العقار للدخول إلى قسم تفاصيل العقار. حدد رأس "الوحدات" من قائمة التنقل. إذا لم تكن قد أنشأت أي وحدات بعد، سترى خياراً لإضافة أول وحدة.

انقر على زر "إضافة أول وحدة لك" للبدء.

## الخطوة 2: اختر نوع الوحدة

ستظهر صفحة جديدة مع خيار إنشاء وحدة قصيرة الأجل أو طويلة الأجل. بشكل افتراضي، يتم تحديد الوحدة طويلة الأجل. في هذا الدليل، سنركز على إنشاء وحدة طويلة الأجل.

**ملاحظة مهمة**: تتطلب الوحدات طويلة الأجل تعيين مقيم نشط. تأكد من إنشاء حسابات المقيمين قبل المتابعة.

## الخطوة 3: ملء معلومات الوحدة العامة

أكمل الأقسام التالية:

**المعلومات الأساسية:**
- رقم أو اسم الوحدة
- نوع الوحدة (شقة، استوديو، إلخ.)
- المساحة بالقدم المربع
- عدد غرف النوم والحمامات

**تفاصيل العقار والمرافق:**
- قائمة جميع المرافق المتضمنة (موقف سيارات، شرفة، أجهزة، إلخ.)
- الميزات الخاصة
- سياسات الحيوانات الأليفة
- حالة التأثيث

**حالة التوفر:**
- متاح
- مشغول
- تحت الصيانة

## الخطوة 4: تكوين معلومات الملكية والمستأجر

يتطلب هذا القسم الحاسم:

**نوع الملكية:**
- مملوك للشركة
- مملوك بشكل خاص

**تعيين المستأجر:**
- حدد المقيم الذي سيشغل الوحدة
- أدخل سعر الإيجار الذي ستفرضه على المقيم

**مدة الإيجار:**
- تاريخ بدء عقد الإيجار
- تاريخ انتهاء عقد الإيجار
- يحدد هذا المدة التي يمكن للمقيم البقاء فيها في الوحدة

## الخطوة 5: إضافة معلومات وصور إضافية

أكمل أي معلومات إضافية اختيارية توفر سياقاً حول الوحدة. يمكن تخطي هذا القسم إذا لم يكن ضرورياً.

قم برفع صور عالية الجودة للوحدة تُظهر:
- مساحات المعيشة
- المطبخ والحمامات
- الميزات الخاصة
- المناظر

## الخطوة 6: حفظ الوحدة

بعد ملء جميع المعلومات المطلوبة، انقر على زر "حفظ". تم الآن إنشاء وحدتك طويلة الأجل بنجاح وستظهر في قائمة الوحدات الخاصة بك.

## إدارة الوحدات الموجودة

### عرض تفاصيل الوحدة

انقر على أيقونة النقاط الثلاث بجوار أي وحدة وحدد "عرض" لرؤية معلومات الوحدة الكاملة. يمكنك التمرير عبر جميع التفاصيل التي أدخلتها والتحقق من صحة كل شيء.

### تعديل الوحدات

إذا كنت بحاجة لتحديث أي معلومات:

1. انقر على زر "تعديل" أثناء عرض تفاصيل الوحدة
2. قم بإجراء تغييراتك (مثل تحديث حالة التوفر، تغيير التسعير، تعديل المرافق)
3. انقر على "حفظ" لتطبيق تحديثاتك

سيعكس النظام تغييراتك على الفور.

## شاهد الفيديو التعليمي الكامل

شاهد عملية إنشاء الوحدة الكاملة عملياً:

[شاهد: كيفية إنشاء وتعديل الوحدات في Accez.Cloud](https://youtu.be/YYPe_ZtuYWc?si=RBAiW_8kAQ4_c79Y)

## النقاط الرئيسية

- تتطلب الوحدات طويلة الأجل حسابات مقيمين نشطة لتعيين المستأجر
- يؤثر نوع الملكية على كيفية إدارة الوحدة والإبلاغ عنها
- مدة الإيجار حاسمة لتتبع الإشغال والتجديدات
- قوائم المرافق التفصيلية تساعد في جذب مستأجرين جيدين
- يمكن تعديل وتحديث الوحدات في أي وقت
- تساعد حالة التوفر في تتبع إشغال الوحدة في الوقت الفعلي

## أفضل الممارسات لإدارة الوحدات

**حافظ على تحديث المعلومات**: راجع وحدّث تفاصيل الوحدة بانتظام، خاصة حالة التوفر والتسعير.

**استخدم صوراً عالية الجودة**: الصور الاحترافية تحسن جاذبية الوحدة بشكل كبير ويمكن أن تقلل من أوقات الشغور.

**قوائم مرافق مفصلة**: معلومات المرافق الشاملة تساعد المقيمين على اتخاذ قرارات مستنيرة.

**تتبع الصيانة المنتظمة**: استخدم حالة التوفر لتتبع الوحدات تحت الصيانة أو التجديد.

## الخطوات التالية

مع إنشاء وحداتك، أنت جاهز لـ:

- إعداد إدارة أوامر العمل لطلبات الصيانة
- تكوين الخدمات والمرافق لحجوزات المقيمين
- توصيل قنوات التوزيع للوحدات قصيرة الأجل`,
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
