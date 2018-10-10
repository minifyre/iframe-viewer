import silo from './node_modules/pane-viewer/index.mjs'
const
{config,input,logic,util}=silo,
{truth,v}=util
export default async function iframe(url='/node_modules/iframe-viewer/')
{

	await silo(url,'iframe-viewer',iframe.viewer)
}
iframe.viewer=class extends silo.viewer
{
	constructor(state)
	{
		super()
		let renderer=x=>x
		this.state=truth(logic(state),(...args)=>renderer(args))
		renderer=v.render(this.shadowRoot,this,output)
	}
}
config.state=
{
	file:
	{
		value:'<!Doctype html>\n<h1>Hello!</h1>'
	},
	type:'iframe-viewer'
}
function output(viewer)
{
	const
	{state}=viewer,
	on={render:({target})=>output.render(state,target)}

	return [v('style',{},config.css),
		v('header',{},
			v('button.back',{},'<'),
			v('button.refresh',{},'o'),
			v('button.forward',{},'>'),
			v('input.address-bar')
		),
		v('iframe',{data:{modified:state.file.modified},on})
	]
}
output.render=function(state,{contentWindow})
{
	if(!contentWindow) return//not attatched to dom
	const {document:doc}=contentWindow

	doc.open('text/html')
	doc.write(state.file.value)
	doc.close()
}
Object.assign(iframe,silo)