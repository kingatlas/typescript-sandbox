const obs : KnockoutObservable<string> = ko.observable("hello"); // should raise error TS2304: Cannot find name 'ko'. and error TS2304: Cannot find name 'KnockoutObservable'.
console.log(obs());

