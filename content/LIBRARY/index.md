---
title: LIBRARY
layout: dataViewLayout
---

이 페이지에서는 옵시디언의 Dataview 플러그인과 비슷한 형태로 도서 목록을 볼 수 있습니다.



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

