---
title: Quartz4 플러그인 소개
description: 
date: 2025-04-22
tags: 
URL: 
publish: true
---

---
### 🔧 Transformer 플러그인 (콘텐츠 변환)
- **Frontmatter**: Markdown 파일의 상단 메타데이터를 파싱하여 제목, 태그, 날짜 등의 정보를 추출합니다
- **CrawlLinks**: 링크를 분석하여 올바른 경로로 변환하며, 이미지와 같은 임베디드 링크 처리도 지원합니다
- **SyntaxHighlighting**: 코드 블록에 문법 하이라이팅을 적용합니다. Shikiji 테마를 사용하며, 라이트/다크 모드에 따른 테마 설정이 가능합니다
- **HardLineBreaks**: Markdown에서 단일 줄바꿈을 HTML의 `<br>`로 변환하여 줄바꿈을 강제합니다. Obsidian과의 호환성을 위해 사용됩니다
- **Latex**: 수학 수식을 KaTeX 또는 MathJax를 사용하여 렌더링합니다
- **ObsidianFlavoredMarkdown / RoamFlavoredMarkdown / OxHugoFlavoredMarkdown / GitHubFlavoredMarkdown**:각각의 플랫폼 스타일에 맞는 Markdown 문법을 지원합니다
- **TableOfContents**: 문서의 목차를 자동으로 생성합니다
- **CreatedModifiedDate**: 파일의 생성 및 수정 날짜를 메타데이터로 추가합니다
- **Description**: 페이지의 설명을 생성하거나 추출합니다
- **Citations**: 인용문을 처리하여 참고 문헌 목록을 생성합니다

### 🧹 Filter 플러그인 (콘텐츠 필터링)
- **[RemoveDrafts](https://quartz.jzhao.xyz/plugins/RemoveDrafts)** `draft: true`로 표시된 문서를 게시 대상에서 제외
- **ExplicitPublish** `publish: true`로 명시된 문서만 게시하며, 나머지는 제외

### 📤 Emitter 플러그인 (콘텐츠 출력)

- *_ContentPage_: 각 Markdown 파일을 HTML 페이지로 변환하여 전체 레이아웃을 생성

- *_Assets_: Markdown 외의 정적 자산(이미지, 비디오 등)을 사이트에 포함시킵다.
- *_Static_: Quartz 자체에서 사용하는 정적 리소스(예: 아이콘, 폰트)를 포함시킵다.
- ==_FolderPage / TagPage_: 폴더별 또는 태그별로 콘텐츠를 정리한 페이지를 생성합다.==
- *_NotFoundPage_: 404 오류 페이지를 생성합다.
- *_AliasRedirects_: 다른 경로로의 리디렉션을 설정합다.
- *_CNAME_: 사용자 지정 도메인(CNAME)을 설정합다.
- *_ComponentResources_: Quartz 컴포넌트에서 사용하는 리소스를 관리합다.
- *_ContentIndex_: 콘텐츠의 인덱스를 생성하여 검색 기능 등을 지원합다.

각 플러그인은 `quartz.config.ts` 파일에서 설정할 수 있으며, 필요에 따라 추가, 제거, 순서 변경이 가능합니. 자세한 설정 방법은 공식 문서의 구성(Configuration)섹션을 참고하시기 바랍니다.
