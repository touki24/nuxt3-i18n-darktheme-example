<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

enum AppTheme {
    Light = "light",
    Dark = "dark",
    System = "system"
}

const items = [
    [{
        icon: 'i-heroicons-sun',
        label: 'Light',
        click: () => {
            setTheme(AppTheme.Light)
        }
    }],
    [{
        icon: 'i-heroicons-moon',
        label: 'Dark',
        click: () => {
            setTheme(AppTheme.Dark)
        }
    }],
    [{
        icon: 'i-heroicons-computer-desktop',
        label: 'System',
        click: () => {
            setTheme(AppTheme.System)
        }
    }]
]

const setTheme = (theme: AppTheme) => {
    useColorMode().preference = theme
}

const getTheme = () => {
    return useColorMode().preference
}

const getIconBasedOnTheme = (theme: AppTheme) => {
    switch (theme) {
        case AppTheme.Light:
            return "i-heroicons-sun"
        case AppTheme.Dark:
            return "i-heroicons-moon"
        default:
            return "i-heroicons-computer-desktop"
    }
}

const icon = ref('')

watch(getTheme, (newTheme) => {
    icon.value = getIconBasedOnTheme(newTheme as AppTheme);
})

onMounted(() => {
    icon.value = getIconBasedOnTheme(getTheme() as AppTheme)
})

</script>

<template>
    <UDropdown v-if="icon !== ''" :items="items" mode="click" :popper="{ placement: 'bottom-start' }">
        <UButton color="white" :trailing-icon="icon" />
        <template #item="{ item }">
            <UIcon v-if="item.icon == icon" :name="item.icon"
                class="flex-shrink-0 h-5 w-5 text-red-700 dark:text-red-300" />
            <UIcon v-else :name="item.icon" class="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500" />

            <span v-if="item.icon == icon" class="font-semibold truncate ms-1 text-red-700 dark:text-red-300">{{ item.label
            }}</span>
            <span v-else class="truncate ms-1">{{ item.label }}</span>
        </template>
    </UDropdown>
</template>