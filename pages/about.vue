<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="flex">{{ $t('about') }}</h1>
        <AtomsButton :label="$t('go_to_home')" @click="() => {
            useRouter().push(localePath('/'))
        }" />
    </div>
</template>