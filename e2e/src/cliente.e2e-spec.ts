import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('Pruebas cliente', () => {
  let page: AppPage;

  beforeEach(async() => {
    page = new AppPage();
  });

  it('guardar cliente', async () => {
    await page.navigateTo('clientes');
    const crear = element(by.css('app-cliente #crearCliente'));
    await crear.click();
    const docIdentidad = element(by.css('app-cliente-formulario #docIdentidad'))
    const nombres = element(by.css('app-cliente-formulario #nombres'))
    const apellidos = element(by.css('app-cliente-formulario #apellidos'))
    await docIdentidad.clear();
    await nombres.clear();
    await apellidos.clear();
    await docIdentidad.sendKeys('1039470240')
    await nombres.sendKeys('Gabriel Andres')
    await apellidos.sendKeys('Arboleda Tolosa')

    const guardar = element(by.css('app-cliente-formulario #guardar'));
    await guardar.click();
    expect(await page.getText('app-cliente #docIdentidad')).toEqual('1039470240');
    expect(await page.getText('app-cliente #nombres')).toEqual('Gabriel Andres');
    expect(await page.getText('app-cliente #apellidos')).toEqual('Arboleda Tolosa');
  });

  it('editar cliente', async () => {
    await page.navigateTo('clientes');
    const editar = element(by.css('app-cliente #editarCliente'));
    await editar.click();
    const nombres = element(by.css('app-cliente-formulario #nombres'))
    await nombres.clear();
    await nombres.sendKeys('armando')
    const guardar = element(by.css('app-cliente-formulario #guardar'));
    await guardar.click();
    expect(await page.getText('app-cliente #nombres')).toEqual('armando');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
