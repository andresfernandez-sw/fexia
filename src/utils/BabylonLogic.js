import * as BABYLON from '@babylonjs/core';

// Shared configuration
const ACCENT_COLOR = new BABYLON.Color3(0.39, 1, 0.85); // #64FFDA
const BG_TRANSPARENT = new BABYLON.Color4(0, 0, 0, 0);

const addGlow = (scene) => {
    const gl = new BABYLON.GlowLayer("glow", scene);
    gl.intensity = 0.5;
};

const addParticles = (scene) => {
    const particleSystem = new BABYLON.ParticleSystem("particles", 200, scene);
    particleSystem.particleTexture = new BABYLON.Texture("https://www.babylonjs.com/assets/gradient.png", scene);
    particleSystem.emitter = new BABYLON.Vector3(0, 0, 0);
    particleSystem.minEmitBox = new BABYLON.Vector3(-10, -10, -10);
    particleSystem.maxEmitBox = new BABYLON.Vector3(10, 10, 10);
    particleSystem.color1 = new BABYLON.Color4(0.39, 1, 0.85, 0.5);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 0.5, 0.2);
    particleSystem.minSize = 0.01;
    particleSystem.maxSize = 0.05;
    particleSystem.minLifeTime = 20;
    particleSystem.maxLifeTime = 30;
    particleSystem.emitRate = 20;
    particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);
    particleSystem.direction1 = new BABYLON.Vector3(-1, 1, -1);
    particleSystem.direction2 = new BABYLON.Vector3(1, -1, 1);
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;
    particleSystem.start();
};

const setupBaseScene = (engine, canvas, radius = 6) => {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = BG_TRANSPARENT;

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, radius, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true, false);
    camera.inputs.attached.pointers.detachControl();
    camera.wheelPrecision = 100;
    camera.lowerRadiusLimit = radius * 0.5;
    camera.upperRadiusLimit = radius * 2;

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.8;

    const pointLight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(2, 2, 2), scene);
    pointLight.intensity = 2;
    pointLight.diffuse = ACCENT_COLOR;
    pointLight.specular = ACCENT_COLOR;

    scene.onBeforeRenderObservable.add(() => {
        camera.alpha += 0.001;
    });

    return { scene, camera };
};

export const initHero = (engine, canvas) => {
    const { scene } = setupBaseScene(engine, canvas, 7);
    addGlow(scene);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Reduce particles on mobile
    if (!isMobile) {
        addParticles(scene);
    }

    const nodeCount = isMobile ? 30 : 60;
    const spreadRange = isMobile ? 6 : 8;
    const connectionDist = isMobile ? 2.8 : 2.5;

    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
        const node = BABYLON.MeshBuilder.CreateSphere("n" + i, { diameter: 0.12 }, scene);
        node.position = new BABYLON.Vector3(
            (Math.random() - 0.5) * spreadRange,
            (Math.random() - 0.5) * spreadRange,
            (Math.random() - 0.5) * spreadRange
        );
        nodes.push(node);
    }

    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (BABYLON.Vector3.Distance(nodes[i].position, nodes[j].position) < connectionDist) {
                const line = BABYLON.MeshBuilder.CreateLines("l" + i + j, { points: [nodes[i].position, nodes[j].position] }, scene);
                line.color = new BABYLON.Color3(0.3, 0.6, 0.6);
                line.alpha = 0.4;
            }
        }
    }

    scene.onBeforeRenderObservable.add(() => {
        nodes.forEach((n, idx) => {
            n.position.y += Math.sin(Date.now() * 0.001 + idx) * 0.005;
            n.position.x += Math.cos(Date.now() * 0.001 + idx) * 0.002;
        });
    });

    return scene;
};

export const initTraditional = (engine, canvas) => {
    const { scene } = setupBaseScene(engine, canvas, 4);

    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 1.5 }, scene);
    const mat = new BABYLON.StandardMaterial("boxMat", scene);
    mat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    mat.alpha = 0.2; mat.wireframe = true;
    box.material = mat;

    scene.onBeforeRenderObservable.add(() => {
        box.rotation.y += 0.005;
    });
    return scene;
};

