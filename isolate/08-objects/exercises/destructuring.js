'use strict';

const expect = chai.expect;

describe('destructuring', () => {
  it('types of tasty treats', () => {
    const obj = {
      wet: 'soup',
      dry: 'bread'
    };
    expect(obj.dry).to.eql('bread');
    expect(obj.wet).to.eql('soup');
  });
  it('a menagerie', () => {
    const hairiest = 'running';
    const oceanic = 'swimming';
    const obj = {
      [oceanic]: 'mackerel',
      running: 'cheetah'
    };
    const birdy = 'flying';
    obj[birdy] = 'crane';
    const {
      swimming,
      flying,
      running
    } = obj;
    expect(flying).to.eql('crane');
    expect(obj.running).to.eql('cheetah');
    expect(obj.swimming).to.eql('mackerel')
  });
});
