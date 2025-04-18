import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function TagCloud({ allFiles }: QuartzComponentProps) {
  // 모든 태그와 빈도수 계산
  const tagCounts: Record<string, number> = {}
  
  allFiles.forEach((file) => {
    const fileTags = file.frontmatter?.tags || []
    // tags가 문자열이면 배열로 변환, 배열이면 그대로 사용
    const tags = typeof fileTags === 'string' 
      ? [fileTags] 
      : Array.isArray(fileTags) 
        ? fileTags 
        : []
        
    tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })
  
  // 빈도수 기준 내림차순 정렬
  const sortedTags = Object.entries(tagCounts)
    .sort(([, countA], [, countB]) => countB - countA)
  
  // 최대 빈도수 찾기 (폰트 크기 조절용)
  const maxCount = sortedTags.length > 0 ? sortedTags[0][1] : 0
  
  return (
    <div className="tag-cloud">
      <h2>태그 클라우드</h2>
      <div className="tag-list">
        {sortedTags.map(([tag, count]) => {
          // 빈도수에 따라 폰트 크기 계산 (1-3 범위)
          const fontSize = 1 + (count / maxCount) * 2
          
          return (
            <a 
              href={`/tags/${tag}`} 
              key={tag}
              className="tag"
              style={{ fontSize: `${fontSize}rem` }}
            >
              {tag} <span className="tag-count">({count})</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default (() => {
  function TagCloudComponent(props: QuartzComponentProps) {
    return <TagCloud {...props} />
  }
  
  TagCloudComponent.css = `
    .tag-cloud {
      padding: 1rem;
      
      .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        
        .tag {
          display: inline-block;
          padding: 0.3rem 0.6rem;
          border-radius: 0.4rem;
          background-color: var(--lightgray);
          color: var(--darkgray);
          text-decoration: none;
          transition: background-color 0.2s ease;
          
          &:hover {
            background-color: var(--secondary);
            color: var(--light);
          }
          
          .tag-count {
            font-size: 0.8em;
            opacity: 0.8;
          }
        }
      }
    }
  `
  return TagCloudComponent
}) satisfies QuartzComponentConstructor
