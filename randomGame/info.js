document.getElementById("bt").addEventListener("click", nextGame);
document.getElementById("btshow").addEventListener("click", show);
document.getElementById("btsave").addEventListener("click", save);

let indexRandomGame = 0;



function save(){

    localStorage.setItem(indexRandomGame, JSON.stringify(title.innerText));
    
}

function show(){
    // const storedBlogs = window.localStorage.getItem(indexRandomGame);
    // document.getElementById("info").innerText = localStorage.getItem(indexRandomGame);
    // localStorage.getItem(indexRandomGame);
    document.getElementById("info").innerText = '';
    for (var i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
    
        document.getElementById("info").innerText += value + "\n";
       
      }
    
    
}



function nextGame(){
    const posterElement = document.getElementById('poster');
    let title = document.getElementById('title');

    indexRandomGame = Math.floor(Math.random()*100);
    let randomGame = games[indexRandomGame]

    posterElement.src = randomGame.posterUrl;
    title.innerText = randomGame.name;
}

games = [
    {
        "name": "The Legend of Zelda: Ocarina of Time",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/70c7a7d5ef1a36a69018111cc1478f30-98.jpg"
    },
    {
        "name": "Tony Hawk's Pro Skater 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/eebb2509d46dbd97c612f634270d37dd-98.jpg"
    },
    {
        "name": "Grand Theft Auto IV",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/d08ab1308780df8de1d75badb951c60a-98.jpg"
    },
    {
        "name": "SoulCalibur",
        "posterUrl": "https://static.metacritic.com/images/products/games/1/a62a50a3f751819b94f0f922619c6b95-98.jpg"
    },
    {
        "name": "Grand Theft Auto IV",
        "posterUrl": "https://static.metacritic.com/images/products/games/3/78b2451531891db4396d873d82accbeb-98.jpg"
    },
    {
        "name": "Super Mario Galaxy",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/2fe120b980872297a7a17ab582f6af7d-98.jpg"
    },
    {
        "name": "Super Mario Galaxy 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/7/96ee04660e2b430798eae4f59d9bdeb2-98.jpg"
    },
    {
        "name": "Red Dead Redemption 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/24fbb5ce1d84f499b1fb0cf2c483287c-98.jpg"
    },
    {
        "name": "Grand Theft Auto V",
        "posterUrl": "https://static.metacritic.com/images/products/games/1/7f10462040718b3054c52f7791cf1c77-98.jpg"
    },
    {
        "name": "Grand Theft Auto V",
        "posterUrl": "https://static.metacritic.com/images/products/games/5/399bb685cc7f747a3b39a35acb5dc5de-98.jpg"
    },
    {
        "name": "Disco Elysium: The Final Cut",
        "posterUrl": "https://static.metacritic.com/images/products/games/6/e3879329612427aca58cb5b7c7ab9818-98.jpg"
    },
    {
        "name": "Grand Theft Auto V",
        "posterUrl": "https://static.metacritic.com/images/products/games/6/a03025b77dabe0980c17c6a3c8f540ae-98.jpg"
    },
    {
        "name": "Tony Hawk's Pro Skater 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/0/3d40880e41d0c8cd6732242de27d5cb2-98.jpg"
    },
    {
        "name": "The Legend of Zelda: Breath of the Wild",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/6d163aaa6b6cc28519ffea9195649929-98.jpg"
    },
    {
        "name": "Tony Hawk's Pro Skater 3",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/38c2011309e2cee4e5ae373456d5730b-98.jpg"
    },
    {
        "name": "Perfect Dark",
        "posterUrl": "https://static.metacritic.com/images/products/games/1/e064722d2d4521cb762502a48691e070-98.jpg"
    },
    {
        "name": "Red Dead Redemption 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/8/f5b1cbf43a118c429f67022f9e93b41d-98.jpg"
    },
    {
        "name": "Grand Theft Auto V",
        "posterUrl": "https://static.metacritic.com/images/products/games/7/a149682ad949afdce7d25ee90d0ef848-98.jpg"
    },
    {
        "name": "Metroid Prime",
        "posterUrl": "https://static.metacritic.com/images/products/games/6/319fee49d72c25208b5dc3d8ae65f84e-98.jpg"
    },
    {
        "name": "Grand Theft Auto III",
        "posterUrl": "https://static.metacritic.com/images/products/games/3/227b480f073b1c0ffba8b7a6dc79a453-98.jpg"
    },
    {
        "name": "Super Mario Odyssey",
        "posterUrl": "https://static.metacritic.com/images/products/games/0/95d6598e9d4f35b872429b25d2d044d0-98.jpg"
    },
    {
        "name": "Halo: Combat Evolved",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/608a28ac37e2b3fc92291ca176867f67-98.jpg"
    },
    {
        "name": "NFL 2K1",
        "posterUrl": "https://static.metacritic.com/images/products/games/4/18d735e823ff5b4bb6568596e3b902dc-98.jpg"
    },
    {
        "name": "Half-Life 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/8/3154ea81c0d3578b829a6640ac5ecfe7-98.jpg"
    },
    {
        "name": "Grand Theft Auto V",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/bab786f634eee57a1c68be2dddf3d1e5-98.jpg"
    },
    {
        "name": "The Legend of Zelda: Breath of the Wild",
        "posterUrl": "https://static.metacritic.com/images/products/games/1/fa623f980d44795931b47cee835b1e9e-98.jpg"
    },
    {
        "name": "BioShock",
        "posterUrl": "https://static.metacritic.com/images/products/games/8/beb94c19496b1e7b633f7bf7285f42ea-98.jpg"
    },
    {
        "name": "GoldenEye 007",
        "posterUrl": "https://static.metacritic.com/images/products/games/7/31a33b1d22da218508d3962b8c227f9c-98.jpg"
    },
    {
        "name": "Uncharted 2: Among Thieves",
        "posterUrl": "https://static.metacritic.com/images/products/games/5/bcd9564959c78dc1f80bb54950bda4ec-98.jpg"
    },
    {
        "name": "Resident Evil 4",
        "posterUrl": "https://static.metacritic.com/images/products/games/5/435703cf4e3b925b9a7cfea3d78d4b95-98.jpg"
    },
    {
        "name": "The Orange Box",
        "posterUrl": "https://static.metacritic.com/images/products/games/5/a1e86e73c40d4ce70191b86ccbf9295f-98.jpg"
    },
    {
        "name": "The Orange Box",
        "posterUrl": "https://static.metacritic.com/images/products/games/5/cf1e9a839c0b223409d505c354dfe59b-98.jpg"
    },
    {
        "name": "Batman: Arkham City",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/eda8575517197b9f2e2ae7d2cbd8ce28-98.jpg"
    },
    {
        "name": "Portal Companion Collection",
        "posterUrl": "https://static.metacritic.com/images/products/games/0/0fd9dd168f28144ddfc481f6299eeaf6-98.jpg"
    },
    {
        "name": "Tekken 3",
        "posterUrl": "https://static.metacritic.com/images/products/games/0/fd71737a311c55b0bf05a3e9ecbc1653-98.jpg"
    },
    {
        "name": "Elden Ring",
        "posterUrl": "https://static.metacritic.com/images/products/games/6/c900d44c97dfd16cc1fb1a08f7e5813e-98.jpg"
    },
    {
        "name": "Mass Effect 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/7178937e2ea07ddd2ae3e46bdf746dc7-98.jpg"
    },
    {
        "name": "The House in Fata Morgana - Dreams of the Revenants Edition -",
        "posterUrl": "https://static.metacritic.com/images/products/games/3/f4af18f409aae2c0ca6ba733e0eb50bf-98.jpg"
    },
    {
        "name": "The Legend of Zelda: Twilight Princess",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/2291fd278c02e177f572a8dda8a09f1f-98.jpg"
    },
    {
        "name": "Elden Ring",
        "posterUrl": "https://static.metacritic.com/images/products/games/7/cf21bb68e9006d17f7b7bff4cdafe6f6-98.jpg"
    },
    {
        "name": "The Elder Scrolls V: Skyrim",
        "posterUrl": "https://static.metacritic.com/images/products/games/5/3239d08e358b28f67cc70d0d41a9b2db-98.jpg"
    },
    {
        "name": "Half-Life",
        "posterUrl": "https://static.metacritic.com/images/products/games/5/5764f80ddd3e67da3b29eb759e8a4737-98.jpg"
    },
    {
        "name": "Resident Evil 4",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/1b1a9d67d4ef046b5320670c890849cb-98.jpg"
    },
    {
        "name": "The Legend of Zelda: The Wind Waker",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/c4c9d1e723bdedc5a5a8795b3d289299-98.jpg"
    },
    {
        "name": "Gran Turismo",
        "posterUrl": "https://static.metacritic.com/images/products/games/8/dea46d06f8c66a24ada212f4f9b0d710-98.jpg"
    },
    {
        "name": "BioShock",
        "posterUrl": "https://static.metacritic.com/images/products/games/4/6e40cbab3978d4fe0c1390f8b46f23cc-98.jpg"
    },
    {
        "name": "Metal Gear Solid 2: Sons of Liberty",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/20c772e77d9728b33faace026d13f835-98.jpg"
    },
    {
        "name": "Grand Theft Auto Double Pack",
        "posterUrl": "https://static.metacritic.com/images/products/games/4/5f9a719ed9b81c375c57aa8a8b5bbb5e-98.jpg"
    },
    {
        "name": "Baldur's Gate II: Shadows of Amn",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/fee92d54ce517ca92f49122771fd4aa5-98.jpg"
    },
    {
        "name": "Grand Theft Auto: San Andreas",
        "posterUrl": "https://static.metacritic.com/images/products/games/6/1336a2d42299de601351bd802152440c-98.jpg"
    },
    {
        "name": "Persona 5 Royal",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/c16caf7c23f604f602a45024889fb4a9-98.jpg"
    },
    {
        "name": "Grand Theft Auto: Vice City",
        "posterUrl": "https://static.metacritic.com/images/products/games/8/a051e01269f5e5ce7159b9d189618a7d-98.jpg"
    },
    {
        "name": "LittleBigPlanet",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/7c8510a3ca7ac878e48304ad5fe52fbb-98.jpg"
    },
    {
        "name": "The Legend of Zelda Collector's Edition",
        "posterUrl": "https://static.metacritic.com/images/products/games/1/b752da9ceb16a38ced912d788267c929-98.jpg"
    },
    {
        "name": "Red Dead Redemption",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/a79df5c46863517adc95c787d668149e-98.jpg"
    },
    {
        "name": "Gran Turismo 3: A-Spec",
        "posterUrl": "https://static.metacritic.com/images/products/games/4/b88c306c53289d8c99b7d6a93d5ac4e1-98.jpg"
    },
    {
        "name": "Halo 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/5/0bc9de91c1ea552966f25a5c10e8179f-98.jpg"
    },
    {
        "name": "The Legend of Zelda: A Link to the Past",
        "posterUrl": "https://static.metacritic.com/images/products/games/8/e3de1753570b889cc3f3742191dd6af3-98.jpg"
    },
    {
        "name": "The Legend of Zelda: Majora's Mask",
        "posterUrl": "https://static.metacritic.com/images/products/games/1/d3ab93207df2def4a5d7f60a3a16a35c-98.jpg"
    },
    {
        "name": "The Last of Us",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/18523f08edc05b0a344edf5f6e6f49d3-98.jpg"
    },
    {
        "name": "The Legend of Zelda: Twilight Princess",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/0c945776f87b847d4d322c1e02e5fa95-98.jpg"
    },
    {
        "name": "Madden NFL 2003",
        "posterUrl": "https://static.metacritic.com/images/products/games/4/8db3e5281c1278fa0a62e7feefff0aa6-98.jpg"
    },
    {
        "name": "Tony Hawk's Pro Skater 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/8/46d1467ea09a779ef6500471e7a11c38-98.jpg"
    },
    {
        "name": "Persona 5 Royal",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/1d340c792338fa16de96bd8b60d3cab5-98.jpg"
    },
    {
        "name": "The Last of Us Remastered",
        "posterUrl": "https://static.metacritic.com/images/products/games/6/dcb5d2f7d2f23d0d4aa8fd809af6b12e-98.jpg"
    },
    {
        "name": "Portal 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/8/8ebc9aa5758d569f33e543d9fb629545-98.jpg"
    },
    {
        "name": "Red Dead Redemption",
        "posterUrl": "https://static.metacritic.com/images/products/games/1/1aba85e322bb75caf4fcc3f15528963e-98.jpg"
    },
    {
        "name": "Portal 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/79841223c9df97d146152dab6ad135ec-98.jpg"
    },
    {
        "name": "Metal Gear Solid V: The Phantom Pain",
        "posterUrl": "https://static.metacritic.com/images/products/games/6/b6604eade078dd9167f2ed683a00fb62-98.jpg"
    },
    {
        "name": "Portal 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/0/882c6aa262652fa072560624e0d9d96b-98.jpg"
    },
    {
        "name": "Tetris Effect: Connected",
        "posterUrl": "https://static.metacritic.com/images/products/games/0/0110e08a82b38913f52f9b65c8380dc1-98.jpg"
    },
    {
        "name": "World of Goo",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/6ce015a2c6528ab4e62d0704297db70e-98.jpg"
    },
    {
        "name": "The Elder Scrolls V: Skyrim",
        "posterUrl": "https://static.metacritic.com/images/products/games/7/5988ee04196a686e107b46174f94a3ae-98.jpg"
    },
    {
        "name": "BioShock Infinite",
        "posterUrl": "https://static.metacritic.com/images/products/games/6/841b8d4d89581b2e289906f5e7536213-98.jpg"
    },
    {
        "name": "Final Fantasy IX",
        "posterUrl": "https://static.metacritic.com/images/products/games/8/2dc9a8dc7361425ed3cb3868d2a552c3-98.jpg"
    },
    {
        "name": "Call of Duty: Modern Warfare 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/7b8e5f3e8d0991c5314cdc4d37b8b041-98.jpg"
    },
    {
        "name": "God of War",
        "posterUrl": "https://static.metacritic.com/images/products/games/8/452903806353a11fbecc0089ac94ef13-98.jpg"
    },
    {
        "name": "Tony Hawk's Pro Skater 4",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/0af941658097bb22888c8385b3b27ca0-98.jpg"
    },
    {
        "name": "Devil May Cry",
        "posterUrl": "https://static.metacritic.com/images/products/games/4/e80ce3e272d0176ba2c7686f9de5b5b1-98.jpg"
    },
    {
        "name": "Call of Duty 4: Modern Warfare",
        "posterUrl": "https://static.metacritic.com/images/products/games/3/4e5f0e4a6bb9bf71c5e2f1d8e398e219-98.jpg"
    },
    {
        "name": "Madden NFL 2002",
        "posterUrl": "https://static.metacritic.com/images/products/games/5/bade80b25fd38bb88392c0b49ac8f678-98.jpg"
    },
    {
        "name": "Batman: Arkham City",
        "posterUrl": "https://static.metacritic.com/images/products/games/1/b707e552149fd03b161be6ec73b94935-98.jpg"
    },
    {
        "name": "Persona 5 Royal",
        "posterUrl": "https://static.metacritic.com/images/products/games/0/c9c8d46573b2620e2188c0efcfe8673a-98.jpg"
    },
    {
        "name": "Mass Effect 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/1/e2a90286a8a5a8d39aede79430f56575-98.jpg"
    },
    {
        "name": "The Legend of Zelda: Ocarina of Time 3D",
        "posterUrl": "https://static.metacritic.com/images/products/games/0/4b6d1d1a1f09f9feb540f1337278a155-98.jpg"
    },
    {
        "name": "Chrono Cross",
        "posterUrl": "https://static.metacritic.com/images/products/games/1/4d458337d5127394cea7b9f8b444d8f2-98.jpg"
    },
    {
        "name": "Celeste",
        "posterUrl": "https://static.metacritic.com/images/products/games/7/c2d4b3e49ee25930e854dcd662411520-98.jpg"
    },
    {
        "name": "BioShock",
        "posterUrl": "https://static.metacritic.com/images/products/games/9/b0e29872db264f3793559037aed1527b-98.jpg"
    },
    {
        "name": "Mass Effect 2",
        "posterUrl": "https://static.metacritic.com/images/products/games/0/45fa44d3386c1d7144d3599a7364bd36-98.jpg"
    },
    {
        "name": "Grand Theft Auto: Vice City",
        "posterUrl": "https://static.metacritic.com/images/products/games/4/a11e316b5dce587c8664323b4fd3230e-98.jpg"
    },
    {
        "name": "God of War: Ragnarok",
        "posterUrl": "https://static.metacritic.com/images/products/games/4/f475a29eab99cd7823b8cf860df11335-98.jpg"
    },
    {
        "name": "Madden NFL 2004",
        "posterUrl": "https://static.metacritic.com/images/products/games/7/511dce1d2f29806ff6d85441be83eac7-98.jpg"
    },
    {
        "name": "Gears of War",
        "posterUrl": "https://static.metacritic.com/images/products/games/5/4e6253bf2efe800e05d4c2270a52a674-98.jpg"
    },
    {
        "name": "The Elder Scrolls IV: Oblivion",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/180b7a5751235c7f2322eb652070c833-98.jpg"
    },
    {
        "name": "Persona 5 Royal",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/f6bdfc45e376d1a9d53a44d531e64ab1-98.jpg"
    },
    {
        "name": "Sid Meier's Civilization II",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/a316dd672da65f4bec1495e9078467e7-98.jpg"
    },
    {
        "name": "Quake",
        "posterUrl": "https://static.metacritic.com/images/products/games/3/019b99bac78077f18f055b1c4019c0c7-98.jpg"
    },
    {
        "name": "Call of Duty 4: Modern Warfare",
        "posterUrl": "https://static.metacritic.com/images/products/games/2/4c04508ffbb8d2f01fc7abc652f6d53d-98.jpg"
    },
    {
        "name": "BioShock Infinite",
        "posterUrl": "https://static.metacritic.com/images/products/games/8/d6db22b96a880fa7fb6d577591e181e2-98.jpg"
    },
    {
        "name": "Halo 3",
        "posterUrl": "https://static.metacritic.com/images/products/games/6/23421b773cd4739a8a3c4e064fc93d9f-98.jpg"
    }
]


