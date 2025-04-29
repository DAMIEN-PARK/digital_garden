---
title: LIBRARY
description: 책장
date: 2025-04-22
tags: 
draft: true
---
---
### 최근 수정 도서
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



```dataview
TABLE WITHOUT ID
    "![|60](" + cover + ")" as 표지,
    link(file.link, title) as 제목,
    join(list(author)) as 저자,
    status as 상태

FROM #Book and #IT
SORT status ASC
```

