import * as Utils from 'client/theme-default/utils'

describe('client/theme-default/utils', () => {
  describe('getPathDirName', () => {
    it('should get path without filename (the last segment).', () => {
      expect(Utils.getPathDirName('/path/page.html')).toBe('/path/')
      expect(Utils.getPathDirName('/path/')).toBe('/path/')
      expect(Utils.getPathDirName('/path')).toBe('/')
      expect(Utils.getPathDirName('path')).toBe('/')
      expect(Utils.getPathDirName('path/page.html')).toBe('path/')
      expect(Utils.getPathDirName('/path/nested/page.html')).toBe(
        '/path/nested/'
      )
      expect(Utils.getPathDirName('/path/nested/')).toBe('/path/nested/')
      expect(Utils.getPathDirName('/path/nested')).toBe('/path/')
      expect(Utils.getPathDirName('path/nested/')).toBe('path/nested/')
      expect(Utils.getPathDirName('path/nested/page.html')).toBe('path/nested/')
    })
  })

  describe('ensureSlash', () => {
    it('should add slash to the beginning and end of the given path', () => {
      expect(Utils.ensureSlash('path')).toBe('/path/')
      expect(Utils.ensureSlash('path/nested')).toBe('/path/nested/')
      expect(Utils.ensureSlash('/path')).toBe('/path/')
      expect(Utils.ensureSlash('/path/nested')).toBe('/path/nested/')
      expect(Utils.ensureSlash('path')).toBe('/path/')
      expect(Utils.ensureSlash('path/nested')).toBe('/path/nested/')
      expect(Utils.ensureSlash('path/')).toBe('/path/')
      expect(Utils.ensureSlash('path/nested/')).toBe('/path/nested/')
      expect(Utils.ensureSlash('path/page.html')).toBe('/path/page.html')
    })
  })

  describe('ensureStartingSlash', () => {
    it('should add slash to the beginning of the given path', () => {
      expect(Utils.ensureStartingSlash('path')).toBe('/path')
      expect(Utils.ensureStartingSlash('path/nested')).toBe('/path/nested')
      expect(Utils.ensureStartingSlash('/path')).toBe('/path')
      expect(Utils.ensureStartingSlash('/path/nested')).toBe('/path/nested')
    })
  })

  describe('ensureEndingSlash', () => {
    it('should add slash to the end of the given path', () => {
      expect(Utils.ensureEndingSlash('path')).toBe('path/')
      expect(Utils.ensureEndingSlash('path/nested')).toBe('path/nested/')
      expect(Utils.ensureEndingSlash('path/')).toBe('path/')
      expect(Utils.ensureEndingSlash('path/nested/')).toBe('path/nested/')
      expect(Utils.ensureEndingSlash('path/page.html')).toBe('path/page.html')
    })
  })

  describe('removeExtention', () => {
    it('removes `.md` or `.html` extention from the path', () => {
      expect(Utils.removeExtention('/')).toBe('/')
      expect(Utils.removeExtention('index')).toBe('/')
      expect(Utils.removeExtention('index.md')).toBe('/')
      expect(Utils.removeExtention('index.html')).toBe('/')
      expect(Utils.removeExtention('/index')).toBe('/')
      expect(Utils.removeExtention('/index.md')).toBe('/')
      expect(Utils.removeExtention('/index.html')).toBe('/')
      expect(Utils.removeExtention('path')).toBe('path')
      expect(Utils.removeExtention('path.md')).toBe('path')
      expect(Utils.removeExtention('path.html')).toBe('path')
      expect(Utils.removeExtention('path/')).toBe('path/')
      expect(Utils.removeExtention('path/nested.md')).toBe('path/nested')
      expect(Utils.removeExtention('path/nested.html')).toBe('path/nested')
      expect(Utils.removeExtention('path/nested/index')).toBe('path/nested/')
    })
  })
})
