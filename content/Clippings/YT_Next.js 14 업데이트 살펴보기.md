---
url: https://yozm.wishket.com/magazine/detail/2324/
tags:
  - nextjs
created: 2025-05-06
publish: false
---

지난 10월 26일, Next.js 14가 발표되었습니다. 13 버전 업데이트의 변화가 워낙 커서 그런지 이번에는 상대적으로 변경 사항이 적게 느껴지기도 했습니다. 이번 업데이트에서는 13 버전에서 소개된 App Router를 비롯한 여러 기능에 대한 안정화 작업이 주로 이루어졌습니다. 이번 글에서는 구체적으로 어떤 변화가 있었는지 살펴보겠습니다.

사실 이번 업데이트는 13 버전의 변화를 모르는 분에게는 크게 와닿지 않았을 수도 있습니다. 14 업데이트를 이해하기 위해서는 13 버전에서 소개된 App Router에 관한 이해가 필요한데요. 아직 13 버전의 업데이트가 생소한 분들도 부담 없이 읽으실 수 있도록 App Router 내용도 간단히 포함했습니다.

### Next.js 13이 불러온 변화: App Router vs Pages Router

Next.js는 리액트 프레임워크로서 다양한 기능을 제공하고 있는데, 그중 가장 대표적인 것이 바로 라우팅입니다. 많은 프레임워크는 라우팅을 위해 디렉토리 구조와 파일 규칙을 강제합니다. Next.js 역시 예전부터 라우팅을 위한 파일을 웹사이트 구조에 맞춰서 루트 디렉토리에 있는 pages라는 폴더 내부에 생성하도록 했습니다. pages 디렉토리 상위에 src 폴더가 추가되는 변경이 있기도 했지만, Next.js는 두 방식(src/pages/와 pages/)을 모두 허용했고, 이외에 규칙의 큰 변화는 없었습니다.

그러나 Next.js 13부터 App Router가 등장하며 Next.js의 라우팅 방식이 아예 달라졌습니다. 사실 Next.js 13.0에서는 베타로 소개되었기에, 실질적인 변화는 2023년 5월 초에 있었던 Next.js 13.4부터라고 봐야 할 것 같습니다. 이처럼 Next.js 13.4부터 프로젝트 생성 시 App Router가 기본 설정으로 적용되었으며, 라우팅의 많은 규칙이 달라졌습니다.

