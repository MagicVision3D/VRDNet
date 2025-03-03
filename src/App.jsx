import React, {Suspense} from 'react';
import './App.css';
import Interactive from './interactive';
import { Canvas } from '@react-three/fiber';
import { LoadingAnimation2, LoadingAnimation3 } from './anim';





function App() {
  document.title = "VDRNet"
  return (
    <div>
      <div style={{position: 'relative'}}>
        <div style={{
                  height: '400px',
                  width: '100%',
                  backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.jpeg'})`,
                  backgroundSize: '100% auto',
                  backgroundPosition: 'center',
                  filter: 'blur(2px)',
                  opacity: 0.9
              }}>

        </div>
        <h1
        style={{position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: "40pt",
          zIndex: 1,
          color: 'rgb(247, 241, 242)'}}
        
        >VRDNet: A Semantic-Preserved Transformation Network for Point Cloud of Large-Scale Scene
        </h1>
      </div>

      <div style={{width: "75%", margin: "auto"}}>
        <div style={{fontSize: "30pt", fontWeight: 'bold', textAlign: 'left', color: "rgb(141, 53, 37)", marginTop: "20px"}}>
          Abstract
        </div>
        <div style={{display: "flex"}}>
          <div style={{width: "50%"}}>
            <img src={process.env.PUBLIC_URL + '/abstract.png'}
              style={{
                width: '95%',  // 宽度设置为父元素宽度的 50%
                height: 'auto' // 高度根据宽度等比例缩放
            }}></img>
          </div>
          <div style={{width: "50%", fontSize: "13pt", textAlign: 'left', marginLeft: "16px"}}>
              We propose <b>VRDNet</b>, <b>V</b>ariable-<b>R</b>esolution <b>D</b>isplay <b>Net</b>work that transforms a large-scale scene point cloud into point sets at different resolutions. Across these resolutions, semantic consistency is preserved. This is achieved by representing the scene using a semantic map, where a set of support points along with their semantic features and semantic logits is distributed in whole space. When a target resolution is given, query points are sampled in space and their semantics are queried from the semantic map. Experiments on 2 indoor scene datasets demonstrate the consistency of our method in multi-resolution semantics and the accuracy of the semantics at high resolutions. Our method also shows some adaptability in outdoor scenes, where the objects in these scenes are not well-defined. Furthermore, we provide new perspective for semantic parsing and point cloud simplification of large-scale scenes, especially outdoor scenes, i.e. semantic maps rather than specific objects in the scene.
          </div>
        </div>

        <div style={{fontSize: "30pt", fontWeight: 'bold', textAlign: 'left', color: "rgb(141, 53, 37)", marginTop: "20px"}}>
          Variabel-Resolution Ability
        </div>

        <div style={{fontSize: "25pt", textAlign: 'left', color: "rgb(141, 53, 37)", marginTop: "10px"}}>
            Indoor Scene
        </div>

        
        <div style={{display: "flex"}}>
          <div style={{
                width: '50%',  // 宽度设置为父元素宽度的 50%
                height: 'auto', // 高度根据宽度等比例缩放
                margin: "10px"
              }}>
            <div style={{fontSize: "20pt", textAlign: 'center', color: "rgb(49, 15, 9)", marginTop: "20px"}}>NYUCAD</div>
            <div style={{overflow: "hidden",  borderRadius:"10px"}}>
              <video  style={{
                width: '95%',  // 宽度设置为父元素宽度的 50%
                height: 'auto' // 高度根据宽度等比例缩放
              }}  loop autoPlay playsInline controls muted>
                <source src={process.env.PUBLIC_URL + '/mp4/nyucad.mp4'} type='video/mp4'></source>
                您的浏览器不支持 video 标签
              </video>
            </div>
            
          </div>
          <div style={{
                width: '50%',  // 宽度设置为父元素宽度的 50%
                height: 'auto', // 高度根据宽度等比例缩放
                margin: "10px"
              }}>
            <div style={{fontSize: "20pt", textAlign: 'center', color: "rgb(49, 15, 9)", marginTop: "20px"}}>S3DIS</div>
            <div style={{overflow: "hidden",borderRadius:"10px"}}>
              <video  style={{
                width: '95%',  // 宽度设置为父元素宽度的 50%
                height: 'auto' // 高度根据宽度等比例缩放
              }}  loop autoPlay playsInline controls muted>
                <source src={process.env.PUBLIC_URL + '/mp4/s3dis.mp4'} type='video/mp4'></source>
                您的浏览器不支持 video 标签
              </video>
            </div>
          </div>
          
        </div>

        <div style={{fontSize: "25pt", textAlign: 'left', color: "rgb(141, 53, 37)", marginTop: "20px"}}>
            Outdoor Scene
        </div>

        
        <div style={{display: "flex"}}>
          <div style={{
                width: '50%',  // 宽度设置为父元素宽度的 50%
                height: 'auto', // 高度根据宽度等比例缩放
                margin: "10px"
              }}>
            <div style={{fontSize: "20pt", textAlign: 'center', color: "rgb(49, 15, 9)", marginTop: "20px"}}>Semantic3D</div>
            <div style={{overflow: "hidden",  borderRadius:"10px"}}>
              <video  style={{
                width: '95%',  // 宽度设置为父元素宽度的 50%
                height: 'auto' // 高度根据宽度等比例缩放
              }}  loop autoPlay playsInline controls muted>
                <source src={process.env.PUBLIC_URL + '/mp4/semantic3d.mp4'} type='video/mp4'></source>
                您的浏览器不支持 video 标签
              </video>
            </div>
          </div>
          <div style={{
                width: '50%',  // 宽度设置为父元素宽度的 50%
                height: 'auto', // 高度根据宽度等比例缩放
                margin: "10px"
              }}>
            <div style={{fontSize: "20pt", textAlign: 'center', color: "rgb(49, 15, 9)", marginTop: "20px"}}>Chinese Rockery Garden</div>
            <div style={{overflow: "hidden", borderRadius:"10px"}}>
              <video  style={{
                width: '95%',  // 宽度设置为父元素宽度的 50%
                height: 'auto' // 高度根据宽度等比例缩放
              }}  loop autoPlay playsInline controls muted>
                <source src={process.env.PUBLIC_URL + '/mp4/rockery.mp4'} type='video/mp4'></source>
                您的浏览器不支持 video 标签
              </video>
            </div>
          </div>
          
        </div>
        

        <div style={{fontSize: "30pt", fontWeight: 'bold', textAlign: 'left', color: "rgb(141, 53, 37)", marginTop: "20px"}}>
          Interactive visualizations
        </div>
        
        <Interactive dataset="nyucad" title="NYUCAD"></Interactive>
        <Interactive dataset="s3dis" title="S3DIS"></Interactive>
        <Interactive dataset="semantic3d" title="Semantic3D"></Interactive>
        <Interactive dataset="rockery" title="Chinese Rockery Garden"></Interactive>
         
        
        
        
        
      </div>
    </div>
    
  );
}

export default App;
/*
<Canvas style={{height: "600px"}}>
        
            <LoadingAnimation3>

            </LoadingAnimation3>
                        
        </Canvas>
*/