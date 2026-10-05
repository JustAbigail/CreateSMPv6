/* const metals = [
	"zinc",
	"copper",
	"iron",
	"gold",
	"nickel",
	"lead",
	"aluminum",
	"tin"
]

const stages = [
	"loose",
	"cleaned",
	"purified"
]

const nuggets = [
	"lead",
	"aluminum",
	"nickel"
]

const shards = [
	"emerald",
	"lapis"
]

StartupEvents.registry("item", event => {
	metals.forEach(metal => {
		stages.forEach(stage => {
			event.create(`ore/${metal}/${stage}`)
				.texture(`kubejs:item/ore/${metal}/${stage}`)
				.translationKey(`item.kubejs.ore.${metal}.${stage}`)
		})
	})
	nuggets.forEach(nugget => event.create(`${nugget}_nugget`)
		.texture(`kubejs:item/${nugget}_nugget`)
		.translationKey(`item.kubejs.${nugget}_nugget`)
	)
	shards.forEach(shard => event.create(`${shard}_shard`)
		.texture(`kubejs:item/${shard}_shard`)
		.translationKey(`item.kubejs.${shard}_shard`)
	)
	event.create("crushed_slag")
		.texture("kubejs:item/crushed_slag")
		.translationKey("item.kubejs.crushed_slag")
})

StartupEvents.registry("fluid", event => {
	event.create("byproduct_slurry")
		.thinTexture(0x1f3769)
		.translationKey("fluid.kubejs.byproduct_slurry")
	
	event.create("impure_sulfuric_acid")
		.thinTexture(0xa6a59a)
		.translationKey("fluid.kubejs.impure_sulfuric_acid")

	event.create("molten_metal/cincinnasite")
		.thickTexture(0xFCCA76)
		.translationKey("fluid.kubejs.molten_metal.cincinnasite")

	event.create("molten_metal/thallasium")
		.thickTexture(0x87DAD2)
		.translationKey("fluid.kubejs.molten_metal.thallasium")

	event.create("molten_metal/terminite")
		.thickTexture(0x70F0E5)
		.translationKey("fluid.kubejs.molten_metal.terminite")

	event.create("molten_metal/aeternium")
		.thickTexture(0x93A3A3)
		.translationKey("fluid.kubejs.molten_metal.aeternium")
})
*/