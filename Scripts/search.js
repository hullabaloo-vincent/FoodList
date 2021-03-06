var itemNames = "ALMOND;ALOE VERA;ANCHOVY;ANISE; APPLE; APRICOT; ARTICHOKE; ARUGULA; ASPARAGUS; AVOCADO; BAKING  POWDER; BAMBOO SHOOTS; BANANA; BARLEY; BASIL; BAY LEAF; BEAN,  FAVA; BEAN,  GREEN; BEAN,  KIDNEY; BEAN,  LIMA; BEAN,  MUNG; BEAN,  NAVY; BEEF; BEET; BLACK CURRANT; BLACKBERRY; BLUEBERRY; BRAN; BRANZINO; BRAZIL  NUT; BROCCOLI; BRUSSELS SPROUT; BUCKWHEAT; BUTTER; CABBAGE; CANTALOUPE; CAPER; CAROB; CARP; CARROT; CASEIN; CASHEW; CAULIFLOWER; CELERY; CHAMOMILE; CHARD; CHEESE,  CHEDDAR; CHEESE,  COTTAGE; ; CHEESE,  EMMENTAL; CHEESE,  GOATS; CHEESE,  MOZZARELLA; CHEESE,  PROCESSED; CHEESE,  SHEEPS; CHERRY; CHESTNUT; CHIA  SEED; CHICKEN; CHICKPEA; CHICORY; CHIVE; CILANTRO; CINNAMON; CLAM; CLOVES; COCOA; COCONUT; CODFISH; COFFEE; COLA; CORN; CRAB; CRANBERRY; CRAYFISH; CUCUMBER; CUMIN; CURRY; DATE; DILL; DUCK; EEL; EGG  WHITE; EGG YOLK; EGGPLANT; FENNEL; FIG; FLAXSEED; GARLIC; GINGER; GLUTEN; GOOSEBERRY; GRAPE; GRAPE LEAF; GRAPEFRUIT; HADDOCK; HAZELNUT; HERRING; HONEY; HONEYDEW MELON; HOPS; HORSERADISH; JERUSALEM  ARTICHOKE; KALE; KEFIR; KELP; KEY  LIME; KIWI; LAMB; LEEK; LEMON; LENTIL; LETTUCE; ; LETTUCE,  BUTTER; LICORICE  ROOT; LOBSTER; LYCHEE; MACADAMIA; MACKEREL; MALT; MANGO; MARJORAM; MILK,  COWS; MILK,  GOATS; MILK,  SHEEPS; MILLET; MINT; MUSHROOM; MUSTARD; NECTARINE; NUTMEG; OATS; OCTOPUS; OLIVE,  GREEN; ONION; ORANGE; OREGANO; OYSTER; PAPAYA; PARSLEY; PEA,  GREEN; PEACH; PEANUT; PEAR; PEPPER,  BELL; PEPPER,  BLACK; PEPPER,  CAYENNE; PEPPER,  CHILI; PEPPERMINT; PERCH; PIKE; PINE  NUT; PINEAPPLE; PISTACHIO; PLUM; POMEGRANATE; POPPY SEED; PORK; POTATO,  SWEET; POTATO,  WHITE; PRAWN; QUAIL; RADISH; RAISIN; RAPESEED; RASPBERRY; RED CABBAGE; RICE,  BROWN; ROSEMARY; RYE; SAFFLOWER; SAFFRON; SAGE; SALMON; SCALLOP; SESAME; SHALLOT; SHIITAKE  MUSHROOM; SHRIMP; SNOW PEA; SOLE; SOYBEAN; SPELT; SPINACH; SQUASH; SQUID; STRAWBERRY; SUNFLOWER; SWORDFISH; TARRAGON; TEA,  BLACK; THYME; TOMATO; TROUT; TUNA; TURKEY; TURNIP; VANILLA; WALNUT,  BLACK; WATERMELON; WHEAT; WHEY; YEAST,  BAKERS; YEAST,  BREWERS; YOGURT; ZUCCHINI; ";
var tagNames = itemNames.split(';'); //converts string itemNames into an array
var scores = "45;2;4;59;68;2;33;9;26;8;0;103;1;25;10;3;55;19;40;31;25;109;26;6;24;1;36;44;3; 58; 16; 20; 42; 46; 13; 22; 4; 1; 2; 19; 64; 116; 9; 19; 12; 0; 9; 22; 76; 44; 45; 92; 48; 36; 17; 6; 23; 36; 10; 16; 9; 4; 5; 39; 27; 30; 4; 23; 1; 10; 9; 14; 4; 11; 10; 35; 11; 4; 4; 6; 171; 120; 52; 34; 35; 1; 59; 32; 90; 13; 26; 26; 10; 3; 7; 5; 9; 10; 11; 26; 8; 42; 39; 14; 63; 16; 26; 17; 11; 82; 31; ; 16; 7; 4; 12; 91; 5; 2; 5; 66; 109; 55; 37; 36; 7; 58; 150; 17; 0; 47; 6; 11; 18; 22; 18; 9; 6; 8; 84; 7; 119; 12; 29; 4; 24; 9; 28; 4; 28; 59; 14; 88; 49; 24; 16; 4; 12; 32; 12; 3; 4; 47; 83; 7; 23; 8; 18; 61; 15; 30; 8; 12; 2; 8;";
var tagScores = scores.split(';'); //converts string scores into an array
var savedObj = "";
var color_r, color_g, color_b = "";
var isOpen = false;

