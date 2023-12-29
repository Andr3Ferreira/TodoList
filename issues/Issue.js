class Issues {
    constructor (
        // date,
        number,
        description,
        status
    ){
        // this.date = date;
        this.number = number;
        this.description = description;
        this.status = status;
    }
    getNumber(number){
        this.number = number++;  
    }
    getDescription(description){
        this.description = description;
    }
    getStatus(status){
        this.status = status;
    }
}