import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { Fragment } from "preact"

function CardView({ allFiles, fileData }: QuartzComponentProps) {
  // 현재 폴더 경로
  const folderSlug = fileData.slug
  
  // 현재 폴더에 속한 파일만 필터링
  const filesInFolder = allFiles.filter(file => {
    return file.slug && file.slug.startsWith(folderSlug) && file.slug !== folderSlug
  })
  
  return (
    <div>
      <h1>Folder: {fileData.frontmatter?.title || folderSlug.split("/").pop()}</h1>
      <p>{filesInFolder.length} items under this folder.</p>
      
      <div className="card-grid">
        {filesInFolder.map(file => {
          // 파일 경로 생성
          const href = resolveRelative(fileData.slug!, file.slug!)
          // 표지 이미지 경로 (있다면)
          const coverImage = file.frontmatter?.cover || file.frontmatter?.image
          
          return (
            <div className="card" key={file.slug}>
              <a href={href} className="card-link">
                <div className="card-cover">
                  {coverImage ? (
                    <img 
                      src={coverImage} 
                      alt={file.frontmatter?.title || "Cover"} 
                      className="cover-image"
                    />
                  ) : (
                    <div className="cover-placeholder">
                      {file.frontmatter?.title?.charAt(0) || "📄"}
                    </div>
                  )}
                </div>
                <div className="card-content">
                  <h3 className="card-title">{file.frontmatter?.title || file.slug?.split("/").pop()}</h3>
                  {file.frontmatter?.tags && (
                    <div className="card-tags">
                      {Array.isArray(file.frontmatter.tags) ? 
                        file.frontmatter.tags.map(tag => (
                          <span className="card-tag" key={tag}>{tag}</span>
                        )) : 
                        <span className="card-tag">{file.frontmatter.tags}</span>
                      }
                    </div>
                  )}
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default (() => {
  function CardViewComponent(props: QuartzComponentProps) {
    return <CardView {...props} />
  }
  
  CardViewComponent.css = `
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    
    .card {
      border-radius: 8px;
      overflow: hidden;
      background-color: var(--lightgray);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      height: 100%;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }
    
    .card-link {
      text-decoration: none;
      color: var(--darkgray);
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    
    .card-cover {
      height: 200px;
      background-color: var(--secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    
    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .cover-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 3rem;
      color: var(--light);
    }
    
    .card-content {
      padding: 1rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    
    .card-title {
      margin: 0;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: var(--dark);
      word-break: break-word;
    }
    
    .card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem;
      margin-top: auto;
    }
    
    .card-tag {
      padding: 0.2rem 0.5rem;
      background-color: var(--secondary);
      color: var(--light);
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 500;
    }
  `
  
  return CardViewComponent
}) satisfies QuartzComponentConstructor
