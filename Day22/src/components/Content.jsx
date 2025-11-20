import './Content.css';
import { useState } from 'react'; 

function Content({ color, strokeWidth, paths, setPaths }) {  
  const [currentPath, setCurrentPath] = useState(null);

  const getPoint = (e) => {
    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  };

  const startDraw = (e) => {
    const { x, y } = getPoint(e);
    setCurrentPath({ type: 'dot', x, y, color, strokeWidth });// dot là chấm
  };

  const draw = (e) => {
    if (!currentPath) return;

    const { x, y } = getPoint(e);
    if (currentPath.type === 'dot') {
      // Chuyển từ chấm thành đường
      setCurrentPath({
        type: 'line',
        d: `M${currentPath.x},${currentPath.y} L${x},${y}`,
        color: currentPath.color,
        strokeWidth: currentPath.strokeWidth, // Dùng độ dày đã lưu
      });
    } else {
      // Nối dài đường
      setCurrentPath(prev => ({
        ...prev,
        d: `${prev.d} L${x},${y}`,
      }));
    }
  };

  const endDraw = () => {
    if (currentPath) {
      setPaths(prev => [...prev, { ...currentPath }]);
      setCurrentPath(null);
    }
  };

  return (
    <div className="content">
      <svg
        width="800"
        height="700"
        style={{ background: '#fafafa' }}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={endDraw}
        onMouseLeave={endDraw}
      >
        {/* Vẽ các đường cũ (từ "paths" prop) */}
        {paths.map((item, i) => (
          <g key={i}>
            {item.type === 'line' ? (
              <path
                d={item.d}
                stroke={item.color}
                strokeWidth={item.strokeWidth} // Dùng độ dày đã lưu
                fill="none"
                strokeLinecap="round"
              />
            ) : (
              <circle cx={item.x} cy={item.y} r={item.strokeWidth / 2} fill={item.color} />
            )}
          </g>
        ))}

        {/* Đường hoặc chấm đang vẽ */}
        {currentPath && currentPath.type === 'line' && (
          <path
            d={currentPath.d}
            stroke={currentPath.color}
            strokeWidth={currentPath.strokeWidth} // Dùng độ dày đang vẽ
            fill="none"
            strokeLinecap="round"
          />
        )}
        {currentPath && currentPath.type === 'dot' && (
          <circle cx={currentPath.x} cy={currentPath.y} r={currentPath.strokeWidth / 2} fill={currentPath.color} />
        )}
      </svg>
    </div>
  );
}

export default Content;