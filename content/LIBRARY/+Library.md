---
title: 
date: 2025-04-21
tags:
---


---
### 최근 수정 도서
```dataview
TABLE WITHOUT ID
	"![|60](" + cover + ")" as Cover,
	link(file.link, title) as Title,
	join(list(author)) as Author,
	status as Status
FROM #Book 
WHERE !contains(file.path, "Templates")
SORT status DESC, file.mtime DESC
LIMIT 10
```

dataview와 
css TEST
#철학 