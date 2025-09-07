// Core hooks for React Three Wrapper
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

/**
 * useThreeObject - Imperatively add a raw Three.js object to the R3F scene
 * @param createObject - function that returns a THREE.Object3D
 * @param deps - dependency array for recreation
 * @returns ref to the created object
 */
export function useThreeObject<T extends THREE.Object3D>(createObject: () => T, deps: any[] = []): React.RefObject<T> {
  const ref = useRef<T>(null!);
  const { scene } = useThree();

  useEffect(() => {
    const obj = createObject();
    ref.current = obj;
    scene.add(obj);
    return () => {
      scene.remove(obj);
      if (typeof (obj as any).dispose === 'function') {
        (obj as any).dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

/**
 * useAnimate - Wrapper around useFrame for animation
 * @param callback - function to run on each frame
 */
export function useAnimate(callback: (state: Parameters<Parameters<typeof useFrame>[0]>[0], delta: number) => void) {
  useFrame((state, delta) => {
    callback(state, delta);
  });
}

/**
 * addToScene - Imperatively add/remove objects to the scene
 */
export function addToScene(obj: THREE.Object3D, add: boolean = true) {
  const { scene } = useThree();
  if (add) scene.add(obj);
  else scene.remove(obj);
}
