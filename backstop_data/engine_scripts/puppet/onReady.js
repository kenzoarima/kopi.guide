module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  //await require('./clickAndHoverHelper')(page, scenario);
  
  if (scenario.label == "select_kopi-cdilogahdai") {
    await page.waitFor('label[for=km-evaporated]');
    await page.click('label[for=km-evaporated]');
    await page.click('label[for=ks-stronger]');
    await page.click('label[for=ks-sweeter]');
    await page.waitFor(3000);
  }

  // add more ready handlers here...
};
