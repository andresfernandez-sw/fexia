import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import BabylonScene from './BabylonScene';

const VisualSplit = ({ babylonInit, splineScene, height = "100%", isFullPage = false }) => {
    return (
        <div className={isFullPage ? "hero-visual-container" : "section-visual"} style={{ height }}>
            <div className="visual-left visual-pane">
                {babylonInit && (
                    <BabylonScene
                        className="hero-babylon"
                        onSceneReady={babylonInit}
                    />
                )}
            </div>
            {!isFullPage && <div className="pane-separator"></div>}
            <div className="visual-right visual-pane">
                {splineScene && (
                    <div className="hero-spline">
                        <Suspense fallback={<div className="loading-placeholder">Loading Spline...</div>}>
                            <Spline scene={splineScene} />
                        </Suspense>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VisualSplit;
