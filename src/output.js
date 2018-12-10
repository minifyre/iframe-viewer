output.render=function(viewer)
{
	const
	{state}=viewer,
	on={render:({target})=>silo.output.reload(state,target)}

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
output.reload=function(state,{contentWindow})
{
	if(!contentWindow) return//not attatched to dom
	const {document:doc}=contentWindow

	doc.open('text/html')
	doc.write(state.file.value)
	doc.close()
}