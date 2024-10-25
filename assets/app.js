const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const tokoGroup = L.layerGroup();
const sekolahCluster = L.markerClusterGroup();
const masjidCluster = L.markerClusterGroup();
const tokoCluster = L.markerClusterGroup();
const wilayahpringgarata = L.layerGroup();
const wilayahbonjeruk = L.layerGroup();
const wilayahperina = L.layerGroup();
const wilayahbarejulat= L.layerGroup();
const wilayahpagutan= L.layerGroup();
const wilayahtamanindah= L.layerGroup();


const iconSekolah = L.icon({
    iconUrl: 'assets/leaflet/images/school.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
    iconUrl: 'assets/leaflet/images/mosquee.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconToko = L.icon({
    iconUrl: 'assets/leaflet/images/grocery.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconpuskesmas = L.icon({
    iconUrl: 'assets/leaflet/images/hospital-building.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});



// ===================== Marker ===========================
var masjid = [
    L.marker([-8.634860040603257, 116.24831333773645], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="assets/leaflet/images/masjid2.jpg">`),
    L.marker([-8.637699452006407, 116.25088423507182], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="assets/leaflet/images/masjid3.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
    L.marker([-8.635683598242005, 116.24662084181429], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="assets/leaflet/images/sdn1pengenjek.jpg">`),
    L.marker([-8.637621786714925, 116.25263025278868], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="assets/leaflet/images/miberembeng.jpg">`),
    L.marker([-8.637796011670966, 116.25487844034637], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="assets/leaflet/images/sdnberembeng.jpg">`),
];
var toko = [
    L.marker([-8.637802426971408, 116.2420757573796], { icon: iconToko }).addTo(tokoCluster).bindPopup(` <img src="assets/leaflet/images/tokogrosir.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var streets  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id: 'mapbox.streets',   
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var satelit = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    id: 'mapbox.streets',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

const map = L.map('map', {
    center: [-8.634173884984019, 116.24921668372933],
    zoom: 13,
    layers: [satelit, sekolahCluster, masjidCluster, tokoCluster]
});
//=============================================


//================= Cluster ==================
map.addLayer(sekolahCluster);
map.addLayer(masjidCluster);
map.addLayer(tokoCluster);

//=============================================
L.geoJSON(pringgarata,{style:function(l){return{color:l.properties.color}}}).addTo(wilayahpringgarata);
L.geoJSON(bonjeruk).addTo(wilayahbonjeruk);
L.geoJSON(perina).addTo(wilayahperina);
L.geoJSON(barejulat).addTo(wilayahbarejulat);
L.geoJSON(pagutan).addTo(wilayahpagutan);
L.geoJSON(tamanindah).addTo(wilayahtamanindah);


const baseLayers = {
    'streets': streets,
    'satelit': satelit,
};

const overlays = {
    'Sekolah': sekolahCluster,
    'Masjid': masjidCluster,
    'Toko': tokoCluster,
    'wilayahpringgarata': wilayahpringgarata,
    'wilayahbonjeruk': wilayahbonjeruk,
    'wilayahperina': wilayahperina,
    'wilayahbarejulat':wilayahbarejulat,
    'wilayahpagutan':wilayahpagutan,
    'wilayahtamanindah':wilayahtamanindah,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);



//  Menampilkan geojSON
L.geoJSON(gis).addTo(map);