![](https://yozm.wishket.com/media/news/2324/%EC%9D%B4%EB%AF%B8%EC%A7%801_next-cli.png)

올해 5월, 여느 때와 같이 cli로 새로운 Next.js 프로젝트를 생성할 때 엔터만 누르다가 App Router를 처음 접하게 되었습니다. 익숙하지 않은 디렉토리 구조가 나타나서 잠시 놀랐지만, 다시 프로젝트를 만들기 귀찮아서 새로운 라우터 방식을 사용해 보았고 지금은 꽤 만족하고 있습니다. <출처: 작가 편집>

#### **1) 라우팅 디렉토리 및 파일 규칙**

App Router가 가져온 변화는 단순히 폴더명이 바뀐 정도가 아니었습니다. Pages Router에서는 정적인 공통 마크업은 \_document에 작성하고, 모든 페이지가 공유하는 로직은 \_app에 작성했는데요. App Router 방식에서는 해당 파일이 사라지고 디렉토리 단위로 적용되는 layout이라는 개념이 생겼습니다. 파일 경로와 이름에 따라 사이트 주소가 설정되는 규칙도, 디렉토리 구조로 경로를 구분하고 파일은 page라는 이름을 갖도록 변경되었습니다.

![](https://yozm.wishket.com/media/news/2324/%EC%9D%B4%EB%AF%B8%EC%A7%802_directory.png)

App Router와 Pages Router의 기본 설정 차이. 디렉토리 구조와 파일 규칙이 전반적으로 달라졌습니다. <출처: 작가 편집>

#### **2) 메타데이터 적용 방법**

라우팅 규칙이 변경됨에 따라 SEO에서 필수적인 메타태그 적용 방법도 달라졌습니다. 기존 Pages Router 방식에서는 일반적인 HTML과 유사하게 헤드 태그에 메타 태그를 작성했는데, App Router 방식에서는 레이아웃 및 페이지 파일에서 별도로 Metadata를 export 하도록 만들었습니다. 이제 App Router에서는 메타 태그를 따로 작성하지 못하는 것은 물론, next/head의 Head 태그도 사용할 수 없습니다.

![](https://yozm.wishket.com/media/news/2324/%EC%9D%B4%EB%AF%B8%EC%A7%803_metadata.png)

Pages Router와 App Router에서 Metadata를 적용하는 방법 <출처: 작가 편집>

#### **3) 서버 사이드 렌더링**

Pages Router 방식의 페이지에서 서버 사이드 렌더링을 위해서는 getServerSideProps라는 이름의 함수를 사용해야 했습니다. 그러나 App Router에서는 일반적인 fetch 함수를 페이지에서 비동기로 사용하여 서버 사이드 렌더링을 구현할 수 있습니다.

![](https://yozm.wishket.com/media/news/2324/%EC%9D%B4%EB%AF%B8%EC%A7%804-ssr.png)

서버 사이드에서 API를 호출하는 방법의 차이 <출처: 작가 편집>

### Next.js 14의 주요 변화

Next.js 13.4의 App Router에는 앞서 소개한 내용 외에도 많은 변화가 있었는데, 자세한 내용은 [공식 문서](https://nextjs.org/blog/next-13-4)를 통해 확인할 수 있습니다. 이제 Next.js 13.4의 변화를 어느 정도 이해한 상태에서 Next.js 14 업데이트 내용을 살펴보겠습니다.

#### **1) 메타데이터 설정 변경**

업데이트 블로그에서는 강조되지 않았지만, 저에게 가장 크게 느껴진 변화는 메타데이터 설정 방식이었습니다. 앞서 설명한 것처럼, App Router에서는 메타데이터를 레이아웃과 페이지에 따로 작성합니다. 그래서 기존 13.4 버전에서는 description이나 og tag와 같은 기본적인 메타 태그는 물론, viewport, colorScheme, themeColor 모두 Metadata에서 설정해서 사용해야 했습니다.

그러나 이제 Next.js 14부터는 유저 경험에 영향을 주는 viewport, colorScheme, themeColor 정보는 기존 Metadata 타입과 분리되어 별도로 정의해야 합니다. 다른 메타데이터와 달리 페이지 콘텐츠를 서버에서 내려받기 전에 필요한 해당 필드는 기존 Metadata 타입에서 만료 처리되었고, 추후 메이저 업데이트에서 제거될 예정입니다.

![](https://yozm.wishket.com/media/news/2324/%EC%9D%B4%EB%AF%B8%EC%A7%805_viewport.png)

![](https://yozm.wishket.com/media/news/2324/%EC%9D%B4%EB%AF%B8%EC%A7%805-2_viewport.png)

상단 이미지는 기존 13.4 버전에서 작성한 메타데이터 설정 코드입니다. 14로 업데이트됨에 따라 viewport 부분을 삭제하게 되었으며, 앞으로는 하단 이미지처럼 사용해야 합니다. <출처: 작가 편집>

#### **2) 서버 액션 안정화**

장기적으로 가장 발전이 기대되는 점은 서버 액션 기능입니다. Next.js는 React 프레임워크라서 프론트엔드로만 사용해야 한다고 생각하는 분들이 많지만, Next.js는 예전부터 API 라우터도 제공하고 있었습니다. 실제로 API 라우터를 활용하여 Next.js를 풀스택 프레임워크로 사용하는 분들도 있습니다.

Next.js는 여기서 더 나아가서 서버 액션을 통해 API 라우터를 별도로 생성하지 않아도 되도록 만들었습니다. 동일한 Next.js 프로젝트에서만 사용할 거라면, 별도로 API 라우터까지 만들지 않고 서버 컴포넌트에서 한 번에 데이터베이스에 값을 저장할 수 있도록 제공한 것입니다. ‘use server’를 함수나 파일에 작성해 두면, 함수 내용을 자동으로 서버 API로 만들어 주고, 개발자는 유저에게 코드가 노출될 걱정 없이 자유롭게 데이터베이스를 관리할 수 있습니다.

![](https://yozm.wishket.com/media/news/2324/%EC%9D%B4%EB%AF%B8%EC%A7%806_server-action.png)

13.4에서도 서버 액션을 제공했는데, 사용하기 위해서는 next.config.js에 따로 설정이 필요했습니다. 이제 Next.js 14부터 서버 액션이 안정화되면서 해당 설정 없이도 서버 액션 기능을 이용할 수 있습니다. <출처: 작가 편집>

#### **3) 기타 변경 사항**

업데이트 블로그에서는 강조된 내용이지만, 저에게는 크게 와닿지 않았던 점은 ‘turbopack’ 업데이트입니다. Rust 기반의 컴파일러를 통해 로컬 서버 시작 속도와 코드 업데이트 반영 속도를 각각 최대 53.3%, 94.7% 개선했다고 합니다. 현재 저희 서비스가 그렇게 무겁지 않아서 바로 사용해 보지는 않았는데, 추후 업데이트를 거쳐 안정화 단계로 넘어가면 그때 제대로 사용해 보고자 합니다. 또한 이번에 최소 Node.js 버전이 18.17로 변경되었으니 Next.js 14를 사용할 분이라면 유의하는 것이 좋습니다.

![](https://yozm.wishket.com/media/news/2324/%EC%9D%B4%EB%AF%B8%EC%A7%807_other-changes.png)

업데이트할 때는 항상 Breaking 변화를 유의해야 합니다. <출처: 작가 편집>

### **마치며**

저는 버전 8부터 Next.js를 사용해 왔는데요. App Router의 도입은 \_app에서 getInitialProps를 사용할 수 없게 된 것 이후로 저에게 가장 크게 와닿았던 변화였습니다. 그리고 서버 액션이 본격적으로 도입된 Next.js 14를 보니, App Router가 더욱 발전할 것 같다는 생각도 듭니다. 앞으로 또 어떤 새로운 변화가 있을지 지켜봐도 좋겠습니다.

<참고>

[https://nextjs.org/blog/next-14](https://nextjs.org/blog/next-14)
유튜브 영상