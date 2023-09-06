<template>
    <div class ="w-full h-full flex flex-col">
        <div
        class ="w-full grow-0 my-1">
            <h2 class="text-3xl">
                {{ material.name }}
            </h2>     
        </div>
        <div ref="subcanva"
        class ="w-full rounded-lg bg-white grow">
        </div>
    </div>
    
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as threedFunctions from "@/3d-classes/getMaxMinPoints.js";

export default {
    name: "ListMaterialShow",
    props: [
        "material",
        "index"
    ],
    mounted: async function(){
        const ThreeDData = this.$store.state.models3d.current_data.models[
            this.$store.state.development_view.currentSubpractice
        ];
        const textures = this.$store.state.textures
        const metadata = this.$store.state.metadata_practice.metadata.subpractices[
            this.$store.state.development_view.currentSubpractice
        ];
        const meshTextures = metadata.textures
        const dataURL = `data:${ThreeDData.glb.$type};base64,${ThreeDData.glb.$binary}`
        //DEFINE THE ELEMENTS OF THE 3D RENDERIZARION
        const canvas = this.$refs.subcanva;
        const height = canvas.clientHeight;
        const width = canvas.clientWidth;
        //const rect = this.$refs.subcanva.getBoundingClientRect();
        //const offsetX = rect.left;
        //const offsetY = rect.top;
        //-----------SCENE, CAMERA AND RENDERER
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            30,
            width / height,
            0.1,
            4000
        );
        camera.position.set(35, 18, -29);
        //camera.lookAt(-1000, -1000, -1000);
        //console.log(camera)
        const renderer = new THREE.WebGLRenderer({});
        renderer.setSize(width, height);
        renderer.setClearColor(0xf5ede0, 0.1);
        //---------CONTROLS AND MIXER
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0,0,0);
        var mixer = new THREE.AnimationMixer(scene);
        canvas.appendChild(renderer.domElement);
        //--------------ADD LIGHTS THO THE SCENE
        const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
        directionalLight.position.set(50, 50, 50);
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        const objectsBoxes = []
        loader.load(dataURL, (gltf) => {
            gltf.scene.traverse((object) => {
            object.frustumCulled = false;
                //IF THE OBJEECT IS NOT IN THE MATERIAL LIST, DONT VISUALIZE IT
                /*if (object.name=="Cube"){
                    object.visible=false;
                }
                object.material = {
                            color: 0x000000, // glass color                            
                        }
                console.log(object)*/
    
                //ASSIGN THE TEXTURES TO THE MATERIALS
                if (!(["Bone"].includes(object.type))){
                    if (!(textures[meshTextures[object.name]] === undefined)) {
                        object.material = new THREE.MeshPhysicalMaterial(
                            textures[meshTextures[object.name]]
                        )
                    } 
                    if(!(this.material.meshes.includes(object.name))){
                        object.material = new THREE.MeshPhysicalMaterial(
                            textures["invisible"]
                        )
                        
                    }   
                }
                if(this.material.visibleBoxes.includes(object.name)){
                    objectsBoxes.push(new THREE.Box3().setFromObject(object))
                        
                }                
                //------------PAINT THE LOADED GLB
                gltf.scene.position.set(0, 0, 0);
                scene.add(gltf.scene);
                
            });
         
            let corners = threedFunctions.getMaxMinPoints(objectsBoxes);
            let boundingBox = new THREE.Box3().setFromArray(corners);
            let center = new THREE.Vector3( );
            boundingBox.getCenter(center);
            // Get the size of the box
            const size = new THREE.Vector3();
            boundingBox.getSize(size);
            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = camera.fov * (Math.PI / 180);
            let distance = Math.abs(maxDim / (2 * Math.tan(fov / 2)));

            camera.position.set(center.x, center.y, center.z + distance);
            
            // Add the wireframe to the scene
            const helper = new THREE.Box3Helper( boundingBox, 0xffff00 );
            scene.add( helper );
            
            

        
        });

        function animate() {
            requestAnimationFrame(animate);
            mixer.update(new THREE.Clock().getDelta());
            renderer.render(scene, camera);
            controls.update();
            //console.log(args.camera.position.x, args.camera.position.y, args.camera.position.z)
            //const target = new args.ThreeInstance.Vector3();
            //args.camera.getWorldDirection(target);
            //console.log(target)
        }
        animate();
    }
}
</script>
