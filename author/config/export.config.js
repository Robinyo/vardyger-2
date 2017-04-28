// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
module.exports = {
  copyAuthorManifest: {
	src: ['{{ROOT}}/src/manifest.json', '{{ROOT}}/src/service-worker.js'],
	dest: '{{ROOT}}/../ui.content/src/main/resources/jcr_root/etc/author'
  }
}