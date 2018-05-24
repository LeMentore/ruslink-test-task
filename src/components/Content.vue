<template>
    <section class="main">
        <p>Hello</p>
    </section>
</template>

<script>

</script>

<style scoped>
    .main {
        transition: all 0.3s ease-out;
        position: absolute;
        top: 64px;
        bottom: 0;
        background-color: #f5f5f5;
        left: 260px;
        right: 0;
        padding: 20px;
    }
    @media all and (max-width: 1024px) {
        .main {
            left: 0;
        }
    }
</style>
