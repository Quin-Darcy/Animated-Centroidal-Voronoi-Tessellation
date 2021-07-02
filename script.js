// Display Constants
let W = window.innerWidth;
let H = window.innerHeight;
// Constants
let N = 100;
let px_sz = 5;
let EPSILON = 0.05;
// Arrays
let regions = [];
let sites = [];
let cent_dists = [];

function setup() {
    createCanvas(W, H);
    background(255);
    for (let i = 0; i < N; i++) {
        sites[i] = [random(0, W), random(0, H)];
        regions[i] = new Region(i);
    }
    get_regions();
}

function get_index(a, b) {
    let dists = [];
    let V = createVector(a, b);
    for (let i = 0; i < N; i++) {
        let U = createVector(sites[i][0], sites[i][1]);
        dists[i] = V.dist(U);
    }
    let MIN = min(dists);
    for (let i = 0; i < N; i++) {
        if (MIN === dists[i]) {
            return i;
        }
    }
}

function get_regions() {
    let k = 0;
    for (let i = 0; i < W; i += px_sz) {
        regions
        for (let j = 0; j < H; j += px_sz) {
            k = get_index(i, j);
            regions[k].add_element([i, j]);
        }
    }
}

function mouseClicked() {
    noLoop();
}

function draw() {
    background(255);
    for (let i = 0; i < N; i++) {
        let U = createVector(sites[i][0], sites[i][1]);
        regions[i].display();
        fill(0);
        ellipse(sites[i][0], sites[i][1], px_sz/2, px_sz/2);
        sites[i] = regions[i].get_center();
        let V = createVector(sites[i][0], sites[i][1]);
        cent_dists[i] = U.dist(V);
    }

    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += cent_dists[i];
    }
    sum = sum / N;
    if (sum >= EPSILON) {
        get_regions();
        sum = 0;
    } else {
        noLoop();
    }
}
