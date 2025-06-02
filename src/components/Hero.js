const Hero = () => {
  return (
    <header className="hero-wrapper">
      <div className="hero">
        <img src="./world.png" alt="World icon" />
        <h1>Country Filter App</h1>
      </div>
      <p>
        Cette application React permet d’explorer les pays du monde en filtrant
        dynamiquement selon deux critères : le continent et la population. Grâce
        à un curseur intuitif, l’utilisateur peut ajuster le seuil de population
        minimale pour n’afficher que les pays les plus peuplés. L'interface
        propose également une sélection de continents pour affiner la recherche
        géographique. Les données sont récupérées en temps réel depuis l’API
        publique restcountries.com, offrant ainsi une expérience interactive et
        éducative.
      </p>
    </header>
  );
};

export default Hero;
