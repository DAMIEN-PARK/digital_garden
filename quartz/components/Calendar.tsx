import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

// 더 명확한 타입 정의 추가
interface CalendarProps extends QuartzComponentProps {
  // 추가 속성이 필요하면 여기에 정의
}

function Calendar(props: CalendarProps) {
  const { allFiles } = props
  // 날짜별로 파일 그룹화
  const dateMap = new Map<string, string[]>()
  
  // 현재 연도와 월 가져오기
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  
  // 현재 월의 첫 날과 마지막 날
  const firstDay = new Date(currentYear, currentMonth, 1)
  const lastDay = new Date(currentYear, currentMonth + 1, 0)
  
  // 해당 월의 일수
  const daysInMonth = lastDay.getDate()
  
  // 첫 날의 요일 (0: 일요일, 1: 월요일, ...)
  const firstDayOfWeek = firstDay.getDay()
  
  // 스토리 폴더의 파일들만 필터링하고 날짜별로 그룹화
  allFiles.forEach(file => {
    if (file.slug && file.slug.startsWith('STORY/')) {
      const date = file.frontmatter?.date
      if (date && (typeof date === 'string' || typeof date === 'number')) {
        const formattedDate = new Date(date)
        if (!isNaN(formattedDate.getTime())) {
          const dateKey = formattedDate.toISOString().split('T')[0]
          if (!dateMap.has(dateKey)) {
            dateMap.set(dateKey, [])
          }
          dateMap.get(dateKey)!.push(file.slug)
        }
      }
    }
  })
  
  // 요일 이름
  const weekdays = ['일', '월', '화', '수', '목', '금', '토']
  
  return (
    <div className="calendar">
      <h3>{currentYear}년 {currentMonth + 1}월</h3>
      <table>
        <thead>
          <tr>
            {weekdays.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil((daysInMonth + firstDayOfWeek) / 7) }).map((_, weekIndex) => (
            <tr key={weekIndex}>
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const dayNumber = weekIndex * 7 + dayIndex + 1 - firstDayOfWeek
                const isValidDay = dayNumber > 0 && dayNumber <= daysInMonth
                
                // 현재 날짜
                const currentDate = isValidDay 
                  ? new Date(currentYear, currentMonth, dayNumber) 
                  : null
                
                const dateKey = currentDate 
                  ? currentDate.toISOString().split('T')[0] 
                  : ''
                  
                const hasContent = dateMap.has(dateKey)
                
                return (
                  <td key={dayIndex} className={
                    `calendar-day ${!isValidDay ? 'empty' : ''} ${hasContent ? 'has-content' : ''}`
                  }>
                    {isValidDay && (
                      <>
                        <span className="day-number">{dayNumber}</span>
                        {hasContent && (
                          <div className="content-indicator"></div>
                        )}
                      </>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default (() => {
  function CalendarComponent(props: QuartzComponentProps) {
    return <Calendar {...props} />
  }
  
  CalendarComponent.css = `
    .calendar {
      margin: 1rem 0;
      
      h3 {
        text-align: center;
        margin-bottom: 0.5rem;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
      }
      
      th {
        text-align: center;
        padding: 0.5rem;
        font-weight: bold;
        border-bottom: 1px solid var(--lightgray);
      }
      
      td {
        text-align: center;
        padding: 0.5rem;
        position: relative;
        height: 2rem;
        
        &.empty {
          background: var(--lightgray);
          opacity: 0.3;
        }
        
        &.has-content {
          background-color: var(--highlight);
          font-weight: bold;
        }
        
        .day-number {
          position: relative;
          z-index: 1;
        }
        
        .content-indicator {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--secondary);
        }
      }
    }
  `
  
  return CalendarComponent
}) satisfies QuartzComponentConstructor
