import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('Pruebas pelicula', () => {
  let page: AppPage;

  beforeEach(async() => {
    page = new AppPage();
  });

  it('guardar pelicula', async () => {
    await page.navigateTo('peliculas');
    const crear = element(by.css('app-pelicula #crearPelicula'));
    await crear.click();
    const nombrePelicual = element(by.css('app-pelicula-formulario #nombrePelicula'))
    const genero = element(by.css('app-pelicula-formulario #genero'))
    nombrePelicual.clear();
    genero.clear();
    nombrePelicual.sendKeys('matrix');
    genero.sendKeys('accion');
    const guardar = element(by.css('app-pelicula-formulario #guardar'));
    await guardar.click();
    expect(await page.getText('app-pelicula #nombrePelicula')).toEqual('matrix');
    expect(await page.getText('app-pelicula #genero')).toEqual('accion');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
