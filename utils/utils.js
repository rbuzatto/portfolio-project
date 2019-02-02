export const renderParagraphs = (lines, className) => (
    lines.map((line, idx) => <p key={idx} className={className}>{line}</p> )
)