const { $KubeIcon } = require("@package/dev/latvian/mods/kubejs/client/icon")

PlayerEvents.loggedIn((event) => {
	event.getPlayer().notify({
		text: `Hello, ${event.getPlayer().getName()}`
	})
})

BlockEvents.broken((event) => {
	event.getPlayer().notify({
		text: [
			{
				text: "Hello, "
			},
			/*{
				text: event.getPlayer().getName().getString(),
				color: "white"
			},*/
			event.getPlayer().getName(),
			"\n",
			{
				text: "Welcome to the server!",
				color: "light_gray_dye"
			}
		],
		icon: {
			type: "kubejs:item",
			item: {
				id: "create:wrench"
			}
		}
	})
})