<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Benvenuti alla Cascina della Vachina</h1>
        <p>Un'oasi di tranquillità nel cuore della campagna</p>
        <router-link to="/contatti" class="cta-button">Prenota Ora</router-link>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about">
      <div class="container">
        <h2>La Nostra Storia</h2>
        <p>
          La Cascina della Vachina è un bed & breakfast immerso nella natura,
          dove tradizione e comfort si incontrano per offrirvi un'esperienza unica.
          Situato in una posizione strategica, è il punto di partenza ideale per
          esplorare le bellezze del territorio.
        </p>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="section highlights">
      <div class="container">
        <h2>Perché Sceglierci</h2>
        <div class="highlights-grid">
          <div class="highlight-card">
            <div class="highlight-icon">🏡</div>
            <h3>Ambiente Familiare</h3>
            <p>Un'accoglienza calorosa in un ambiente genuino e rilassante</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🥐</div>
            <h3>Colazione Genuina</h3>
            <p>Prodotti freschi e locali per iniziare la giornata con gusto</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">📍</div>
            <h3>Posizione Ideale</h3>
            <p>Facilmente raggiungibile e vicino alle principali attrazioni</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🌳</div>
            <h3>Immersi nella Natura</h3>
            <p>Tranquillità e paesaggi mozzafiato a pochi passi</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <h2>Pronto per la Tua Vacanza?</h2>
        <p>Contattaci per prenotare il tuo soggiorno</p>
        <router-link to="/contatti" class="cta-button">Contattaci</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero {
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  font-weight: 700;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #359268;
}

.section {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.about {
  background-color: #f8f9fa;
}

.about p {
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.highlight-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.highlight-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.highlight-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.highlight-card p {
  color: #666;
  line-height: 1.6;
}

.cta-section {
  background-color: #2c3e50;
  color: white;
  text-align: center;
}

.cta-section h2 {
  color: white;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-content p {
    font-size: 1.2rem;
  }
  
  .section h2 {
    font-size: 2rem;
  }
}
</style>
