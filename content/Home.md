---
title: 홈 화면
description: 
date: 2025-04-21
tags: 
draft: true
---
[[index|웹페이지 홈화면 구성]]
## To-Do
```todoist
filter: "today | overdue"
```



### 최근 수정된 파일(10)
```dataview
table 
	file.mtime as "수정 시간"
from "ZETTELKASTEN/Fleeting"
sort file.mtime DESC
limit 10
```
![[Roadmap.excalidraw]]
### 최근 수정된 책(5)
```dataview
TABLE WITHOUT ID
    "![|60](" + cover + ")" as 표지,
    link(file.link, title) as 제목,
    join(list(author)) as 저자,
    status as 상태

FROM #Book
WHERE file.folder = "LIBRARY"

SORT file.mtime DESC
LIMIT 5
```

📂910.Fleeting notes
  `$=dv.list(dv.pages('"RESOURCE/Zettelkasten/Fleeting"').sort(f=>f.file.mtime.ts,"desc").limit(10).file.link)`