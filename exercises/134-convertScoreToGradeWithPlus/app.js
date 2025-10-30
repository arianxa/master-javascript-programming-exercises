function convertScoreToGradeWithPlusAndMinus(score) {
   grade =""
   if(score>100 || score<0){
    return "INVALID SCORE"
   }
   else if(score===100){
      return"A+"
   }
   else if(score>=90){
        
    grade= "A"
   }
     else if(score>=80){
      grade= "B"
   }
      else if(score>=70){
    grade= "C"
   }
      else if(score>=60){
  grade= "D"
   }
      else if(score>=0){
  grade="F"

  
   }
      // 3️⃣ Calculamos el signo (+ o -)
  let unidades = score % 10;

  if (grade !== "F") { // 👈 F nunca lleva signo
    if (unidades <= 2) {
      grade += "-"; // si termina en 0,1,2
    } else if (unidades >= 8) {
      grade += "+"; // si termina en 8,9
    }
  }

  return grade;
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
