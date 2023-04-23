(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
                return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

bingoGenerator = function(bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;

    // The original SRL generators were written with 1-indexed difficuty tiers.
    // If we get a goal list that is 0-indexed, hack it to be 1-indexed instead.
    if (bingoList.length === 25) {
        var originalBingoList = bingoList;
        bingoList = [undefined].concat(originalBingoList);  // filler value for index 0
    }

    if (true) {
        Math.seedrandom(SEED);
        var MAX_SEED = 999999;

        var lineCheckList = [];
        if (size == 5) {
            lineCheckList[1] = [1, 2, 3, 4, 5, 10, 15, 20, 6, 12, 18, 24];
            lineCheckList[2] = [0, 2, 3, 4, 6, 11, 16, 21];
            lineCheckList[3] = [0, 1, 3, 4, 7, 12, 17, 22];
            lineCheckList[4] = [0, 1, 2, 4, 8, 13, 18, 23];
            lineCheckList[5] = [0, 1, 2, 3, 8, 12, 16, 20, 9, 14, 19, 24];
            lineCheckList[6] = [0, 10, 15, 20, 6, 7, 8, 9];
            lineCheckList[7] = [0, 12, 18, 24, 5, 7, 8, 9, 1, 11, 16, 21];
            lineCheckList[8] = [5, 6, 8, 9, 2, 12, 17, 22];
            lineCheckList[9] = [4, 12, 16, 20, 9, 7, 6, 5, 3, 13, 18, 23];
            lineCheckList[10] = [4, 14, 19, 24, 8, 7, 6, 5];
            lineCheckList[11] = [0, 5, 15, 20, 11, 12, 13, 14];
            lineCheckList[12] = [1, 6, 16, 21, 10, 12, 13, 14];
            lineCheckList[13] = [0, 6, 12, 18, 24, 20, 16, 8, 4, 2, 7, 17, 22, 10, 11, 13, 14];
            lineCheckList[14] = [3, 8, 18, 23, 10, 11, 12, 14];
            lineCheckList[15] = [4, 9, 19, 24, 10, 11, 12, 13];
            lineCheckList[16] = [0, 5, 10, 20, 16, 17, 18, 19];
            lineCheckList[17] = [15, 17, 18, 19, 1, 6, 11, 21, 20, 12, 8, 4];
            lineCheckList[18] = [15, 16, 18, 19, 2, 7, 12, 22];
            lineCheckList[19] = [15, 16, 17, 19, 23, 13, 8, 3, 24, 12, 6, 0];
            lineCheckList[20] = [4, 9, 14, 24, 15, 16, 17, 18];
            lineCheckList[21] = [0, 5, 10, 15, 16, 12, 8, 4, 21, 22, 23, 24];
            lineCheckList[22] = [20, 22, 23, 24, 1, 6, 11, 16];
            lineCheckList[23] = [2, 7, 12, 17, 20, 21, 23, 24];
            lineCheckList[24] = [20, 21, 22, 24, 3, 8, 13, 18];
            lineCheckList[25] = [0, 6, 12, 18, 20, 21, 22, 23, 19, 14, 9, 4];
        }

        function mirror(i) {
            if (i == 0) {
                i = 4;
            } else if (i == 1) {
                i = 3;
            } else if (i == 3) {
                i = 1;
            } else if (i == 4) {
                i = 0;
            }
            return i;
        }

        function difficulty(i) {
            var Num3 = SEED % 1000;
            var Rem8 = Num3 % 8;
            var Rem4 = Math.floor(Rem8 / 2);
            var Rem2 = Rem8 % 2;
            var Rem5 = Num3 % 5;
            var Rem3 = Num3 % 3;
            var RemT = Math.floor(Num3 / 120);
            var Table5 = [0];
            Table5.splice(Rem2, 0, 1);
            Table5.splice(Rem3, 0, 2);
            Table5.splice(Rem4, 0, 3);
            Table5.splice(Rem5, 0, 4);
            Num3 = Math.floor(SEED / 1000);
            Num3 = Num3 % 1000;
            Rem8 = Num3 % 8;
            Rem4 = Math.floor(Rem8 / 2);
            Rem2 = Rem8 % 2;
            Rem5 = Num3 % 5;
            Rem3 = Num3 % 3;
            RemT = RemT * 8 + Math.floor(Num3 / 120);
            var Table1 = [0];
            Table1.splice(Rem2, 0, 1);
            Table1.splice(Rem3, 0, 2);
            Table1.splice(Rem4, 0, 3);
            Table1.splice(Rem5, 0, 4);
            i--;
            RemT = RemT % 5;
            x = (i + RemT) % 5;
            y = Math.floor(i / 5);
            var e5 = Table5[(x + 3 * y) % 5];
            var e1 = Table1[(3 * x + y) % 5];
            value = 5 * e5 + e1;
            if (MODE == "short") {
                value = Math.floor(value / 2);
            } else if (MODE == "long") {
                value = Math.floor((value + 25) / 2);
            }
            value++;
            return value;
        }

        function checkLine(i, typesA) {
            var synergy = 0;
            for (var j = 0; j < lineCheckList[i].length; j++) {
                var typesB = bingoBoard[lineCheckList[i][j] + 1].types;
                if (typeof typesA != 'undefined' && typeof typesB != 'undefined') {
                    for (var k = 0; k < typesA.length; k++) {
                        for (var l = 0; l < typesB.length; l++) {
                            if (typesA[k] == typesB[l]) {
                                synergy++;
                                if (k == 0) {
                                    synergy++
                                };
                                if (l == 0) {
                                    synergy++
                                };
                            }
                        }
                    }
                }
            }
            return synergy;
        }
        var bingoBoard = [];
        var picked = [];
        for (var i = 1; i <= 25; i++) {
            bingoBoard[i] = {
                difficulty: difficulty(i)
            };
            picked[i] = [];
        }
        for (var i = 1; i <= 25; i++) {
            var getDifficulty = bingoBoard[i].difficulty;
            var RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
            if (RNG == bingoList[getDifficulty].length) {
                RNG--;
            };
            var j = 0,
                synergy = 0,
                currentObj = null,
                minSynObj = null,
                goalPicked = false;
            do {
                currentObj = bingoList[getDifficulty][(j + RNG) % bingoList[getDifficulty].length];
                synergy = checkLine(i, currentObj.types);
                goalPicked = picked[getDifficulty].includes(currentObj[LANG] || currentObj.name);
                if ((minSynObj == null || synergy < minSynObj.synergy) && !goalPicked) {
                    minSynObj = {
                        synergy: synergy,
                        value: currentObj
                    };
                    if (goalPicked) {
                        synergy = -1;
                    }
                }
                j++;
            } while ((synergy != 0) && (j < bingoList[getDifficulty].length));
            bingoBoard[i].types = minSynObj.value.types;
            bingoBoard[i].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[i].synergy = minSynObj.synergy;
            if ((MODE == "short" || MODE == "long") && bingoList[getDifficulty].length - picked[getDifficulty].length > 1) {
                picked[getDifficulty].push(bingoBoard[i].name);
            }
        }
        return bingoBoard;
    }
}

var bingoList = [];


bingoList[1] = [
    { name: "M字から青コイン15枚", types: ["M_Graffiti", "Ricco_M"] },
    { name: "アルバイトの青コイン3枚", types: ["Fruit_Ladies"] },
    { name: "赤コインのシャイン3枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Low_Reds"] },
    { name: "ドルピックタウンの青コイン12枚", types: ["Plaza_Blues", "Fruit_Ladies"] },
    { name: "リコハーバーの青コイン15枚", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_Shines"] },
    { name: "モンテのむらの100枚コイン", types: ["X100_Coins"] }
];
bingoList[2] = [
    { name: "ピンナパークの青コイン10枚", types: ["Pinna_Blues", "Pinna_10", "Pinna_30"] },
    { name: "マンマビーチの青コイン15枚", types: ["Gelato_Blues", "Fast_20"] },
    { name: "リコハーバーの青コイン20枚", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
    { name: "ビアンコヒルズの青コイン15枚", types: ["Bianco_Blues", "Bianco_Early"] },
    { name: "リコハーバーの100枚コイン", types: ["Ricco_100s", "Ricco_Early", "Ricco_Top", "Ricco_Shines"] },
    { name: "3ステージでコイン50枚（ドルピックタウン以外）", types: ["Ricco_100s", "X100_Coins", "Gelato_100s", "Bianco_100s"] }
];
bingoList[3] = [
    { name: "アルバイトの青コイン4枚", types: ["Fruit_Ladies"] },
    { name: "ビアンコ4 ポンプ禁止", types: ["Bianco_Early", "Bianco_Shines"] },
    { name: "ビアンコヒルズの隠しシャイン1枚", types: ["Bianco_Early", "Bianco_Hidden", "Bianco_Shines"] },
    { name: "双子ラクガキの青コイン5ペア", types: ["Linked_Blues"] },
    { name: "リコハーバー3 ポンプ禁止", types: ["Ricco_Top", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] },
    { name: "M字から青コイン22枚", types: ["M_Graffiti", "Ricco_M"] }
];
bingoList[4] = [
    { name: "青い鳥の青コイン5枚", types: ["Blue_Bird"] },
    { name: "ドルピックタウンの青コイン15枚", types: ["Plaza_Blues"] },
    { name: "ロケットノズル2つ解放", types: ["Rocket_Nozzle", "Bianco_Rocket", "Ricco_Rocket", "Noki_Rocket", "Pianta_Rocket", "Two_Rockets"] },
    { name: "ビアンコヒルズのシャイン5枚", types: ["Bianco_Rocket", "Bianco_Boss", "Bianco_Secret", "Bianco_Early", "Bianco_Late", "Bianco_Blues", "Bianco_Shines"] },
    { name: "リコハーバーの隠しシャイン1枚", types: ["Ricco_Top", "Ricco_Hidden", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] },
    { name: "マンマビーチのシャイン4枚", types: ["Gelato_5", "Wiggler", "Gelato_Early"] }
];
bingoList[5] = [
    { name: "木箱3のシャイン", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
    { name: "赤コインのシャイン4枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Bianco_Early", "Bianco_8", "Low_Reds"] },
    { name: "ピンナパークの青コイン15枚", types: ["Pinna_Blues", "Fast_20", "Pinna_Early", "Pinna_30", "Pinna_Shines"] },
    { name: "マンマビーチの青コイン20枚", types: ["Gelato_Early", "Gelato_Blues", "Wiggler", "Fast_20"] },
    { name: "マンマビーチの隠しシャイン2枚", types: ["Gelato_Early", "Gelato_Hidden"] },
    { name: "モンテ3をノーダメージでクリア", types: ["Goopy_Inferno", "Pianta_Shines"] }
];
bingoList[6] = [
    { name: "ドルピックでコイン150枚", types: ["Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza", "X100_Coins"] },
    { name: "リコハーバーの青コイン25枚", types: ["Ricco_Blues", "Blue_Enemies", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
    { name: "マンマビーチの100枚コイン", types: ["Gelato_100s", "Gelato_Early"] },
    { name: "ビアンコヒルズの100枚コイン", types: ["Bianco_100s", "Bianco_Early"] },
    { name: "NPCの青コイン7枚 (モンテ以外)", types: ["Fruit_Ladies", "Plaza_Blues", "NPC_Blues"] }
];
bingoList[7] = [
    { name: "マーレのいりえの青コイン10枚", types: ["Noki_Blues", "Noki_Early"] },
    { name: "ビアンコヒルズの青コイン20枚", types: ["Bianco_Early", "Bianco_Blues", "Bianco_Shines"] },
    { name: "ボスパックン撃破（ビアンコ5）", types: ["Bianco_Boss", "Bianco_Early", "Unique_Boss", "Bianco_Shines"] },
    { name: "シレナビーチの100枚コイン", types: ["Sirena_100s", "X100_Coins", "Sirena_Early"] },
    { name: "ボスハナチャン撃破（マンマ3）", types: ["Wiggler", "Gelato_Early"] },
    { name: "ピンナパークの100枚コイン", types: ["Pinna_100s", "Pinna_Hoverless"] }
];
bingoList[8] = [
    { name: "ヒミツステージのシャイン4枚", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden", "Plaza_Secret"] },
    { name: "チョロプーを2匹とも倒す", types: ["Noki_Early", "Pinna_Shines"] },
    { name: "ボス4体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss"] },
    { name: "ピンナパークの隠しシャイン1枚", types: ["Pinna_Early", "Pinna_Hidden", "Pinna_Yoshi", "Pinna_Shines"] },
    { name: "ヒミツ内部で100枚コインのシャイン取得", types: ["Secret_100s"] }
];
bingoList[9] = [
    { name: "ピンナ3ホバー禁止", types: ["Pinna_Hoverless", "Pinna_Yoshi", "Pinna_Shines", "Plaza_Yoshi"] },
    { name: "敵から青コイン5枚", types: ["Blue_Enemies", "Ricco_Top", "Ricco_Blues", "Ricco_Early", "XBoss_Shines", "M_Graffiti"] },
    { name: "ボス4種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss"] },
    { name: "隠しシャイン4枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Secret_Shines"] },
    { name: "赤コインのシャイン5枚", types: ["Red_Shines", "Hidden_Shines", "Low_Reds"] },
    { name: "残機20", types: ["X_Lives", "Pianta_Lives"] },
    { name: "残機25", types: ["X_Lives", "Pianta_Lives"] }
];
bingoList[10] = [
    { name: "青コイン合計30枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
    { name: "青コイン合計40枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "XTotal_Blues", "Blue_30"] },
    { name: "青コイン合計50枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "XTotal_Blues", "Blue_30"] },
    { name: "3ステージで青コイン15枚", types: ["XTotal_Blues", "High_Blues"] },
    { name: "2ステージで青コイン20枚（ドルピックタウン以外）", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "XTotal_Blues", "Blue_30"] }
];
bingoList[11] = [
    { name: "敵から青コイン5枚（リコハーバー以外）", types: ["Blue_Enemies", "Bianco_Early", "Bianco_Shines"] },
    { name: "敵から青コイン7枚", types: ["Blue_Enemies", "XBoss_Shines", "M_Graffiti"] },
    { name: "双子ラクガキの青コイン8ペア", types: ["Linked_Blues", "Pinna_10"] },
    { name: "2ステージでヨッシーに乗る（ドルピックタウン以外）", types: ["Pinna_Yoshi", "Three_Yoshi", "Pianta_Yoshi", "Sirena_Yoshi", "Pinna_Shines", "Bianco_Yoshi", "Ricco_Yoshi"] },
    { name: "ドルピックタウンのシャイン6枚", types: ["Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza", "Pianta_8", "Plaza_Secret", "LateS_Plaza"] },
    { name: "シレナビーチの青コイン12枚", types: ["Sirena_Blues", "Sirena_Early", "Three_Yoshi"] },
    { name: "ピンナパークの青コイン25枚", types: ["Pinna_Blues", "Pinna_Late", "Pinna_30", "Pinna_Yoshi"] }
];
bingoList[12] = [
    { name: "ボス5体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss", "5_Bosses"] },
    { name: "隠しシャイン5枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Secret_Shines", "Hidden_Plaza"] },
    { name: "マーレのいりえの青コイン20枚", types: ["Noki_Blues", "Noki_Early", "Noki_20", "LateG_Noki"] },
    { name: "シレナビーチの隠しシャイン1枚", types: ["Sirena_Hidden", "Sirena_Early"] },
    { name: "リコハーバー6ゲッソーに乗るの禁止", types: ["Ricco_Top", "Ricco_Early", "Ricco_6", "Ricco_100s", "Ricco_Shines"] },
    { name: "モンテのむらのヨッシーに乗る", types: ["Pianta_6", "Pianta_Yoshi", "Pianta_Butterfly", "Pianta_Lives", "LateP_LateG", "LateP_LateS", "Gelato_Yoshi"] },
    { name: "ヒップドロップ6種類のボタン", types: ["Hidden_Shines", "Gelato_Hidden", "Pinna_Hoverless", "Ricco_6", "Ricco_Hidden"] }
];
bingoList[13] = [
    { name: "ノズル4つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Noki_Rocket", "Three_Rockets", "Pianta_Rocket", "Gelato_Turbo", "Turbo_Nozzle", "Bianco_Turbo", "Ricco_Turbo", "Sirena_Late"] },
    { name: "赤コインのシャイン6枚", types: ["Red_Shines", "Hidden_Shines", "Low_Reds"] },
    { name: "リコハーバーの隠しシャイン2枚", types: ["Ricco_Hidden", "Ricco_Early", "Ricco_6"] },
    { name: "モンテのむらのシャイン6枚", types: ["Pianta_Late", "Pianta_8", "Pianta_Lives", "Pianta_6", "Pianta_Shines"] },
    { name: "大砂鳥のシャインを取得", types: ["Wiggler", "Gelato_5", "Paint_Race"] },
    { name: "ドルピックタウンのシャイン9枚", types: ["Plaza_Shines", "Shadow_Plaza", "Hidden_Plaza", "Plaza_Mix_Up", "Pianta_8", "Plaza_Secret", "Plaza_G8", "Plaza_Rocket", "LateS_Plaza", "HighBlue_Plaza"] },
    { name: "ピンナ5を裏側からホバー禁止でクリア", types: ["Pinna_Hoverless", "Pinna_Early", "Pinna_Butterfly", "Pinna_Shines", "Plaza_Yoshi"] }
];
bingoList[14] = [
    { name: "5ステージで青コイン12枚", types: ["XTotal_Blues", "High_Blues"] },
    { name: "青コイン合計60枚", types: ["XTotal_Blues", "High_Blues"] },
    { name: "青コイン合計65枚", types: ["XTotal_Blues", "High_Blues"] },
    { name: "青コイン合計70枚", types: ["XTotal_Blues", "High_Blues", "HighBlue_Plaza"] },
    { name: "青コイン合計75枚", types: ["XTotal_Blues", "High_Blues"] },
    { name: "青コイン合計80枚", types: ["XTotal_Blues", "High_Blues"] }
];
bingoList[15] = [
    { name: "NPCの青コイン10枚", types: ["Pianta_6", "LateP_LateS", "Noki_Early", "Fruit_Ladies", "NPC_Blues"] },
    { name: "残機30", types: ["X_Lives", "Pianta_Lives", "100_Lives", "LateN_Lives"] },
    { name: "残機35", types: ["X_Lives", "Pianta_Lives", "100_Lives", "LateN_Lives"] },
    { name: "残機40", types: ["X_Lives", "Pianta_Lives", "100_Lives", "LateN_Lives", "Gelato_Lives"] },
    { name: "ビアンコヒルズの青コイン25枚", types: ["Bianco_30", "Bianco_Early", "Bianco_Blues"] },
    { name: "ビアンコヒルズのニセマリオ撃破", types: ["Bianco_Shadow", "Bianco_Late", "Bianco_Shines", "Bianco_8", "Multi_Shadow"] },
    { name: "ヒミツステージのシャイン5枚", types: ["Secret_Shines", "Hidden_Shines", "Secret_Count", "Plaza_Secret", "Ricco_Secret", "Pianta_Secret", "Gelato_Secret"] },
    { name: "モンテのむらの隠しシャイン1枚", types: ["Pianta_Hidden", "Pianta_Shines", "Pianta_Lives", "LateP_LateG"] }
];
bingoList[16] = [
    { name: "金の鳥のシャインを2枚取得", types: ["Noki_Early", "Noki_Hidden", "Noki_Rocket"] },
    { name: "マンマビーチの青コイン25枚", types: ["Gelato_Blues", "Wiggler", "Paint_Race", "LateG_LateN"] },
    { name: "モンテのむらの青コイン20枚", types: ["Pianta_Blues", "Pianta_Late", "Pianta_Butterfly", "Pianta_Yoshi", "Pianta_Shines", "Pianta_Lives"] },
    { name: "モンテのむらのニセマリオ撃破", types: ["Pianta_Late", "Pianta_Shadow", "Pianta_8", "Pianta_Lives", "Pianta_Yoshi", "Pianta_6", "LateP_LateS", "LateP_LateG", "Pianta_Rocket", "Pianta_Secret", "NPC_Blues"] },
    { name: "ボス6体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss"] },
    { name: "シレナビーチの青コイン20枚", types: ["Sirena_Early", "Sirena_Blues", "Sirena_20"] },
    { name: "リコハーバーのニセマリオ撃破", types: ["Ricco_Shadow", "Ricco_Late", "Ricco_Shines", "Ricco_8", "Ricco_Turbo"] },
    { name: "リコハーバーストーリー8", types: ["Ricco_8", "Ricco_Late", "Ricco_Yoshi", "Ricco_Shines", "2EP_8", "Ricco_Turbo", "Ricco_Secret"] }
];
bingoList[17] = [
    { name: "ロケットノズル3つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Noki_Rocket", "Three_Rockets", "Pianta_Rocket"] },
    { name: "ボス5種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss", "Pianta_6", "Unique_Gelato"] },
    { name: "ドルピックでシャイン12枚(青換金可)", types: ["Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza", "Pianta_8", "Plaza_Secret", "Plaza_Rocket", "LateS_Plaza", "Noki_100s"] },
    { name: "ピンナパークのシャイン6枚", types: ["Pinna_Yoshi", "Pinna_Butterfly", "Pinna_6", "Pinna_Hoverless", "Pinna_Shines", "Four_Rockets"] },
    { name: "ビアンコヒルズストーリー8", types: ["Bianco_Shadow", "Bianco_Late", "Bianco_Yoshi", "Bianco_Shines", "Bianco_8", "2EP_8", "Sirena_Late"] },
    { name: "ボスゲッソーを3体全て倒す", types: ["Noki_Early", "XBoss_Shines", "Ricco_6", "Ricco_Shadow", "Sirena_Late"] },
    { name: "マーレのいりえの100枚コイン", types: ["Noki_100s", "Noki_20"] }
];
bingoList[18] = [
    { name: "各ステージからシャインを1枚ずつ取得（ドルピックタウン以外）", types: ["Mix_Up", "Shadow_Mix_Up", "Single_Mix_Up"] },
    { name: "ビアンコヒルズの隠しシャイン2枚", types: ["Bianco_Hidden", "Bianco_Late", "Blue_Bird", "Bianco_Yoshi", "Bianco_Shines"] },
    { name: "5つのステージからシャイン2枚ずつ取得（ドルピックタウン以外）", types: ["Mix_Up", "Plaza_Mix_Up", "Single_Mix_Up"] },
    { name: "ターボノズル2つ解放", types: ["Gelato_Turbo", "Turbo_Nozzle", "Bianco_Turbo", "Ricco_Turbo", "Sirena_Late"] },
    { name: "青い鳥の青コイン7枚", types: ["Blue_Bird"] },
    { name: "モンテのむらの青コイン25枚", types: ["Pianta_Blues", "Pianta_30", "Pianta_Shines", "Pianta_Lives", "Sirena_Late", "Pianta_Butterfly"] }
];
bingoList[19] = [
    { name: "ニセマリオ2体撃破", types: ["Shadow_Mario", "Bianco_Shadow", "Gelato_Shadow", "Ricco_Shadow", "Pianta_Shadow", "Shadow_Plaza", "Shadow_Mix_Up"] },
    { name: "100枚コインのシャイン3枚", types: ["X100_Coins", "Bianco_100s", "Ricco_100s", "Gelato_100s", "Pinna_100s", "Sirena_100s", "Noki_100s", "Secret_100s", "100_Lives"] },
    { name: "モンテマンレース2つ", types: ["Paint_Race", "Wiggler", "Pinna_Paint"] },
    { name: "3つのステージからシャイン5枚ずつ取得（ドルピックタウン以外）", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Single_Mix_Up"] },
    { name: "シレナビーチのシャイン5枚", types: ["Sirena_5", "Sirena_Yoshi"] },
    { name: "隠しシャイン6枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Pianta_Hidden", "Secret_Shines", "Hidden_Plaza"] }
];
bingoList[20] = [
    { name: "モンテのむらストーリー8", types: ["Pianta_8", "Pianta_Shadow", "Pianta_6", "Pianta_Shines", "Pinna_Shadow", "Gelato_Shadow", "2EP_8", "LateP_LateG", "Pianta_Late", "NPC_Blues"] },
    { name: "シャイン25枚", types: ["Total_Shines", "X_Lives", "Slow_Awful"] },
    { name: "4つのステージからシャイン4枚ずつ取得（ドルピックタウン以外）", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Single_Mix_Up"] },
    { name: "ピンナパークのニセマリオ撃破", types: ["Pinna_Shadow", "Pinna_6", "Pinna_Shines", "Four_Rockets"] },
    { name: "任意の1ステージからシャイン9枚取得（ドルピックタウン以外）", types: ["Ricco_8", "Pianta_Lives", "Bianco_8", "Gelato_8", "Pinna_8", "Pianta_8", "9_S", "Single_Mix_Up"] },
    { name: "10回土管に入りその先でシャイン回収", types: ["Pianta_8", "Sirena_5", "Pianta_Shadow", "Pianta_6", "LateP_LateS", "NPC_Blues"] }
];
bingoList[21] = [
    { name: "マンマビーチのニセマリオ撃破", types: ["Gelato_Late", "Gelato_5", "Gelato_Shadow", "Sirena_8", "Gelato_8", "Noki_Paint", "Plaza_G8", "Multi_Shadow", "LateG_Noki", "Slow_Awful", "Gelato_Yoshi", "Unique_Gelato"] },
    { name: "赤コインのシャイン7枚", types: ["Red_Shines"] },
    { name: "ビアンコヒルズのヨッシーに乗る", types: ["Bianco_Yoshi", "Bianco_8", "Bianco_30", "Ricco_Shadow", "Noki_Paint"] },
    { name: "敵から青コイン9枚", types: ["Blue_Enemies", "Ricco_Blues"] },
    { name: "ベルのシャインを2枚取得", types: ["Plaza_Shines", "Plaza_Yoshi", "Pinna_6", "No_Clip"] },
    { name: "灯台シャイン", types: ["Plaza_Shines", "Plaza_Yoshi", "Pinna_6", "No_Clip"] },
    { name: "毒川のシャイン取得（果物壁抜け禁止）", types: ["Plaza_Shines", "Plaza_Yoshi", "No_Clip"] }
];
bingoList[22] = [
    { name: "シレナビーチの隠しシャイン2枚", types: ["Sirena_Hidden", "Sirena_Late", "Sirena_5", "Three_Rockets"] },
    { name: "ピンナパークの隠しシャイン2枚", types: ["Pinna_Hidden", "Pinna_Late", "Pinna_Shines", "Turbo_Nozzle"] },
    { name: "シレナ3すり抜けバグ禁止", types: ["Sirena_Late", "Pinna_Yoshi", "Three_Rockets", "Sirena_Yoshi", "No_Clip"] },
    { name: "シャイン27枚", types: ["Total_Shines", "X_Lives", "Slow_Awful"] },
    { name: "マーレのいりえのシャイン4枚", types: ["Noki_Late", "Slow_Awful"] },
    { name: "任意の1ステージからシャイン10枚取得（ドルピックタウン以外）", types: ["Ricco_8", "Pianta_Lives", "Bianco_8", "Gelato_8", "Pinna_8", "9_S", "Single_Mix_Up", "Secret_Count", "Pianta_Late"] }
];
bingoList[23] = [
    { name: "ピンナパークストーリー8", types: ["Pinna_8", "Pinna_Late", "Pinna_Shines", "Gelato_8", "2EP_8", "Pinna_Paint"] },
    { name: "ボステレサ撃破", types: ["Sirena_5", "Sirena_Late", "Sirena_8", "Sirena_Boss", "Pianta_Shadow", "LateP_LateS", "Three_Rockets"] },
    { name: "2つのステージからシャイン8枚ずつ取得（ドルピックタウン以外）", types: ["Shadow_Mario", "Shadow_Plaza", "Ricco_8", "Bianco_8", "Gelato_8", "Pinna_8", "9_S"] },
    { name: "マンマビーチストーリー8", types: ["Gelato_8", "Gelato_Shadow", "Gelato_5", "Plaza_G8", "2EP_8", "Noki_Paint", "LateP_LateG", "LateG_Noki", "Sirena_8", "Gelato_Lives", "Gelato_Secret", "Gelato_Yoshi"] },
    { name: "モンテのむらの隠しシャイン2枚", types: ["Pianta_Late", "Pianta_Hidden", "Pianta_8", "Pianta_Shines", "9_S", "Low_Reds", "Pianta_Lives", "Pianta_Shadow", "Two_Rockets", "LateP_LateS", "Pianta_Secret"] }
];
bingoList[24] = [
    { name: "ヒミツステージのシャイン6枚", types: ["Secret_Shines", "Secret_Count", "Plaza_Secret", "Ricco_Secret"] },
    { name: "シレナビーチのニセマリオ撃破", types: ["Sirena_Shadow", "Sirena_Late", "Rocket_Nozzle", "Multi_Shadow", "Bianco_Yoshi", "Slow_Awful", "LateP_LateS", "LateS_Plaza"] },
    { name: "蝶の青コイン4枚", types: ["Pinna_Butterfly", "Blue_Bird", "Pianta_Butterfly"] },
    { name: "1ステージから青コイン30枚取得", types: ["Ricco_30", "Bianco_30", "Pinna_30", "Pianta_30", "Blue_30", "Secret_Count", "Pinna_6"] },
    { name: "3ステージでヨッシーに乗る（ドルピックタウン以外）", types: ["Pianta_6", "Pianta_Yoshi", "X_Lives", "Plaza_Shines", "5_Bosses", "Three_Yoshi"] },
    { name: "赤コインのシャイン8枚", types: ["Red_Shines"] }
];
bingoList[25] = [
    { name: "ウナギ撃破（マーレ4）", types: ["Noki_Late", "LateN_Lives"] },
    { name: "マンマビーチのヨッシーに乗る", types: ["X_Lives", "LateP_LateG", "Ricco_Late", "Slow_Awful"] },
    { name: "ロケットノズル4つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Four_Rockets", "Three_Rockets", "Plaza_Rocket", "Gelato_Yoshi"] },
    { name: "シレナビーチストーリー8", types: ["Sirena_8", "Sirena_Late", "Paint_Race", "2EP_8", "Blue_Bird", "LateP_LateS", "LateS_Plaza", "Slow_Awful"] },
    { name: "マーレのいりえの青コイン25枚", types: ["Noki_Late", "Noki_Blues", "LateG_LateN"] },
    { name: "ターボノズル3つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Noki_Rocket", "Three_Rockets", "Pianta_Rocket", "Gelato_Turbo", "Turbo_Nozzle", "Bianco_Turbo", "Ricco_Turbo", "Sirena_Late"] }
];

