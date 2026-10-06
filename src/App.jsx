import './App.css'
import Button from './components/Button';
import HillelCourses from './components/HillelCourses'
import ProductCard from './components/ProductCard'
import SayHello from './components/SayHello'
import Title from './components/Title';


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
      <Title>Home</Title>
      <footer>© 2024 Hillel IT School</footer>
    </main>
  )
}

export default App
