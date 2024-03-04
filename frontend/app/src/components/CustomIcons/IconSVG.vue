<template>
    <div>
        <svg class="w-full h-full" ref="group">   
            <component :is="dynamicComponent" :color="color" />
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
            dynamicComponent: ""
        }
    },
    mounted: function(){
        
        // Dynamically import the icon
        const capitalizedWord = `${this.icon.charAt(0).toUpperCase()}${this.initialIcon.slice(1)}`;
        const componentIcon = `@/components/CustomIcons/Icon${capitalizedWord}.vue`
        console.log(componentIcon)
        this.$options.components.DynamicComponent = () => import(componentIcon);
        this.dynamicComponent = 'DynamicComponent'
      
      
        

        this.$nextTick(() => {
            let svgComponent = this.$refs.group;
            let group = svgComponent.childNodes[0];
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
