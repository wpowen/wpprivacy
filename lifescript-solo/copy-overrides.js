(function () {
  const data = window.lifeScriptSoloLegalPages;
  if (!data || !data.translations) return;

  const overrides = {
    "zh-Hans": {
      footerBody: "这些页面面向用户公开说明当前版本的隐私处理、支持方式、联系方式、内容强度与基本使用规则。",
      home: {
        heroTitle: "官方隐私、支持、联系与内容说明页面。",
        heroSummary: "这里集中提供天机录当前公开版本的隐私政策、用户支持方式、开发者联系方式、内容分级提示与服务条款，方便你在使用前或需要帮助时快速查阅。",
        noteTitle: "说明范围",
        noteBody: "这里说明的是当前已经公开提供的版本，不包含未上线功能或额外承诺。若产品能力、支持方式或信息处理范围发生变化，页面也会同步更新。"
      }
    },
    en: {
      footerBody: "These pages explain the current version's privacy handling, support route, public contact method, content intensity, and basic terms of use.",
      home: {
        heroTitle: "Official pages for privacy, support, contact, and content guidance.",
        heroSummary: "This page gathers the privacy policy, support information, developer contact route, content notice, and terms for the current public version of Tianjilu so they are easy to review when needed.",
        noteTitle: "Scope of these pages",
        noteBody: "These pages describe only the version that is already public. They do not promise unreleased features or broader commitments. If product scope or information handling changes, the pages should be updated as well."
      }
    },
    ja: {
      footerBody: "このページでは、現在の公開版における情報の扱い、サポート方法、連絡先、作品の内容強度、基本的な利用ルールを案内します。",
      home: {
        heroTitle: "プライバシー、サポート、連絡先、内容案内の公式ページです。",
        heroSummary: "このページでは、天机録の現在の公開版に関するプライバシーポリシー、サポート案内、開発者の連絡先、内容案内、利用規約をまとめて確認できます。",
        noteTitle: "案内の範囲",
        noteBody: "ここに記載しているのは、すでに公開されている現在の版についての説明です。未公開機能や追加の約束を意味するものではありません。機能範囲や情報の扱いが変われば、このページも更新されます。"
      }
    },
    ko: {
      footerBody: "이 페이지에서는 현재 공개 버전의 개인정보 처리, 지원 방식, 연락처, 작품의 내용 강도, 기본 이용 규칙을 안내합니다.",
      home: {
        heroTitle: "개인정보, 지원, 연락처, 콘텐츠 안내를 위한 공식 페이지입니다.",
        heroSummary: "이 페이지에서는 천기록 현재 공개 버전에 대한 개인정보 정책, 사용자 지원, 개발자 연락처, 콘텐츠 안내, 이용약관을 한곳에서 확인할 수 있습니다.",
        noteTitle: "안내 범위",
        noteBody: "여기에 적힌 내용은 이미 공개된 현재 버전에 대한 설명입니다. 아직 공개되지 않은 기능이나 추가 약속을 의미하지 않습니다. 기능 범위나 정보 처리 방식이 바뀌면 이 페이지도 함께 업데이트됩니다."
      }
    }
  };

  Object.entries(overrides).forEach(([language, value]) => {
    const translation = data.translations[language];
    if (!translation || !translation.pages || !translation.pages.home) return;

    if (value.footerBody) translation.footerBody = value.footerBody;
    Object.assign(translation.pages.home, value.home || {});
  });

  data.updatedAt = "2026-04-05";
})();
