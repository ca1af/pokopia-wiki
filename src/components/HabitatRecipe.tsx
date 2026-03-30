'use client';

/**
 * HabitatRecipe - 서식지 조합 레시피를 시각적으로 보여주는 컴포넌트
 * 아이들이 게임에서 어떤 아이템을 배치해야 하는지 한눈에 알 수 있도록 합니다.
 */

import Image from 'next/image';

/**
 * Mapping from English item names (as used in requiredItemsEn) to image filenames
 * in public/items/. Only items with confirmed images are listed here.
 */
const ITEM_IMAGE_MAP: Record<string, string> = {
  // Nature - Grass
  'Tall Grass': 'tallgrass.png',
  'Dry tall grass': 'drytallgrass.png',
  'Red Tall Grass': 'redtallgrass.png',
  'Yellow Tall Grass': 'yellowtallgrass.png',
  'Pink Tall Grass': 'pinktallgrass.png',
  'Wildflowers': 'wildflowers.png',
  'Mountain Flowers': 'mountainflowers.png',
  'Seashore Flowers': 'seashoreflowers.png',
  'Duckweed': 'duckweed.png',
  'Moss': 'moss.png',
  'Potted Plant': 'pottedplant.png',
  'Chansey Plant': 'chanseyplant.png',

  // Nature - Trees
  'Large Tree': 'largetree.png',
  'Large palm tree': 'largepalmtree.png',
  'Pointy tree': 'pointytree.png',
  'Berry tree': 'berrytree.png',
  'Berry Tree': 'berrytree.png',

  // Nature - Rocks & Water
  'Large Boulder': 'largeboulder.png',
  'Large boulder': 'largeboulder.png',
  'Smooth Rock': 'smoothrock.png',
  'Mossy boulder': 'mossyboulder.png',
  'Stalagmites': 'stalagmites.png',
  'Strength Rock': 'strengthrock.png',
  'Water': 'water.png',
  'Ocean Water': 'oceanwater.png',
  'Ocean water': 'oceanwater.png',
  'Muddy Water': 'muddywater.png',
  'Hot-spring water': 'hotspringwater.png',
  'Hot-Spring Spout': 'hot-springspout.png',
  'Lava': 'lava.png',
  'Molten rock': 'moltenrock.png',
  'Waterfall': 'waterfall.png',
  'Water Basin': 'waterbasin.png',
  'Stepping Stone': 'steppingstones.png',

  // Outdoor & Garden
  'Hedge': 'hedge.png',
  'Garden Table': 'gardentable.png',
  'Garden Chair': 'gardenchair.png',
  'Garden Light': 'gardenlight.png',
  'Wooden Path': 'woodenpath.png',
  'Wooden Birdhouse': 'woodenbirdhouse.png',
  'Wooden Crate': 'woodencrate.png',
  'Walkway': 'walkway.png',
  'Perch': 'perch.png',
  'Post': 'post.png',
  'Sign': 'sign.png',
  'Arrow Sign': 'arrowsign.png',
  'Raichu Sign': 'raichusign.png',
  'Campfire': 'campfire.png',
  'Bonfire': 'bonfire.png',
  'Lantern': 'lantern.png',
  'Streetlight': 'lantern.png',
  'Spotlight': 'spotlight.png',
  'Resort Light': 'resortlight.png',
  'Gravestone': 'gravestone.png',
  'Eerie Candle': 'eeriecandle.png',
  'Slender Candle': 'slendercandle.png',
  'Stone Fireplace': 'stonefireplace.png',
  'Crossing Gate': 'crossinggate.png',
  'Utility Pole': 'utilitypole.png',
  'Railway Track': 'railwaytrack.png',
  'Beach Chair': 'beachchair.png',
  'Beach Parasol': 'beachparasol.png',
  'Folding Chair': 'foldingchair.png',
  'Small Vase': 'smallvase.png',
  'Straw Table': 'strawtable.png',
  'Straw Stool': 'strawstool.png',
  'Straw Bed': 'strawbed.png',

  // Furniture - Tables
  'Table': 'table.png',
  'Table (large)': 'table.png',
  'Plain Table': 'plaintable.png',
  'Side Table': 'sidetable.png',
  'Kitchen Table': 'kitchentable.png',
  'Log Table': 'logtable.png',
  'Iron Table': 'irontable.png',
  'Berry Table': 'berrytable.png',
  'Cute Table': 'cutetable.png',
  'Chic Table': 'chictable.png',
  'Resort Table': 'resorttable.png',
  'Poke Ball Table': 'pokeballtable.png',
  'Counter': 'counter.png',
  'Food Counter': 'foodcounter.png',

  // Furniture - Chairs & Sofas
  'Seat': 'seat.png',
  'Seat (wide)': 'seatwide.png',
  'Simple Cushion': 'simplecushion.png',
  'Plain Sofa': 'plainsofa.png',
  'Log Chair': 'logchair.png',
  'Iron Chair': 'ironchair.png',
  'Berry Chair': 'berrychair.png',
  'Cute Sofa': 'cutesofa.png',
  'Cute Chair': 'cutechair.png',
  'Chic Chair': 'chicchair.png',
  'Chic Sofa': 'chicsofa.png',
  'Resort Sofa': 'resortsofa.png',
  'Pikachu Sofa': 'pikachusofa.png',
  'Poke Ball Sofa': 'pokeballsofa.png',
  'Antique Chair': 'antiquechair.png',
  'Office Chair': 'officechair.png',
  'Industrial Chair': 'industrialchair.png',
  'Gaming Chair': 'gamingchair.png',
  'Resort Hammock': 'resorthammock.png',

  // Furniture - Beds
  'Plain Bed': 'plainbed.png',
  'Log Bed': 'logbed.png',
  'Iron Bed': 'ironbed.png',
  'Cute Bed': 'cutebed.png',
  'Berry Bed': 'berrybed.png',
  'Antique Bed': 'antiquebed.png',
  'Industrial Bed': 'industrialbed.png',
  'Naptime Bed': 'naptimebed.png',
  'Gaming Bed': 'gamingbed.png',
  'Poke Ball Bed': 'pokeballbed.png',
  'Luxury Bed': 'luxurybed.png',
  'Gorgeous Bed': 'luxurybed.png',
  'Pop Bed': 'popartbed.png',

  // Furniture - Storage & Decor
  'Plain Chest': 'plainchest.png',
  'Antique Closet': 'antiquecloset.png',
  'Antique Dresser': 'antiquedresser.png',
  'Cute Dresser': 'cutedresser.png',
  'Office Locker': 'officelocker.png',
  'Office Shelf': 'officeshelf.png',
  'Bookcase': 'bookcase.png',
  'Magazine Rack': 'magazinerack.png',
  'Wall Mirror': 'wallmirror.png',
  'Mirror (Large)': 'largemirror.png',
  'Hanging Scroll': 'hangingscroll.png',
  'Plain Lamp': 'plainlamp.png',
  'Cute Lamp': 'cutelamp.png',
  'Berry Table Lamp': 'berrytablelamp.png',
  'Luxury Lamp': 'luxurylamp.png',
  'Gorgeous Lamp': 'luxurylamp.png',
  'Mushroom Lamp': 'mushroomlamp.png',
  'Poke Ball Light': 'pokeballlight.png',
  'Desk Lamp': 'desklight.png',

  // Furniture - Office & Industrial
  'Office Desk': 'officedesk.png',
  'Industrial Desk': 'industrialdesk.png',
  'Computer': 'computer.png',
  'Laptop': 'laptop.png',
  'Gaming PC': 'gamingpc.png',
  'Gaming Fridge': 'gamingfridge.png',
  'Tablet': 'tablet.png',
  'TV': 'television.png',
  'Whiteboard': 'whiteboard.png',
  'Iron Scaffolding': 'ironscaffolding.png',
  'Iron beam/column': 'ironbeam.png',
  'Jumbled Cords': 'jumbledcords.png',
  'Control Unit': 'controlunit.png',

  // Furniture - Pop & Gorgeous
  'Pop Sofa': 'popartsofa.png',
  'Pop Table': 'poparttable.png',
  'Gorgeous Sofa': 'luxurysofa.png',
  'Gorgeous Table': 'luxurytable.png',

  // Kitchen & Food
  'Bread Oven': 'breadoven.png',
  'Cooking Stove': 'cookingstove.png',
  'Frying Pan': 'fryingpan.png',
  'Cutting Board': 'cuttingboard.png',
  'Pizza': 'pizza.png',
  'Plated food': 'platedfood.png',
  'Ribbon Cake': 'ribboncake.png',
  'Shaved Ice': 'shavedice.png',
  'Afternoon Tea Set': 'afternoonteaset.png',
  'Chocolate Cookie': 'chocolatecookies.png',
  'Menu Board': 'menuboard.png',
  'Mug': 'mug.png',
  'Paper Party Cups': 'paperpartycups.png',
  'Party Platter': 'partyplatter.png',
  'Picnic Basket': 'picnicbasket.png',
  'Berry Basket': 'berrybasket.png',
  'Cash Register': 'cashregister.png',
  'Vending Machine': 'vendingmachine.png',
  'Modern Sink': 'modernsink.png',

  // Tools & Equipment
  'Barrel': 'barrel.png',
  'Cart': 'cart.png',
  'Push Cart': 'pushcart.png',
  'Wheelbarrow': 'wheelbarrow.png',
  'Cardboard Boxes': 'cardboardboxes.png',
  'Garbage Bags': 'garbagebags.png',
  'Garbage Bin': 'garbagebin.png',
  'Metal Drum': 'metaldrum.png',
  'Smelting Furnace': 'smeltingfurnace.png',
  'Furnace Kit': 'furnacekit.png',
  'Shower': 'shower.png',
  'Bathtub': 'bathtub.png',
  'Humidifier': 'humidifier.png',
  'Microscope': 'microscope.png',
  'Excavation Tools': 'excavationtools.png',
  'First Aid Kit': 'firstaidkit.png',
  'Alarm clock': 'alarmclock.png',
  'Newspaper': 'newspaper.png',
  'Exhibition Stand': 'exhibitionstand.png',
  'Bicycle': 'bike.png',
  'Tires': 'tires.png',
  'Tire': 'tires.png',

  // Entertainment
  'Slide': 'slide.png',
  'Small Stage': 'smallstage.png',
  'Canvas': 'canvas.png',
  'Standing Mic': 'standingmic.png',
  'Speaker': 'speaker.png',
  'CD Player': 'cdplayer.png',
  'CD Rack': 'cdrack.png',
  'Cool Electric Guitar': 'coolelectricguitar.png',
  'Arcade Machine': 'arcademachine.png',
  'Punching Bag': 'punchingbag.png',
  'Punching Game': 'punchinggame.png',
  'Sandbags': 'sandbags.png',
  'Photo Cutout Board': 'photocutoutboard.png',

  // Dolls & Toys
  'Pikachu Doll': 'pikachudoll.png',
  'Eevee Doll': 'eeveedoll.png',
  'Arcanine Doll': 'arcaninedoll.png',
  'Dragonite Doll': 'dragonitedoll.png',
  'Toy': 'toy.png',
  'Balloons': 'balloons.png',
  'Boo-In-The-Box': 'boo-in-the-box.png',

  // Special & Misc
  'Crystal Ball': 'crystalball.png',
  'Offering dish': 'offeringdish.png',
  'Cannon': 'cannon.png',
  'Canoe': 'canoe.png',
  'Inflatable Boat': 'inflatableboat.png',
  'Fishing Rod': 'fishingrod.png',
  'Skull Fossil': 'skullfossil.png',
  'Armor Fossil': 'armorfossil.png',
  'Lost relic (large)': 'largelostrelic.png',
  'Castform Weather Charm x2 (Rain)': 'castformweathercharm.png',
  'Castform Weather Charm x2 (Sun)': 'castformweathercharm.png',
  'Windmill Kit': 'windmillkit.png',
  'Waterwheel Kit': 'waterwheelkit.png',
  'Moonlight Dance Statue Kit': 'moonlightdancestatuekit.png',
};

