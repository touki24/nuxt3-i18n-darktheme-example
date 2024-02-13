<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="flex">{{ t('goToAbout') }}</h1>
        <span>{{ t('hello', { name: 'Touki' }) }}</span>
        <AtomsButton :label="t('goToAbout')" @click="() => {
            useRouter().push('/about')
        }" />
    </div>
    <div>
        <MoleculesFooter />
    </div>
</template>