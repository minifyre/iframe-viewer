import silo from './node_modules/silo/index.js'
import truth from './node_modules/truth/truth.mjs'
import v from './node_modules/v/v.mjs'

const {config,util,logic,output,input}=silo

export default silo(async function iframe(url='/node_modules/iframe-viewer/')
{
	await util.mkCustomEl(url,'iframe-viewer',iframe.viewer)
})
iframe.viewer=class extends silo.customElement
{
	constructor(state)
	{
		super(state,silo)
	}
}