<template>
    <div class="home">22222</div>
    <Button>test</Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from 'vant';
export default defineComponent({
    name: 'Home',
    components: {
        Button
    },
});
</script>

<style lang="scss" scoped>
.home {
    font-size: 40px;
    width: 40px;
}
</style>
