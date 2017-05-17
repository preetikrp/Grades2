console.log("hello");

var F = 0;
var D = 0;
var C = 0;
var B = 0;
var A = 0;

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

function checkscore(){
	for(var i = 0; i < scores.length; i+=1){
		if(scores[i] >= 91){
			A+=1;

		}else if (scores[i]>= 81){
			B+=1;
		}else if (scores[i]>= 71){
			C+= 1;
		}else if (scores[i]>= 61){
			D+= 1;
		}else if(scores[i]>= 51){
			F+= 1;
		}
	}
}
checkscore();

console.log("GradeA = "+A,);
console.log("GradeB = "+B,);
console.log("GradeC = "+C,);
console.log("GradeD = "+D,);
console.log("GradeF = "+F,);



console.log("The lowest score is "+ Math.min(...scores));



console.log("The highest score is "+ Math.max(...scores));



