<template>
    <section class="main">
        <GmapMap
            :center="{lat:10, lng:10}"
            :zoom="7"
            map-type-id="terrain"
            style="width: 100%; height: 100%"
        >
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            />
        </GmapMap>
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
    }
    @media all and (max-width: 1024px) {
        .main {
            left: 0;
        }
    }
</style>
