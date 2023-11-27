class Human{
    //필드, 생성자, 메소드
    constructor(){
        //js는 자바와 달리 생성자 내부에서 필드를 선언해야한다
        this._ssn; //_를 붙여서 구분해준다 _로 시작하는 것은 수정하지 말라는 암묵적 룰이 있음 
        this._name = 'Kang';  //this.name으로 해서 실행하면 오류남
        this._age;
    }
    set ssn(ssn){
        this._ssn = ssn;
    }
    get ssn(){
        return this.ssn;
    }
    set name(name){
        this._name = name;
    }
    get name(){
        return this.name; //readonly느낌으로만 사용하려면 get
    }
    set age(age){
        this._age = age;
    }
    get age(){
        return this.age;
    }

    getInfo(){
        console.log(this._ssn, this._name, this._age);
    }
}
let hu = new Human();
hu.ssn = '990520';
hu.name = 'Kang';
hu.age = 25;
hu.getInfo();

