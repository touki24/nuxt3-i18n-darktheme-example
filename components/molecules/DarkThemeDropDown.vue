<script setup lang="ts">
const props = defineProps({
    label: { type: String }
})

var selectedTheme: String = "system"

const items = [
    [{
        icon: 'i-heroicons-sun',
        label: 'Light',
        click: () => {
            selectedTheme = "light"
        }
    }],
    [{
        icon: 'i-heroicons-moon',
        label: 'Dark',
        click: () => {
            selectedTheme = "dark"
        }
    }],
    [{
        icon: 'i-heroicons-computer-desktop',
        label: 'System',
        click: () => {
            selectedTheme = "system"
        }
    }]
]

function resolveIcon(selectedTheme: String) {
    if (selectedTheme === "light") {
        return "i-heroicons-sun"
    }

    if (selectedTheme === "dark") {
        return "i-heroicons-moon"
    }

    return "i-heroicons-computer-desktop"
}
</script>

<template>
    <UDropdown :items="items" mode="click" :popper="{ placement: 'bottom-start' }">
        <UButton color="white" :trailing-icon="resolveIcon(selectedTheme)" />
    </UDropdown>
</template>