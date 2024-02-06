<script setup lang="ts">
const props = defineProps({
    label: { type: String }
})
</script>
<template>
    <UButton :label="props.label" />
</template>