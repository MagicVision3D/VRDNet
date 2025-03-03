import React, { useRef, useEffect, useMemo  } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

// 定义颜色变量
const MAIN_COLOR = new THREE.Color('#FFF5A5');
const SHADOW_COLOR = new THREE.Color('#95a5a6');

export const LoadingAnimation = () => {
    const loaderRef = useRef();
    const shadowRef = useRef();
    const startTime = useRef(Date.now());

    useFrame(() => {
        const elapsedTime = (Date.now() - startTime.current) / 1000;
        const cycleTime = 2.6;
        const floatCycleTime = 5;

        // 主动画
        let width = 50;
        let x = 0;
        let y = 0;
        let rotationY = 0;
        if (elapsedTime % cycleTime < 0.2 * cycleTime) {
            width = 50;
            x = 0;
            y = 0;
            rotationY = 0;
        } else if (elapsedTime % cycleTime < 0.4 * cycleTime) {
            width = 150;
            x = -50;
            y = 0;
            rotationY = 0;
        } else if (elapsedTime % cycleTime < 0.6 * cycleTime) {
            width = 150;
            rotationY = Math.PI / 2;
            x = -150;
            y = 0;
        } else if (elapsedTime % cycleTime < 0.8 * cycleTime) {
            width = 50;
            rotationY = Math.PI / 2;
            x = -25;
            y = 0;
        } else {
            width = 50;
            rotationY = Math.PI / 2;
            x = -50;
            y = 0;
        }
        if (loaderRef.current) {
            loaderRef.current.scale.setX(width / 50);
            loaderRef.current.position.set(x, y, 0);
            loaderRef.current.rotation.set(0, rotationY, 0);
        }

        // 次要动画
        if (loaderRef.current && loaderRef.current.children[0]) {
            let rotation = 0;
            if (elapsedTime % cycleTime < 0.2 * cycleTime) {
                rotation = Math.PI;
            } else if (elapsedTime % cycleTime < 0.4 * cycleTime) {
                rotation = Math.PI;
            } else if (elapsedTime % cycleTime < 0.6 * cycleTime) {
                rotation = 0;
            } else if (elapsedTime % cycleTime < 0.8 * cycleTime) {
                rotation = 0;
            } else {
                rotation = Math.PI;
            }
            loaderRef.current.children[0].rotation.set(0, rotation, 0);
        }

        // 阴影动画
        let shadowWidth = 100;
        let shadowX = 0;
        if (elapsedTime % cycleTime < 0.2 * cycleTime) {
            shadowWidth = 75;
            shadowX = 37.5;
        } else if (elapsedTime % cycleTime < 0.4 * cycleTime) {
            shadowWidth = 200;
            shadowX = -25;
        } else if (elapsedTime % cycleTime < 0.6 * cycleTime) {
            shadowWidth = 75;
            shadowX = 37.5;
        } else if (elapsedTime % cycleTime < 0.8 * cycleTime) {
            shadowWidth = 75;
            shadowX = 37.5;
        } else {
            shadowWidth = 150;
            shadowX = -25;
        }
        if (shadowRef.current) {
            shadowRef.current.scale.setX(shadowWidth / 100);
            shadowRef.current.position.setX(shadowX);
        }

        // 浮动动画
        const floatProgress = (elapsedTime % floatCycleTime) / floatCycleTime;
        const floatOffset = Math.sin(floatProgress * 2 * Math.PI) * 1;
        if (shadowRef.current) {
            shadowRef.current.position.setY(floatOffset);
        }
    });

    return (
        <group>
            {/* 阴影 */}
            <mesh ref={shadowRef} position={[0, 0, -1]}>
                <planeGeometry args={[100, 10]} />
                <meshBasicMaterial color={SHADOW_COLOR} transparent opacity={0.5} />
            </mesh>
            {/* 加载器 */}
            <group ref={loaderRef}>
                <mesh>
                    <planeGeometry args={[50, 50]} />
                    <meshBasicMaterial color={MAIN_COLOR} />
                </mesh>
                <mesh position={[-50, 0, 0]}>
                    <planeGeometry args={[50, 50]} />
                    <meshBasicMaterial color={MAIN_COLOR} />
                </mesh>
            </group>
        </group>
    );
};


