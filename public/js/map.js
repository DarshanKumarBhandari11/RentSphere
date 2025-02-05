mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [-118.788193, 34.031246],
    // center: listing.geometry.coordinates,
    zoom: 14,
});

// Map Marker for particular location
const options = {
    color: 'red',
    anchor: 'bottom',
};
const marker = new mapboxgl.Marker(options)
    .setLngLat([-118.788193, 34.031246])
    // .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4>${listing.title}</h4><p>Exact Location will be provided after booking.</p>`
    ))
    .addTo(map);