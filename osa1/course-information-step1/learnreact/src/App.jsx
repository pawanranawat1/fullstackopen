import Header  from "./Header"
import Content from "./Content"
import Total   from "./Total";

const App = () => {
 const course = "Half Stack application development";
const part1 = {
  name: 'Fundamental of reacts',
  exercises:10
}
const part2 = {
  name: 'Using prop to pass the data',
  exercises: 7
}


const part3 = {
  name: 'State of component',
  exercises: 14
}

const total =2
  return (
   <>
   <Header course={course}></Header>
   <Content content = {part1.name}></Content>
   <Total total = { part1.exercises }></Total>

   <Header course={course}></Header>
   <Content content = {part2.name}></Content>
   <Total total = { part2.exercises }></Total>

   <Header course={course}></Header>
   <Content content = {part3.name}></Content>
   <Total total = { part3.exercises }></Total>
   </>
  )
}

export default App