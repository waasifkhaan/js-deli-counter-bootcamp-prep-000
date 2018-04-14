function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if( katzDeliLine.length = 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.splice(1);

  }
  }

  function currentLine(katzDeliLine){
    if( katzDeliLine.length == 0){
      return "The line is currently empty."
    }
    else{
      var arr =[];
      for(let i = 0 ; i<katzDeliLine.length; i++ ){
        arr.push(`${i+1}` + '. ' + `${katzDeliLine[i]}` + '')
        //newline.push(`${i + 1}` + '.' + `${line[i]}`)

    //("The line is currently: 1. Bill, 2. Jane, 3. Ann");
      }
      return "The line is currently: " +  arr
    }


  }

  From Brad Smith to Everyone:  05:35 PM
newline.push(`${i + 1}` + '.' + `${line[i]}`)
// first way...
		// line.forEach(function(customer, index) {
		//   var position = index + 1;
		//   newLine.push(" "+ position + ". " + customer);
		// });

		// using Arrow function...
		line.forEach((customer, index) => {
			var position = index + 1;
			newLine.push(" " + position + ". " + customer);
		});

		// using for loop...
		// for (let i = 0; i < line.length; i++) {
		// 	newline.push(`${i + 1}` + '.' + `${line[i]}`)
		// }
