class bike{
    constructor(brand ,year){
        this.brand=brand;
        this.year=year
    }
}
class model extends bike{
    constructor(brand,type,year){
        super(brand,year)
        this.type=type
        console.log(`the ${brand} is a ${type} brand bike relese in ${year}`)
    }
}
let a=new model("yamaha","super",2021)