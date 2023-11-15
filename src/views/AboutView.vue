<template>
  <div class="about">
    <h1>IN-CLASS-M11 - Pokedex</h1>

    <div class="purpose-scope">
      <h2>Purposes:</h2>
      <p>To review and use what we learn in this module into a real web application.</p>

      <h2>Scope:</h2>
      <p>
        Write an application that lists the Pokemon on the landing page. When the user clicks on any
        Pokemon, the page should show another view that provides more details of that Pokemon.
      </p>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Oswald', sans-serif;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .purpose-scope {
    text-align: left;
    max-width: 600px;
  }

  h2 {
    font-size: 1.5em;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 20px;
  }
}
</style>
