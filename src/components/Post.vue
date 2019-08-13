<template>
    <div>
        <p>{{ title }}</p>
        <p>{{ description }}</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Post extends Vue {
    @Prop(String) readonly title?: string;
    @Prop(String) readonly description?: string;
}
</script>

<style scoped>

</style>