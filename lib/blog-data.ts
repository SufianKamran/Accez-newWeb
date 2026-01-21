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
    slug: 'how-accez-cloud-is-different-from-other-property-management-platforms-saudi-arabia',
    title: 'How Accez.cloud is Different from Other Property Management Platforms in Saudi Arabia',
    titleAr: 'كيف يختلف Accez.cloud عن منصات إدارة العقارات الأخرى في المملكة العربية السعودية',
    excerpt: 'A comprehensive look at what sets Accez apart in the Kingdom\'s rapidly evolving PropTech landscape, including its three-sided marketplace approach and revenue generation capabilities.',
    excerptAr: 'نظرة شاملة على ما يميز Accez في مشهد التكنولوجيا العقارية سريع التطور في المملكة، بما في ذلك نهج السوق ثلاثي الأطراف وقدرات توليد الإيرادات.',
    date: '2026-01-21',
    author: 'Accez Team',
    authorAr: 'فريق أكسيز',
    coverImage: '/images/blog/property-management-image.jpg',
    category: 'Industry Insights',
    categoryAr: 'رؤى الصناعة',
    tags: ['PropTech', 'Saudi Arabia', 'Comparison', 'Vision 2030', 'Property Management'],
    tagsAr: ['التكنولوجيا العقارية', 'المملكة العربية السعودية', 'مقارنة', 'رؤية 2030', 'إدارة العقارات'],
    readingTime: '10 min read',
  },
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
  'how-accez-cloud-is-different-from-other-property-management-platforms-saudi-arabia': {
    content: `Saudi Arabia's property management sector is undergoing a dramatic transformation. With the Kingdom's real estate market expanding rapidly under Vision 2030, property managers are seeking modern, technology-driven solutions to streamline their operations and enhance resident experiences. While several platforms have emerged to address these needs, Accez.cloud stands apart with a fundamentally different approach to property management software.

Unlike traditional property management tools that focus solely on the landlord-tenant relationship, Accez.cloud has built a unified platform that connects three key stakeholders: property managers, residents, and local businesses. This innovative model is reshaping how communities operate across the Kingdom.

## The Problem with Traditional Property Management Platforms

Most property management solutions in Saudi Arabia fall into one of two categories. On one hand, you have global platforms like Yardi, Buildium, and AppFolio that were designed for Western markets and later adapted for the Middle East. While these platforms offer robust accounting features, they often lack the cultural customization and local integrations that Saudi property managers need. Their interfaces can be complex, requiring extensive training, and their pricing models often exclude smaller property management companies.

On the other hand, local solutions like Ejari (the rent-now-pay-later platform), Mabaat (focused on short-term rentals), and RAY (compound management) each solve specific problems but operate in silos. Property managers using these tools often find themselves juggling multiple platforms, with data scattered across different systems. This fragmentation creates inefficiencies, increases the risk of errors, and makes it difficult to get a complete picture of property operations.

Additionally, most existing platforms treat property management as purely a cost center. They help managers collect rent and handle maintenance requests, but they don't create opportunities for additional revenue generation. In today's competitive market, this represents a significant missed opportunity.

## The Accez.cloud Difference: A Three-Sided Marketplace

Accez.cloud takes a fundamentally different approach by creating a three-sided marketplace that benefits all stakeholders in the property ecosystem. This isn't just property management software; it's a platform that transforms how residential communities function.

### For Property Managers

Accez provides a comprehensive suite of tools including visitor management, amenity booking, work order handling, lease management, and check-in/checkout services. All of these features are accessible through a single dashboard, eliminating the need to switch between multiple applications. The platform also offers white-label branded websites and mobile apps, allowing property management companies to present a professional, unified digital presence under their own brand.

### For Residents

The resident experience is at the heart of Accez.cloud. Through a dedicated mobile app, residents can manage their entire living experience, from booking amenities to submitting maintenance requests and managing their leases. This level of digital convenience is exactly what modern renters, particularly Gen Z and millennials who are becoming the largest renter demographics, expect from their living spaces.

### For Local Businesses

Here's where Accez truly differentiates itself. The platform includes a marketplace component that connects residents with local service providers. Whether it's home services, food delivery, or retail offerings, local businesses can reach a captive audience of residents directly through the platform. This creates value for businesses seeking customers, residents seeking convenience, and property managers who earn commissions on transactions.

## Turning Property Management into a Revenue Center

Perhaps the most significant way Accez.cloud differs from competitors is in its approach to revenue. Traditional property management is viewed as an operational expense, something necessary but not profitable in itself. Accez changes this equation entirely.

By facilitating transactions between residents and local businesses, property managers can earn a percentage of every transaction that occurs through the platform. This transforms the property management relationship from a pure cost center into a potential profit center. For property management companies operating on thin margins, this additional revenue stream can make a meaningful difference to their bottom line.

This model also creates a virtuous cycle: the more value the platform provides to residents through convenient services, the more engaged they become. Higher engagement leads to better resident satisfaction, which in turn drives lease renewals and reduces costly turnover. Industry data shows that tenant turnover can cost upwards of SAR 15,000 per unit when accounting for make-ready expenses, marketing, and lost rent during vacancy periods.

## Built for the Saudi Market

Unlike global platforms that adapt their products for the Middle East as an afterthought, Accez.cloud was designed from the ground up with the Saudi market in mind. This is evident in several key areas.

The platform integrates with local Saudi service providers including Fanni for home services, WeBook for booking services, and Amazon for deliveries. These aren't generic integrations; they're partnerships that reflect how Saudi residents actually live and shop. The platform also supports Arabic-English bilingual interfaces, ensuring accessibility for the Kingdom's diverse population.

Furthermore, Accez understands the unique nature of Saudi Arabia's residential compound culture. Gated communities have been a housing staple in the Kingdom since the discovery of oil, and they remain popular today. These communities have specific needs around visitor management, security, amenity access, and community engagement that Accez is designed to address.

## How Accez Compares to Other Saudi Platforms

### Ejari

Ejari has made waves in the Saudi market with its rent-now-pay-later model, allowing tenants to pay monthly while landlords receive their annual rent upfront. While innovative for addressing payment flexibility, Ejari is fundamentally a financial service rather than a property management platform. It doesn't help with day-to-day operations like maintenance, visitor management, or resident communication.

### Mabaat

Mabaat focuses specifically on short-term rentals, serving property owners who want to maximize returns through Airbnb-style bookings. While excellent for vacation rentals and furnished apartments, it's not designed for traditional residential property management with long-term tenants.

### RAY

RAY offers a tenant and property management system with strong communication features, and has found success in compounds across Saudi Arabia and the UAE. However, RAY focuses primarily on the manager-tenant relationship without the marketplace component that allows for revenue generation through local business partnerships.

### Nazeel

Nazeel serves the hospitality sector, managing over 6,000 hotels across Saudi Arabia. It's a powerful system for hotel and furnished apartment management, but it's designed for hospitality operations rather than residential property management.

Accez.cloud combines the operational capabilities these platforms offer individually while adding the unique marketplace layer that none of them provide. It's designed to be a single platform that handles everything a modern Saudi property management company needs.

## The Future of Property Management in Saudi Arabia

The Saudi property management software market is projected to grow at over 9% annually through 2032, driven by the Kingdom's massive real estate development initiatives including NEOM, the Red Sea Project, and ongoing urban expansion in Riyadh, Jeddah, and other major cities. As more residential properties come online, the demand for sophisticated management solutions will only increase.

Modern residents, particularly the younger demographics that will dominate the rental market by 2030, expect digital-first experiences. They want to manage their living experience through apps, just as they manage their banking, shopping, and entertainment. Properties that can't offer this level of digital convenience will struggle to attract and retain tenants.

Accez.cloud is positioned to meet these evolving expectations. By combining comprehensive property management tools, resident-focused mobile experiences, and innovative marketplace features, it offers a glimpse of what the future of property management looks like in the Kingdom.

## Conclusion

The property management software landscape in Saudi Arabia is crowded, but few platforms offer the comprehensive, forward-thinking approach that Accez.cloud brings to the table. By reimagining property management as a three-sided marketplace that creates value for managers, residents, and local businesses alike, Accez isn't just solving today's operational challenges. It's building the foundation for how Saudi communities will live and interact in the years to come.

For property managers looking to differentiate their offerings, improve resident satisfaction, and create new revenue streams, Accez.cloud represents a genuinely different approach to property technology, one that's been built specifically for the unique needs and opportunities of the Saudi market.

Ready to transform your property management operations? Visit [accez.cloud](https://accez.cloud) to learn more.`,
    contentAr: `يشهد قطاع إدارة العقارات في المملكة العربية السعودية تحولاً جذرياً. مع توسع سوق العقارات في المملكة بسرعة في إطار رؤية 2030، يبحث مديرو العقارات عن حلول حديثة تعتمد على التكنولوجيا لتبسيط عملياتهم وتحسين تجارب المقيمين. وبينما ظهرت العديد من المنصات لتلبية هذه الاحتياجات، يبرز Accez.cloud بنهج مختلف جذرياً لبرامج إدارة العقارات.

على عكس أدوات إدارة العقارات التقليدية التي تركز فقط على العلاقة بين المالك والمستأجر، بنى Accez.cloud منصة موحدة تربط ثلاثة أطراف رئيسية: مديري العقارات والمقيمين والشركات المحلية. هذا النموذج المبتكر يعيد تشكيل طريقة عمل المجتمعات في جميع أنحاء المملكة.

## مشكلة منصات إدارة العقارات التقليدية

تندرج معظم حلول إدارة العقارات في المملكة العربية السعودية ضمن إحدى فئتين. من ناحية، لديك منصات عالمية مثل Yardi و Buildium و AppFolio التي صُممت للأسواق الغربية ثم تم تكييفها لاحقاً للشرق الأوسط. بينما تقدم هذه المنصات ميزات محاسبية قوية، إلا أنها غالباً ما تفتقر إلى التخصيص الثقافي والتكاملات المحلية التي يحتاجها مديرو العقارات السعوديون. يمكن أن تكون واجهاتها معقدة وتتطلب تدريباً مكثفاً، ونماذج تسعيرها غالباً ما تستبعد شركات إدارة العقارات الصغيرة.

من ناحية أخرى، الحلول المحلية مثل إيجاري (منصة ادفع الإيجار لاحقاً)، ومباعات (متخصصة في الإيجارات قصيرة الأجل)، و RAY (إدارة المجمعات السكنية) كل منها يحل مشاكل محددة لكنها تعمل بشكل منعزل. مديرو العقارات الذين يستخدمون هذه الأدوات غالباً ما يجدون أنفسهم يتنقلون بين منصات متعددة، مع بيانات متناثرة عبر أنظمة مختلفة. هذا التجزؤ يخلق عدم كفاءة ويزيد من مخاطر الأخطاء ويجعل من الصعب الحصول على صورة كاملة لعمليات العقار.

بالإضافة إلى ذلك، معظم المنصات الحالية تتعامل مع إدارة العقارات على أنها مركز تكلفة فقط. تساعد المديرين على تحصيل الإيجار والتعامل مع طلبات الصيانة، لكنها لا تخلق فرصاً لتوليد إيرادات إضافية. في السوق التنافسي اليوم، هذا يمثل فرصة ضائعة كبيرة.

## اختلاف Accez.cloud: سوق ثلاثي الأطراف

يتبنى Accez.cloud نهجاً مختلفاً جذرياً من خلال إنشاء سوق ثلاثي الأطراف يفيد جميع المعنيين في النظام البيئي العقاري. هذا ليس مجرد برنامج لإدارة العقارات؛ إنها منصة تحول طريقة عمل المجتمعات السكنية.

### لمديري العقارات

يوفر Accez مجموعة شاملة من الأدوات تشمل إدارة الزوار وحجز المرافق والتعامل مع أوامر العمل وإدارة عقود الإيجار وخدمات تسجيل الدخول والخروج. كل هذه الميزات متاحة من خلال لوحة تحكم واحدة، مما يلغي الحاجة للتبديل بين تطبيقات متعددة. توفر المنصة أيضاً مواقع وتطبيقات بعلامة تجارية خاصة، مما يسمح لشركات إدارة العقارات بتقديم حضور رقمي احترافي وموحد تحت علامتها التجارية الخاصة.

### للمقيمين

تجربة المقيم هي في صميم Accez.cloud. من خلال تطبيق جوال مخصص، يمكن للمقيمين إدارة تجربة معيشتهم بالكامل، من حجز المرافق إلى تقديم طلبات الصيانة وإدارة عقود إيجارهم. هذا المستوى من الراحة الرقمية هو بالضبط ما يتوقعه المستأجرون العصريون، خاصة جيل Z والألفية الذين أصبحوا أكبر شريحة ديموغرافية للمستأجرين، من مساحات معيشتهم.

### للشركات المحلية

هنا يتميز Accez حقاً. تتضمن المنصة مكوناً للسوق يربط المقيمين بمقدمي الخدمات المحليين. سواء كانت خدمات منزلية أو توصيل طعام أو عروض تجزئة، يمكن للشركات المحلية الوصول إلى جمهور أسير من المقيمين مباشرة من خلال المنصة. هذا يخلق قيمة للشركات التي تبحث عن عملاء، والمقيمين الذين يبحثون عن الراحة، ومديري العقارات الذين يكسبون عمولات على المعاملات.

## تحويل إدارة العقارات إلى مركز إيرادات

ربما تكون أهم طريقة يختلف بها Accez.cloud عن المنافسين هي في نهجه تجاه الإيرادات. تُعتبر إدارة العقارات التقليدية نفقات تشغيلية، شيء ضروري لكنه غير مربح في حد ذاته. يغير Accez هذه المعادلة تماماً.

من خلال تسهيل المعاملات بين المقيمين والشركات المحلية، يمكن لمديري العقارات كسب نسبة مئوية من كل معاملة تتم عبر المنصة. هذا يحول علاقة إدارة العقارات من مركز تكلفة بحت إلى مركز ربح محتمل. بالنسبة لشركات إدارة العقارات التي تعمل بهوامش ربح ضئيلة، يمكن أن يحدث تدفق الإيرادات الإضافي هذا فرقاً ملموساً في أرباحها.

يخلق هذا النموذج أيضاً دورة إيجابية: كلما زادت القيمة التي توفرها المنصة للمقيمين من خلال الخدمات المريحة، زاد تفاعلهم. التفاعل الأعلى يؤدي إلى رضا أفضل للمقيمين، مما يؤدي بدوره إلى تجديد عقود الإيجار وتقليل معدل الدوران المكلف. تُظهر بيانات الصناعة أن دوران المستأجرين يمكن أن يكلف أكثر من 15,000 ريال سعودي لكل وحدة عند احتساب نفقات التجهيز والتسويق والإيجار المفقود خلال فترات الشغور.

## مصمم للسوق السعودي

على عكس المنصات العالمية التي تكيف منتجاتها للشرق الأوسط كفكرة لاحقة، صُمم Accez.cloud من الألف إلى الياء مع وضع السوق السعودي في الاعتبار. يتضح هذا في عدة مجالات رئيسية.

تتكامل المنصة مع مزودي الخدمات السعوديين المحليين بما في ذلك فني للخدمات المنزلية و WeBook لخدمات الحجز وأمازون للتوصيل. هذه ليست تكاملات عامة؛ إنها شراكات تعكس كيف يعيش ويتسوق السكان السعوديون فعلياً. تدعم المنصة أيضاً واجهات ثنائية اللغة عربي-إنجليزي، مما يضمن إمكانية الوصول لسكان المملكة المتنوعين.

علاوة على ذلك، يفهم Accez الطبيعة الفريدة لثقافة المجمعات السكنية في المملكة العربية السعودية. كانت المجتمعات المسورة عنصراً أساسياً في الإسكان في المملكة منذ اكتشاف النفط، ولا تزال شائعة حتى اليوم. لدى هذه المجتمعات احتياجات محددة حول إدارة الزوار والأمن والوصول إلى المرافق والمشاركة المجتمعية التي صُمم Accez لمعالجتها.

## كيف يقارن Accez بالمنصات السعودية الأخرى

### إيجاري

أحدثت إيجاري ضجة في السوق السعودي بنموذج ادفع الإيجار لاحقاً، مما يسمح للمستأجرين بالدفع شهرياً بينما يحصل الملاك على إيجارهم السنوي مقدماً. بينما هو مبتكر لمعالجة مرونة الدفع، إيجاري هي في الأساس خدمة مالية وليست منصة لإدارة العقارات. لا تساعد في العمليات اليومية مثل الصيانة وإدارة الزوار أو التواصل مع المقيمين.

### مباعات

تركز مباعات بشكل خاص على الإيجارات قصيرة الأجل، وتخدم أصحاب العقارات الذين يريدون تعظيم العوائد من خلال الحجوزات على طراز Airbnb. بينما ممتازة لإيجارات العطلات والشقق المفروشة، إلا أنها غير مصممة لإدارة العقارات السكنية التقليدية مع المستأجرين على المدى الطويل.

### RAY

تقدم RAY نظام إدارة المستأجرين والعقارات مع ميزات اتصال قوية، وحققت نجاحاً في المجمعات عبر المملكة العربية السعودية والإمارات. ومع ذلك، تركز RAY بشكل أساسي على العلاقة بين المدير والمستأجر دون مكون السوق الذي يسمح بتوليد الإيرادات من خلال الشراكات مع الشركات المحلية.

### نزيل

تخدم نزيل قطاع الضيافة، وتدير أكثر من 6,000 فندق في جميع أنحاء المملكة العربية السعودية. إنه نظام قوي لإدارة الفنادق والشقق المفروشة، لكنه مصمم لعمليات الضيافة وليس إدارة العقارات السكنية.

يجمع Accez.cloud القدرات التشغيلية التي تقدمها هذه المنصات بشكل فردي مع إضافة طبقة السوق الفريدة التي لا يوفرها أي منها. إنه مصمم ليكون منصة واحدة تتعامل مع كل ما تحتاجه شركة إدارة العقارات السعودية الحديثة.

## مستقبل إدارة العقارات في المملكة العربية السعودية

من المتوقع أن ينمو سوق برامج إدارة العقارات السعودي بأكثر من 9% سنوياً حتى عام 2032، مدفوعاً بمبادرات التطوير العقاري الضخمة في المملكة بما في ذلك نيوم ومشروع البحر الأحمر والتوسع الحضري المستمر في الرياض وجدة والمدن الكبرى الأخرى. مع دخول المزيد من العقارات السكنية إلى السوق، سيزداد الطلب على حلول الإدارة المتطورة فقط.

يتوقع المقيمون العصريون، خاصة الفئات العمرية الأصغر التي ستهيمن على سوق الإيجار بحلول عام 2030، تجارب رقمية أولاً. يريدون إدارة تجربة معيشتهم من خلال التطبيقات، تماماً كما يديرون خدماتهم المصرفية والتسوق والترفيه. العقارات التي لا تستطيع تقديم هذا المستوى من الراحة الرقمية ستكافح لجذب المستأجرين والاحتفاظ بهم.

Accez.cloud في وضع يمكنه من تلبية هذه التوقعات المتطورة. من خلال الجمع بين أدوات إدارة العقارات الشاملة وتجارب الجوال المركزة على المقيمين وميزات السوق المبتكرة، يقدم لمحة عما سيبدو عليه مستقبل إدارة العقارات في المملكة.

## الخلاصة

مشهد برامج إدارة العقارات في المملكة العربية السعودية مزدحم، لكن القليل من المنصات تقدم النهج الشامل والتطلعي الذي يجلبه Accez.cloud. من خلال إعادة تصور إدارة العقارات كسوق ثلاثي الأطراف يخلق قيمة للمديرين والمقيمين والشركات المحلية على حد سواء، لا يحل Accez تحديات التشغيل اليوم فحسب. إنه يبني الأساس لكيفية عيش المجتمعات السعودية وتفاعلها في السنوات القادمة.

لمديري العقارات الذين يتطلعون إلى تمييز عروضهم وتحسين رضا المقيمين وإنشاء تدفقات إيرادات جديدة، يمثل Accez.cloud نهجاً مختلفاً حقاً للتكنولوجيا العقارية، تم بناؤه خصيصاً للاحتياجات والفرص الفريدة للسوق السعودي.

هل أنت مستعد لتحويل عمليات إدارة العقارات الخاصة بك؟ قم بزيارة [accez.cloud](https://accez.cloud) لمعرفة المزيد.`,
  },
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
