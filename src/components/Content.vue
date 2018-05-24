<template>
    <section class="main">
        <gmap-map
            :center="{ lat:currentLocation.lat, lng:currentLocation.lng }"
            :zoom="12"
            style="width: 100%; height: 100%"
            @click="pickLocationHandler"
        >
            <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                @click="center=m.position"
            />
        </gmap-map>
    </section>
</template>

<script>
    export default {
        props: ['markers'],
        data() {
            return {
                currentLocation : { lat : 0, lng : 0 }
            }
        },
        methods: {
            geoLocationHandler() {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.currentLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                })
            },
            pickLocationHandler(event) {
                this.markers.push({
                    position: {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng()
                    }
                })
                this.$emit('markerAdded')
            }
        },
        mounted() {
            this.geoLocationHandler();
        }
    }
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
