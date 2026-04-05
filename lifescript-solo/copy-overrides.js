(function () {
  const data = window.lifeScriptSoloLegalPages;
  if (!data || !data.translations) return;

  const overrides = {
    "zh-Hans": {
      brandEyebrow: "帮助与说明",
      brandTitle: "天机录",
      footerTitle: "说明与联系",
      footerBody: "这些页面会随当前公开版本一起更新。",
      languageLabel: "页面语言",
      navigationLabel: "页面导航",
      nav: {
        home: "首页",
        privacy: "隐私",
        support: "支持",
        contact: "联系",
        contentRating: "内容提示",
        terms: "条款"
      },
      common: {
        appReviewReady: "当前版本",
        userFacing: "公开邮箱",
        multiLanguage: "四种语言",
        lastUpdated: "最后更新：2026-04-05",
        languageNotice: "提供简体中文、English、日本語、한국어。",
        openPage: "查看页面"
      },
      pages: {
        home: {
          title: "帮助与说明",
          description: "查看天机录的隐私、支持、联系、内容提示与服务条款。",
          heroKicker: "帮助与说明",
          heroTitle: "天机录 帮助与说明",
          heroSummary: "查看隐私说明、获取支持、联系开发者，并了解内容提示和服务条款。",
          heroTags: ["隐私", "支持", "条款"],
          heroActions: [
            { href: "./support.html", label: "获取支持", variant: "primary" },
            { href: "./privacy.html", label: "查看隐私", variant: "secondary" }
          ],
          noteTitle: "从哪里开始",
          noteBody: "使用中遇到问题，请先看“支持”。想了解应用会在本机保存什么，请看“隐私”。第一次接触这部作品，可先看“内容提示”。"
        },
        privacy: {
          title: "隐私说明",
          description: "了解当前版本会在设备上保存哪些数据，以及开发者何时会收到你提供的信息。",
          heroKicker: "隐私",
          heroTitle: "隐私说明",
          heroSummary: "当前版本主要将阅读进度、界面设置和互动结果保存在你的设备上。没有账号系统；只有在你主动发邮件联系我们时，开发者才会收到你提供的信息。",
          heroTags: ["本机保存", "无账号", "邮件联系"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com?subject=%E5%A4%A9%E6%9C%BA%E5%BD%95%20%E9%9A%90%E7%A7%81", label: "联系开发者", variant: "primary" }
          ],
          noteTitle: "这页说明什么",
          noteBody: "这里只说明当前公开版本实际发生的数据处理方式。"
        },
        support: {
          title: "支持",
          description: "应用闪退、章节异常、进度不对或显示问题，都可以从这里开始反馈。",
          heroKicker: "支持",
          heroTitle: "获取支持",
          heroSummary: "如果应用闪退、章节打不开、进度异常或显示有问题，可以通过邮箱联系我们。把设备、系统版本、章节编号和复现步骤写清楚，会更容易排查。",
          heroTags: ["问题反馈", "邮件支持", "3-5 个工作日"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com?subject=%E5%A4%A9%E6%9C%BA%E5%BD%95%20%E6%94%AF%E6%8C%81", label: "发送支持邮件", variant: "primary" }
          ],
          noteTitle: "反馈前建议准备",
          noteBody: "设备型号、系统版本、章节编号和操作步骤越完整，回复通常越快。"
        },
        contact: {
          title: "联系开发者",
          description: "支持问题、隐私请求、合作咨询和媒体联系，均可使用公开邮箱。",
          heroKicker: "联系",
          heroTitle: "联系开发者",
          heroSummary: "支持问题、隐私请求、合作咨询和媒体联系，均可使用公开邮箱。邮件标题写明用途，通常会更容易得到准确回复。",
          heroTags: ["公开邮箱", "支持", "合作"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com", label: "发送邮件", variant: "primary" }
          ],
          noteTitle: "什么时候用这页",
          noteBody: "如果你已经知道要直接联系开发者，就从这里开始。"
        },
        contentRating: {
          title: "内容提示",
          description: "了解作品题材、内容强度与适读人群。",
          heroKicker: "内容提示",
          heroTitle: "这是一部偏黑暗的互动小说",
          heroSummary: "《天机录》包含幻想暴力、流血、死亡、威胁、囚禁与压迫情节。如果你对这类内容敏感，建议先阅读这一页。",
          heroTags: ["黑暗题材", "幻想暴力", "建议谨慎选择"],
          heroActions: [],
          noteTitle: "这页的作用",
          noteBody: "帮助你先了解作品气质和强度，再决定是否继续阅读。"
        },
        terms: {
          title: "服务条款",
          description: "了解应用提供的内容、使用范围、版权和服务边界。",
          heroKicker: "条款",
          heroTitle: "服务条款",
          heroSummary: "这里说明应用提供的内容、使用范围、版权和服务边界。重点是把与你有关的规则说清楚。",
          heroTags: ["使用范围", "版权", "服务边界"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com", label: "联系开发者", variant: "secondary" }
          ],
          noteTitle: "使用前建议",
          noteBody: "如果你对这些规则有疑问，可以先阅读本页，再决定是否继续使用。"
        }
      },
      cards: {
        home: [
          {
            kicker: "隐私",
            title: "隐私说明",
            body: "应用会在本机保存哪些数据，以及开发者何时会收到你主动发送的信息。",
            accent: "jade",
            href: "./privacy.html",
            linkLabel: "查看隐私"
          },
          {
            kicker: "支持",
            title: "获取支持",
            body: "闪退、章节异常、进度不对或显示问题，都可以从这里开始反馈。",
            accent: "gold",
            href: "./support.html",
            linkLabel: "查看支持"
          },
          {
            kicker: "联系",
            title: "联系开发者",
            body: "支持问题、隐私请求、合作咨询和媒体联系，均可通过公开邮箱发送。",
            accent: "sapphire",
            href: "./contact.html",
            linkLabel: "查看联系方式"
          },
          {
            kicker: "内容提示",
            title: "内容提示",
            body: "先了解作品的题材、内容强度和适读人群，再决定是否继续阅读。",
            accent: "crimson",
            href: "./content-rating.html",
            linkLabel: "查看内容提示"
          },
          {
            kicker: "条款",
            title: "服务条款",
            body: "了解应用提供的内容、使用范围、版权和服务边界。",
            accent: "gold",
            href: "./terms.html",
            linkLabel: "查看条款"
          }
        ]
      },
      sections: {
        privacy: [
          {
            kicker: "本机保存",
            title: "会保存在设备上的内容",
            body: "为了保存阅读体验，应用会在你的设备上保存与阅读直接相关的信息。",
            bullets: [
              "阅读进度、最近阅读章节和续读位置",
              "语言、字号和部分界面设置",
              "互动结果以及对应的本地状态变化"
            ],
            accent: "jade"
          },
          {
            kicker: "邮件联系",
            title: "开发者何时会收到信息",
            body: "只有在你主动发邮件联系我们时，开发者才会收到你提供的信息。单纯阅读故事不会自动上传个人资料。",
            bullets: [
              "邮件正文和你主动提供的说明",
              "截图、录屏或其他附件",
              "邮件服务通常会包含发件地址和发送时间等基础信息"
            ],
            accent: "gold"
          },
          {
            kicker: "删除数据",
            title: "如何删除或询问这些数据",
            body: "本地阅读数据通常随应用保存在你的设备上。如果你想停止保留这些数据，删除应用或清理本地数据通常就可以实现。",
            bullets: [
              "本地数据通常不会单独上传到开发者",
              "删除应用后，本地数据通常会一并移除",
              "如需进一步确认，可以直接发邮件询问"
            ],
            accent: "crimson"
          },
          {
            kicker: "联系开发者",
            title: "需要进一步确认时",
            body: "如果你对当前版本的隐私处理方式还有问题，可以直接通过公开邮箱联系我们。",
            bullets: [
              "联系邮箱：wpowening@gmail.com",
              "邮件标题建议写明“隐私”",
              "如果问题涉及具体设备或章节，也请一并说明"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com?subject=%E5%A4%A9%E6%9C%BA%E5%BD%95%20%E9%9A%90%E7%A7%81",
                label: "发送隐私邮件"
              }
            ]
          }
        ],
        support: [
          {
            kicker: "问题类型",
            title: "适合反馈的问题",
            body: "只要影响到阅读、显示或当前版本使用，都可以来信说明。",
            bullets: [
              "应用无法启动、闪退或卡住",
              "章节打不开、顺序异常或进度不对",
              "按钮无响应、显示错位或文案错误"
            ],
            accent: "jade"
          },
          {
            kicker: "邮件内容",
            title: "邮件里建议写明的信息",
            body: "第一次来信把上下文说明完整，通常能减少来回确认。",
            bullets: [
              "设备型号与系统版本",
              "问题发生的章节编号或页面位置",
              "出现问题前后的操作步骤",
              "如有帮助，可附上截图或录屏"
            ],
            accent: "gold"
          },
          {
            kicker: "回复时间",
            title: "我们通常怎么回复",
            body: "支持邮箱是 wpowening@gmail.com。我们通常会在 3 到 5 个工作日内回复；如果问题较复杂，可能会先回信确认细节。",
            bullets: [
              "邮件标题建议写明“支持”",
              "同一问题尽量保持在同一封邮件线程中",
              "会尽量使用应用支持的语言回复"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com?subject=%E5%A4%A9%E6%9C%BA%E5%BD%95%20%E6%94%AF%E6%8C%81",
                label: "发送支持邮件"
              }
            ]
          }
        ],
        contact: [
          {
            kicker: "公开邮箱",
            title: "联系邮箱",
            body: "当前公开联系邮箱是 wpowening@gmail.com。",
            bullets: [
              "支持问题",
              "隐私请求",
              "合作咨询",
              "媒体联系"
            ],
            accent: "sapphire"
          },
          {
            kicker: "邮件标题",
            title: "建议在标题里写明用途",
            body: "如果你在标题里写明“支持”“隐私”“合作”或“媒体”，通常会更容易被快速分流处理。",
            bullets: [
              "例：天机录 支持",
              "例：天机录 隐私",
              "例：天机录 合作"
            ],
            accent: "gold"
          },
          {
            kicker: "如果不确定",
            title: "不知道该先看哪一页时",
            body: "和使用问题有关的情况，先看支持页通常更快；和数据处理有关的情况，先看隐私页会更直接。",
            bullets: [
              "使用问题：先看支持",
              "数据处理：先看隐私",
              "直接联系：使用本页邮箱"
            ],
            accent: "jade",
            links: [
              { href: "./support.html", label: "前往支持" },
              { href: "./privacy.html", label: "前往隐私" }
            ]
          }
        ],
        contentRating: [
          {
            kicker: "可能出现的内容",
            title: "作品内容",
            body: "这部作品围绕修行、对抗、布局与代价展开，部分章节会出现强冲突和较重的后果描写。",
            bullets: [
              "幻想暴力与战斗场景",
              "流血、伤亡和死亡相关描写",
              "威胁、囚禁、折磨、背叛和压迫情节"
            ],
            accent: "crimson"
          },
          {
            kicker: "适读建议",
            title: "哪些读者需要谨慎判断",
            body: "如果你偏好轻松、低冲突的内容，或对暴力与死亡题材敏感，这部作品可能不适合你。",
            bullets: [
              "不建议低龄用户阅读",
              "对血腥或高压题材敏感的读者建议谨慎选择",
              "家长或监护人可先阅读本页再决定是否适合未成年人"
            ],
            accent: "gold"
          },
          {
            kicker: "页面用途",
            title: "为什么要有这页",
            body: "这页的作用是帮助你先建立正确预期，而不是提前透露剧情细节。",
            bullets: [
              "帮助判断内容强度",
              "帮助判断题材是否符合自己的接受范围",
              "不作为剧情梗概或剧透页使用"
            ],
            accent: "sapphire"
          }
        ],
        terms: [
          {
            kicker: "应用内容",
            title: "应用提供什么",
            body: "《天机录》是一款以虚构世界观为背景的互动小说应用，主要提供剧情阅读、章节选择和与阅读体验相关的本地展示功能。",
            bullets: [
              "主要用于个人阅读和娱乐体验",
              "作品中的角色、设定和事件属于虚构表达",
              "不构成法律、医疗、金融或其他专业建议"
            ],
            accent: "jade"
          },
          {
            kicker: "使用范围",
            title: "使用时需要遵守什么",
            body: "你可以在个人、合法的范围内正常使用应用，但不应以侵犯他人权益或破坏服务的方式使用相关内容。",
            bullets: [
              "请遵守适用法律法规和平台规则",
              "未经许可，不得擅自复制、出售或公开传播受保护内容",
              "请勿进行明显超出正常使用目的的破坏性行为"
            ],
            accent: "gold"
          },
          {
            kicker: "服务边界",
            title: "服务可用性与更新",
            body: "我们会尽合理努力维护阅读体验，但不能保证所有设备和系统环境下始终完全无错误或无中断。应用和这些页面可能会随修复或更新而调整。",
            bullets: [
              "不同设备和系统版本可能存在显示或兼容差异",
              "页面内容可能随功能更新而调整",
              "如适用法律另有要求，以法律规定为准"
            ],
            accent: "crimson"
          },
          {
            kicker: "版权与联系",
            title: "版权和联系开发者",
            body: "应用中的文本、界面、图形和其他相关内容，除依法应由第三方享有权利的部分外，均受相应知识产权保护。",
            bullets: [
              "联系邮箱：wpowening@gmail.com",
              "如你认为相关内容侵犯你的合法权益，可以通过邮箱联系",
              "如果页面内容与未来版本不一致，以更新后的页面和版本说明为准"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com",
                label: "联系开发者"
              }
            ]
          }
        ]
      }
    },
    en: {
      brandEyebrow: "Help and Information",
      brandTitle: "Tianjilu",
      footerTitle: "Information and Contact",
      footerBody: "These pages are updated with the current public version of the app.",
      languageLabel: "Page language",
      navigationLabel: "Page navigation",
      nav: {
        home: "Home",
        privacy: "Privacy",
        support: "Support",
        contact: "Contact",
        contentRating: "Content",
        terms: "Terms"
      },
      common: {
        appReviewReady: "Current version",
        userFacing: "Public email",
        multiLanguage: "Four languages",
        lastUpdated: "Last updated: 2026-04-05",
        languageNotice: "Available in Simplified Chinese, English, Japanese, and Korean.",
        openPage: "Open page"
      },
      pages: {
        home: {
          title: "Help and Information",
          description: "Find Tianjilu privacy details, support, contact, content notice, and terms.",
          heroKicker: "Help and Information",
          heroTitle: "Tianjilu Help and Information",
          heroSummary: "Find privacy details, support, developer contact, content notice, and terms for the current version.",
          heroTags: ["Privacy", "Support", "Terms"],
          heroActions: [
            { href: "./support.html", label: "Get Support", variant: "primary" },
            { href: "./privacy.html", label: "View Privacy", variant: "secondary" }
          ],
          noteTitle: "Where to start",
          noteBody: "If something is wrong, start with Support. If you want to know what the app stores on your device, start with Privacy. If you want to check the tone of the work first, read Content."
        },
        privacy: {
          title: "Privacy",
          description: "Learn what the current version stores on your device and when the developer may receive information from you.",
          heroKicker: "Privacy",
          heroTitle: "Privacy",
          heroSummary: "The current version mainly stores reading progress, display settings, and choice results on your device. There is no account system. The developer receives information from you only when you email us.",
          heroTags: ["On device", "No account", "Email contact"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Privacy", label: "Contact the Developer", variant: "primary" }
          ],
          noteTitle: "What this page covers",
          noteBody: "This page explains only the data handling that actually happens in the current public version."
        },
        support: {
          title: "Support",
          description: "Report crashes, chapter issues, incorrect progress, or display problems.",
          heroKicker: "Support",
          heroTitle: "Support",
          heroSummary: "If the app crashes, chapters do not open, progress looks wrong, or something displays incorrectly, contact us by email. Device details, chapter number, and reproduction steps help a lot.",
          heroTags: ["Issue reports", "Email support", "3 to 5 business days"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Support", label: "Send Support Email", variant: "primary" }
          ],
          noteTitle: "What helps most",
          noteBody: "Include the device model, OS version, chapter number, and the steps right before the problem."
        },
        contact: {
          title: "Contact the Developer",
          description: "Use the public email address for support, privacy requests, business inquiries, and media contact.",
          heroKicker: "Contact",
          heroTitle: "Contact the Developer",
          heroSummary: "Use the public email address for support, privacy requests, business inquiries, and media contact. A clear subject line usually makes routing faster.",
          heroTags: ["Public email", "Support", "Business"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com", label: "Send Email", variant: "primary" }
          ],
          noteTitle: "When to use this page",
          noteBody: "If you already know you want to contact the developer directly, start here."
        },
        contentRating: {
          title: "Content Notice",
          description: "Learn the tone, content intensity, and audience guidance for the work.",
          heroKicker: "Content Notice",
          heroTitle: "This is a dark interactive novel",
          heroSummary: "Tianjilu includes fantasy violence, blood, death, threats, confinement, and oppressive situations. If you are sensitive to this kind of material, read this page first.",
          heroTags: ["Dark tone", "Fantasy violence", "Read with care"],
          heroActions: [],
          noteTitle: "Why this page exists",
          noteBody: "It helps you judge the tone and intensity of the work before you continue."
        },
        terms: {
          title: "Terms",
          description: "Learn what the app provides, how it may be used, who owns the content, and the limits of service availability.",
          heroKicker: "Terms",
          heroTitle: "Terms",
          heroSummary: "This page explains what the app provides, how it may be used, who owns the content, and the limits of service availability.",
          heroTags: ["Use", "Copyright", "Service limits"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com", label: "Contact the Developer", variant: "secondary" }
          ],
          noteTitle: "Before you continue",
          noteBody: "If you have questions about these rules, read this page first."
        }
      },
      cards: {
        home: [
          {
            kicker: "Privacy",
            title: "Privacy",
            body: "What the app stores on your device, and when the developer may receive information from you.",
            accent: "jade",
            href: "./privacy.html",
            linkLabel: "View privacy"
          },
          {
            kicker: "Support",
            title: "Support",
            body: "Crashes, chapter issues, incorrect progress, or display problems all start here.",
            accent: "gold",
            href: "./support.html",
            linkLabel: "View support"
          },
          {
            kicker: "Contact",
            title: "Contact the Developer",
            body: "Use the public email address for support, privacy requests, business inquiries, and media contact.",
            accent: "sapphire",
            href: "./contact.html",
            linkLabel: "View contact"
          },
          {
            kicker: "Content",
            title: "Content Notice",
            body: "Check the subject matter, content intensity, and audience guidance before continuing.",
            accent: "crimson",
            href: "./content-rating.html",
            linkLabel: "View content notice"
          },
          {
            kicker: "Terms",
            title: "Terms",
            body: "Read the scope of use, rights in the content, and the limits of service availability.",
            accent: "gold",
            href: "./terms.html",
            linkLabel: "View terms"
          }
        ]
      },
      sections: {
        privacy: [
          {
            kicker: "On your device",
            title: "What is stored on your device",
            body: "To preserve the reading experience, the app stores information that is directly related to reading on your device.",
            bullets: [
              "Reading progress, recent chapter, and resume position",
              "Language, text size, and some display settings",
              "Choice results and related local state changes"
            ],
            accent: "jade"
          },
          {
            kicker: "Email contact",
            title: "When the developer receives information",
            body: "The developer receives information from you only when you decide to email us. Reading the story does not automatically upload personal information.",
            bullets: [
              "The content of the email you send",
              "Screenshots, videos, or other attachments you choose to include",
              "Basic email metadata such as sender address and send time"
            ],
            accent: "gold"
          },
          {
            kicker: "Delete data",
            title: "How to remove or ask about this data",
            body: "Local reading data usually stays with the app on your device. If you want to stop keeping it, deleting the app or clearing local data is usually enough.",
            bullets: [
              "Local data is usually not uploaded separately",
              "Deleting the app usually removes the local reading data",
              "If you need confirmation, you can email us"
            ],
            accent: "crimson"
          },
          {
            kicker: "Contact",
            title: "If you need more confirmation",
            body: "If you still have questions about privacy handling in the current version, you can use the public email address.",
            bullets: [
              "Email: wpowening@gmail.com",
              "A subject line including “Privacy” is helpful",
              "If the question involves a specific device or chapter, include it"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Privacy",
                label: "Send a privacy email"
              }
            ]
          }
        ],
        support: [
          {
            kicker: "Issue type",
            title: "What belongs on this page",
            body: "Anything that affects reading, display, or access in the current version can be reported here.",
            bullets: [
              "The app does not launch, crashes, or freezes",
              "A chapter does not open, order looks wrong, or progress is incorrect",
              "Buttons do not respond, layout is broken, or text is wrong"
            ],
            accent: "jade"
          },
          {
            kicker: "Email details",
            title: "What to include in your email",
            body: "A complete first report usually saves time for both sides.",
            bullets: [
              "Device model and OS version",
              "Chapter number or page where the problem appears",
              "The steps right before the issue",
              "Screenshots or screen recordings if they help"
            ],
            accent: "gold"
          },
          {
            kicker: "Reply timing",
            title: "How we usually reply",
            body: "Support email: wpowening@gmail.com. We usually aim to reply within 3 to 5 business days. For more complex issues, we may first ask follow-up questions.",
            bullets: [
              "A subject line including “Support” is helpful",
              "Keep updates for the same issue in the same email thread",
              "We try to reply in a supported app language when possible"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Support",
                label: "Send a support email"
              }
            ]
          }
        ],
        contact: [
          {
            kicker: "Public email",
            title: "Contact email",
            body: "The current public contact email address is wpowening@gmail.com.",
            bullets: [
              "Support questions",
              "Privacy requests",
              "Business inquiries",
              "Media contact"
            ],
            accent: "sapphire"
          },
          {
            kicker: "Subject line",
            title: "It helps to say what the email is for",
            body: "A subject line like “Support”, “Privacy”, “Business”, or “Media” usually makes routing faster.",
            bullets: [
              "Example: Tianjilu Support",
              "Example: Tianjilu Privacy",
              "Example: Tianjilu Business"
            ],
            accent: "gold"
          },
          {
            kicker: "If you are unsure",
            title: "If you do not know which page to read first",
            body: "For app usage issues, the support page is usually the fastest start. For data handling questions, the privacy page is more direct.",
            bullets: [
              "Usage issue: start with Support",
              "Data question: start with Privacy",
              "Direct email: use the address on this page"
            ],
            accent: "jade",
            links: [
              { href: "./support.html", label: "Go to Support" },
              { href: "./privacy.html", label: "Go to Privacy" }
            ]
          }
        ],
        contentRating: [
          {
            kicker: "Possible content",
            title: "What may appear in the work",
            body: "The story centers on cultivation, conflict, strategy, and consequence. Some chapters include strong confrontation and heavy outcomes.",
            bullets: [
              "Fantasy violence and combat scenes",
              "Blood, injury, and death-related descriptions",
              "Threats, confinement, torture, betrayal, and oppressive situations"
            ],
            accent: "crimson"
          },
          {
            kicker: "Audience guidance",
            title: "Who should be more careful",
            body: "If you prefer light, low-conflict stories, or if violence and death are difficult for you, this work may not be a good fit.",
            bullets: [
              "Not recommended for young users",
              "Readers sensitive to blood or high-pressure themes should choose carefully",
              "Parents or guardians may want to review this page first"
            ],
            accent: "gold"
          },
          {
            kicker: "Purpose",
            title: "Why this page exists",
            body: "This page is here to help you set expectations before reading. It is not here to summarize the plot.",
            bullets: [
              "Helps you judge content intensity",
              "Helps you decide whether the tone fits you",
              "Does not serve as a spoiler page"
            ],
            accent: "sapphire"
          }
        ],
        terms: [
          {
            kicker: "What the app provides",
            title: "What the app is for",
            body: "Tianjilu is an interactive novel app set in a fictional world. It mainly provides story reading, chapter choices, and local presentation tied to the reading experience.",
            bullets: [
              "Mainly for personal reading and entertainment",
              "Characters, settings, and events are fictional",
              "It does not provide legal, medical, financial, or other professional advice"
            ],
            accent: "jade"
          },
          {
            kicker: "Use",
            title: "What you need to follow",
            body: "You may use the app for normal personal use, but not in ways that infringe rights or damage the service.",
            bullets: [
              "Follow applicable law and platform rules",
              "Do not copy, sell, or publicly redistribute protected content without permission",
              "Do not use the app in clearly abusive or destructive ways"
            ],
            accent: "gold"
          },
          {
            kicker: "Service limits",
            title: "Availability and updates",
            body: "We make reasonable efforts to maintain the reading experience, but we cannot guarantee that every device and OS version will always be error-free or uninterrupted. The app and these pages may change as issues are fixed or features change.",
            bullets: [
              "Different devices and OS versions may behave differently",
              "These pages may change when the product changes",
              "Where the law requires something else, applicable law controls"
            ],
            accent: "crimson"
          },
          {
            kicker: "Rights and contact",
            title: "Content rights and developer contact",
            body: "Texts, interface designs, graphics, and related content in the app are protected by applicable intellectual property law, except where rights legally belong to third parties.",
            bullets: [
              "Email: wpowening@gmail.com",
              "If you believe content affects your lawful rights, you may contact us by email",
              "If a future version changes the product, the updated pages and version information will control"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com",
                label: "Contact the developer"
              }
            ]
          }
        ]
      }
    },
    ja: {
      brandEyebrow: "ヘルプと案内",
      brandTitle: "天機録",
      footerTitle: "案内と連絡先",
      footerBody: "これらのページは、現在公開されているアプリの内容に合わせて更新されます。",
      languageLabel: "表示言語",
      navigationLabel: "ページ案内",
      nav: {
        home: "ホーム",
        privacy: "プライバシー",
        support: "サポート",
        contact: "連絡先",
        contentRating: "内容案内",
        terms: "規約"
      },
      common: {
        appReviewReady: "現在の版",
        userFacing: "公開メール",
        multiLanguage: "4言語対応",
        lastUpdated: "最終更新: 2026-04-05",
        languageNotice: "簡体字中国語、English、日本語、한국어に対応しています。",
        openPage: "ページを見る"
      },
      pages: {
        home: {
          title: "ヘルプと案内",
          description: "天機録のプライバシー、サポート、連絡先、内容案内、利用規約を確認できます。",
          heroKicker: "ヘルプと案内",
          heroTitle: "天機録のヘルプと案内",
          heroSummary: "プライバシー、サポート、開発者への連絡先、内容案内、利用規約を確認できます。",
          heroTags: ["プライバシー", "サポート", "規約"],
          heroActions: [
            { href: "./support.html", label: "サポートを見る", variant: "primary" },
            { href: "./privacy.html", label: "プライバシーを見る", variant: "secondary" }
          ],
          noteTitle: "どこから見ればよいか",
          noteBody: "利用中の問題はサポート、端末に保存される内容はプライバシー、作品の雰囲気を先に確かめたい場合は内容案内から確認できます。"
        },
        privacy: {
          title: "プライバシー",
          description: "現在の版で端末に保存される情報と、開発者に届く情報の範囲を説明します。",
          heroKicker: "プライバシー",
          heroTitle: "プライバシー",
          heroSummary: "現在の版では、読書進行、表示設定、選択結果を主に端末内へ保存します。アカウント機能はなく、ユーザーがメール連絡をしない限り、開発者に情報が届くことはありません。",
          heroTags: ["端末内保存", "アカウントなし", "メール連絡"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Privacy", label: "開発者に連絡する", variant: "primary" }
          ],
          noteTitle: "このページの内容",
          noteBody: "ここでは、現在公開されている版で実際に行われる情報の扱いだけを説明します。"
        },
        support: {
          title: "サポート",
          description: "クラッシュ、章が開かない、進行異常、表示問題などを報告できます。",
          heroKicker: "サポート",
          heroTitle: "サポート",
          heroSummary: "アプリのクラッシュ、章が開かない、進行異常、表示不具合がある場合は、メールで連絡できます。端末情報、章番号、再現手順があると確認しやすくなります。",
          heroTags: ["問題報告", "メール対応", "3-5営業日"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Support", label: "サポートメールを送る", variant: "primary" }
          ],
          noteTitle: "送る前にあると助かる情報",
          noteBody: "端末名、OS バージョン、章番号、直前の操作があると、確認が早く進みます。"
        },
        contact: {
          title: "開発者への連絡",
          description: "サポート、プライバシー、協業、メディア連絡は公開メールで受け付けています。",
          heroKicker: "連絡先",
          heroTitle: "開発者への連絡",
          heroSummary: "サポート、プライバシー、協業、メディア連絡は、公開メールアドレスで受け付けています。件名に用途があると、案内がより早くなります。",
          heroTags: ["公開メール", "サポート", "協業"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com", label: "メールを送る", variant: "primary" }
          ],
          noteTitle: "このページを使う場面",
          noteBody: "最初から開発者へ直接連絡したい場合は、このページから始めるのが最も簡単です。"
        },
        contentRating: {
          title: "内容案内",
          description: "作品の題材、強度、読者向けの注意点を説明します。",
          heroKicker: "内容案内",
          heroTitle: "やや暗い雰囲気のインタラクティブ小説です",
          heroSummary: "天機録には、幻想暴力、流血、死、脅威、拘束、圧迫的な展開が含まれます。こうした題材が苦手な場合は、先にこのページを確認してください。",
          heroTags: ["暗い題材", "幻想暴力", "慎重に判断"],
          heroActions: [],
          noteTitle: "このページの役割",
          noteBody: "作品の雰囲気と強度を先に知り、自分に合うか判断しやすくするための案内です。"
        },
        terms: {
          title: "利用規約",
          description: "アプリが提供する内容、利用範囲、権利、サービスの境界を説明します。",
          heroKicker: "規約",
          heroTitle: "利用規約",
          heroSummary: "このページでは、アプリが提供する内容、利用範囲、権利、サービスの境界を説明します。",
          heroTags: ["利用範囲", "権利", "提供範囲"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com", label: "開発者に連絡する", variant: "secondary" }
          ],
          noteTitle: "利用前に",
          noteBody: "これらの内容に疑問がある場合は、先にこのページを確認してください。"
        }
      },
      cards: {
        home: [
          {
            kicker: "プライバシー",
            title: "プライバシー",
            body: "端末に保存される情報と、開発者に届く情報の範囲を説明します。",
            accent: "jade",
            href: "./privacy.html",
            linkLabel: "プライバシーを見る"
          },
          {
            kicker: "サポート",
            title: "サポート",
            body: "クラッシュ、章の不具合、進行異常、表示問題はここから確認できます。",
            accent: "gold",
            href: "./support.html",
            linkLabel: "サポートを見る"
          },
          {
            kicker: "連絡先",
            title: "開発者への連絡",
            body: "サポート、プライバシー、協業、メディア連絡は公開メールから送れます。",
            accent: "sapphire",
            href: "./contact.html",
            linkLabel: "連絡先を見る"
          },
          {
            kicker: "内容案内",
            title: "内容案内",
            body: "作品の題材や強度を先に確認し、自分に合うか判断できます。",
            accent: "crimson",
            href: "./content-rating.html",
            linkLabel: "内容案内を見る"
          },
          {
            kicker: "規約",
            title: "利用規約",
            body: "利用範囲、権利、サービスの境界を確認できます。",
            accent: "gold",
            href: "./terms.html",
            linkLabel: "規約を見る"
          }
        ]
      },
      sections: {
        privacy: [
          {
            kicker: "端末内保存",
            title: "端末に保存される内容",
            body: "読書体験を続けるため、読書に直接関係する情報が端末内へ保存されます。",
            bullets: [
              "読書進行、最近の章、続きから読む位置",
              "言語、文字サイズ、一部の表示設定",
              "選択結果と、それに対応するローカル状態"
            ],
            accent: "jade"
          },
          {
            kicker: "メール連絡",
            title: "開発者に情報が届く場合",
            body: "開発者に情報が届くのは、ユーザーが自分でメールを送った場合だけです。作品を読むだけで個人情報が自動送信されることはありません。",
            bullets: [
              "送信したメール本文",
              "添付した画像や動画など",
              "送信元アドレスや送信時刻などの基本的なメール情報"
            ],
            accent: "gold"
          },
          {
            kicker: "削除と確認",
            title: "削除や確認をしたい場合",
            body: "ローカルの読書データは通常、アプリと一緒に端末へ保存されます。削除したい場合は、アプリ削除やローカルデータ削除で対応できます。",
            bullets: [
              "ローカルデータが単独でアップロードされることは通常ありません",
              "アプリ削除でローカルデータも削除されることが多いです",
              "不明点があればメールで確認できます"
            ],
            accent: "crimson"
          },
          {
            kicker: "連絡先",
            title: "さらに確認したいとき",
            body: "現在の版のプライバシー処理について疑問があれば、公開メールアドレスで連絡できます。",
            bullets: [
              "メール: wpowening@gmail.com",
              "件名に「Privacy」とあると分かりやすくなります",
              "特定の端末や章に関する質問なら、その情報も添えてください"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Privacy",
                label: "プライバシーについて連絡する"
              }
            ]
          }
        ],
        support: [
          {
            kicker: "問題の種類",
            title: "このページで扱う内容",
            body: "読書、表示、または現在の版の利用に影響する問題は、ここから連絡できます。",
            bullets: [
              "アプリが起動しない、クラッシュする、固まる",
              "章が開かない、順序が不自然、進行が正しくない",
              "ボタンが反応しない、表示が崩れる、文言が誤っている"
            ],
            accent: "jade"
          },
          {
            kicker: "メール内容",
            title: "メールに書くと助かる情報",
            body: "最初の連絡で状況が伝わると、確認の往復を減らせます。",
            bullets: [
              "端末名と OS バージョン",
              "問題が起きた章番号やページ位置",
              "直前に行った操作",
              "必要なら画像や録画の添付"
            ],
            accent: "gold"
          },
          {
            kicker: "返信目安",
            title: "通常の返信について",
            body: "サポートメールは wpowening@gmail.com です。通常は 3 から 5 営業日以内の返信を目指します。内容が複雑な場合は、先に追加確認を行うことがあります。",
            bullets: [
              "件名に「Support」とあると分かりやすくなります",
              "同じ問題の追加情報は同じメールスレッドにまとめてください",
              "可能な範囲で対応言語で返信します"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Support",
                label: "サポートメールを送る"
              }
            ]
          }
        ],
        contact: [
          {
            kicker: "公開メール",
            title: "連絡先メール",
            body: "現在の公開メールアドレスは wpowening@gmail.com です。",
            bullets: [
              "サポート",
              "プライバシー関連の依頼",
              "協業相談",
              "メディア連絡"
            ],
            accent: "sapphire"
          },
          {
            kicker: "件名",
            title: "件名に用途を書くと早くなります",
            body: "件名に「Support」「Privacy」「Business」「Media」などがあると、内容を振り分けやすくなります。",
            bullets: [
              "例: Tianjilu Support",
              "例: Tianjilu Privacy",
              "例: Tianjilu Business"
            ],
            accent: "gold"
          },
          {
            kicker: "迷ったとき",
            title: "最初にどのページを見るか迷う場合",
            body: "利用中の問題はサポート、情報の扱いはプライバシーから確認するのが最も早いことが多いです。",
            bullets: [
              "利用中の問題: サポート",
              "情報の扱い: プライバシー",
              "直接メール: このページのアドレス"
            ],
            accent: "jade",
            links: [
              { href: "./support.html", label: "サポートへ" },
              { href: "./privacy.html", label: "プライバシーへ" }
            ]
          }
        ],
        contentRating: [
          {
            kicker: "内容",
            title: "作品に含まれる可能性のある内容",
            body: "この作品は、修行、対立、策略、代償を中心に進み、一部の章には強い対立や重い結果描写があります。",
            bullets: [
              "幻想暴力や戦闘シーン",
              "流血、負傷、死に関する描写",
              "脅威、拘束、拷問、裏切り、圧迫的な展開"
            ],
            accent: "crimson"
          },
          {
            kicker: "読者案内",
            title: "慎重に判断した方がよい人",
            body: "軽い雰囲気や低対立の物語を好む場合、または暴力や死の題材が苦手な場合、この作品は合わない可能性があります。",
            bullets: [
              "低年齢向けではありません",
              "流血や高圧的な題材が苦手な人は慎重に判断してください",
              "保護者が先に確認する判断材料としても使えます"
            ],
            accent: "gold"
          },
          {
            kicker: "目的",
            title: "このページがある理由",
            body: "このページは、読む前に作品の強度を理解してもらうための案内です。あらすじやネタバレを載せるためのページではありません。",
            bullets: [
              "内容強度を判断しやすくする",
              "作品の雰囲気が自分に合うか確認できる",
              "ネタバレページではない"
            ],
            accent: "sapphire"
          }
        ],
        terms: [
          {
            kicker: "アプリ内容",
            title: "アプリが提供するもの",
            body: "天機録は虚構世界を背景としたインタラクティブ小説アプリで、主に物語読書、章選択、読書体験に関するローカル表示機能を提供します。",
            bullets: [
              "主な用途は個人の読書と娯楽です",
              "登場人物、設定、出来事は虚構表現です",
              "法律、医療、金融などの専門助言は行いません"
            ],
            accent: "jade"
          },
          {
            kicker: "利用範囲",
            title: "利用時に守ってほしいこと",
            body: "通常の個人利用はできますが、権利侵害やサービスを損なう使い方はできません。",
            bullets: [
              "適用される法令やプラットフォーム規則に従ってください",
              "保護された内容を無断で複製、販売、公開再配布しないでください",
              "明らかに破壊的または乱用的な使い方はしないでください"
            ],
            accent: "gold"
          },
          {
            kicker: "提供範囲",
            title: "利用可能性と更新",
            body: "読書体験の維持に努めますが、すべての端末や OS で常に完全に無停止であることは保証できません。問題修正や機能変更に合わせて、アプリやこのページは変わることがあります。",
            bullets: [
              "端末や OS により表示や動作が異なる場合があります",
              "製品変更に合わせてページ内容も更新されます",
              "法令上の強い要請がある場合は、その内容が優先されます"
            ],
            accent: "crimson"
          },
          {
            kicker: "権利と連絡",
            title: "権利と開発者への連絡",
            body: "アプリ内の文章、画面、図形、関連コンテンツは、第三者に法的権利がある部分を除き、適用される知的財産法により保護されます。",
            bullets: [
              "メール: wpowening@gmail.com",
              "法的権利に関する連絡が必要な場合はメールで問い合わせできます",
              "将来の版で内容が変わる場合は、更新後のページが優先されます"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com",
                label: "開発者に連絡する"
              }
            ]
          }
        ]
      }
    },
    ko: {
      brandEyebrow: "도움말 및 안내",
      brandTitle: "천기록",
      footerTitle: "안내 및 연락처",
      footerBody: "이 페이지들은 현재 공개된 앱 버전에 맞춰 함께 업데이트됩니다.",
      languageLabel: "페이지 언어",
      navigationLabel: "페이지 탐색",
      nav: {
        home: "홈",
        privacy: "개인정보",
        support: "지원",
        contact: "연락처",
        contentRating: "콘텐츠 안내",
        terms: "약관"
      },
      common: {
        appReviewReady: "현재 버전",
        userFacing: "공개 이메일",
        multiLanguage: "4개 언어",
        lastUpdated: "마지막 업데이트: 2026-04-05",
        languageNotice: "중국어 간체, English, 日本語, 한국어를 지원합니다.",
        openPage: "페이지 보기"
      },
      pages: {
        home: {
          title: "도움말 및 안내",
          description: "천기록의 개인정보, 지원, 연락처, 콘텐츠 안내, 이용약관을 확인할 수 있습니다.",
          heroKicker: "도움말 및 안내",
          heroTitle: "천기록 도움말 및 안내",
          heroSummary: "개인정보, 지원, 개발자 연락처, 콘텐츠 안내, 이용약관을 현재 버전 기준으로 확인할 수 있습니다.",
          heroTags: ["개인정보", "지원", "약관"],
          heroActions: [
            { href: "./support.html", label: "지원 보기", variant: "primary" },
            { href: "./privacy.html", label: "개인정보 보기", variant: "secondary" }
          ],
          noteTitle: "어디서 시작하면 좋은지",
          noteBody: "사용 중 문제가 있으면 지원, 기기에 저장되는 내용이 궁금하면 개인정보, 작품 분위기를 먼저 확인하고 싶으면 콘텐츠 안내부터 보면 됩니다."
        },
        privacy: {
          title: "개인정보",
          description: "현재 버전에서 기기에 저장되는 정보와 개발자에게 전달되는 정보의 범위를 설명합니다.",
          heroKicker: "개인정보",
          heroTitle: "개인정보",
          heroSummary: "현재 버전은 읽기 진행, 화면 설정, 선택 결과를 주로 기기에 저장합니다. 계정 기능은 없으며, 사용자가 직접 이메일을 보내지 않는 한 개발자에게 정보가 전달되지 않습니다.",
          heroTags: ["기기 저장", "계정 없음", "이메일 연락"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Privacy", label: "개발자에게 연락하기", variant: "primary" }
          ],
          noteTitle: "이 페이지가 다루는 내용",
          noteBody: "이 페이지는 현재 공개된 버전에서 실제로 일어나는 정보 처리만 설명합니다."
        },
        support: {
          title: "지원",
          description: "앱 충돌, 챕터 오류, 진행 이상, 표시 문제를 여기서 문의할 수 있습니다.",
          heroKicker: "지원",
          heroTitle: "지원",
          heroSummary: "앱 충돌, 챕터가 열리지 않음, 진행 이상, 표시 문제는 이메일로 문의할 수 있습니다. 기기 정보, 챕터 번호, 재현 방법이 있으면 확인이 훨씬 빨라집니다.",
          heroTags: ["문제 신고", "이메일 지원", "3~5영업일"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Support", label: "지원 메일 보내기", variant: "primary" }
          ],
          noteTitle: "보내기 전에 준비하면 좋은 것",
          noteBody: "기기명, OS 버전, 챕터 번호, 직전 동작이 있으면 답변이 더 빨라집니다."
        },
        contact: {
          title: "개발자에게 연락하기",
          description: "지원, 개인정보 요청, 협업 문의, 미디어 연락은 공개 이메일로 받을 수 있습니다.",
          heroKicker: "연락처",
          heroTitle: "개발자에게 연락하기",
          heroSummary: "지원, 개인정보 요청, 협업 문의, 미디어 연락은 공개 이메일로 받을 수 있습니다. 제목에 용건을 적으면 분류가 더 빨라집니다.",
          heroTags: ["공개 이메일", "지원", "협업"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com", label: "메일 보내기", variant: "primary" }
          ],
          noteTitle: "언제 이 페이지를 쓰면 좋은지",
          noteBody: "처음부터 개발자에게 직접 연락하려는 경우, 이 페이지에서 시작하면 됩니다."
        },
        contentRating: {
          title: "콘텐츠 안내",
          description: "작품의 소재, 강도, 이용자 안내를 설명합니다.",
          heroKicker: "콘텐츠 안내",
          heroTitle: "다소 어두운 분위기의 인터랙티브 소설입니다",
          heroSummary: "천기록에는 판타지 폭력, 유혈, 죽음, 위협, 감금, 압박감 있는 전개가 포함됩니다. 이런 소재에 민감하다면 먼저 이 페이지를 확인해 주세요.",
          heroTags: ["어두운 분위기", "판타지 폭력", "신중한 선택"],
          heroActions: [],
          noteTitle: "이 페이지의 역할",
          noteBody: "읽기 전에 작품의 분위기와 강도를 먼저 이해할 수 있도록 돕는 안내입니다."
        },
        terms: {
          title: "이용약관",
          description: "앱이 제공하는 내용, 이용 범위, 권리, 서비스 경계를 설명합니다.",
          heroKicker: "약관",
          heroTitle: "이용약관",
          heroSummary: "이 페이지에서는 앱이 제공하는 내용, 이용 범위, 권리, 서비스 경계를 설명합니다.",
          heroTags: ["이용 범위", "권리", "서비스 한계"],
          heroActions: [
            { href: "mailto:wpowening@gmail.com", label: "개발자에게 연락하기", variant: "secondary" }
          ],
          noteTitle: "계속 사용하기 전에",
          noteBody: "이 규칙들에 대해 궁금한 점이 있다면, 먼저 이 페이지를 확인해 주세요."
        }
      },
      cards: {
        home: [
          {
            kicker: "개인정보",
            title: "개인정보",
            body: "기기에 저장되는 정보와 개발자에게 전달되는 정보의 범위를 설명합니다.",
            accent: "jade",
            href: "./privacy.html",
            linkLabel: "개인정보 보기"
          },
          {
            kicker: "지원",
            title: "지원",
            body: "앱 충돌, 챕터 오류, 진행 이상, 표시 문제는 여기서 시작하면 됩니다.",
            accent: "gold",
            href: "./support.html",
            linkLabel: "지원 보기"
          },
          {
            kicker: "연락처",
            title: "개발자에게 연락하기",
            body: "지원, 개인정보 요청, 협업 문의, 미디어 연락은 공개 이메일로 보낼 수 있습니다.",
            accent: "sapphire",
            href: "./contact.html",
            linkLabel: "연락처 보기"
          },
          {
            kicker: "콘텐츠 안내",
            title: "콘텐츠 안내",
            body: "작품의 소재와 강도를 먼저 확인하고, 자신에게 맞는지 판단할 수 있습니다.",
            accent: "crimson",
            href: "./content-rating.html",
            linkLabel: "콘텐츠 안내 보기"
          },
          {
            kicker: "약관",
            title: "이용약관",
            body: "이용 범위, 권리, 서비스 한계를 확인할 수 있습니다.",
            accent: "gold",
            href: "./terms.html",
            linkLabel: "약관 보기"
          }
        ]
      },
      sections: {
        privacy: [
          {
            kicker: "기기 저장",
            title: "기기에 저장되는 내용",
            body: "읽기 경험을 이어가기 위해, 읽기와 직접 관련된 정보가 기기에 저장됩니다.",
            bullets: [
              "읽기 진행, 최근 챕터, 이어보기 위치",
              "언어, 글자 크기, 일부 표시 설정",
              "선택 결과와 그에 따른 로컬 상태"
            ],
            accent: "jade"
          },
          {
            kicker: "이메일 연락",
            title: "개발자에게 정보가 전달되는 경우",
            body: "개발자에게 정보가 전달되는 경우는 사용자가 직접 이메일을 보냈을 때뿐입니다. 이야기를 읽는 것만으로 개인정보가 자동 전송되지는 않습니다.",
            bullets: [
              "보낸 이메일 본문",
              "직접 첨부한 이미지나 동영상",
              "발신 주소, 발신 시각 등 기본적인 메일 정보"
            ],
            accent: "gold"
          },
          {
            kicker: "삭제와 확인",
            title: "삭제하거나 확인하고 싶을 때",
            body: "로컬 읽기 데이터는 보통 앱과 함께 기기에 저장됩니다. 삭제를 원한다면 앱 삭제나 로컬 데이터 정리로 대응할 수 있습니다.",
            bullets: [
              "로컬 데이터가 별도로 업로드되는 일은 보통 없습니다",
              "앱을 삭제하면 로컬 데이터도 함께 제거되는 경우가 많습니다",
              "확인이 필요하면 이메일로 문의할 수 있습니다"
            ],
            accent: "crimson"
          },
          {
            kicker: "연락처",
            title: "추가 확인이 필요할 때",
            body: "현재 버전의 개인정보 처리에 대해 더 알고 싶다면 공개 이메일로 연락할 수 있습니다.",
            bullets: [
              "이메일: wpowening@gmail.com",
              "제목에 “Privacy”를 넣으면 분류가 쉬워집니다",
              "특정 기기나 챕터 관련 질문이라면 함께 적어 주세요"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Privacy",
                label: "개인정보 문의 메일 보내기"
              }
            ]
          }
        ],
        support: [
          {
            kicker: "문제 유형",
            title: "이 페이지에서 다루는 내용",
            body: "읽기, 표시, 또는 현재 버전의 이용에 영향을 주는 문제는 모두 여기서 문의할 수 있습니다.",
            bullets: [
              "앱이 실행되지 않거나 충돌하거나 멈춤",
              "챕터가 열리지 않거나 순서가 이상하거나 진행이 잘못됨",
              "버튼 무반응, 레이아웃 깨짐, 문구 오류"
            ],
            accent: "jade"
          },
          {
            kicker: "메일 내용",
            title: "메일에 적어 주면 도움이 되는 정보",
            body: "첫 메일에서 상황이 잘 전달되면 여러 번 확인할 필요가 줄어듭니다.",
            bullets: [
              "기기명과 OS 버전",
              "문제가 발생한 챕터 번호나 위치",
              "문제 직전에 했던 동작",
              "필요하다면 이미지나 화면 녹화 첨부"
            ],
            accent: "gold"
          },
          {
            kicker: "답변 안내",
            title: "보통 어떻게 답변하는지",
            body: "지원 메일 주소는 wpowening@gmail.com 입니다. 보통 3~5영업일 안에 답변을 목표로 하며, 내용이 복잡하면 먼저 추가 확인을 요청할 수 있습니다.",
            bullets: [
              "제목에 “Support”를 적으면 분류가 쉬워집니다",
              "같은 문제의 추가 정보는 같은 메일 스레드에 이어서 보내 주세요",
              "가능한 범위에서 지원 언어로 답변합니다"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com?subject=Tianjilu%20Support",
                label: "지원 메일 보내기"
              }
            ]
          }
        ],
        contact: [
          {
            kicker: "공개 이메일",
            title: "연락처 이메일",
            body: "현재 공개 이메일 주소는 wpowening@gmail.com 입니다.",
            bullets: [
              "지원 문의",
              "개인정보 요청",
              "협업 문의",
              "미디어 연락"
            ],
            accent: "sapphire"
          },
          {
            kicker: "제목",
            title: "제목에 용건을 적으면 더 빠릅니다",
            body: "제목에 “Support”, “Privacy”, “Business”, “Media” 같은 용건을 적으면 분류가 더 빨라집니다.",
            bullets: [
              "예: Tianjilu Support",
              "예: Tianjilu Privacy",
              "예: Tianjilu Business"
            ],
            accent: "gold"
          },
          {
            kicker: "헷갈릴 때",
            title: "먼저 어떤 페이지를 봐야 할지 모르겠다면",
            body: "사용 중 문제는 지원 페이지, 정보 처리 관련 질문은 개인정보 페이지에서 먼저 확인하는 것이 가장 빠른 경우가 많습니다.",
            bullets: [
              "사용 문제: 지원",
              "정보 처리: 개인정보",
              "직접 메일: 이 페이지의 주소"
            ],
            accent: "jade",
            links: [
              { href: "./support.html", label: "지원으로 이동" },
              { href: "./privacy.html", label: "개인정보로 이동" }
            ]
          }
        ],
        contentRating: [
          {
            kicker: "콘텐츠",
            title: "작품에 포함될 수 있는 내용",
            body: "이 작품은 수련, 대립, 계략, 대가를 중심으로 진행되며, 일부 챕터에는 강한 충돌과 무거운 결과 묘사가 포함됩니다.",
            bullets: [
              "판타지 폭력과 전투 장면",
              "유혈, 부상, 죽음 관련 묘사",
              "위협, 감금, 고문, 배신, 압박감 있는 전개"
            ],
            accent: "crimson"
          },
          {
            kicker: "이용자 안내",
            title: "조금 더 신중하게 판단해야 하는 경우",
            body: "가볍고 충돌이 적은 이야기를 선호하거나 폭력과 죽음 소재가 어렵다면, 이 작품은 잘 맞지 않을 수 있습니다.",
            bullets: [
              "어린 사용자를 위한 작품은 아닙니다",
              "유혈이나 압박감 있는 소재에 민감하다면 신중하게 선택해 주세요",
              "보호자가 먼저 확인하는 참고 자료로도 사용할 수 있습니다"
            ],
            accent: "gold"
          },
          {
            kicker: "목적",
            title: "이 페이지가 있는 이유",
            body: "이 페이지는 읽기 전에 작품 강도를 이해할 수 있도록 돕기 위한 안내입니다. 줄거리 요약이나 스포일러 페이지가 아닙니다.",
            bullets: [
              "콘텐츠 강도를 판단하는 데 도움",
              "작품 분위기가 자신에게 맞는지 확인 가능",
              "스포일러 페이지로 사용하지 않음"
            ],
            accent: "sapphire"
          }
        ],
        terms: [
          {
            kicker: "앱 내용",
            title: "앱이 제공하는 것",
            body: "천기록은 가상 세계를 배경으로 한 인터랙티브 소설 앱으로, 주로 스토리 읽기, 챕터 선택, 읽기 경험과 관련된 로컬 표시 기능을 제공합니다.",
            bullets: [
              "주된 용도는 개인 읽기와 오락입니다",
              "등장인물, 설정, 사건은 가상 표현입니다",
              "법률, 의료, 금융 등 전문 조언을 제공하지 않습니다"
            ],
            accent: "jade"
          },
          {
            kicker: "이용 범위",
            title: "이용 시 지켜야 하는 것",
            body: "일반적인 개인 이용은 가능하지만, 권리 침해나 서비스 훼손에 해당하는 방식으로 사용할 수는 없습니다.",
            bullets: [
              "적용되는 법령과 플랫폼 규칙을 따라 주세요",
              "보호된 콘텐츠를 허가 없이 복제, 판매, 공개 재배포하지 마세요",
              "명백히 파괴적이거나 남용적인 방식으로 사용하지 마세요"
            ],
            accent: "gold"
          },
          {
            kicker: "서비스 한계",
            title: "이용 가능성과 업데이트",
            body: "읽기 경험을 유지하기 위해 노력하지만, 모든 기기와 OS에서 항상 완전무결하게 동작한다고 보장할 수는 없습니다. 문제 수정이나 기능 변경에 따라 앱과 이 페이지는 바뀔 수 있습니다.",
            bullets: [
              "기기나 OS에 따라 표시나 동작이 다를 수 있습니다",
              "제품 변경에 맞춰 페이지 내용도 갱신됩니다",
              "법률상 더 강한 요구가 있으면 그 내용이 우선합니다"
            ],
            accent: "crimson"
          },
          {
            kicker: "권리와 연락",
            title: "권리와 개발자 연락",
            body: "앱 안의 문구, 화면, 그래픽, 관련 콘텐츠는 제3자에게 법적 권리가 있는 부분을 제외하고 적용되는 지식재산권의 보호를 받습니다.",
            bullets: [
              "이메일: wpowening@gmail.com",
              "자신의 적법한 권리에 영향을 준다고 생각하면 이메일로 연락할 수 있습니다",
              "향후 버전이 바뀌면 업데이트된 페이지와 버전 정보가 우선합니다"
            ],
            accent: "sapphire",
            links: [
              {
                href: "mailto:wpowening@gmail.com",
                label: "개발자에게 연락하기"
              }
            ]
          }
        ]
      }
    }
  };

  function mergeIndexed(target, key, items) {
    if (!Array.isArray(items) || !Array.isArray(target[key])) return;
    items.forEach((item, index) => {
      if (!target[key][index]) return;
      Object.assign(target[key][index], item);
    });
  }

  Object.entries(overrides).forEach(([language, value]) => {
    const translation = data.translations[language];
    if (!translation) return;

    const rootKeys = [
      "brandEyebrow",
      "brandTitle",
      "footerTitle",
      "footerBody",
      "languageLabel",
      "navigationLabel"
    ];

    rootKeys.forEach((key) => {
      if (value[key]) translation[key] = value[key];
    });

    if (value.nav) Object.assign(translation.nav, value.nav);
    if (value.common) Object.assign(translation.common, value.common);

    if (value.pages) {
      Object.entries(value.pages).forEach(([pageName, pageOverride]) => {
        const page = translation.pages && translation.pages[pageName];
        if (!page) return;
        Object.assign(page, pageOverride);
      });
    }

    if (value.cards) {
      Object.entries(value.cards).forEach(([pageName, cards]) => {
        const page = translation.pages && translation.pages[pageName];
        if (!page) return;
        mergeIndexed(page, "cards", cards);
      });
    }

    if (value.sections) {
      Object.entries(value.sections).forEach(([pageName, sections]) => {
        const page = translation.pages && translation.pages[pageName];
        if (!page) return;
        mergeIndexed(page, "sections", sections);
      });
    }
  });

  data.updatedAt = "2026-04-05";
})();
