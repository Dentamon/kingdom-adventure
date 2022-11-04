// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`320010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000500000004000000000000000000000000000000000000000000000000000000000000000000000004000000000000050101010101000005000000000000000000000000000000000000000000040000000000000000000000000000050001010101000000000001010100000400000000000000000000000000000000000000000000000000040000000501010101010000000000000000000000000000000005000000000000000404000000000000000100000000050000000001010000000000000000000000000000000000000001010100000000000000000005000000000000000501010101010100000000000000000000000000000000000000000000000000000000040005000101010100000500030101010102020202020202020202020202020202020202020202020202020202020202020101010102020202020202010101`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
......................22222.......................
..................2222.....222....................
.............22222................................
.2.........22...................222...............
...222222................................2222.....
2222................................2222.......222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000603000000000000040400000000000001030000000000010101010000010000000000000100000000000000000000000001000000000000000000000000000000010100000000000000000000000000000000000102000000000303000000000000000000070100000400000400000003030000000000010101010101010100000000000300000000000000000000000101000000000000000000000000000101000000010000000000000000010101000000000000010000000100000000000000000000000000010403010000000000000000000000000001010101000000000000000000000000000000000000010000000000000000030000000000010100030000000000000000000101000000000000000005000001000000000000000001020202010202020202020202020202`, img`
................
................
................
................
................
................
...............2
......2222..2...
...2............
2...............
22..............
...2............
.....2..........
......22222222..
...............2
2.............22
...2........222.
.....2...2......
.......2..2.....
........2222....
..............2.
.............22.
..........22....
.......2........
2...2...........
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile7,sprites.dungeon.chestClosed,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.