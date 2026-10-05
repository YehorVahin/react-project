import './App.css'
import HillelCourses from './components/HillelCourses'
import ProductCard from './components/ProductCard'
import SayHello from './components/SayHello'


function App() {
  const userInfo = {name: 'Yehor', age: 28};
  const userSkills = ['React', 'JS', 'Ts'];
  const logUser = () => console.log('User');
  return (
    <main>
      <h1>Каталог Товарів</h1>
      
      <ProductCard />
      <ProductCard />
      <ProductCard />
      
      <SayHello name="Yehor" log={logUser} inof={userInfo} age={28} isAdmin={true} skills={userSkills} />
      <footer>© 2024 Hillel IT School</footer>
    </main>
  )
}

export default App
