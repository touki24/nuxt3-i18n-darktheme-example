<script setup lang="ts">
const { t } = useI18n()

console.log(t('goToAbout'))

</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="flex">{{ t('home') }}</h1>
        <span>{{ t('hello', { name: 'Touki' }) }}</span>
        <AtomsButton :label="$t('goToAbout')" @click="() => {
            useRouter().push('/about')
        }" />
    </div>
    <div>
        <MoleculesFooter />
    </div>
</template>