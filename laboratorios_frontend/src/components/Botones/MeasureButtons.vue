<template>
    <div class="relative w-full">
        <button :class="[inUse ? 'bg-emerald-600': 'bg-red-500']"
        class="w-12 h-12 rounded-full"
        @click="getValue">
            <i v-if="properties.name=='ruler'" class="text-white fa-solid fa-ruler fa-lg"></i>
        </button>
    </div>
</template>
<script>
export default {
    name: "MeasureButtons",
    props: ["properties"],
    data: function(){
        return {
            inUse: this.properties.inUse
        }
    },
    methods: {
        getValue: function(){
            this.inUse = !this.inUse
            this.$emit("update:inUse", this.inUse)
        }
    }
}
</script>
<style lang="">
    
</style>