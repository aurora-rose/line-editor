import {Layer, Line, Stage} from "react-konva";
import {useEffect, useRef} from "react";
import Konva from "konva";
import {LineEditor} from "./line-editor.ts";


function App() {
    const line = useRef<Konva.Line>(null)
    const layer = useRef<Konva.Layer>(null)

    const editor = new LineEditor();

    useEffect(() => {
        if (line.current && layer.current) {
            editor.attach(line.current);
            layer.current.add(editor);
        }
    }, [])

    return <Stage width={window.innerWidth} height={window.innerWidth} style={{backgroundColor: 'white'}}>
        <Layer ref={layer}>
            <Line ref={line} points={[30, 75, 100, 250, 280, 325, 300, 150]} strokeWidth={4} stroke={'black'}></Line>
        </Layer>
    </Stage>
}

export default App
