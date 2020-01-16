function retirement(r_age) {
    var a = 'years left for retirement'
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((r_age-age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);