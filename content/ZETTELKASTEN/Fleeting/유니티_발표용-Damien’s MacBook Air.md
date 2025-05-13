---
title: 유니티_발표용
description: 
date:
  - - 2025-05-04
tags: 
publish: false
---

> **🔑 목표 설정:**  
> 간단한 공간 안에 캐릭터 하나가 있으며, 게임 컨트롤러(콘솔 패드)로 움직이고 몇 가지 상호작용(interaction)을 할 수 있도록 구현하는 것.

##  **STEP 1: 유니티 프로젝트 세팅하기**
- Unity Hub 실행 → 새 프로젝트 생성 → **3D 프로젝트** 선택
  - 프로젝트 이름 지정 (예: `Console_Demo`)
- 유니티 에셋 스토어에서 무료 캐릭터 및 환경 에셋 다운로드  
    - 검색 키워드 예시: `Free Character Controller`, `Free Environment`
- 다운로드 받은 에셋을 유니티 프로젝트에서 불러오기  
    (`Window → Package Manager → My Assets → Import`)
## 🧍 **STEP 2: 캐릭터 컨트롤러 추가하기**

- 기본 제공되는 Character Controller 컴포넌트를 활용하거나, 에셋에서 제공하는 간단한 컨트롤러 프리팹(prefab)을 사용합니다.
    
- 프리팹을 씬(Scene)으로 드래그하여 배치합니다.
    

**(직접 제작하려면)** _(옵션)_

- 빈 오브젝트(GameObject) 생성 후, Character Controller 컴포넌트 추가
    
- 간단한 스크립트로 움직임 추가:
    

```csharp
// SimpleMovement.cs
using UnityEngine;

public class SimpleMovement : MonoBehaviour
{
    public float speed = 5f;
    private CharacterController controller;

    void Start()
    {
        controller = GetComponent<CharacterController>();
    }

    void Update()
    {
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");

        Vector3 move = transform.right * x + transform.forward * z;
        controller.Move(move * speed * Time.deltaTime);
    }
}
```
- 스크립트를 캐릭터(GameObject)에 드래그하여 적용합니다.
## STEP 4: 콘솔 컨트롤러 연결 및 테스트**
- PS5 컨트롤러(DualSense) 또는 Xbox 컨트롤러를 PC에 연결 (USB 또는 블루투스)
- 유니티 기본 입력 시스템은 자동으로 콘솔 컨트롤러를 인식합니다.
- 유니티의 입력 축(Input Axis) 설정을 확인하여, 잘 동작하는지 플레이 모드에서 테스트합니다.  
    (`Edit → Project Settings → Input Manager`에서 확인 가능)
> **간단히 체크할 입력 축:**  
> `Horizontal` : 좌우 움직임 (좌스틱 좌우)  
> `Vertical` : 앞뒤 움직임 (좌스틱 상하)

## STEP 4: Interactive 요소 추가**
### 📍 예시 - 오브젝트에 다가가서 버튼 누르면 색깔 바꾸기
- 큐브 하나 생성 (`GameObject → 3D Object → Cube`)
- 새 스크립트 추가 (`InteractiveObject.cs`):
```c#
using UnityEngine;
public class InteractiveObject : MonoBehaviour
{
    private Renderer rend;
    private bool inRange = false;

    void Start()
    {
        rend = GetComponent<Renderer>();
    }

    void Update()
    {
        if(inRange && Input.GetButtonDown("Jump")) // 기본적으로 스페이스바 또는 콘솔 컨트롤러의 버튼 (X, A)
        {
            rend.material.color = Random.ColorHSV();
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if(other.CompareTag("Player"))
            inRange = true;
    }

    void OnTriggerExit(Collider other)
    {
        if(other.CompareTag("Player"))
            inRange = false;
    }
}
```

- 큐브 오브젝트의 Collider에서 `Is Trigger` 체크
- Player로 지정된 캐릭터 오브젝트에 Tag `"Player"` 추가
- 캐릭터가 큐브에 접근하여 버튼을 누르면 색이 변합니다.

## **STEP 6: 게임 빌드하기**

유니티 메뉴에서:
- `File → Build Settings`
- 플랫폼 선택 (보통 Windows)
- `Build` 클릭 후 실행 가능한 파일 생성 (`.exe` 파일)

## 📺 **STEP 7: 친구에게 보여주기**
- 빌드한 파일 폴더를 압축해서 친구에게 공유
- 친구는 압축 파일을 풀고, `.exe` 파일로 바로 실행할 수 있습니다.
- 콘솔 컨트롤러와 연결한 상태로 실행하면 바로 사용 가능합니다.

## ✅ **초간단 제작 완성!**

|작업|난이도|소요 시간(예상)|
|---|---|---|
|프로젝트 생성|🟢 매우 쉬움|10분|
|에셋 불러오기|🟢 쉬움|20분|
|캐릭터 움직임 구현|🟡 보통|30분|
|콘솔 컨트롤러 연결|🟢 매우 쉬움|5분|
|간단한 상호작용 구현|🟡 보통|30분|
|빌드 후 친구 공유|🟢 매우 쉬움|10분|

> **총 1~2시간 정도면 충분히 간단한 인터랙티브 데모를 만들 수 있습니다!**

### Resources
