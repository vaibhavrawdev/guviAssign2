
//Problem 0 Part B

var myCar = {
    make : 'Bugatti',
    model : 'Bugatti La Voiture Noire',
    year : 2019,
    accidents : [
        {
            date : '3/15/2019',
            damage_points : '5000',
            atFaultForAccident : true
        },
        {
            date: '7/4/2022',
            damage_points: '2200',
            atFaultForAccident: true
        },
        {
            date: '6/22/2021',
            damage_points : '7900',
            atFaultForAccident : true
        }
    ]
}
myCar.accidents.forEach((elem) => {
    elem.atFaultForAccident = false;
});
myCar.accidents.forEach((elem) => {
    console.log('date of accident:',elem.date);
});
console.log(myCar);
