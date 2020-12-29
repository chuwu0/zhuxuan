<template>
    <div class="zhu-app">
        <div class="zhu-main">
            <router-view />
        </div>
        <MenuBar />
    </div>
</template>

<script lang="ts">
import MenuBar from '@/components/MenuBar/index.vue';
export default {
    components: {
        MenuBar
    }
};
</script>

<style lang="scss">
.zhu-app {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .zhu-main {
        flex: 1;
        overflow-y: auto;
    }
    .van-tabbar {
        position: relative;
    }
}
</style>