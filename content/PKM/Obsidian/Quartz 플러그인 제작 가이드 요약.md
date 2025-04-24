---
title: Quartz 플러그인 제작 가이드 요약
description: 
date: 2025-04-22
tags: 
draft:
---
---
# Quartz 플러그인 제작 가이드 요약
이 페이지는 Quartz에서 자체 플러그인을 만드는 방법에 대한 상세한 가이드입니다. TypeScript 작업 지식이 있는 개발자를 대상으로 합니다.
## 플러그인 기본 구조

Quartz 플러그인은 콘텐츠에 대한 일련의 변환으로, 세 가지 유형이 있습니다:
- **Transformer 플러그인**: 콘텐츠를 변환하거나 메타데이터 추가
- **Filter 플러그인**: 어떤 파일을 유지하고 버릴지 결정
- **Emitter 플러그인**: 모든 처리된 콘텐츠를 가져와 출력 파일 생성

모든 플러그인은 옵션을 받아 해당 유형에 맞는 객체를 반환하는 함수로 정의됩니다.

## 1. Transformer 플러그인

Transformer 플러그인은 마크다운 파일을 입력받아 변경된 콘텐츠를 출력하거나 파일에 메타데이터를 추가합니다:

```typescript
export type QuartzTransformerPluginInstance = {
  name: string
  textTransform?: (ctx: BuildCtx, src: string) => string
  markdownPlugins?: (ctx: BuildCtx) => PluggableList
  htmlPlugins?: (ctx: BuildCtx) => PluggableList
  externalResources?: (ctx: BuildCtx) => Partial<StaticResources>
}
```

주요 구성 요소:
- `name`: 플러그인 등록 이름
- `textTransform`: 마크다운 파싱 전 텍스트 변환
- `markdownPlugins`: remark 플러그인 목록 (마크다운→마크다운 변환)
- `htmlPlugins`: rehype 플러그인 목록 (HTML→HTML 변환)
- `externalResources`: 클라이언트 측에서 필요한 외부 리소스 정의

예시로 Latex 플러그인이 포함되어 있습니다.

## 2. Filter 플러그인
Filter 플러그인은 변환된 콘텐츠 중 어떤 것을 유지하고 버릴지 결정합니다:

```typescript
export type QuartzFilterPluginInstance = {
  name: string
  shouldPublish(ctx: BuildCtx, content: ProcessedContent): boolean
}
```

`shouldPublish` 함수는 콘텐츠를 받아 발행할지(true) 말지(false) 결정합니다.

예시로 RemoveDrafts 플러그인이 포함되어 있습니다.

## 3. Emitter 플러그인

Emitter 플러그인은 변환되고 필터링된 모든 콘텐츠를 가져와 출력 파일을 생성합니다:

```typescript
export type QuartzEmitterPluginInstance = {
  name: string
  emit(ctx: BuildCtx, content: ProcessedContent[], resources: StaticResources): Promise<FilePath[]> | AsyncGenerator<FilePath>
  partialEmit?(ctx: BuildCtx, content: ProcessedContent[], resources: StaticResources, changeEvents: ChangeEvent[]): Promise<FilePath[]> | AsyncGenerator<FilePath> | null
  getQuartzComponents(ctx: BuildCtx): QuartzComponent[]
}
```

주요 구성 요소:
- `name`: 플러그인 이름
- `emit`: 모든 콘텐츠를 처리하여 파일 생성
- `partialEmit`: 증분 빌드를 위한 선택적 함수
- `getQuartzComponents`: 페이지 구성에 사용되는 Quartz 컴포넌트 선언

파일은 Node fs 모듈이나 Quartz의 `write` 함수로 생성할 수 있습니다.

예시로 ContentPage 플러그인이 포함되어 있습니다.

전체적으로 이 가이드는 개발자가 Quartz의 기능을 확장하여 자신만의 플러그인을 만들 수 있도록 상세한 정보를 제공합니다.

[원문 링크](https://quartz.jzhao.xyz/advanced/making-plugins)
