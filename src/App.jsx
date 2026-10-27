import './App.css'
// import Button from './components/Button';
// import HillelCourses from './components/HillelCourses'
// import ProductCard from './components/ProductCard'
// import SayHello from './components/SayHello'
// import Title from './components/Title';


function App() {
  // const userInfo = {name: 'Yehor', age: 28};
  const userSkills = [
    {title: 'JS', level: 1},
    {title: 'React', level: 2},
    {title: 'TS', level: 1}
  ];
  const logUser = () => console.log('User');
  // const topFilms = [
  // { id: 101, title: 'Втеча з Шоушенка', year: 1994 },
  // { id: 102, title: 'Хрещений батько', year: 1972 },
  // { id: 103, title: 'Темний лицар', year: 2008 },
  // { id: 104, title: '12 розгніваних чоловіків', year: 1957 },
  // { id: 105, title: 'Список Шиндлера', year: 1993 },
  // ];
  return (
    // <main>
    //   <h1>Каталог Товарів</h1>
      
    //   <ProductCard />
    //   <ProductCard />
    //   <ProductCard />

      <ul>
        {userSkills.map(skill => <li key={`${skill.title}_${skill.level}`}>{skill.title}</li>)}
      </ul>

      // <ul>
      //   {
      //     topFilms.map(film => (
      //       <li key={film.id}>
      //         {film.title}, ({film.year})
      //       </li>
      //     ))
      //   }
      // </ul>
      
    //   <SayHello name="Yehor" log={logUser} inof={userInfo} age={28} isAdmin={true} skills={userSkills} />
    //   <Title>Home</Title>
    //   <footer>© 2024 Hillel IT School</footer>
    // </main>
  )
}

export default App
