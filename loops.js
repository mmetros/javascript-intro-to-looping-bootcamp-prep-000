function forLoop(array){
  for(let i = 0; i < 25; i++){
    if(i === 1){
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(number){
  while(number !== 0){
    console.log(number)
    number --
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
<<<<<<< HEAD
    array.pop()
=======
    array.pop
>>>>>>> 9dc02fe1fd3d3fb9e517e726c607602ecaf1c73b
  } while( array.length > 0 || maybeTrue()){
    array.pop()
  }
  return array
}