export const initFexia = (engine, canvas) => {
    const { scene } = setupBaseScene(engine, canvas, 4);
    addGlow(scene);

    const sphere = BABYLON.MeshBuilder.CreateSphere("fexia", { diameter: 2, segments: 32 }, scene);
    const mat = new BABYLON.StandardMaterial("fMat", scene);
    mat.emissiveColor = ACCENT_COLOR;
    mat.wireframe = true;
    sphere.material = mat;

    scene.onBeforeRenderObservable.add(() => {
        const s = 1.1 + Math.sin(Date.now() * 0.002) * 0.2;
        sphere.scaling.setAll(s);
        sphere.rotation.y += 0.02;
        sphere.rotation.z += 0.01;
    });
    return scene;
};

export const initPilar = (engine, canvas, type) => {
    const { scene } = setupBaseScene(engine, canvas, 5);
    addGlow(scene);

    if (type === 'agents') {
        const center = BABYLON.MeshBuilder.CreateSphere("c", { diameter: 0.7 }, scene);
        const cMat = new BABYLON.StandardMaterial("cm", scene);
        cMat.emissiveColor = ACCENT_COLOR;
        center.material = cMat;
        for (let i = 0; i < 8; i++) {
            const a = BABYLON.MeshBuilder.CreateSphere("a" + i, { diameter: 0.25 }, scene);
            a.material = cMat;
            scene.onBeforeRenderObservable.add(() => {
                const t = Date.now() * 0.0015 + (i * Math.PI / 4);
                a.position.set(Math.cos(t) * 2, Math.cos(t * 0.5) * 0.8, Math.sin(t) * 2);
            });
        }
    } else if (type === 'shield') {
        const shield = BABYLON.MeshBuilder.CreateTorus("s", { diameter: 2.5, thickness: 0.08 }, scene);
        const sMat = new BABYLON.StandardMaterial("sm", scene);
        sMat.emissiveColor = ACCENT_COLOR;
        shield.material = sMat;
        shield.rotation.x = Math.PI / 2;
        const core = BABYLON.MeshBuilder.CreatePolyhedron("p", { type: 1, size: 0.6 }, scene);
        core.material = sMat;
        scene.onBeforeRenderObservable.add(() => {
            shield.rotation.z += 0.03;
            core.rotation.y -= 0.02;
            shield.scaling.setAll(1 + Math.sin(Date.now() * 0.002) * 0.1);
        });
    } else if (type === 'data') {
        const dMat = new BABYLON.StandardMaterial("dm", scene);
        dMat.emissiveColor = ACCENT_COLOR;
        for (let i = 0; i < 5; i++) {
            const r = BABYLON.MeshBuilder.CreateTorus("r" + i, { diameter: 1.2 + i * 0.5, thickness: 0.04 }, scene);
            r.material = dMat; r.rotation.x = Math.PI / 2; r.material.alpha = 1 - i * 0.18;
            scene.onBeforeRenderObservable.add(() => {
                r.rotation.z += 0.015 * (i + 1);
                r.position.y = Math.sin(Date.now() * 0.001 + i) * 0.4;
            });
        }
    }
    return scene;
};

export const initProceso = (engine, canvas) => {
    const { scene } = setupBaseScene(engine, canvas, 10);
    addGlow(scene);
    const pMat = new BABYLON.StandardMaterial("pm", scene);
    pMat.emissiveColor = ACCENT_COLOR;
    const points = [];
    for (let i = 0; i < 150; i++) {
        const p = BABYLON.MeshBuilder.CreateBox("p" + i, { size: 0.06 }, scene);
        p.position.set((Math.random() - 0.5) * 8, Math.random() * 12 - 6, (Math.random() - 0.5) * 8);
        p.material = pMat; p.material.alpha = 0.4;
        points.push(p);
    }
    scene.onBeforeRenderObservable.add(() => {
        points.forEach(p => { p.position.y -= 0.05; if (p.position.y < -6) p.position.y = 6; });
    });
    return scene;
};

export const initSeguridad = (engine, canvas) => {
    const { scene } = setupBaseScene(engine, canvas, 5);
    addGlow(scene);
    const sMat = new BABYLON.StandardMaterial("sm", scene);
    sMat.emissiveColor = ACCENT_COLOR; sMat.wireframe = true;
    const core = BABYLON.MeshBuilder.CreateIcoSphere("c", { radius: 1, subdivisions: 2 }, scene);
    core.material = sMat;
    const ring = BABYLON.MeshBuilder.CreateTorus("r", { diameter: 3.5, thickness: 0.03 }, scene);
    ring.material = sMat;
    scene.onBeforeRenderObservable.add(() => {
        core.rotation.y += 0.02;
        core.rotation.x += 0.01;
        ring.rotation.x += 0.015;
        ring.rotation.z += 0.01;
    });
    return scene;
};
