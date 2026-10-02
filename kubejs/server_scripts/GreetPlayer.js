const { $KubeIcon } = require("@package/dev/latvian/mods/kubejs/client/icon")

PlayerEvents.loggedIn((event) => {
	event.getPlayer().notify({
		text: `Hello, ${event.getPlayer().getName()}`,


	})
})

BlockEvents.broken((event) => {
	event.getPlayer().notify({
		text: "1st line\n2nd line",
		icon: {
			item: Item.of("aeronautics:adjustable_burner")
		},
		duration: 20
	})
})