class square{
    constructor(len)
    {
        this.len = len;
    }

    get sideLength()
    {
        return this.len;
    }
    getArea(){
        return this.len*this.len;
    }
}

export {square};