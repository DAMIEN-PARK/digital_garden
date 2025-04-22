---
title: LIBRARY
layout: cardViewLayout
---

이 페이지에서는 도서 목록을 카드 형식으로 볼 수 있습니다.



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

