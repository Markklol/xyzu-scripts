<script setup>
import { headers } from "~/config/headers";

useHead(headers);

const trending = ref([]);

const { data, error, status } = await useFetch("/api/home", {
    lazy: true,
});

if (error.value) {
    throw createError({
        statusCode: error.value.statusCode,
        statusMessage: error.value.message,
    });
}

watchEffect(() => {
    if (data.value?.data) {
        const result = data.value.data;
        trending.value = result.trending;
    }
});
</script>

<template>
    <main class="bg-background">
        <div v-if="status === 'pending'">
            <Loader class="h-[calc(100dvh-350px)]" />
        </div>
        <div v-else>
             <Trending :trending="trending" />
        </div>
    </main>
</template>

<style>
html {
    background-color: var(--background);
}
</style>