var percentColors = [
    { pct: 0.0, color: { r: 0x00, g: 0xff, b: 0  } },
    { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
    { pct: 1.0, color: { r: 0xff, g: 0x00, b: 0  } } ];


function closeModal(closeID) {
    if (closeID === 1) {
        var modal = document.getElementById('docPopup');
        modal.style.display = "none";
        document.getElementById("round").style.visibility = "visible";
    }
}
function openDoc() {
    if (isOpen) {
        var modal = document.getElementById('docPopup');
        modal.style.display = "none";
    } else {
        var modal = document.getElementById('docPopup');
        modal.style.display = "block";
        document.getElementById("round").style.visibility = "hidden";
    }
}

function removeIcon() {
    savedObj = "";
    var value = document.getElementById('dataSearch').value.toUpperCase();
    for (var i = 0; i <= tagNames.length - 1; i++) {
        var tmp = tagNames[i];
        tmp = tmp.toUpperCase();
        if (tmp.indexOf(value) > -1) {
            savedObj = savedObj + "<option onclick='hello();' value=\"" + tagNames[i] + "\">";
            if (value === tagNames[i]){
                choose(tagNames[i], i);
            }
        }
    }
    if (savedObj === ""){
        noMatch();
    }
    $("#allArt").html("<datalist id=\"allArt\">" + savedObj + "</datalist>");
}

function choose(objName, objIndex){

    // RED (100+)        214, 77, 77
    // DARK ORANGE (85+)  214. 134. 77
    // DARK YELLOW (60+)  214, 189, 77
    // YELLOW (50+)        214, 214, 77
    // YELLOW-GREEN (40+) 189, 214, 77
    // SOFT GREEN (30+)   150, 214, 77
    // GREEN (15+)        93, 214, 77
    // BLUE GREEN (0+)   77, 214, 123

    var color_r, color_g, color_b;
    if (tagScores[objIndex] >= 0){color_r = 77; color_g = 214; color_b = 123;}
    if (tagScores[objIndex] >= 15){color_r = 93; color_g = 214; color_b = 77;}
    if (tagScores[objIndex] >= 30){color_r = 150; color_g = 214; color_b = 77;}
    if (tagScores[objIndex] >= 40){color_r = 189; color_g = 214; color_b = 77;}
    if (tagScores[objIndex] >= 50){color_r = 214; color_g = 214; color_b = 77;}
    if (tagScores[objIndex] >= 60){color_r = 214; color_g = 189; color_b = 77;}
    if (tagScores[objIndex] >= 85){color_r = 214; color_g = 134; color_b = 77;}
    if (tagScores[objIndex] >= 100){color_r = 214; color_g = 77; color_b = 77;}

    var color = rgbToHex(color_r, color_g, color_b);

    if (objName === ""){
        noMatch()
    }else {
        var informativeText_1 = "";
        var informativeText_2 = "";
        if (tagScores[objIndex] >= 50){
            informativeText_1 = "No. ";
            informativeText_2 = " is not good for Taite to eat."
        }else{
            informativeText_1 = "Yes. ";
            informativeText_2 = " is alright for Taite to eat."
        }
        let readMoreButton = document.querySelectorAll(".courseButtons");
        readMoreButton[0].style.display = 'block';
        $("#chosenFood").html("<h2 style=\"color:" + color + "\"id=\"chosenFood\">" + informativeText_1 + " " + objName + informativeText_2 + "</h2><br><h3>Any food that scores over a 50 is considered abnormal and should be avoided. " + objName + " scored a " + tagScores[objIndex] + ".</h3>");
    }
}

/* ---If no match from the user's query is found---*/
function noMatch(){
   var noMatchStr = "Not on list, should be okay";
   $("#chosenFood").html("<h1 id=\"chosenFood\">" + noMatchStr + "</h1>");
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

/* ---Scale of 0-100 gradient scale---*/
/* ---DEPRECATED--- */
function getColorForPercentage(pct){
    if (pct > 100){
        pct = 100;
    }
    for (var i = 1; i < percentColors.length - 1; i++) {
        if (pct < percentColors[i].pct) {
            break;
        }
    }
    var lower = percentColors[i - 1];
    var upper = percentColors[i];
    var range = upper.pct - lower.pct;
    var rangePct = (pct - lower.pct) / range;
    var pctLower = 1 - rangePct;
    var pctUpper = rangePct;
    var color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    color_r = color.r;
    color_g = color.g;
    color_b = color.b;
}

/* ---RGB values to HEX conversion---*/
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}