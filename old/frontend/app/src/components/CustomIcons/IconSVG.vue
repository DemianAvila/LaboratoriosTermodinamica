<template>
    <div>
        <svg class="w-full h-full" ref="svgNode">   
            <g :stroke="color" :fill="color" v-html="svg" ref="groupNode">     
            </g>
        </svg>
    </div>
</template>
<script>
export default {
    name: "IconSVG",
    props: ["icon", "color"],
    components: {},
    data: function(){
        return{
            initialIcon: this.icon,
            svg: "",
            componentsSVG: {
                checked: `<path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"/>`,
                disabled: `<path d="M25,2C12.317,2,2,12.318,2,25s10.317,23,23,23s23-10.318,23-23S37.683,2,25,2z M7,25c0-4.062,1.371-7.8,3.65-10.815 L35.815,39.35C32.8,41.629,29.062,43,25,43C15.075,43,7,34.925,7,25z M39.35,35.815L14.185,10.65C17.2,8.371,20.938,7,25,7 c9.925,0,18,8.075,18,18C43,29.062,41.629,32.8,39.35,35.815z"/>`,
                menu: `<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>`,
                resume: `<path d="M352,170.667H94.17l70.249-70.248a21.334,21.334,0,1,0-30.171-30.171L27.581,176.915a21.336,21.336,0,0,0,0,30.171L134.248,313.752a21.334,21.334,0,1,0,30.171-30.171L94.17,213.333H352a96,96,0,0,1,0,192H128A21.333,21.333,0,1,0,128,448H352c76.461,0,138.667-62.205,138.667-138.667S428.461,170.667,352,170.667Z"/>`,
                warning: `<path d="M32,10.5A21.52,21.52,0,0,0,10.5,32c1.18,28.52,41.82,28.51,43,0A21.52,21.52,0,0,0,32,10.5Zm0,40A18.52,18.52,0,0,1,13.5,32c1-24.54,36-24.54,37,0A18.52,18.52,0,0,1,32,50.5Z"/>
                    <path d="M32,36.61a1.5,1.5,0,0,0,1.5-1.5v-12a1.5,1.5,0,0,0-3,0v12A1.5,1.5,0,0,0,32,36.61Z"/>
                    <path d="M32,38.7a1.59,1.59,0,0,0,0,3.18A1.59,1.59,0,0,0,32,38.7Z"/>`
            }
        }
    },
    mounted: function(){
        this.svg = this.componentsSVG[this.icon];
            
        this.$nextTick(() => {
            let svgComponent = this.$refs.svgNode;
            let group = this.$refs.groupNode;
            let g_size = group.getBoundingClientRect();
            let svgSize = svgComponent.getBoundingClientRect();

            // Calculate the scaling factors
            var scaleX = svgSize.width / g_size.width;
            var scaleY = svgSize.height / g_size.height;
            let translateX = svgSize.x-g_size.x;
            let translateY = svgSize.y-g_size.y;

            // Apply the scaling factors to the <g> element
            let scaleStringTransform = `scale(${scaleX}, ${scaleY})`;
            let translateStringTransform = `translate(${translateX}, ${translateY})`
            let transforms = `${scaleStringTransform} ${translateStringTransform}`
            group.setAttribute("transform", transforms);
        })
        
      
    }
}
</script>