searchSeed = function () {
    var includeText = ["","","","",""];
    var excludeText = ["","","","",""];
    var includeNum = ["","","","",""];
    var excludeNum = ["","","","",""];
    var includeCheck = [false,false,false,false,false];
    var excludeCheck = [false,false,false,false,false];
    for (c=1;c<=5;c++) {
        includeText[c-1] = document.getElementById(`includeText${c}`).value || "";
        excludeText[c-1] = document.getElementById(`excludeText${c}`).value || "";
        includeNum[c-1] = document.getElementById(`includeNum${c}`).value || "0";
        excludeNum[c-1] = document.getElementById(`excludeNum${c}`).value || "25";
        includeCheck[c-1] = document.getElementById(`includeCheck${c}`).checked || false;
        excludeCheck[c-1] = document.getElementById(`excludeCheck${c}`).checked || false;
    }
    document.getElementById("results").innerHTML = `<p>検索中</p>`;
    var longStr = "";
    for (r=3000;r<=3500;r++) {
        console.log(`r=${r} start`);
        const bingoBoard = bingoGenerator(bingoList, { seed: `${r}` });
        console.log(bingoBoard);
        var str = `<table border="1" style="border-collapse: collapse; table-layout: fixed; width: 100%;">`;
        var includeCount = [0,0,0,0,0];
        var excludeCount = [0,0,0,0,0];
        var satisfyConditions = true;
        for (i=1;i<=5;i++) {
            str += `<tr style="height: 3em;">`;
            for (j=1;j<=5;j++) {
                var name = bingoBoard[(i-1)*5+j]?.name;
                var isRed = false;
                var isBlue = false;
                for (c=1;c<=5;c++) {
                    if (includeCheck[c-1] && name.indexOf(includeText[c-1]) !== -1) {
                        includeCount[c-1] += 1;
                        isRed = true;
                    }
                    if (excludeCheck[c-1] && name.indexOf(excludeText[c-1]) !== -1) {
                        excludeCount[c-1] += 1;
                        isBlue = true;
                    }
                }
                if (isRed) {
                    str += `<td style="background: #ffdddd;">` + bingoBoard[(i-1)*5+j]?.name + "</td>";
                } else if (isBlue) {
                    str += `<td style="background: #ddddff;">` + bingoBoard[(i-1)*5+j]?.name + "</td>";
                } else {
                    str += "<td>" + bingoBoard[(i-1)*5+j]?.name + "</td>";
                }
            }
            str += "</tr>";
        }

        for (c=1;c<=5;c++) {
            if (includeCheck[c-1] && includeCount[c-1]<includeNum[c-1]) {
                satisfyConditions = false;
            }
            if (excludeCheck[c-1] && excludeCount[c-1]>excludeNum[c-1]) {
                satisfyConditions = false;
            }
        }
        if (document.getElementById(`showAll`).checked || satisfyConditions) {
            if (satisfyConditions) {
                longStr += `<p><b>シード=${r}</b>, `;
            } else {
                longStr += `<p>シード=${r}, `;
            }
            str += "</table>";
            for (c=1;c<=5;c++) {
                if (includeCheck[c-1]) {
                    if (includeCount[c-1]>=includeNum[c-1]) {
                        longStr += `<span style="color: red;"><b>条件${c}:${includeCount[c-1]}個</b></span>,`;
                    } else {
                        longStr += `<span style="color: red;">条件${c}:${includeCount[c-1]}個</span>,`;
                    }
                }
            }
            for (c=1;c<=5;c++) {
                if (excludeCheck[c-1]) {
                    if (excludeCount[c-1]<=excludeNum[c-1]) {
                        longStr += `<span style="color: blue;"><b>条件${c}:${excludeCount[c-1]}個</b></span>,`;
                    } else {
                        longStr += `<span style="color: blue;">条件${c}:${excludeCount[c-1]}個</span>,`;
                    }
                }
            }
            if (!document.getElementById(`hideCheck`).checked) {
                longStr += str;
            }
        }
        console.log(`r=${r} end, ${satisfyConditions}, ${includeCount}, ${excludeCount}`);
    }
    console.log(longStr);
    console.log(includeCheck);
    console.log(excludeCheck);
    document.getElementById("results").innerHTML = longStr;
};
