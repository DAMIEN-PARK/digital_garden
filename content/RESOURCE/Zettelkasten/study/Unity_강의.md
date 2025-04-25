---
title: Unity_note
description: 
date: 2025-04-22
tags:
  - unity
---


---
유니티에 온걸 환영한다

### Package  설치
![[Pasted image 20250425150708.png]]

설치한 Package 목록록
- city people Free
- Basic Motions
- Toon City Pack
- Terrain Textures
- Anime Girl
- Water shaders
- Handpainted Grass

### Hierachy
##### Terrain 
- 처음 열게 되면 inspector >> Terrain  나오게 된다

![[Pasted image 20250425165617.png]]

##### Paint Terrain
- Paint Texture를 선택 >> Edit Terrain Layers 에서 
	- Creat Layer  해서 잔디(Grass) 선택해서 깔아준다
	- 이후 Add Layer 로 여러 잔디 유형을 선택후 취사에 맞게 디자인한다
	- 아스팔트나 진흙으로 길을 낸다

![[Pasted image 20250425165732.png]]

##### Paint Tree 
![[Pasted image 20250425170147.png]]
- Edit Trees 에서 Tree를 고른후 적당한 브러쉬로 디자인한다
	- Brush size 
	- Desity 나무의 밀도 

##### Water 
물웅덩이 제작
![[Pasted image 20250425170633.png]]

- Terrain(Inspector) 에서 Paint Holes를 선택하여 구멍을 내준다.
	- 이때 브러쉬 는 Builtin brush 1 ⚫ 첫번째 꽉찬걸로 해줘야 함
	- set Height 를 선택해서 Height 를 올려준다 본인은 3으로 함.

	![[Pasted image 20250425170934.png]]
	- 받은 에셋에서 Water를 드래그해서 올려 놓으면 끝
	 ![[Pasted image 20250425171038.png]]

크기는 툴조정하는 Rect Tool 을 이용하여 조정

##### Fence 
- 받은 에셋에서 wooden fence를 선택해서 배치한다
- 경로는 이러하다
	![[Pasted image 20250425171258.png]]
- 덤으로 ice cream stand 나 취향에 맞는 object 도 배치하면 좋다
- 펜스 하나를 적당히 잘 배치 복사 붙여넣기를 통하여 여러개를 붙인다
- 
![[Pasted image 20250425171444.png]]
- Creat Empty 를  통해 Object 폴더?를 만들어 fence들을 안에 배치해 주면 추후에 object 폴더 하나로 여러 Fence를 쉽게 배치조정 한다.

![[Pasted image 20250425171617.png|500]]

##### Canvas
- Hierachy 에서 마우스 우클릭 하하면 UI>>Canvas를 생성한다
	
	![[Pasted image 20250425171851.png|500]]

- 2D를 누르면 화면이 바뀐다. Canvas에 우클릭 후 UI >> Raw image를 추가한다.

	![[Pasted image 20250425172226.png|700]]

- Raw image를 추가 한후 Texture ⭕오른쪽 끝 circle 누르면 폴더가 나온다 여기서 우선 이미지를 불러온다
	![[Pasted image 20250425172706.png|700]]

##### Character
- 우선 Asset store에서 받은 캐릭터를 불러온다
 ![[Pasted image 20250425173134.png|500]]
 

##### NPC




### Daily
- 4월 25일 ![[2025-04-25#unity]]



### Resources
