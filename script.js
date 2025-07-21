function pickImage() {
    option = ["images/bacon_in_the_woods.png",
"images/bacon_near_the_fort.png",
"images/BaconGallupPark.jpg",
"images/bend_in_the_road.png",
"images/blooming_trees.png",
"images/downed_tree.png",
"images/falling_petals.png",
"images/fort_in_woods.png",
"images/hanging_plants.png",
"images/hollow_tree.png",
"images/huron_river_cascades.JPG",
"images/lake_view.JPG",
"images/mist_over_huron_river.JPG",
"images/munising.jpg",
"images/pink_blossoms.png",
"images/potted_plants.png",
"images/red_maple.png",
"images/reflected_tree.JPG",
"images/tree_with_white_blooms.png",
"images/tulips.png",
"images/white_buds_on_tree.png"];
randomImg = "images/" + option [Math.floor(Math.random() * option.length)];
img = document.querySelector("#header_img");
img = setAttribute("src", randomImg);
img.setAttribute("alt", "")
} 