export const LoadingAnimation2 = () => {
    const sh1Ref = useRef();
    const sh2Ref = useRef();
    const startTime = useRef(Date.now());

    // 创建三角形几何体
    const createTriangleGeometry1 = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array([
            -0.5, -0.5, 0,
            0.5, 0.5, 0,
            -0.5, 0.5, 0
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geometry;
    }, []);

    const createTriangleGeometry2 = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array([
            -0.5, -0.5, 0,
            0.5, 0.5, 0,
            0.5, -0.5, 0
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geometry;
    }, []);

    let red_where_rotate = 0;
    useFrame(() => {
        const elapsedTime = (Date.now() - startTime.current) / 1000;
        const cycleTime = 0.9;
        // sh1 动画
        if (sh1Ref.current) {
            let progress = (elapsedTime % cycleTime) / cycleTime;
            progress = progress * 1.6180114
            let rotation =  -1 * (-6 * Math.cos(progress) + 6)
            sh1Ref.current.rotation.z = rotation;
        }

        // sh2 动画
        if (sh2Ref.current) {
            let progress = (elapsedTime % cycleTime) / cycleTime;
            progress = progress * 1.6180114
            var rotation;
            if (red_where_rotate == 0){
                rotation =  -1 * (-6 * Math.cos(progress) + 6)
            }else{
                rotation =  1 * (-6 * Math.cos(progress) + 6)
            }
            console.log(progress)
            if (Math.abs(progress - 1.6180114) < 0.03){
                red_where_rotate = red_where_rotate + 1;
                red_where_rotate = red_where_rotate % 2;
            }
            
            sh2Ref.current.rotation.z = rotation;
        }
    });

    return (
        <group position={[0, 0, 0]}>
            {/* sh1 */}
            <mesh ref={sh1Ref} position={[0, 0, 0]}>
                <primitive object={createTriangleGeometry1} />
                <meshBasicMaterial color="#354952" side={THREE.DoubleSide} />
            </mesh>
            {/* sh2 */}
            <mesh ref={sh2Ref} position={[0, 0, 0]}>
                <primitive object={createTriangleGeometry2} />
                <meshBasicMaterial color="#df1a54" side={THREE.DoubleSide} />
            </mesh>
            {/* 文本 */}
            <Text
                position={[0, -1.5, 0]}
                color="black"
                fontSize={0.5}
                letterSpacing={0.2}
                font="https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1MmgVxIIzc.ttf"
            >
                loading...
            </Text>
        </group>
    );
};

export const LoadingAnimation3 = () => {
    const sh1Ref = useRef();
    const sh2Ref = useRef();
    const startTime = useRef(Date.now());

    // 创建三角形几何体
    const createTriangleGeometry1 = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array([
            -0.5, -0.5, 0,
            0.5, 0.5, 0,
            -0.5, 0.5, 0
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geometry;
    }, []);

    const createTriangleGeometry2 = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array([
            -0.5, -0.5, 0,
            0.5, 0.5, 0,
            0.5, -0.5, 0
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geometry;
    }, []);

    let red_where_rotate = 0;
    useFrame(() => {
        const elapsedTime = Date.now() - startTime.current;
        let progress = elapsedTime / 1000;
        if (progress > 1) {
            progress = 1;
            startTime.current = Date.now();
            red_where_rotate = red_where_rotate + 1;
            red_where_rotate = red_where_rotate % 2;
        }

        // 模拟 ease-in-out 曲线
        const easeInOut = (t) => {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };
        const easedProgress = easeInOut(progress);

        // 第一个三角形旋转
        if (sh1Ref.current) {
            sh1Ref.current.rotation.z = -easedProgress * 2 * Math.PI;
        }

        // 第二个三角形旋转
        var rotation;
        if (sh2Ref.current) {
            if (red_where_rotate == 0){
                rotation =  easedProgress * 2 * Math.PI;
            }else{
                rotation =  -easedProgress * 2 * Math.PI;
            }
            sh2Ref.current.rotation.z = rotation;
        }
    });

    

    return (
        <group position={[0, 0, 0]}>
            {/* sh1 */}
            <mesh ref={sh1Ref} position={[0, 0, 0]}>
                <primitive object={createTriangleGeometry1} />
                <meshBasicMaterial color="#354952" side={THREE.DoubleSide} />
            </mesh>
            {/* sh2 */}
            <mesh ref={sh2Ref} position={[0, 0, 0]}>
                <primitive object={createTriangleGeometry2} />
                <meshBasicMaterial color="#df1a54" side={THREE.DoubleSide} />
            </mesh>
            {/* 文本 */}
            <Text
                position={[0, -1.5, 0]}
                color="black"
                fontSize={0.5}
                letterSpacing={0.2}
                font="https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1MmgVxIIzc.ttf"
            >
                loading...
            </Text>
        </group>
    );
};