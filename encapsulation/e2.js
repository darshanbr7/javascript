class details{
    setEmployee(name,id ,sal){
        this.name=name;
        this.sal=sal;
        this.id=id;
    }
    getName(){
        //console.log(` name is ${this.name}`)
        return this.name;
    }
    getSalary(){
        return this.sal;
    }
    getId(){
        return this.id;
    }

}
  let Darshan=new details();
  Darshan.setEmployee("darshan",101,30000);
 console.log(Darshan.getId())


