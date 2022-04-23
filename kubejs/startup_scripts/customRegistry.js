console.info('Registering custom Restrict Skyblock items and blocks')

onEvent('item.registry', event => {
  event.create('mining_key').displayName('采矿钥匙')
  event.create('nether_key').displayName('下界钥匙')
  event.create('end_key').displayName('末地钥匙')
  event.create('final_key').displayName('最终钥匙')
})

onEvent('block.registry', event => {
  event.create('mining_wall').material('rock').hardness(-1).displayName('采矿墙')
  event.create('nether_wall').material('rock').hardness(-1).displayName('下界墙')
  event.create('end_wall').material('rock').hardness(-1).displayName('末地墙')
  event.create('final_wall').material('rock').hardness(-1).displayName('最终墙')
  event.create('sphere_wall').material('rock').hardness(-1).displayName('无法破坏的球体方块')
  event.create('cobble_white').material('rock').hardness(2).displayName('白色方块').harvestTool('pickaxe', 0).requiresTool(true)
})

events.listen('fluid.registry', event => { 
  event.create('slush').textureThick(0xF0FFFF).displayName('雪泥').bucketColor(0xF0FFFF)
  event.create('carnage').textureThick(0xCD0000).displayName('屠宰液').bucketColor(0xCD0000)
  event.create('meat_stew').textureThick(0x8B2323).displayName('炖肉浓汤').bucketColor(0x8B2323)
})