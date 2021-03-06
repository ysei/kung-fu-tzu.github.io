window.onload = function ()
{
	// its all about deferred loading of the statistic stuff
	
	function include (src)
	{
		var me = arguments.callee
		var cache = me.cache || (me.cache = {})
		if (me.cache[src])
			return me.cache[src]
		var node = document.createElement('script')
		node.type = 'text/javascript'
		node.src = src
		document.getElementsByTagName('head')[0].appendChild(node)
		cache[src] = node
		return node
	}
	
	function count (e)
	{
		if (!window.Ya || !window._gat)
			return
		
		clearInterval(timer)
		
		try { new Ya.Metrika(602975) } catch (ex) {}
		try { _gat._getTracker('UA-4385386-2')._trackPageview() } catch (ex) {}
	}
	
	var timer = setInterval(count, 500)
	
	function load ()
	{
		include('http://mc.yandex.ru/metrika/watch.js')
		include('http://www.google-analytics.com/ga.js')
	}
	
	setTimeout(load, 1000)
}