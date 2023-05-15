import { Background, Controls, ReactFlow, Node, ConnectionMode, useEdgesState, useNodesState, Connection, addEdge, StepEdge, MiniMap, ControlButton } from "reactflow";
import { Square } from "../Nodes/Square";
import { useCallback, useState } from "react";
import * as Toolbar from '@radix-ui/react-toolbar';
import DefaultEdge from "../Edges/DefaultEdge";
import CircularEdge from "../Edges/CircularEdge";
import CustomStepEdge from "../Edges/CustomStepEdge";

const NODE_TYPES = {
  square: Square
};

const EDGE_TYPES = {
  default: DefaultEdge,
  simplebezier: CircularEdge,
  step: CustomStepEdge,
};

const INITIAL_NODES = [] satisfies Node[];

export function Flow(){
  const [selectedEdgeType, setSelectedEdgeType] = useState<string>('default');
  const [defaultNodeColor, setDefaultNodeColor] = useState<string>('blue');
  const [edgeAnimated, setEdgeAnimated] = useState<boolean>(false);
  const [edges, setEdges, onEdgesChange ] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange ] = useNodesState(INITIAL_NODES);
  const [canShowMinimap, setCanShowMinimap] = useState<boolean>(false);

  const onConnect = useCallback((connection: Connection) => {
    setEdges(edges => addEdge(
      {
        ...connection,
        type: selectedEdgeType,
        animated: edgeAnimated,
      },
      edges
    ))
  }, [setEdges, selectedEdgeType, edgeAnimated])

  function addSquareNode(){
    setNodes(nodes => ([
      ...nodes,
      {
        id: crypto.randomUUID(),
        position: { x: 800, y: 400 },
        type: 'square',
        data: { color: defaultNodeColor },
      },
    ]))
  }

  function getNodeColor(node: Node){
    return node.data.color
  }

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        connectionMode={ConnectionMode.Loose}
        onConnect={onConnect}
        edgeTypes={EDGE_TYPES}
        defaultEdgeOptions={{
          type: selectedEdgeType,
          animated: edgeAnimated,
        }}
      >
        <Background gap={25} size={2} />
        <Controls>
          <ControlButton onClick={() => setCanShowMinimap(!canShowMinimap)}>
            Map
          </ControlButton>
        </Controls>
        {canShowMinimap && (
          <MiniMap zoomable pannable nodeColor={getNodeColor} />
        )}

      </ReactFlow>

      <Toolbar.Root style={{ position: 'fixed', width: '400px', height: '80px', bottom: '-10px', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', boxShadow: '0px 5px 30px -5px rgba(0,0,0,0.35)', borderRadius: '12px', overflow: 'hidden', padding: '0 20px'}}>
        <Toolbar.Button
          style={{ width: '100px', height: '90px', background: 'blue', border: 'none', cursor: 'pointer', marginTop: '20px', borderRadius: '12px' }}
          onClick={addSquareNode}
        />
      </Toolbar.Root>
    </div>
  )
}