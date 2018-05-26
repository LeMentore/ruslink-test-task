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
                @click="checkMarkerInListHandler(index)"
            />
        </gmap-map>
    </section>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        props: ['markers'],
        data() {
            return {
                currentLocation : { lat : 56.83786955383275, lng : 60.599973821930234 }
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
            },
            checkMarkerInListHandler(index){
                eventBus.$emit('markerClicked', index)
            }
        },
        mounted() {
            this.geoLocationHandler();
        },
        created(){
            eventBus.$on('placeSelected', index => {
                this.currentLocation = {
                    lat: this.markers[index-1].position.lat,
                    lng: this.markers[index-1].position.lng
                }
            })
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
