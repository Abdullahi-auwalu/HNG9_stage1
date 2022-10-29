import './App.css';
import Footer from './components/footer/Footer';
import LinksSection from './components/linksSection/LinksSection';
import ProfileSection from './components/profileSection/ProfileSection';
import SocialSection from './components/socialSection/SocialSection';

function App() {
  return (
    <div className="App">
      <ProfileSection />
      <LinksSection />
      <SocialSection />
      <Footer />
    </div>
  );
}

export default App;
