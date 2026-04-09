import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';

const BabylonScene = ({ onSceneReady, canvasId, className }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        // Detect mobile / low-power devices and cap pixel ratio
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const dpr = isMobile ? Math.min(window.devicePixelRatio, 1.5) : window.devicePixelRatio;

        const engine = new BABYLON.Engine(canvas, true, {
            preserveDrawingBuffer: true,
            stencil: true,
            adaptToDeviceRatio: false,   // we handle DPR manually
            powerPreference: 'high-performance',
        });

        // Apply capped hardware scaling
        engine.setHardwareScalingLevel(1 / dpr);

        // Build the scene
        const scene = onSceneReady(engine, canvas);

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });

        // ── Robust resize: observe container, not just window ──
        const doResize = () => {
            const rect = container.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                engine.resize();
            }
        };

        // Deferred initial resize to let CSS layout settle
        const initialTimer = setTimeout(doResize, 100);
        // Secondary safety resize for slow mobile layout
        const secondTimer = setTimeout(doResize, 500);

        // ResizeObserver for container-level changes (critical for mobile column reflow)
        let resizeObserver;
        if (typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(() => doResize());
            resizeObserver.observe(container);
        }

        // Also listen to window resize as a safety net
        window.addEventListener('resize', doResize);

        return () => {
            clearTimeout(initialTimer);
            clearTimeout(secondTimer);
            if (resizeObserver) resizeObserver.disconnect();
            window.removeEventListener('resize', doResize);
            engine.dispose();
        };
    }, [onSceneReady]);

    return (
        <div
            ref={containerRef}
            style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}
        >
            <canvas
                ref={canvasRef}
                id={canvasId}
                className={className}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    outline: 'none',
                    touchAction: 'none',
                }}
            />
        </div>
    );
};

export default BabylonScene;
