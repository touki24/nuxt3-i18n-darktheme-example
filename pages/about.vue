<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="flex">{{ $t('about') }}</h1>
        <AtomsButton :label="$t('goToHome')" @click="() => {
            useRouter().push('/')
        }" />
    </div>
</template>