/** Color palette for fallback circles */
const FALLBACK_COLORS = [
  'bg-emerald-200 text-emerald-800',
  'bg-sky-200 text-sky-800',
  'bg-amber-200 text-amber-800',
  'bg-rose-200 text-rose-800',
  'bg-violet-200 text-violet-800',
  'bg-teal-200 text-teal-800',
  'bg-orange-200 text-orange-800',
  'bg-indigo-200 text-indigo-800',
];

function getItemImage(itemEn: string): string | null {
  // Direct lookup
  if (ITEM_IMAGE_MAP[itemEn]) return ITEM_IMAGE_MAP[itemEn];

  // Try stripping quantity suffix like " x4"
  const stripped = itemEn.replace(/\s*x\d+$/, '').trim();
  if (ITEM_IMAGE_MAP[stripped]) return ITEM_IMAGE_MAP[stripped];

  return null;
}

interface HabitatRecipeProps {
  items: string[];
  itemsEn: string[];
}

export function HabitatRecipe({ items, itemsEn }: HabitatRecipeProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-xl border-2 border-dashed border-border bg-muted/20 p-8 text-center">
        <p className="text-muted-foreground">조합 레시피 정보를 조사 중입니다</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-gradient-to-b from-green-50 to-emerald-50/30 p-6 dark:from-green-950/20 dark:to-emerald-950/10">
      <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-muted-foreground">
        이렇게 배치하세요!
      </h3>

      {/* 아이템 카드 그리드 */}
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item, i) => {
          // Parse quantity from item name (e.g., "초록풀×4" -> "초록풀", "4")
          const match = item.match(/^(.+?)×(\d+)$/);
          const name = match ? match[1] : item;
          const qty = match ? parseInt(match[2]) : 1;

          // Try to get the item image
          const enName = itemsEn[i] || '';
          const imageFile = getItemImage(enName);
          const fallbackColor = FALLBACK_COLORS[i % FALLBACK_COLORS.length];

          return (
            <div
              key={i}
              className="group relative flex flex-col items-center gap-1.5 rounded-xl bg-white p-3 shadow-sm border border-border/50 transition-all hover:shadow-md hover:scale-105 dark:bg-card min-w-[90px]"
            >
              {/* 아이템 이미지 또는 폴백 */}
              {imageFile ? (
                <div className="relative h-10 w-10">
                  <Image
                    src={`/items/${imageFile}`}
                    alt={enName}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${fallbackColor} text-base font-bold`}>
                  {name.charAt(0)}
                </div>
              )}

              {/* 수량 뱃지 */}
              {qty > 1 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow">
                  ×{qty}
                </span>
              )}

              {/* 아이템 이름 */}
              <span className="text-center text-xs font-medium text-card-foreground leading-tight">
                {name}
              </span>

              {/* 영어 이름 */}
              {itemsEn[i] && (
                <span className="text-center text-[10px] text-muted-foreground leading-tight">
                  {itemsEn[i]}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* 플러스 기호로 연결 */}
      <div className="mt-4 flex justify-center">
        <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <span>👆</span>
          <span>위 아이템들을 가까이 배치하면 서식지 완성!</span>
        </div>
      </div>
    </div>
  );
}
