---
title: 홈 화면
description: 
date: 2025-04-21
tags: 
draft: true
---

## To-Do
```todoist
filter: "today | overdue"
```

- [[index|웹 홈 화면 구성]]

📂910.Fleeting notes
  `$=dv.list(dv.pages('"RESOURCE/Zettelkasten/Fleeting"').sort(f=>f.file.mtime.ts,"desc").limit(10).file.link)`

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

