(function () {
  const data = window.lifeScriptSoloLegalPages;
  if (!data || !data.translations) return;

  const overrides = {
    "zh-Hans": {
      footerTitle: "帮助、隐私与使用说明",
      footerBody: "这里会把用户真正关心的事说清楚：应用会保存什么、出了问题怎么联系、作品内容是否适合自己，以及使用时有哪些基本规则。",
      common: {
        appReviewReady: "快速查看",
        userFacing: "可直接联系",
        multiLanguage: "四种语言"
      },
      pages: {
        home: {
          heroTitle: "想先了解清楚再开始，或遇到问题需要帮助，都可以从这里进入。",
          heroSummary: "这里整理了《天机录》的隐私说明、问题反馈方式、开发者联系方式、内容提示和使用规则。第一次使用前可以先看一眼，使用中需要帮助时也能更快找到答案。",
          noteTitle: "这一页能帮你什么",
          noteBody: "想知道应用会保存哪些数据、出了问题怎么联系、作品内容适不适合自己，或者使用时有哪些基本规则，都可以从这里开始。"
        },
        privacy: {
          heroTitle: "想知道应用会保存什么信息，这页最直接。",
          heroSummary: "当前版本主要把阅读进度、界面设置和互动结果保存在你的设备上。它不要求你注册账号，也不会因为你阅读内容就自动把个人资料发给开发者。",
          noteTitle: "先看结论",
          noteBody: "这页只说明当前公开版本实际发生的数据处理。如果以后增加账号、云同步、广告或在线服务，这里的内容也会随之更新。"
        },
        support: {
          heroTitle: "如果遇到问题，这页会告诉你怎么更快得到帮助。",
          heroSummary: "应用闪退、章节打不开、进度不对、显示异常，或者你对当前版本的访问状态有疑问，都可以直接发邮件联系我们。把设备、章节和复现步骤写清楚，通常会更快排查。",
          noteTitle: "发邮件前，先准备这些",
          noteBody: "设备型号、系统版本、问题出现的章节、你做了什么操作，这些信息越完整，我们越容易判断问题出在哪里。"
        },
        contact: {
          heroTitle: "想联系开发者，这里有最直接的方式。",
          heroSummary: "无论是问题反馈、隐私请求、合作咨询还是媒体联系，都可以通过同一个公开邮箱发送。把来意写清楚，会更容易被尽快处理。",
          noteTitle: "怎样写会更清楚",
          noteBody: "在邮件标题或正文开头说明用途，例如“支持”“隐私”“合作”，通常会比只留一句简短留言更容易得到准确回复。"
        },
        contentRating: {
          heroTitle: "这部作品整体偏黑暗，开始前建议先看这里。",
          heroSummary: "《天机录》包含持续冲突、伤亡、血腥描写、威胁和压迫情节。如果你对这类内容比较敏感，先确认作品气质是否适合自己，会更安心。",
          noteTitle: "这页是给谁看的",
          noteBody: "它不是剧透页，而是帮助你判断内容强度是否在自己的接受范围内。"
        },
        terms: {
          heroTitle: "使用前看一遍，就能知道哪些规则和边界与你有关。",
          heroSummary: "这页说明应用的基本使用规则、内容版权、服务边界，以及联系开发者的方式。重点是把和你有关的事情说清楚，而不是把简单内容写得很复杂。",
          noteTitle: "为什么会有这页",
          noteBody: "它的作用不是增加门槛，而是把你在使用前应该知道的事情提前讲明白。"
        }
      }
    },
    en: {
      footerTitle: "Help, Privacy, and Terms",
      footerBody: "These pages focus on the questions users actually have: what the app stores, how to get help, whether the content is right for you, and what basic rules apply.",
      common: {
        appReviewReady: "Quick answers",
        userFacing: "Email contact",
        multiLanguage: "Four languages"
      },
      pages: {
        home: {
          heroTitle: "Start here if you want the simple version first.",
          heroSummary: "This page brings together Tianjilu's privacy details, support route, developer contact, content notice, and basic terms. It is the quickest place to start before reading, and the quickest place to return when you need help.",
          noteTitle: "What you can do here",
          noteBody: "You can check what the app stores, how to contact the developer, whether the story fits you, and what basic rules apply when you use the app."
        },
        privacy: {
          heroTitle: "If you want to know what the app keeps, start here.",
          heroSummary: "The current version mainly stores reading progress, interface settings, and choice results on your device. It does not require an account, and it does not send your personal details to the developer just because you read the story.",
          noteTitle: "Short version",
          noteBody: "This page covers only the data handling that actually happens in the current public version. If future versions add accounts, cloud sync, ads, or online services, this page should change too."
        },
        support: {
          heroTitle: "If something goes wrong, this page is the fastest way to get oriented.",
          heroSummary: "Crashes, missing chapters, wrong progress, display issues, or access questions can all be reported by email. If you include the device, chapter, and reproduction steps, it is usually much easier to help.",
          noteTitle: "What to include before you send",
          noteBody: "The more specific the report is, the easier it is to investigate. Device model, OS version, chapter number, and the steps right before the problem usually help the most."
        },
        contact: {
          heroTitle: "If you need the developer, this is the right place.",
          heroSummary: "Support questions, privacy requests, business inquiries, and media contact all use the same public email address. A clear subject line makes it easier to route your message quickly.",
          noteTitle: "How to make the message clear",
          noteBody: "If you say upfront whether the email is about support, privacy, or business, it is much easier to handle accurately and without extra back-and-forth."
        },
        contentRating: {
          heroTitle: "This story gets dark. Check the tone before you dive in.",
          heroSummary: "Tianjilu includes recurring conflict, injury, blood, death, threats, and oppressive situations. If you are sensitive to that kind of material, this page is here so you can decide with clear expectations.",
          noteTitle: "Who this page is for",
          noteBody: "This is not a spoiler page. It is here to help you judge whether the content fits your comfort level."
        },
        terms: {
          heroTitle: "A quick read now makes the rules and limits easier to understand later.",
          heroSummary: "This page explains the basic rules for using the app, the rights around the content, the limits of service availability, and how to reach the developer. The goal is to explain the important points clearly, not bury them in formal wording.",
          noteTitle: "Why this page exists",
          noteBody: "It is here to set expectations early, so you know what matters before you keep using the app."
        }
      }
    },
    ja: {
      footerTitle: "ヘルプと案内",
      footerBody: "このページでは、ユーザーが実際に気にすることを整理しています。何が保存されるのか、困ったときにどう連絡するのか、作品が自分に合うか、基本ルールは何かを確認できます。",
      common: {
        appReviewReady: "すぐ確認",
        userFacing: "メール対応",
        multiLanguage: "4言語対応"
      },
      pages: {
        home: {
          heroTitle: "使う前に知っておきたいことも、困ったときの窓口も、ここから確認できます。",
          heroSummary: "このページでは、天机録のプライバシー案内、サポート方法、開発者の連絡先、内容案内、利用規約をまとめて確認できます。使い始める前にも、困ったときにも、最初に見るページです。",
          noteTitle: "このページでわかること",
          noteBody: "アプリが何を保存するのか、困ったときにどう連絡するのか、作品が自分に合うか、利用時の基本ルールは何かをここから確認できます。"
        },
        privacy: {
          heroTitle: "アプリが何を保存するのか知りたいなら、このページがいちばん直接的です。",
          heroSummary: "現在の版では、読書進行、画面設定、選択結果などを主に端末内に保存します。アカウント登録は必須ではなく、作品を読むだけで個人情報が自動送信されることもありません。",
          noteTitle: "先に結論",
          noteBody: "ここでは、現在の公開版で実際に行われている情報取扱いだけを説明します。将来、アカウント、クラウド同期、広告、オンライン機能が追加された場合は、この内容も更新されます。"
        },
        support: {
          heroTitle: "困ったときに、いちばん早く次の行動がわかるページです。",
          heroSummary: "クラッシュ、章が開かない、進行が合わない、表示が崩れる、利用状態がわからないといった問題は、メールで連絡できます。端末、章番号、再現手順があると、確認がかなり早くなります。",
          noteTitle: "送る前にあると助かる情報",
          noteBody: "端末名、OS バージョン、問題の章、直前の操作がわかると、原因を絞り込みやすくなります。"
        },
        contact: {
          heroTitle: "開発者に連絡したいときは、このページからで大丈夫です。",
          heroSummary: "サポート、プライバシー、協業、メディア連絡は、同じ公開メールアドレスで受け付けています。件名か冒頭に用件があると、より適切に案内できます。",
          noteTitle: "伝わりやすく書くコツ",
          noteBody: "「サポート」「プライバシー」「協業」など、目的を最初に書いていただくと、確認や返信が早くなります。"
        },
        contentRating: {
          heroTitle: "この作品は全体的に重めです。始める前に雰囲気を確認できます。",
          heroSummary: "天机録には、継続的な対立、負傷、流血、死、脅威、圧迫感のある展開が含まれます。こうした題材が苦手な場合、このページで先に内容の強さを確認できます。",
          noteTitle: "このページの役割",
          noteBody: "ネタバレのためではなく、作品の強度が自分に合うか判断しやすくするための案内です。"
        },
        terms: {
          heroTitle: "使い続ける前に、関係のあるルールと範囲を短く確認できます。",
          heroSummary: "このページでは、アプリの基本的な利用ルール、内容の権利、サービスの限界、開発者への連絡方法を説明します。難しい言い回しより、まず意味が伝わることを重視しています。",
          noteTitle: "なぜこのページがあるのか",
          noteBody: "利用前に知っておいた方がよいことを、あとから困らないように先に整理しているページです。"
        }
      }
    },
    ko: {
      footerTitle: "도움말 및 안내",
      footerBody: "이 페이지에서는 사용자가 실제로 궁금해하는 내용을 정리합니다. 무엇이 저장되는지, 문제가 생기면 어떻게 연락하는지, 작품이 나에게 맞는지, 어떤 기본 규칙이 적용되는지 확인할 수 있습니다.",
      common: {
        appReviewReady: "바로 확인",
        userFacing: "이메일 문의",
        multiLanguage: "4개 언어"
      },
      pages: {
        home: {
          heroTitle: "시작하기 전에 알고 싶은 내용도, 문제가 생겼을 때 필요한 정보도 여기서 바로 찾을 수 있습니다.",
          heroSummary: "이 페이지에서는 천기록의 개인정보 안내, 지원 방법, 개발자 연락처, 콘텐츠 안내, 이용약관을 한곳에 모아 두었습니다. 처음 보기 전에도, 도움이 필요할 때에도 가장 먼저 보면 되는 페이지입니다.",
          noteTitle: "이 페이지에서 볼 수 있는 것",
          noteBody: "앱이 무엇을 저장하는지, 문제가 생겼을 때 어떻게 연락하는지, 작품이 나에게 맞는지, 사용할 때 어떤 기본 규칙이 적용되는지를 여기서 확인할 수 있습니다."
        },
        privacy: {
          heroTitle: "앱이 무엇을 저장하는지 알고 싶다면, 이 페이지가 가장 직접적입니다.",
          heroSummary: "현재 버전은 읽기 진행 상황, 화면 설정, 선택 결과를 주로 기기에 저장합니다. 계정 가입은 필수가 아니며, 작품을 읽는 것만으로 개인 정보가 개발자에게 자동 전송되지는 않습니다.",
          noteTitle: "먼저 짧게 보면",
          noteBody: "이 페이지는 현재 공개 버전에서 실제로 이루어지는 정보 처리만 설명합니다. 앞으로 계정, 클라우드 동기화, 광고, 온라인 기능이 추가되면 이 내용도 함께 바뀝니다."
        },
        support: {
          heroTitle: "문제가 생겼을 때, 가장 빨리 다음 행동을 알 수 있는 페이지입니다.",
          heroSummary: "앱 충돌, 챕터가 열리지 않음, 진행 이상, 표시 문제, 접근 상태 문의는 이메일로 보낼 수 있습니다. 기기 정보, 챕터 번호, 재현 방법이 있으면 확인이 훨씬 빨라집니다.",
          noteTitle: "보내기 전에 있으면 좋은 정보",
          noteBody: "기기명, OS 버전, 문제가 난 챕터, 직전에 했던 동작을 함께 적어 주시면 원인을 좁히는 데 큰 도움이 됩니다."
        },
        contact: {
          heroTitle: "개발자에게 연락해야 한다면, 이 페이지에서 바로 시작하면 됩니다.",
          heroSummary: "지원, 개인정보 문의, 협업, 미디어 연락은 같은 공개 이메일 주소로 보낼 수 있습니다. 제목이나 첫 문장에 용건을 적어 주시면 더 정확하게 처리할 수 있습니다.",
          noteTitle: "더 명확하게 쓰는 방법",
          noteBody: "‘지원’, ‘개인정보’, ‘협업’처럼 문의 목적을 먼저 적어 주시면 확인과 답변이 더 빨라집니다."
        },
        contentRating: {
          heroTitle: "이 작품은 전체적으로 분위기가 무거운 편입니다. 시작하기 전에 톤을 먼저 확인할 수 있습니다.",
          heroSummary: "천기록에는 반복되는 대립, 부상, 유혈, 죽음, 위협, 압박감 있는 전개가 포함됩니다. 이런 소재에 민감하다면 이 페이지에서 먼저 강도를 확인할 수 있습니다.",
          noteTitle: "이 페이지의 역할",
          noteBody: "스포일러를 주기 위한 페이지가 아니라, 작품의 강도가 자신의 범위에 맞는지 판단할 수 있게 돕기 위한 안내입니다."
        },
        terms: {
          heroTitle: "계속 사용하기 전에, 나와 관련 있는 규칙과 범위를 짧게 확인할 수 있습니다.",
          heroSummary: "이 페이지에서는 앱의 기본 이용 규칙, 콘텐츠 권리, 서비스 한계, 개발자 연락 방법을 설명합니다. 어려운 표현보다 먼저 뜻이 분명하게 전달되도록 쓰는 것을 우선했습니다.",
          noteTitle: "왜 이 페이지가 필요한가",
          noteBody: "사용하기 전에 알아두면 좋은 내용을 미리 정리해 두어, 나중에 헷갈리지 않도록 돕기 위한 페이지입니다."
        }
      }
    }
  };

  Object.entries(overrides).forEach(([language, value]) => {
    const translation = data.translations[language];
    if (!translation) return;

    if (value.footerTitle) translation.footerTitle = value.footerTitle;
    if (value.footerBody) translation.footerBody = value.footerBody;
    if (value.common) Object.assign(translation.common, value.common);

    Object.entries(value.pages || {}).forEach(([page, pageOverrides]) => {
      if (!translation.pages || !translation.pages[page]) return;
      Object.assign(translation.pages[page], pageOverrides);
    });
  });

  data.updatedAt = "2026-04-05";
})();
