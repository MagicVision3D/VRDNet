import {Canvas,useLoader, useThree} from '@react-three/fiber'
import {FC, useEffect, useState, useRef, Component} from 'react'
import {PLYLoader} from 'three/examples/jsm/loaders/PLYLoader'
import {BufferGeometry, Matrix4, Vector3} from 'three'
import {OrbitControls} from "@react-three/drei";
import "./anim.css"


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


export default class PLYViewerv4 extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            url: props.url,
            point_size: props.pointsize,
            isLoading: true,
            geom: null,
            loaded: 0
        };
    }

    loadGeometry(url, point_size){
        this.setState({isLoading: true, loaded: 0})
        const loader = new PLYLoader();
        loader.load(url, (geometry) => {
            this.setState({
                isLoading: false,
                geom: geometry,
                point_size: point_size
            })
        }, (progress) => {
            this.setState({
                loaded: progress.loaded / progress.total * 100
            })
        })
    }
    componentWillMount(){
        this.loadGeometry(this.props.url, this.props.point_size)
    }
    componentDidUpdate(prevProps){
        if (prevProps.url !== this.props.url){
            this.loadGeometry(this.props.url, this.props.point_size)
        }
    }
    render(){
        if (this.state.isLoading){
            return (
                <div className="cssloader">
                    <div className="sh1"></div>
                    <div className="sh2"></div>
                    <h4 className="lt">loading {this.state.loaded.toFixed(2)}%</h4>
                </div>
            )
                
        }else{
            let geom = to_origin(this.state.geom);
            return (
                <Canvas style={{borderRadius: "18px"}}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <points>
                        <primitive object={geom} attach="geometry"/>
                        <pointsMaterial vertexColors={true} size={this.state.point_size}/>
                    </points>
                    <OrbitControls enableRotate={true} enableDamping={true} up={[0,0,1]}></OrbitControls>
                </Canvas>
            );
        }
    }

}

export const PLYViewerv3 = ({url, pointsize}) => {
    const [isLoading, setIsLoading] = useState(true);
    let geom = useLoader(PLYLoader, url)

    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(()=>{
        if(isMounted.current, geom){
            setIsLoading(false)
        }
    }, [geom])
    /*
    let geom = useLoader(PLYLoader, url, (loader) => {
        console.log("here1")
    }, (progress) => {
        console.log("here2", progress, progress.loaded == progress.total, isLoading)
        if (progress.loaded === progress.total){
            setIsLoading(false)
        }
    }, () => {
    });*/

    if (isLoading){
        return (
            <div className="cssloader">
                <div className="sh1"></div>
                <div className="sh2"></div>
                <h4 className="lt">loading</h4>
            </div>
        )
            
    }else{
        geom = to_origin(geom);
        return (
            <Canvas style={{borderRadius: "18px"}}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <points>
                    <primitive object={geom} attach="geometry"/>
                    <pointsMaterial vertexColors={true} size={pointsize}/>
                </points>
                <OrbitControls enableRotate={true} enableDamping={true} up={[0,0,1]}></OrbitControls>
            </Canvas>
        );
    }
    
    
};
  //export default PLYViewer;