class Region {
    constructor(id) {
        this.id = id;
        this.region = [];
    }
    add_element(a) {
        this.region.push(a);
    }
    get_element(a) {
        return this.region[a];
    }
    get_length() {
        return this.region.length;
    }
    get_center() {
        let x_sum = 0;
        let y_sum = 0;
        let L = this.get_length();
        for (let i = 0; i < L; i++) {
            x_sum += this.region[i][0];
            y_sum += this.region[i][1];
        }
        return [Math.floor(x_sum / L), Math.floor(y_sum / L)];
    }
    display() {
        colorMode(HSB, N, 1, 1);
        fill(this.id, 1, 1);
        //fill(255);
        //stroke(255);
        for (let i = 0; i < this.region.length; i++) {
            ellipse(this.region[i][0], this.region[i][1], px_sz, px_sz);
        } 
    }
}