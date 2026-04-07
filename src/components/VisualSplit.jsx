import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import BabylonScene from './BabylonScene';

const VisualSplit = ({ babylonInit, babylonInitRight, splineScene, height = "100%", isFullPage = false, children }) => {
    return (
        <div className={isFullPage ? "hero-visual-container" : "section-visual"} style={{ height }}>
            <div className="visual-left visual-pane">
                {babylonInit && (
                    <BabylonScene
                        className="hero-babylon"
                        onSceneReady={babylonInit}
                    />
                )}
                {children}
            </div>
            {!isFullPage && <div className="pane-separator"></div>}
            <div className="visual-right visual-pane">
                {babylonInitRight && (
                    <div className="right-visual-wrapper">
                        <BabylonScene
                            className="hero-babylon-right"
                            onSceneReady={babylonInitRight}
                        />
                    </div>
                )}
                {splineScene && !babylonInitRight && (

                    <div className="hero-spline">
                        <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
                            <Spline scene={splineScene} />
                        </Suspense>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VisualSplit;

