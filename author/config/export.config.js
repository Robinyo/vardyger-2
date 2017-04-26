// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
module.exports = {
  copyAuthorAssets: {
    src: ['{{WWW}}/assets/**/*'],
    dest: '{{ROOT}}/../ui.content/src/main/resources/jcr_root/etc/author/assets'
  },
  copyAuthorBuild: {
	src: ['{{WWW}}/build/**/*'],
	dest: '{{ROOT}}/../ui.content/src/main/resources/jcr_root/etc/author/build'
  },
  copyAuthorManifest: {
	src: ['{{WWW}}/manifest.json', '{{WWW}}/service-worker.js'],
    dest: '{{ROOT}}/../ui.content/src/main/resources/jcr_root/etc/author'
  }
}