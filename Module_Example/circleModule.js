class circle{
    constructor(radious)
    {
        this.radious = radious;
    }

    get area()
    {
        return Math.PI*this.radious*this.radious
    }

    getDiameter()
    {
        return this.radious*2;
    }
}

export default circle;