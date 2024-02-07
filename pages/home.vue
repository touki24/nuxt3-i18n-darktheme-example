<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="flex">{{ $t('home') }}</h1>
        <AtomsButton :label="$t('go_to_about')" @click="() => {
            useRouter().push(localePath('/about'))
        }" />
    </div>
    <div>
        <MoleculesFooter />
    </div>
</template>