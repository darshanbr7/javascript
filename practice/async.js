let a=()=>Promise.resolve("true block")
  async function b(){
  a()
  }
  b().then(
  
  ).catch()