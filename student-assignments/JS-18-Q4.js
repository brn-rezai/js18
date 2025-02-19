/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/

function sum( a, b ) {
  return new Promise( ( resolve, reject ) => {
    if ( a < 0 || b < 0 ) {
      reject( "please enter positive numbers" );
    } else {
      setTimeout( () => {
        resolve( a + b );
      }, 500 );

    }
  } );
}

sum( 4, 3 )
  .then( r => console.log( `result: ${ r }` ) )
  .catch( e => console.log( `error: ${ e }` ) );

sum( 4, -3 )
  .then( r => console.log( `result: ${ r }` ) )
  .catch( e => console.log( `error: ${ e }` ) );
