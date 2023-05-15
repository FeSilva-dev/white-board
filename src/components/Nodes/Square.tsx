import { Handle, NodeProps, NodeResizer, Position } from "reactflow";

export function Square(props: NodeProps){
  return (
    <div style={{ width: '100%', height: '100%', minWidth: '200px', minHeight: '200px', background: props.data.color, borderRadius: '8px' }}>
      <NodeResizer
        isVisible={props.selected}
        minHeight={200} minWidth={200}
        handleStyle={{ height: '10px', width: '10px', background: 'white', border: '1px solid blue', borderRadius: '6px' }}
        lineStyle={{ border: '.7px solid blue '}}
      />
        <Handle
          id="top"
          type="source"
          position={Position.Top}
          style={{ top: '-10px', width: '8px', height: '8px', background: 'blue', borderRadius: '8px' }}
        />
        <Handle 
          id="right" 
          type="source"
          position={Position.Right}
          style={{ right: '-10px', width: '8px', height: '8px', background: 'blue', borderRadius: '8px' }}
        />
        <Handle 
          id="bottom"
          type="source"
          position={Position.Bottom}
          style={{ bottom: '-10px', width: '8px', height: '8px', background: 'blue', borderRadius: '8px' }}
        />
        <Handle 
          id="left"
          type="source"
          position={Position.Left}
          style={{ left: '-10px', width: '8px', height: '8px', background: 'blue', borderRadius: '8px' }}
        />
    </div>
  )
}