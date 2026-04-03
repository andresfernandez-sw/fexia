import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';

const BabylonScene = ({ onSceneReady, canvasId, className }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const { current: canvas } = canvasRef;
        if (!canvas) return;

        const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

        // Use the provided onSceneReady to build the scene
        const scene = onSceneReady(engine, canvas);

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });

        const handleResize = () => {
            engine.resize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            engine.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, [onSceneReady]);

    return <canvas ref={canvasRef} id={canvasId} className={className} style={{ width: '100%', height: '100%', outline: 'none' }} />;
};

export default BabylonScene;
