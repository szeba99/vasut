// Az üres gombok konténerének lekérése
const buttonContainer = document.getElementById('button-container');

// A lista elemeiből dinamikusan gombokat hozunk létre
lista1.forEach(item => {
  // Új gomb létrehozása
  const button = document.createElement('button');
  button.textContent = item;  // A gomb szövege a lista eleme

  // Külön hangerő csúszka létrehozása
  const volumeSlider = document.createElement('input');
  volumeSlider.type = 'range';  // Csúszka típus
  volumeSlider.min = '0';  // Minimum érték (nincs hangerő)
  volumeSlider.max = '1';  // Maximum érték (maximális hangerő)
  volumeSlider.step = '0.01';  // Kisebb lépésekben állítható
  volumeSlider.value = '1';  // Kezdeti hangerő (maximális)

  // Gomb és csúszka egy div-be csomagolása, hogy a csúszka a gomb alatt jelenjen meg
  const buttonWrapper = document.createElement('div');
  buttonWrapper.appendChild(button);
  buttonWrapper.appendChild(volumeSlider);

  // Esemény hozzáadása: gombra kattintáskor a megfelelő hang lejátszása
  button.addEventListener('click', () => {
    // Lejátszunk egy mp3 fájlt, amelynek neve a gomb szövegéből származik
    const audio = new Audio(`sounds/${item}.mp3`);
    audio.volume = volumeSlider.value;  // A hangerőt a csúszka értékére állítjuk be
    audio.play();
  });

  // A gomb és csúszka hozzáadása a konténerhez
  buttonContainer.appendChild(buttonWrapper);
});
