<style lang="scss" scoped>

</style>

<template>
    <div class="main">
        <!-- PC端显示页面 -->
        <div class="main-body-pc">
            <computer></computer>
        </div>
        <!-- PC端显示页面 -->
        <!-- 移动端显示页面 -->
        <div class="main-body-mobile">
            <handphone></handphone>
        </div>
        <!-- 移动端显示页面 -->
    </div>
</template>

<script>
    import axios from 'axios'
    import computer from '../components/computer.vue'
    import handphone from '../components/handphone.vue'
    export default {
        data() {
            return {
                selectedNodeId: null
            };
        },
        methods: {
            
        },
        components: {
            computer,
            handphone
        },
    };
</script>