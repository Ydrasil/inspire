import { ACCEPTED_LICENSES, checkLicense, checkDataAvailability, checkProducers } from '../dataGouvChecks'

describe('dataGouvChecks', () => {
  describe('checkLicense()', () => {
    describe('ACCEPTED_LICENSES', () => {
      it('should be true for all accepted licenses', () => {
        ACCEPTED_LICENSES.map(license => {
          expect(checkLicense(license)).to.be.true
          return true
        })
      })

      it('should be false for any other licenses and specify the error', () => {
        const license = 'unk-license'
        expect(checkLicense(license)).to.be.false
      })
    })

    it('should be false when license is undefined and specify the error', () => {
      expect(checkLicense(undefined)).to.be.false
    })
  })

  describe('checkProducers()', () => {
    it('should return true when the array contains at least one element', () => {
      const organizations = ['producteur']
      expect(checkProducers(organizations)).to.be.true
    })

    it('should return false when the array contains no elements', () => {
      const organizations = []
      expect(checkProducers(organizations)).to.be.false
    })

    it('should return false when the array is undefined', () => {
      const organizations = undefined
      expect(checkProducers(organizations)).to.be.false
    })
  })

  describe('checkDataAvailability()', () => {
    it('should return true when the array contains at least one element whith available at true', () => {
      const distributions = [{available: true}, {available: false}]
      expect(checkDataAvailability(distributions)).to.be.true
    })

    it('should return false when the array contains no elements whith available at true', () => {
      const distributions = [{available: false}, {available: false}]
      expect(checkDataAvailability(distributions)).to.be.false
    })

    it('should return false when the array is empty', () => {
      const distributions = []
      expect(checkDataAvailability(distributions)).to.be.false
    })

    it('should return false when the array is undefined', () => {
      const distributions = undefined
      expect(checkDataAvailability(distributions)).to.be.false
    })
  })

})
