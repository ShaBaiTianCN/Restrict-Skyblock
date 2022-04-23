console.info('Registering custom Restrict Skyblock items and blocks')

onEvent('item.registry', event => {
  event.create('mining_key').displayName('Mining Key')
  event.create('nether_key').displayName('Nether Key')
  event.create('end_key').displayName('End Key')
  event.create('final_key').displayName('Final Key')
})

onEvent('block.registry', event => {
  event.create('mining_wall').material('rock').hardness(-1).displayName('Mining Wall')
  event.create('nether_wall').material('rock').hardness(-1).displayName('Nether Wall')
  event.create('end_wall').material('rock').hardness(-1).displayName('End Wall')
  event.create('final_wall').material('rock').hardness(-1).displayName('Final Wall')
  event.create('sphere_wall').material('rock').hardness(-1).displayName('Unbreakable Sphere Block')
  event.create('cobble_white').material('rock').hardness(2).displayName('White Block').harvestTool('pickaxe', 0).requiresTool(true)
})

events.listen('fluid.registry', event => { 
  event.create('slush').textureThick(0xF0FFFF).displayName('Slush').bucketColor(0xF0FFFF)
  event.create('carnage').textureThick(0xCD0000).displayName('Carnage').bucketColor(0xCD0000)
  event.create('meat_stew').textureThick(0x8B2323).displayName('Meat Stew').bucketColor(0x8B2323)
})