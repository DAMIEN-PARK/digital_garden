import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug } from "../util/path"

function DataViewGallery({ allFiles, fileData }: QuartzComponentProps) {
  // 현재 폴더 경로
  const folderSlug = fileData.slug as FullSlug
  
  if (!folderSlug) {
    return <div>폴더 경로를 찾을 수 없습니다.</div>
  }
  
  // 현재 폴더에 속한 파일만 필터링
  const filesInFolder = allFiles.filter(file => {
    return file.slug && 
           typeof file.slug === 'string' && 
           file.slug.startsWith(folderSlug) && 
           file.slug !== folderSlug
  })
  
  return (
    <div className="dataview-container">
      <div className="dataview-result-list">
        {filesInFolder.map(file => {
          // 표지 이미지 경로 (있다면)
          const coverImage = file.frontmatter?.cover || file.frontmatter?.image
          const title = file.frontmatter?.title || file.slug?.split("/").pop() || ""
          const tags = Array.isArray(file.frontmatter?.tags) ? file.frontmatter?.tags : []
          
          return (
            <div className="dataview-result" key={file.slug}>
              <div className="dataview-result-content">
                {/* 이미지 부분 */}
                {coverImage && typeof coverImage === 'string' && (
                  <div className="dataview-result-image">
                    <img src={coverImage} alt={title} />
                  </div>
                )}
                
                {/* 제목과 메타데이터 */}
                <div className="dataview-result-info">
                  <h3 className="dataview-result-title">
                    <a href={file.slug}>{title}</a>
                  </h3>
                  
                  {/* 메타데이터 표시 */}
                  <div className="dataview-result-metadata">
                    {file.frontmatter?.date && (
                      <div className="dataview-result-date">
                        <span className="metadata-label">날짜:</span> {file.frontmatter.date}
                      </div>
                    )}
                    
                    {tags.length > 0 && (
                      <div className="dataview-result-tags">
                        <span className="metadata-label">태그:</span>
                        {tags.map(tag => (
                          <span className="dataview-tag" key={tag}>#{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default (() => {
  function DataViewGalleryComponent(props: QuartzComponentProps) {
    return <DataViewGallery {...props} />
  }
  
  DataViewGalleryComponent.css = `
    .dataview-container {
      margin: 1rem 0;
    }
    
    .dataview-result-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.2rem;
      margin-top: 1rem;
    }
    
    .dataview-result {
      background-color: var(--lightgray);
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
      overflow: hidden;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    
    .dataview-result:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
    }
    
    .dataview-result-content {
      display: flex;
      flex-direction: column;
    }
    
    .dataview-result-image {
      height: 180px;
      overflow: hidden;
    }
    
    .dataview-result-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .dataview-result-info {
      padding: 1rem;
    }
    
    .dataview-result-title {
      margin: 0 0 0.8rem 0;
      font-size: 1.2rem;
    }
    
    .dataview-result-title a {
      color: var(--dark);
      text-decoration: none;
    }
    
    .dataview-result-title a:hover {
      text-decoration: underline;
    }
    
    .dataview-result-metadata {
      font-size: 0.9rem;
      color: var(--darkgray);
    }
    
    .dataview-result-date, .dataview-result-tags {
      margin-bottom: 0.4rem;
    }
    
    .metadata-label {
      font-weight: 600;
      margin-right: 0.3rem;
    }
    
    .dataview-tag {
      display: inline-block;
      margin-right: 0.5rem;
      color: var(--secondary);
      font-weight: 500;
    }
  `
  
  return DataViewGalleryComponent
}) satisfies QuartzComponentConstructor
