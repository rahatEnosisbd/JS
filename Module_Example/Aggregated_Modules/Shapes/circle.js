class circle{
    constructor(r)
    {
        this.r = r;
    }

    get radious()
    {
        return this.r;
    }
    getArea(){
        return Math.PI*this.r*this.r;
    }
}

export {circle};