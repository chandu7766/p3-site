
QUnit.test('TEST add', assert => {
  assert.equal(maxi("sdfsdfsd", "addsfasdfasdf"), 13, 'correct output')
  assert.equal(maxi("chan", "chandu"), 6, 'correct output')
  assert.equal(maxi("prudhvi", "pru"), 7, 'correct output')
  assert.equal(maxi("dheer", "dheeraj"), 7, 'correct output')
  assert.equal(maxi("sdfsd", "sd"), 2, 'correct output')
})