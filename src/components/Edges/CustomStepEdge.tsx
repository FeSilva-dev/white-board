import { BaseEdge, EdgeProps, getSmoothStepPath } from 'reactflow';

export default function CustomStepEdge({
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
    borderRadius: 0,
  });

  return (
    <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ strokeWidth: '2px'}} />
  );
}