<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 active:bg-indigo-900 focus:ring-4 focus:ring-indigo-300 focus:outline-none focus:border-indigo-900 focus:shadow-outline-gray transition ease-in-out duration-150">
        <slot />
    </button>
</template>
