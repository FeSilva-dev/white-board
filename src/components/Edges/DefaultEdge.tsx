import { BaseEdge, EdgeProps, getSmoothStepPath } from 'reactflow';

export default function DefaultEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ strokeWidth: '2px'}} />
  );
}