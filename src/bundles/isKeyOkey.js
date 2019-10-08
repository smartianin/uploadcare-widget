import { detailedDiff } from 'deep-object-diff'

const isKeyOkey = part => Object.keys(part).filter(key => !key.startsWith('_')).length === 0
const isOkey = (diff) => isKeyOkey(diff.added) && isKeyOkey(diff.deleted)

export const compare = (oldVerison, newVersion, name) => {
  let nsOld = null
  oldVerison.plugin(ns => (nsOld = ns))

  let nsNew = null
  newVersion.plugin(ns => (nsNew = ns))

  const ucDiff = detailedDiff(oldVerison, newVersion)
  const ncDiff = detailedDiff(nsOld, nsNew)

  console.log('COMPARE ', name)
  console.log('')
  console.log('exports diff is ', isOkey(ucDiff) ? 'okey' : 'not okey')
  console.log('exports diff: ', ucDiff)
  console.log('')
  console.log('namespace diff: ', isOkey(ncDiff) ? 'okey' : 'not okey')
  console.log('namespace diff: ', ncDiff)
  console.log('')
  console.log('')
}
