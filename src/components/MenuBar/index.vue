<template>
    <van-tabbar v-model="active" @change="onChange" >
        <van-tabbar-item
            v-for="item in barMenu"
            :name="item.name"
            :icon="item.icon"
            :key="item.name"
            >{{ item.text }}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Tabbar, TabbarItem } from 'vant';
export default {
    setup() {
        const route = useRouter();
        const currentRoute = route.currentRoute.value.name;
        console.log(currentRoute);
        const active = ref(currentRoute);
        const barMenu = reactive([
            {
                icon: 'home-o',
                name: 'home',
                text: '首页'
            },
            {
                icon: 'gift-o',
                name: 'gift',
                text: '限时优惠'
            },
            {
                icon: 'search',
                name: 'search',
                text: '搜索'
            }
        ]);
        const onChange = (val: string) => {
            console.log(val);
            console.log(route);
            route.push({
                name: val
            });
        };
        return { active, barMenu, onChange };
    },
    components: {
        'van-tabbar': Tabbar,
        'van-tabbar-item': TabbarItem
    }
};
</script>
