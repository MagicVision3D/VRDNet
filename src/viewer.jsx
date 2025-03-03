import {Canvas,useLoader, useThree} from '@react-three/fiber'
import {FC, useEffect, useState, useRef} from 'react'
import {PLYLoader} from 'three/examples/jsm/loaders/PLYLoader'
import {BufferGeometry, Matrix4, Vector3} from 'three'
import * as THREE from "three";

function to_origin (mesh){
	var mat = new Matrix4;
	var center_x, center_y, center_z;
	try{
		center_x = mesh.boundingSphere.center.x;
		center_y = mesh.boundingSphere.center.y;
		center_z = mesh.boundingSphere.center.z;
	}catch(e){
        console.log("mesh", mesh)
		mesh.computeBoundingSphere();
		center_x = mesh.boundingSphere.center.x;
		center_y = mesh.boundingSphere.center.y;
		center_z = mesh.boundingSphere.center.z;
	}
	
	mat.set(1,0,0,-center_x,
	        0,1,0,-center_y,
	        0,0,1,-center_z,
	        0,0,0,1);
    //console.log(mesh)
	mesh.translate(-center_x, -center_y, -center_z);
	return mesh
}

function normalize(mesh, radius){
    var mat = new Matrix4;
    mat.set(1 / radius,0,0,0,
        0,1 / radius,0,0,
        0,0,1 /radius,0,
        0,0,0,1);
    mesh.applyMatrix4(mat)
    return mesh

}


export const PLYViewer = ({url}) => {
    console.log(url)
    let geom = useLoader(PLYLoader, url);
    geom = to_origin(geom)
    return (
        <>
            <points>
                <primitive object={geom} attach="geometry"/>
                <pointsMaterial vertexColors={true} size={0.05}/>
            </points>

        </>
    );
};


export const PLYViewerv2 = ({url, pointsize}) => {
    let geom = useLoader(PLYLoader, url);

    geom = to_origin(geom)
    console.log(geom)
    return (
      <>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <points>
            <primitive object={geom} attach="geometry"/>
            <pointsMaterial vertexColors={true} size={pointsize}/>
        </points>
 
      </>
    );
  };
  
  //export default PLYViewer;