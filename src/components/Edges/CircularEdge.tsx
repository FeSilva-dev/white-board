import { BaseEdge, EdgeProps, getBezierPath } from 'reactflow';

export default function CircularEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return <BaseEdge
    path={edgePath}
    markerEnd={markerEnd}
    style={{ strokeWidth: '2px'}}
  />
}