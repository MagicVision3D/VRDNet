import React, {Component, Suspense, useEffect, useRef} from 'react'
import {PLYViewer, PLYViewerv2} from './viewer'
import {OrbitControls} from "@react-three/drei";
import {Html, useProgress} from '@react-three/drei'
import {Canvas,useLoader, useThree} from '@react-three/fiber'
import { Data } from './data';
import { LoadingAnimation, LoadingAnimation3 } from './anim';
import './anim.css';

function Loading1(){
    return <Html>Loading...</Html>
    /*
    return (
        <div class="loader_body">
            <div class="loader"></div>
        </div>
    )*/
}

export default class Interactive extends Component{
    
    constructor(props) {
        super(props);
        // 使用父组件传递的参数初始化 state
        this.state = {
            input_path: Data[props.dataset]['input'],
            point_size: Data[props.dataset]['psinput'],
            dataset: props.dataset
        };
    }
    


    onInputClick = () =>{
        this.setState({
            input_path: Data[this.state.dataset]['input'],
            point_size: Data[this.state.dataset]['psinput'],
        })
    }
    onGTClick = () =>{
        this.setState({
            input_path: Data[this.state.dataset]['gt'],
            point_size: Data[this.state.dataset]['psinput'],
        })
    }
    on240Click = () =>{
        this.setState({
            input_path: Data[this.state.dataset]['240'],
            point_size: Data[this.state.dataset]['ps240'],
        })
    }
    on120Click = () =>{
        this.setState({
            input_path: Data[this.state.dataset]['120'],
            point_size: Data[this.state.dataset]['ps120'],
        })
    }
    on60Click = () =>{
        this.setState({
            input_path: Data[this.state.dataset]['60'],
            point_size: Data[this.state.dataset]['ps60'],
        })
    }
    on30Click = () =>{
        this.setState({
            input_path: Data[this.state.dataset]['30'],
            point_size: Data[this.state.dataset]['ps30'],
        })
    }
    render(){
        const title = this.props.title
        return(
            <div>
                <div style={{marginTop: "10px", display: "flex"}}>
                    <div style={{fontSize: "25pt", textAlign: 'left', color: "rgb(141, 53, 37)", marginRight:"20px"}}>
                        {title}
                    </div >
                        
                    <div style={{ flexGrow: 1, display:"flex", justifyContent: "flex-end"}}>
                        <button style={{backgroundColor: "rgb(255, 191, 180)", fontSize:"15pt", color: "black"}} onClick={this.onInputClick}>
                        Input
                        </button>
                        <button style={{backgroundColor: "rgb(255, 191, 180)", fontSize:"15pt", color: "black"}} onClick={this.onGTClick}>
                        GT
                        </button>
                        <button style={{backgroundColor: "rgb(255, 191, 180)", fontSize:"15pt", color: "black"}} onClick={this.on240Click}>
                        R4
                        </button>
                        <button style={{backgroundColor: "rgb(255, 191, 180)", fontSize:"15pt", color: "black"}} onClick={this.on120Click}>
                        R3
                        </button>
                        <button style={{backgroundColor: "rgb(255, 191, 180)", fontSize:"15pt", color: "black"}} onClick={this.on60Click}>
                        R2
                        </button>
                        <button style={{backgroundColor: "rgb(255, 191, 180)", fontSize:"15pt", color: "black"}} onClick={this.on30Click}>
                        R1
                        </button>
                    </div>
                </div>
                
                    <div style={{width: "100%", height: "600px", background: "rgb(226, 226, 226)", marginTop:"5px", borderRadius:"18px"}}>
                        <Canvas style={{borderRadius:"18px"}}>
                        <Suspense fallback={<LoadingAnimation3/>}>
                            <PLYViewerv2 url={this.state.input_path} pointsize={this.state.point_size}></PLYViewerv2>
                        </Suspense>
                        <OrbitControls enableRotate={true} enableDamping={true} up={[0,0,1]}></OrbitControls>
                        </Canvas> 
                    </div>
                
                    
            </div>
        )
    }
}
//