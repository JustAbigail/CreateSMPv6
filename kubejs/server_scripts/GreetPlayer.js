PlayerEvents.loggedIn((event) => {
	event.getPlayer().notify({
		text: `Hello, ${event.getPlayer().getName()}`,


	})
})

BlockEvents.broken((event) => {
	event.getPlayer().notify({
		text: "1st line \n 2nd line" 	
	})
})